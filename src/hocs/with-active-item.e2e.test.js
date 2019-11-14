import React from 'react';
import {shallow} from 'enzyme';
import withActiveItem from '../hocs/with-active-item';

describe(`withActiveItem hoc`, () => {
  const MockComponent = () => <div/>;
  const MockComponentWrapped = withActiveItem(MockComponent);
  const wrapper = shallow(<MockComponentWrapped/>);

  it(`intial state set correctly`, () => {
    expect(wrapper.state(`activeItem`)).toBe(-1);
  });

  it(`isActive changes correctly to value`, () => {
    wrapper.instance().activeChangeHandler(2);
    expect(wrapper.state(`activeItem`)).toBe(2);
  });
});
