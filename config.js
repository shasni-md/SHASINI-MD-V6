const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
STATUS_READ_MSG: process.env.STATUS_READ_MSG || "Didula MD V2 💚",
FOOTER: process.env.FOOTER || "Didula MD V2 💚",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
IMAGE_LIMIT: process.env.IMAGE_LIMIT || "3",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
SESSION_ID: process.env.SESSION_ID || "UqVE3Y5R#OeeRLQM_KMTaeHGT2lLOiJ7qgWdTHw8anpPpgvOPC3Y",
OWNER_NUMBER: process.env.SESSION_ID || "94783919841",
PREFIX: process.env.PREFIX || ".",
ANTI_DELETE: process.env.ANTI_DELETE || "true"
};



