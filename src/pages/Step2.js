import React from 'react';

const Step2 = ({ data, handleChange, prevStep }) => (
  <div>
    <h2>Step 2</h2>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={data.email}
      onChange={handleChange}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={() => alert('Form submitted!')}>Submit</button>
  </div>
);

export default Step2;
