/* =========================================================
   ARMY READY — Venue Guide Data
   Kaohsiung National Stadium
========================================================= */

const VENUE_GUIDE = {
  id: "venue-guide",
  title: "高雄國家體育場指南",
  updatedAt: "2026-08-03",
  sections: [
    {
      id: "transport",
      label: "交通",
      title: "交通資訊",
      icon: "🚇",
      description:
        "大型活動期間周邊容易壅塞，建議優先搭乘大眾運輸，並預留進站、步行與安檢時間。",
      items: [
        {
          title: "場館地址",
          detail:
            "高雄國家體育場位於高雄市左營區世運大道 100 號。"
        },
        {
          title: "高雄捷運紅線 R17 世運站",
          detail:
            "由 1 號出口前往世運主場館方向，再沿世運大道步行前往場館。活動當日請依現場指標與人流引導行進。"
        },
        {
          title: "從高鐵左營站出發",
          detail:
            "可在 R16 左營站搭乘紅線往岡山方向，下一站即為 R17 世運站。"
        },
        {
          title: "從 高雄車站 或 小港機場 出發",
          detail:
            "可直接搭乘高雄捷運紅線前往 R17 世運站，請事先確認末班車及活動日加開資訊。"
        },
        {
          title: "自行開車或搭乘計程車",
          detail:
            "演唱會期間會實施交通管制，停車位也可能不足。上下車地點與接送動線請以主辦單位、警方及場館公告為準。"
        }
      ],
      links: [
        {
          label: "Google Maps 導航",
          url: "https://maps.google.com/?q=高雄國家體育場",
          primary: true
        },
        {
          label: "查看 R17 世運站資訊",
          url: "https://www.krtc.com.tw/Guide/station_info?id=112c15476dac4be99a1326da8ef08e65",
          primary: false
        }
      ]
    },
    {
      id: "arrival",
      label: "入場",
      title: "入場須知",
      icon: "🎫",
      description:
        "抵達場館後先確認自己的入口、座位區與票券狀態，不要只依照他人排隊方向判斷。",
      items: [
        {
          title: "先確認票券與證件",
          detail:
            "提前準備實名認證之實體票券及身分證件，避免排到入口才翻找資料。"
        },
        {
          title: "依票面入口與現場指標排隊",
          detail:
            "不同座位區可能使用不同入口。入口名稱、開放時間及分流方式，請以票面資訊與現場公告為準。"
        },
        {
          title: "預留安檢與驗票時間",
          detail:
            "大型演出入場人數多，安檢、驗票與尋找座位都需要時間，建議不要壓在開演前才抵達。"
        },
        {
          title: "先截圖必要資訊",
          detail:
            "可先保存座位區域圖、同行者聯絡方式與回程資訊，以免現場網路壅塞時無法即時開啟。"
        }
      ]
    },
    {
      id: "belongings",
      label: "攜帶物",
      title: "攜帶物品",
      icon: "🎒",
      description:
        "以輕便、容易通過安檢為原則。實際禁帶物品與包袋限制仍須依主辦單位最新公告。",
      items: [
        {
          title: "票券、手機與行動電源",
          detail:
            "出發前確認手機電量、票券是否可正常開啟，並準備合規格的行動電源與充電線。"
        },
        {
          title: "雨具與防曬用品",
          detail:
            "建議攜帶輕便雨衣、防曬用品與可補充水分的用品。"
        },
        {
          title: "應援物與手燈",
          detail:
            "出發前確認手燈電池、配對方式及應援物尺寸。自製物品不得遮擋他人視線或影響安全。"
        },
        {
          title: "避免攜帶大型或危險物品",
          detail:
            "入場須配合安檢及入場須知，為安全考量，禁止攜帶超過 37 x 25 x 11.5公分之包包和任何形式之行李箱；除手機之外，任何專業形式之拍照、攝影、錄音等設備(包含如手機擴充鏡頭、增距鏡、腳架、手持棒、穩定器、自拍棒等等) 皆禁止攜帶及使用，同時禁止線上直播。主辦單位有權請違反規定者立即離開現場，建議輕便前往並請提早到場進行安檢以避免耽誤觀賞演出。相關規定請於演出日前造訪LIVE NATION TAIWAN官方網站、官方臉書粉絲專頁、Instagram、Ｘ 獲得最新資訊。主辦單位保留修改或終止本活動之權力。"
        }
      ],
      links: [
        {
          label: "Tixcraft 拓元官方資訊",
          url: "https://tixcraft.com/activity/detail/26_btskns#intro",
          primary: true
        },
        {
          label: "LIVE NATION TAIWAN 官方資訊",
          url: "https://www.livenation.com.tw/event/bts-world-tour-arirang-in-kaohsiung-kaohsiung-tickets-edp1675883#%E6%B4%BB%E5%8B%95%E5%85%A7%E5%AE%B9",
          primary: false
        }
      ]
    },
    {
      id: "facilities",
      label: "設施",
      title: "場館設施",
      icon: "🏟️",
      description:
        "場館幅員較大，進場後可先確認座位區附近的洗手間、飲水與服務位置。",
      items: [
        {
          title: "洗手間",
          detail:
            "開演前與散場後通常人潮最多，入場後可先確認離座位最近的洗手間位置，建議開演前30~45分鐘先去排隊。"
        },
        {
          title: "無障礙需求",
          detail:
            "需要無障礙動線、席位或其他協助時，請優先依票券與主辦單位提供的服務方式辦理。"
        },
        {
          title: "現場服務與失物",
          detail:
            "如遇票務、座位、身體不適或遺失物品等問題，請向現場工作人員或服務台反映。"
        }
      ],
      links: [
        {
          label: "場館官方資訊",
          url: "https://sports.kcg.gov.tw/ArenaIntroduction/NationalStadium",
          primary: false
        }
      ]
    },
    {
      id: "merch",
      label: "物販",
      title: "官方周邊",
      icon: "🛍️",
      description:
        "物販時間、地點、付款方式及購買限制可能另行公告，請勿把非官方整理當作最終規則！",
      items: [
        {
          title: "先確認官方公告",
          detail:
            "確認販售日期、開始時間、排隊地點、品項、限購數量與付款方式，再安排抵達時間。"
        },
        {
          title: "注意排隊與補貨資訊",
          detail:
            "熱門品項可能售罄，是否補貨或重新開放販售，請以現場工作人員與官方平台公告為準。"
        },
        {
          title: "保留付款與購買紀錄",
          detail:
            "完成付款後先確認商品與數量，並保存收據或交易畫面，以便現場有問題時查詢。"
        },
        {
          title: "非官方活動分開確認",
          detail:
            "粉絲發放、拍照點與應援活動並非官方物販，請查看各主辦方自己的時間、地點與規則。"
        }
      ],
      links: [
        {
          label: "查看官方公告",
          url: "official.html",
          primary: true
        },
        {
          label: "查看粉絲活動",
          url: "community.html",
          primary: false
        }
      ]
    },
    {
      id: "departure",
      label: "散場",
      title: "散場提醒",
      icon: "🌙",
      description:
        "散場時人潮會集中前往捷運站與接送區，建議事先安排回程路線並和同行者約定集合點。",
      items: [
        {
          title: "隨身垃圾請帶走",
          detail:
            "離場時請檢查自己的座位~順便拯救一下隔壁遺留的熱情產物，讓場館跟哥們七個一樣保持最帥氣的樣子，感謝尼！"
        },
        {
          title: "先確認末班車",
          detail:
            "演出時間可能變動，請在出發前及演出當日再次確認捷運、台鐵、高鐵或客運末班時間。"
        },
        {
          title: "約定固定集合點",
          detail:
            "不要只約在入口或捷運站，建議選擇明確、容易辨識且不阻礙人流的位置。"
        },
        {
          title: "避開壅塞時段",
          detail:
            "散場後可依現場狀況稍作停留，或配合工作人員分流，不要逆向穿越主要人潮。"
        },
        {
          title: "保留足夠電量",
          detail:
            "回程仍需要票券、導航與聯絡功能，演出期間可降低螢幕亮度並適度使用行動電源。"
        }
      ]
    }
  ]
};
