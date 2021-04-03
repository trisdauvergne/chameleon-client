import ReviewFeed from "../../components/reviewfeed/ReviewFeed";
import { host } from '../../config';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
          <button onClick={goBack}>Go back</button>
          <article className="account-info">
              <h2>{userInfo.user.firstName} {userInfo.user.lastName}</h2>
              <div>
                <img src="https://i.pravatar.cc/150"/>
              </div>
              <div>
              <p>{userInfo.user.location.area}</p>
              <h3>{userInfo.user.firstName}'s average rating: {userInfo.rating}</h3>
              </div>
          </article>
          <ReviewFeed userId={match.params.userId}/> 
      </>
    )
}

export default User;