import { host } from '../../config';
import { useState, useEffect } from 'react';

const AccountInfo = () => {
  const userId = document.cookie.split('=')[1];
  const [userInfo, setUserInfo] = useState(null);

  const getUser = async () => {
    const response = await fetch(`${host}/users/${userId}`);
    const userData = await response.json();
    setUserInfo(userData);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!userInfo) {
    return null;
  }

  return (
    <article className="account-info">
      <h2>{userInfo.user.firstName} {userInfo.user.lastName}</h2>
      <div>
          <img src="https://i.pravatar.cc/150"/>
      </div>
      <div>
          <p>{userInfo.user.username}</p>
          <p>{userInfo.user.email}</p>
          <br/>
          <p>{userInfo.user.location.street}</p>
          <p>{userInfo.user.location.postalcode}, {userInfo.user.location.area}</p>
      </div>
      <button>Edit account settings</button>
    </article>
  );
};

export default AccountInfo;