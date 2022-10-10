import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
const course = 'Half Stack application development';
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
};
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
};
const part3 = {
  name: 'State of a component',
  exercises: 14
};

  return (
    <div>
      <Header course={course} />
      <Content name = {part1.name} exercises = {part1.exercises} />
      <Content name = {part2.name} exercises = {part1.exercises} />
      <Content name = {part3.name} exercises = {part1.exercises} />
      <Total total = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
};

export default App