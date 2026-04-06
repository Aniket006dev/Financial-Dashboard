const ExpenseSmryCard=({label, amount, icon: Icon, colorClass, iconColor})=>{
    return (
        <div className={`${colorClass? colorClass: "bg-amber-200"} p-5 rounded-xl flex items-end justify-between cursor-pointer card-hover`}>
            <div className="col gap-16 md:gap-12">
                <p className="text-sm text-white/75 mb-1 ">{label}</p>
                <p className="text-2xl font-bold">{amount}</p>
            </div>
            <div className={`p-2 rounded-full bg-white`}>
                    <Icon size={20} className={`${iconColor}`}></Icon>
            </div>
        </div>
    )

}

export default ExpenseSmryCard;