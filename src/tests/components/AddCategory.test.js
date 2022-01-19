import React from 'react';
import '@testing-library/jest-dom';

import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Tests form component AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should be component AddCategory', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be change value of input', () => {
    const input = wrapper.find('input');
    const value = 'Star Wars';

    input.simulate('change', { target: { value }});

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('should not be send value on submit form', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should be called setCategories and cleaned input value on submit', () => {
    const input = wrapper.find('input');
    const value = 'Big Bang Theory';

    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});