import { useEffect, useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: String(new Date(2020, 7, 14)),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: String(new Date(2021, 2, 12)),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: String(new Date(2021, 2, 28)),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: String(new Date(2021, 5, 12)),
  },
];

function App() {
  const [allExpense, setAllExpense] = useState(expenses);

  const SubmitHandler = (expenseData) => {
    setAllExpense((prevState) => {
      const p = [expenseData, ...prevState];
      localStorage.setItem("expenses", JSON.stringify(p));
      return p;
    });
  };

  useEffect(() => {
    const earlierExpense = JSON.parse(localStorage.getItem("expenses"));

    if (earlierExpense != null) {
      setAllExpense(earlierExpense);
    }
  }, []);

  return (
    <div>
      <NewExpense onSubmitNewExpense={SubmitHandler} />
      <Expenses data={allExpense} />
    </div>
  );
}

export default App;
