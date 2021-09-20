import React from 'react';
import {PropTypes} from 'prop-types';

import Title from './title';
import SubTitle from './sub-title';

function PageTitle({title, subtitle, isMobile}) {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
  };

  return (
    <div style={styles}>
      <Title text={title} isMobile={isMobile}/>
      <SubTitle text={subtitle} isMobile={isMobile}/>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default PageTitle;
