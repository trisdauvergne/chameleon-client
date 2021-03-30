import { useState, useEffect } from 'react';
const Listing = ({ listing }) => {
    const [ user, setUser ] = useState('');

    const getUser = async () => {
        const userData = await fetch(`http://localhost:3001/users/${listing.owner}`);
        const userInfo = await userData.json();
        console.log(userInfo);
        setUser(userInfo);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <article className="listing">
            <img src={`http://localhost:3001/uploads/${listing.pictures[0]}`} alt={listing.title}/>
            <h1>{listing.title}</h1>
            <p>{listing.description}</p>
            <p>{listing.attributes.price} kr</p>
            <p>{user.firstName}</p>
        </article>
    );
}

export default Listing;