import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <aside className="sidebar">
          <h2>FlowOps</h2>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/transactions">Transactions</Link>
          </nav>
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}