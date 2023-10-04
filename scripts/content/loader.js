// TODO: distに出力されたloader.jsからだと、content.jsを読み込めないようなので確認する
//  ref) https://medium.com/coobyhq/hot-module-replacement-for-chrome-extension-1096cb480edd#:~:text=blocker%202%3A%20failed%20to%20load%20the%20update%20chunks%20with%20chrome%20extension
// ref) https://blog.holyblue.jp/entry/2022/07/10/182137#:~:text=2.%20content%20script%E3%81%AEmodule%E5%8C%96
(async () => {
  await import(chrome.runtime.getURL('dist/content.js'))
})()
