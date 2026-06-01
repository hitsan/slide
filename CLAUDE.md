# Slide Repository

Slidev ベースのプレゼンテーションテンプレート。カスタムテーマ・レイアウト・Chart.js グラフを含む。

## Stack

- **Slidev** (`@slidev/cli ^0.50.0`) — Markdown ベースのスライドフレームワーク
- **Chart.js** + **vue-chartjs** — グラフ描画
- **Nix** (`flake.nix`) — 開発環境管理

## コマンド

```bash
npm run dev     # 開発サーバー起動（localhost:3030）
npm run build   # 静的ビルド
npm run export  # PDF エクスポート
```

## ディレクトリ構成

```
template/                   # カスタム Slidev テーマ
  components/Chart.vue      # Chart.js ラッパー（bar/line/pie/doughnut）
  layouts/                  # カスタムレイアウト（下記参照）
  styles/custom.css         # テーマスタイル（インジゴ/シアン配色）
  global-bottom.vue         # 全スライド共通フッター
  package.json              # テーマメタデータ・フォント設定

works/                      # スライド置き場
  preview/slides.md         # テンプレート確認用スライド（全レイアウトのサンプル）
```

## カスタムレイアウト一覧

| レイアウト名 | 説明 | スロット |
|---|---|---|
| `two-col` | 2カラムカード | `col1`, `col2` |
| `two-col-icon` | 2カラム＋アイコン | `col1-icon`, `col1`, `col2-icon`, `col2` |
| `cards` | 3カラムカード | `card1`, `card2`, `card3` |
| `cards-icon` | 3カラム＋アイコン | `card1-icon`, `card1`, ... |
| `grid2x2` | 2×2グリッド | `card1`〜`card4` |
| `grid2x2-icon` | 2×2＋アイコン | `card1-icon`, `card1`, ... |
| `list` | 縦リスト（3項目） | `item1`, `item2`, `item3` |
| `list-icon` | 縦リスト＋アイコン | `item1-icon`, `item1`, ... |
| `compare` | 2案比較＋結論 | `col1`, `col2`, `bottom` |

## テーマ設計

- **カラー**: primary `#6366f1`（インジゴ）、accent `#06b6d4`（シアン）
- **フォント**: Noto Sans JP（本文）、Fira Code（コード）
- **モード**: ライトモード固定
- **遷移**: アニメーションなし

## Chart コンポーネント

```vue
<Chart type="bar" :data="{
  labels: [...],
  datasets: [{ label: '', data: [...], backgroundColor: '#6366f1' }]
}" :height="'340px'" />
```

`type` に `bar` / `line` / `pie` / `doughnut` を指定。

## スライドの作り方

1. `works/<topic>/` ディレクトリを作成
2. `slides.md` を置き、フロントマターで `theme: ../../template` を指定
3. `npm run dev works/<topic>/slides.md` で起動

## 注意

- アイコン付きレイアウトでは `<img>` の `src` はスライド `md` ファイルからの相対パス
- グラフの `:height` は明示指定推奨（デフォルト `100%` だとレイアウト崩れの可能性あり）
