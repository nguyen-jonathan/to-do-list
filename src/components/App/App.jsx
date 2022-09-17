import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDoForm from '../AddToDoForm/AddToDoForm';
import ToDoList from '../ToDoList/ToDoList';

const App = () => {
  return (
    <div className="container bg-white">
      <h1>ToDo List</h1>
      <AddToDoForm />
      <ToDoList />
    </div>
  );
};

export default App;
