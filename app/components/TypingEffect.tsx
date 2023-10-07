import React, { useState, useEffect } from "react";
import styles from "../page.module.css";

const TypingEffect = ({ text }: { text: string }) => {
  const [inputValue, setInputValue] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setTypingIndex((prevIndex) => prevIndex + 1);
    }, 200);

    return () => clearTimeout(typingTimer);
  }, [typingIndex]);

  useEffect(() => {
    if (typingIndex <= text.length) {
      setInputValue(text.substring(0, typingIndex));
    }
  }, [typingIndex, text]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      title="typinganimation"
      className={styles.safeSearchText}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default TypingEffect;
