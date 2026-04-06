import { DollarSign } from "lucide-react";
import { tabs } from "../assets/data";
import Navitems from "./ui/Navitems";

const Sidebar = ({ activeTab, setActiveTab, role, setRole }) => {
  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleRole = () => {
    setRole(role === "viewer" ? "admin" : "viewer");
  };

  return (
    <div className="flex flex-col h-full">

      <div className="flex items-center space-x-2 mb-8">
        <div className="bg-zinc-200 p-2 rounded-lg">
          <DollarSign size={24} className="text-zinc-700" />
        </div>
        <span className="text-xl tracking-tight font-bold text-zinc-900">
          Finance
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {tabs.map((tab) => (
          <Navitems
            key={tab.key}
            activeTab={activeTab}
            onTabClick={handleClick}
            {...tab}
          />
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-zinc-100 space-y-4">

        {/* Role Switch */}
        <button
          onClick={toggleRole}
          className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">
            {role === "admin" ? "Switch to Viewer" : "Switch to Admin"}
          </span>
        </button>

        {/* Status indicator */}
        <div className="text-center text-xs text-zinc-500">
          Current Role: <span className="font-semibold text-zinc-800">{role}</span>
        </div>

        {/* Premium section refined */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-700 p-4 rounded-xl text-center text-white">
          <div className="bg-white/10 p-3 rounded-full inline-flex mb-3">
            <DollarSign size={20} />
          </div>
          <p className="text-sm font-semibold">Upgrade to Pro</p>
          <p className="text-xs opacity-80 mb-3">
            Advanced insights & analytics
          </p>
          <button className="w-full bg-white text-zinc-900 text-sm py-2 rounded-lg hover:bg-zinc-200 transition-colors">
            Explore Plan
          </button>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;