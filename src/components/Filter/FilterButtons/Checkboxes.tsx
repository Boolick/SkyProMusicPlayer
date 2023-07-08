import React, { useState } from "react";
import cn from "classnames";
import styles from "../Filter.module.css";

type Props = {
  className?: string;
  labels: string[];
};

const Checkboxes: React.FC<Props> = ({ className, labels }) => {
  const [checkedIndex, setCheckedIndex] = useState<number>();

  return (
    <div className={cn(styles.Checkboxes, className)}>
      {labels.map((label, index) => (
        <label key={index} className={cn(styles.label)}>
          <input
            type="radio"
            className={cn(styles.input)}
            checked={checkedIndex === index}
            onChange={() =>
              setCheckedIndex(checkedIndex === index ? undefined : index)
            }
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export default Checkboxes;
