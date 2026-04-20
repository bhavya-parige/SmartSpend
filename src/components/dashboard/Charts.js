import {PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { useSelector } from "react-redux";
import { selectCategoryData } from "../../selectors/financeSelectors";

export default function Charts() {
  const data = useSelector(selectCategoryData);

  const COLORS = {
    Food: '#dcfce7',
    Transport: '#e0e7ff',
    Shopping: '#fee2e2'
  };

  const tooltipStyle = {
    backgroundColor: '#fff',  // light gray background
    border: '1px solid #ccc',
    color: '#111827'               // dark black shade text
  };

  const tooltipItemStyle = {
    color: '#111827'               // dark black shade text for items
  };

  const barColor = (entry) => {
    if (entry.name === 'Food') {
      return COLORS.Food;
    } else if (entry.name === 'Transport') {
      return COLORS.Transport;
    } else if (entry.name === 'Shopping') {
      return COLORS.Shopping;
    } else {
      return '#cbd5e1';
    }
  }

  return (
    data.length === 0 ? <p>No data to display</p> :
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[entry.name] || '#cbd5e1'} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle}
          itemStyle={tooltipItemStyle}
        />
      </PieChart>

      <BarChart width={300} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={tooltipStyle}
          itemStyle={tooltipItemStyle}
        />
        <Legend />
        <Bar dataKey="value">
          {data.map((entry) => (
            <Cell key={entry.name} fill={barColor(entry)} />
          ))}
        </Bar>
      </BarChart>
    </div>    
  );
}