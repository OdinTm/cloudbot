import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'sticker menu': 'π’π£πππππ‘ππππ€'

}
const defaultMenu = {
  before: `
βββ’βββΎ *%me:πΉβ½βββ’             
ββΌβ’πΉππππ, *%nameβΌ*
ββΌβ’ ΚΙͺα΄Ιͺα΄α΄κ± : *%limit Limit*
ββΌβ’ Κα΄Κα΄ : *%role*
ββΌβ’ Ι΄Ιͺα΄ α΄Κ : *%level*
ββΌβ’ *(%exp / %maxexp)*
ββΌβ’ α΄α΄α΄α΄Κ xα΄ : *%totalexp* 
ββΌβ’ κ°α΄α΄Κα΄: *%date*
ββΌβ’ α΄Ιͺα΄α΄α΄α΄ α΄α΄α΄Ιͺα΄ α΄: *%uptime* 
ββΌβ’ Database: *%rtotalreg of %totalreg*
βββββββ β’ βββββββ’ 
`.trimStart()
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

    const sections = [
      {
     title: `-β¦ππ¨π‘πππ’π‘ππ¦ πππ ππ’π§β¦-`,
     rows: [
         {title: "β¦ππ‘π¦π§π₯π¨ππππ’π‘ππ¦ ππ π¨π¦π’ π¬ π§ππ₯π ππ‘π’π¦β¦", rowId: '.ayuda', description:'Aprende a usar los comandos del bot y sus reglas.' },
         {title: "β¦πππ¦π§π ππ’π π£πππ§π ππ ππ’π ππ‘ππ’π¦β¦", rowId: '.allmenu', description:'Se envia la lista del menu existente' },
         {title: "β¦ππ₯ππ π¦π§πππππ₯π¦β¦", rowId: '.menusticker', description:'Crea stickers etiquetando una imagen junto a su comando Ejemplo: #sticker' },
         {title: "β¦πππ¦πππ₯πππ¦β¦", rowId: '.menudes', description:'Descarga de musica, video, e imagenes, Ejemplo: #play el ansioso' },
         {title: "β¦ππ¨πππ’π¦ π£ππ₯π ππ₯π¨π£π’π¦β¦", rowId: '.menugames', description:'Comandos para la diversion en grupos, ranks, porcentajes y emparejamientos' },
         {title: "β¦ππππππ’π‘ ππ ππ ππππ‘ππ¦β¦", rowId: '.menuimg', description:'Crea logos o aplica un filtro de los disponibles a la imagen de tu preferencia.'
         },
         {title: "β¦πππ₯π₯ππ πππ‘π§ππ¦β¦", rowId: '.menutools', description:'Herramientas de utlidad, crea QR, calculadora, busca algo en google.' }, 
         {title: "β¦ππ’π ππ‘ππ’π¦ π£ππ₯π πππ π ππ ππ₯π¨π£π’β¦", rowId: '.menugrup', description:'Comandos para eliminar o dar administracion cambiar foto del grupo etc.'
         },
         {title: "β¦ππ«π£ π¬ πππ ππ§ππ¦β¦", rowId: '.menuexp', description:'Registro de usuario, gana exp y limites de uso' }, 
         {title: "β¦π¦π’ππ’ πππ¦ππ₯π₯π’πππππ’π₯β¦", rowId: '.menudev', description:'Lista de comandos que solo el creador del bot puede usar' },    
     ]
       }
   ]
   
   const listMessage = {
     text: text,
     footer: author,
     title: '-β¦ππ¨π‘πππ’π‘ππ¦ πππ ππ’π§β¦-',
     buttonText: "πΉπ£π¨ππ¦π ππ€π¨πβΌ",
     sections
   }

   await conn.sendMessage(m.chat, listMessage, author, m)
  } catch (e) {
    conn.reply(m.chat, 'Lo siento,  error al enviar el menu, intenta de nuevo contacta al owner.', m)
    throw e
  }
}
handler.help = ['α΄α΄Ι΄α΄']
handler.tags = ['main']
handler.command = /^(listmenu|menulist|ayuda|\?)$/i

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
