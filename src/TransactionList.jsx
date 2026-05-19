import { useState } from 'react'
import { CATcategoriesEGORIES } from './constants'

const formatDate = (dateStr) => {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

function TransactionList({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filtered = transactions;
  if (filterType !== "all") {
    filtered = filtered.filter(t => t.type === filterType);
  }
  if (filterCategory !== "all") {
    filtered = filtered.filter(t => t.category === filterCategory);
  }

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <div className="filters">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td className="td-date">{formatDate(t.date)}</td>
              <td className="td-description">{t.description}</td>
              <td>
                <span className={`category-badge category-badge--${t.category}`}>
                  {t.category}
                </span>
              </td>
              <td className={`td-amount ${t.type === "income" ? "income-amount" : "expense-amount"}`}>
                {t.type === "income" ? "+" : "−"}${t.amount.toLocaleString()}
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => { if (window.confirm("Delete this transaction?")) onDelete(t.id); }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
