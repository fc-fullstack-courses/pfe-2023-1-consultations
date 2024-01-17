import React from 'react';
import './style.css';

const UserCard = (props) => {
  const {
    user: { id, name, isVip },
  } = props;

  // let className;

  // switch (name) {
  //   case 1: {
  //     className = 'adsad';
  //     break;
  //   } 
  //   case 2: {
  //     className = '2132143';
  //     break;
  //   }
  // }

  return (
    <div className={`userContainer ${isVip ? 'vip' : ''}`}>
      <h1 title={isVip ? 'VIP' : 'NOT VIP, RECONSIDER'}>
        User is {isVip ? 'VIP' : 'not VIP'}
      </h1>
      {!isVip && <p>Become VIP NOW!!!!!!</p>}
      <p>{name}</p>
      <p>{id}</p>
      <div>{isVip ? <p>You already VIP</p> : <button>Become VIP</button>}</div>
    </div>
  );
};

export default UserCard;
