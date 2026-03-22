const axios = require('axios');

const sendSMS = async (phone, message) => {
  try {
    const apiKey = process.env.FAST2SMS_API_KEY;
    if (!apiKey) {
      console.log('SMS fallback: FAST2SMS_API_KEY not configured. Message:', message);
      return null;
    }

    const response = await axios.post(
      'https://www.fast2sms.com/dev/bulkV2',
      {
        route: 'q',
        message: message,
        language: 'english',
        flash: 0,
        numbers: phone,
      },
      {
        headers: {
          authorization: apiKey,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("SMS fallback:", message);
    return null;
  }
};

module.exports = { sendSMS };
