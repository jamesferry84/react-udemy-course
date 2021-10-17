import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

   // const [selectedYear, setSelectedYear] = useState("");

    const onYearChangeHandler = (event) => {
       // setSelectedYear(event.target.value);
        props.onYearSelected(event.target.value);
        console.log("year changed");
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={onYearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;