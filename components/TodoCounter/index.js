import React from 'react';
import { TodoContext } from '@src/TodoContext';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  const { totalTodos, completedTodos,percentCompletedTodos } = React.useContext(TodoContext);
  return (
	  <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
		  <h2 align="center" className="TodoCounter"> {completedTodos} from {totalTodos} Todo Completed</h2>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: percentCompletedTodos }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function TodoCounter() {
	const { percentCompletedTodos } = React.useContext(TodoContext);
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={percentCompletedTodos} />
    </Box>
  );
}


export { TodoCounter };
