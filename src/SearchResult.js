import React from 'react';

function SearchResult(props) {
    console.log(props);
    var youtubeVideo = props.data['snippet']['thumbnails']['high']['url'];
    return (
            <center>
                <div className='col-sm-10' style={{backgroundColor: 'white'}}>
                    <div style={{padding: '20px'}}>
                        <div style={{padding: '5px', borderStyle: 'solid', borderColor: 'darkgray'}}>
                            <h1>{props.data['snippet']['title']}</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6' style={{padding: '25px'}}>
                            <button style={videoStyle} onClick={() => props.onVideoClick(props.data['id']['videoId'], props.data['snippet']['title'], props.data.snippet.description)}>
                                <img src= {youtubeVideo} width='480' height='360'/>
                            </button>
                        </div>
                        <div className='col-sm-6' style={{borderBottom: '5px', paddingTop: '25px'}}>
                            <center>
                                <h3>{props.data.snippet.description}</h3>
                            </center>
                        </div>
                    </div>
                </div>
            </center>
    );
}

const videoStyle = {
    border: '0px',
    padding: '25px',
}

export default SearchResult