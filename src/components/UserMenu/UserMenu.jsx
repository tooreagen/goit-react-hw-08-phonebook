import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operations';
import { selectToken, selectUserName } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);

  const handleClick = () => {
    dispatch(logoutUser({ token }));
  };

  return (
    <div>
      <img
        src={require('../../images/avatar.png')}
        alt="User avatar"
        width={30}
      />
      <p>Hello, {userName}</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
