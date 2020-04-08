import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar';
import SearchResult from './SearchResult';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoData: null,
    };
  }

  componentDidMount(){
    axios.get('')
    .then(function(response){
      this.setState({
        videoData: response, //Might want to get more specific? Maybe at index or certain key. Get only videos here I think. Or leave so it can be passed to any component
      })
    })
  }

  render() {
    return (
      <div>
      <SearchBar />
      </div>
    )
  }
}

export default App;
