import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*<🔹> 𝘗𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯 𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬 𝘶𝘴𝘢 𝘤𝘰𝘮𝘰 𝘦𝘫𝘦𝘮𝘱𝘭𝘰 ${usedPrefix + command}* https://fb.watch/eJg_tHgS3Y/`
try {
m.reply(`<🔹> 𝘜𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰, 𝘵𝘶 𝘷𝘪𝘥𝘦𝘰 𝘴𝘦 𝘦𝘴𝘵𝘢́ 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘯𝘥𝘰...`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*🔹𝘚𝘶 𝘷𝘪𝘥𝘦𝘰 𝘩𝘢 𝘴𝘪𝘥𝘰 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘰 𝘦𝘹𝘪𝘵𝘰𝘴𝘢𝘮𝘦𝘯𝘵𝘦 ☑*' }, { quoted: m })
} catch (e) {
m.reply('<🔹> 𝘈𝘭𝘨𝘰 𝘰𝘤𝘶𝘳𝘳𝘪𝘰 𝘥𝘶𝘳𝘢𝘯𝘵𝘦 𝘭𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢, 𝘷𝘦𝘳𝘧𝘪𝘤𝘢 𝘲𝘶𝘦 𝘦𝘭 𝘦𝘯𝘭𝘢𝘤𝘦 𝘴𝘦𝘢 𝘴𝘪𝘮𝘪𝘭𝘢𝘳 𝘢 : 𝘩𝘵𝘵𝘱𝘴://𝘧𝘣.𝘸𝘢𝘵𝘤𝘩/𝘦𝘑𝘨_𝘵𝘏𝘨𝘚3𝘠/ 𝘦 𝘪𝘯𝘵𝘦𝘯𝘵𝘢 𝘯𝘶𝘦𝘷𝘢𝘮𝘦𝘯𝘵𝘦.')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i  
handler.tags = ['descargas']
handler.help = ['ꜰᴀᴄᴇʙᴏᴏᴋ']
handler.limit = 2
export default handler