import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import './ToDo.css';

function ToDo(props) {
 return (
	 <ListItem key={props.text} className="todo_list">
		<ListItemAvatar>
			<Avatar>
				{props.text[0]}
			</Avatar>
		 </ListItemAvatar>
		 <ListItemText primary={props.text} secondary="Jan 9, 2014" />
		  <ListItemSecondaryAction>
			<IconButton edge="end" aria-label="delete">
				♻
			 </IconButton>
		  </ListItemSecondaryAction>
	 </ListItem>
	);
}
export default ToDo;