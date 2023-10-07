"use client"
import React from 'react';
import styles from "../page.module.css";
// import SuggestionForm from '../components/SuggestionForm'
import Citations from '../components/Citations'

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <h1 className={styles.smallWebTitle}>About</h1>
      <div className={styles.aboutQuestionBox}>
        <h2 className={styles.aboutQuestion}>What are Toxins in Skincare/Makeup?</h2>
        <p className={styles.definition}> Ingredients in products that are classified as endocrine disruptors, carcinogens, mutagens (causing genetic mutations), estrogen mimickers,
          and /or allergens are harmful to the environment and aquatic life.</p>
      </div>
      <div className={styles.aboutQuestionBox}>
        <h2 className={styles.aboutQuestion}>Why is this important?</h2>
        <p className={styles.definition}> It is so important to be self aware of the products we use. Big companies love to sneak in nasty
          ingredients becuase they are cheaper or for conveiece without informing the public of associated risks. This project is to help the general public
          find any harmful chemicals in their products.</p>
      </div>
      <div className={styles.aboutQuestionBox}>
        <h3 className={styles.aboutQuestion}> Classification of Hazard Levels</h3>
        <div className={styles.categoryBox}>
          <div className={styles.lowBox}>
            <h4 className={styles.lowTitle}>Low: allergens, harmful to the environment, irritation </h4>
            <ul className={styles.toxinsNames}>
              <li>
                <u>Ethanolamine</u>: contact can severely irritate and burn the skin and eyes, with possible eye damage.
              </li>
              <li>
                <u>Oxybenzone</u>: can cause skin allergies
              </li>
              <li>
                <u>Resorcinol</u>: Skin irritant and sensitizer, an acute irritant when in contact with the eyes
              </li>
              <li>
                <u>Formaldehyde</u>: can irritate the eyes, nose, and throat, even at low levels for short periods. Longer exposure or higher doses can cause coughing or choking. Severe exposure can cause death from throat swelling or chemical burns to the lungs.
              </li>
              <li>
                <u>Diethanolamine</u>: Breathing Aminopropyl Diethanolamine can irritate the nose and throat. Breathing Aminopropyl Diethanolamine can irritate the lungs, causing coughing and/or shortness of breath. Higher exposures can cause a build-up of fluid in the lungs (pulmonary edema), a medical emergency, with severe shortness of breath.
              </li>
              <li>
                <u>Siloxanes</u>: also known as cyclical silicones, these compounds are found in a variety of cosmetic and skincare products—but they’re not great for the environment and have been linked with endocrine disruption as well.
              </li>
              <li>
                <u>Octinoxate</u>: This common sunscreen ingredient was originally thought to be harmful to coral reefs, and although it may have been recently proven false, it's still somewhat irritating to sensitive skin.
              </li>
              <li>
                <u>Sodium Laureth Sulfate (SLS)</u>: irritation to the skin and eyes; some may consider good, but it can be an overpowering surfactant.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.categoryBox}>
          <h4 className={styles.modTitle}> Moderate: endocrine disruptors, estrogen mimickers</h4>
          <ul className={styles.toxinsNames}>
            <li>
              <u>Phalates</u>: considered bad in skincare due to their potential to act as endocrine disruptors, leading to hormonal imbalances, reproductive and developmental issues, and skin sensitization.
            </li>
            <li>
              <u>Triclosan</u>: interferes with the body's thyroid hormone metabolism and may be a potential endocrine disruptor
            </li>
            <li>
              <u>Octinoxate</u>: exhibits antiandrogenic activity, which is linked to harmful effects on reproductive organ development in male and female fetuses exposed in utero. These effects can be further passed on to their offspring.
            </li>
            <li>
              <u>Homosalate</u>: enhance the absorption of pesticides in the body
            </li>
          </ul>
        </div>
        <div className={styles.categoryBox}>
          <h4 className={styles.highTitle}> High: carcionogens & mutagens</h4>
          <ul className={styles.toxinsNames}>
            <li>
              <u>Talc</u>: considered safe for use on the skin though it has been associated with ovarian cancer when used on or near the genitals.
            </li>
            <li>
              <u>Parabens</u>: disrupt hormones in the body, harm fertility and reproductive organs, affect birth outcomes, and increase cancer risk.
            </li>
            <li>
              <u>BHA & BHT</u>: have been linked to quite a few health concerns, including cancer, disruption to the hormone system, liver damage, kidney issues, thyroid problems, and autoimmunity
              . They can also contribute to changes in fatigue, headaches, hives, and rashes.
            </li>
            <li>
              <u>Polyethylene Glycols</u>: various types of cancer
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={styles.aboutQuestionBox}>
        <h2 className={styles.aboutQuestion}>Recent News </h2>
        place news bubbles here
      </div> */}
      <div className={styles.aboutQuestionBox}>
        <h2 className={styles.aboutQuestion}> Sources</h2>
        <Citations />
      </div>
      <div id="formContainer">
        {/* <SuggestionForm /> */}
      </div>
    </main>
  );
}
