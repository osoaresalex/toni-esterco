import React from 'react';
import {PropTypes} from 'prop-types';
import {fonts, fontsMobile} from "../../template/template-params";

function SubTitle({text, isMobile}) {
  const font = isMobile ? fontsMobile.subTitle : fonts.subTitle;

  const styles = {
    ...font,
  };

  return (
    <h2 style={styles}>{text.toUpperCase()}</h2>
  );
}

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default SubTitle;
