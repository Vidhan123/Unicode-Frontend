import React from 'react';
import data from './data/data.json';
import useRlogic from './useRlogic';

function Result(props) {
  const {values} = props;
  const {selectedOptions,name} = values;

  const [CA,IA,displayQNA] = useRlogic(selectedOptions)

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
          <div className="card mt-3 mb-5" id="analysis-main">
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