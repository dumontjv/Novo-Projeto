import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get("http://localhost:8080/api/orders");
      setOrders(data);
    };
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  const statusData = useMemo(() => {
    const counts = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).map(([status, total]) => ({ status, total }));
  }, [orders]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard de Pedidos</h1>
      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={statusData}>
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
