import React from 'react';

const Step1 = ({ data, handleChange, nextStep }) => (
  <div>
    <h2>Step 1</h2>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={data.name}
      onChange={handleChange}
    />
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step1;
