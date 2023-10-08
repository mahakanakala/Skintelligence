"use client"
import styles from '../page.module.css';
import React from 'react';
import Recommendation from '../components/recommendation';

export default function Stats() {
  return (
    <main className={styles.wrapperMain}>
      <div className={styles.statsContainer}>
              {/* <h1 className={styles.smallWebTitle}>Give me a Routine!</h1> */}
              <Recommendation />
      </div>
        
    </main>
  );
}
