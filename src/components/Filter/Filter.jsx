import PropTypes from 'prop-types';

import { FilterBox } from './Filter.styled';

export default function Filter({ name, onChangeInput }) {
  return (
    <FilterBox>
      <p>Find contacts by name</p>
      <input
        className="styled-input"
        value={name}
        name={name}
        onChange={onChangeInput}
      />
    </FilterBox>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
