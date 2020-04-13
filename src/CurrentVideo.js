import React, { useState } from 'react';
import Comment from './Comment';

class CurrentVideo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            youtubeVideo: "https://www.youtube.com/embed/" + this.props.id,
            comment: null,
        }
    }

    addComment = (e) => {
        e.preventDefault();
        this.setState({
            comment: document.getElementById('thisInput').value,
        })
        this.props.addComment(this.state.comment)
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
                        <input id='thisInput' type='text' onChange={this.onChange} placeholder='Add a comment...' />
                        <input type='submit' value='Comment'/>
                    </form>
                </center>
            </div>
            //I want to do something in here about the comments section. Probably also related videos, though I may want that in the App.js section
        );
    }
        
}

export default CurrentVideo