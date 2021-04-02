import { useState, useEffect } from 'react';
import { host } from '../../config';
import Review from '../review/Review.js';

const ReviewFeed = () => {
    const [reviews, setReviews] = useState(null);
    const [rating, setRating] = useState(null);
    const userId = document.cookie.split('=')[1];

    const getReviews = async () => {
        const data = await fetch(`${host}/reviews/${userId}`);
        const reviewData = await data.json();
        setReviews(reviewData);
    }

    const getRating = async () => {
        const data = await fetch(`${host}/users/owner/${userId}`);
        const ratingData = await data.json();
        setRating(ratingData.rating);
    }

    useEffect(() => {
        getReviews();
        getRating();
    }, []);

    if (!reviews || !rating) {
        return null;
    }

    return (
        <article>
            <h2>Recieved reviews</h2>
            <h3>Your average rating: {rating}</h3>
            {reviews.map(review => <Review key={review._id} review={review}/>)}
        </article>
    )
}

export default ReviewFeed;