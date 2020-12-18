import axios from 'axios';
import actionTypes from './actionTypes';
import { requestCharactersSucces, requestCharacters, requestCharactersError } from './charactersActions';

jest.mock('axios');

describe('Characters actions', () => {
  test('Should return an action with type LOAD:CHARACTERS & the list', () => {
    const charactersList = [{ name: 'Gerard' }];

    const result = requestCharactersSucces(charactersList);

    const expectedValue = {
      type: actionTypes.LOAD_CHARACTERS,
      charactersList,
    };
    // toEqual per arrays i objectes!
    expect(result).toEqual(expectedValue);
  });

  xtest('Should return an action with type LOAD:ERROR & the errror', ()=>{
    const error = 'No se cómo hacer los test de error, ya que no se que devuelve la variable error'

    const myResult = requestCharactersError(error);

    const expectedValue = {
      type: actionTypes.LOAD_CHARACTERS_ERROR,
      error,
    };
    // toEqual per arrays i objectes!
    expect(myResult).toEqual(expectedValue);
  });

  
  describe('requestCharacters tests', () => {
    test('should call dispatch with requestCharacters error', async () => {
      const dispatch = jest.fn();
      axios.get.mockReturnValue(Promise.reject(Error('Could not get characters')));

      await requestCharacters()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test('Should dispatch with requestCharactersSucces', async () => {
      const dispatch = jest.fn();
      const axiosMock = {
        data: { name: 'Mou' },
      };
      axios.get.mockReturnValue(Promise.resolve(axiosMock));

      await requestCharacters()(dispatch);

      expect(dispatch.mock.calls[0][0].charactersList.length).toBe(100);
    });
  });
});
