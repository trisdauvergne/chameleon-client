import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { host } from '../../config';

const ReviewModal = ({ dealPartner, booking, setModal }) => {
    let history = useHistory();
    const authorId = document.cookie.split('=')[1];
    const [review, setReview] = useState(
        {
            rating: '',
            feedback: ''
        }
    );

    const handleSubmit = async (e) => {
      e.preventDefault();
      const reviewObject = {
        ...review,
        targetId: dealPartner.user._id,
        authorId,
        bookingId: booking._id,
        date: new Date().toISOString().split('T')[0]
      }
      await fetch(`${host}/reviews`, { method: 'POST', body: JSON.stringify(reviewObject), headers: { 'Content-Type': 'application/json' } });
      setReview({
        rating: '',
        feedback: ''
      })
      setModal(false);
      history.go(0);
    }

  return (
    <>
      <h1>Review {dealPartner.user.firstName}</h1>
      <form onSubmit={handleSubmit} id="review-form">
          <div onChange={(e) => setReview({...review, rating: e.target.value})} >
              <label>
                  1
                <input type="radio" value="1" name="rating" required/>
              </label>
              <label>
                  2
                <input type="radio" value="2" name="rating"/>
              </label>
              <label>
                  3
                <input type="radio" value="3" name="rating"/>
              </label>
              <label>
                  4
                <input type="radio" value="4" name="rating"/>
              </label>
              <label>
                  5
                <input type="radio" value="5" name="rating"/>
              </label>
          </div>
        <textarea form="review-form" name="feedback" value={review.feedback} onChange={(e) => setReview({...review, feedback: e.target.value})} placeholder="Write about your experience" />
        <button type="submit">Leave a review</button>
      </form>
    </>
  );
};

export default ReviewModal;