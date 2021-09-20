import React from 'react';
import {pixelToRem, fonts} from "../../template/template-params";

function HeroCard({image, name}) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      background: `url("${image}") center center / cover no-repeat`,
      borderRadius: '50%',
      marginRight: pixelToRem(25),
      width: pixelToRem(58),
      height: pixelToRem(58),
    },
    text: {
      ...fonts.text
    }

  };

  return (
    <div style={styles.container}>
      <div style={styles.image}/>
      <span style={styles.text}>{name}</span>
    </div>
  );
}

export default HeroCard;
