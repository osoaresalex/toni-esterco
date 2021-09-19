import React from 'react';

import { pixelToRem, fonts } from '../../template/template-params';
import { SubTitle } from '../../components/title';
import DivisionBar from './division-bar';

function Stories({ stories, isMobile }) {

  const styles = {
    container: {
      marginTop: pixelToRem(12),
      width: '95%',
    },
    text: {
      ...fonts.text,
      marginTop: pixelToRem(12),
    },
  };

  return (
    <div style={styles.container} className="stories">
      <SubTitle text="Estórias" isMobile={isMobile} />
      <DivisionBar />
      <ul>
        {
          stories.items.map((stories, index) => <li key={index} style={styles.text}>{stories.name}</li>)
        }
      </ul>
    </div>
  );
};

export default Stories;
