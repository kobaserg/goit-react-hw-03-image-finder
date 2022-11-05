import React from 'react';
import { BtnLoadMoreSection, BtnLoadMore } from './Button.styled';

import PropTypes from 'prop-types';

export const Button = () => {
  return (
    <BtnLoadMoreSection>
      <BtnLoadMore type="button">Load More</BtnLoadMore>
    </BtnLoadMoreSection>
  );
};
