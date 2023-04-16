import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filter-slice';
import { TextField } from '@mui/material';

export function Filter() {
  const dispatch = useDispatch();

  const handleContactFind = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
      <TextField
        onChange={handleContactFind}
        type="text"
        label="Find contacts by name"
        color="primary"
      size="small"
      fullWidth
        focused
      />
  );
}
