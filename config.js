//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/HZV7TMbpCA798lb67FclGf";
global.website = process.env.GURL || "https://chat.whatsapp.com/HZV7TMbpCA798lb67FclGf";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2349125096374";
global.sudo = process.env.SUDO || "2349066008519";
global.owner = process.env.OWNER_NUMBER || "2349125096374";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURMdWY1aTFicEl0cy9DaXZyRnVxS3A2QWxTYWpmUndIc05YQmIxSFAyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDBNbXY0Tk1FSW04aG5QQXBVK1J3YXBuY3c5Rnd2d2dGMDQvcmV6TC9GMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRG1YdzJleDlmZjRsVlJkdTc1TnROcVUzOUUxTFJ0SHg0ODhUTGorU0drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGK1ZacEJsbnZqNDc1UDZxWThlZWhmUk1BaGJNV2lNK3dSeThBOHpJWnl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIYmwyL2xpdEp3TG9vZE5Pdk82dnpLTlJpWHB2dXlIaHpHQmlzTmJuSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJOS1pxUHYvbUxrL0lsKzNRaVhRUGs0clppM2E4TzZUaFdxRU1XWDFhVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tacHZJRFJrTy83V1Z0YVVsZklTSWdCeG9tZG9ueUpkT25VM2ZaZ2trND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BYdXBkaEVkSXdKZFNJUDdjSXZncVRib29xb1U3RkxzZWY5SjBSa0VVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1sMHdpWXo5b20wZUNYbTlsQVNDSGRiWnBjdmNRa1N2RGM3aWFiWWY3cWd6Nlo1WE51QnVHTkZpRFpESElwYy83ZEdad2FKY3U2SnlnL3B3WDNWUUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiI5VWovK3c0WFVaRlRocjVTZjZ1TlBVOCtycnBpRFI5a1QxR3J1UjNvZUVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjYwMDg1MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODY3ODU4M0UyQUE5ODBGQTI3MzkwQUNFREE0NThFNkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTMyMTUzMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicWdQc0p5WlZSdTYtS1paSS1PNUFyQSIsInBob25lSWQiOiI0NWMxZGExOC00MmM2LTQ1NWUtOTc5Yy1hYWUzMjA4NTFmZGIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0srdlExN1JsZDFMTENDeUsySmxXL1dibHIwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPN2FDVzBCNU1pKzdXWFRESys4TmtDNHY4TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQODhLTTNHUiIsIm1lIjp7ImlkIjoiMjM0OTA2NjAwODUxOToxOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmJ1cVVrUXFiM0h1UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoielI4ZHNWVVpzbStxeFIzTmVKREU5Q2YzbnFWNWZGVWFXSGZveXVob1IxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid1dFdVBRK0RjZmh1ZVN2ZUdvOHh0cnlBc3UrMkR1OWl0N2lsdUs1d0c5L1VRbzVPQmp2OXR4djd4djJqSTJDejhNSmFkN1hWZTlFdVJPQVRtdTVaQXc9PSIsImRldmljZVNpZ25hdHVyZSI6Ijl4WVJMMWpPZFZhbUt3SC9Ya1hQV0NUSTRId25GK3EwalljeDBOSWh5Z01FbzBtMnRoZzR0ZzdyOG9zOUh3ODl4V1JlbS9Uc0NlZGEwSnJJaG82cUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2NjAwODUxOToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMGZIYkZWR2JKdnFzVWR6WGlReFBRbjk1NmxlWHhWR2xoMzZNcm9hRWRRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMzIxNTI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxLSyJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ASTA𓃵",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "ASTA",
  ownername: process.env.OWNER_NAME || "ASTA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
