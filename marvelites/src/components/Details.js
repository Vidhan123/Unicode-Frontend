import React from 'react';

function Details(props) {
  const {values,setName} = props;

  function forward(e) {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      <h1>Details</h1>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your  name" value={values.name} onChange={(e) => setName(e.target.value)} />
        </div>
      <button onClick={forward} disabled={values.name.length>0?false:true}>Next</button>
    </div>
  )
};

export default Details;

