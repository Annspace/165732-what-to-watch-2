import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './videoplayer.jsx';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const VideoPlayerComponent = renderer
    .create(<VideoPlayer isPlaying={false} src={mockData.movies[0].src} poster={mockData.movies[0].posterImage} />);
  expect(VideoPlayerComponent).toMatchSnapshot();
});
