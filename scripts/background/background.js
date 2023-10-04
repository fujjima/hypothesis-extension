function reddenPage() {
  document.body.style.backgroundColor = 'blue';
}

// executeScriptから呼び出した関数内での他関数の実行について
//  ref) https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript:~:text=a%20javascript%20function%20to%20inject.%20this%20function%20will%20be%20serialized%2C%20
chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
