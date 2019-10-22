import React from 'react';
import renderer from 'react-test-renderer';
import App from "./App";

it(`renders correctly`, () => {
  const clickTitleHandler = jest.fn();
  const AppComponent = renderer
    .create(<App moviesNames={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]} onClickTitle={clickTitleHandler}/>);
  expect(AppComponent).toMatchSnapshot();
});
