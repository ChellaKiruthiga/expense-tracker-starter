function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const fmt = (n) => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0
  }).format(n);

  return (
    <div className="summary">
      <div className="summary-card summary-card--income">
        <div className="summary-card-label">Total Income</div>
        <p className="income-amount">{fmt(totalIncome)}</p>
      </div>
      <div className="summary-card summary-card--expense">
        <div className="summary-card-label">Total Expenses</div>
        <p className="expense-amount">{fmt(totalExpenses)}</p>
      </div>
      <div className="summary-card summary-card--balance">
        <div className="summary-card-label">Net Balance</div>
        <p className={`balance-amount ${balance >= 0 ? 'income-amount' : 'expense-amount'}`}>
          {fmt(balance)}
        </p>
      </div>
    </div>
  );
}

export default Summary;
