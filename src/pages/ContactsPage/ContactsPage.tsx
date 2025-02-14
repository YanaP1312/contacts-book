import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from "../../redux/contacts/selectors";
import DocumentTitle from "../../components/DocumentTitle";
import Waves from "../../blocks/Backgrounds/Waves/Waves";
import Loader from "../../components/Loader/Loader";

export default function ContactsPage() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const items = useAppSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Waves />
      <DocumentTitle>Your phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {items.length > 0 && <ContactList />}
    </>
  );
}
