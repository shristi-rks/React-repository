import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
const course = 'Half Stack application development';
const part = [
  {
  name: 'Fundamentals of React',
  exercises: 10
},
  {
  name: 'Using props to pass data',
  exercises: 7
},
  {
  name: 'State of a component',
  exercises: 14
}
];

  return (
    <div>
      <Header course={course} />
      <Content name = {part[0].name}  exercise = {part[0].exercises} />
      <Content name = {part[1].name}  exercise = {part[1].exercises} />
      <Content name = {part[2].name}  exercise = {part[2].exercises} />
      <Total total = {part[0].exercises + part[1].exercises + part[2].exercises}/>
    </div>
  )
};

export default App