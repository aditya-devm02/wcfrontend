// src/services/api.js
export const loginWithGoogle = async (token) => {
    const response = await fetch('https://wibackend.vercel.app/auth/google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;  // Assuming the response contains user info, such as { name, email, accessToken }
};
