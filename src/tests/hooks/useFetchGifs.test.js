import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test for customHook useFetchGifs', () => {
  test('should useFetchGifs return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Spiderman'));
    const { data, loading } = result.current;
    
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should useFetchGifs return an array of images and loading to equal false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Spiderman'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});