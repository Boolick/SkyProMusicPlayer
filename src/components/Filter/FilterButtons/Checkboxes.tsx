import React, { useState } from "react";
import cn from "classnames";

import styles from "../Filter.module.css";

interface CheckboxProps {
  className?: string;
  labels: string[];
}

function Checkboxes({ className, labels }: CheckboxProps) {
  const [checkedIndex, setCheckedIndex] = useState<number>();

  return (
    <div className={cn(styles.Checkboxes, className)}>
      {labels.map((label, index) => (
        <label key={index} className={cn(styles.label)}>
          <input
            data-testid="chekbox"
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
}

export default Checkboxes;
