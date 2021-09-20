import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import "./search-input.css";
import { pixelToRem, fonts, colors } from "../../../template/template-params";

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;
const TAB_KEY = 9;

let timer = null;

function SearchInput({ label, id, searchHandler, isMobile, filter}) {
  const [value, setValue] = useState('');

  useEffect(function startInternalValue(){
    setValue(filter);
  },[filter])

  useEffect(function addTrigger() {
    clearTimer();
    timer = setTimeout(triggerChange, WAIT_INTERVAL);
  }, [value]);

  const handleKeyDown = event => event.keyCode === ENTER_KEY || event.keyCode === TAB_KEY ? triggerChange() : null;

  const clearTimer = () => timer ? clearTimeout(timer) : false;

  const triggerChange = () => {
    clearTimer();
    
    if(value !== filter)
      searchHandler(value);
  };

  const styles = {
    container: {
      marginLeft: isMobile ? pixelToRem(30) : undefined,
      marginRight: isMobile ? pixelToRem(30) : undefined,
      marginBottom: isMobile ? pixelToRem(12) : pixelToRem(34),
    },
    label: {
      ...fonts.label,
    },
    input: {
      ...fonts.label,
      color: colors.text,
      border: `1px solid ${colors.inputBorder}`,
      width: isMobile ? '100%' : pixelToRem(384),
      paddingLeft: pixelToRem(14),
      height: pixelToRem(29),
      backgroundColor: colors.white,
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor={id}>{label}</label>
      <input
        style={styles.input}
        className="search__input"
        id={id} name={id}
        type="text" value={value}
        onKeyDown={handleKeyDown}
        onChange={e => setValue(e.target.value)} />
    </div>
  );
}

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default SearchInput;
