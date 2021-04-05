import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './listing.css';
import { host } from '../../config';

const Listing = ({ listing }) => {
    const [ user, setUser ] = useState(null);
    const [ visibleDescription, setVisibleDescription] = useState(false);
    const [ visibleDates, setVisibleDates] = useState(false);


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
            <div className="listing__txt">
                <h3 className="listing__txt--title">{listing.title}</h3>
                <p className="listing__txt--username semibold">Rented out by <Link to={`/user/${user.user._id}`}>{user.user.firstName}</Link> ({user.rating}<span class="black-star material-icons-round">star_rate</span>)</p>
                <p className="listing__txt--price">{listing.attributes.price} SEK per day</p>
                <div className="listing__btns">
                    <p className="listing__btn listing__btn--underline" onClick={() => setVisibleDescription(!visibleDescription)}>Read more</p>
                    <p className="listing__btn listing__btn--underline" onClick={() => setVisibleDates(!visibleDates)}>See availablability</p>
                    <Link to={`/booking/${listing._id}`}>
                        <p className="listing__btn listing__btn--underline">Request to rent</p>
                    </Link>
                </div>
            </div>
            {visibleDescription &&<div className="listing__txt--description">
                <p>{listing.description}</p>
                {/* <p>{listing.attributes.category}</p> */}
            </div>}
            {visibleDates &&<div className="listing__txt--dates">
                <p>This item is available on these days</p>
            </div>}
        </article>
    );
}

export default Listing;