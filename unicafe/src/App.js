import { useState } from 'react'
import Button from './Components/Button'
import { Heading } from './Components/Heading'
import Data from './Components/Data'

const App = () => {
  // save clicks of each button to its own state
  const [stat, setStat] = useState({left:0, center:0, right:0})
  const handleGoodClick = () => {
    setStat({...stat, left:stat.left+1})
  };
  const handleNeutralClick = () => {
    setStat({...stat, center:stat.center+1})
  };
  const handleBadClick = () => {
    setStat({...stat, right:stat.right+1})
  };
  const h1 = "give feedback";
  const h2 = "statistics";
  const all = stat.left+stat.center+stat.right;
  
  return (
    <>
      <Heading contents = {h1} />
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <Heading contents = {h2} />
      <div>
        <Data text="good" total={stat.left} />
        <Data text="neutral" total={stat.center} />
        <Data text="bad" total={stat.right} />
        <Data text="all" total={all} />
      </div>
    </>
  )
}

export default App;
