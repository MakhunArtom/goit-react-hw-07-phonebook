export const selectLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.contacts.filter;

export const selectAllContacts = state => state.contacts.items;

export const selectShowModal = state => state.contacts.showModal;

export const selectUpdateContactId = state => state.contacts.updateContactId;