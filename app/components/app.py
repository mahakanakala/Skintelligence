from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend_products():
    # Your recommendation logic here
    # Return a sample response for testing
    return jsonify({
        'Name': 'Sample Product',
        'Brand': 'Sample Brand',
        'Price': 50.0
    })

if __name__ == '__main__':
    app.run(debug=True)
