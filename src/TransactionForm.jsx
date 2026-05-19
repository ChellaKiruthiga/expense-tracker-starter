import { useState } from 'react'
import { categories } from './constants'

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    });

    setDescription("");
    setAmount("");
    setType("expense");
    setCategory("food");
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            className="form-input"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="form-input"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button className="form-submit" type="submit">+ Add</button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
