import { useState, useEffect } from 'react';
import { host } from '../../config';
import Review from '../review/Review.js';
import './reviewfeed.css';

const ReviewFeed = ({userId}) => {
    const [reviews, setReviews] = useState(null);
    const [username, setUsername] = useState(null);

    const getReviews = async () => {
        const data = await fetch(`${host}/reviews/${userId}`);
        const reviewData = await data.json();
        setReviews(reviewData.reverse());
    }

    const getUser = async () => {
        const data = await fetch(`${host}/users/${userId}`);
        const userData = await data.json();
        setUsername(userData.user);
    }

    useEffect(() => {
        getReviews();
        getUser();
    }, []);

    if (!reviews || !username) {
        return null;
    }

    return (
        <article className="review-feed">
            <h3 className="review-feed__heading">{username.firstName}'s reviews</h3>
            {reviews.length === 0 && <p className="semibold">{username.firstName} has no reviews yet</p>}
            {reviews.map(review => <Review key={review._id} review={review}/>)}
        </article>
    )
}

export default ReviewFeed;