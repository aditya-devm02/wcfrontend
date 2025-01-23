// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export const loginWithGoogle = async (credential) => {
    try {
        const response = await axios.post(`${API_URL}/auth/google`, { credential });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchGoogleCalendarEvents = async (accessToken) => {
    try {
        const response = await axios.get(`${API_URL}/calendar/events`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};