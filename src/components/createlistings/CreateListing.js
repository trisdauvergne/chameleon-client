const CreateListing = () => {
    return (
    <>
    <h1>Test Form</h1>
        <form method="POST" action="http://localhost:3001/listings" enctype="multipart/form-data">
            <label>
                Upload image
                <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg"/>
            </label>
            <label>
                <input type="text" name="title" placeholder="title" required/>
            </label>
            <label>
                <input type="text" name="description" placeholder="description" required/>
            </label>
            <label>
                Color
                <select name="color">
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
                <select name="category">
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
                <select name="size">
                    <option value="xsmall">XS</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xlarge">XL</option>
                </select>
            </label>
            <label>
                Gender
                <select name="gender">
                    <option value="guys">Guys</option>
                    <option value="ladies">Ladies</option>
                    <option value="unisex">Unisex</option>
                </select>
            </label>
            <label>
                Price
                <input type="number" name="price" min="1" max="10000" placeholder="price (SEK)" required/>
            </label>

        <button type="submit">Add post</button>
        </form>
        {/* <div>test</div>
        <h2>Posts</h2>
        {listings.map(listing => (
        <div key={listing._id}>
        <p>{listing._id}</p>
        <p>{listing.name}</p>
        <img src={`http://localhost:3001/uploads/${listing.imageName}`}/>
        </div> */}
        ))}
    </>
    );
}

export default CreateListing;