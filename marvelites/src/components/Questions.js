import React, { useState } from 'react';
import data from './data/data.json';

function Questions(props) {
  const [qId,setqId] = useState(0);

  function forward(e) {
    e.preventDefault();
    qId < 4 ? setqId(prevqNo => prevqNo + 1) : props.nextStep();
  };

  function backward(e) {
    e.preventDefault();
    qId > 0 ? setqId(prevqNo => prevqNo - 1) : props.previousStep();
  };

  const myQuestions = data.map(data => {
    return (
      <div key={data.id}>
        <h1>Question: {data.question}</h1>
        <ol>
          <li>{data.options[0]}</li>
          <li>{data.options[1]}</li>
          <li>{data.options[2]}</li>
          <li>{data.options[3]}</li>
        </ol>
      </div>
    )
  })

  return(
    <div>
      {myQuestions[qId]}
      <button onClick={backward}>Previous</button>
      <button onClick={forward}>Next</button>
    </div>
  )
};

export default Questions;