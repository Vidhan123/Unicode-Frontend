import React from 'react';

function Details(props) {
  function forward(e) {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      <h1>Details</h1>
      <button onClick={forward}>Next</button>
    </div>
  )
};

export default Details;

