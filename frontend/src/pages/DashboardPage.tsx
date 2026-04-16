import { useEffect, useState } from "react";
import { api } from "../services/api";

type Summary = {
  total_transactions: number;
  total_volume: number;
  success_count: number;
  pending_count: number;
  failed_count: number;
  pay_in_count: number;
  payout_count: number;
};

export default function DashboardPage() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    api.get("/dashboard/summary").then((res) => setSummary(res.data));
  }, []);

  if (!summary) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h1>FlowOps Dashboard</h1>
      <div className="card-grid">
        <div className="card">
          <h3>Total Transactions</h3>
          <p>{summary.total_transactions}</p>
        </div>
        <div className="card">
          <h3>Total Volume</h3>
          <p>€ {summary.total_volume.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Success</h3>
          <p>{summary.success_count}</p>
        </div>
        <div className="card">
          <h3>Pending</h3>
          <p>{summary.pending_count}</p>
        </div>
        <div className="card">
          <h3>Failed</h3>
          <p>{summary.failed_count}</p>
        </div>
        <div className="card">
          <h3>Pay In / Payout</h3>
          <p>{summary.pay_in_count} / {summary.payout_count}</p>
        </div>
      </div>
    </div>
  );
}