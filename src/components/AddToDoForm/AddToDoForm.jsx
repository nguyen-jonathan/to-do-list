import React, {useState} from 'react';

const AddToDoForm = () => {
  const [value, setValue] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('user entered: ' + value);
  };

  return (
    <form onSubmit={onSubmit} className="for-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        placeholder="Add to do..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddToDoForm;
