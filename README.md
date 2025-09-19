# extension-background-color-changer

Chrome 拡張機能を作成方法や概要を理解するために、背景の色を変更する機能を作成しました。

## 学習内容

### ディレクトリ構成

```
background-color-changer/
├── manifest.json  ← 設定ファイル
├── popup.html　　　← DOMとして読み込み
├── popup.js　　　　← V8エンジンで実行
├── popup.css　　　 ← デザイン
├── content.js　　　← 各タブに注入
└── icons/         ← アイコンフォルダ（今回は作成してない）
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### manifest.json ファイルの書き方

Chrome 拡張機能は manifest.json で指定されたファイルのみを読み込む。
**設定（ざっくりと）**

- manifest_version：マニュフェストのバージョン
- name：拡張機能の名前
- version：拡張機能自体のバージョン
- description：説明文
- icons：アイコン。16x16 , 48x48,128x128 の.png が推奨されている
- action**：**アイコンをクリックした時に動作するものを設定する
- content_script：静的に読み込まれる JavaScript や CSS ファイルを指定する
  - サポートされている鍵
    - matches：必須。
      **`<all_urls>`**はすべての URL に一致の意。（[参照サイト](https://developer.chrome.com/docs/extensions/mv2/reference/contentSettings?hl=ja#permissions)）
    - js：ファイルパスを配列で指定
    - css：ファイルパスを配列で指定
- permissions
  - 権限の設定。権限の宣言をすることで、アクセス権をどこまで許可するかを決めることができる（警告を出すこともできる）
    - 今回使用した「**"activeTab"**」はユーザーが操作しているアクティブなタブに一時的に操作する

### Chrome 拡張機能の読み込み方式

- パッケージ化されている
  - Chrome Web Store からインストール
    - .crx（Chrome Extension）ファイル
    - すべてのファイルを 1 つにまとめた圧縮ファイル
- パッケージ化されていない
  - 開発者が直接ファイルを読み込む
    - フォルダ内のファイルを**リアルタイムで参照**している
      - Manifest V3 アーキテクチャ
      - 各ファイルが独立したコンポーネントとして動作
    - 更新ボタンを押すだけでファイルの再アップロードは不要

### Chrome 拡張機能がリアルタイムで参照できる仕組み

- ファイルパス参照方式
  - ファイルパス参照方式は、コンピューター上で特定のファイルやフォルダー（ディレクトリ）の場所を示す方法
  - ファイルがコピーされるわけではない（ファイルパスをポインターとして保持）

### 「デベロッパーモード」の意味

デベロッパーモードを ON にする = セキュリティ制限を緩和
これでアクセス可能になる

### その他

- 今回はパッケージ化していませんが、他の人にも使って欲しい拡張機能を作った場合は、パッケージ化して Chrome Web Store に公開する
- Chrome Web Store で統計情報を確認することも可能
