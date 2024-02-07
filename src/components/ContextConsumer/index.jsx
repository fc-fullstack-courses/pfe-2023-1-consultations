import React, { useContext } from 'react';
import { UserContext } from '../../contexts';
import styles from './ContextConsumer.module.sass';

const ContextConsumer = (props) => {
  const user = useContext(UserContext);
  return (
    // <UserContext.Consumer>
    //   {function renderUser(user) {
    //     return (
    <div className={styles.container}>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
  //     }}
  //   </UserContext.Consumer>
  // );
};

// const NewComponent = withData(ContextConsumer);
// export default NewComponent;

export default ContextConsumer;
