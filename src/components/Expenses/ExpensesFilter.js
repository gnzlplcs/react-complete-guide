import './ExpensesFilter.css';

const ExpensesFilter = ({ onFilterYear, selected }) => {
  const yearSelectionHandler = ({ target }) => {
    onFilterYear(target.value)
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearSelectionHandler} value={selected}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;