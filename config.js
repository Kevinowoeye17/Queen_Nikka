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
global.sudo = process.env.SUDO || "2349125096374";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEdxSVlseU5KR2JKeDlxYWh3c0lyWk00UFlHTisvMmY0OVBiNVRPNmhtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODk3MHpBbFpja1l6bWQ0cTFQWGpRcmpxQmx3SWhrZGxEeStEdWdMTVBIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTWJERGhDMGZFRWxuZnNEUkxVZjQra3BCU3UyMjE4aUphY3RtTUd1MVVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuZUNzdURPNU5meVJvZjFPZ0YyMGh3V1ZzekxLV3pYVU1jZEpVMVF4MURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDY2FzZEtTMXJsUW1HSmVkTVgxd0pXL0NBbzBTdzVIRjlGUEZGdktDMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRDV2JtS0ZxUllDcjJFU29hNnNtUlZRMUNkSEswaHNpdkp3bWozTzNGRnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Y4VmgvV3dtaEZHVkdlZEdUKzZxcnlWb1FDQWJEc0RVWThsblRjbjJrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkd6MFZFaHZjOERxZWh2L3l5Undld2xSNk5YSnd4MWVvU3VuR2pkam8yUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZpa21GQWxRRzVyMloyZjNoektlYnQ1QkxxMnVsUXdycVJibDVhUm1YUkxjTzFESWhpOXhldFlsMnYvOXlETTBFMCswNVd1Si9zYlRzUXR1cXp1a2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJJWi9BZE54cFhMOUtlbmJrZ0ZZazBNNlJ0MGc0emt6VHhJWjZTZ3NOTld3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjUwOTYzNzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkRBN0EwQzk2Q0U5RjFBNEQ0Q0UxN0VEMjgzQkEzQ0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTQwNTI1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN3hocnNxMHBUZEtwX3hCNTJfWENEdyIsInBob25lSWQiOiIyMWE1MWQ5YS0xNWZiLTRjMGMtYTZhYy02MjJjOWFhNWU1YzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEYrNU8xa1Fvd3FSL3U4RG41RFoydE1JWmdBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx5cWljbzJEbC90SWdkTXVTT1paTFQzQWdEcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLRDUyTUU5VyIsIm1lIjp7ImlkIjoiMjM0OTEyNTA5NjM3NDoxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBU1RB8JODtSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3IyNFlRR0VMREx6TGtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSW9ScGx2dVlwRlRyUlNiY0FxY1I5dGJPc3JwY3NLWHZXUUgySU5GbVFTQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQmZxZExFTEVUVm9NMjU4SWFocVhuTFFMZUhVUCs2Wk02aGFvMWxZTkxoYWxHRzQvbG52RjlFd0F1U0wybVRIcUV0RE0xUDJDbWpuNEdZUTZ5b0pHQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkdnVVVmTDFtbEhHaThTdVkzaGREazljL0c1bUo2d25WZGNwMzN3K09TWW1CeGNKWkhJZ2xsdms0TGZsaHFQQk1sU2s3MXRQNWNvaExCaXc2MEE2S2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyNTA5NjM3NDoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTS0VhWmI3bUtSVTYwVW0zQUtuRWZiV3pySzZYTENsNzFrQjlpRFJaa0VnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNDA1MjQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlhMCJ9" // session id here
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
