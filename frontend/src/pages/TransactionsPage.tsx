import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Transaction } from "../types/transaction";
import StatusBadge from "../components/StatusBadge";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const params: Record<string, string> = {};
    if (search) params.q = search;
    if (status) params.status = status;

    api.get("/transactions", { params }).then((res) => setTransactions(res.data));
  }, [search, status]);

  return (
    <div>
      <h1>Transactions</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by reference or name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Reference</th>
              <th>Type</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Country</th>
              <th>Customer</th>
              <th>Beneficiary</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.reference}</td>
                <td>{tx.flow_type}</td>
                <td><StatusBadge status={tx.status} /></td>
                <td>{tx.amount}</td>
                <td>{tx.currency}</td>
                <td>{tx.country}</td>
                <td>{tx.customer_name}</td>
                <td>{tx.beneficiary_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}