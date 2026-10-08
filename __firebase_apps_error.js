/*CMD
  command: /__firebase_apps_error
  help: Firebase error handler
CMD*/

Bot.sendMessage(
  "⚠️ *Firebase থেকে Apps list আনা যায়নি।*\n\n" +
  "Firebase Rules-এ `/apps` read permission আছে কি না পরীক্ষা করুন।"
)
