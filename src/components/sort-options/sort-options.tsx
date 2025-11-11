import { useState } from 'react';
import { SORT_TYPES } from '../../const';

type SortOptionsProps = {
  value: string;
  onChange: (sortType: string) => void;
};

const SORT_OPTIONS = Object.values(SORT_TYPES);

function SortOptions({ value, onChange }: SortOptionsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {SORT_OPTIONS.map((type) => (
            <li
              key={type}
              className={`places__option${type === value ? ' places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleOptionClick(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortOptions;
