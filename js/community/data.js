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
    id: "community-page-launch",
    category: ["support", "giveaway"],
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-08-03",
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
    id: "community-example-giveaway",
    category: "support",
    date: ["2026-11-19", "2026-11-21", "2026-11-22"],
    updatedAt: "2026-08-03",
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
  }
];
