import React, { useContext } from 'react';
import { UserContext } from '../../contexts';

const ContextConsumer = (props) => {
  const user = useContext(UserContext);
  return (
    // <UserContext.Consumer>
    //   {function renderUser(user) {
    //     return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
  //     }}
  //   </UserContext.Consumer>
  // );
};

export default ContextConsumer;
