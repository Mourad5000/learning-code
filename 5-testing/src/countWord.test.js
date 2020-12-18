import { countWords, multiplicator } from './functions';

// 1. testejar errors
describe('Testing of functions', () => {
  describe('Countwords function', () => {
    test('Should return an error when phrase is undefined', () => {
      // arrange
      const phrase = undefined;
      // act
      const result = countWords(phrase);
      // assert
      expect(result).toBe('Phrase is not defined');
    });
    test('Should count all the word', () => {
      // arrange
      const phrase = 'Hola me llamo Mourad';
      // act
      const result = countWords(phrase);
      // assert
      expect(result).toBe(4);
    });
    test('Should return 0 when phrase is an empty string', () => {
      // arrange
      const phrase = '';
      // act
      const result = countWords(phrase);
      // assert
      expect(result).toBe(0);
    });
  });
  describe('multiplicator function', () => {
    test('Should return error when num is Nan', () => {
      // arrange
      const num = 'hola';
      // act
      const result = multiplicator(num);
      // assert
      expect(result).toBe('Enter a correct value');
    });
    test('Should return an error when num is undefined', () => {
      const result = multiplicator();

      expect(result).toBe('Enter a correct value');
    });
    test('Should return an array with the correct value when num is number', () => {
      const num = 2;

      const result = multiplicator(num);

      const expectedValue = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

      expect(result).toEqual(expectedValue);
    });
  });
});
