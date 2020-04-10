import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({value: document.getElementById("thisInput").value})
    this.props.search(this.state.value);
    this.setState({value: ''});
    console.log(this.state.value);
    }

  render() {
    return(
      <center>
      <h2 style={{color: 'red'}}>YouTube Clone</h2>
        <form onSubmit={this.onSubmit}>
          <input id="thisInput" type="text" placeholder="Search For Videos Here" />
          <input type="submit" value="Search"></input>
        </form>
      </center>
    )
  }
}

export default SearchBar;