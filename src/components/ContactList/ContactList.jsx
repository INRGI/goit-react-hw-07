import { useDispatch, useSelector } from 'react-redux';
import { Button, Contact, Container } from './ContactList.styled';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

    
const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);
    
    
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