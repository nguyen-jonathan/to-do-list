import React from 'react';

const ToDoItem = () => {
  // using async functions to target todos

  // handleCheckboxButton
  const handleCheckboxButton = () => {
    console.log('box is checked');
  };

  // handleDeleteButton
  const handleDeleteButton = () => {
    console.log('todo is deleted');
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onClick={handleCheckboxButton}
      />
      <button onClick={handleDeleteButton}>Delete</button>
    </div>
  );
};

export default ToDoItem;
