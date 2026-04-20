import './styles/styles.css';
import Dashboard from "./components/dashboard/Dashboard";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";



function App() {
  return (
    <div className="container">
      <h1>SmartSpend</h1>
      <TransactionForm />
      <Dashboard />
      <TransactionList />
    </div>
  );
}

export default App;
