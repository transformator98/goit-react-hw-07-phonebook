import * as phonebookActions from './phonebook-actions';
import * as phonebookShelfAPI from '../../services/phonebookShelf-api';

export const fetchPhonebooks = () => async dispatch => {
  dispatch(phonebookActions.fetchPhonebookRequest());

  try {
    const phonebook = await phonebookShelfAPI.fetchhonebook();
    dispatch(phonebookActions.fetchPhonebookSuccess(phonebook));
  } catch (error) {
    dispatch(phonebookActions.fetchPhonebookError(error));
  }
};
