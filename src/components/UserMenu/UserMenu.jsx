const UserMenu = () => {
    return (
      <div>
        <img src={require('../../images/avatar.png')} alt="User avatar" width={30}/>
        <p>Hello, {}</p>
        <button type="button">LogOut</button>
      </div>
    );
}

export default UserMenu;