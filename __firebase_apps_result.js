/*CMD
  command: /__firebase_apps_result
  help: Firebase response handler
CMD*/

try {
  var data = JSON.parse(content)

  if (!data) {
    Bot.sendMessage("📱 এখন কোনো app পাওয়া যায়নি।")
    return
  }

  var text = "📱 *LN CLUB Apps*\n\n"
  var found = false

  for (var key in data) {
    var app = data[key]

    if (!app) {
      continue
    }

    var name = app.name || key
    var version = app.version ? " v" + app.version : ""
    var description = app.description || ""
    var link = app.downloadUrl || app.downloadURL || app.url

    text += "📦 *" + name + "*" + version + "\n"

    if (description) {
      text += description + "\n"
    }

    if (link) {
      text += "⬇️ [Download " + name + "](" + link + ")\n"
      found = true
    } else {
      text += "⚠️ Download link নেই।\n"
    }

    text += "\n"
  }

  if (!found) {
    text += "⚠️ কোনো valid download link পাওয়া যায়নি।"
  }

  Bot.sendMessage(text)
} catch (e) {
  Bot.sendMessage("⚠️ Firebase data পড়তে সমস্যা হয়েছে।")
}
