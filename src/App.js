import React, { useState } from 'react';
import './App.css';
import GoogleLogin from './components/GoogleLogin';
import EventsTable from './components/EventsTable';
import Clock from './components/Clock';

function App() {
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div className="App">
            <header className="app-header">
                <h1>WhiteCarrot Assignment</h1>
                <Clock />
            </header>
            {!user ? (
                <div className="login-container">
                    <GoogleLogin onLoginSuccess={handleLoginSuccess} />
                </div>
            ) : (
                <div className="content-container">
                    <div className="welcome-container">
                        <h2>Welcome, {user.name}</h2>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                    <EventsTable accessToken={user.accessToken} />
                </div>
            )}
        </div>
    );
}

export default App;
