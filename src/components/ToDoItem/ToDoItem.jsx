import React from 'react';

const ToDoItem = () => {
  return (
    <input type="checkbox" checked={completed} onClick={handleCheckboxClick} />
  );
};
