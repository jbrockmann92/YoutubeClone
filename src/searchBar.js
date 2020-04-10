import React, { useState } from 'react';
import { render } from '@testing-library/react';

function SearchBar() {
  var styles;

  function headerStyle(){
    styles = {
      color: 'red',
    }
  }

  headerStyle(); //Do I need this here? Might not need to call the function

  function onSubmit(e) {
    e.preventDefault();
    var value = document.getElementById("thisInput").value;
    console.log(value);
  }

  return(
    <center>
      <h2 style={styles}>YouTube Clone</h2>
      <form onSubmit={onSubmit}>
        <input id="thisInput" type="text" placeholder="Search For Videos Here" />
        <input type="submit" value="Search"></input>
      </form>
    </center>
  );
}

export default SearchBar;