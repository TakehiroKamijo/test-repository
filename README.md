# シンプルホームページ テンプレート

これはシンプルでモダンな静的ホームページテンプレートです。モバイルファースト設計で、すぐに公開して使えます。

## 同梱ファイル
- `index.html` — メインページ
- `styles.css` — スタイル
- `script.js` — ハンバーガーメニュー、フォーム送信処理
- `README.md` — このファイル

## 使い方（ローカルで確認）
1. ファイルを同じフォルダに置く（index.html, styles.css, script.js）。
2. ブラウザで `index.html` を開く。

## フォーム送信の設定
フォームは現在 Formspree を想定しています。Formspree を使う場合:
1. https://formspree.io/ に登録してフォームエンドポイント（例:`https://formspree.io/f/xxxxxx`）を取得。
2. `index.html` の `<form action="https://formspree.io/f/your-form-id">` の `action` を取得したエンドポイントに置き換える。

代替として Netlify Forms や独自バックエンドにも接続できます。

## デプロイ方法
任意の静的ホスティングへデプロイ可能です。代表的な方法：

### GitHub Pages
1. リポジトリにファイルを追加して push。
2. GitHub リポジトリ -> Settings -> Pages から公開ブランチ（例: main）を選択。
3. `index.html` がルートにあれば即公開されます。

### Netlify
1. Netlify にリポジトリを接続してビルドコマンドは不要（static）。
2. デプロイ設定でルートを指定して公開。

### Vercel
1. Vercel にリポジトリを接続。
2. デフォルト設定で静的サイトとして公開されます。

## カスタマイズ
- ブランド名・ロゴ・色：`index.html` と `styles.css` の :root カラー変数を編集してください。
- 画像：`https://via.placeholder...` を実際の画像に差し替えてください。
- 多言語化、ブログ、CMS 連携（Netlify CMS, Forestry 等）や React/Next.js への移行も対応できます。必要なら移行プランを作成します。

## 次のステップ（提案）
- ロゴ・使用する写真をいただければ、デザインをブランドに合わせて調整します。
- GitHub リポジトリを教えていただければ、ファイルを直接 push して GitHub Pages で公開します。
- フォーム送信先（Formspree ID など）を渡していただければ、フォームをテスト＆有効化します。

おまかせで作成しました。まずはローカルで動作確認してみてください。リポジトリにアップロードして公開したい場合や、色・文言の修正、追加機能（ブログ、SNS フィード、GA/GTM、SEO 強化など）を希望なら指示をください — すぐ対応します。