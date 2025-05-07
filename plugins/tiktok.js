const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "tt",
    alias: ["tiktok"],
    react: "🎬",
    desc: "Download TikTok video using the provided URL",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        // Check if URL is provided
        if (!args[0]) {
            return await reply("*📌 ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴛɪᴋᴛᴏᴋ ᴜʀʟ 😑✌️.*");
        }

        const tiktokUrl = args[0];
        const apiUrl = `https://manul-official-api.vercel.app/scrape-tiktok?url=${encodeURIComponent(tiktokUrl)}&apikey=Manul-Official`;

        // Send request to the API
        const response = await axios.get(apiUrl);

        // Check if the response is successful
        if (response.data.status) {
            const data = response.data.data.data;

            // Prepare the message with video details and options
            const message = `🎬 ⇼⛚ ꜱʜᴀꜱɴɪ ᴍᴅ ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ⛚⇼  

┏━━━━━━━━━━━ ℹ️ ʏᴏᴜʀ ᴛɪᴋᴏᴋ ᴠɪʀᴇᴏ 
📌 *Title:* ${data.title}  
👤 *Author:* ${data.author}  
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  

💠 *ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ ᴏᴘᴛɪᴏɴꜱ !*  

┌──────────────────────────────┐  
   📥 *Download Options:*  
   1️⃣ *ʜᴅ ᴠɪꜰᴇᴏ*  
   2️⃣ *ꜱᴅ ᴠɪᴅᴇᴏ*  
   3️⃣ *MP3 (Audio)*  
   4️⃣ *Thumbnail*  
└──────────────────────────────┘  

⚡ *ꜱʜᴀꜱɴɪ-ᴍᴅ ʙʏ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀ* 
🔥 *owner number = +94704463479 ✌️*`;

            // Send the message and save the message ID
            const sentMsg = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: message }, { quoted: mek });
            const messageID = sentMsg.key.id; // Save the message ID for later reference

            // Listen for the user's response
            conn.ev.on("messages.upsert", async (messageUpdate) => {
                const mek = messageUpdate.messages[0];
                if (!mek.message) return;
                const messageType =
                    mek.message.conversation ||
                    mek.message.extendedTextMessage?.text;
                const from = mek.key.remoteJid;

                // Check if the message is a reply to the previously sent message
                const isReplyToSentMsg =
                    mek.message.extendedTextMessage &&
                    mek.message.extendedTextMessage.contextInfo.stanzaId ===
                        messageID;

                if (isReplyToSentMsg) {
                    // React to the user's reply
                    await conn.sendMessage(from, {
                        react: { text: "🌟", key: mek.key },
                    });

                    switch (messageType) {
                        case '1':
                            // Handle option 1 (No Watermark Video)
                            await conn.sendMessage(
                                from,
                                { video: { url: data.nowm }, caption: "📥 *ʏᴏᴜʀ ᴠɪᴅᴇᴏ ꜱᴇɴᴅ ᴅᴏɴᴇ!*\n🔥 > ꜱʜᴀꜱɴɪ-ᴍᴅ ʙʏ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀ" },
                                { quoted: mek }
                            );
                            break;
                        case '2':
                            // Handle option 2 (Watermark Video)
                            await conn.sendMessage(
                                from,
                                { video: { url: data.watermark }, caption: "📥 **ʏᴏᴜʀ ꜱᴅ ᴠɪᴅᴇᴏ ꜱᴇɴᴅ ᴅᴏɴᴇ*\n🔥 > ꜱʜᴀꜱɴɪ-ᴍᴅ ʙʏ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀ" },
                                { quoted: mek }
                            );
                            break;
                        case '3':
                            // Handle option 3 (Audio)
                            await conn.sendMessage(
                                from,
                                { audio: { url: data.audio }, mimetype: 'audio/mp4', caption: "🎵 *ʏᴏᴜʀ TikTok Audio ꜱᴏɴᴅ ᴅᴏɴᴇ!*\n🔥 > ꜱʜᴀꜱɴɪ-ᴍᴅ ʙʏ ᴅᴇɴᴜᴡᴀɴ ᴋᴀᴜꜱʜɪᴋᴀ" },
                                { quoted: mek }
                            );
                            break;
                        case '4':
                            // Handle option 4 (Thumbnail)
                            await conn.sendMessage(
                                from,
                                { image: { url: data.thumbnail }, caption: "📸 **මෙන්න Thumbnail එක!**\n🔥 *Powered by ꜱʜᴀꜱɴɪ-ᴍᴅ*" },
                                { quoted: mek }
                            );
                            break;
                        default:
                            // Handle invalid input (not 1, 2, 3, or 4)
                            await conn.sendMessage(from, {
                                react: { text: "❓", key: mek.key },
                            });
                            await reply("❌ *මචං, 1 - 4 අතර ඉලක්කම් වලින් රිප්ලයි කරන්න! 😑*");
                            break;
                    }

                    // React to the successful completion of the task
                    await conn.sendMessage(from, {
                        react: { text: "✅", key: mek.key },
                    });

                    // Clear the stored TikTok data
                    delete conn.tiktokData;
                }
            });
        } else {
            await reply("❌ *බං, මේ TikTok ලින්ක් එක වැරදිද මචං? 🤔*");
        }
    } catch (error) {
        console.error("Error fetching TikTok video:", error);

        // Enhanced funny error messages in Sinhala
        if (error.response) {
            await reply(`❌ *අයියෝ! TikTok ලින්ක් එකෙන් දෙයක් අරන් නෑ බං 😭*`);
        } else if (error.request) {
            await reply("❌ *අපෝ! ඇයි නේට් එක පට්ට වරදියි? 🤦‍♂️*");
        } else {
            await reply(`❌ *අනේ මචං, එකක්ම Error එකක් අවා 😑👉 ${error.message}*`);
        }
    }
});
