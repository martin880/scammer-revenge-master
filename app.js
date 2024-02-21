const axios = require("axios");

const token = "6861974788:AAH_AbVplVpEG3XTRhVIgbMVqIeT-_y7vPQ";
const message = "LO%20PENIPU%20KAN!!!!";
const chatId = "6951548817";

const url = `https://api.telegram.org/bot${token}/sendMessage?parse_mode=markdown&chat_id=${chatId}&text=${message}`;

async function sendMessage() {
  try {
    const response = await axios.get(url);
    if (response.status == 200) {
      console.log(response.statusText);
    } else {
      console.log("message failed!");
    }
  } catch (e) {
    console.log("API down");
    // Jangan panggil sendMessage() di sini, karena akan memicu rekursi tanpa batas
  }
}

// Panggil sendMessage() sebanyak kali yang Anda butuhkan
for (let i = 0; i < 100; i++) {
  sendMessage();
}
