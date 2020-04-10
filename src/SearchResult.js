import React from 'react';

function SearchResult(props) {
    var youtubeVideo = "https://www.youtube.com/embed/" + props.data['id']['videoId'];
    return (
        <center>
            <div>
                {props.data['snippet']['title']}
            </div>
             <iframe width="420" height="315"
                src={youtubeVideo}>
            </iframe> 
        </center>
    );
}


export default SearchResult