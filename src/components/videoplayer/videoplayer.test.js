import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './videoplayer.jsx';
import mockData from '../../mocks/films.js';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}

it(`renders correctly`, () => {
  const options = {createNodeMock};
  const VideoPlayerComponent = renderer
    .create(<VideoPlayer
      isPlaying={false}
      src={mockData.movies[0].src}
      poster={mockData.movies[0].posterImage}
      isMuted={true}
    />, options).toJSON();
  expect(VideoPlayerComponent).toMatchSnapshot();
});
