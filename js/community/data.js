/*
  ARMY READY｜粉絲應援活動資料

  新增活動方式：
  1. 複製 COMMUNITY_EVENTS 裡的一個完整物件。
  2. 修改 id、category、date、title、host、summary、location、time、note。
  3. 最新或最重要的活動可放在陣列最上方。

  category 可使用：
  banner｜giveaway｜photo｜support｜other
*/

const COMMUNITY_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "banner", label: "手幅" },
  { id: "giveaway", label: "物資發放" },
  { id: "photo", label: "拍照點" },
  { id: "support", label: "應援企劃" },
  { id: "other", label: "其他" }
];

const COMMUNITY_EVENTS = [
  {
    id: "community-page-launch",
    category: "support",
    date: "2026-11-19",
    title: "粉絲應援活動整理頁建立中",
    host: "ARMY READY",
    summary:
      "之後可將各主辦單位公開發布的手幅、物資、拍照點與其他活動集中整理在此頁。",
    location: "高雄國家體育場周邊",
    time: "待公告",
    note: "實際活動內容以主辦單位公告為準。",
    links: [
      {
        label: "返回首頁",
        url: "index.html",
        primary: true
      }
    ]
  },

  {
    id: "community-example-giveaway",
    category: "giveaway",
    date: "2026-11-21",
    title: "活動資料範例",
    host: "Example ARMY",
    summary:
      "這是一筆示範資料，可直接在 data.js 中替換成正式的活動資訊。",
    location: "捷運世運站周邊",
    time: "14:00 起",
    note: "數量有限，送完為止。",
    links: [
      {
        label: "活動公告",
        url: "#",
        primary: false
      }
    ]
  }
];
