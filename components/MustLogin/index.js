import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useAuth0 } from "@auth0/auth0-react";


export default function SimpleContainer() {
	const { loginWithRedirect} = useAuth0();
  return (
   <React.Fragment>
        <Box m={2} pt={3} textAlign="center" > 
		<Alert  textAlign="center"  severity="warning">
        <AlertTitle   textAlign="center"> Unauthorized</AlertTitle>
        You Must  — <a onClick={() => loginWithRedirect()}><strong>Login </strong> </a> To use This App
      </Alert>
		 </Box>
    </React.Fragment>
  );
}