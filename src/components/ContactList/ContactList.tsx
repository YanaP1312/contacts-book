import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { useAppSelector } from "../../redux/hooks";

export default function ContactList() {
  const filteredContacts = useAppSelector(selectFilteredContacts);

  return (
    <ul className={s.contactsList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p className={s.noMatches}>No matches found</p>
      )}
    </ul>
  );
}
