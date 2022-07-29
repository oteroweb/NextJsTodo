import React from 'react';
import {useAuth0} from "@auth0/auth0-react"
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';

export const LoginButton = () => {
	const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

	return ( !isAuthenticated &&
			<Button   onClick={() => loginWithRedirect()} variant="contained" color="success" endIcon={<LoginIcon />}> Login </Button>
		)
      
}
