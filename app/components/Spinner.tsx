import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styles from '../page.module.css';
import { AiFillGithub } from 'react-icons/ai';

const Spinner = () => {
  const spinners = [
    {
      image: '/images/low_hazard_toxins.png',
      title: '62 Products with Low Hazard Toxins',
      hazardName: 'Low Hazard',
      description: 'Ingredients that may cause allergies, minor environmental harm, or irritation.',
    },
    {
      image: '/images/moderate_hazard_toxins.png',
      title: '670 Products with Moderate Hazard Toxins',
      hazardName: 'Moderate Hazard',
      description: 'Ingredients that act as endocrine disruptors or mimic estrogen, potentially affecting hormonal balance.',
    },
    {
      image: '/images/high_hazard_toxins.png',
      title: '29 Products with High Hazard Toxins',
      hazardName: 'High Hazard',
      description: 'Ingredients with potential carcinogenic, mutagenic, or severe environmental impact.',
    },
  ];

  const [currentSpinner, setCurrentSpinner] = useState(spinners[0].image);
  const [spinnerIndex, setSpinnerIndex] = useState(0);

  const handleNextSpinner = () => {
    const nextIndex = (spinnerIndex + 1) % spinners.length;
    setCurrentSpinner(spinners[nextIndex].image);
    setSpinnerIndex(nextIndex);
  };

  const handlePrevSpinner = () => {
    const prevIndex = (spinnerIndex - 1 + spinners.length) % spinners.length;
    setCurrentSpinner(spinners[prevIndex].image);
    setSpinnerIndex(prevIndex);
  };

  const handleSpinnerClick = (index: number) => {
    setCurrentSpinner(spinners[index].image);
    setSpinnerIndex(index);
  };

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.arrowsAndBox}>
        <IoIosArrowBack className={styles.backArrow} onClick={handlePrevSpinner} />
        <div className={styles.dataVisual}>
          <img src={currentSpinner} alt="Spinner" className={styles.spinnerImage} />
        </div>
        <IoIosArrowForward className={styles.forwardArrow} onClick={handleNextSpinner} />
      </div>
      <div className={styles.spinnerContent}>
        <div className={styles.spinnerCircles}>
          {spinners.map((spinner, index) => (
            <div
              key={index}
              className={`${styles.circle} ${spinnerIndex === index ? styles.activeCircle : ''}`}
              onClick={() => handleSpinnerClick(index)}
            />
          ))}
        </div>
        <div className={styles.spinnerText}>
          <h4 className={styles.spinnerTitle}>{spinners[spinnerIndex].title}</h4>
          <h3 className={styles.hazardName}>{spinners[spinnerIndex].hazardName}</h3>
          <p className={styles.spinnerDescription}>{spinners[spinnerIndex].description}
          </p>
          <div className={styles.spinnerGithubIconContainer}>
            <a href="https://github.com/mahakanakala/skintelligence" target="_blank" rel="noopener noreferrer">
            View on Github
              <AiFillGithub />
              </a>
          </div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.yellowCircle} onClick={() => handleSpinnerClick(0)} />
          <div className={styles.orangeCircle} onClick={() => handleSpinnerClick(1)} />
          <div className={styles.redCircle} onClick={() => handleSpinnerClick(2)} />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
