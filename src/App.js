import React from 'react';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import "./App.css";

function App() {

//   const responseGoogle = (respuesta) => {
//     console.log(respuesta);
//     console.log(respuesta.profileObj);
//     // setTimeout(() => {
//     //  window.location.href = "https://www.netguru.com.mx";				
//     // }, 2000);
//
//   }

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