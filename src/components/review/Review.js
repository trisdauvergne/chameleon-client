import React, { useState, useEffect } from 'react';
import { host } from '../../config';


const Review = ({ review }) => {
  const [reviewAuthor, setReviewAuthor] = useState(null);

  const getReviewAuthor = async () => {
    const data = await fetch(`${host}/users/${review.authorId}`);
    const authorData = await data.json();
    setReviewAuthor(authorData);
  };

  useEffect(() => {
    getReviewAuthor();
  }, []);

  if (!reviewAuthor) {
    return null;
  }

  return (
    <div>
      <p>{reviewAuthor.user.firstName} gave you {review.rating} out of 5</p>
      {review.feedback !== '' && <p>"{review.feedback}"</p>}
      <p>Review date: {review.date.getUTCDay()}</p>
    </div>
  )
}

export default Review;
