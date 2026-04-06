const RightPanel = () => {
  return (
    <div className="space-y-6">

      {/* Quick Insights */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-sm font-semibold text-zinc-900 mb-3">
          Quick Insights
        </h3>

        <div className="space-y-2 text-sm text-zinc-600">
          <p>
            Highest spending: <span className="font-medium text-zinc-900">Groceries</span>
          </p>
          <p>
            Monthly increase: <span className="font-medium text-red-600">+12%</span>
          </p>
          <p>
            Budget left: <span className="font-medium text-green-600">$450</span>
          </p>
        </div>
      </div>

      {/* Upcoming Payments */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-sm font-semibold text-zinc-900 mb-3">
          Upcoming Payments
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-900">Electricity</p>
              <p className="text-xs text-zinc-500">Due in 2 days</p>
            </div>
            <span className="text-sm font-semibold text-red-600">$120</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-900">Internet</p>
              <p className="text-xs text-zinc-500">Due in 5 days</p>
            </div>
            <span className="text-sm font-semibold text-red-600">$60</span>
          </div>
        </div>
      </div>

      {/* Saving Goal */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-sm font-semibold text-zinc-900 mb-3">
          Saving Goal
        </h3>

        <div className="space-y-2">
          <p className="text-sm text-zinc-600">
            Trip Fund
          </p>

          <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
            <div className="bg-zinc-900 h-full w-[60%]"></div>
          </div>

          <p className="text-xs text-zinc-500">
            $600 / $1000 saved
          </p>
        </div>
      </div>

    </div>
  );
};

export default RightPanel;