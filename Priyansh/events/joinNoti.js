module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "𝗦𝗮𝗵𝗶𝗯𝗮 𝗟𝗼𝘃𝗲𝗿",
  description: "Notification of bots or people entering groups with random gif/photo/video",
  dependencies: {
      "fs-extra": "",
      "path": "",
      "pidusage": ""
  }
};

module.exports.onLoad = function () {
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinvideo");
  if (existsSync(path)) mkdirSync(path, { recursive: true }); 

  const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
  if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

  return;
}


module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
      api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
      const fs = require("fs");
      return api.sendMessage("", event.threadID, () => api.sendMessage({body: `(लो में आ गया आपका ✦𝗦𝗔𝗛𝗜𝗕𝗔 𝗟𝗢𝗩𝗘𝗥 ✦ जल्दी से स्वागत करो हमारा 😀👈\n●============================================●\n\nऔर मेरे प्यारे दोस्तो जल्दी से मेरे बॉस 𝗥𝗔𝗝𝗔  को रिक्वेस्ट भेज दो 😌👈\n●============================================●\nhttps://100032269830615\n●============================================●\n\n𝗽𝗿𝗲𝗳𝗶𝘅 => 👉 ${global.config.PREFIX} 👈\n●============================================●\n\nबोट अप्रूवल के लिए ${global.config.PREFIX}request लिख के Send कर दो 🙂🖐️) 
`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
  }
  else {
      try {
          const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
          let { threadName, participantIDs } = await api.getThreadInfo(threadID);

          const threadData = global.data.threadData.get(parseInt(threadID)) || {};
          const path = join(__dirname, "cache", "joinvideo");
          const pathGif = join(path, `${threadID}.video`);

          var mentions = [], nameArray = [], memLength = [], i = 0;

          for (id in event.logMessageData.addedParticipants) {
              const userName = event.logMessageData.addedParticipants[id].fullName;
              nameArray.push(userName);
              mentions.push({ tag: userName, id });
              memLength.push(participantIDs.length - i++);
          }
          memLength.sort((a, b) => a - b);

          (typeof threadData.customJoin == "undefined") ? msg = "─━━◉❖✦𝗦𝗔𝗛𝗜𝗕𝗔 𝗟𝗢𝗩𝗘𝗥✦≛✦𝗕𝗢𝗧✦❖◉━━─━━━━━━━━━━✤━━━━━━━ 𝗔𝗦𝗦𝗔𝗟𝗔𝗠𝗢𝗔𝗟𝗔𝗜𝗞𝗨𝗠 ❘✤ {name} ✤❘ 𝙈𝙊𝙎𝙏 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙊𝙐𝙍 𝙁𝘼𝙈𝙄𝙇𝙔 𝙂𝙍𝙊𝙐𝙋 😘🎉 \n━━━━━━━━━✤━━━━━━━━\n 𝗬𝗢𝗨 𝗔𝗥𝗘 𝗧𝗛𝗘 『 {soThanhVien} 』 𝗠𝗘𝗠𝗕𝗘𝗥 𝗢𝗙    〈✶ {threadName} ✶〉 𝗚𝗥𝗢𝗨𝗣 😇\n━━━━━━━━━━✤━━━━━━━━\n 🌸𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 🥵〖─━━◉❖𝐑𝐀𝐉𝐀❖◉━━─〗😎\n━━━━━━━━━━✤━━━━━━━\n 𝙳𝙾𝙽𝚃 𝙰𝙱𝚄𝚂𝙴 𝙾𝚁 𝚂𝙿𝙰𝙼 𝙾𝚃𝙷𝙴𝚁 𝚆𝙸𝚂𝙴 𝙶𝚁𝙾𝚄𝙿 🐼 『𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝚃𝙾𝚁』🥀 𝚁𝙴𝙼𝙾𝚅𝙴 𝚈𝙾𝚄 😈 \n━━━━━━━━━━✤━━━━━━━━\n𝑭𝑶𝑳𝑳𝑶𝑾 𝑮𝑹𝑶𝑼𝑷 𝑹𝑼𝑳𝑬𝑺 & 𝑹𝑬𝑺𝑷𝑬𝑪𝑻 𝒀𝑶𝑼𝑹 𝑺𝑰𝑺𝑻𝑬𝑹 𝑨𝑵𝑫 𝑩𝑹𝑶𝑻𝑯𝑬𝑹 🤗\n━━━━━━━━━━✤━━━━━━━━\n 🫡𝗜𝗙 𝗨𝗦𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧😜《 ᴮᴼᵀ ᴾᴿᴱᶠᴵˣ [#] ᵀʸᴾᴱ ᴴᴱᴸᴾ/ᴹᴱᴺᵁ ᵀᴼ ˢᴱᴱ ᴬᴸᴸ ᶜᴼᴹᴹᴬᴺᴰ 》😉\n━━━━━━━━━━✤━━━━━━━━🐸🍧  кｅⓔᵖ ε𝐍Ⓙᵒу 𝕒Ňᵈ Ｓ𝓉คү ａℂⓣ𝐢𝓿𝑒  ☜🐚\n━━━━━━━━━━✤━━━━━━━━\n─━━◉❖𝐒𝐀𝐇𝐈𝐁𝐀 𝐋𝐎𝐕𝐄𝐑 𝐑𝐀𝐉𝐀❖◉━━─" : msg = threadData.customJoin;
          msg = msg
          .replace(/\{name}/g, nameArray.join(', '))
          .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
          .replace(/\{soThanhVien}/g, memLength.join(', '))
          .replace(/\{threadName}/g, threadName);

          if (existsSync(path)) mkdirSync(path, { recursive: true });

          const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

          if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
          else if (randomPath.length != 0) {
              const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
              formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
          }
          else formPush = { body: msg, mentions }

          return api.sendMessage(formPush, threadID);
      } catch (e) { return console.log(e) };
  }
    }
