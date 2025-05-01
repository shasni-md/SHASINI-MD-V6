const { cmd } = require('../command');
const fetch = require("node-fetch");
const ytsearch = require("yt-search");

cmd({ 
    pattern: "mp3", 
    alias: ["audio", "song"], 
    react: "🎵", 
    desc: "Download YouTube audio", 
    category: "download", 
    use: '.mp3 <YouTube URL or Name>', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("⚠️ කරුණාකර YouTube URL හෝ ගීත නමක් ලබා දෙන්න!");

        const yt = await ytsearch(q);
        if (yt.videos.length < 1) return reply("❌ ප්‍රතිඵල නැත!");

        let yts = yt.videos[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(yts.url)}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        if (!data || data.status !== 200 || !data.result || !data.result.download_url) {
            return reply("⚠️ MP3 ලබා ගැනීම අසාර්ථකයි. කරුණාකර පසුව උත්සාහ කරන්න.");
        }

        let ytmsg = `╭━━━〔 *🎭 SHASINI  MD 🃏* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 🎵 *AUDIO DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇📌 *Title:* ${yts.title}
┇⏱️ *Duration:* ${yts.timestamp}
┇👀 *Views:* ${yts.views}
┇👤 *Author:* ${yts.author.name}
┇🔗 *Link:* ${yts.url}
╰━━❑━⪼

*🎶 Quality Audio Downloader By shaaini md*`;

        await conn.sendMessage(from, { image: { url: yts.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        await conn.sendMessage(from, { 
            audio: { url: data.result.download_url }, 
            mimetype: "audio/mp4", 
            ptt: true
        }, { quoted: mek });

      

    } catch (e) {
        console.error(e);
        reply("❌ දෝෂයක් ඇතිවිය. කරුණාකර පසුව උත්සාහ කරන්න.");
    }
});
