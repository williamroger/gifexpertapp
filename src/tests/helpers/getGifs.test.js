import { getGifs } from '../../helpers/getGifs';

describe('tests for helper getGifs Fetch', () => {
  test('should getGifs return 10 elements', async () => {
    const gifs = await getGifs('star wars');

    expect(gifs.length).toBe(10);
  });

  test('should getGifs without parameter return an empty array', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  })
});