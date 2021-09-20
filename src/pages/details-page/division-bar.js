import React from 'react';
import { colors, pixelToRem } from '../../template/template-params';

function DivisionBar() {

  const styles = {
    backgroundColor: colors.primary,
    width: '100%',
    height: pixelToRem(3),
  };

  return (
    <div style={styles} />
  );
}

export default DivisionBar;
