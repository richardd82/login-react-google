import React from 'react';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import "./App.css";

function App() {

	return (
    // <Router>
		<div className="App">
			<Login />
			<Logout />
			
		</div>
    // </Router>
	);
}

export default App;