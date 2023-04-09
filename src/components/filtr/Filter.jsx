import React from 'react';
import { FilterStyle } from './Filter.styled';
import propTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterStyle>
      <label>
        Find contacts by name{' '}
        <input type="text" value={value} onChange={onChange} />
      </label>
    </FilterStyle>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};