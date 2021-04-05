import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { host } from '../../config';
import './reviewmodal.css';

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
    <div className="review-modal">
      <h2 className="review-modal__heading">Review {dealPartner.user.firstName}</h2>
      <form className="review-modal__form" onSubmit={handleSubmit} id="review-form">
          <div className="review-modal__input-div" onChange={(e) => setReview({...review, rating: e.target.value})} >
              <label className="review-modal__label">
                <input className="review-modal__input" type="radio" value="1" name="rating" required/>
                1
              </label>
              <label className="review-modal__label">
                <input className="review-modal__input" type="radio" value="2" name="rating"/>
                2
              </label>
              <label className="review-modal__label">
                <input className="review-modal__input" type="radio" value="3" name="rating"/>
                3
              </label>
              <label className="review-modal__label">
                <input className="review-modal__input" type="radio" value="4" name="rating"/>
                4
              </label>
              <label className="review-modal__label">
                <input className="review-modal__input" type="radio" value="5" name="rating"/>
                5
              </label>
          </div>
        <textarea className="review-modal__textarea" form="review-form" name="feedback" value={review.feedback} onChange={(e) => setReview({...review, feedback: e.target.value})} placeholder={`Write about your experience with ${dealPartner.user.firstName}`} />
        <button className="review-modal__btn" type="submit">Leave a review</button>
      </form>
    </div>
  );
};

export default ReviewModal;