import { selectContacts } from "../contacts/selectors";
import { createSelector } from "reselect";

export const selectChangeFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectChangeFilter],
  (contacts, filter) => {
    console.log("contacts:", contacts);
    console.log("filter:", filter);
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
