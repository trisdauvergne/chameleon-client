import { useState } from 'react';
const ReviewModal = ({ dealPartner, booking }) => {
    const [emptyRating, setEmptyRating] = useState('');
    const [review, setReview] = useState(
        {
            rating: '',
            feedback: ''
        }
    );

    const handleSubmit = (e) => {
      e.preventDefault();
      const reviewObject = {
        
      }
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