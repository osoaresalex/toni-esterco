import React from 'react';
import {pixelToRem, colors} from "../../template/template-params";

function Footer() {
  const styles = {
    backgroundColor: colors.primary,
    height: pixelToRem(12),
    width: '100%',
    left: 0,
    bottom: 0,
  };

  return (
    <div style={styles}/>
  )
}

export default Footer;
