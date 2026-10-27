/*
  ARMY READY｜官方公告資料

  新增公告方式：
  1. 複製 OFFICIAL_ANNOUNCEMENTS 裡的一個完整物件。
  2. 修改 id、category、date、updatedAt、title、summary 與 links。
  3. 最新公告請放在陣列最上方。

  category 可使用：
  ticket｜entry｜venue｜merch｜general
*/

const OFFICIAL_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "ticket", label: "購票相關" },
  { id: "entry", label: "入場相關" },
  { id: "venue", label: "場館資訊" },
  { id: "merch", label: "官方周邊" },
  { id: "general", label: "其他" }
];

const OFFICIAL_ANNOUNCEMENTS = [
  {
    id: "official-pop-up-kaohsiung-guide",
    category: "merch",
    date: "2026-10-27",
    updatedAt: "2026-10-27",
    isNew: true,
    title: "【公告】BTS POP-UP : ARIRANG IN KAOHSIUNG 活動條款與注意事項",
    summary:
      "線上預約開放時間：2026年10月28日（三）12:00 (台灣時間 GMT+8)<br>※ 請使用 Google Chrome 或 Safari 瀏覽器進入預約頁面。<br>※ 尚未完成會員註冊者將無法進行預約。<br><br>[活動資訊]<br>* 活動日期：2026年11月05日（周四）- 2026年11月23日（周一）<br>* 營業時間：週一至週五 11:00 - 22:00 (GMT+8) 週六至週日 10:30 - 22:00 (GMT+8)<br>* 地點：E SKY MALL 1F (台灣高雄市鼓山區大順一路115號，804)",
    links: [
      {
        label: "Weverse 官方公告",
        url: "https://weverse.io/bts/notice/40411",
        primary: false
      },
      {
        label: "預約網址",
        url: "https://bts-popup-booking.venue.zone/en/19/kaohsiung-2026",
        primary: true
      }
    ]
  },
  {
    id: "official-fanchant-guide",
    category: "general",
    date: "2026-08-01",
    updatedAt: "2026-08-01",
    isNew: true,
    title: "BTS “ARIRANG” Fan Chant Guide",
    summary:
      "大黑官方有提供 ARIRANG 專輯的官方版本應援，我這邊也有整理巡演用的歌單+練習工具，歡迎大家都多加利用！！",
    links: [
      {
        label: "Weverse 官方公告",
        url: "https://weverse.io/bts/notice/34592",
        primary: true
      },
      {
        label: "應援練習",
        url: "https://army.uubox.tw/setlist/",
        primary: false
      }
    ]
  },
  {
    id: "official-page-launch",
    category: "general",
    date: "2026-08-01",
    updatedAt: "2026-08-01",
    isNew: false,
    title: "官方公告整理頁建立中",
    summary:
      "之後會將 HYBE、LIVE NATION、Tixcraft 發布的公告集中整理在此頁。",
    links: [
      {
        label: "Weverse 主頁",
        url: "https://weverse.io/bts/highlight",
        primary: true
      },
      {
        label: "返回首頁",
        url: "/",
        primary: false
      }
    ]
  },
  {
    id: "venue-guide-preview",
    category: "venue",
    date: "2026-07-31",
    updatedAt: "2026-07-31",
    isNew: false,
    title: "演唱會場館資訊整理",
    summary:
      "場館交通、入口位置、周邊設施與演唱會當日注意事項，後續將更新至 Venue Guide 頁面。",
    links: [
      {
        label: "Venue Guide 場館指南",
        url: "/venue/",
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
    updatedAt: "2026-08-03",
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
