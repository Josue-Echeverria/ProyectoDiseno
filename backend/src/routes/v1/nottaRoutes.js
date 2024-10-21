const express = require('express');
const { startTranscription, getTranscriptionStatus } = require('../services/nottaService');
const router = express.Router();

router.post('/start-transcription', async (req, res) => {
    const { audioUrl } = req.body;
    try {
        const transcription = await startTranscription(audioUrl);
        res.json(transcription);
    } catch (error) {
        res.status(500).send('Failed to start transcription');
    }
});

router.get('/transcription-status/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const status = await getTranscriptionStatus(id);
        res.json(status);
    } catch (error) {
        res.status(500).send('Failed to get transcription status');
    }
});

module.exports = router;
