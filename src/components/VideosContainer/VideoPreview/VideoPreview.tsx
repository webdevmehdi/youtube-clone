import React from "react";
import styles from "./VideoPreview.module.css";
import sunFlower from "../../../assets/images/sunFlower.jpg";

const VideoPreview = () => {
  return (
    <div className={styles.Thumbnail}>
      <div>
        <img src={sunFlower} alt="flower" />
      </div>
      <div>
        <h1>These are my videos</h1>
            <p>Description:</p>
      </div>
    </div>
  );
};

export default VideoPreview;
