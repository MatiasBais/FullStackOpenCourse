const Part = ({ name, exercises }) => {
  return (
    <li>
      {name} {exercises}
    </li>
  );
};

const Course = ({ course }) => {
  const exercises = course.parts.map((part) => part.exercises);
  const total = exercises.reduce((a, c) => a + c, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </ul>
      <p>Total of {total} exercises</p>
    </div>
  );
};

export default Course;
