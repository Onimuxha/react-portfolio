/**
 * Sends a message to Telegram using the Telegram Bot API
 * @param {Object} formData - The form data to be sent
 * @param {string} formData.name - Sender's name
 * @param {string} formData.telegram - Sender's Telegram username
 * @param {string} formData.subject - Message subject
 * @param {string} formData.message - Message content
 * @returns {Promise} - Promise that resolves with the response or rejects with an error
 */
export const sendToTelegram = async (formData) => {
  try {
    const BOT_TOKEN = '7842549809:AAGUKszjuUlY0l5Km6RKU_OF4XDbOuIC1Jk';
    const CHAT_ID = '5058242890'; // This could be your own Telegram user ID

    const messageText = `
  🚨 *New Contact From React Portfolio* 🚨
  
  👤 *Name:* ${formData.name}
  📱 *Telegram:* @${formData.telegram}
  📝 *Subject:* ${formData.subject}
  
  💬 *Message:*
  ${formData.message}
      `;
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messageText,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || 'Failed to send message to Telegram');
    }

    return data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};

/**
 * Handle form submission including validation and message sending
 * @param {Object} formData - Form data object
 * @param {Function} onSuccess - Callback for successful submission
 * @param {Function} onError - Callback for error handling
 * @param {Function} validate - Validation function that returns boolean
 */
export const handleTelegramSubmission = async (
  formData,
  onSuccess = () => {},
  onError = () => {},
  validate = () => true
) => {
  try {
    // First validate the form data
    const isValid = validate();

    if (!isValid) {
      throw new Error('Invalid form data');
    }

    // Send the message to Telegram
    await sendToTelegram(formData);

    // Call success callback
    onSuccess();

    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    onError(error);
    return false;
  }
};
