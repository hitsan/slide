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
template/                      # カスタム Slidev テーマ
  components/Chart.vue         # Chart.js ラッパー（bar/line/pie/doughnut）
  composables/useSlotItems.js  # VNode 分割ユーティリティ（レイアウト共通）
  layouts/                     # カスタムレイアウト（下記参照）
  styles/custom.css            # テーマスタイル
  global-bottom.vue            # 全スライド共通フッター
  package.json                 # テーマメタデータ・フォント設定

works/                         # スライド置き場
  preview/slides.md            # テンプレート確認用スライド（全レイアウトのサンプル）
```

## カスタムレイアウト一覧

| レイアウト名 | 説明 | スロット |
|---|---|---|
| `two-col` | 2カラムカード（アイコン対応） | `cols`（`***` 区切り） |
| `cards` | 3カラムカード（アイコン対応） | `items`（`***` 区切り） |
| `grid` | 可変グリッド（アイコン対応） | `items`（`***` 区切り） |
| `list` | 縦リスト（アイコン対応） | `items`（`***` 区切り） |
| `compare` | 2案比較＋結論 | `cols`（`***` 区切り）、`bottom` |
| `timeline` | 横並びステップ（番号自動付与） | `steps`（`***` 区切り） |
| `image` | 画像＋テキスト（左右2分割） | `content`、`image` |
| `two-charts` | グラフ2つ並列 | `chart1`、`chart2` |
| `two-images` | 画像2つ並列 | `image1`、`image2` |

### grid のカラム数自動計算

| アイテム数 | カラム数 |
|---|---|
| 1〜3 | 1〜3列 |
| 4 | 2列（2×2） |
| 5以上 | 3列 |

## スロットの書き方

アイコンなし:
```md
::items::
## 見出しA

説明テキスト

***

## 見出しB

説明テキスト
```

アイコンあり（先頭に `<img>` を置く。**`<img>` の直後に必ず空行**を入れる）:
```md
::items::
<img src="./images/icon.png" />

## 見出しA

説明テキスト

***

<img src="./images/icon.png" />

## 見出しB

説明テキスト
```

> `<img>` の直後に空行なしで `## heading` を書くと、markdown-it が両行を HTML ブロックとして処理し `<h2>` が生成されない。

## テーマ設計

- **カラー**: primary `#0ea5e9`（スカイブルー）、accent `#E9D144`（イエロー）
- **フォント**: Noto Sans JP（本文）、Fira Code（コード）
- **モード**: ライトモード固定
- **遷移**: アニメーションなし

## Chart コンポーネント

```vue
<Chart type="bar" :data="{
  labels: [...],
  datasets: [{ label: '', data: [...], backgroundColor: '#0ea5e9' }]
}" :height="'340px'" />
```

`type` に `bar` / `line` / `pie` / `doughnut` を指定。

## スライドの作り方

1. `works/<topic>/` ディレクトリを作成
2. `slides.md` を置き、フロントマターで `theme: ../../template` を指定
3. `npm run dev works/<topic>/slides.md` で起動

## 注意

- `<img>` の `src` はスライド `.md` ファイルからの相対パス
- **`<img>` の直後に必ず空行**を入れる（入れないと `##` が見出しとして解釈されない）
- グラフの `:height` は明示指定推奨（デフォルト `100%` だとレイアウト崩れの可能性あり）

## スライドコンテンツ規則

- **句点（。）禁止** — 文末に句点を使わない
- **意味の区切りで改行** — 文章や意味のまとまりで `<br>` を挿入する
- **長すぎる行は言い換え** — `<br>` で分割しても 1 行が長くなる場合は、表現を変えて短くする

## draw.io アーキテクチャ図

draw.io で図を作成する際は、Slidev のキャンバスサイズ（980×551px）に収まるように作成する。

- **サイズ**: SVG の `width` は 900px 以下、`height` は 430px 以下
- **レイアウト**: 横型推奨（縦型は高さが超えやすい）
- **ファイル配置**: `works/<name>/images/` に `.drawio`（編集用ソース）と `.svg`（Slidev 表示用）を両方置く
- **.md での参照**: `<img src="./images/xxx.svg" />` とシンプルに書くだけでよい（テンプレート CSS がサイズを制御する）
