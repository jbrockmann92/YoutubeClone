import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar';
import SearchResult from './SearchResult';
import axios from 'axios';
import exampleYouTube from './exampleYouTube.json';
import CurrentVideo from './CurrentVideo.js';
import Comment from './Comment.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoData: null,
      topTen: null,
      currentVideo: null,
      comments: [],
    };
  }

  componentDidMount(){
    this.loadTopTen();
  }

  loadTopTen = (searchParam) => {
    if (searchParam === undefined){
      searchParam = 'DevCodecamp';
    }
    var self = this;
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchParam + '&maxResults=10&key=AIzaSyDNQpO_5guTXFVwLEyTCsSFlJPtym3ZP_c')
    .then(function(response){
      self.setState({
        videoData: response
      })
      self.setTopTen();
    })
    .catch(function(error){
      console.log(error);
    })
  }

  setTopTen = () => {
    var topTenVideos = [];
    for (var i=0; i<9; i++){
      topTenVideos.push(<SearchResult id={i} data={this.state.videoData.data.items[i]} onVideoClick={this.onVideoClick} />)
    }
    this.setState({topTen: topTenVideos})
    console.log(this.state.topTen);
  }

  addComment = (comment) => {
    var finalComment = <Comment data = {comment} like = {0} />
    this.setState({
      comments: [...this.state.comments, finalComment] //I think I want each of thes to be their own element.
    })
  }

  onVideoClick = (id, title, description) => {
    this.setState({
      videoData: null,
      topTen: null,
      currentVideo: <CurrentVideo id={id} title={title} description={description} addComment={this.addComment} /> //Not a very clean way to do it, but works for now
    })

    console.log(id);
    //this.loadTopTen(this.state.searchParam);
    //Don't want this right now, but it will be needed later when I use it to populate related videos

  }

  search = (value) => {
    this.loadTopTen(value);
  }

  defaultStyle = {
    marginLeft: '250px', 
    marginRight: '250px', 
    borderStyle: 'solid',
    backgroundColor: 'lightgray',
  }

  render() {
    return (
      <div style={this.defaultStyle}>
        <center>
          <h1 style={{color: 'red'}}>YouTube Clone</h1>
        </center>
        <SearchBar search = {this.search}/>
        <div>
          {this.state.topTen}
        </div>
        <div>
          {this.state.currentVideo}
        </div>
        <div>
          {this.state.comments}
        </div>
      </div>
    )
  }
}

export default App;
