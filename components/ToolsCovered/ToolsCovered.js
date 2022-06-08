import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ToolsCovered.module.css";

const ToolsCovered = ({
  src,
}) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
  return (
    <section className={styles.ToolsCovered}>
      <h4>Tools Covered</h4>
      <div>
        {mobile ? (
          <Image
            src={src}
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="250px"
          />
        ) : (
          <Image
            src={src}
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="1400"
            height="500px"
          />
        )}
      </div>
    </section>
  );
}

export default ToolsCovered;
