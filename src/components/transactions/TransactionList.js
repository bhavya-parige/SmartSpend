import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, addTransaction } from "../../redux/actions";
import { selectTransactions } from "../../selectors/financeSelectors";
import Card from "../ui/Card";
import { useState } from "react";

export default function TransactionList() {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ amount: '', category: '', note: '' });

  const startEdit = (t) => {
    setEditingId(t.id);
    setEditForm({ amount: t.amount, category: t.category, note: t.note });
  };

  const submitEdit = (id) => {
    dispatch(deleteTransaction(id)); // remove old
    dispatch(addTransaction({ ...editForm, id, amount: Number(editForm.amount), date: new Date().toISOString() }));
    setEditingId(null);
  };  

  if (!transactions.length) return <p>No transactions yet</p>;

  return (
    <div>
      {transactions.map(t => (
        <Card key={t.id}>
          {editingId === t.id ? (
            <div className="row">
              <input placeholder="Amount"value={editForm.amount} onChange={e => {
                  const value = e.target.value;
                  if (/^\d*\.?\d*$/.test(value)) {
                    setEditForm({ ...editForm, amount: value });
                }
         }}
             />
              <select value={editForm.category} onChange={e => setEditForm({ ...editForm, category: e.target.value })}>
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
              </select>
              <input value={editForm.note} onChange={e => setEditForm({ ...editForm, note: e.target.value })} />
              <button onClick={() => submitEdit(t.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div className="row">
              <span className={`badge ${t.category.toLowerCase()}`}>{t.category}</span>
              <span>€{t.amount}</span>
              <button onClick={() => startEdit(t)}>Edit</button>
              <button onClick={() => dispatch(deleteTransaction(t.id))}>X</button>
            </div>
          )}
          {t.note && <div>{t.note}</div>}         
        </Card>
      ))}
    </div>
  );
}
