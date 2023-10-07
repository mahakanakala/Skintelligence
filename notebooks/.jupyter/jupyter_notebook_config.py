from traitlets.config import get_config

c = get_config()

import os
from subprocess import check_call
import glob
import datetime
import re

def timestamped_file(fname):
    return bool(re.match('.*\d{4}-\d{2}-\d{2}\.ipynb', fname))

def post_save(model, os_path, contents_manager):
    if model['type'] != 'notebook':
        return  # only do this for notebooks

    # Post-save hook for converting notebooks to .py scripts
    d, fname = os.path.split(os_path)
    if not timestamped_file(fname):
        check_call(['jupyter', 'nbconvert', '--to', 'script', fname], cwd=d)
        check_call(['jupyter', 'nbconvert', '--to', 'html', fname], cwd=d)

    # Post-save hook for saving datestamped versions of the notebook
    notebooks = glob.glob('*.ipynb') + glob.glob('jupyter-notebooks/*.ipynb')
    if notebooks:
        latest_mod_file = max(notebooks, key=os.path.getctime)
        # Don't do this for datestamped notebooks
        if not timestamped_file(latest_mod_file):
            date = datetime.datetime.now().strftime('%Y-%m-%d')
            fname_without_extension = os.path.splitext(latest_mod_file)[0]
            new_fname = '{}_{}.ipynb'.format(fname_without_extension, date)
            new_path = os.path.join(d, new_fname)
            os.rename(os_path, new_path)

# c.FileContentsManager.post_save_hook = post_save
