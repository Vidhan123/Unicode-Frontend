import React, { useState } from 'react';
import Details from './Details';
import Questions from './Questions';
import Result from './Result';

function MarveliteApp() {
  const [step,setStep] = useState(0);
  const [name,setName] = useState("");
  const [selectedOptions,setSelectedOptions] = useState({});

  function nextStep() {
    setStep(prevStep => prevStep + 1)
  };

  const values = { selectedOptions , name };
  
  switch(step) {
    case 0: return (
    <Details nextStep={nextStep} setName={setName} values={values} />
    );
    case 1: return (
    <Questions nextStep={nextStep} values={values} setSelectedOptions={setSelectedOptions} />
    );
    case 2: return (
    <Result values={values} />
    );
    default: return (
    <Details />
    );
  }
};

export default MarveliteApp;