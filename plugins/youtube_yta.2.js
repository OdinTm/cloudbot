let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '🔹*𝘐𝘕𝘚𝘌𝘙𝘛𝘈 𝘌𝘓 𝘌𝘕𝘓𝘈𝘊𝘌 𝘋𝘌 𝘋𝘌𝘚𝘊𝘈𝘙𝘎𝘈𝘙 𝘔𝘈𝘚 𝘌𝘓 𝘊𝘖𝘔𝘈𝘕𝘋𝘖 𝘗𝘈𝘙𝘈 𝘋𝘌𝘚𝘊𝘈𝘙𝘎𝘈𝘙 𝘛𝘜 𝘊𝘈𝘕𝘊𝘐𝘖́𝘕, --!!𝘋𝘜𝘙𝘈𝘊𝘐𝘖𝘕 𝘔𝘈𝘟𝘐𝘔𝘈 𝘋𝘌 5 𝘔𝘐𝘕𝘜𝘛𝘖𝘚!!--*'
await conn.reply(m.chat, `*_⏳𝘌𝘴𝘱𝘦𝘳𝘦.. 𝘴𝘶 𝘤𝘢𝘯𝘤𝘪𝘰́𝘯 𝘦𝘴𝘵𝘢 𝘴𝘪𝘦𝘯𝘥𝘰 𝘦𝘯𝘷𝘪𝘢𝘥𝘢......⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙩𝙪 𝙢𝙪𝙨𝙞𝙘𝙖',
body: 'ɪɴғɪɴɪx ʙᴏᴛ ʙʏ @Oᴅɪɴ', 
previewType: 0, thumbnail: fs.readFileSync("./menu.jpg"),
sourceUrl: `https://github.com/OdinTm/INFINIXBOT-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
await conn.sendMessage(m.chat, { document: { url: link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
}
handler.command = /^yta|ytmp3$/i
handler.limit = 3
export default handler