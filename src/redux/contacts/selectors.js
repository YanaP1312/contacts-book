import { createSelector } from "reselect";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectChangeFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectChangeFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
