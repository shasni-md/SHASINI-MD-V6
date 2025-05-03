const commandConfig = {
  pattern: "ping",
  react: '📟',
  alias: ["speed", "cyber_ping"],
  desc: "To Check bot's ping",
  category: "main",
  use: ".ping",
  filename: __filename
};

cmd(commandConfig, async (bot, message, args, { from,l,quoted,body,isCmd,command,argsArray,query,isGroup,sender,senderNumber,botNumber2,botNumber,pushname,isMe,isOwner,groupMetadata,groupName,participants,groupAdmins,isBotAdmins,isAdmins,
  reply
}) => {
  try {
    var startTime = new Date().getTime();
    
    const initialMessage = { text: "*_Pinging to Vajira Module..._* ❗" };
    let sentMessage = await bot.sendMessage(from, initialMessage);
    
    var endTime = new Date().getTime();
    
    const loadingStages = [
      "◍○○○○",
      "◍◍○○○",
      "◍◍◍○○",
      "◍◍◍◍○",
      "◍◍◍◍◍"
    ];
    
    for (let stage of loadingStages) {
      await bot.sendMessage(from, { text: stage, edit: sentMessage.key });
    }
    
    return await bot.sendMessage(from, {
      text: "📍️ *Pong " + (endTime - startTime) + " Ms* ",
      edit: sentMessage.key
    });

  } catch (error) {
    reply("*Error !!*");
    l(error);
  }
});
