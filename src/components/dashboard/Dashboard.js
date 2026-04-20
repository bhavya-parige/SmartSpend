import { useSelector } from "react-redux";
import { selectTotal, selectTransactions } from "../../selectors/financeSelectors";
import { generateInsights } from "../../utils/insights";
import Card from "../ui/Card";
import Charts from "./Charts";

export default function Dashboard() {
  const total = useSelector(selectTotal);
  const transactions = useSelector(selectTransactions);
  const insights = generateInsights(transactions);

  return (
    <div>
      <Card>
        <h2>Total: €{total}</h2>
      </Card>

      <Card>
        <Charts />
      </Card>

      <Card>
        {insights.map((i, idx) => (
          <p key={idx}>{i}</p>
        ))}
      </Card>
    </div>
  );
}