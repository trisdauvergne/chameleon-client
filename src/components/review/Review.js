import React, { useState, useEffect } from 'react';
import { host } from '../../config';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import './review.css';

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
    <div className="review">
      <p className="review__rating semibold"><Link to={`/user/${reviewAuthor.user._id}`}>{reviewAuthor.user.firstName}</Link> <Rating rating={review.rating}/></p>
      {review.feedback !== '' && <p className="review__feedback">"{review.feedback}"</p>}
      <p className="review__date">{review.date}</p>
    </div>
  )
}

export default Review;
