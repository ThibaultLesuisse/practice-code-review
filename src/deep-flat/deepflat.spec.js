import deepflat from "./deepflat";

describe('When valid arguments are passed', () => {
    it('Should return valid array when passed array is already flat', () => {
        expect(deepflat(['a', 'b'])).toEqual(['a', 'b']);
    });
    it('Should return a flattened array when there is one nested array', () => {
        expect(deepflat(['a', ['b']])).toEqual(['a', 'b']);
    });
    it('Should return a flattened array when there are two nested arrays', () => {
        let arg = ['a', ['b', ['c']]]
        expect(deepflat(arg)).toEqual(['a', 'b', 'c']);
    });
    it('Should return a flattened array when there are two nested arrays with numbers', () => {
        let arg = [1, [2, [3]]];
        expect(deepflat(arg)).toEqual([1, 2, 3]);
    })
})