import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `<๐น> ๐๐ข๐ณ๐ข ๐ฅ๐ฆ๐ด๐ค๐ข๐ณ๐จ๐ข๐ณ ๐ถ๐ฏ ๐ข๐ณ๐ค๐ฉ๐ช๐ท๐ฐ ๐ฅ๐ฆ ๐๐ฆ๐ฅ๐ช๐ข๐ง๐ช๐ณ๐ฆ ๐ถ๐ด๐ข ๐ค๐ฐ๐ฎ๐ฐ ๐ฆ๐ซ๐ฆ๐ฎ๐ฑ๐ญ๐ฐ: ${usedPrefix + command} https://www.mediafire.com/file/EJEMPLO/EJEMPLO.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*๐ฝ๐พ๐ผ๐ฑ๐๐ด:* ${filename}
*๐ฟ๐ด๐๐พ:* ${filesizeH}
*๐๐ธ๐ฟ๐พ:* ${ext}

*<๐น> ๐๐ณ๐ค๐ฉ๐ช๐ท๐ฐ ๐ฑ๐ณ๐ฐ๐ค๐ฆ๐ด๐ข๐ฅ๐ฐ . . .๐๐ฐ๐ณ ๐ง๐ข๐ท๐ฐ๐ณ ๐ฆ๐ด๐ฑ๐ฆ๐ณ๐ข ๐ถ๐ฏ ๐ฎ๐ฐ๐ฎ๐ฆ๐ฏ๐ต๐ฐ, ๐ด๐ฆ ๐ฆ๐ด๐ต๐ข ๐ฆ๐ฏ๐ท๐ช๐ข๐ฏ๐ฅ๐ฐ...* 
*๐๐ฐ๐ต๐ข: ๐ข๐ณ๐ค๐ฉ๐ช๐ท๐ฐ ๐ฎ๐ข๐บ๐ฐ๐ณ ๐ข 100๐๐ ๐ฏ๐ฐ ๐ด๐ฆ๐ณ๐ข ๐ฆ๐ฏ๐ท๐ช๐ข๐ฅ๐ฐ.* 
`.trim() 
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐ฟ๐๐๐พ๐ผ๐๐๐ผ ๐๐ ๐ผ๐๐พ๐๐๐๐',
body: '๐ฎโโโโโ๐ณโโโโโ๐ซโโโโโ๐ฎโโโโโ๐ณโโโโโ๐ฎโโโโโ๐ฝโโโโโ ๐งโโโโโ๐ดโโโโโ๐นโโโโโ',         
previewType: 0, thumbnail: fs.readFileSync("./menu.jpg"),
sourceUrl: `https://google.com.mx`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*<๐น> ๐๐ญ๐จ๐ฐ ๐ข ๐ฐ๐ค๐ถ๐ณ๐ณ๐ช๐ฅ๐ฐ.. ๐ฑ๐ฐ๐ณ ๐ง๐ข๐ท๐ฐ๐ณ ๐ณ๐ฆ๐ท๐ช๐ด๐ข ๐ต๐ถ ๐ฆ๐ฏ๐ญ๐ข๐ค๐ฆ ๐ฆ ๐ช๐ฏ๐ต๐ฆ๐ฏ๐ต๐ข ๐ฏ๐ถ๐ฆ๐ท๐ข๐ฎ๐ฆ๐ฏ๐ต๐ฆ:*\n*https://www.mediafire.com/file/EJEMPLO/EJEMPLO.zip/file*')
console.log(e)
}}
handler.help = ['แดแดแดษชแด๊ฐษชสแด']
handler.tags = ['descargas']
handler.limit = 2
handler.command = /^(mediafire|mediafiredl|dlmediafire|mdf)$/i
export default handler
