import { useState } from "react";
import MainDash from "./MainDash";
import Transactions from "./Transactions";
import RightPanel from "./RightPanel";
import  Sidebar  from "./Sidebar";

const DashboardLayout=()=>{

    const[activeTab, setactiveTab]=useState("Dashboard");
    const [role, setRole] = useState("viewer");


    return(
        <div className='flex min-h-screen '>
            {/* side bar-left */}
            <div className="w-64 bg-zinc-50 p-6 shadow-md hidden lg:block">
                <Sidebar activeTab={activeTab} setActiveTab={setactiveTab} role={role} setRole={setRole}></Sidebar>
            </div>    

            {/* main content  */}
            <div className="flex-1 p-2 container md:p-6 lg:p-10 max-w-5xl md:mx-auto">
                {activeTab==="Dashboard" && <MainDash></MainDash>}
                {activeTab==="Transactions" && <Transactions></Transactions>}
            </div>

            {/* right panel */}

            <div className="w-88 bg-zinc-100 p-4 shadow-md hidden xl:block">
                <RightPanel></RightPanel>
            </div>

        </div>
    )
}

export default DashboardLayout;