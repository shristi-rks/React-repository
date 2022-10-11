import { useState } from 'react'
import Button from './Components/Button'
import { Heading } from './Components/Heading'
import Statistics from './Components/Statistics'

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
  const avg = ((stat.left * 1) + (stat.right * -1))/all;
const positive = `${stat.left/all*100}% `;
  
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
        <Statistics text="good" total={stat.left} />
        <Statistics text="neutral" total={stat.center} />
        <Statistics text="bad" total={stat.right} />
        <Statistics text="all" total={all} />
        <Statistics text="average" total={avg} />
        <Statistics text="positive" total={positive} />
      </div>
    </>
  )
}

export default App;
