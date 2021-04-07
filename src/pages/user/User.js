import ReviewFeed from "../../components/reviewfeed/ReviewFeed";
import { host } from '../../config';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './user.css';

const User = ({match}) => {
  let history = useHistory();
    const [userInfo, setUserInfo] = useState(null);

    const getUser = async () => {
      const response = await fetch(`${host}/users/${match.params.userId}`);
      const userData = await response.json();
      setUserInfo(userData);
    }

    const goBack = () => {
      history.go(-1);
    }

    useEffect(() => {
      getUser();
    }, []);
  
    if (!userInfo) {
      return null;
    }

    return (
      <>
        <article className="user-info">
          <button className="btn-close btn-back-user" onClick={goBack}><span className="material-icons-round close-icon">close</span></button>
          <h2 className="user-info__name">{userInfo.user.firstName} {userInfo.user.lastName}</h2>
          <div className="flex-wrapper">
            <section className="user-info__img">
              <img src={`${host}${userInfo.user.picture}`}/>
            </section>
            <section className="user-info__info">
              <h3 className="user-info__rating">Rating: {userInfo.rating}{typeof userInfo.rating === 'number' && <span class="material-icons-round user-info__star">star</span>}</h3>
              <p className="semibold">Location:</p>
              <p>{userInfo.user.location.area}</p>
            </section>
          </div>
        </article>
        <ReviewFeed userId={match.params.userId}/> 
      </>
    )
}

export default User;