import { ContactsForm } from 'components/Contacts/ContactsForm/ContactsForm';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { Filter } from 'components/Contacts/Filter/Filter';
import { Loading } from 'components/Loading/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectFetchError,
  selectIsLoadingState,
} from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import { PhonebookHeader } from 'components/Contacts/ContactsForm/ContactsForm.styled';
import { FilterWrap } from 'components/Contacts/Filter/Filter.styled';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoadingState);
  const dispatch = useDispatch();
  const error = useSelector(selectFetchError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <main>
      <PhonebookHeader>Phonebook</PhonebookHeader>
      <ContactsForm />

      <FilterWrap>
        <PhonebookHeader>Contacts</PhonebookHeader>
        <Filter />
      </FilterWrap>
      {isLoading ? <Loading /> : <ContactsList />}
    </main>
  );
};
export default ContactsPage;
