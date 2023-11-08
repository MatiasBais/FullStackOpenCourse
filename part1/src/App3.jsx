import { useState } from 'react'

const Display = ({counter}) =>{
    return(
        <div>{counter}</div>
    )
}

const Button = ({onClick, text}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const App3 = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne=()=> setCounter(counter+1)
  const decreaseByOne=()=> setCounter(counter-1)

  const reset = ()=> setCounter(0)
  
  return (
    <div>
    <Display counter={counter} />
    <Button onClick={increaseByOne} text="Plus" />
    <Button onClick={decreaseByOne} text="Minus" />
    <Button onClick={reset} text="Reset" />
    </div>
  )
}

export default App3