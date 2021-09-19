import React from 'react';
import {fonts, pixelToRem} from '../../template/template-params';

function BackButton({ onCLickHandler }) {

  const styles = {
    container: {
      ...fonts.label,
      marginBottom: pixelToRem(12),
      cursor: 'pointer',
    },
    icon: {
      marginRight: pixelToRem(5),
    },
  };

  return (
    <div style={styles.container} onClick={onCLickHandler}>
      <i style={styles.icon} className="fas fa-chevron-left"></i>
      <span>Voltar</span>
    </div>
  )
}

export default BackButton;
