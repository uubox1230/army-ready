/*
  ARMY READY｜粉絲應援活動資料

  新增活動方式：
  1. 複製 COMMUNITY_EVENTS 裡的一個完整物件。
  2. 修改 id、category、date、updatedAt、title、host、summary、location、time、note。
  3. 最新或最重要的活動可放在陣列最上方。

  category 可使用：
  banner｜giveaway｜photo｜support｜other
*/

const COMMUNITY_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "support", label: "應援企劃" },
  { id: "giveaway", label: "免費發放" },
  { id: "banner", label: "手幅販售" },
  { id: "photo", label: "拍照打卡" },
  { id: "other", label: "其他" }
];

const COMMUNITY_EVENTS = [
  {
    id: "community-example-giveaway",
    category: "support",
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-08-03",
    cover: {
    src: "/images/community/community-example-giveaway.webp",
    alt: "應援活動投稿募集封面"
    },
    title: "應援活動徵才中",
    host: "超有才の台灣阿米",
    summary:
      "如需推廣歡迎透過 X 或 IG 聯繫 @uu_box_，我們會盡量協助宣傳，讓更多阿米知道活動資訊。",
    location: "---",
    time: "---",
    note: "---",
    links: [
      {
        label: "X 聯繫投稿",
        url: "https://x.com/uu_box_/",
        primary: false
      },
      {
        label: "IG 聯繫投稿",
        url: "https://www.instagram.com/uu_box_/",
        primary: false
      }
    ]
  },
  {
    id: "community-page-launch",
    category: ["support", "giveaway"],
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-08-03",
    cover: {
      src: "/images/community/community-page-launch.webp",
      alt: "ㄌㄙㄉ高雄場外垃圾袋免費領取活動封面"
    },
    title: "ㄌㄙㄉ｜高雄場外垃圾袋免費領取",
    host: "ARMY READY (@uu_box_)",
    summary:
      "阿米限定應援～我們在場外準備了「垃圾袋」要送給大家，希望大家在散場時能把垃圾帶走，讓場館保持乾淨整潔。",
    location: "高雄國家體育場 場外",
    time: "待公告",
    note: "當天具體位置會隨時更新在 X & IG 限時動態，請隨時查看。",
    links: [
      {
        label: "主辦原公告(X)",
        url: "https://x.com/uu_box_/status/2067185490777002456?s=20",
        primary: true
      },
      {
        label: "主辦原公告(IG)",
        url: "https://www.instagram.com/p/DZsAfypGfa_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        primary: false
      }
    ]
  },
  {
    id: "community-page-launch-@lanlan__0901",
    category: ["giveaway"],
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-10-27",
    cover: {
      src: "/images/community/community-page-launch-@lanlan__0901.webp",
      alt: "防彈阿里郎高雄場應援發放活動封面"
    },
    title: "防彈阿里郎高雄場應援發放",
    host: "@lanlan__0901",
    summary:
      "隨機膠片吊飾&雙面應援扇",
    location: "當天會公佈在推特，請隨時查看。",
    time: "當天會公佈在推特，請隨時查看。",
    note: "＊隨機膠片吊飾每人限領一個(不分款式)<br>＊應援扇每人限領一把(不分款式)",
    links: [
      {
        label: "主辦原公告(X)",
        url: "https://x.com/lanlan__0901/status/2106618689521156458?s=20",
        primary: false
      }
    ]
  },
  {
    id: "community-page-launch-@imfish1208",
    category: ["giveaway"],
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-09-09",
    cover: {
      src: "/images/community/community-page-launch-@imfish1208.webp",
      alt: "2026年高雄世運場應援活動封面"
    },
    title: "2026年高雄世運場應援",
    host: "@imfish1208",
    summary:
      "金屬彈片零錢包應援",
    location: "當天會公佈在推特和脆，請隨時查看。",
    time: "當天會公佈在推特和脆，請隨時查看。",
    note: "追蹤脆帳並按讚貼文",
    links: [
      {
        label: "主辦原公告(Threads)",
        url: "https://www.threads.com/@imfish1208/post/DdB1oCZiYpJ?xmt=AQG0LVi4lCIxUG3BdpHCliJ9FrUrQuE9y8-24vn3WJZfaw",
        primary: false
      },
      {
        label: "主辦原公告(X)",
        url: "https://x.com/HoChu0110/status/2097320964728176976?s=20",
        primary: false
      }
    ]
  },
  {
    id: "community-page-launch-@eat_ate_eaten_40",
    category: ["giveaway"],
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-08-11",
    cover: {
      src: "/images/community/community-page-launch-@eat_ate_eaten_40.webp",
      alt: "手機架應援發放活動封面"
    },
    title: "應援發放",
    host: "@eat_ate_eaten_40",
    summary:
      "手機架應援發放",
    location: "高雄國家體育場 場外",
    time: "11/19.21.22 會在脆上發文，請大家留意",
    note: "領取條件 現場請出示<br>* 本篇 Threads 貼文<br>* 官方會員證明（手機畫面）<br>* 阿米棒（任一代皆可）<br>* 任何周邊/娃娃/成員代言商品",
    links: [
      {
        label: "主辦原公告(Threads)",
        url: "https://www.threads.com/share/BAhV4phPKX/",
        primary: false
      }
    ]
  },
  {
    id: "community-page-launch-@cowada",
    category: ["giveaway"],
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-08-17",
    cover: {
      src: "/images/community/community-page-launch-@cowada.webp",
      alt: "逮丸阿米為臺灣應援活動封面"
    },
    title: "逮丸阿米《為臺灣應援》",
    host: "@cowada 國際編號30678 #心臟的心",
    summary:
      "BTS THIS WEEK, OUR VOTE NEXT WEEK.<br>11月28日，臺灣阿米、回家投票。",
    location: "高雄國家體育場(世運主場館)",
    time: "會提前一天於ig、threads上公告停留方位與時間",
    note: "應援貼紙150份/天、3天共450份，應援公告貼文即刻起歡迎轉發，為臺灣催票。",
    links: [
      {
        label: "主辦原公告(Threads)",
        url: "https://www.threads.com/share/BAVe8wKR55/",
        primary: false
      },
      {
        label: "主辦原公告(IG)",
        url: "https://www.instagram.com/reel/Db7ZgQZTEGB/?igsh=dWtvY2MwcHUwcWNh",
        primary: false
      }
    ]
  },
  {
    id: "community-page-launch-@taiyaki_1209",
    category: ["giveaway"],
    date: ["2026-11-21", "2026-11-22"],
    updatedAt: "2026-10-29",
    cover: {
      src: "/images/community/community-page-launch-@taiyaki_1209.webp",
      alt: "慶祝防彈臺灣演唱會免費場外應援活動封面"
    },
    title: "慶祝防彈臺灣演唱會免費場外應援",
    host: "推特:@C1S2I7L0V6I1A3 / Threads:@taiyaki_1209",
    summary:
      "領取方式<br>^出示BTS官方周邊/手燈/演唱會門票<br>^領取ARIRANG環保袋需通過防彈TMI快問快答, 回答正確即可領取（現場隨機抽題）",
    location: "高雄國家體育場(世運主場館)場外",
    time: "當天會公佈在推特、Threads，請隨時查看。",
    note: "成本好高好高希望領到的都是真米ㅠㅠ",
    links: [
      {
        label: "主辦原公告(Threads)",
        url: "https://www.threads.com/@taiyaki_1209/post/Dd_X1afD9aa?xmt=AQG0Dh2egQRG0ED2XfxZZe2Qaad-_fE9fsH4NFSnyGpDyg",
        primary: false
      }
    ]
  }
];
