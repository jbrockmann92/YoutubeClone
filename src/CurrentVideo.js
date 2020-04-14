import React, { useState } from 'react';
import Comment from './Comment';
import axios from 'axios';

class CurrentVideo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            youtubeVideo: "https://www.youtube.com/embed/" + this.props.id,
            comment: null,
        }
    }

    componentDidMount() {
        axios.get('https://localhost:3000') //Probably will need to change
        .then(function(response){
          this.setState({
            comments: response[0], //Might want to get more specific?
          })
        })
        .catch(function(error){
          console.log(error);
        })
    }

    addComment = (e) => {
        e.preventDefault();
        this.setState({
            comment: document.getElementById('thisInput').value,
        })
        this.props.addComment(this.state.comment)

        //I think I want to do a put call in here

        //How can I grab them all from the db? Maybe associate the comments with the video id in db?
    }

    onChange = (e) => {
        this.setState({comment: e.target.value});
      }

    render() {
        return (
            <div>
                <center>
                    <h1>{this.props.title}</h1>
                    <iframe width="840" height="630"
                        src={this.state.youtubeVideo}>
                    </iframe> 
                    <h4>{this.props.description}</h4>
                </center>
                <center>
                    <form onSubmit={this.addComment}>
                        <input id='thisInput' type='text' onChange={this.onChange} placeholder='Add a comment...' required />
                        <input type='submit' value='Comment'/>
                    </form>
                </center>
            </div>
            //I want to do something in here about the comments section. Probably also related videos, though I may want that in the App.js section
        );
    }
        
}

export default CurrentVideo