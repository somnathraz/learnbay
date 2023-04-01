import React, { useState, useEffect } from "react";
import { useInterval } from "react-use";
import styles from "./TextAnimation.module.css";

const TextAnimation = (third, second, first) => {
  
  const reactArray = third.first;
  const swiftArray = third.second;
  const thirdArray = third.third;

  const [items, setItems] = useState(reactArray);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  useInterval(
    () => {
      setItems(reactArray);
      setCount(count + 1);

      if (count == 1) {
        setCount(2);
        setItems(swiftArray);
      }
      if (count == 2) {
        setCount(0);
        setItems(thirdArray);
      }
    },
    play ? 1000 : null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(swiftArray);
      setPlay(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={styles.span}>
      <span>{items}</span>
    </span>
  );
};

export default TextAnimation;
