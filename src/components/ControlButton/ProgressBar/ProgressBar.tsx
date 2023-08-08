import React from "react";
import { useSelector } from "react-redux";

import styles from "./ProgressBar.module.css";
import { RootState } from "../../../Store/store";

const ProgressBar: React.FC<{
  currentTime: number;
  duration: number;
}> = () => {
  const { currentTime, duration } = useSelector(
    (state: RootState) => state.player
  );

  const progress = (currentTime / duration) * 100;

  return (
    <div className={styles.progressLine}>
      <div
        className={styles.playerProgress}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
