import './App.css';
import UserCard from './components/UserCard';

const user1 = {
  id: 1,
  name : 'User',
  isVip: false
}


const user2 = {
  id: 2,
  name : 'User2',
  isVip: true
}


function App() {
  return (
    <div>
      <UserCard user={user1}/>
      <UserCard user={user2}/>
    </div>
  );
}

export default App;
