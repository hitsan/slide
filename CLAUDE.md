# Slide Project

## draw.io アーキテクチャ図

draw.io で図を作成する際は、Slidev のキャンバスサイズ（980×551px）に収まるように作成する。

- **横型レイアウト推奨**: SVG の `width` は 900px 以下、`height` は 430px 以下
- **画像の配置**: `works/<name>/images/` に `.drawio` と `.svg` を両方置く
  - `.drawio` — draw.io アプリで編集するためのソース
  - `.svg` — Slidev で表示するための出力（手書き or エクスポート）
- **.md での参照**: `<img src="./images/xxx.svg" />` とシンプルに書くだけでよい（テンプレート CSS がサイズを制御する）
