import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operations';
import { selectToken, selectUserName } from 'redux/auth/auth-selectors';
import { Avatar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserMenuContainer, AvatarBlock } from './UserMenuStyled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);

  const handleClick = () => {
    dispatch(logoutUser({ token }));
  };

  return (
    <UserMenuContainer>
      <AvatarBlock>
        <Avatar
          alt="User avatar"
          src={require('../../images/avatar.png')}
          sx={{ width: 42, height: 42 }}
        />
        <p>{userName}</p>
      </AvatarBlock>

      <IconButton aria-label="delete" color="error" onClick={handleClick}>
        <LogoutIcon sx={{ width: 32, height: 32 }} />
      </IconButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
