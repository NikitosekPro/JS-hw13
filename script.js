const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [],
    lastId: 0,
  
    createTransaction(amount, type) {
      this.lastId++;
      return { id: this.lastId, amount, type };
    },
  
    deposit(amount) {
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
      this.balance += amount;
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Недостатньо коштів');
        return;
      }
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
      this.balance -= amount;
    },
  
    getBalance() {
      return this.balance;
    },
  
    getTransactionDetails(id) {
      return this.transactions.find(t => t.id === id);
    },
  
    getTransactionTotal(type) {
      return this.transactions
        .filter(t => t.type === type)
        .reduce((total, t) => total + t.amount, 0);
    },
  };
  