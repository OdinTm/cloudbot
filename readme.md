# INFINIX-BOT 2022 BY: @ODIN

<a href="https://github.com/BochilGaming/games-wabot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/BochilGaming/games-wabot?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/BochilGaming/games-wabot/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/BochilGaming/games-wabot?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/BochilGaming/games-wabot/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/BochilGaming/games-wabot?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/BochilGaming/games-wabot/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/BochilGaming/games-wabot?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/BochilGaming/games-wabot/issues"><img title="Issues" src="https://img.shields.io/github/issues/BochilGaming/games-wabot?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/BochilGaming/games-wabot/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/BochilGaming/games-wabot?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/BochilGaming/games-wabot/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/BochilGaming/games-wabot?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/BochilGaming/games-wabot/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/BochilGaming/games-wabot?label=PullRequest&color=red&style=flat-square"></a>


##Grupo Oficial de Whatsapp
[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/FYQ2L2wPuR958AOXogzmHY) 
**NO BOT**


#### Deploy en Heroku NOTA: BOT COMPATIBLE SIN EMBARGO HEROKU NO PERMITE CONECTAR CUENTA GITHUB POR EL MOMENTO, ASI QUE HACER DEPLOY POR HEROKU CLI
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/BochilGaming/games-wabot)

#### Heroku Buildpack
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

### Ejecutar en termux
1. Escribe asi como esta en la lista de orden cada comando para ejecutar en Termux
```sh
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ git clone https://github.com/BochilGaming/games-wabot -b multi-device
$ cd games-wabot
$ npm i 
```
If error try using yarn instead of npm, see [here](https://github.com/BochilGaming/games-wabot/tree/multi-device#if-npm-install-failed--try--using-yarn-instead-of-npm)
```sh
$ node .
```
2. Espera a que el bot inicie...
3. Escanea el codigo QR desde un segundo dispositivo, o si tienes PC puedes tomar captura enviarla al WhatsApp web y desde ahi escanear el QR. (Ve a whatsapp > Disposivos vinculados > Pulsa en `Multi Device` > Pulsa en `Vincular Dispositivo`)
4. Disfruta del bot

#### If npm install failed, try using yarn instead of npm
```sh
$ pkg install yarn -y
$ yarn install
```
---------

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALAR EN UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & INFINIX BOT ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/BochilGaming/games-wabot -b multi-device
cd games-wabot
npm install
npm update
```

---------

## INSTALAR EN WINDOWS (RECOMENDADO VISUAL STUDIO O BASH) 

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/BochilGaming/games-wabot -b multi-device
cd games-wabot
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## How To Customise Message Display
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

### want to contribute?
1. fork this repository
2. Change/edit/create what you want. for example you can add features, fix bug, etc
3. **test** before making a pull req!!
4. make a pull req!
5. if your pull req is already in **acc/merge**, you can delete your branch or you can create pull req again :)

---------


### Thanks To 
**A MI**




#### MIS AGRADECIMIENTOS ESPECIALES A:
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)


## CREADOR Y PROPIETARIO DE ESTE BOT
[![ODIN](https://github.com/Nurutomo.png?size=100)]


