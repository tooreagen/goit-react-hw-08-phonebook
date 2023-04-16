import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { ListItem, IconButton, ListItemText, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export function ContactsListItem(props) {
  const { id, name, number } = props.item;
  const dispatch = useDispatch();

  const handleContactDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleContactDelete}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={`${name}`} secondary={`${number}`} />
      </ListItem>
      <Divider />
    </>
  );
}

ContactsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
