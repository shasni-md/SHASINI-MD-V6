const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♀️ꜱʜᴀꜱɴɪ-ᴍᴅ🧚‍♀️*

> *ꜱʜᴀꜱɴɪ-ᴍᴅ* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀ (ꜱʜᴀꜱɴɪ-ᴍᴅ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94704463479
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://youtube.com/@sldenuwan-w9l?si=1YZ1p3GWjlKRTXdp
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029Vb2bq7tCHDyi6w2zfG0r

*©ꜱʜᴀꜱɴɪ-ᴍᴅ ʙʏ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀッ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/5h7YfWQR/9342.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
