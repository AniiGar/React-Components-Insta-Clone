// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes } = props;

  // MY NOTES: Logged out props to see what was being passed as props
  // console.log('LikeSection passed props:', props.post.likes)

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper'>
          {/* MY NOTES: Added onClick event handler to heart icon */}
          <FontAwesomeIcon icon={faHeart} onClick={likePost} />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
  {/* MY NOTES: Added props location after logging out passed props*/}
  <p className='like-number'>{props.post.likes}</p>
    </div>
  );
};

export default LikeSection;
