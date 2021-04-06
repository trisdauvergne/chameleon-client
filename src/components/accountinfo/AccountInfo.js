import { host } from '../../config';
import { useState, useEffect } from 'react';
import './accountinfo.css';

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
      <h2>Account</h2>
      <div className="flex-wrapper">
      <section className="account-info__img">
            <img src={`${host}${userInfo.user.picture}`}/>
        </section>
        <section className="account-info__personal">
          <h3>{userInfo.user.firstName}</h3>
          <h3>{userInfo.user.lastName}</h3>
          <p className="semibold">Rating: {typeof userInfo.rating === 'number' && <span class="material-icons-round account-info__star">star</span>}{userInfo.rating}</p>
          <button className="account-info__edit">Edit Details<span class="material-icons-round">edit</span></button>
        </section>
      </div>
      <section className="account-info__account">
        <p className="semibold">Location:</p>
        <p>{userInfo.user.location.street}</p>
        <p>{userInfo.user.location.postalcode}, {userInfo.user.location.area}</p>
        <p className="semibold">Username:</p>
        <p>{userInfo.user.username}</p>
        <p className="semibold">Email:</p>
        <p>{userInfo.user.email}</p>
      </section>
    </article>
  );
};

export default AccountInfo;