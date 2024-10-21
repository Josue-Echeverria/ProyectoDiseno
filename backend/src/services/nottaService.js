const axios = require('axios');
const { baseURL, apiKey } = require('../config/nottaConfig');

const instance = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    },
});

const startTranscription = async (audioUrl) => {
    try {
        const response = await instance.post('/transcriptions', {
            audio_url: audioUrl,
        });
        return response.data;
    } catch (error) {
        console.error('Error starting transcription:', error.message);
        throw error;
    }
};

const getTranscriptionStatus = async (transcriptionId) => {
    try {
        const response = await instance.get(`/transcriptions/${transcriptionId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting transcription status:', error.message);
        throw error;
    }
};

module.exports = {
    startTranscription,
    getTranscriptionStatus,
};
