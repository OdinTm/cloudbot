import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'main': 'ππ‘πππππππ',
  'sticker menu': 'π’π£πππππ‘ππππ€',
  'descargas': 'πππ’πππ‘πππ’',
  'juegos': 'ππ€ππππ’',
  'img edit': 'πππ ππππ£',
  'audios' : 'ππ€ππππ’',
  'herramientas': 'πππ‘π‘ππππππ£ππ’',
  'grupos': 'ππ‘π€πππ’',
  'exp y limites': 'ππ§π&πππππ£ππ’]',
  'audio mod': 'ππ€πππ πππ',
  'menu 18': 'ππππ€+ββ',
  'owner menu': 'ππ¦πππ‘ ππππ€'
}
const defaultMenu = {
  before: `
βΌβ’πΉππππ, *%nameβΌ*  
βΌβ’ ΚΙͺα΄Ι΄α΄ α΄Ι΄Ιͺα΄α΄ α΄Κ α΄α΄Ι΄α΄:

ββγ πππ’πππ‘πππ’ γβ
ββΌβ’ .α΄α΄κ±α΄Κα΄α΄Ιͺα΄ (Limit)
ββΌβ’ .α΄α΄κ±α΄Κα΄Κ (Limit)
ββΌβ’ .Ι’α΄α΄α΄Κ (Limit)
ββΌβ’ .Ι’Ιͺα΄α΄Ι’α΄ <α΄α΄xα΄α΄>
ββΌβ’ .image
ββΌβ’ .α΄ΙͺΙ΄α΄α΄Κα΄κ±α΄ <α΄α΄xα΄α΄>
ββΌβ’ .α΄Κα΄Ι΄α΄α΄α΄ (Limit)
ββΌβ’ .α΄‘α΄ΚΚα΄α΄α΄α΄Κ <α΄α΄xα΄α΄>
ββΌβ’ .Κα΄Ι΄α΄α΄κ± <α΄‘α΄ΚΚα΄α΄α΄α΄Κ>
ββΌβ’ .α΄α΄α΄α΄Κ
ββΌβ’ .α΄α΄α΄Ιͺα΄κ°ΙͺΚα΄ <ΚΙͺΙ΄α΄>
ββΌβ’ .Ι’α΄ΚΙͺα΄ α΄ <ΚΙͺΙ΄α΄>
ββΌβ’ .κ°α΄α΄α΄Κα΄α΄α΄ <ΚΙͺΙ΄α΄> 
ββΌβ’ .α΄Κα΄Κ <α΄Ιͺα΄α΄Κα΄> (Limit)
ββΌβ’ .α΄Κα΄Κ2 (Limit)
ββΌβ’ .Κα΄α΄α΄3 <α΄ΚΚ>
ββΌβ’ .Κα΄κ±α΄α΄ΚΚα΄
ββΌβ’ .Κα΄α΄α΄4 <α΄ΚΚ>
ββΌβ’ .Κα΄ <α΄ΚΚ>
ββββββ β’ ββββββ’ 

`.trimStart(),after: `
*%npmname* | %version
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    const pp2 = './menu.jpg'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      footer,
      after
    ].join()
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    const pp = await conn.profilePictureUrl(pp2).catch(_ => './menu.jpg')
    conn.sendHydrated(m.chat, text.trim(), author, pp, 'https://wa.me/5213321584511', 'Contacto', null, null, [
      ['LISTA DEL MENU', '/listmenu']
    ], m)
  } catch (e) {
    conn.reply(m.chat, 'Lo siento,  error al enviar el menu, intenta de nuevo contacta al owner.', m)
    throw e
  }
}
handler.help = ['α΄α΄Ι΄α΄α΄α΄κ±']
handler.tags = ['main']
handler.command = ['menudes']

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
