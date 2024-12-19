// Exercices Part 1 (1.1 - 1.5)

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


/**
 * Exercises part1 (1.6 - 1.14)

import { useState } from "react";

const Text = (props) => (
  <div>
    <h1>{props.value}</h1>
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Data = ({ value, feedback }) => {
  return (
    <p>
      {value}: {feedback}
    </p>
  );
};

const Content = ({ value, feedback }) => {
  return (
    <div>
      {value.map((item, index) => (
        <Data key={index} value={item} feedback={feedback[index]} />
      ))}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Text value="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Text value="Statistic" />
      <Content
        value={["Good", "Neutral", "Bad"]}
        feedback={[good, neutral, bad]}
      />
    </div>
  );
};

export default App;
*/
