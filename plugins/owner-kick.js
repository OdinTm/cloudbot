import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*‼ 𝙎𝙞𝙨𝙩𝙚𝙢𝙖 𝙙𝙚 𝙍𝙀𝙎𝙏𝙍𝙄𝘾𝙏 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤, 𝙚𝙨𝙘𝙧𝙞𝙗𝙚 #𝙚𝙣𝙖𝙗𝙡𝙚 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩 𝙨𝙞 𝙚𝙧𝙚𝙨 𝙚𝙡 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙙𝙤𝙧.*'
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res)
await delay(1 * 1000)
}}
handler.help = ['ᴇʟɪᴍɪɴᴀʀ @ᴜꜱᴜᴀʀɪᴏ']
handler.tags = ['grupos']
handler.command = /^(eliminar|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))