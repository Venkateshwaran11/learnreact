export function Statcard({ title, value, description, onView, onAdd,onReduce ,reset}) {
    const isPending = title === "Pending";

    return (
        <div className="stat-card">
            <h1>{title}</h1>
            <p>{value}</p>
            {description && <p>{description}</p>}
            <div>
                {(value > 0 && isPending) ? (
                    <span>You have {value} pending requests</span>
                ) : (
                    isPending && <span>No pending requests</span>
                )}
            </div>
            <button onClick={() => onView(title, value)}>View Details</button>
            {isPending && (<>
            {onAdd && (
                <button onClick={() => onAdd()}>Add Request</button>
            )}
            {onReduce && (
                <button disabled={value === 0} onClick={() => onReduce()}>Mark as Completed</button>
            )}
            {
                value > 0 && <button onClick={() => reset()}>Reset</button>
            }
            
            </>)}
        </div>
    )
}