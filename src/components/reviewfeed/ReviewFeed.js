import { useState, useEffect } from 'react';
import { host } from '../../config';
import Review from '../review/Review.js';
import './reviewfeed.css';

const ReviewFeed = ({userId}) => {
    const [reviews, setReviews] = useState(null);

    const getReviews = async () => {
        const data = await fetch(`${host}/reviews/${userId}`);
        const reviewData = await data.json();
        setReviews(reviewData.reverse());
    }

    useEffect(() => {
        getReviews();
    }, []);

    if (!reviews) {
        return null;
    }

    return (
        <article className="review-feed">
            <h2 className="review-feed__heading">Recieved reviews</h2>
            {reviews.length === 0 && <h3>No reviews recieved</h3>}
            {reviews.map(review => <Review key={review._id} review={review}/>)}
        </article>
    )
}

export default ReviewFeed;