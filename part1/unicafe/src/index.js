import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const average = ( good * 1 + bad * -1 ) / all;
  const positive = good / all

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good + 1)}>good</button>
      <button onClick={()=>setNeutral(neutral + 1)}>neutral</button>
      <button onClick={()=>setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
      all {all}<br/>
      average {average}<br/>
      positive {positive} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)