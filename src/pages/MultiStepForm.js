import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {step === 1 && <Step1 data={formData} handleChange={handleChange} nextStep={nextStep} />}
      {step === 2 && <Step2 data={formData} handleChange={handleChange} prevStep={prevStep} />}
    </div>
  );
};

export default MultiStepForm;
