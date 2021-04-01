import { useState, useEffect } from 'react';
import { host } from '../../config';
import { Link, useHistory } from 'react-router-dom';

const UpdateListingForm = ({listingId}) => {
    const [listing, setListing] = useState(null);
    let history = useHistory();

    const getListing = async () => {
      const result = await fetch(`${host}/listings/${listingId}`);
      const listingData = await result.json();
      setListing(listingData);
      console.log(listingData);
    }; 

    const deleteListing = async () => {
      await fetch(`${host}/listings/${listing._id}`, { method: 'delete' });
      history.push('/deals');
    }

    useEffect(() => {
      getListing();
    }, []);

    if (!listing) {
        return (<div></div>);
    }

    return (
        <form method="POST" action={`${host}/listings/${listingId}`} enctype="multipart/form-data" >
            <input type="hidden" value={listing.pictures[0]} name="currentimage"></input>
            <label>
                Upload image
                <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg"/>
            </label>
            <label>
                <input type="text" name="title" placeholder="title" required value={listing.title} onChange={(e) => setListing({...listing, title: e.target.value})}/>
            </label>
            <label>
                <input type="text" name="description" placeholder="description" required value={listing.description} onChange={(e) => setListing({...listing, description: e.target.value})}/>
            </label>
            <label>
                Color
                <select name="color" value={listing.attributes.color} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, color: e.target.value}})}>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="grey">Grey</option>
                    <option value="brown">Brown</option>
                    <option value="mixed">Mixed</option>
                    <option value="yellow">Yellow</option>
                </select>
            </label>
            <label>
                Category
                <select name="category"  value={listing.attributes.category} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, category: e.target.value}})}>
                    <option value="trousers">Trousers</option>
                    <option value="jeans">Jeans</option>
                    <option value="shirt">Shirt</option>
                    <option value="dress">Dress</option>
                    <option value="skirt">Skirt</option>
                    <option value="jacket">Jacket</option>
                    <option value="suit">Suit</option>
                    <option value="accessories">Accessories</option>
                </select>
            </label>
            <label>
                Size
                <select name="size"  value={listing.attributes.size} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, size: e.target.value}})}>
                    <option value="xsmall">XS</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xlarge">XL</option>
                </select>
            </label>
            <label>
                Gender
                <select name="gender"  value={listing.attributes.gender} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, gender: e.target.value}})}>
                    <option value="guys">Guys</option>
                    <option value="ladies">Ladies</option>
                    <option value="unisex">Unisex</option>
                </select>
            </label>
            <label>
                Price
                <input type="number" name="price" min="1" max="10000" placeholder="price (SEK)"  value={listing.attributes.price} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, price: e.target.value}})} required/>
            </label>
                <button type="submit" >Update Listing</button>
                <button onClick={deleteListing}>Delete</button>
    </form>
    )
}

export default UpdateListingForm
