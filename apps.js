/*CMD
  command: /apps
  help: Show available apps from Firebase
CMD*/

var params = {
  url: "https://ln-apk-downold-default-rtdb.firebaseio.com/apps.json",
  success: "/__firebase_apps_result",
  error: "/__firebase_apps_error",
  background: true
}

Bot.sendMessage("⏳ *Apps list loading...*")
HTTP.get(params)
