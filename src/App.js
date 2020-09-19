import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';

function App() {
  return (
    <div className="App">
     
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
