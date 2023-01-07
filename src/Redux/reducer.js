import { getContact, addContacts, deletContacts, filter } from './action';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [getContact]: (state, action) => {
    return action.payload;
  },
  [addContacts]: (state, action) => {
    return [...state, action.payload];
  },
  [deletContacts]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filtersInitialState = '';

export const folterReducer = createReducer(filtersInitialState, {
  [filter]: (state, action) => action.payload,
});
