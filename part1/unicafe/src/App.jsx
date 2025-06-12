import { useState } from "react";

const Button = (props) => {
	const { handleClick, text } = props;
	return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = (props) => {
	const { text, value } = props;
	return (
		<table>
			<tbody>
				<tr>
					<td>{text}</td>
					<td>{value}</td>
				</tr>
			</tbody>
		</table>
	);
};

// Componente Statistics que muestra las estadísticas de los clics
const Statistics = (props) => {
	if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
		return <p>No feedback given</p>;
	}

	const { good, neutral, bad } = props;
	const total = good + neutral + bad;
	const totalScore = good * 1 + neutral * 0 + bad * -1;
	const average = total !== 0 ? (totalScore / total).toFixed(2) : 0;
	const positive = total !== 0 ? ((good / total) * 100).toFixed(2) : 0;

	return (
		<div>
			<StatisticsLine text="good" value={good} />
			<StatisticsLine text="neutral" value={neutral} />
			<StatisticsLine text="bad" value={bad} />
			<StatisticsLine text="all" value={total} />
			<StatisticsLine text="average" value={average} />
			<StatisticsLine text="positive" value={`${positive} %`} />
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
