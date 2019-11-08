import React, { useState, useEffect } from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  currentPage,
  onPageChanged,
  totalItemsCount,
  pageSize,
  portionSize = 10
}) => {
  const [portionNumber, setPortionNumber] = useState(1);
  useEffect(() => {
    const currentPortion = Math.ceil(currentPage / portionSize); // 13 / 10 = 2 попция
    setPortionNumber(currentPortion);
  }, [currentPage, portionSize]);

  const pagesCount = Math.ceil(totalItemsCount / pageSize); // 330 / 10 = 33 страницы
  const pages = []; // 1,2,3,4,5
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionalCount = Math.ceil(pagesCount / portionSize); //115 / 10 = 12 порций

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize; // границы
  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          prev
        </button>
      )}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => (
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
      {portionalCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          next
        </button>
      )}
    </div>
  );
};

export default Paginator;
