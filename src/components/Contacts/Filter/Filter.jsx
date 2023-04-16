import { FilterWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filter-slice';
import { TextField } from '@mui/material';

export function Filter() {
  const dispatch = useDispatch();

  const handleContactFind = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FilterWrap>
      <TextField
        onChange={handleContactFind}
        type="text"
        label="Find contacts by name"
        color="primary"
        size="small"
        focused
      />
    </FilterWrap>
  );
}
