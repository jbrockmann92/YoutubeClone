import React, { useState, useEffect } from 'react';

function Comment(props) {

    // const [commentText, updateComment] = useState('');
    const [like, likeComment] = useState(0);
    const [dislike, dislikeComment] = useState(0);
    const [reply, sendReply] = useState('');
    const [totalScore, changeScore] = useState(0);

    useEffect(() => {
        changeScore(like - dislike);
    }) 

    // useEffect(() => {
    //     updateComment(props.data),
    // })

    console.log(props.data);
    console.log(props.like);

    const commentStyle = {
        marginLeft: '5px'
    }

    return (
        <div style={{marginLeft: '20px'}}>
            <h5 style={commentStyle}>
                {props.data}
            </h5>
            <div>
                Score: {totalScore}
            </div>
            <button onClick={() => dislikeComment(dislike + 1)}>Dislike</button>
            <button onClick={() => likeComment(like + 1)}>Like</button>
            <div>
                {reply}
                <form onSubmit={e => e.preventDefault()}>
                    <input id='thisInput' type='text' onChange={e => {sendReply(e.target.value)}}></input>
                    <input type='submit' value='reply'></input>
                </form>
            </div>
        </div>
    )
}


export default Comment