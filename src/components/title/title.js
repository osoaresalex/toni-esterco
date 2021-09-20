import React from 'react';
import {PropTypes} from 'prop-types';

import {pixelToRem, fonts, fontsMobile, colors} from "../../template/template-params";

function Title({text, isMobile}) {
  const font = isMobile ? fontsMobile.title : fonts.title;

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      ...font,
    },
    titleBar: {
      width: pixelToRem(54),
      height: isMobile ? pixelToRem(3) : pixelToRem(4),
      marginTop: pixelToRem(2),
      backgroundColor: colors.primary,
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{text.toUpperCase()}</h1>
      <div style={styles.titleBar}/>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Title;
