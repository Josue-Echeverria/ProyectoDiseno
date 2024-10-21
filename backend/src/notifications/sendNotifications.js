const { QueueServiceClient } = require('@azure/storage-queue');
const { DefaultAzureCredential } = require('@azure/identity');

async function sendMessageToQueue(message) {
    const credential = new DefaultAzureCredential();
    const queueServiceClient = new QueueServiceClient(process.env.AZURE_STORAGE_CONNECTION_STRING, credential);
    const queueClient = queueServiceClient.getQueueClient('your-queue-name');
    
    const encoder = new TextEncoder();
    const messageBytes = encoder.encode(message);
    const queueMessageItem = { messageText: messageBytes };
    
    await queueClient.sendQueueMessage(queueMessageItem);
    console.log('Message sent to queue:', message);
}

module.exports = sendMessageToQueue;
