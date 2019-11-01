import React from 'react';
import {mount} from 'enzyme';
import mockData from '../../mocks/films.js';
import VideoPlayer from './videoplayer.jsx';

const wrapper = (isPlaying) => {
  return mount(
      <VideoPlayer
        src={mockData.movies[0].src}
        poster={mockData.movies[0].posterImage}
        isPlaying={isPlaying}/>
  );
};

it(`Two states in Videoplayer component`, () => {
  expect(wrapper(true).state().playing).toBeTruthy();
  expect(wrapper(false).state().playing).toBeFalsy();
});
