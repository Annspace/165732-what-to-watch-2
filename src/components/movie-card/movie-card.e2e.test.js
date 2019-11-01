import React from 'react';
import {shallow} from 'enzyme';
import mockData from '../../mocks/films.js';
import MovieCard from './movie-card.jsx';

it(`Correct MovieCard data on hover`, () => {
  const hoverCardHandler = jest.fn(() => mockData.movies[0].id);
  const leaveCardHandler = jest.fn();
  const MovieCardComponent = shallow(<MovieCard
    id={mockData.movies[0].id}
    posterImage={mockData.movies[0].posterImage}
    title={mockData.movies[0].title}
    onHoverCard={hoverCardHandler}
    isPlaying={false}
    onLeaveCard={leaveCardHandler}
    src={mockData.movies[0].src}/>);
  const smallCard = MovieCardComponent.find(`.small-movie-card`);
  smallCard.simulate(`mouseover`);
  expect(hoverCardHandler).toHaveReturnedWith(mockData.movies[0].id);
});
