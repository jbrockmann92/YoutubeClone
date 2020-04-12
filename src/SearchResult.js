import React from 'react';

function SearchResult(props) { //Since I'm passing in props here, will it still work when I want to lift state up? I can change to class for now if needed


    //var youtubeVideo = "https://www.youtube.com/embed/" + props.data['id']['videoId'];
    var youtubeVideo = props.data['snippet']['thumbnails']['high']['url'];
    return (
        <center>
            <div>
                <h3>{props.data['snippet']['title']}</h3>
            </div>
                <button onClick={() => props.onVideoClick(props.data['id']['videoId'])}>
                    <img src= {youtubeVideo} width='480' height='360'/>
                </button>
            <div>
                <h5>{props.data.snippet.description}</h5>
            </div>
        </center>
    );
}


export default SearchResult