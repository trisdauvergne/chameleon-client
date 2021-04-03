const Filter = ({ changeFilter, resetFilters }) => {

    const reset = () => {
        resetFilters();
        document.getElementById('gender').selectedIndex = 0;
        document.getElementById('category').selectedIndex = 0;
        document.getElementById('size').selectedIndex = 0;
    }

  return  (
  <article>
    <div>
      <label>Gender
        <select name="gender" id="gender" onChange={(e) => changeFilter('gender', e.target.value)}>
          <option value="all">Include all</option>
          <option value="guys">Guys</option>
          <option value="ladies">Ladies</option>
          <option value="unisex">Unisex</option>
        </select>
      </label>
    </div>
    <div>
      <label>Category
        <select name="category" id="category" onChange={(e) => changeFilter('category', e.target.value)}>
          <option value="all">Include all</option>
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
    </div>
    <div>
      <label>Size
        <select name="size" id="size" onChange={(e) => changeFilter('size', e.target.value)}>
          <option value="all">Include all</option>
          <option value="xsmall">XS</option>
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
          <option value="xlarge">XL</option>
        </select>
      </label>
    </div>
    <button onClick={reset}>Reset</button>
  </article>
  )
}

export default Filter;