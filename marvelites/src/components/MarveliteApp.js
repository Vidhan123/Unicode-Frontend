import React, { useState } from 'react';
import Details from './Details';
import Questions from './Questions';
import Result from './Result';

function MarveliteApp() {
  const [step,setStep] = useState(0);

  function nextStep() {
    setStep(prevStep => prevStep + 1)
  };
  function previousStep() {
    setStep(prevStep => prevStep - 1)
  };
  
  switch(step) {
    case 0: return (
    <Details nextStep={nextStep} />
    );
    case 1: return (
    <Questions nextStep={nextStep} previousStep={previousStep} />
    );
    case 2: return (
    <Result />
    );
    default: return (
    <Details />
    );
  }
};

export default MarveliteApp;