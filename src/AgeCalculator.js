import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    if (isNaN(birthDateObj)) {
      alert('Please enter a valid date!');
      return;
    }

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label htmlFor="birthDate">Enter your birthdate:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age.years > 0 && (
        <div className="result">
          <p>You are <span>{age.years}</span> years, <span>{age.months}</span> months, and <span>{age.days}</span> days old, u old fart.</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;