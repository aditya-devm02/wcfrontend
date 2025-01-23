import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="clock-container">
            <p>Current Time: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;
