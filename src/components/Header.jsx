import { useState,useEffect } from "react";
export function Header(){
    const [counter,setCounter] = useState(0);
    useEffect(() => {
  console.log("Header component mounted");
}, []);
    useEffect(()=>{
        console.log("Counter changed to:", counter);

  return () => {
    console.log("Cleanup executed");
  };
    }, [counter])
    return (
        <header>
            <p>Counter: {counter}</p>
            <h1>Service Request</h1>
            <h1>Welcome Venkat!</h1>
            <button onClick={()=>setCounter(prev => prev + 1)}>Increment</button>
        </header>
    )
}