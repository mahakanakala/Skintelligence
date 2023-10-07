import React, { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import styles from "../page.module.css";

const AnimatedArrow: React.FC = () => {
  const [pos, setPos] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const distance: number = 0.025;

  useEffect(() => {
    const animateArrow = () => {
      setPos((prevPos) => prevPos + direction);
      if (pos >= distance || pos <= 0) {
        setDirection((prevDirection) => prevDirection * -1);
      }
    };

    const animationInterval = setInterval(animateArrow, 600);

    return () => {
      clearInterval(animationInterval);
    };
  }, [pos, direction]);

  return (
    <div className="arrowContainer">
      <FiArrowDown
        className={styles.arrow}
        style={{ bottom: `${pos}rem` }}
      />
    </div>
  );
};

export default AnimatedArrow;
