// Exercices Part 1 (1.1 - 1.5)

const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ name, exercises }) => (
	<p>
		{name} {exercises}
	</p>
);

const Content = ({ parts }) => (
	<div>
		{parts.map((part) => (
			<Part key={part.name} name={part.name} exercises={part.exercises} />
		))}
	</div>
);

const Total = ({ parts }) => {
	const total = parts.reduce((sum, part) => sum + part.exercises, 0);
	return <p>Number of exercises {total}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{ name: "Fundamentals of React", exercises: 10 },
			{ name: "Using props to pass data", exercises: 7 },
			{ name: "State of a component", exercises: 14 },
		],
	};
	return (
		<div>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
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
