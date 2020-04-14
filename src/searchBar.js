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
    }

  onChange = (e) => {
    this.setState({value: e.target.value});
  } //Probably don't need this, but it's useful for now

  render() {
    return(
      <center>
        <form onSubmit={this.onSubmit} style={{padding: '35px'}}>
          <input className='col-sm-10' id="thisInput" type="text" onChange={this.onChange} placeholder="Search For Videos Here" />
          <input type="submit" value="Search"></input>
        </form>
      </center>
    )
  }
}

export default SearchBar;