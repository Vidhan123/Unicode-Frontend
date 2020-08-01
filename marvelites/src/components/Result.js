import React from 'react';
import data from './data/data.json';

function Result(props) {
  const {values} = props;
  const {selectedOptions,name} = values;

  const customClass = "list-group-item";
  const Cclass = "list-group-item bg-success";
  const Wclass = "list-group-item bg-danger";
  const show = "card-text mt-2";
  const hide = "card-text d-none";

  let CA=0,IA=0;
  for (let i=0;i<data.length;i++) {
    data[i].answer===selectedOptions[i].value ? CA+=1 : IA+=1;
  }

  const displayQNA = data.map(data => {
    return(
      <React.Fragment key={data.id}>
        <h6 className="card-text mt-4">{data.question}</h6>
        <ul className="card-text list-group">
          <li className={data.options[0]===selectedOptions[data.id-1].value ? (data.options[0]===data.answer?Cclass:Wclass):customClass}>{data.options[0]}</li>
          <li className={data.options[1]===selectedOptions[data.id-1].value ? (data.options[1]===data.answer?Cclass:Wclass):customClass}>{data.options[1]}</li>
          <li className={data.options[2]===selectedOptions[data.id-1].value ? (data.options[2]===data.answer?Cclass:Wclass):customClass}>{data.options[2]}</li>
          <li className={data.options[3]===selectedOptions[data.id-1].value ? (data.options[3]===data.answer?Cclass:Wclass):customClass}>{data.options[3]}</li>
        </ul>
        <h6 className={selectedOptions[data.id-1].value===data.answer ? hide:show}>Correct Answer: {data.answer}</h6>
      </React.Fragment>
    )
  })

  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
          <div className="card" id="analysis-top">
            <div className="card-body">       
              <h4 className="card-title">Here's your result, {name}</h4>
              <p className="card-text table-secondary">Total Questions: {data.length}</p>
              <p className="card-text table-success">Correct Answers: {CA}</p>
              <p className="card-text table-danger">Incorrect Answers: {IA}</p> 
            </div>
          </div>
          <div className="card mt-3" id="analysis-main">
            <div className="card-body">
              <h4 className="card-title">Analysis</h4>
              {displayQNA}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Result;