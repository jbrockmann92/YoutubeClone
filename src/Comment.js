import React, { useState, useEffect } from 'react';

function Comment(props) {

    // const [commentText, updateComment] = useState('');
    const [like, likeComment] = useState(0);
    const [dislike, dislikeComment] = useState(0);
    const [reply, sendReply] = useState('');

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
                Likes: {like}
            </div>
            <button onClick={() => likeComment(like + 1)}>Like</button>
            <div>
                Dislikes: {dislike}
            </div>
            <button onClick={() => dislikeComment(dislike + 1)}>Dislike</button>
            <div>
                {reply}
                <form>
                    <input id='thisInput' type='text'></input>
                </form>
                <button onClick={() => sendReply(document.getElementById('thisInput').value)}>Reply</button>
            </div>
        </div>
    )
}


export default Comment