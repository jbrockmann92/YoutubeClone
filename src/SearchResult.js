import React from 'react';

function SearchResult(props) {
    console.log(props);
    var youtubeVideo = props.data['snippet']['thumbnails']['high']['url'];
    return (
        <center>
            <div>
                <h3>{props.data['snippet']['title']}</h3>
            </div>
                <button style={videoStyle} onClick={() => props.onVideoClick(props.data['id']['videoId'], props.data['snippet']['title'], props.data.snippet.description)}>
                    <img src= {youtubeVideo} width='480' height='360'/>
                </button>
            <div>
                <h5>{props.data.snippet.description}</h5>
            </div>
        </center>
    );
}

const videoStyle = {
    border: '0px',
}

export default SearchResult