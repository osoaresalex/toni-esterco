import React from 'react';

import { pixelToRem, fonts } from '../../template/template-params';
import { Title } from '../../components/title';

function HeroDescription({ name, description, isMobile }) {

  const styles = {
    container: {
      marginTop: pixelToRem(12),
      width: '95%',
    },
    text: {
      ...fonts.text,
      textAlign: 'justify',
      marginTop: pixelToRem(12),
    },
  };

  return (
    <div style={styles.container} className="text">
      <Title text={name} isMobile={isMobile} />
      <p style={styles.text}>{description}</p>
    </div>
  );
};

export default HeroDescription;
