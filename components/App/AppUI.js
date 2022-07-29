import React from 'react';
import  MustLogin from '@components/MustLogin';
import  TodoIndex from '@components/TodoIndex';
import NavBar from "@components/Navbar";
import { useAuth0 } from '@auth0/auth0-react';

function AppUI() {
	const { isAuthenticated} = useAuth0();
  return (
    <React.Fragment>
		<NavBar />	
		{(isAuthenticated ) ? <TodoIndex /> : <MustLogin/>   }
    </React.Fragment>
  );
}

export { AppUI };
