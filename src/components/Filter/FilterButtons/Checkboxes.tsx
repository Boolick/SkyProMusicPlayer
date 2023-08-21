import { useDispatch } from "react-redux";
import { useState } from "react";
import cn from "classnames";

import { setSortByReleaseDate } from "../../../Store/Reducers/filtersSlice";
import styles from "../Filter.module.css";

interface CheckboxProps {
  className: string;
  labels: string[];
}

function Checkboxes({ className, labels }: CheckboxProps) {
  const dispatch = useDispatch();
  const [checkedIndex, setCheckedIndex] = useState<number>();

  const handleCheckboxChange = (index: number) => {
    setCheckedIndex(checkedIndex === index ? undefined : index);
    dispatch(setSortByReleaseDate(index === 0 ? "asc" : "desc"));
  };

  return (
    <div className={cn(styles.Checkboxes, className)}>
      {labels.map((label, index) => (
        <label key={index} className={cn(styles.label)}>
          <input
            data-testid="chekbox"
            type="radio"
            className={cn(styles.input)}
            checked={checkedIndex === index}
            onChange={() => handleCheckboxChange(index)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}
export default Checkboxes;
