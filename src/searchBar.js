import React from 'react';
import { render } from '@testing-library/react';

function SearchBar() {
  var styles;

  function headerStyle() {
    styles = {
      color: 'red',
    }
  };

  headerStyle();

  return(
    <center>
      <h2 style={styles}>YouTube Clone</h2>
      <input type="text"></input>
      <button>Search</button>
    </center>
  );
}


export default SearchBar;