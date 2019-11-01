import React from 'react';
import {mount} from 'enzyme';
import mockData from '../../mocks/films.js';
import VideoPlayer from './videoplayer.jsx';

it(`Two states in Videoplayer component`, () => {
  const wrapper = (isPlaying) => {
    return mount(
        <VideoPlayer
          src={mockData.movies[0].src}
          poster={mockData.movies[0].posterImage}
          isPlaying={isPlaying}/>
    );
  };
  expect(wrapper(true).state().isPlaying).toBeTruthy();
  expect(wrapper(false).state().isPlaying).toBeFalsy();
});
