import { useState } from "react"


const History=({allClicks})=>{
    if(allClicks.length===0){
        return(
            <div>The app is used by pressing the buttons</div>
        )
    }
    return(
        <div>
            Buttons press history: {allClicks.join(' ')}
        </div>
    )
}

const Button = ({handleClick, text}) =>{
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

const App4 = () => {
    const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left +1
    setLeft(left + 1)
    setTotal(updatedLeft+right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(right + 1)
    setTotal(left+updatedRight)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  )
  }

  export default App4