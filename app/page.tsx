"use client";
import styles from "./page.module.css";
import AnimatedArrow from "./components/AnimatedArrow";
import Scrolling from "./components/Scrolling"
import TypingEffect from "./components/TypingEffect";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  const typingText = "The Ordinary Hyaluronic Acid";
  return (
    <main className={styles.wrapperMain}>
      <div className={styles.landingHeaderBox}>
        <h1 className={styles.webtitle}>What's in your Skincare?</h1>
        <AnimatedArrow />
      </div>
      <div className={styles.headerBox}>
        <h1 className={styles.searchwebtitle}>Type your product here</h1>
        <div className={styles.safeSearchContainer}>
          <TypingEffect text={typingText} />
          <button title="submit" className={styles.safeSubmitBtn} type="submit">
            <BiSearch />
          </button>
        </div>
        <p className={styles.safeDisclaimer}>This dataset contains a limited number of products available. If the product you're looking for is not available, we apologize.</p>
        {/* <AnimatedArrow /> */}
      </div>
      <div className={styles.learnMoreLink}>
        <a title='project' href='/about' target="_self" rel="noopener noreferrer">
        <h2 className={styles.learnMoreText}>Click to</h2>
          <h2 className={styles.learnMoreText2}> Learn more.</h2>
          </a>
      </div>
      <Scrolling />
    </main>
  );
}