import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `<🔹> 𝘗𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯 𝘢𝘳𝘤𝘩𝘪𝘷𝘰 𝘥𝘦 𝘔𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦 𝘶𝘴𝘢 𝘤𝘰𝘮𝘰 𝘦𝘫𝘦𝘮𝘱𝘭𝘰: ${usedPrefix + command} https://www.mediafire.com/file/EJEMPLO/EJEMPLO.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*𝙽𝙾𝙼𝙱𝚁𝙴:* ${filename}
*𝙿𝙴𝚂𝙾:* ${filesizeH}
*𝚃𝙸𝙿𝙾:* ${ext}

*<🔹> 𝘈𝘳𝘤𝘩𝘪𝘷𝘰 𝘱𝘳𝘰𝘤𝘦𝘴𝘢𝘥𝘰 . . .𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘦𝘴𝘱𝘦𝘳𝘢 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰, 𝘴𝘦 𝘦𝘴𝘵𝘢 𝘦𝘯𝘷𝘪𝘢𝘯𝘥𝘰...* 
*𝘕𝘰𝘵𝘢: 𝘢𝘳𝘤𝘩𝘪𝘷𝘰 𝘮𝘢𝘺𝘰𝘳 𝘢 100𝘔𝘉 𝘯𝘰 𝘴𝘦𝘳𝘢 𝘦𝘯𝘷𝘪𝘢𝘥𝘰.* 
`.trim() 
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙏𝙐 𝘼𝙍𝘾𝙃𝙄𝙑𝙊',
body: '🇮​​​​​🇳​​​​​🇫​​​​​🇮​​​​​🇳​​​​​🇮​​​​​🇽​​​​​ 🇧​​​​​🇴​​​​​🇹​​​​​',         
previewType: 0, thumbnail: fs.readFileSync("./menu.jpg"),
sourceUrl: `https://google.com.mx`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*<🔹> 𝘈𝘭𝘨𝘰 𝘢 𝘰𝘤𝘶𝘳𝘳𝘪𝘥𝘰.. 𝘱𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘳𝘦𝘷𝘪𝘴𝘢 𝘵𝘶 𝘦𝘯𝘭𝘢𝘤𝘦 𝘦 𝘪𝘯𝘵𝘦𝘯𝘵𝘢 𝘯𝘶𝘦𝘷𝘢𝘮𝘦𝘯𝘵𝘦:*\n*https://www.mediafire.com/file/EJEMPLO/EJEMPLO.zip/file*')
console.log(e)
}}
handler.help = ['ᴍᴇᴅɪᴀꜰɪʀᴇ']
handler.tags = ['descargas']
handler.limit = 2
handler.command = /^(mediafire|mediafiredl|dlmediafire|mdf)$/i
export default handler
