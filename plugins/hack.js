

const { cmd } = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '💻 *SHASNI-MD SERVER...* 💻',
            '',
            '*hacking plugins install...* 🛠️',
            '*hacking sever connected...* 🌐',
            '',
            '[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒]10%☠️\n> *POWERD BY SHASNI-MD*'                                            ,
            '[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒]20%☠️\n> *POWERD BY SHASNI-MD*'                                   ,
            '[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒]30%☠️\n> *POWERD BY SHASNI-MD*'                               ,
            '[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒]40%☠️\n> *POWERD BY SHASNI-MD*'                            ,
            '[▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒]50%☠️\n> *POWERD BY SHASNI-MD*'                       ,
            '[▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒]60%☠️\n> *POWERD BY SHASNI-MD*'                 ,
            '[▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒]70%☠️\n> *POWERD BY SHASNI-MD*'            ,
            '[▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒]80%☠️\n> *POWERD BY SHASNI-MD*'        ,
            '[▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒]90%☠️\n> *POWERD BY SHASNI-MD*'    ,
            '[▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒]100%☠️\n> *POWERD BY SHASNI-MD*',
            '',
            '🔒 *System Breach: Successful!* 🔓',
            '🚀 *Command Execution: Complete!* 🎯',
            '',
            '*📡 SHASNI-MD Data transmissoin...* ☠️',
            '_🕵️‍♂️ SHASNI-MD Ensuring stealth..._ 🤫',
            '*🔧 SHASNI-MD Finalizing operations...* 🏁',
            '',
            '> ⚠️ *Note:* SHASNI-MD ALL actions are for demonstration purposes only.',
            '> ⚠️ *Reminder:*SHASNI-MD Ethical hacking is the only way to ensure security.',
            '',
            '> *SHASNI-MD HACKING TRANSMISSOIN SUCCESSFUL*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});

/*
FIRST CREDIT BY SUPUN FERNANDO
OWNER OF DARK SHADOW MODZ

Don't Remove Credit 😒💥
**/
