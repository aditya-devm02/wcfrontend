import React from 'react';
import { GoogleLogin as GoogleLoginComponent } from '@react-oauth/google';
import { loginWithGoogle } from '../services/api';

function GoogleLogin({ onLoginSuccess }) {
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            // Send the credential to the backend for verification
            const userData = await loginWithGoogle(credentialResponse.credential);
            
            // Pass the user data to the parent component (App.js)
            onLoginSuccess(userData);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleGoogleFailure = () => {
        console.error('Login Failed');
    };

    return (
        <GoogleLoginComponent
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
        />
    );
}

export default GoogleLogin;
