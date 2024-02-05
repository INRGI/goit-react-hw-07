import { useDispatch, useSelector } from 'react-redux';
import { Button, Contact, Container } from './ContactList.styled';
import { getContacts, getFilters } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
};
    
const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilters);
    const visibleContacts = getVisibleContacts(contacts, filter);
    
    
    return (
        <Container>
            {visibleContacts.map(contact => (
                <Contact key={contact.id}>
                    {contact.name + ' : ' + contact.number}
                    <Button
                        type='button'
                        name='delete'
                        onClick={() => dispatch(deleteContact(contact.id))}
                    >
                        Delete
                    </Button>
                </Contact>
            ))}
        </Container>
    )
};

export default ContactList;