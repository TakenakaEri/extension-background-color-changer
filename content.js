// 元の背景色を保存
let originalBackgroundColor = null;

// ポップアップからのメッセージを受信
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "changeBackgroundColor") {
    // 初回実行時に元の背景色を保存
    if (originalBackgroundColor === null) {
      originalBackgroundColor =
        document.body.style.backgroundColor ||
        getComputedStyle(document.body).backgroundColor;
    }

    if (request.color === "reset") {
      // 元の背景色に戻す
      document.body.style.backgroundColor = originalBackgroundColor;
    } else {
      // 指定された色に変更
      document.body.style.backgroundColor = request.color;
    }

    sendResponse({ success: true });
  }
});
