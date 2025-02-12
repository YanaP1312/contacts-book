import { selectContacts } from "../contacts/selectors";
import { createSelector } from "reselect";
import { RootState } from "../store";
import { Contact } from "../reduxTypes/interfaceContact";

export const selectChangeFilter = (state: RootState) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectChangeFilter],
  (contacts: Contact[], filter: string | number) => {
    const filterString = String(filter).toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterString) ||
        contact.number.includes(filterString)
    );
  }
);
