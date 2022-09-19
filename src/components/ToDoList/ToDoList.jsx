import React, {useEffect} from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import {useSelector, useDispatch} from 'react-redux';

const ToDoList = () => {
  // const dispatch = useDispatch();
  // from reducer/store
  const todos = [
    {id: 1, title: 'todo1', completed: false},
    {id: 2, title: 'todo2', completed: false},
    {id: 3, title: 'todo3', completed: true},
  ];

  useSelector((state) => state.todos);

  // to list out to do tasks
  // map out todo from store
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ToDoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default ToDoList;
