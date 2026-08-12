# ARMY READY Sprint 3.3B Performance Baseline

建立日期：2026-08-12  
正式站：https://army.uubox.tw

## 比較基準

| 指標 | Sprint 3.2 / 3.3 Audit | Sprint 3.3B | 狀態 |
| --- | ---: | ---: | --- |
| 首頁 Warm Interactive | 約 962 ms | 部署後以相同網路與裝置重測 | 尚未以正式站實測，避免混用本機數字 |
| Hero 首次圖片傳輸 | 3,748,562 bytes | Desktop 222,780 bytes / Mobile 84,098 bytes | 資產實測；分別減少 94.1% / 97.8% |
| Practice First Paint | 約 638 ms | 預期持平；部署後重測 | Song Render 未修改 |
| Setlist 點擊至歌詞可閱讀 | 約 446 ms | 預期持平；部署後重測 | Song Render 未修改 |
| Karaoke UI Ready | 約 356 ms | 預期持平；部署後重測 | Karaoke 未修改 |
| Karaoke Sync Start | 約 281 ms | 預期持平；部署後重測 | Karaoke 未修改 |
| Apple iframe Visible | 約 3,040 ms | 部署後由 Performance Marks 取值 | 已加入可重複量測的 Timeline 指標 |
| Service Worker Install | 未建立時間基準 | 部署後重測 | 本次先以預快取大小作可比基準 |
| Install Precache | 92 entries / 8,586,915 bytes | 90 entries / 1,017,340 bytes | 減少 7,569,575 bytes（88.2%） |
| Cue Audio 初始下載 | 3,824,528 bytes，可能在歌曲載入時開始 | 0 bytes，首次按 Cue 才請求 | 本機互動驗證通過 |

## Apple Music Performance Marks

每次首次點擊 Apple Music 會建立獨立 run 編號：

- `army-ready:apple:<run>:button-click`
- `army-ready:apple:<run>:iframe-create`
- `army-ready:apple:<run>:player-visible`
- `army-ready:apple:<run>:iframe-load`

同時建立以下 measure：

- `button-click-to-iframe-create`
- `button-click-to-player-visible`
- `button-click-to-iframe-load`
- `iframe-create-to-iframe-load`

在瀏覽器 Console 可讀取：

```js
performance.getEntriesByType("measure")
  .filter(entry => entry.name.startsWith("army-ready:apple"))
  .map(({ name, duration }) => ({ name, duration }))
```

Apple Embed 是跨網域 iframe，現有介面沒有可靠的「真正可播放」事件。本 Sprint 未導入 MusicKit 或自行建立 Session，因此不虛構 Playable 時間；若 Apple 日後提供可用事件，再補入同一套 Timeline。

## 後續量測規範

1. 使用相同裝置、瀏覽器版本、網路條件，各量測至少 5 次。
2. 分開記錄首次進站與已快取回訪，中位數作為版本基準。
3. Practice 以「歌詞可閱讀」為完成點，不以 DOMContentLoaded 代替。
4. Karaoke 以音訊、Highlight、Auto Scroll 均可跟唱為完成點。
5. Apple Music 以 Performance Timeline 的相同 measure 名稱比較。
6. Service Worker 以乾淨 Profile 重新安裝，記錄 install duration 與 precache bytes。
