import React from 'react';
import {useDispatch} from 'react-redux';

const ToDoItem = ({id, title, completed}) => {
  const dispatch = useDispatch();

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
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div>
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            checked={completed}
            onClick={handleCheckboxButton}
          />
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDeleteButton}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
