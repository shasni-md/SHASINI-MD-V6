const { cmd } = require("../command");
const config = require("../settings");
const prefix = config.PREFIX || ".";

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
      let currentHour = new Date().getHours();
      let greeting;
      if (currentHour >= 5 && currentHour < 12) {
        greeting = "🌅 *Good Morning!*";
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "🌞 *Good Afternoon!*";
      } else if (currentHour >= 17 && currentHour < 20) {
        greeting = "🌆 *Good Evening!*";
      } else {
        greeting = "🌙 *Good Night!*";
      }

      let cap = `${greeting}  
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

      let thumbnail = "https://telegra.ph/file/f9e89a0a1779ee1199c29.jpg"; // default image

      if (config.MODE === 'nonbutton') {
        const sections = [
          {
            title: "",
            rows: [
              { title: "1", rowId: `${prefix}menu`, description: '`❲ 𝙼𝙴𝙽𝚄 𝙿𝙰𝙽𝙽𝙴𝙻 ❳` 🎧' },
              { title: "2", rowId: `${prefix}ping`, description: '`❲ 𝙱𝙾𝚃 𝚂𝙿𝙴𝙴𝙳 ❳` 📄' },
            ]
          }
        ];
        const listMessage = {
          caption: cap,
          image: { url: thumbnail },
          footer: '> 〽️ade By Dinuwh Bbh',
          title: '',
          buttonText: '> *`◎_Reply Below Number_◎`*',
          sections
        };

        return await conn.sendMessage(from, listMessage, { quoted: mek });

      } else if (config.MODE === 'button') {
        const listData = {
          title: "◎ BOT INFO ◎",
          sections: [{
            title: "DINUWH MD OPTIONS",
            rows: [
              {
                title: "[Audio 🎧]",
                description: "Download as audio\n〽️ade By Dinuwh Bbh",
                id: `${prefix}ytaud https://youtube.com/shorts/example`
              },
              {
                title: "[Document 📁]",
                description: "Download as document\n〽️ade By Dinuwh Bbh",
                id: `${prefix}ytdoc https://youtube.com/shorts/example`
              }
            ]
          }]
        };

        return await conn.sendMessage(from, {
          image: { url: thumbnail },
          caption: cap,
          footer: "> 〽️ade By Dinuwh Bbh",
          buttons: [
            {
              buttonId: `${prefix}ping`,
              buttonText: { displayText: "`[BOT PING]`" },
              type: 1
            },
            {
              buttonId: `${prefix}menu`,
              buttonText: { displayText: "`[MENU PANNEL]`" },
              type: 1
            },
            {
              buttonId: "action",
              buttonText: { displayText: "🔘 Choose Song Type" },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify(listData),
              },
            },
          ],
          headerType: 1,
          viewOnce: true,
        }, { quoted: mek });
      }

    } catch (e) {
      console.error(e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
