import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import "./paginator.css";
import CaretLeft from "./caret-left";
import CaretRight from "./caret-right";
import PageNumber from "./page-number";

function Paginator(
  {
    offset,
    totalPages,
    isMobile,
    onPaginate,
  }) {

  const [pages, setPages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }

    setPages(pages);
  }, [totalPages]);

  function render() {
    let navigationLimit = totalPages < 6 ? totalPages : 5;

    navigationLimit = isMobile && navigationLimit > 2 ? 2 : navigationLimit;

    if (offset > navigationLimit + index) {
      setIndex(offset - navigationLimit);
    }

    if (offset < index) {
      setIndex(index - 1);
    }

    return pages
      .slice(index, navigationLimit + 1 + index)
      .map(page => (
        <PageNumber key={page} isActive={offset === page}
          onClickHandler={() => onPaginate(page)}
          number={page + 1} />)
      );
  }

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div className="paginator" style={styles}>
      <CaretLeft
        isEnable={offset > 0}
        isMobile={isMobile}
        onClickHandler={() => onPaginate(offset - 1)}
      />
      {render()}
      <CaretRight
        isEnable={offset + 1 !== totalPages}
        isMobile={isMobile}
        onClickHandler={() => onPaginate(offset + 1)}
      />
    </div>
  );
}

Paginator.defaultProps = {
  offset: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  isMobile: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
}

export default Paginator;
