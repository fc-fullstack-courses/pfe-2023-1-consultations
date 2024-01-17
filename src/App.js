import './App.css';
import UserCard from './components/UserCard';

const user = {
  id: 1,
  name : 'User'
}

function App() {
  return (
    <div>
      <UserCard user={user}/>
    </div>
  );
}

export default App;
