import React from 'react';
import './loader.css';

function Loader({ isVisible }) {

  const styles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  function renderLoder() {
    if (isVisible)
      return (
        <div style={styles.container}>
          <div>
            <div className="lds-dual-ring" ></div>
          </div>
        </div>
      );

    return <span />;

  }

  return (
    renderLoder()
  )
}

export default Loader;
