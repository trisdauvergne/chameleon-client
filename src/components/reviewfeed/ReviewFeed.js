import { useState, useEffect } from 'react';
import { host } from '../../config';
import Review from '../review/Review.js';

const ReviewFeed = ({userId}) => {
    const [reviews, setReviews] = useState(null);

    const getReviews = async () => {
        const data = await fetch(`${host}/reviews/${userId}`);
        const reviewData = await data.json();
        setReviews(reviewData);
    }

    useEffect(() => {
        getReviews();
    }, []);

    if (!reviews) {
        return null;
    }

    return (
        <article>
            <h2>Recieved reviews</h2>
            {reviews.map(review => <Review key={review._id} review={review}/>)}
        </article>
    )
}

export default ReviewFeed;