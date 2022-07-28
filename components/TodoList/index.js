import React from 'react';
// import './TodoList.css'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

  export default function TodoList(props) {
  
	return (
	  <Box sx={{ flexGrow: 1, minWidth: 1024 }}>
		<Grid container spacing={4}>
		  <Grid item xs={12} md={12}>
			{props.children}
		  </Grid>
		</Grid>
	  </Box>
	);
  }

export { TodoList };
