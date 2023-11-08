import { useState } from "react"

const Title=({text})=> <h1>{text}</h1>

const Button =({onClick, text})=>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const StatisticLine = ({text, amount}) => {
    return(
    <tr>
        <td>{text}</td>
        <td>{amount}{text==="Positive" ? "%": ""}</td>
    </tr>)
}

const Statistics=({good, bad, neutral})=>{
    if((good+bad+neutral)===0){
        return(
            <div>
                <Title text="Statistics" />
                <p>No feedback given</p>
            </div>
        )
    }
    return(
        <div>
                <Title text="Statistics" />
                <table>
                    <tbody>
                        <StatisticLine text="Good" amount={good} />
                        <StatisticLine text="Neutral" amount={neutral} />
                        <StatisticLine text="Bad" amount={bad} />
                        <StatisticLine text="All" amount={good+neutral+bad} />
                        <StatisticLine text="Average" amount={(good-bad)/(good+neutral+bad)} />
                        <StatisticLine text="Positive" amount={good/(good+neutral+bad)}/>
                    </tbody>
                </table>
            </div>
    )
}

const App5=()=>{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
    }
    return(
        <div>
            <div>
                <Title text="Give Feedback" />
                <Button onClick={handleGoodClick} text="Good" />
                <Button onClick={handleNeutralClick} text="Neutral" />
                <Button onClick={handleBadClick} text="Bad" />
            </div>
            <div>
                <Statistics good={good} bad={bad} neutral={neutral}/>
            </div>
        </div>
    )

}

export default App5