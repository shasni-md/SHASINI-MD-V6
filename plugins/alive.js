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

      

//==3=3.03=3.033=3.0333=3.03333=3.033333=3.0333333=3.0333333=3.03333333=3.033333333=3.0333333333=3.03333333333=3.033333333334=3.033333333334=3.033333333334=3.033333333334=3=3.03=3.033=3.0333




if (config.MODE === 'nonbutton') {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'VAJIRA-MD SPEED'} ,

	]
    } 
]
const listMessage = {
caption: cap,
image : { url: config.LOGO },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
	
return await conn.replyList(from, listMessage ,{ quoted : mek })

} if (config.MODE === 'button') {


                  
        conn.sendMessage(from, {
            image: { url: config.LOGO },
    caption: cap,
    footer: config.FOOTER,
                buttons: [
			{
                    buttonId: `${prefix}menu`,
                    buttonText: {
                        displayText: 'MENU'
                    },
                },
		{
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: 'PING'
                    },
                },	
            ],
            headerType: 1,
            viewOnce: true
        }, {
            quoted: m
        });
        

}


	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})
