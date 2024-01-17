import React from 'react';

const UserCard = (props) => {
  const {
    user: { id, name },
  } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
};

export default UserCard;
