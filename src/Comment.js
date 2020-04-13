import React, { useState, useEffect } from 'react';

function Comment(props) {

    // const [commentText, updateComment] = useState('');
    // const [like, likeComment] = useState(0);

    // useEffect(() => {
    //     updateComment(props.data),
    // })

    console.log(props.data);
    console.log(props.like);

    return (
        <div>
            <div>
                {props.data}
            </div>
            <div>
                {props.like}
            </div>
        </div>
    )
}


export default Comment