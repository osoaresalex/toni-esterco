import React from 'react';
import { PropTypes } from 'prop-types';

import { colors, fonts, pixelToRem } from "../../template/template-params";

function PageNumber({ isActive, onClickHandler, number }) {

  const bgcolor = isActive ? colors.primary : colors.white;

  const color = isActive ? colors.white : colors.primary;

  const styles = {
    number: {
      backgroundColor: bgcolor,
      color: color,
      width: pixelToRem(32),
      height: pixelToRem(32),
      borderRadius: '50%',
      border: `solid 1px ${colors.primary}`,
      ...fonts.pageNumber,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      marginRight: '20px',
    }
  };

  return (
    <div className="page-number" style={styles.number} onClick={() => {
      onClickHandler();
    }}>
      {number}
    </div>
  );
}

PageNumber.defaultProps = {
  isActive: false,
};

PageNumber.propTypes = {
  isActive: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default PageNumber;
