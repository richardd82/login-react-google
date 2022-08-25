import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import {gapi} from 'gapi-script';

function Logout() {
	const clientID =
		"945644650061-0ts08c3vksmljvnnivlbjjko15mgqp0f.apps.googleusercontent.com";
	useEffect(() => {
		gapi.load("client:auth2", () => {
			gapi.auth2.init({ clientId: clientID });
		});
	}, []);

	const onSuccess = (res) => {
		alert("Logout Successfully");
		console.log(res)
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientID}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			/>
		</div>
	);
}

export default Logout;
