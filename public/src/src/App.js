import './App.css';
import { PostListPage } from './components/posts/postListPage/PostListPage';
import { UserDetailPage } from './components/users/userDetailPage/UserDetailPage';
import { UserListPage } from './components/users/userListPage/UserListPage';

function App() {
  return (
    <div className="App">
      <UserDetailPage userId="1" />
    </div>
  );
}

export default App;
