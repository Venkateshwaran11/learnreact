import { Statcard } from "./Statcard";
import { useState } from "react";
export function Dashboard() {
    // Initial values for the stats
    const INITIAL_TOTAL = 120;
    const INITIAL_PENDING = 25;
    const INITIAL_COMPLETED = 95;
    const INITIAL_CANCELLED = 10;

    const [total, setTotal] = useState(INITIAL_TOTAL);
    const [pending, setPending] = useState(INITIAL_PENDING);
    const [completed, setCompleted] = useState(INITIAL_COMPLETED);
    const [cancelled, setCancelled] = useState(INITIAL_CANCELLED);
    const handleView = (title,value) => {
        console.log("View button clicked for:", title, value);
    }
    const handleAddPending = ()=>{
        setPending(prev => prev + 1);
        setTotal(prev => prev + 1);
    }
    const resetPending = ()=>{
        setPending(INITIAL_PENDING);
        setCompleted(INITIAL_COMPLETED);
        setTotal(INITIAL_TOTAL);
        setCancelled(INITIAL_CANCELLED);
    }
    const handleReducePending = ()=>{
        if (pending === 0) return;
        setPending(prev => Math.max(prev - 1, 0));
        setCompleted(prev => prev + 1);
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
            <Statcard title="Pending" value={pending} description="Requests awaiting processing" onView={handleView} onAdd={handleAddPending} onReduce={handleReducePending} reset={resetPending} />
            <Statcard title="Completed" value={completed} description="Requests that have been completed" onView={handleView} onAdd={setCompleted} />
            <Statcard title="Cancelled" value={cancelled} description="Requests that have been cancelled" onView={handleView} onAdd={setCancelled} />
        </div>
        </div>
        
        </>
    );
}