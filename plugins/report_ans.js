let handler = m => m
handler.before = async function (m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(REPORT|REQUEST|KONFIR|KONFIRM)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
let hftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": '',
                 "h": '',
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': `Qontes For You🥀 
Rindu Jadi Kan Rasa Dekat Nya
Bukan Justru Menjauh :)`,
                 'jpegThumbnail': await (await fetch('https://telegra.ph/file/d9c17295943787a7c7354.jpg')).buffer()
                        }
	                  } 
                     }
    conn.sendButton(m.key.remoteJid, '*✉️ Balasan Pesan dari Owner:*\n' + m.text, wm, 'Sip', 'Ok', hftextt)
    //conn.reply(m.quoted.mentionedJid[0], '*Owner:* ' + m.text + m.quoted.mentionedJid[0] + `${m.quoted.text.split`Pesan :`[1]}`, null)

}
module.exports = handler
