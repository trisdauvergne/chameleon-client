import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './listing.css';
import { host } from '../../config';

const Listing = ({ listing }) => {
    const [ user, setUser ] = useState(null);
    const [ visibleDescription, setVisibleDescription] = useState(false);
    const [bookingDates, setBookingDates] = useState([]);

    const getUser = async () => {
        const userData = await fetch(`${host}/users/${listing.ownerId}`);
        const userInfo = await userData.json();
        setUser(userInfo);
    }

    const getAvailability = async () => {
        const bookingData = await fetch(`${host}/bookings/${listing._id}`);
        const bookingInfo = await bookingData.json();
        setBookingDates(bookingInfo);
    }

    useEffect(() => {
        getUser();
        getAvailability();
    }, []);

    if(!user) {
        return null;
    }

    return (
        <article className="listing">
            <img className="listing__img" src={`${host}/uploads/${listing.pictures[0]}`} alt={listing.title}/>
            <div className="listing__txt">
                <h3 className="margin-btm">{listing.title}</h3>
                <p className="margin-btm semibold">Rented out by <Link to={`/user/${user.user._id}`}>{user.user.firstName}</Link> ({user.rating}{user.rating !== 'No ratings yet' && <span class="orange-star material-icons-round">star_rate</span>})</p>
                <p className="margin-btm">Category: {`${listing.attributes.category.charAt(0).toUpperCase() + listing.attributes.category.slice(1)}`}, Size: {`${listing.attributes.size.charAt(0).toUpperCase() + listing.attributes.size.slice(1)}`}</p>
                <p className="margin-btm">{listing.attributes.price} SEK per day</p>
                <div className="listing__btns">
                    <button className="listing__btn listing__btn--more semibold" onClick={() => setVisibleDescription(!visibleDescription)}>Read more</button>
                    <Link to={`/booking/${listing._id}`}>
                        <button className="listing__btn listing__btn--request semibold">Request to rent</button>
                    </Link>
                </div>
            </div>
            {visibleDescription &&<div className="listing__txt--description">
                <p className="margin-btm">{listing.description}</p>
                {bookingDates.length !== 0 && <p className="margin-btm">This item has been booked on the following dates:</p>}
                {bookingDates.map(bookingDate => <p className="semibold">{bookingDate.bookingFrom} to {bookingDate.bookingTo}</p>)}
            </div>}
        </article>
    );
}

export default Listing;