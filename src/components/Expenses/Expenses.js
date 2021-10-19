import React, {useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const onYearSelectedHandler = (yearSelected) => {
        setFilteredYear(yearSelected);
    }

    const filteredExpenses = props.items.filter(x => {
        return x.date.getFullYear().toString() === filteredYear;
    });




    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onYearSelected={onYearSelectedHandler}
                />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
