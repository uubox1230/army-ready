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
    id: "official-entry-notice-kaohsiung-guide",
    category: "entry",
    date: "2026-11-13",
    updatedAt: "2026-11-13",
    isNew: true,
    title: "[LIVE NATION 公告] BTS WORLD TOUR ’ARIRANG’ IN KAOHSIUNG － 入場辦法",
    summary:
      "◎ 本場演出為全場實名制，請一人一票一實體證件<br><br>演出當日於各驗票口，將會核對每張票券上印製的姓名是否與持票者本人及其證件皆相符，請務必攜帶「票面姓名本人有效、且附照片之個人證件正本」。台灣人士請攜帶：身分證、健保卡、駕照擇一；非台灣人士的外籍人士請憑護照作為核驗之依據，非上述有效證件恕無法受理，現場工作人員確認無誤後方可入場。若證件非正本（含圖檔、照片、影本等）、證件無照片、姓名有誤、姓名處為空白或填寫其他資料、證件照片無法辨認是否為本人等，包含但不限於上述者皆無法入場，亦無法提供任何其他方式驗證入場。請務必特別注意，以免影響您的入場權益。",
    links: [
      {
        label: "LIVE NATION 官方公告(中)",
        url: "https://www.livenation.com.tw/bts-khh26",
        primary: true
      },
      {
        label: "LIVE NATION 官方公告(EN)",
        url: "https://www.livenation.com.tw/en/bts-khh26",
        primary: false
      }
    ]
  },
  {
    id: "official-army-zone-kaohsiung-guide",
    category: "general",
    date: "2026-11-13",
    updatedAt: "2026-11-13",
    isNew: true,
    title: "[公告] BTS WORLD TOUR ‘ARIRANG’ IN KAOHSIUNG 會員攤位 ARMY ZONE 營運公告",
    summary:
      "BTS WORLD TOUR 'ARIRANG' IN KAOHSIUNG將於11月19日、21日、22日共三天舉行，現場將設有專為 BTS GLOBAL OFFICIAL MEMBERSHIP ARMY MEMBERSHIP（以下簡稱 ARMY MEMBERSHIP）會員所安排的會員攤位「ARMY ZONE」。",
    links: [
      {
        label: "Weverse 官方公告",
        url: "https://weverse.io/bts/notice/39838?hl=zh-tw",
        primary: false
      }
    ]
  },
  {
    id: "official-merch-kaohsiung-guide",
    category: "merch",
    date: "2026-11-12",
    updatedAt: "2026-11-13",
    isNew: true,
    title: "[公告] BTS WORLD TOUR 'ARIRANG' IN KAOHSIUNG - 官方商品現場販售及攤位營運公告",
    summary:
      "官方商品於11月18日（三）至11月23日（一）期間，可透過 Weverse Shop 購買後現場取貨及現場購買兩種方式購買，詳細購買方式請參閱說明。",
    links: [
      {
        label: "Weverse 官方公告",
        url: "https://weverse.io/bts/notice/40945?hl=zh-tw",
        primary: false
      }
    ]
  },
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
