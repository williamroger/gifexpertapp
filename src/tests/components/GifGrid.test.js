import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests for component GifGrid', () => {
  const category = 'Spiderman';

  test('should be render GifGrid', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should be render GifGrid with imagens of useFetchGifs', () => {
    const gifs = [{
      id: '123ABC',
      title: 'Poster Spiderman',
      url: 'http://marvel.com/poster/spiderman.jpg',
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});