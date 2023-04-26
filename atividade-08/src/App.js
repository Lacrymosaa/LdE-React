import './App.css';
import Gallery from './components/gallery';
import TodoList from './components/todolist';
import Avatar from './components/avatar';
import { Profile } from './components/gallery';
import Prof from './components/avatarprof';

function App() {
  return (
    <div className="App">
      <Profile />
      <Gallery />
      <TodoList />
      <Avatar />
    </div>
  );
}

export default App;
