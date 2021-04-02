import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './listing.css';
import { host } from '../../config';

const Listing = ({ listing }) => {
    const [ user, setUser ] = useState(null);

    const getUser = async () => {
        const userData = await fetch(`${host}/users/${listing.ownerId}`);
        const userInfo = await userData.json();
        setUser(userInfo);
    }

    useEffect(() => {
        getUser();
    }, []);

    if(!user) {
        return null;
    }

    return (
        <article className="listing">
            <img className="listing__img" src={`${host}/uploads/${listing.pictures[0]}`} alt={listing.title}/>
            <h1>{listing.title}</h1>
            <p>{listing.description}</p>
            <p>{listing.attributes.price} kr</p>
            <p>{listing.attributes.category}</p>
            <Link to={`/user/${user.user._id}`}>
                <p>{user.user.firstName}</p>
            </Link>
            <p>Rating: {user.rating}</p>
            <Link to={`/booking/${listing._id}`}>
                <button>Request to rent</button>
            </Link>
        </article>
    );
}

export default Listing;