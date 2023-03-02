import React, { useState } from "react";

function AddTransactionForm({ handleSubmit }) {
  const [newTransaction, setNewTransaction] = useState({});

  function handleChange(e) {
    const newValue = e.target.value;
    const inputName = e.target.name;
    const updatedTransaction = { ...newTransaction };
    updatedTransaction[inputName] = newValue;
    setNewTransaction(updatedTransaction)
  }

  function submitForm(e) {
    e.preventDefault();
    handleSubmit(newTransaction);
    setNewTransaction({});

  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitForm}>
        <div className="inline fields">
          <input type="date" name="date" value={newTransaction.date} onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" value={newTransaction.description} onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={newTransaction.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={newTransaction.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
