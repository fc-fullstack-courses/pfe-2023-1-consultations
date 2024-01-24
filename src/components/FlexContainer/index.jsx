import React from 'react';

const FlexContainer = (props) => {
  console.log(props);
  const { flexDirection, children } = props;
  const containerStyles = {
    display: 'flex',
    flexDirection: flexDirection ? flexDirection : 'row',
  };

  return <div style={containerStyles}>{children}</div>;
};

export default FlexContainer;
