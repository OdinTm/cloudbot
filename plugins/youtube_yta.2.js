let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '๐น*๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐ฬ๐, --!!๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐ 5 ๐๐๐๐๐๐๐!!--*'
await conn.reply(m.chat, `*_โณ๐๐ด๐ฑ๐ฆ๐ณ๐ฆ.. ๐ด๐ถ ๐ค๐ข๐ฏ๐ค๐ช๐ฐฬ๐ฏ ๐ฆ๐ด๐ต๐ข ๐ด๐ช๐ฆ๐ฏ๐ฅ๐ฐ ๐ฆ๐ฏ๐ท๐ช๐ข๐ฅ๐ข......โณ_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐ฟ๐๐จ๐๐๐ง๐๐ ๐ฉ๐ช ๐ข๐ช๐จ๐๐๐',
body: 'ษชษดาษชษดษชx สแดแด สส @Oแดษชษด', 
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