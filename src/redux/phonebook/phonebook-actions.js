import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchPhonebookRequest = createAction(
  'phonebook/fetchPhonebookRequest',
);
//fulfilled
export const fetchPhonebookSuccess = createAction(
  'phonebook/fetchPhonebookSuccess',
);
//rejected
export const fetchPhonebookError = createAction(
  'phonebook/fetchPhonebookError',
);

export const addContact = createAction('phonebook/Add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContact = createAction('phonebook/Delete');
export const changeFilter = createAction('phonebook/ChangeFilter');
