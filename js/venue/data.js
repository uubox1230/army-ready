/*
  ARMY READY｜場館指南資料

  後續更新方式：
  1. 修改 VENUE_GUIDE.sections 內的內容。
  2. 每個 section 會自動產生上方分頁按鈕。
  3. 可新增 links 放官方公告、地圖或外部資訊。
*/

const VENUE_GUIDE = {
  venueName: "高雄國家體育場",
  venueSubtitle: "世運主場館",

  sections: [
    {
      id: "transport",
      label: "交通",
      title: "前往場館",
      icon: "M",
      description:
        "建議優先使用大眾運輸，並預留進場人潮與步行時間。",
      items: [
        {
          title: "捷運",
          detail:
            "可搭乘高雄捷運紅線至世運站，再依現場指示步行前往場館。"
        },
        {
          title: "台鐵與高鐵轉乘",
          detail:
            "可由左營站轉乘捷運紅線，演唱會當日請留意加班車與末班車公告。"
        },
        {
          title: "自行開車",
          detail:
            "大型活動期間可能實施交通管制，不建議將私人車輛停放於場館周邊。"
        }
      ],
      links: [
        {
          label: "Google Maps",
          url: "https://maps.google.com/?q=高雄國家體育場",
          primary: true
        }
      ]
    },

    {
      id: "entry",
      label: "入場",
      title: "入口與進場",
      icon: "G",
      description:
        "正式 Gate、報到時間與分流方式須依主辦單位公告更新。",
      items: [
        {
          title: "先確認票面入口",
          detail:
            "出發前請再次確認票券上的區域、樓層、入口與座位資訊。"
        },
        {
          title: "提早抵達",
          detail:
            "安檢、驗票與人流可能需要較長時間，請勿壓線抵達。"
        },
        {
          title: "準備票券與證件",
          detail:
            "電子票券請先登入並提高螢幕亮度；實名制活動請備妥指定證件。"
        }
      ],
      links: []
    },

    {
      id: "facilities",
      label: "設施",
      title: "場館設施",
      icon: "i",
      description:
        "廁所、飲水、醫護與服務台位置，建議進場後先確認。",
      items: [
        {
          title: "廁所",
          detail:
            "開演前與安可後通常排隊時間較長，可提前安排使用時間。"
        },
        {
          title: "醫護與服務台",
          detail:
            "身體不適或需要協助時，請立即詢問現場工作人員。"
        },
        {
          title: "無障礙需求",
          detail:
            "如有無障礙座位或移動需求，請依主辦單位規定提前確認。"
        }
      ],
      links: []
    },

    {
      id: "merch",
      label: "物販",
      title: "物販與排隊",
      icon: "B",
      description:
        "商品品項、販售時間、付款方式與購買限制，皆以正式公告為準。",
      items: [
        {
          title: "先列購買清單",
          detail:
            "依優先順序整理品項，缺貨時能快速決定替代方案。"
        },
        {
          title: "確認付款方式",
          detail:
            "準備可用的現金、信用卡或行動支付，並確認現場接受方式。"
        },
        {
          title: "注意防曬與補水",
          detail:
            "戶外排隊時間可能較長，建議攜帶符合規定的防曬與補水用品。"
        }
      ],
      links: []
    },

    {
      id: "rules",
      label: "提醒",
      title: "當日注意事項",
      icon: "!",
      description:
        "先完成基本準備，可以減少進場前的臨時狀況。",
      items: [
        {
          title: "阿米棒",
          detail:
            "提前更新、配對並確認電量，另備符合規定的備用電池。"
        },
        {
          title: "行動電源",
          detail:
            "確認容量與攜帶規定，手機需保留足夠電量出示票券與聯絡。"
        },
        {
          title: "禁帶物品",
          detail:
            "相機、腳架、超尺寸行李、飲食與其他物品限制，請以官方公告為準。"
        }
      ],
      links: [
        {
          label: "查看 Official",
          url: "official.html",
          primary: false
        }
      ]
    }
  ]
};
