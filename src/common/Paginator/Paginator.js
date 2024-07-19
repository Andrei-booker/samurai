import { useState } from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => setPortionNumber(portionNumber - 1)}
          className={classes.prevButton}
        >
          Prev
        </button>
      )}
      {pages
        .filter(
          page =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map(page => (
          <span
            key={page}
            onClick={e => onPageChanged(page)}
            className={
              currentPage === page ? classes.selectedPage : classes.pageNumber
            }
          >
            {page}
          </span>
        ))}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
