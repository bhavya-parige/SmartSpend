export const generateInsights = (transactions) => {
  if (!transactions.length) return ["No data yet — start tracking 💡"];

  const total = transactions.reduce((s, t) => s + t.amount, 0);
  const food = transactions
    .filter(t => t.category === "Food")
    .reduce((s, t) => s + t.amount, 0);

  return [
    total > 1000 && "⚠️ High spending this month",
    food > 300 && "🍔 Food spending is high",
    "💡 Try setting a weekly budget"
  ].filter(Boolean);
};