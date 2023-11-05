const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  return(
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) =>{
  return(
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) =>{
  const total = (parts) =>{
    let total = 0;
    parts.forEach(element => {
      total += element.exercises;
    });
    return total;
  }
  return(
    <p>
      Number of exercises {total(props.parts)}
    </p>
  )
}

const Course = (props) =>{
  return(
    <div>
      <Header course={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App