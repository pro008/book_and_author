import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { filterEmail, filterStatus } from '../../actions';

const FilterBook = (props) => {
  let data = props.data.map((obj) => ({ value: obj.id, label: obj.email }));
  const optionsStatus = [
    { value: 'open', label: 'Open' },
    { value: 'pending', label: 'Pending' },
    { value: 'deliver', label: 'Deliver' },
    { value: 'paid', label: 'Paid' },
    { value: 'close', label: 'Close' },
    { value: '', label: 'All' }
  ];

  data.unshift({ value: '', label: 'All' });

  const dispatch = useDispatch();

  const changeEmail = (selectedOption) => {
    dispatch(filterEmail(selectedOption.value));
  };

  const changeStatus = (selectedOption) => {
    dispatch(filterStatus(selectedOption.value));
  };

  return (
    <div className="App-FilterBook">
      <h3> Book Filter</h3>
      <label>User Email</label>
      <Select onChange={changeEmail} options={data} />

      <hr></hr>

      <label>Book Status</label>
      <Select onChange={changeStatus} options={optionsStatus} />
    </div>
  );
};

export default FilterBook;
