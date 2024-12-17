const Header = ({ course }) => (
  <div>
    <h1>{course}</h1>
  </div>
);

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ part, exercises }) => (
  <div>
    <Part name={part[0]} exercises={exercises[0]} />
    <Part name={part[1]} exercises={exercises[1]} />
    <Part name={part[2]} exercises={exercises[2]} />
  </div>
);

const Total = ({ exercises }) => {
  const total = exercises[0] + exercises[1] + exercises[2];
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
