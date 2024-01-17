import React from 'react';

const Message = ({ message, currentUser }) => {
  return <div style={{
    padding: '20px',
    border: '1px solid black',
    margin: '10px',
    display: 'flex',
    backgroundColor: currentUser.id === message.author.id ? 'lightblue': 'lightgreen'
  }}>
    <img src={message.author.imgSrc} alt={message.author.name} style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%'
        }}/>
    <h2 style={{display: 'inline-block'}}>{message.author.name}</h2>
    <p>{message.text}</p>
  </div>;
};

export default Message;
