import { deepflat } from './deepflat.js';

describe('When valid potentially nested arrays are passed', () => {
  it('Should flatten the array', () => {
    const arg = ['a', 'b', 'c'];
    expect(deepflat(arg)).toEqual(['a', 'b', 'c']);
  });
  it('Should flatten a nest array', () => {
    const arg = ['a', ['b', ['c']]];
    expect(deepflat(arg)).toEqual(['a', 'b', 'c']);
  });
});

describe('When invalid arguments are passed', () => {
  it('Should throw an error', () => {
    expect(() => deepflat('a string')).toThrow();
  });
});
