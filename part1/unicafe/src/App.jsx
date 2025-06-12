import { useState } from "react";

const History = (props) => {
	if (props.allClicks.length === 0) {
		return <div>the app is used by pressing the buttons</div>;
	}
	return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = (props) => {
	console.log("props value is", props);
	const { handleClick, text } = props;
	return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
	// guarda los clics de cada botón en su propio estado
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allClicks, setAll] = useState([]);

	const handleGoodClick = () => {
		setAll(allClicks.concat("G"));
		const updatedGood = good + 1;
		setGood(updatedGood);
	};

	const handleNeutralClick = () => {
		setAll(allClicks.concat("N"));
		const updatedNeutral = neutral + 1;
		setNeutral(updatedNeutral);
	};

	const handleBadClick = () => {
		setAll(allClicks.concat("B"));
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
			<p>good {good} </p>
			<p>neutral {neutral} </p>
			<p>bad {bad} </p>
			<p>all clicks: {allClicks.join(" ")}</p>
			<History allClicks={allClicks} />
		</div>
	);
};
export default App;
