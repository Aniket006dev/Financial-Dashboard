import { useState } from "react";

const initialData = [
  {
    id: 1,
    title: "Grocery Store",
    category: "Groceries",
    amount: 45,
    type: "expense",
    date: "2026-04-01"
  },
  {
    id: 2,
    title: "Salary",
    category: "Income",
    amount: 500,
    type: "income",
    date: "2026-04-02"
  },
  {
    id: 3,
    title: "Netflix",
    category: "Entertainment",
    amount: 15,
    type: "expense",
    date: "2026-04-03"
  }
];

const Transactions = ({ role }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredData = transactions.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filterType === "all" ? true : t.type === filterType;

    return matchesSearch && matchesFilter;
  });

  const handleAdd = () => {
    const title = prompt("Enter title");
    const amount = prompt("Enter amount");
    const type = prompt("income or expense");
    const category = prompt("Enter category");

    if (!title || !amount || !type) return;

    const newTx = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString().split("T")[0]
    };

    setTransactions([newTx, ...transactions]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <input
          type="text"
          placeholder="Search transactions..."
          className="border p-2 rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {role === "admin" && (
          <button
            onClick={handleAdd}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Add Transaction
          </button>
        )}
      </div>

      <div className="space-y-3">
        {filteredData.length === 0 && (
          <div className="text-center text-zinc-500">
            No transactions found
          </div>
        )}

        {filteredData.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div>
              <p className="text-sm font-medium text-zinc-900">
                {t.title}
              </p>
              <p className="text-xs text-zinc-500">
                {t.category} • {t.date}
              </p>
            </div>

            <span
              className={`font-semibold ${
                t.type === "expense"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {t.type === "expense" ? "-" : "+"}${t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;