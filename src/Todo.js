import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal, makeStyles, Input } from '@material-ui/core';
import './Todo';
import { db } from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const Todo = ({ todo }) => {
	const classes = useStyles(false);
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState(todo.todo);
	const handleOpen = () => {
		setOpen(true);
	};

	const updateTodo = () => {
		db.collection('todos').doc(todo.id).set(
			{
				todo: input,
			},
			{ merge: true }
		);
		setOpen(false);
	};
	return (
		<>
			<Modal open={open} onClose={(e) => setOpen(false)} className={classes.paper}>
				<div>
					<h1>I am modal</h1>
					<Input value={input} onChange={(e) => setInput(e.target.value)} />
					<Button onClick={updateTodo}>Update Todo</Button>
				</div>
			</Modal>
			<List className="todo__list">
				<ListItem>
					<ListItemAvatar>
						<ListItemText primary={todo.todo} secondary="Todo" />
					</ListItemAvatar>
				</ListItem>
				<button onClick={(e) => setOpen(true)}>Edit </button>
				<DeleteForeverIcon onClick={(e) => db.collection('todos').doc(todo.id).delete()}>DELETE ME</DeleteForeverIcon>
			</List>
		</>
	);
};

export default Todo;
