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
      videoData: exampleYouTube['items'],
      topTen: [],
      searchParam: 'DevCodeCamp',
      currentVideo: null,
      comments: [],
    };
  }

  componentDidMount(){
    this.loadTopTen();
  }

  loadTopTen = (searchParam) => {
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchParam)
    .then(function(response){
      this.setState({
        videoData: response[0], //Might want to get more specific? Maybe at index or certain key. Get only videos here I think. Or leave so it can be passed to any component
      })
    })
    .catch(function(error){
      console.log(error);
    })

    var topTenVideos = [];
    for (var i=0; i<10; i++){
      topTenVideos.push(<SearchResult key = {i} data = {this.state.videoData[i]} onVideoClick={this.onVideoClick} />); //This is going to cause issues because the response is probably only an array of 3, and it's not what I want anyway until I get more specific
    }
    this.setState({
      topTen: topTenVideos,
    })
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
    this.setState({searchParam: value});
    this.loadTopTen(this.state.searchParam);
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
