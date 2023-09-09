function reddenPage() {
  document.body.style.backgroundColor = 'red';
}

// ref) https://developer.chrome.com/docs/extensions/reference/scripting/
chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
