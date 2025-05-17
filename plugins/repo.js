const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*📍ꜱʜᴀꜱɴɪ-ᴍᴅ ʀᴇᴘᴏ ɪɴꜰᴏ ❤️‍🔥👇*

🧚‍♀️◦https://github.com/Denuwan-md/Shashi-MD

*📍ꜱʜᴀꜱɴɪ-ᴍᴅ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ❤️‍🔥👇*

🧚‍♀️◦ https://youtube.com/@sldenuwan-w9l?si=1YZ1p3GWjlKRTXdp

*📍ꜱʜᴀꜱɴɪ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴀʟ ❤️‍🔥👇*

🧚‍♀️◦ https://whatsapp.com/channel/0029Vb2bq7tCHDyi6w2zfG0r

*©ꜱʜᴀꜱɴɪ-ᴍᴅ ʙʏ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀッ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/PzxY03hR/1381.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
