import React, {useEffect} from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import {useSelector, useDispatch} from 'react-redux';

const ToDoList = () => {
  const dispatch = useDispatch();
  // from reducer/store
  const todos = useSelector((state) => state.todos);

  // to list out to do tasks
  // map out todo from store
  return (
    <ul>
      <ToDoItem />
    </ul>
  );
};

export default ToDoList;
