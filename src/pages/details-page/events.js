import React from 'react';

import { pixelToRem, fonts } from '../../template/template-params';
import { SubTitle } from '../../components/title';
import DivisionBar from './division-bar';

function Events({ events, isMobile }) {

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
    <div style={styles.container} className="events">
      <SubTitle text="Eventos" isMobile={isMobile} />
      <DivisionBar isMobile={isMobile} />
      <ul>
        {
          events.items.map((event, index) => <li key={index} style={styles.text}>{event.name}</li>)
        }
      </ul>
    </div>
  );
};

export default Events;
