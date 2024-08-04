const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447928279649";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_44_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQsXG4gICAgICAgIDk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJISWQ5SVN0OWY0cmV4ZG9pUjNSZ1pDWXBtL21oTVRZaUxVUDNxU253Y3hRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzkyODI3OTY0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEVCRDM0NTM4MjZFRkFFREQ4RUY4RTUwMjNBRjhGMDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzQzMDY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3OTI4Mjc5NjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQTA2NDFEMkMwNzZBRjUxRTJBMzQxQjZFM0I0N0ZDRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3NDMwNjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTi16MjB2UW1UOXVBZDktcHZTb1RXd1wiLFxuICBcInBob25lSWRcIjogXCJjZDg0NjU0ZC05YzVmLTRkMjUtYTYwYy05OTU0NjQ5Y2YwY2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMTE2LFxuICAgICAgMjI0LFxuICAgICAgMTM5LFxuICAgICAgMTk5LFxuICAgICAgMTUwLFxuICAgICAgMTA5LFxuICAgICAgMjAyLFxuICAgICAgMjI3LFxuICAgICAgMjIwLFxuICAgICAgMTksXG4gICAgICAxMTYsXG4gICAgICAyMDUsXG4gICAgICAyNDIsXG4gICAgICA2MyxcbiAgICAgIDI0LFxuICAgICAgMSxcbiAgICAgIDIxMixcbiAgICAgIDEzMSxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICA0LFxuICAgICAgMTYwLFxuICAgICAgMjExLFxuICAgICAgMjExLFxuICAgICAgMjUyLFxuICAgICAgMjIwLFxuICAgICAgMjQxLFxuICAgICAgMTEsXG4gICAgICAyMDQsXG4gICAgICA1MyxcbiAgICAgIDE1MyxcbiAgICAgIDIyMixcbiAgICAgIDEzMyxcbiAgICAgIDEzMixcbiAgICAgIDIzLFxuICAgICAgMTUsXG4gICAgICAxNDMsXG4gICAgICAxNDYsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjNRM0hWVEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzkyODI3OTY0OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzg4MTg3MTE3MTU5MjoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhBQ0tFUlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lWTk0SUVFSmJ5dTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2dJaVpXVVcrUFBHbGRiYVYyMFhIaURGZ2YzTW5oUkJBNk1MbWRhRHJRbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0QVdrMXFBZ1RPWFlMdzBsbFdMYkJTdGZqMmorZUg2YmpSeVVqY2Q3V3NPQk5qVEtDbXBkZ2V0V0lnbWwvYWlZaUNWS3NiVFpQa1h2NFlEaWpvZEdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJla3ZoU3cwVkd1TmlWVjRQajFkeFhaWG5XYjJsRXNaVExwd3RRVnFxbHNONmlsZ0JzL2Z6T3pEWkx3MDFvY0xFQ2dINHNLOCtOdVRWaTdhM0ptekhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc5MjgyNzk2NDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc0MzA2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU91MVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3UxLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGpsUzJsTGVUd2ZHanE3TU5KTjhzb0l3Nk9yWFRjb2FjNWR2YlJSaElEZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc5ODg4OTY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3NDMwNjcxNDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
