/* Catalogue and seven-category nature records. Nature tags do not change jutsu damage types. */
const SHINOBI_CHARACTERS=[
  {
    "id": "naruto",
    "name": "漩涡鸣人",
    "en": "NARUTO UZUMAKI",
    "number": "001",
    "faction": "木叶",
    "role": "近战·召唤",
    "pack": "young",
    "art": "naruto-young",
    "bio": "从木叶的少年，到守护同伴的忍者。以螺旋丸近身迎敌，让影分身各自寻找战机。",
    "available": true,
    "skills": [
      "螺旋丸",
      "影分身"
    ],
    "forms": [
      {
        "id": "young",
        "name": "少年篇",
        "art": "naruto-young",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "螺旋丸",
          "影分身"
        ],
        "fullBodyArt": "naruto-young",
        "gameAttribute": "阳"
      },
      {
        "id": "shippuden",
        "name": "疾风传",
        "art": "naruto-shippuden",
        "stage": "第七班固定主控",
        "skills": [
          "螺旋丸",
          "影分身"
        ],
        "fullBodyArt": "naruto-shippuden",
        "gameAttribute": "风"
      },
      {
        "id": "sage",
        "name": "仙人模式",
        "art": "naruto-sage",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "仙法·大玉螺旋丸",
          "仙法·螺旋手里剑"
        ],
        "fullBodyArt": "naruto-sage",
        "gameAttribute": "阳"
      },
      {
        "id": "kurama",
        "name": "九尾查克拉",
        "art": "naruto-kurama",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "九尾·螺旋丸",
          "影分身"
        ],
        "fullBodyArt": "naruto-kurama",
        "fullBodyName": "九喇嘛连结",
        "gameAttribute": "全"
      },
      {
        "id": "one_tail",
        "name": "第一尾",
        "art": "naruto-one-tail",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "朱之螺旋丸",
          "查克拉爪击"
        ],
        "gameAttribute": "阳"
      },
      {
        "id": "four_tail",
        "name": "第四尾",
        "art": "naruto-four-tail",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "尾兽玉",
          "查克拉手臂"
        ],
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阳"
    ],
    "natureNote": "人物生涯汇总；陣之书列五大性质与阳，阴未列入；不表示少年形态已掌握全部。",
    "natureSource": "https://naruto.fandom.com/wiki/Naruto_Uzumaki",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "kakashi",
    "name": "旗木卡卡西",
    "en": "KAKASHI HATAKE",
    "number": "002",
    "faction": "木叶",
    "role": "近战·雷遁",
    "pack": "kakashi",
    "art": "kakashi",
    "bio": "沉着的第七班导师。以雷切抓住近身破绽，雷分身独立协同进攻。",
    "available": true,
    "skills": [
      "雷切"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "kakashi",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "雷切"
        ],
        "fullBodyArt": "kakashi",
        "gameAttribute": "雷"
      },
      {
        "id": "branch",
        "name": "万花筒写轮眼",
        "art": "kakashi-kamui",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "神威",
          "雷遁影分身"
        ],
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "七性质人物记录；招式仍按自身属性结算。",
    "natureSource": "https://naruto.fandom.com/wiki/Kakashi_Hatake",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "sasuke",
    "name": "宇智波佐助",
    "en": "SASUKE UCHIHA",
    "number": "003",
    "faction": "鹰",
    "role": "雷遁·爆发",
    "pack": "sasuke",
    "art": "sasuke",
    "bio": "雷与火交织的宇智波忍者。追寻力量，也寻找属于自己的答案。",
    "available": true,
    "skills": [
      "千鸟",
      "火遁·豪火球之术",
      "操手里剑之术"
    ],
    "forms": [
      {
        "id": "base",
        "name": "疾风传",
        "art": "sasuke",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "千鸟",
          "火遁·豪火球之术",
          "操手里剑之术"
        ],
        "fullBodyArt": "sasuke",
        "gameAttribute": "雷"
      },
      {
        "id": "curse",
        "name": "咒印",
        "art": "sasuke-curse",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "咒印千鸟",
          "翼击"
        ],
        "gameAttribute": "雷"
      },
      {
        "id": "mangekyo",
        "name": "万花筒",
        "art": "sasuke-mangekyo",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "天照",
          "加具土命"
        ],
        "fullBodyArt": "sasuke-mangekyo",
        "gameAttribute": "阴"
      },
      {
        "id": "susanoo",
        "name": "须佐能乎",
        "art": "sasuke-susanoo",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "须佐能乎·箭",
          "炎遁·加具土命"
        ],
        "fullBodyArt": "sasuke-susanoo",
        "fullBodyName": "永恒万花筒",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阴"
    ],
    "natureNote": "陣之书人物汇总，阳未列入。",
    "natureSource": "https://naruto.fandom.com/wiki/Sasuke_Uchiha",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "sakura",
    "name": "春野樱",
    "en": "SAKURA HARUNO",
    "number": "004",
    "faction": "木叶",
    "role": "体术·治疗",
    "pack": "sakura",
    "art": "sakura",
    "bio": "将细腻的查克拉控制化为坚定的力量，与同伴并肩前行。",
    "available": true,
    "skills": [
      "樱花冲",
      "医疗忍术"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "sakura",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "樱花冲",
          "医疗忍术"
        ],
        "fullBodyArt": "sakura",
        "gameAttribute": "阳"
      },
      {
        "id": "branch",
        "name": "百豪",
        "art": "sakura-byakugo",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "百豪之术",
          "蛞蝓召唤"
        ],
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "排除仅小说出现的火。",
    "natureSource": "https://naruto.fandom.com/wiki/Sakura_Haruno",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "itachi",
    "name": "宇智波鼬",
    "en": "ITACHI UCHIHA",
    "number": "005",
    "faction": "晓",
    "role": "幻术·黑炎",
    "pack": "itachi",
    "art": "itachi",
    "bio": "安静的目光背后，是写轮眼与幻术织就的战场。",
    "available": false,
    "skills": [
      "天照",
      "月读",
      "乌鸦分身"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "itachi",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "天照",
          "月读",
          "乌鸦分身"
        ],
        "fullBodyArt": "itachi",
        "gameAttribute": "火"
      }
    ],
    "natures": [
      "火",
      "风",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "第四公式书译文人物记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Itachi_Uchiha",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "gaara",
    "name": "我爱罗",
    "en": "GAARA",
    "number": "006",
    "faction": "砂隐",
    "role": "砂遁·防御",
    "pack": "gaara",
    "art": "gaara",
    "bio": "让流沙成为守护的壁垒，以沉稳的意志掌控战场。",
    "available": true,
    "skills": [
      "砂缚柩",
      "砂瀑送葬",
      "砂之盾"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "gaara",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "砂缚柩",
          "砂瀑送葬",
          "砂之盾"
        ],
        "fullBodyArt": "gaara",
        "gameAttribute": "土"
      }
    ],
    "natures": [
      "风",
      "雷",
      "土"
    ],
    "natureNote": "只取七性质，不纳入小说追加磁遁。",
    "natureSource": "https://naruto.fandom.com/wiki/Gaara",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "deidara",
    "name": "迪达拉",
    "en": "DEIDARA",
    "number": "007",
    "faction": "晓",
    "role": "爆破·范围",
    "pack": "deidara",
    "art": "deidara",
    "bio": "把黏土塑成飞鸟，将转瞬即逝的爆破视为艺术。",
    "available": true,
    "skills": [
      "起爆黏土·小鸟",
      "起爆黏土·蜘蛛",
      "C3"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "deidara",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "起爆黏土·小鸟",
          "起爆黏土·蜘蛛",
          "C3"
        ],
        "fullBodyArt": "deidara",
        "gameAttribute": "土"
      }
    ],
    "natures": [
      "雷",
      "土"
    ],
    "natureNote": "爆遁另作机制标签，不因爆炸火光添加火。",
    "natureSource": "https://naruto.fandom.com/wiki/Deidara",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "jiraiya",
    "name": "自来也",
    "en": "JIRAIYA",
    "number": "008",
    "faction": "木叶",
    "role": "火遁·通灵",
    "pack": "jiraiya",
    "art": "jiraiya",
    "bio": "远行的豪杰与鸣人的老师，将忍道传递给下一代。",
    "available": false,
    "skills": [
      "火遁·炎弹",
      "忍法·针地藏",
      "通灵·蛤蟆油弹"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "jiraiya",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "火遁·炎弹",
          "忍法·针地藏",
          "通灵·蛤蟆油弹"
        ],
        "fullBodyArt": "jiraiya",
        "gameAttribute": "火"
      }
    ],
    "natures": [
      "火",
      "风",
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "人物性质汇总。",
    "natureSource": "https://naruto.fandom.com/wiki/Jiraiya",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "jugo",
    "name": "重吾",
    "en": "JUGO",
    "number": "009",
    "faction": "鹰",
    "role": "变形·近战",
    "pack": "juggo",
    "art": "jugo",
    "bio": "自然力量流经身体，在平静与爆发之间寻找平衡。",
    "available": false,
    "skills": [
      "活塞拳",
      "多连不自炮",
      "地面冲击"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "jugo",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "活塞拳",
          "多连不自炮",
          "地面冲击"
        ],
        "fullBodyArt": "jugo",
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "风",
      "土",
      "水",
      "阳"
    ],
    "natureNote": "重吾自然能量能力不额外当第八性质。",
    "natureSource": "https://naruto.fandom.com/wiki/J%C5%ABgo",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "karin",
    "name": "漩涡香磷",
    "en": "KARIN",
    "number": "010",
    "faction": "鹰",
    "role": "感知·辅助",
    "pack": "karin",
    "art": "karin",
    "bio": "敏锐地感知查克拉，为队伍寻找目标与生机。",
    "available": false,
    "skills": [
      "神乐心眼",
      "查克拉治疗",
      "金刚封锁"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "karin",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "神乐心眼",
          "查克拉治疗",
          "金刚封锁"
        ],
        "fullBodyArt": "karin",
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "感知与恢复不是单一阳属性的替代依据。",
    "natureSource": "https://naruto.fandom.com/wiki/Karin",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "killerbee",
    "name": "奇拉比",
    "en": "KILLER BEE",
    "number": "011",
    "faction": "云隐",
    "role": "刀术·雷遁",
    "pack": "killerbee",
    "art": "killerbee",
    "bio": "以自由的节奏挥舞刀刃，与八尾并肩而战。",
    "available": false,
    "skills": [
      "荒缲鹭伐刀",
      "雷犁热刀",
      "墨分身"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "killerbee",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "荒缲鹭伐刀",
          "雷犁热刀",
          "墨分身"
        ],
        "fullBodyArt": "killerbee",
        "gameAttribute": "雷"
      }
    ],
    "natures": [
      "火",
      "雷",
      "水",
      "阳"
    ],
    "natureNote": "人物性质汇总。",
    "natureSource": "https://naruto.fandom.com/wiki/Killer_B",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "kimimaro",
    "name": "君麻吕",
    "en": "KIMIMARO",
    "number": "012",
    "faction": "音隐",
    "role": "骨脉·近战",
    "pack": "kimimaro",
    "art": "kimimaro",
    "bio": "将骨骼化为武器，以精确的体术演绎战斗之舞。",
    "available": false,
    "skills": [
      "椿之舞",
      "柳之舞",
      "早蕨之舞"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "kimimaro",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "椿之舞",
          "柳之舞",
          "早蕨之舞"
        ],
        "fullBodyArt": "kimimaro",
        "gameAttribute": "阳"
      }
    ],
    "natures": [],
    "natureNote": "当前资料未核实公式书七性质，暂不凭骨脉推断土或阳。",
    "natureSource": "https://naruto.fandom.com/wiki/Kimimaro",
    "natureStatus": "未记载/待核"
  },
  {
    "id": "konan",
    "name": "小南",
    "en": "KONAN",
    "number": "013",
    "faction": "晓",
    "role": "纸遁·范围",
    "pack": "konan",
    "art": "konan",
    "bio": "纸翼展开，飘散的纸片也能成为锋利的忍术。",
    "available": false,
    "skills": [
      "式纸之舞",
      "纸手里剑",
      "起爆符纸雨"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "konan",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "式纸之舞",
          "纸手里剑",
          "起爆符纸雨"
        ],
        "fullBodyArt": "konan",
        "gameAttribute": "风"
      }
    ],
    "natures": [
      "风",
      "土",
      "水",
      "阳"
    ],
    "natureNote": "纸术不自动归火。",
    "natureSource": "https://naruto.fandom.com/wiki/Konan",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "lee",
    "name": "李洛克",
    "en": "ROCK LEE",
    "number": "014",
    "faction": "木叶",
    "role": "体术·连击",
    "pack": "lee",
    "art": "lee",
    "bio": "靠一遍又一遍的修行，将体术磨练成自己的忍道。",
    "available": false,
    "skills": [
      "木叶旋风",
      "影舞叶",
      "表莲华"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "lee",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "木叶旋风",
          "影舞叶",
          "表莲华"
        ],
        "fullBodyArt": "lee",
        "gameAttribute": "阳"
      },
      {
        "id": "branch",
        "name": "杜门",
        "art": "lee-gates",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "里莲华",
          "高速突击"
        ],
        "gameAttribute": "阳"
      }
    ],
    "natures": [],
    "natureNote": "未记载；不能以使用体术为由虚构阳。",
    "natureSource": "https://naruto.fandom.com/wiki/Rock_Lee",
    "natureStatus": "未记载/待核"
  },
  {
    "id": "madara",
    "name": "宇智波斑",
    "en": "MADARA UCHIHA",
    "number": "015",
    "faction": "宇智波",
    "role": "火遁·须佐",
    "pack": "madara",
    "art": "madara",
    "bio": "火遁与须佐之力，勾勒出宇智波忍者的强大存在。",
    "available": false,
    "skills": [
      "火遁·豪火灭却",
      "火遁·龙炎放歌之术",
      "须佐能乎斩击"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "madara",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "火遁·豪火灭却",
          "火遁·龙炎放歌之术",
          "须佐能乎斩击"
        ],
        "fullBodyArt": "madara",
        "gameAttribute": "全"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "第四公式书人物汇总；不把木遁等增加为筛选项。",
    "natureSource": "https://naruto.fandom.com/wiki/Madara_Uchiha",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "hinata",
    "name": "日向雏田",
    "en": "HINATA HYUGA",
    "number": "016",
    "faction": "木叶",
    "role": "柔拳·近战",
    "pack": "hinata",
    "art": "hinata",
    "bio": "以白眼洞察敌人的行动，用柔拳守护珍视的人。",
    "available": false,
    "skills": [
      "柔步双狮拳",
      "八卦空掌",
      "柔拳连击"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "hinata",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "柔步双狮拳",
          "八卦空掌",
          "柔拳连击"
        ],
        "fullBodyArt": "hinata",
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "火",
      "雷"
    ],
    "natureNote": "白眼/柔拳不是七性质中的新属性。",
    "natureSource": "https://naruto.fandom.com/wiki/Hinata_Hy%C5%ABga",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "neji",
    "name": "日向宁次",
    "en": "NEJI HYUGA",
    "number": "017",
    "faction": "木叶",
    "role": "柔拳·防御",
    "pack": "neji",
    "art": "neji",
    "bio": "洞悉查克拉流动，以回天与掌击掌握攻防节奏。",
    "available": false,
    "skills": [
      "八卦六十四掌",
      "八卦掌回天",
      "八卦空掌"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "neji",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "八卦六十四掌",
          "八卦掌回天",
          "八卦空掌"
        ],
        "fullBodyArt": "neji",
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "火",
      "土",
      "水"
    ],
    "natureNote": "人物记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Neji_Hy%C5%ABga",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "obito",
    "name": "宇智波带土",
    "en": "OBITO UCHIHA",
    "number": "018",
    "faction": "宇智波",
    "role": "时空·控制",
    "pack": "obito",
    "art": "obito",
    "bio": "面具隐藏过往，空间漩涡让战场的距离变得难以捉摸。",
    "available": false,
    "skills": [
      "神威虚化",
      "火遁·豪火球之术",
      "锁链束缚"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "obito",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "神威虚化",
          "火遁·豪火球之术",
          "锁链束缚"
        ],
        "fullBodyArt": "obito",
        "gameAttribute": "火"
      },
      {
        "id": "branch",
        "name": "忍界大战",
        "art": "obito-unmasked",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "神威",
          "火遁·爆风乱舞"
        ],
        "fullBodyArt": "obito-unmasked",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "人物生涯汇总，形态能力另行限制。",
    "natureSource": "https://naruto.fandom.com/wiki/Obito_Uchiha",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "orochimaru",
    "name": "大蛇丸",
    "en": "OROCHIMARU",
    "number": "019",
    "faction": "音隐",
    "role": "蛇术·诡变",
    "pack": "orochimaru",
    "art": "orochimaru",
    "bio": "蛇影与禁术交错，不断探索忍术与生命的边界。",
    "available": false,
    "skills": [
      "潜影蛇手",
      "草薙剑攻击",
      "通灵·罗生门"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "orochimaru",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "潜影蛇手",
          "草薙剑攻击",
          "通灵·罗生门"
        ],
        "fullBodyArt": "orochimaru",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "人物汇总，木遁等不增加第八筛选项。",
    "natureSource": "https://naruto.fandom.com/wiki/Orochimaru",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "pain",
    "name": "佩恩",
    "en": "PAIN",
    "number": "020",
    "faction": "晓",
    "role": "引力·控制",
    "pack": "pain",
    "art": "pain",
    "bio": "以引力牵动战场，在接近与排斥之间制造压迫。",
    "available": false,
    "skills": [
      "神罗天征",
      "万象天引",
      "地爆天星"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "pain",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "神罗天征",
          "万象天引",
          "地爆天星"
        ],
        "fullBodyArt": "pain",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阳"
    ],
    "natureNote": "佩恩按长门人物记录；不因轮回眼自行补阴。",
    "natureSource": "https://naruto.fandom.com/wiki/Nagato",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "suigetsu",
    "name": "鬼灯水月",
    "en": "SUIGETSU HOZUKI",
    "number": "021",
    "faction": "鹰",
    "role": "水遁·刀术",
    "pack": "suigetsu",
    "art": "suigetsu",
    "bio": "挥动大刀，身体又能如水一般散开与重聚。",
    "available": true,
    "skills": [
      "水化之术",
      "水铁炮之术",
      "水遁·豪水腕之术"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "suigetsu",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "水化之术",
          "水铁炮之术",
          "水遁·豪水腕之术"
        ],
        "fullBodyArt": "suigetsu",
        "gameAttribute": "水"
      }
    ],
    "natures": [
      "风",
      "水"
    ],
    "natureNote": "水化、刀术不自行补土。",
    "natureSource": "https://naruto.fandom.com/wiki/Suigetsu_H%C5%8Dzuki",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "temari",
    "name": "手鞠",
    "en": "TEMARI",
    "number": "022",
    "faction": "砂隐",
    "role": "风遁·远程",
    "pack": "temari",
    "art": "temari",
    "bio": "巨扇扬起锋利的风，让远方的敌人也无处藏身。",
    "available": true,
    "skills": [
      "镰鼬之术",
      "大镰鼬之术",
      "通灵·斩斩舞"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "temari",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "镰鼬之术",
          "大镰鼬之术",
          "通灵·斩斩舞"
        ],
        "fullBodyArt": "temari",
        "gameAttribute": "风"
      }
    ],
    "natures": [
      "风"
    ],
    "natureNote": "人物记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Temari",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "minato",
    "name": "波风水门",
    "en": "MINATO NAMIKAZE",
    "number": "023",
    "faction": "木叶",
    "role": "时空·突袭",
    "pack": "minato",
    "art": "minato",
    "bio": "追随飞雷神的印记，以敏捷判断守护战场上的同伴。",
    "available": false,
    "skills": [
      "飞雷神之术",
      "螺旋丸",
      "飞雷神导雷"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "minato",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "飞雷神之术",
          "螺旋丸",
          "飞雷神导雷"
        ],
        "fullBodyArt": "minato",
        "gameAttribute": "风"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "阴",
      "阳"
    ],
    "natureNote": "人物记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Minato_Namikaze",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "ino",
    "name": "山中井野",
    "en": "INO YAMANAKA",
    "number": "024",
    "faction": "木叶",
    "role": "心转·辅助",
    "pack": "ino",
    "art": "ino",
    "bio": "连接心与感知，在团队协作中寻找突破的机会。",
    "available": false,
    "skills": [
      "心转身之术",
      "心乱身之术",
      "感知传递"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "ino",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "心转身之术",
          "心乱身之术",
          "感知传递"
        ],
        "fullBodyArt": "ino",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "剔除动画追加火。",
    "natureSource": "https://naruto.fandom.com/wiki/Ino_Yamanaka",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "kabuto",
    "name": "药师兜",
    "en": "KABUTO YAKUSHI",
    "number": "025",
    "faction": "音隐",
    "role": "医疗·近战",
    "pack": "kabuto",
    "art": "kabuto",
    "bio": "用精准的查克拉手术刀与医疗知识寻找对手的弱点。",
    "available": false,
    "skills": [
      "查克拉手术刀",
      "掌仙术",
      "死魂之术"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "kabuto",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "查克拉手术刀",
          "掌仙术",
          "死魂之术"
        ],
        "fullBodyArt": "kabuto",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "风",
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "剔除动画追加火。",
    "natureSource": "https://naruto.fandom.com/wiki/Kabuto_Yakushi",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "sai",
    "name": "佐井",
    "en": "SAI",
    "number": "026",
    "faction": "木叶",
    "role": "墨绘·召唤",
    "pack": "sai",
    "art": "sai",
    "bio": "笔墨赋予画作生命，让纸上的兽群奔向战场。",
    "available": false,
    "skills": [
      "超兽伪画·狮",
      "超兽伪画·鸟",
      "墨分身"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "sai",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "超兽伪画·狮",
          "超兽伪画·鸟",
          "墨分身"
        ],
        "fullBodyArt": "sai",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "火",
      "土",
      "水",
      "阳"
    ],
    "natureNote": "墨术不自行补阴。",
    "natureSource": "https://naruto.fandom.com/wiki/Sai",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "shikamaru",
    "name": "奈良鹿丸",
    "en": "SHIKAMARU NARA",
    "number": "027",
    "faction": "木叶",
    "role": "影术·控制",
    "pack": "shikamaru",
    "art": "shikamaru",
    "bio": "把每一步行动化为布局，让延伸的影子牵制对手。",
    "available": false,
    "skills": [
      "影子模仿术",
      "影缝术",
      "影首缚颈术"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "shikamaru",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "影子模仿术",
          "影缝术",
          "影首缚颈术"
        ],
        "fullBodyArt": "shikamaru",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "火",
      "土",
      "阴"
    ],
    "natureNote": "影子术不等于唯一性质。",
    "natureSource": "https://naruto.fandom.com/wiki/Shikamaru_Nara",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "tenten",
    "name": "天天",
    "en": "TENTEN",
    "number": "028",
    "faction": "木叶",
    "role": "忍具·远程",
    "pack": "tenten",
    "art": "tenten",
    "bio": "卷轴展开，精准的忍具投掷构筑出密集的攻势。",
    "available": false,
    "skills": [
      "操具·双升龙",
      "操具·天刃乱万",
      "忍具散射"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "tenten",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "操具·双升龙",
          "操具·天刃乱万",
          "忍具散射"
        ],
        "fullBodyArt": "tenten",
        "gameAttribute": "阳"
      }
    ],
    "natures": [],
    "natureNote": "未记载；忍具不构成七性质。",
    "natureSource": "https://naruto.fandom.com/wiki/Tenten",
    "natureStatus": "未记载/待核"
  },
  {
    "id": "onoki",
    "name": "大野木",
    "en": "ONOKI",
    "number": "029",
    "faction": "岩隐",
    "role": "尘遁·范围",
    "pack": "tsuchikage",
    "art": "onoki",
    "bio": "以土影的经验驾驭土遁与尘遁，改变战场的重量。",
    "available": false,
    "skills": [
      "尘遁·原界剥离之术",
      "土遁·轻重岩之术",
      "土遁·加重岩之术"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "onoki",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "尘遁·原界剥离之术",
          "土遁·轻重岩之术",
          "土遁·加重岩之术"
        ],
        "fullBodyArt": "onoki",
        "gameAttribute": "土"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "阳"
    ],
    "natureNote": "尘遁另作标签。",
    "natureSource": "https://naruto.fandom.com/wiki/%C5%8Cnoki",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "tsunade",
    "name": "纲手",
    "en": "TSUNADE",
    "number": "030",
    "faction": "木叶",
    "role": "怪力·治疗",
    "pack": "tsunate",
    "art": "tsunade",
    "bio": "将医疗忍术与怪力融为一体，为同伴撑起坚实后盾。",
    "available": false,
    "skills": [
      "痛天脚",
      "百豪之术",
      "蛞蝓召唤"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "tsunade",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "痛天脚",
          "百豪之术",
          "蛞蝓召唤"
        ],
        "fullBodyArt": "tsunade",
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "火",
      "雷",
      "土",
      "水",
      "阳"
    ],
    "natureNote": "剔除动画追加阴。",
    "natureSource": "https://naruto.fandom.com/wiki/Tsunade",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "utakata",
    "name": "泡沫／羽高",
    "en": "UTAKATA",
    "number": "031",
    "faction": "雾隐",
    "role": "泡沫·控制",
    "pack": "utakata",
    "art": "utakata",
    "bio": "轻盈的泡沫漂浮于战场，平静外表下蕴含查克拉的力量。",
    "available": false,
    "skills": [
      "漂浮泡沫",
      "爆破泡沫",
      "泡沫束缚"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "utakata",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "漂浮泡沫",
          "爆破泡沫",
          "泡沫束缚"
        ],
        "fullBodyArt": "utakata",
        "gameAttribute": "水"
      }
    ],
    "natures": [
      "水"
    ],
    "natureNote": "泡沫属于水遁方向。",
    "natureSource": "https://naruto.fandom.com/wiki/Utakata",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "tobirama",
    "name": "千手扉间",
    "en": "TOBIRAMA SENJU",
    "number": "032",
    "faction": "木叶",
    "role": "水遁·时空",
    "pack": "yls",
    "art": "tobirama",
    "bio": "冷静而严谨的二代火影，以水遁和时空间忍术应对战局。",
    "available": false,
    "skills": [
      "飞雷神之术",
      "水遁·水龙弹之术",
      "水遁·水断波"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "tobirama",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "飞雷神之术",
          "水遁·水龙弹之术",
          "水遁·水断波"
        ],
        "fullBodyArt": "tobirama",
        "gameAttribute": "水"
      }
    ],
    "natures": [
      "火",
      "风",
      "雷",
      "土",
      "水",
      "阴",
      "阳"
    ],
    "natureNote": "人物七性质记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Tobirama_Senju",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "sasori",
    "name": "蝎",
    "en": "SASORI",
    "number": "033",
    "faction": "晓",
    "role": "傀儡·远程",
    "pack": "hiruko",
    "art": "sasori",
    "bio": "丝线牵动傀儡，让精密机关成为自己的战斗艺术。",
    "available": false,
    "skills": [
      "绯流琥·尾刺",
      "绯流琥·针八波",
      "傀儡机关攻击"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "sasori",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "绯流琥·尾刺",
          "绯流琥·针八波",
          "傀儡机关攻击"
        ],
        "fullBodyArt": "sasori",
        "gameAttribute": "阴"
      }
    ],
    "natures": [],
    "natureNote": "当前未核实公式书七性质；傀儡喷火/水不直接推断本体性质。",
    "natureSource": "https://naruto.fandom.com/wiki/Sasori",
    "natureStatus": "未记载/待核"
  },
  {
    "id": "kisame",
    "name": "干柿鬼鲛",
    "en": "KISAME HOSHIGAKI",
    "number": "034",
    "faction": "晓",
    "role": "水遁·近战",
    "pack": "kisame",
    "art": "kisame",
    "bio": "挥舞鲛肌，借水遁把周围化为自己的战场。",
    "available": false,
    "skills": [
      "水遁·水鲛弹之术",
      "水遁·大鲛弹之术",
      "水遁·五食鲛"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "kisame",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "水遁·水鲛弹之术",
          "水遁·大鲛弹之术",
          "水遁·五食鲛"
        ],
        "fullBodyArt": "kisame",
        "gameAttribute": "水"
      }
    ],
    "natures": [
      "火",
      "风",
      "土",
      "水"
    ],
    "natureNote": "人物记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Kisame_Hoshigaki",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "guy",
    "name": "迈特凯",
    "en": "MIGHT GUY",
    "number": "035",
    "faction": "木叶",
    "role": "体术·爆发",
    "pack": "guy",
    "art": "guy",
    "bio": "以热血和坚持修炼体术，让青春成为向前的力量。",
    "available": false,
    "skills": [
      "木叶刚力旋风",
      "朝孔雀",
      "昼虎"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "guy",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "木叶刚力旋风",
          "朝孔雀",
          "昼虎"
        ],
        "fullBodyArt": "guy",
        "gameAttribute": "阳"
      }
    ],
    "natures": [
      "火",
      "雷"
    ],
    "natureNote": "使用体术不等于没有查克拉性质；昼虎仍非风遁。",
    "natureSource": "https://naruto.fandom.com/wiki/Might_Guy",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "kankuro",
    "name": "勘九郎",
    "en": "KANKURO",
    "number": "036",
    "faction": "砂隐",
    "role": "傀儡·机关",
    "pack": "kankuro",
    "art": "kankuro",
    "bio": "藏在傀儡中的机关与丝线，为砂隐忍者展开战术空间。",
    "available": false,
    "skills": [
      "傀儡操演·乌鸦",
      "黑秘技·机机一发",
      "黑秘技·机机二发"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "kankuro",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "傀儡操演·乌鸦",
          "黑秘技·机机一发",
          "黑秘技·机机二发"
        ],
        "fullBodyArt": "kankuro",
        "gameAttribute": "阴"
      }
    ],
    "natures": [
      "风",
      "雷",
      "土",
      "水"
    ],
    "natureNote": "傀儡师人物记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Kankur%C5%8D",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "iruka",
    "name": "海野伊鲁卡",
    "en": "IRUKA UMINO",
    "number": "037",
    "faction": "木叶",
    "role": "忍具·支援",
    "pack": "iruka",
    "art": "iruka",
    "bio": "忍者学校的老师，用信任陪伴少年走上自己的忍道。",
    "available": false,
    "skills": [
      "忍术资料整理中"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "iruka",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "忍术资料整理中"
        ],
        "fullBodyArt": "iruka",
        "gameAttribute": "火"
      }
    ],
    "natures": [
      "火",
      "水",
      "阴"
    ],
    "natureNote": "人物记录。",
    "natureSource": "https://naruto.fandom.com/wiki/Iruka_Umino",
    "natureStatus": "资料交叉核对"
  },
  {
    "id": "fukasaku_shima",
    "name": "深作与志麻",
    "en": "FUKASAKU & SHIMA",
    "number": "038",
    "faction": "妙木山",
    "role": "仙术·援护",
    "pack": "fukasaku_shima",
    "art": "fukasaku-shima",
    "bio": "妙木山的两位仙人，以合作与自然能量施展仙术。",
    "available": false,
    "skills": [
      "仙法·蛙鸣",
      "仙法·舌战斩",
      "魔幻·蛤蟆临唱"
    ],
    "forms": [
      {
        "id": "base",
        "name": "基础形态",
        "art": "fukasaku-shima",
        "stage": "固定形态 · 图鉴",
        "skills": [
          "仙法·蛙鸣",
          "仙法·舌战斩",
          "魔幻·蛤蟆临唱"
        ],
        "gameAttribute": "风"
      }
    ],
    "natures": [
      "火",
      "风",
      "阴"
    ],
    "natureNote": "双人单位取深作和志麻合并；不纳入深作动画追加水。",
    "natureSource": "https://naruto.fandom.com/wiki/Fukasaku",
    "natureStatus": "资料交叉核对"
  }
];
