import React, { useState } from "react";
import styles from "./SecondSection.module.css";
import Image from "next/image";
import VideoPopup from "../../../VideoPopup/VideoPopup";

function SecondSection({ idss }) {
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  return (
    <section>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <div className={styles.main}>
        <div className={styles.left}>
          <Image
            onClick={videoSHow}
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whylearnbay-left-image.png"
            width={686}
            height={393}
            className={styles.LeftWrapImg}
          />
        </div>
        <div className={styles.right}>
            <h4>title</h4>
            <p>Descrription</p>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
