import { Search, Bell, TrendingDown, LandmarkIcon, Goal, Droplet, Film, ForkKnife, ShoppingBag } from "lucide-react";
import ExpenseSmryCard from "./ui/ExpenseSmryCard";
import ListitemCard from "./ui/ListItemCard";
import AccountCard from "./ui/AccountCard";
import Payments from "./ui/Payments";

const MainDash = () => {
    return (
        <div className="flex-1 space-y-8">
            <div className="p-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl tracking-tightter font-bold text-zinc-900 mb-1">Welcome Aniket !</h2>
                    <p className="text-sm text-zinc-600">
                        Track your spending, manage your budgets
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 cursor-pointer rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
                        <Search size={18} className="text-zinc-600"></Search>
                    </button>
                    <button className="p-2 cursor-pointer rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
                        <Bell size={18} className="text-zinc-600"></Bell>
                    </button>
                </div>
            </div>
            {/* exp summary card */}
            <div className="grid md:grid-cols-3 gap-6">
                <ExpenseSmryCard label="Spent This Month" amount="$3,450" icon={TrendingDown} colorClass="bg-red-700/90 text-white" iconColor="text-red-500"></ExpenseSmryCard>
                <ExpenseSmryCard label="Budget left" amount="$450" icon={Goal} colorClass="bg-lime-900 text-white" iconColor="text-emerald-500"></ExpenseSmryCard>
                <ExpenseSmryCard label="Highest Category" amount="Groceries" icon={LandmarkIcon} colorClass="bg-black/90 text-white" iconColor="text-black/90"></ExpenseSmryCard>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="p-6">
                    <h3 className="text-lg tracking-tight font-bold text-zinc-900 mb-4">Recent spend</h3>
                    <div className="space-y-3">
                        <ListitemCard title="supermarket Run" subtitle="Groceries" value="-$45.00" valueColor="text-red-600"></ListitemCard>
                        <ListitemCard title="Online Purchase/Subscription" subtitle="Software" value="-$35.00" valueColor="text-red-600"></ListitemCard>
                        <ListitemCard title="ATM Withdrawal" subtitle="Cash" value="-$100.00" valueColor="text-red-600"></ListitemCard>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-lg tracking-tight font-bold text-zinc-900 mb-4 flex justify-between items-center">
                        My Budgets
                        <button className="text-sm font-normal cursor-pointer text-blue-600 hover:underline">
                            Manage All
                        </button>
                    </h3>
                    <div className="space-y-3">
                        <AccountCard name="Groceries" description="Spending: $450/$600" actionLabel="75% Used" actionColor="bg-red-100 text-red-700" Icon={ShoppingBag} bgColor="bg-emerald-100" iconColor="text-emerald-700"></AccountCard>
                        <AccountCard name="Restaurants" description="Spending: $340/$900" actionLabel="45% Used" actionColor="bg-green-100 text-green-700" Icon={ForkKnife} bgColor="bg-amber-100" iconColor="text-amber-700"></AccountCard>
                        <AccountCard name="Utilities" description="Spending: $200/$200" actionLabel="100% Used" actionColor="bg-red-500 text-white" Icon={Droplet} bgColor="bg-blue-100" iconColor="text-blue-700"></AccountCard>
                        <AccountCard name="Entertainment" description="Spending: $50/$150" actionLabel="33% Used" actionColor="bg-blue-100 text-blue-700" Icon={Film} bgColor="bg-pink-100" iconColor="text-pink-700"></AccountCard>
                    </div>
                </div>
            </div>

            {/* payments */}

            <Payments></Payments>
        </div>
    )
}

export default MainDash;