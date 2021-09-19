import React from 'react';
import { connect } from 'react-redux'
import BackButton from '../../components/buttons/back-button';

import { pixelToRem, fonts, fontsMobile } from '../../template/template-params';

import Events from './events';
import Series from './series';
import Stories from './stories';
import HeroDescription from './hero-description';

import './details-page.css';

function DetailsPage({ history, hero, isMobile }) {
  const fontName = isMobile ? fontsMobile.title : fonts.title;

  const styles = {
    name: {
      ...fontName,
      marginBottom: pixelToRem(12)
    },
    mobileContainer: {
      marginRight: pixelToRem(12),
      marginLeft: pixelToRem(12),
    }
  };

  return (
    <div className="details-page" style={isMobile ? styles.mobileContainer : undefined}>
      <BackButton onCLickHandler={() => history.push('/code-hero/')} />

      <div className={isMobile ? 'details-page__mobile' : 'details-page__grid'}>

        <img
          className="image"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />

        <HeroDescription name={hero.name} description={hero.description} isMobile={isMobile} />
        <Events events={hero.events} isMobile={isMobile} />
        <Series series={hero.series} isMobile={isMobile} />
        <Stories stories={hero.stories} isMobile={isMobile} />
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  hero: state.Heroes.selectedHero,
  isMobile: state.Template.isMobile,
});

export default connect(mapStateToProps)(DetailsPage);
