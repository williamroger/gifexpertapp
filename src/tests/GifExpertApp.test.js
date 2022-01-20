import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Tests form GifExpertApp', () => {
  test('should be render GifExpertApp', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should be render GifExpertApp with two components GifGrid', () => {
    const categories = ['Star Wars', 'Spiderman'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});