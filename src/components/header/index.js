import React from 'react';

import {PageTitle, SubTitle} from "../title";
import {pixelToRem} from "../../template/template-params";

function Header({isMobile}) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: isMobile ? undefined : '100%',
      marginBottom: isMobile ? pixelToRem(12) : pixelToRem(34),
      marginLeft: isMobile ? pixelToRem(30) : 0,
    },
  };

  return (
    <div style={styles.container}>
      <PageTitle title="busca marvel" subtitle="teste front-end" isMobile={isMobile}/>
      {
        !isMobile &&
        <SubTitle text="nelson oliveira" isMobile={isMobile}/>
      }
    </div>
  )
}

export default Header;
