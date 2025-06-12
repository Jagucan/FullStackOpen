import { useState } from "react";

const Button = (props) => {
	const { handleClick, text } = props;
	return <button onClick={handleClick}>{text}</button>;
};

// Componente Statistics que muestra las estadísticas de los clics
const Statistics = (props) => {
	const { good, neutral, bad } = props;
	const total = good + neutral + bad;
	const totalScore = good * 1 + neutral * 0 + bad * -1;
	const average = total !== 0 ? totalScore / total : 0;
	const positive = total !== 0 ? (good / total) * 100 : 0;

	return (
		<div>
			<p>
				good {good} <br />
				neutral {neutral} <br />
				bad {bad} <br />
				all {total} <br />
				average {average} <br />
				positive {positive} %
			</p>
		</div>
	);
};

const App = () => {
	// guarda los clics de cada botón en su propio estado
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => {
		const updatedGood = good + 1;
		setGood(updatedGood);
	};

	const handleNeutralClick = () => {
		const updatedNeutral = neutral + 1;
		setNeutral(updatedNeutral);
	};

	const handleBadClick = () => {
		const updatedBad = bad + 1;
		setBad(updatedBad);
	};

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={handleGoodClick} text="good" />
			<Button handleClick={handleNeutralClick} text="neutral" />
			<Button handleClick={handleBadClick} text="bad" />
			<h2>statistics</h2>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};
export default App;
