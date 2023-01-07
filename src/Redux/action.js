import { createAction } from '@reduxjs/toolkit';

export const getContact = createAction('contacts/getContacts');

export const addContacts = createAction('contacts/addContacts');

export const deletContacts = createAction('contacts/deletContacts');

export const filter = createAction('filter/filter');
