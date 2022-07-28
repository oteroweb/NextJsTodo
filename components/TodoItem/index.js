import React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoContext } from '@src/TodoContext';

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
  }));
function TodoItem(props) {
	const { deleteTodo, completeTodo } = React.useContext(TodoContext);

return (
<Demo>
			  <List>
				<ListItem 
					secondaryAction={
					  <IconButton onClick={() => deleteTodo(props.text)}  edge="end" aria-label="delete">
						<DeleteIcon  />
					  </IconButton>
					}
				  >
					<ListItemAvatar>
					  <Avatar>
						<CheckIcon onClick={() => completeTodo(props.text)} {...(props.completed ? {color: 'success'} : {color: 'warning'})}/>
					  </Avatar>
					</ListItemAvatar>
					<ListItemText variant="overline"
					  primary= {props.text}
					  
					  />
				  </ListItem>,
			  </List>
			</Demo>
  );
}

export { TodoItem };
