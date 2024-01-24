import React from 'react';

const Drill = (props) => {
  return (
    <div>
      <p>Drill</p>
      <Child {...props} />
    </div>
  );
}

// React.createElement(Child,{...props})

function Child (props) {
  return (
    <div>
      <p>Child</p>
      <Child2 {...props} />
    </div>
  );
}

function Child2 (props) {
  return (
    <div>
      <p>Child2</p>
      <Child3 {...props} />
    </div>
  );
}

function Child3 ({data3, ...props}) {
  return (
    <div>
      <p>Child3</p>
      <ChildFinal {...props} />
    </div>
  );
}

function ChildFinal ({data}) {
  return (
    <div>
      <p>ChildFinal</p>
      <p>Data is: {data}</p>
    </div>
  );
}

export default Drill;
