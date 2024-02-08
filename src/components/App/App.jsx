import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { ContactTitle, Container, EmptyTitle, PhoneTitle } from "./App.styled";
import { selectContacts, selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Container>
        <PhoneTitle>Phonebook</PhoneTitle>
        <ContactForm />

      <ContactTitle>Contacts</ContactTitle>

        {contacts.length > 0 ? (
        <Filter />
        ) : (
          <EmptyTitle>Your phonebook is empty.</EmptyTitle>
        )}
        {contacts.length > 0 && (
          <ContactList />
        )}
        
      </Container>
    );
};

export default App;