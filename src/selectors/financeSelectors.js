export const selectTransactions = state => state.transactions;

export const selectTotal = state =>
  state.transactions.reduce((sum, t) => sum + t.amount, 0);

export const selectCategoryData = state => {
  const map = {};
  state.transactions.forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });
  return Object.keys(map).map(key => ({ name: key, value: map[key] }));
};