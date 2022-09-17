import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import {useSelector} from 'react-redux';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);

  // to list out to do tasks
  return <ul></ul>;
};

export default ToDoList;
