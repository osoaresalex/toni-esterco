import React from 'react';

import { pixelToRem, fonts } from '../../template/template-params';
import { SubTitle } from '../../components/title';
import DivisionBar from './division-bar';

function Series({ series, isMobile }) {

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
    <div style={styles.container} className="series">

      <SubTitle text="Séries" isMobile={isMobile} />
      <DivisionBar isMobile={isMobile} />
      <ul>
        {
          series.items.map((serie, index) => <li key={index} style={styles.text}>{serie.name}</li>)
        }
      </ul>
    </div>
  );
};

export default Series;
