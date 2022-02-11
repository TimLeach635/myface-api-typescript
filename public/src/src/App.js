import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostListPage } from './components/posts/postListPage/PostListPage';
import { UserDetailPage } from './components/users/userDetailPage/UserDetailPage';
import { UserListPage } from './components/users/userListPage/UserListPage';
import { Navbar } from './components/navbar/Navbar';
import { CreatePostPage } from './components/posts/createPostPage/CreatePostPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="posts" element={<PostListPage />} />
          <Route path="posts/create" element={<CreatePostPage />} />
          <Route path="users" element={<UserListPage />} />
          <Route path="users/:userId" element={<UserDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
