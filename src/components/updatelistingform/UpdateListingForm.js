import { useState, useEffect } from 'react';
import { host } from '../../config';
import { Link, useHistory } from 'react-router-dom';
import './UpdateListingForm.css'

const UpdateListingForm = ({listingId}) => {
    const ownerId = document.cookie.split('=')[1];
    const [listing, setListing] = useState(null);
    let history = useHistory();

    const showPreview = (event) => {
        const output = document.getElementById('preview-update');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = () => URL.revokeObjectURL(output.src);
    }

    const getListing = async () => {
      const result = await fetch(`${host}/listings/${listingId}`);
      const listingData = await result.json();
      setListing(listingData);
    }; 

    const deleteListing = async () => {
      await fetch(`${host}/listings/${listing._id}`, { method: 'delete' });
      history.push('/deals');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.getElementById('updateListingForm');
        const formData = new FormData(form);

        await fetch(`${host}/listings/${listingId}`, { method: 'POST', body: formData });
        history.push('/deals');
    }

    const goBack = () => {
        history.go(-1);
      }

    useEffect(() => {
      getListing();
    }, []);

    if (!listing) {
        return (<div></div>);
    }

    return (
        <article className="form-container"> 
        <button onClick={goBack} className="btn-close"><span className="material-icons-round close-icon">close</span></button>
            <h2 className="header">Update listing</h2>
            <form onSubmit={handleSubmit} className="form-update" name="updateListingForm" id="updateListingForm" enctype="multipart/form-data" >
            <input type="hidden" value={ownerId} name="ownerId" />
            <input type="hidden" value={listing.pictures[0]} name="currentimage"></input>
            <label className="semibold">
                Listing title<br/>
                <input className="input-field" type="text" name="title" placeholder="title" required value={listing.title} onChange={(e) => setListing({...listing, title: e.target.value})}/>
                <br/>
            </label>
            <label className="semibold">
                Item description
                <br/>
                <textArea className="input-field" type="text" name="description" placeholder="description" onChange={(e) => setListing({...listing, description: e.target.value})} required>{listing.description}</textArea>
                <br/>
            </label>
            <label className="semibold">
                Price per day
                <br/>
                <input className="input-field" type="number" name="price" min="1" max="10000" placeholder="price (SEK)"  value={listing.attributes.price} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, price: e.target.value}})} required/>
                <br/>
            </label>
            <label className="semibold">
                Category
                <br/>
                <select className="input-select" name="category"  value={listing.attributes.category} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, category: e.target.value}})}>
                    <option value="trousers">Trousers</option>
                    <option value="jeans">Jeans</option>
                    <option value="shirt">Shirt</option>
                    <option value="dress">Dress</option>
                    <option value="skirt">Skirt</option>
                    <option value="jacket">Jacket</option>
                    <option value="suit">Suit</option>
                    <option value="accessories">Accessories</option>
                </select>
                <br/>
            </label>
            <label className="semibold">
                Color
                <br/>
                <select className="input-select" name="color" value={listing.attributes.color} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, color: e.target.value}})}>
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
                <br/>
            </label>
            <label className="semibold">
                Size
                <br/>
                <select className="input-select" name="size"  value={listing.attributes.size} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, size: e.target.value}})}>
                    <option value="xsmall">XS</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xlarge">XL</option>
                    <br/>
                </select>
            </label>
            <label className="semibold">
                Gender
                <br/>
                <select className="input-select" name="gender"  value={listing.attributes.gender} onChange={(e) => setListing({...listing, attributes: {...listing.attributes, gender: e.target.value}})}>
                    <option value="guys">Guys</option>
                    <option value="ladies">Ladies</option>
                    <option value="unisex">Unisex</option>
                </select>
                <br/>
            </label>
            <div className="form-update__preview">
                <img id="preview-update" src={`${host}/uploads/${listing.pictures[0]}`}/>
                <p>No image</p>
            </div>
            <label className="semibold input-img">
                Upload image <span className="material-icons-round icon-file-upload">file_upload</span>
                <br/>
                <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => showPreview(e)} required/>
            </label>
            <button className="btn-submit semibold" type="submit" >Update Listing</button>
            <button className="btn-delete semibold" onClick={deleteListing}>Delete Listing </button>
            </form>
        </article>
    )
}

export default UpdateListingForm
