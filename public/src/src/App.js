import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostListPage } from './components/posts/postListPage/PostListPage';
import { UserDetailPage } from './components/users/userDetailPage/UserDetailPage';
import { UserListPage } from './components/users/userListPage/UserListPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="posts" element={<PostListPage />} />
          <Route path="users" element={<UserListPage />} />
          <Route path="users/:userId" element={<UserDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
