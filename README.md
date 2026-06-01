# slide

Slidev ベースのプレゼンテーションテンプレート。カスタムテーマ・レイアウト・Chart.js グラフを含む。

## Stack

- **[Slidev](https://sli.dev/)** — Markdown ベースのスライドフレームワーク
- **[Chart.js](https://www.chartjs.org/)** + **[vue-chartjs](https://vue-chartjs.org/)** — グラフ描画
- **[Nix](https://nixos.org/)** (`flake.nix`) — 開発環境管理

## セットアップ

```bash
npm install
```

## コマンド

```bash
npm run dev works/<topic>/slides.md   # 開発サーバー起動（localhost:3030）
npm run build works/<topic>/slides.md # 静的ビルド
npm run export works/<topic>/slides.md # PDF エクスポート
```

## 新しいスライドを作る

```bash
mkdir -p works/<topic>
```

`works/<topic>/slides.md` を作成し、フロントマターでテーマを指定：

```md
---
theme: ../../template
title: スライドタイトル
---

# タイトルスライド
```

## カスタムレイアウト

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

使用例：

```md
---
layout: two-col
---

# タイトル

::col1::
## 左カラム
テキスト

::col2::
## 右カラム
テキスト
```

## Chart コンポーネント

`type` に `bar` / `line` / `pie` / `doughnut` を指定：

```vue
<Chart type="bar" :data="{
  labels: ['1月', '2月', '3月'],
  datasets: [{ label: '売上', data: [120, 190, 150], backgroundColor: '#6366f1' }]
}" :height="'340px'" />
```

## draw.io 図

draw.io で図を作成し、SVG として書き出して配置：

```
works/<topic>/images/
  diagram.drawio  # 編集用ソース
  diagram.svg     # Slidev 表示用
```

スライドでの参照：

```md
<img src="./images/diagram.svg" />
```

> キャンバスサイズは幅 900px 以下・高さ 430px 以下を推奨。

## テーマ

- **カラー**: primary `#6366f1`（インジゴ）、accent `#06b6d4`（シアン）
- **フォント**: Noto Sans JP（本文）、Fira Code（コード）
- **モード**: ライトモード固定

