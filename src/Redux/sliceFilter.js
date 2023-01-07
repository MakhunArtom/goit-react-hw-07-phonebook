import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: '',
  // Об'єкт редюсерів
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

// Генератори екшенів
export const { filterContacts } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;

// selector
export const getFilter = state => state.filter;
