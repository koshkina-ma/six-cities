import { FC, Fragment, useState, ReactEventHandler } from 'react';
import { CommentFormDataType } from '../../types';

type CommentFormProps = {
  onSubmit: (data: CommentFormDataType) => void;
};

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

const ratings = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'poor' },
  { value: 1, label: 'terrible' },
];

const CommentForm: FC<CommentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CommentFormDataType>({ comment: '', rating: 0 });

  const handleChange: TChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: name === 'rating' ? Number(value) : value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {ratings.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
              checked={formData.rating === value}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.rating === 0 || formData.comment.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
