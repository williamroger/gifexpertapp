import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests GifGridItem component', () => {
  const title = 'Poster Star Wars';
  const url = 'http://starwars.com/poster.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should be GifGrid', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be tag <p> has text with title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test('should be tag <img> has properties url and title', () => {
    const img = wrapper.find('img');
    // console.log(img.prop('src'));
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should be tag <div> has class animate__fadeInDown', () => {
    const div = wrapper.find('div');
    const className = div.prop('className').split(' ');

    expect(className.includes('animate__fadeInDown')).toBe(true);
  });
});