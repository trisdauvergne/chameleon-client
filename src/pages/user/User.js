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
          <button onClick={goBack}>Go back</button>
          <h2 className="user-info__name">{userInfo.user.firstName} {userInfo.user.lastName}</h2>
          <div className="flex-wrapper">
            <section className="user-info__img">
              <img src="https://i.pravatar.cc/150"/>
            </section>
            <section className="user-info__info">
              <h3>Rating: {typeof userInfo.rating === 'number' && <span class="material-icons-round user-info__star">star</span>}{userInfo.rating}</h3>
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