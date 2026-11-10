export function Statcard({ title, value, description, onView, onAdd }) {
    const isPending = title === "Pending";

    return (
        <div className="stat-card">
            <h1>{title}</h1>
            <p>{value}</p>
            {description && <p>{description}</p>}
            <button onClick={() => onView(title, value)}>View Details</button>
            {isPending && (<>
            {onAdd && (
                <button onClick={() => onAdd(prev => prev + 1)}>Add Request</button>
            )}
            {onAdd && (
                <button onClick={() => onAdd(0)}>Reset</button>
            )}
            </>)}
        </div>
    )
}