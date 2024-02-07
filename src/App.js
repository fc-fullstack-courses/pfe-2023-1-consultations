import { useState } from 'react';
import './App.css';
import { UserContext } from './contexts';
import ContextConsumer from './components/ContextConsumer';

function App() {
  const [user, setUser] = useState({
    id: 123214234,
    name: 'Test User Name'
  });

  return (
    <UserContext.Provider value={user}>
      <ContextConsumer />
    </UserContext.Provider>
  );
}

export default App;
