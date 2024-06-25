import React, { useState } from 'react';
import './Dropdown.css'; // Import the CSS file for styling

const birthdaySelections = [
  {
    category: "Flowers",
    choices: [
      {
        name: "Roses",
        options: ["Red Roses", "Yellow Roses", "Pink Roses"]
      },
      {
        name: "Lillies",
        options: ["White Lillies", "Pink Lillies"]
      },
      {
        name: "Gerberas",
        options: ["White Gerberas", "Pink Gerberas"]
      }
    ]
  },
  {
    category: "Cake",
    choices: [
      { name: "Chocolate Cake" },
      { name: "Pineapple Cake" },
      { name: "Blackforest Cake" }
    ]
  },
  {
    category: "Gift",
    choices: [
      { name: "gift1" },
      { name: "gift2" },
      { name: "gift3" }
    ]
  }
];

const Dropdown = () => {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');

  const handleDropdown1Change = (event) => {
    setDropdown1(event.target.value);
    setDropdown2('');
    setDropdown3('');
  };

  const handleDropdown2Change = (event) => {
    setDropdown2(event.target.value);
    setDropdown3('');
  };

  const handleDropdown3Change = (event) => {
    setDropdown3(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Dropdown 1: ${dropdown1}, Dropdown 2: ${dropdown2}, Dropdown 3: ${dropdown3}`);
  };

  const getChoicesForDropdown2 = () => {
    const selection = birthdaySelections.find(item => item.category === dropdown1);
    return selection ? selection.choices.map(choice => choice.name) : [];
  };

  const getOptionsForDropdown3 = () => {
    const selection = birthdaySelections.find(item => item.category === dropdown1);
    const choice = selection ? selection.choices.find(c => c.name === dropdown2) : null;
    return choice && choice.options ? choice.options : [];
  };

  return (
    <div className='con'>
      <div className="dropdown-container">
        <select value={dropdown1} onChange={handleDropdown1Change}>
          <option value="">Choose</option>
          {birthdaySelections.map((item, index) => (
            <option key={index} value={item.category}>{item.category}</option>
          ))}
        </select>

        {dropdown1 && (
          <select value={dropdown2} onChange={handleDropdown2Change}>
            <option value="">Choose an option</option>
            {getChoicesForDropdown2().map((choice, index) => (
              <option key={index} value={choice}>{choice}</option>
            ))}
          </select>
        )}

        {dropdown2 && getOptionsForDropdown3().length > 0 && (
          <select value={dropdown3} onChange={handleDropdown3Change}>
            <option value="">Choose an option</option>
            {getOptionsForDropdown3().map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        )}

        <button onClick={handleButtonClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Dropdown;