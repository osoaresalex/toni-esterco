import React, { useEffect, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../store/template-duck';
import { Creators as HeroCreators } from '../store/heroes/heroes-duck';

import Header from "../components/header";
import Footer from "../components/footer";
import Loader from '../components/loader';

function MainPage(
  {
    children,
    isMobile,
    onWindowResize,
    changeLimit,
    isLoading,
  }) {

  useEffect(() => {
    window.addEventListener('resize', () => {
      onWindowResize();
      changeLimit()
    });

    return (() => window.removeEventListener('resize', () => {
      changeLimit();
      onWindowResize();
    }));
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    pageContainer: {
      margin: isMobile ? '12px 0px 0px 0px' : '20px 42px 0px 42px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  };

  return (
    <Fragment>
      <Loader isVisible={isLoading} />
      <div style={styles.container}>
        <div style={styles.pageContainer}>
          <Header isMobile={isMobile} />
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  isMobile: state.Template.isMobile,
  isLoading: state.Template.isLoading,
});

const mapDispatchToActions = dispatch => bindActionCreators({ ...Creators, ...HeroCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToActions)(MainPage);
