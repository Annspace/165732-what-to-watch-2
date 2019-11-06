import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const TabsComponent = renderer
    .create(<Tabs tabs={[`Overview`, `Details`, `Reviews`]} movie={mockData.movies[0]}/>);
  expect(TabsComponent).toMatchSnapshot();
});
