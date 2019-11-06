import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviews from './movie-reviews.jsx';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const MovieReviewsComponent = renderer
    .create(<MovieReviews reviews={mockData.movies[0].reviews}/>);
  expect(MovieReviewsComponent).toMatchSnapshot();
});
