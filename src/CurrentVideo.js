import React from 'react';

function CurrentVideo(props) {
    var youtubeVideo = "https://www.youtube.com/embed/" + props.id
    return (
        <div>
            <center>
                <iframe width="420" height="315"
                    src={youtubeVideo}>
                </iframe> 
            </center>
        </div>
    );
}

export default CurrentVideo