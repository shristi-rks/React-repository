import { useState } from 'react'
import Button from './Components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState({good:0, neutal:0, bad:0})
  const [neutral, setNeutral] = useState({good:0, neutal:0, bad:0})
  const [bad, setBad] = useState({good:0, neutal:0, bad:0})
  const handleGoodClick = () => {
    setGood({good:good+1, neutal:0, bad:0})
  };
  const handleNeutralClick = () => {
    setNeutral({good:0, neutal:neutral+1, bad:0})
  };
  const handleBadClick = () => {
    setBad({good:0, neutal:0, bad:bad+1})
  };


  return (
    <div>
      <div>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      </div>
      <div>
        
      </div>
      

    </div>
  )
}

export default App;
