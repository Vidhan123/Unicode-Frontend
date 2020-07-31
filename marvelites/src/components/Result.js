import React from 'react';
import data from './data/data.json';

function Result(props) {
  const {values} = props;
  const {selectedOptions,name} = values;

  let CA=0,IA=0;
  for (let i=0;i<data.length;i++) {
    data[i].answer===selectedOptions[i].value ? CA+=1 : IA+=1;
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>Total Questions: {data.length}</h2>
      <h2>Correct Answers: {CA}</h2>
      <h2>Incorrect Answers: {IA}</h2>
      <h5>{selectedOptions[0].value}</h5>
      <h5>{selectedOptions[1].value}</h5>
      <h5>{selectedOptions[2].value}</h5>
      <h5>{selectedOptions[3].value}</h5>
      <h5>{selectedOptions[4].value}</h5>
    </div>
  )
};

export default Result;