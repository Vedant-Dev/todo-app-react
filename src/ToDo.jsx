import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import './ToDo.css';
import {db} from './firebase';
import Button from '@material-ui/core/Button';
import firebase  from 'firebase';


function ToDo(props) {
	return (
		<ListItem key={props.text.id} className="todo_list">
			<ListItemAvatar>
				<Avatar>
					{props.text.todo[0]}
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={props.text.todo} secondary={"this is message"} />
			<ListItemSecondaryAction>
				<Button type="submit" variant="contained" color="secondary" onClick={event => {
					db.collection('todos').doc(props.text.id).delete()
					}}>
					X</Button>
			</ListItemSecondaryAction>
		</ListItem>);
}

export default ToDo;