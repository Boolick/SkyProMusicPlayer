import React from "react";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, duration }) => {
  const progress = (currentTime / duration) * 100;

  return (
    <div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default ProgressBar;
