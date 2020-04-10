import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar';
import SearchResult from './SearchResult';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoData: [1,2,3,4,5,6,7,8,9,10],
      topTen: [],
      searchParam: '',
    };
  }

  componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=google')
    .then(function(response){
      this.setState({
        videoData: response[0], //Might want to get more specific? Maybe at index or certain key. Get only videos here I think. Or leave so it can be passed to any component
      })
    })
    this.loadTopTen();
  }

  loadTopTen = () => {
    var topTenVideos = [];
    for (var i=0; i<10; i++){
      topTenVideos.push(<SearchResult data = {this.state.videoData[i]} />); //This is going to cause issues because the response is probably only an array of 3, and it's not what I want anyway until I get more specific
    }
    this.setState({
      topTen: topTenVideos,
    })
  }

  search = (value) => {
    this.setState({searchParam: value});
  }

  render() {
    return (
      <div>
      <SearchBar search = {this.search}/>
      <div>
        {this.state.topTen}
      </div>
      </div>
    )
  }
}

export default App;
