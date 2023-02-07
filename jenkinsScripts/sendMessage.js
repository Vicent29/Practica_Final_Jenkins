const axios = require('axios');
const chatId = process.argv[3];
const botToken = "5926484471:AAG34Ix9a4_Z8DJFgHXc7H-1_5EjxYZ2xjg";

async function sendMessage(message) {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

sendMessage(process.argv[2]);