import React,{useState} from "react"

function App() {
  const [count,setCount] = useState(0)
  const [error,setError] = useState(null)
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">the counter is currently
        <span data-test="count">{count}</span>
      </h1>
      {error && <p data-test="user-error">Count must not below 0</p>}
      <button data-test="increment-button"
        onClick={function(){
          setCount(count+1)
          setError(null)
        }}>Increment</button>
        <button data-test="decrement-button"
          onClick={function(){
            if(count > 0){
              setCount(count-1)
            }
            else{
              setError(true)
            }
          }}>Increment</button>
    </div>
  );
}

export default App;
