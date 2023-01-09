import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
    showModal: false,
    updateContactId: '',
  },

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },

    setShowModal(state, action) {
      state.showModal = action.payload;
    },

    setUpdateContactId(state, action) {
      state.updateContactId = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },

    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
      state.error = null;
    },

    [deleteContact.rejected]: handleRejected,

    [updateContact.pending]: handlePending,
    [updateContact.fulfilled]: (state, action) => {
    
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item);
      
      state.isLoading = false;
      state.error = null;
    },

    [updateContact.rejected]: handleRejected,
  },
});

export const { setFilter, setShowModal, setUpdateContactId } =
  contactSlice.actions;

export const contactReduser = contactSlice.reducer;
