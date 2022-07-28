import React from "react";
import App from "@components/App/";
import Button from '@mui/material/Button';
import { TodoProvider } from '@src/TodoContext';

const Home = () => {
	return (
	<div className="container">
		<App />
	</div>
	)
};
export default Home;