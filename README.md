# LN CLUB Download Bot — Bots.Business Git Import

This repository follows the Bots.Business Git bot format:
- `bot.json` at repository root
- commands inside the `commands/` folder
- each command file contains a `/*CMD ... CMD*/` header

## Commands
- `/start`
- `/apps`
- `/help`

The Firebase callback commands are also included because Bots.Business uses command callbacks for HTTP requests.

## Firebase RTDB
https://ln-apk-downold-default-rtdb.firebaseio.com/

The `/apps` command reads:
`https://ln-apk-downold-default-rtdb.firebaseio.com/apps.json`

## Firebase data format

Create this structure:

apps
  app1
    name: "LN CLUB APP"
    version: "1.0"
    description: "Your app description"
    downloadUrl: "https://example.com/app.apk"

  app2
    name: "Another App"
    version: "2.0"
    description: "Description"
    downloadUrl: "https://example.com/another.apk"

The bot reads the data when `/apps` is used, so changing the Firebase data changes what the bot shows.

## Support
@web_and_bot_support

## Important
Firebase `/apps` must be readable by the bot. Do not put Firebase service-account private keys or Telegram bot tokens in GitHub.
Use only APKs/apps and download links you are authorized to distribute.
