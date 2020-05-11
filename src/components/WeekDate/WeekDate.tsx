// Vendor
import React from "react";

// Internal

// CSS
import "./styles.css";

export interface WeekDateProps {}

/**
 * @name WeekDate
 * @description display date of the week from monday to friday
 */
const WeekDate: React.FC<WeekDateProps> = () => {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay() + 1;
  const last = first + 4;

  const firstDay = new Date(curr.setDate(first)).toDateString();
  const lastDay = new Date(curr.setDate(last)).toDateString();

  return (
    <div>
      Week of <strong>{firstDay}</strong> to <strong>{lastDay}</strong>
    </div>
  );
};

export { WeekDate };
