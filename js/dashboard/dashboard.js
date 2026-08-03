const DASHBOARD = {
  concert: {
    artist: "BTS",
    tour: "BTS WORLD TOUR 'ARIRANG'",
    city: "KAOHSIUNG",
    venue: "高雄國家體育場（世運主場館）",
    banner: "images/arirang-banner.jpg",
    dates: [
      "2026-11-19T19:00:00+08:00",
      "2026-11-21T19:00:00+08:00",
      "2026-11-22T19:00:00+08:00"
    ]
  },

  today: {
    mode: "auto"
  },

  myConcert: {
    title: "My Concert",
    practiceLabel: "練習進度",
    eventsLabel: "已收藏的應援",
    noticesLabel: "新的公告",
    continueLabel: "繼續練習",
    startLabel: "開始練習"
  },

  quickAccess: {
    title: "Quick Access",
    items: [
    {
        id: "setlist",
        label: "Setlist",
        title: "應援練習",
        icon: "music-2",
        href: "setlist.html"
      },
      {
        id: "official",
        label: "Official",
        title: "官方公告",
        icon: "megaphone",
        href: "official.html"
      },
      {
        id: "community",
        label: "Community",
        title: "粉絲應援",
        icon: "heart",
        href: "community.html"
      },
      {
        id: "venue",
        label: "Venue Guide",
        title: "場館指南",
        icon: "map-pinned",
        href: "venue.html"
      }
    ]
  },

  updates: {
    title: "Latest Updates",
    emptyText: "目前沒有更新。",
    limit: 10
  },

  checklist: [
    { id: "main-setlist", text: "Main Setlist" },
    { id: "encore", text: "Encore" },
    { id: "army-bomb", text: "阿米棒更新" },
    { id: "traffic", text: "交通確認" },
    { id: "fan-events", text: "粉絲應援活動" }
  ],

  venue: {
    title: "Venue",
    name: "高雄國家體育場",
    subtitle: "世運主場館",
    mapUrl: "https://maps.google.com/?q=高雄國家體育場",
    items: [
      "捷運世運站",
      "入場 Gate",
      "交通管制",
      "物販排隊",
      "寄物提醒"
    ]
  },

  notice: {
    title: "Official Notice",
    headline: "官方公告整理",
    body: "入場規定、禁帶物品、票券與現場動線，請以官方最新公告為準。",
    tag: "Latest"
  },

  events: {
    title: "Fan Events",
    headline: "粉絲應援活動",
    body: "免費垃圾袋發放、手幅、小禮物與其他 ARMY 應援資訊，會整理在這裡。",
    tag: "ARMY"
  },

  recap: {
    title: "Thank You",
    headline: "See You Again",
    body: "謝謝一起完成這場演唱會。把照片、影片和回憶都好好收藏起來吧。",
    items: [
      "照片",
      "影片",
      "回顧",
      "下一站"
    ]
  },

  cardLayouts: {
    default: [
      "hero",
      "myConcert",
      "progress",
      "quickAccess",
      "latest"
    ],

    finalWeek: [
      "hero",
      "myConcert",
      "progress",
      "quickAccess",
      "checklist",
      "latest"
    ],

    concertDay: [
      "hero",
      "myConcert",
      "quickAccess",
      "latest"
    ],

    finished: [
      "hero",
      "recap",
      "songs"
    ]
  }
};
