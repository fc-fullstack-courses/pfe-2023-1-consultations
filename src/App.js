import { useState } from 'react';
import './App.css';
import { UserContext } from './contexts';
import ContextConsumer from './components/ContextConsumer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({
    id: 123214234,
    name: 'Test User Name',
  });

  return (
    // <BrowserRouter>
    <>
      <UserContext.Provider value={user}>
        <ContextConsumer />
      </UserContext.Provider>
      <header>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/nothome'>Not Home</Link></li>
        </ul>
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/nothome' component={NotHomePage} />
        <Route path='/profile/:userId' component={NotHomePage} />
      </Switch>
    </>
    //  </BrowserRouter> 
  );
}

function HomePage (props) {
  console.log(props);
  return <div>
    <h2>HOME PAGE</h2>
  </div>
}

function NotHomePage () {
  return <div>
    <h2>NOT HOME PAGE</h2>
  </div>
}

export default App;
