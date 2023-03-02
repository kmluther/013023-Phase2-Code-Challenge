import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const transactionAPI = "http://localhost:8001/transactions";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(transactionAPI)
    .then(res => res.json())
    .then(setTransactions);
  }, []);

  function addNewTransaction(newTransaction) {
    fetch(transactionAPI, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(transaction => setTransactions([...transactions, transaction]));
  }

  return (
    <div>
      <Search handleSearch={setSearchTerm}/>
      <AddTransactionForm handleSubmit={addNewTransaction}/>
      <TransactionsList transactions={transactions.filter(transaction => transaction.description.toUpperCase().includes(searchTerm.toUpperCase()))}/>
    </div>
  );
}

export default AccountContainer;
