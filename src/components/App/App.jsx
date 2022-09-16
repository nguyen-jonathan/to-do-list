import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDoForm from '../AddToDoForm/AddToDoForm';

const App = () => {
  return (
    <div className="container bg-white">
      <h1>ToDo List</h1>
      <AddToDoForm />
    </div>
  );
};

export default App;
