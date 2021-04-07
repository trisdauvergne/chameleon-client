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
      <div className="account-info__header">
        <h2 className="account-info__header-txt">Your account</h2>
        {/* <button className="account-info__logout">Log out</button> */}
      </div>
      <div className="flex-wrapper">
        <div className="flex-wrapper__left">
          <section className="account-info__img">
            <img src={`${host}${userInfo.user.picture}`}/>
          </section>
          <br/>
          <p className="semibold">Rating: {userInfo.rating}{typeof userInfo.rating === 'number' && <span class="material-icons-round account-info__star">star</span>}</p>
        </div>
        <section className="account-info__personal">
          <h3>{userInfo.user.firstName} {userInfo.user.lastName}</h3>
          <br/>
          <p className="semibold">Location:</p>
          <p>{userInfo.user.location.street}</p>
          <p>{userInfo.user.location.postalcode}, {userInfo.user.location.area}</p>
          <p className="semibold">Username:</p>
          <p>{userInfo.user.username}</p>
          <p className="semibold">Email:</p>
          <p>{userInfo.user.email}</p>
          <button className="account-info__edit semibold">Edit Details<span className="material-icons-round">edit</span></button>
          <button className="account-info__logout semibold">Log out<span className="material-icons-round icon-logout">logout</span></button>
        </section>
      </div>
    </article>
  );
};

export default AccountInfo;