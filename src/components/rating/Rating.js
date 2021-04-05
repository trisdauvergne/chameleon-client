import './rating.css';

const Rating = ({rating}) => {

  return (
    <article className="rating">
      <span class="material-icons-round rating__star">{rating >= 1 ? 'star' : 'star_border'}</span>
      <span class="material-icons-round rating__star">{rating >= 2 ? 'star' : 'star_border'}</span>
      <span class="material-icons-round rating__star">{rating >= 3 ? 'star' : 'star_border'}</span>
      <span class="material-icons-round rating__star">{rating >= 4 ? 'star' : 'star_border'}</span>
      <span class="material-icons-round rating__star">{rating >= 5 ? 'star' : 'star_border'}</span>
    </article>
  );
};

export default Rating;
