import React, { Component } from 'react';

class UserData extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   user: {
    //     id: 1,
    //     name: 'Me',
    //     imgSrc: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
    //   }
    // }
  }

  render() {
    const {
      currentUser: { name, imgSrc },
    } = this.props;

    return (
      <div>
        <img
          src={imgSrc}
          alt={name}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
        />
        <h2 style={{ display: 'inline-block' }}>Hello, {name}</h2>
        <button>Logout</button>
      </div>
    );
  }
}

export default UserData;
