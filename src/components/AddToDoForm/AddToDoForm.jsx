import React from 'react';

const AddToDoForm = () => {
  return (
    <form>
      <label>Name</label>
      <input type="text" placeholder="Add to do..." />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddToDoForm;
