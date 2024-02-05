import { Formik, Field } from 'formik';
import { ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { Button, Container, FormBlock, Input, Label } from './ContactForm.styled';
import Error from '../Error/Error';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

const initialValues = {
  name: "",
  number: ""
};

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const ContactForm = () => {
    const nameId = nanoid();
    const numberId = nanoid();
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = (values, actions) => {
        const isContact = contacts.some(
            ({ name }) => name.toLowerCase() === values.name.toLowerCase()
        );

        if (isContact) {
            toast.error(`${values.name} already in contacts!`, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }


        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <FormBlock>
                    <Container>
                        <Label htmlFor={nameId}>Name</Label>
                        <Field as={Input} type="text" name="name" id={nameId} />
                        <ErrorMessage name="name">{msg => <Error msg={msg} />}</ErrorMessage>
                    </Container>
                    <Container>
                        <Label htmlFor={numberId}>Number</Label>
                        <Field as={Input} type="number" name="number" id={numberId} />
                        <ErrorMessage name="number">{msg => <Error msg={msg} />}</ErrorMessage>
                    </Container>
                    <Button type='submit'>Add contact</Button>
                </FormBlock>
            </Formik>
            <ToastContainer />
        </>
    );
};


export default ContactForm;
