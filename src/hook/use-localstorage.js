import { useEffect, useState } from 'react';
const useLocalStorage = (key, initValue) => {
	const [value, setValue] = useState(() => {
		try {
			const localValue = window.localStorage.getItem(key);
			return localValue ? JSON.parse(localValue) : initValue;
		} catch (error) {
			console.log(error);
			return initValue;
		}
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;

/*const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
const addTask = (tasks) => {
		setTasks((prevTask) => [...prevTask, tasks]);
	};
	const deleteTask = (id) => {
		setTasks((prevState) => prevState.filter((t) => t.id !== id));
	};
*/