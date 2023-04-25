import styles from "../../styles/Home.module.css"
import React from 'react';

const Map = () => {
  return (
    <iframe
      className={styles.BangaloreMap}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.389445576832!2d73.89115217466542!3d18.556473082544098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10e9fa6c91f%3A0x55305f18e1f03525!2sLearnbay%20-%20Data%20Science%20Course%20Training%20in%20Pune!5e0!3m2!1sen!2sin!4v1682399934971!5m2!1sen!2sin"
      width="1440"
      height="400"
      loading="lazy"
    
    ></iframe>
  );
};

export default Map;
