import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    name: '',
    description: '',
    price: '',
    image: []
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(newPost);
    await fetch('http://localhost:3001/posts', {method: 'POST', headers: {"Content-Type": "multipart/form-data"}, body: JSON.stringify(newPost)});
    setNewPost({
      name: '',
      description: '',
      price: ''
    })
  };

  const getPosts = async () => {
    try {
      const data = await fetch('http://localhost:3001/posts');
      const postsData = await data.json();
      setPosts(postsData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h1>Test Form</h1>
      {/* <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" value={newPost.name} onChange={(e) => setNewPost({...newPost, name: e.target.value})}/>
        <input type="text" name="description" value={newPost.description} onChange={(e) => setNewPost({...newPost, description: e.target.value})}/>
        <input type="text" name="price" value={newPost.price} onChange={(e) => setNewPost({...newPost, price: e.target.value})}/>
        <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => setNewPost({...newPost, image: e.target.files[0]})} />
        <button type="submit">Create Post</button>
      </form> */}
      <form method="POST" action="http://localhost:3001/posts" enctype="multipart/form-data">
        <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg"/>
        <input type="text" name="name"/>
        <input type="text" name="description"/>
        <input type="text" name="price"/>
        <button type="submit">Add post</button>
      </form>
      <div>test</div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post._id}>
          <p>{post._id}</p>
          <p>{post.name}</p>
          <img src={`http://localhost:3001/uploads/${post.imageName}`}/>
        </div>
      ))}
    </div>
  );
}

export default App;
