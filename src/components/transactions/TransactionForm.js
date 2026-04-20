import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../redux/actions";

export default function TransactionForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ amount: "", category: "Food", note: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.amount) return;

    dispatch(addTransaction({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
      date: new Date().toISOString()
    }));

    setForm({ amount: "", category: "Food", note: "" });
  };

  return (
    <form onSubmit={submit} className="form">
      <input placeholder="Amount" value={form.amount} onChange={e => {
          const value = e.target.value;
          if (/^\d*\.?\d*$/.test(value)) {
            setForm({ ...form, amount: value });
          }
        }} />
      <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
      </select>
      <input placeholder="Note" value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
      <button>Add</button>
    </form>
  );
}