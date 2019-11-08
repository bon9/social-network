import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize); // 5
  const pages = []; // 1,2,3,4,5
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(p => (
        <span
          key={p}
          className={`${currentPage === p && classes.selectedPage} ${
            classes.numberPage
          }`}
          onClick={() => onPageChanged(p)}
        >
          {`${p} `}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
