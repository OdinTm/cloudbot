import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `๐น๐๐ข๐ณ๐ข ๐ฅ๐ฆ๐ด๐ค๐ข๐ณ๐จ๐ข๐ณ ๐ถ๐ฏ๐ข ๐ค๐ข๐ฏ๐ค๐ช๐ฐฬ๐ฏ ๐ฐ ๐ท๐ช๐ฅ๐ฆ๐ฐ ๐ถ๐ด๐ข ๐ค๐ฐ๐ฎ๐ฐ ๐ฆ๐ซ๐ฆ๐ฎ๐ฑ๐ญ๐ฐ: ${usedPrefix}${command} i'm happy faraon โ`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '๐นLo sentimos, Vรญdeo/Audio no encontradoโ, intente con otro nombre โ'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
๐ *Titulo:* ${title}
๐ *Url:* ${url}
๐น *Descripciรณn:* ${description}
โฒ๏ธ *Publicado en:* ${publishedTime}
โ *Duraciรณn:* ${durationH}
๐๏ธ *Vistas:* ${viewH}
  `.trim(), author, thumbnail, url, '๐บMiralo en YouTube!', null, null, [
    ['Audio ๐ง', `${usedPrefix}yta ${url} yes`],
    ['Video ๐ฅ', `${usedPrefix}ytv ${url} yes`],
    ['Buscador de Youtube๐', `${usedPrefix}buscaryt ${url}`]
  ], m)
}
handler.help = ['แดสแดส <แดษชแดแดสแด>','แดสแดส2']
handler.tags = ['descargas']
handler.command = /^play|play2?$/i

handler.exp = 0

export default handler