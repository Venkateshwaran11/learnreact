import { Statcard } from "./Statcard";
import { useState } from "react";
export function Dashboard() {
    const [total, setTotal] = useState(120);
    const [pending, setPending] = useState(25);
    const [completed, setCompleted] = useState(95);
    const [cancelled, setCancelled] = useState(10);
    const handleView = (title,value) => {
        console.log("View button clicked for:", title, value);
    }
    const handleAddPending = ()=>{
        setPending(prev => prev + 1);
    setTotal(prev => prev + 1);
    }
//     You passed setPending from parent to child.

// This is valid React, but remember:
// - Parent owns the state.
// - Child receives the updater function.
// - Child requests an update by calling that function.
// - React updates the parent's state and re-renders the affected UI.
// This is called lifting state ownership to the parent.
    return (
        <>
        <div className="dashboard-header">
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
        </div>
        <div className="dashboard-content">    
         <div className="stat-cards">
            <Statcard title="Total Requests" value={total} description="Total number of requests received" onView={handleView} onAdd={setTotal}/>
            <Statcard title="Pending" value={pending} description="Requests awaiting processing" onView={handleView} onAdd={handleAddPending} />
            <Statcard title="Completed" value={completed} description="Requests that have been completed" onView={handleView} onAdd={setCompleted} />
            <Statcard title="Cancelled" value={cancelled} description="Requests that have been cancelled" onView={handleView} onAdd={setCancelled} />
        </div>
        </div>
        
        </>
    );
}