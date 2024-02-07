import { useEffect, useState } from 'react';
import './App.css';
import { UserContext } from './contexts';
import ContextConsumer from './components/ContextConsumer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FormExample from './components/FormExample';
import Clicker from './components/Clicker';

function useAlertOnClick (startingText) {
  const [text, setText] = useState(startingText);

  useEffect(() => {

    function alertText () {
      alert(text);
    }

    document.addEventListener('click', alertText);
    return () => {
      document.removeEventListener('click', alertText);
    }
  },[text]);

  return setText;
}

function App() {
  const [user, setUser] = useState({
    id: 123214234,
    name: 'Test User Name',
  });

  const [clicks, setClicks] = useState(0);
  // const setText1 = useAlertOnClick('test text');

  // function handleClick () {
  //   alert(clicks + 1);
  //   setClicks((clicks) => clicks + 1);
  // }

  // useEffect(function effectCallback (){
  //   // DidMount + DidUpdate
  //   console.log('effectCallback');
  //   const id = 5;

  //   document.body.addEventListener('click', handleClick);

  //   return function effectClear () {
  //     // WillUnmount + перед кожним DidUpdate
  //     console.log('effectClear');

  //     document.body.removeEventListener('click', handleClick);
  //   }
  // }, [clicks, user]);

  // function handleClick () {}

  return (
    // <BrowserRouter>
    <>
    <Clicker />
      {/* <UserContext.Provider value={user}>
        <ContextConsumer />
      </UserContext.Provider>
      <FormExample />
      <header>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/nothome'>Not Home</Link></li>
        </ul>
      </header>
      <button onClick={() => {
        const newText = prompt();
        setText1(newText);
      }}>Change text</button>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/nothome' component={NotHomePage} />
        <Route path='/profile/:userId' component={NotHomePage} />
      </Switch> */}
    </>
    //  </BrowserRouter> 

    // <Field name='test' type='checkbox' />
    // <Field name='test2' type='radio' value={1} />
    // <Field name='test2' type='radio' value={2} />
    // <Field name='test2' type='radio' value={3} />
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
