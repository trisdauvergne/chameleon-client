import { host } from '../../config';
import { useHistory } from 'react-router-dom';
import './CreateListing.css';

const CreateListing = () => {
    const ownerId = document.cookie.split('=')[1];
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.getElementById('listingForm');
        const formData = new FormData(form);

        await fetch(`${host}/listings`, { method: 'POST', body: formData });
        history.push('/deals');
    };

    const goBack = () => {
        history.go(-1);
      }

    return (

    <article className="form-container">
        <button onClick={goBack} className="btn-close"><span className="material-icons-round close-icon">close</span></button>
    <h2 className="header-create-listing">List a new item</h2>
        <form className="form-create-listing" onSubmit={handleSubmit} id="listingForm" name="listingForm" encType="multipart/form-data">
            <input type="hidden" value={ownerId} name="ownerId" />
            <label className="semibold">
                Listing title (required)
                <br/>
                <input className="input-field" type="text" name="title" placeholder="The title for your listing" required/>
                <br/>
            </label>
            <label className="semibold">
                Item description (required)
                <br/>
                <input className="input-field" type="text" name="description" placeholder="Describe the item in a few words" required/>
                <br/>
            </label>
            <label className="semibold">
                Price per day (required)
                <br/>
                <input className="input-field" type="number" name="price" min="1" max="10000" placeholder="Price per day in SEK" required/>
                <br/>
            </label>
            <label className="semibold">
                Category
                <br/>
                <select className="input-field input-select" name="category">
                    <option value="guys">Select an option</option>
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
                <select className="input-field input-select" name="color">
                <option value="guys">Select an option</option>
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
                <select className="input-field input-select" name="size">
                <option value="guys">Select an option</option>
                    <option value="xsmall">XS</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xlarge">XL</option>
                </select>
                <br/>
            </label>
            <label className="semibold">
                Gender
                <br/>
                <select className="input-field input-select" name="gender">
                    <option value="guys">Select an option</option>
                    <option value="guys">Guys</option>
                    <option value="ladies">Ladies</option>
                    <option value="unisex">Unisex</option>
                </select>
                <br/>
            </label>
            <label className="semibold input-img">
                Upload image <span className="material-icons-round icon-file-upload">file_upload</span>
                <br/>
                <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg" required/>
            </label>
            <br/>
        <button className="btn-submit semibold" type="submit">Add post</button>
        </form>
    </article>
    );
}

export default CreateListing;