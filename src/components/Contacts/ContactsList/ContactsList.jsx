import { ContactsListItem } from 'components/Contacts/ContactsListItem/ContactsListItem';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import {
  selectContactsArray,
  selectFilterString,
} from 'redux/contacts/contacts-selectors';

export function ContactsList() {
  const contacts = useSelector(selectContactsArray);
  const filterString = useSelector(selectFilterString);

  return (
    <List>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filterString))
        .map(item => {
return <ContactsListItem key={item.id} item={item} />;
        })}
    </List>
  );
}