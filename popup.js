document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".color-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const color = this.getAttribute("data-color");

      // アクティブなタブに色変更のメッセージを送信
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "changeBackgroundColor",
          color: color,
        });
      });

      // ポップアップを閉じる
      window.close();
    });
  });
});
