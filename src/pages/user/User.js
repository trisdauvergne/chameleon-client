import ReviewFeed from "../../components/reviewfeed/ReviewFeed";
import { host } from '../../config';
import { useState, useEffect } from 'react';

const User = ({match}) => {
    const [userInfo, setUserInfo] = useState(null);

    const getUser = async () => {
      const response = await fetch(`${host}/users/${match.params.userId}`);
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
        <>
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