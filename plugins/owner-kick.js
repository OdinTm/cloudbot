import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*βΌ πππ¨π©ππ’π ππ πππππππΎπ πππ¨πππ©ππ«πππ€, ππ¨ππ§πππ #ππ£πππ‘π π§ππ¨π©π§πππ© π¨π ππ§ππ¨ ππ‘ πππ¨ππ§π§π€π‘π‘πππ€π§.*'
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res)
await delay(1 * 1000)
}}
handler.help = ['α΄ΚΙͺα΄ΙͺΙ΄α΄Κ @α΄κ±α΄α΄ΚΙͺα΄']
handler.tags = ['grupos']
handler.command = /^(eliminar|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))