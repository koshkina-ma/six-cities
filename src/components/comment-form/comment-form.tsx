import { useState } from 'react';
import { CommentFormDataType } from '../../types';

type CommentFormProps = {
  onSubmit: (data: CommentFormDataType) => void;
};

function CommentForm({ onSubmit }: CommentFormProps): JSX.Element {
  const [commentFormData, setCommentFormData] = useState<CommentFormDataType>({ comment: '', rating: 0 });
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setCommentFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(commentFormData);
  };

  const handleStarHover = (rating: number) => {
    setHoveredRating(rating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const getStarState = (star: number) => {
    const currentRating = hoveredRating || commentFormData.rating;
    return star <= currentRating;
  };

  //TODO проблема с закрашиванием всех выбранных звезд в форме, оригинал разметки в offer.html
  return (
    <form onSubmit={handleSubmit} className="reviews__form form">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              onChange={handleChange}
              checked={commentFormData.rating === star}
            />
            <label
              className="reviews__rating-label form__rating-label"
              htmlFor={`${star}-stars`}
              title={`${star} stars`}
              onMouseEnter={() => handleStarHover(star)}
              onMouseLeave={handleStarLeave}
            >
              <svg
                className="form__star-image"
                width="37"
                height="33"
                style={{ fill: getStarState(star) ? '#ff9000' : '#c7c7c7' }}
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>

      <textarea
        id="review"
        name="comment"
        value={commentFormData.comment}
        onChange={handleChange}
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          type="submit"
          className="reviews__submit form__submit button"
          disabled={commentFormData.rating === 0 || commentFormData.comment.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}


export default CommentForm;
