const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
STATUS_READ_MSG: process.env.STATUS_READ_MSG || "Denu x MD V2 🙂💗",
FOOTER: process.env.FOOTER || "DENU X MD V2 👨‍💻",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
IMAGE_LIMIT: process.env.IMAGE_LIMIT || "3",
AUTO_VOICE: process.env.AUTO_VOICE || "true", // true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", // true or false   
AUTO_STICKER: process.env.AUTO_STICKER || "true", // truu or false    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
SESSION_ID: process.env.SESSION_ID || "I2cCAT4L#R_aw1ZfoQFgBXlANAShIq6ZFmJPTCfana7N8yAlUfv8",
OWNER_NUMBER: process.env.SESSION_ID || "94783919841",
PREFIX: process.env.PREFIX || ".",
ANTI_DELETE: process.env.ANTI_DELETE || "true"
};



