import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 298.78,
      date: new Date(2022, 2, 17),
    },
    {
      title: "Bill",
      amount: 12.78,
      date: new Date(2022, 9, 18),
    },
    {
      title: "Restaurant payment",
      amount: 56.78,
      date: new Date(2022, 10, 14),
    },
    {
      title: "Vocation",
      amount: 598.78,
      date: new Date(2022, 11, 12),
    },
  ];

  return (
    <div>
      <h2>Expense Calculator</h2> 
      <ExpenseItem
        expenseTitle={expenses[0].title}
        expenseAmount={expenses[0].amount}
        expenseDate={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
      expenseTitle={expenses[1].title}
      expenseAmount={expenses[1].amount}
      expenseDate={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
      expenseTitle={expenses[2].title}
      expenseAmount={expenses[2].amount}
      expenseDate={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
      expenseTitle={expenses[2].title}
      expenseAmount={expenses[2].amount}
      expenseDate={expenses[2].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
