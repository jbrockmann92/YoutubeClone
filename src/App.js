import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar';
import SearchResult from './SearchResult';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoData: null,
      topTen: [],
    };
  }

  componentDidMount(){
    axios.get('')
    .then(function(response){
      this.setState({
        videoData: response, //Might want to get more specific? Maybe at index or certain key. Get only videos here I think. Or leave so it can be passed to any component
      })
    })

    loadTopTen = () => {
      var topTenVideos = [];
      for (i=0; i<10; i++){
        topTenVideos.push(videoData[i]); //This is going to cause issues because the response is probably only an array of 3
      }
      this.setState({
        topTen: topTenVideos,
      })
    }
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
