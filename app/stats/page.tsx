"use client"
import styles from '../page.module.css';
import React from 'react';
import Spinner from '../components/Spinner';

export default function Stats() {
  return (
    <main className={styles.wrapperMain}>
      <div className={styles.statsContainer}>
        <h1 className={styles.smallWebTitle}>Stats</h1>
      </div>
        <Spinner />
    </main>
  );
}
