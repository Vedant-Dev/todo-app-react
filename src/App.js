import './App.css';
import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Todo from './ToDo';
import List from '@material-ui/core/List';
import {db} from './firebase';
import firebase from 'firebase';
import LinearProgress from '@material-ui/core/LinearProgress';

function App() {
	const [toDo, setToDo] = useState([]);
	
	const addTask = (event) => {
		event.preventDefault()
		// setToDo([...toDo,input]);

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setInput('');
	}

	useEffect( () => {
		db.collection('todos').orderBy('timestamp','desc').onSnapshot( snapshot => {
			setToDo(snapshot.docs.map( doc => {
				return {
					id: doc.id,
					todo: doc.data().todo
				}
			}))
		})
	}, [] )

	const [input, setInput] = useState('');

	const body = () =>{
		if(toDo.length === 0)
		{
			return (
				<List>
					<LinearProgress color="secondary" />
				</List>);
		}
		else
		{
			return(<List>
				{toDo.map(t => {return <Todo text={t}/>})}
			</List>);
		}	
	}

	return (
		<div className="App">
			<h1>ToDo App 🚀🚀</h1>
			<form autoComplete="on">
				<TextField value={input} onChange={event => setInput(event.target.value)} id="outlined-basic" label="✅Add a task" variant="outlined" />
				<Button disabled={!input} type="submit" onClick={addTask} variant="contained" color="primary">Add ToDo</Button>
			</form>
			<List>
				{body()}
			</List>
		</div>);
}

export default App;
