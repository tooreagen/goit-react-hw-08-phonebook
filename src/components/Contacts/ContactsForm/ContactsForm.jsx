import { Form } from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsArray } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';
import { TextField, Button } from '@mui/material';

export function ContactsForm() {
  const contacts = useSelector(selectContactsArray);
  const dispatch = useDispatch();

  const handleContactAdd = evt => {
    const { name, number } = evt.target;
    evt.preventDefault();
    if (contacts.some(item => item.name === name.value)) {
      alert(`${name.value} is already in contacts.`);
    } else {
      dispatch(addContact({ name: name.value, number: number.value }));
    }
    evt.target.reset();
  };

  return (
    <Form onSubmit={handleContactAdd}>
      <TextField
        name="name"
        type="text"
        label="Name"
        color="primary"
        size="small"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        focused
      />
      <TextField
        name="number"
        type="tel"
        label="Number"
        color="primary"
        size="small"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        focused
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Form>
  );
}
