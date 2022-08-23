import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import {gapi} from 'gapi-script';
// 163222537933-j1v1rfj305i93ctbpse2hqvla08r1a64.apps.googleusercontent.com richardd82.abd
// 945644650061-0ts08c3vksmljvnnivlbjjko15mgqp0f.apps.googleusercontent.com richardd82
function Login(){
    const clientID = "945644650061-0ts08c3vksmljvnnivlbjjko15mgqp0f.apps.googleusercontent.com";

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({ clientId: clientID})
    })
},[])
 
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        return "<div><h1>Bienvenido {res.name}</h1></div>"
        // setTimeout(() => {
        //         window.location.href = "https://www.netguru.com.mx";				
        // }, 5000);
    }
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res.profileObj);
    }

    return(
        <div>
            <GoogleLogin                 
                clientId={clientID}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;