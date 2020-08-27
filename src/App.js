import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { db } from './firebase';
import firebase from 'firebase';

import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);

	// when the app load loads we need

	useEffect(() => {
		// this code fire app js loads

		db.collection('todos')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				//console.log(snapshot.docs.map((doc) => doc.data().todo));
				// setTodos(snapshot.docs.map((doc) => doc.data().todo));
				setTodos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })));
			});
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		// this i will fire on  click on button

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		// setTodos([...todos, input]);
		setInput('');
	};

	return (
		<div className="App">
			<h1>Todo App </h1>
			<form>
				<FormControl>
					<InputLabel>Write a Todo Here</InputLabel>
					<Input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
				</FormControl>

				<Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
					Add Todo
				</Button>
			</form>

			<ul>
				{todos.map((todo, index) => (
					<div key={index}>
						<Todo todo={todo} />
					</div>
				))}
			</ul>
		</div>
	);
}

export default App;
