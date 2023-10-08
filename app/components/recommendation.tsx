'use client';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../page.module.css';

const SkincareRecommendation: React.FC = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/recommendation/get');
        setRecommendedProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className={styles.quizContainer}>
      <div className={styles.question1Img}>
        <div className={styles.question1}>
          <h1 className={styles.mainQuestion}>Build a routine! <br/> </h1>
          <h4 className={styles.quizDescription}>Build a skincare routine with clean products</h4>
        </div>
        <div className={styles.question1Options}>
          <ul className={styles.quizOptions}>
            <li>
              <button className={styles.formButton} type="button" title="AM" placeholder='AM' >
             
            </button>  
            <h4 className={styles.quizOptionText}>AM</h4> 
            </li>
            <li >
              <button className={styles.formButton} type="button" title="PM" onClick={() => console.log("PM clicked!")} >
             
            </button>
            <h4 className={styles.quizOptionText}>PM</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.question2}>
        <div className={styles.question2Img}>
          <h1  className={styles.mainQuestion} >Skin Type</h1>
        </div>
        <div className={styles.question2Options}>
          <ul className={styles.quizOptions}>
            <li>
              <button className={styles.formButton} type="button" title="Oily" >
             
            </button>
            <h4 className={styles.quizOptionText}>Oily</h4>
            </li>
            <li>
              <button className={styles.formButton} type="button" title="Normal"  >
             
            </button>
            <h4 className={styles.quizOptionText}>Normal</h4>
            </li>
            <li>
              <button className={styles.formButton} type="button" title="Combination" >
             
            </button>
            <h4>Combination</h4>
            </li>
            <li>
              <button className={styles.formButton} type="button" title="Dry" >
             
            </button>
            <h4 className={styles.quizOptionText}>Dry</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.question3}>
        <div className={styles.question3Img}>
          <h1  className={styles.mainQuestion}>Price Range</h1>
          <div className={styles.question3Options}>
            <ul className={styles.quizOptions}>
              <li>
                <button className={styles.formButton} type="button" title="Under $50" >
              </button>
              <h4 className={styles.quizOptionText}>Under $50</h4>
              </li>
              <li>
                <button className={styles.formButton} type="button" title="Under $70" > 
                </button>
                <h4>Under $70</h4>
              </li>
              <li>
                <button className={styles.formButton} type="button" title="Under $100">
                  </button>
                  <h4>Under $100</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className={styles.submitButton} onClick={handleRecommendation}>Submit</button>
      {recommendedProduct && (
        <div className={styles.recommendedProduct}>
          <h2>Recommended Product</h2>
          <p>Name: {recommendedProduct.Name}</p>
          <p>Brand: {recommendedProduct.Brand}</p>
          
        </div>
      )}
    </div>
  );
};

export default SkincareRecommendation;
