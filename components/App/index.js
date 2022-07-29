import React,{ useRef } from 'react';
import { TodoProvider } from '@src/TodoContext';
import { AppUI } from '@components/App/AppUI';
import {Auth0Provider } from '@auth0/auth0-react';

function App() {
	// let hrefOrigin = useRef()
	// React.useEffect(() => {
		// use to avoid error window var 
		// console.log(window.location.href);
		// hrefOrigin.current= window.location.href
	//   }, []);
	
  return (
    <TodoProvider>
      <Auth0Provider  
	  	domain="dev-ufze29j5.us.auth0.com"
      	clientId="nco4AXHkbocqD3LkzDK8F3nogjXfuow2"
     	 redirectUri="https://next-js-todo-o4iyfzijh-oteroweb.vercel.app/"
		>
        <AppUI />
	</Auth0Provider>
    </TodoProvider>
  );
}

export default App;
