import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const CATEGORY_COLORS = {
  food: '#fb923c',
  housing: '#60a5fa',
  utilities: '#a78bfa',
  transport: '#34d399',
  entertainment: '#f472b6',
  salary: '#4dd98a',
  other: '#94a3b8',
};

const FALLBACK_COLORS = ['#60a5fa', '#4dd98a', '#f59e0b', '#f472b6', '#a78bfa', '#34d399', '#fb923c'];

function SpendingChart({ transactions }) {
  const expenses = transactions.filter(t => t.type === 'expense');

  const categoryTotals = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  const data = Object.entries(categoryTotals).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 4, right: 20, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis
            dataKey="name"
            stroke="transparent"
            tick={{ fill: '#7a8799', fontSize: 11, fontFamily: "'IBM Plex Sans', sans-serif" }}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            stroke="transparent"
            tick={{ fill: '#7a8799', fontSize: 11, fontFamily: "'IBM Plex Sans', sans-serif" }}
            width={52}
          />
          <Tooltip
            contentStyle={{
              background: '#181c28',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
            }}
            labelStyle={{ color: '#e8e3d8', fontSize: '12px', fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: '2px' }}
            itemStyle={{ color: '#7a8799', fontSize: '12px', fontFamily: "'IBM Plex Mono', monospace" }}
            formatter={(value) => [`$${value.toFixed(0)}`, 'Amount']}
            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
          />
          <Bar dataKey="value" name="Amount" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={CATEGORY_COLORS[entry.name] || FALLBACK_COLORS[index % FALLBACK_COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
