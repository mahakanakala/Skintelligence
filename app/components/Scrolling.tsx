import React from 'react';
import Slide from 'react-awesome-reveal';
import styles from '../page.module.css';

const Scrolling = () => {
  return (
    <div className={styles.scrollContainer}>
      <Slide cascade damping={.2} >
        <div className={`${styles.toxicitylow} ${styles.toxinContainer}`}>
          <hr className={styles.topline} />
          <div className={styles.toxinlowname}>
            <h2 className={styles.toxinText}>
              FORMALDEHYDE ETHANOLAMINE OXYBENZONE RESORCINOL DEITHANOLAMINE SILOXANE OCTINOXATE SODIUM LAURETH SULFATE
            </h2>
          </div>
          <hr className={styles.bottomline} />
        </div>
      </Slide>
      <Slide cascade delay={500} damping={.5} >
        <div className={`${styles.toxicitymod} ${styles.toxinContainer}`}>
          <hr className={styles.topline} />
          <div className={styles.toxinmodname}>
            <h2 className={styles.toxinText}>
              FRAGRANCE OCTINOXATE HOMOSALATE PARFRUM TEFLON FRAGRANCE OCTINOXATE HOMOSALATE TEFLON
            </h2>
          </div>
          <hr className={styles.bottomline} />
        </div>
      </Slide>
      <Slide cascade delay={1000} damping={.8} >
        <div className={`${styles.toxicityhigh} ${styles.toxinContainer}`}>
          <hr className={styles.topline} />
          <div className={styles.toxinhighname}>
            <h2 className={styles.toxinText}>
              TALC PARABENS BHA BHT POLYETHYLENE GLYCOLS TALC PARABENS BHA BHT POLYETETHYENE
            </h2>
          </div>
          <hr className={styles.bottomline} />
        </div>
      </Slide>
    </div>
  );
};

export default Scrolling;
