const { cmd } = require("../command");

cmd(
  {
    pattern: "alive",
    alias: ["status"],
    desc: "Check if the bot is alive",
    category: "main",
    react: "👨‍💻",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    { from, pushname, reply }
  ) => {
    try {
      // Get current hour
      let currentHour = new Date().getHours();
      let greeting;

      // Set greeting based on correct time periods
      if (currentHour >= 5 && currentHour < 12) {
        greeting = "🌅 *Good Morning!*";
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "🌞 *Good Afternoon!*";
      } else if (currentHour >= 17 && currentHour < 20) {
        greeting = "🌆 *Good Evening!*";
      } else {
        greeting = "🌙 *Good Night!*";
      }

      let aliveText = `${greeting}  
╭─━━❰ *👋 ʜᴇʟʟᴏ, ${pushname}!* ❱━━─╮  
|
| * *ʙᴏᴛ ɴᴀᴍᴇ = ꜱʜᴀꜱɴɪ ᴍᴅ*
| * *ᴏᴡɴᴇʀ ɴᴀᴍᴇ = ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀ
| * *ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ = 94704463479
| 
| *ᴛʜᴇ ʙᴏᴛ ᴛᴏ ᴠ1 update🔮*


│ •••ᴡᴇʟᴄᴏᴍᴇ ʙᴀᴄᴋ ᴛᴏ ᴍʏ ʙᴏᴛ•••
│ 🤔 *ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴇᴡ..?* 💝  
│    _මොකද වෙන්නෙ ඉතින් හ්?_ 😮‍💨  
│  
│ 🎯 *ᴊᴏɪɴ ᴍʏ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ:*  
│    🚀 *.channel* – *ᴊᴏɪɴ ɴᴇᴡ.!* 🤫  
│  
│ 📜 *Commands Panel එක ගන්න:*  
│    ⚡ *.menu* – *commands බලන්න!*  
│  
│ 👑 *Ownerව contact කරගන්න:*  
│    📞 *.owner* – *94704463479* 🫣  
│  ━ ꜱʜᴀꜱɴɪ-ᴍᴅ ━
╰─━━━━━━❰ *ᴛʜᴀɴᴋ ʏᴏᴜ!* ❱━━━━━━─╯  
         ⛦ *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀꜱɴɪ-ᴍᴅ* ⛦`;

      // Send the alive message
      await conn.sendMessage(
        from,
        {
          text: aliveText,
          contextInfo: {
            externalAdReply: {
              title: "SHASNI-MD BOT",
              body: "© Powered by DENUWAN KAUSHIKA",
              thumbnailUrl: "https://i.ibb.co/JRpGGdBZ/1296.jpg",
              sourceUrl: "https://whatsapp.com/channel/0029Vb2bq7tCHDyi6w2zfG0r",
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m }
      );

      console.log(`✅ Alive command used in: ${from}`);
    } catch (e) {
      console.error("Alive Command Error:", e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
