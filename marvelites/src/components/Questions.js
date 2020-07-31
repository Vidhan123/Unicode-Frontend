import React, { useState } from 'react';
import data from './data/data.json';

function Questions(props) {
  const [qId,setqId] = useState(0);
  const [isDisabled,setDisable] = useState(true);

  const {values,setSelectedOptions} = props;
  const {selectedOptions} = values;
  
  function handleChange(e) {
    const {id,value} = e.target;
    setDisable(false);
    setSelectedOptions({...selectedOptions,[qId]:{"value":value,"isChecked":id}});
  }

  function forward(e) {
    e.preventDefault();
    qId < 4 ? setqId(prevqNo => prevqNo + 1) : props.nextStep();
    setDisable(true);
  };

  const myQuestions = data.map(data => {
    return (
      <React.Fragment key={data.id}>
        <h1>Question: {data.question}</h1>
        
        <img className="img-fluid" src={data.image} alt="displayImage" />
        <br />
        <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="o1" name="options" value={data.options[0]} className="custom-control-input" onChange={handleChange}/>
        <label className="custom-control-label" htmlFor="o1">{data.options[0]}</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="o2" name="options" value={data.options[1]} className="custom-control-input" onChange={handleChange}/>
        <label className="custom-control-label" htmlFor="o2">{data.options[1]}</label>
        </div>
        <br />
        <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="o3" name="options" value={data.options[2]} className="custom-control-input" onChange={handleChange}/>
        <label className="custom-control-label" htmlFor="o3">{data.options[2]}</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="o4" name="options" value={data.options[3]} className="custom-control-input" onChange={handleChange} />
        <label className="custom-control-label" htmlFor="o4">{data.options[3]}</label>
        </div>
      </React.Fragment>
    )
  })

  return(
    <div>
      {myQuestions[qId]}
      <button onClick={forward} disabled={isDisabled}>Next</button>
    </div>
  )
};

export default Questions;