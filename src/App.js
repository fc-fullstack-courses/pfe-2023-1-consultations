import React from 'react';
import './App.css';
import Message from './components/Message';
import UserCard from './components/UserCard';
import UserData from './components/UserData';
import VideoList from './components/VideoList';

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

const messages = [
  {
    id: 0,
    text: 'asdsadsa',
    author: {
      id: 1,
      name: 'Me',
      imgSrc: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
    }
  },
  {
    id: 1,
    text: 'message 2',
    author: {
      id: 2,
      name: 'Not Me',
      imgSrc: 'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg'
    }
  },
  {
    id: 2,
    text: 'message 3',
    author: {
      id: 1,
      name: 'Me',
      imgSrc: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
    }
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: {
        id: 1,
        name: 'Me',
        imgSrc: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
      }
    }
  }
  

  render () {
    const {currentUser} = this.state;
    return (
      <div>
        <UserData currentUser={currentUser}/>
        <hr />
        <Message message={messages[0]} currentUser={currentUser}/>
        <Message message={messages[1]} currentUser={currentUser}/>
        <Message message={messages[2]} currentUser={currentUser}/>
        {/* <UserCard user={user1}/>
        <UserCard user={user2}/>
        <VideoList /> */}
      </div>
    );
  }
}

export default App;
