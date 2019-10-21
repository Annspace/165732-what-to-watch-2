import React from "react";
import {shallow} from 'enzyme';
import App from "./App";

it(`Welcome screen click start`, () => {
  const clickTitleHandler = jest.fn();
  const AppComponent = shallow(<App moviesNames={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]} onClickTitle={clickTitleHandler}/>);
  const titles = AppComponent.find(`.small-movie-card__title`);
  titles.forEach((node) => {
    node.simulate(`click`);
  });
  expect(clickTitleHandler).toHaveBeenCalledTimes(3);
});
