import fetch from 'node-fetch'

let handler = m => m
handler.before = async (m,) => {
    let chat = db.data.chats[m.chat]
    if (chat.bot) {
        let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text:(m.text), lc: "es" }, ''))
        let json = await res.json()
        if (json.success) m.reply('<🤖> 𝘉𝘰𝘵 𝘥𝘪𝘤𝘦:  ' + json.success)
        else throw json
    }
    return !0 
}

handler.help = ['ᴄʜᴀᴛʙᴏᴛ']
handler.tags = ['main']

export default handler

// by odin