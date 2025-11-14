import { useState } from 'react';

export const useCounter = (initialValue) => {
	const [counter, setCounter] = useState();

	const handleReset = () => {
		setCounter(initialValue);
	};
	const handleIncrement = () => {
		setCounter(counter + 1);
	};
	const handleDecrement = () => {
		setCounter(counter - 1);
	};
	return {
		handleReset,
		handleDecrement,
		handleIncrement,
		counter,
	};
};
