import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props.comments;
  console.log('Comments passed props:', props.comments)

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}      
      {props.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  );
};

export default Comments;
