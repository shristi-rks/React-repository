import { useState } from 'react'
import Button from './Components/Button'
import Heading from './Components/Heading'
import Data from './Components/Data'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState({left:0, center:0, right:0})
  const [neutral, setNeutral] = useState({left:0, center:0, right:0})
  const [bad, setBad] = useState({left:0, center:0, right:0})
  const handleGoodClick = () => {
    setGood({...good, left:good.left+1})
  };
  const handleNeutralClick = () => {
    setNeutral({...neutral, center:neutral.center+1})
  };
  const handleBadClick = () => {
    setBad({...bad, right:bad.right+1})
  };
  const h1 = "give feedback";
  const h2 = "statistics";
  
  return (
    <div>
      <Heading contents = {h1} />
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <Heading contents = {h2} />
      <div>
      < Data text="good" total={good.left} />
        <Data text="neutral" total={neutral.center} />
        <Data text="bad" total={bad.right} />
      </div>
    </div>
  )
}

export default App;
