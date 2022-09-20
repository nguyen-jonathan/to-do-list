import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDoForm from '../AddToDoForm/AddToDoForm';
import ToDoList from '../ToDoList/ToDoList';
import TotalCompleteItems from '../TotalCompleteItems/TotalCompleteItems';

const App = () => {
  return (
    <div className="container bg-white">
      <h1>ToDo List</h1>
      <AddToDoForm />
      <ToDoList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
