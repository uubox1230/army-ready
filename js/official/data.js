/*
  ARMY READY｜官方公告資料

  新增公告方式：
  1. 複製 OFFICIAL_ANNOUNCEMENTS 裡的一個完整物件。
  2. 修改 id、category、date、title、summary 與 links。
  3. 最新公告請放在陣列最上方。

  category 可使用：
  ticket｜entry｜venue｜merch｜general
*/

const OFFICIAL_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "ticket", label: "票券" },
  { id: "entry", label: "入場" },
  { id: "venue", label: "場館" },
  { id: "merch", label: "物販" },
  { id: "general", label: "其他" }
];

const OFFICIAL_ANNOUNCEMENTS = [
  {
    id: "official-page-launch",
    category: "general",
    date: "2026-07-31",
    isNew: true,
    title: "官方公告整理頁建立中",
    summary:
      "之後可將主辦單位發布的票券、入場規範、交通與物販公告集中整理在此頁。",
    links: [
      {
        label: "返回首頁",
        url: "index.html",
        primary: true
      }
    ]
  },

  {
    id: "venue-guide-preview",
    category: "venue",
    date: "2026-07-31",
    isNew: false,
    title: "高雄國家體育場資訊將獨立整理",
    summary:
      "場館交通、入口位置、周邊設施與演唱會當日注意事項，後續將更新至 Venue Guide。",
    links: [
      {
        label: "Venue Guide",
        url: "venue.html",
        primary: false
      }
    ]
  }

  /*
  範例：

  ,{
    id: "ticket-notice-001",
    category: "ticket",
    date: "2026-08-01",
    isNew: true,
    title: "公告標題",
    summary: "公告內容摘要。",
    links: [
      {
        label: "查看官方公告",
        url: "https://官方公告網址",
        primary: true
      },
      {
        label: "附件",
        url: "https://附件網址",
        primary: false
      }
    ]
  }
  */
];
