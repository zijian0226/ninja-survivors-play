/* Source-linked kits, main upgrades only. */
window.SKILL_KITS = {
  "naruto_shippuden": {
    "key": "naruto_shippuden",
    "family": "naruto",
    "sprite": "shippuden",
    "art": "naruto-shippuden",
    "name": "疾风传鸣人",
    "officialId": "chara002",
    "attribute": "风",
    "hp": 700,
    "personal": 1.1,
    "passive": "不服输：本人所有伤害提高10%。",
    "skills": {
      "螺旋丸": 1,
      "多重影分身之术": 1
    },
    "kit": {
      "passive": {
        "name": "不服输",
        "text": "本人所有伤害提高10%。",
        "effects": {
          "personal": 1.1
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "螺旋丸",
        "text": "靠近敌人后直接释放，球体原地循环1秒，期间持续造成范围伤害；不蓄力。",
        "kind": "melee",
        "element": "rasengan",
        "range": 64,
        "radius": 42,
        "damage": 32,
        "cd": 4,
        "duration": 1,
        "source": {
          "actor": "naruto_shippuden",
          "skill": "rasengan"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "matched",
          "referenceName": "螺旋丸",
          "referenceGame": "究极风暴4·疾风传常态鸣人",
          "urls": [
            "https://www.9game.cn/hyrz/2201937.html",
            "https://apps.apple.com/cn/app/火影忍者/id955396648"
          ],
          "note": "蓝色旋转球体符合普通螺旋丸；不应改名仙法或九尾术。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "多重影分身之术",
        "text": "召唤2个独立寻敌的影分身，分身攻击造成伤害。",
        "kind": "summon",
        "element": "impact",
        "range": 260,
        "radius": 28,
        "damage": 35,
        "cd": 11,
        "duration": 7,
        "source": {
          "actor": "naruto_shippuden",
          "skill": "clone"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "summon",
        "target": "nearest",
        "upgradable": "main_only",
        "summonCount": 2,
        "independentAI": true,
        "followCaster": false,
        "nameReview": {
          "status": "adapted",
          "referenceName": "多重影分身之术",
          "referenceGame": "常态鸣人共享术；腾讯疾风传的具名版本为多重影分身·降落伞",
          "urls": [
            "https://apps.apple.com/cn/app/火影忍者/id955396648",
            "https://3g.d.cn/naruto/news/detail_464517_1.html"
          ],
          "note": "本版是独立寻敌分身，不是抓取落地的降落伞；只能规范通用术名，不照搬降落伞后缀。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "大玉螺旋丸",
        "text": "影分身协同形成大玉并向前合推，巨球展开后以碎石旋涡终结。使用独立47帧动作，施术期间仍可移动。",
        "kind": "melee",
        "element": "rasengan",
        "range": 110,
        "radius": 76,
        "damage": 70,
        "cd": 26,
        "duration": 2.9375,
        "source": {
          "actor": "naruto_shippuden",
          "skill": "oodama-authored",
          "manifest": "docs/skill-art-v24/manifest.json"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "matched",
          "referenceName": "大玉螺旋丸",
          "referenceGame": "究极风暴4·疾风传常态鸣人",
          "urls": [
            "https://www.9game.cn/hyrz/2201937.html",
            "https://3g.d.cn/naruto/news/detail_464517_1.html"
          ],
          "note": "v0.24已换用原SWF 47帧合推、巨球与碎石爆发；旧2帧重复素材已撤下。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "游戏招募的单属性定位；不等同于角色原作全部查克拉性质。",
    "nameReviewPending": 0,
    "releaseComplete": true
  },
  "sasuke": {
    "key": "sasuke",
    "family": "sasuke",
    "sprite": "sasuke",
    "art": "sasuke",
    "name": "宇智波佐助",
    "officialId": "chara009",
    "attribute": "雷",
    "hp": 640,
    "personal": 1.12,
    "passive": "写轮眼洞察：本人所有伤害提高12%。",
    "skills": {
      "千鸟": 1,
      "火遁·豪火球之术": 1
    },
    "kit": {
      "passive": {
        "name": "写轮眼洞察",
        "text": "本人所有伤害提高12%。",
        "effects": {
          "personal": 1.12
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "千鸟",
        "text": "接近敌人后突刺，造成伤害，短暂眩晕。",
        "kind": "melee",
        "element": "lightning",
        "range": 64,
        "radius": 32,
        "damage": 115,
        "cd": 4.3,
        "duration": 0.65,
        "source": {
          "actor": "sasuke",
          "skill": "chidori"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "matched",
          "referenceName": "千鸟",
          "referenceGame": "究极风暴4/腾讯动作手游·佐助共有术",
          "urls": [
            "https://apps.apple.com/cn/app/火影忍者/id955396648",
            "https://www.9game.cn/hyrz/2201937.html"
          ],
          "note": "白衣佐助掌中聚雷并突刺；不是雷枪贯穿、麒麟或黑千鸟。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "火遁·豪火球之术",
        "text": "向最近敌人发射火球，命中造成伤害并附加灼烧。",
        "kind": "projectile",
        "element": "fire",
        "range": 280,
        "radius": 48,
        "damage": 75,
        "cd": 6,
        "duration": 1.1,
        "source": {
          "actor": "sasuke",
          "skill": "fireball"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "status": "burn",
        "statusDuration": 2,
        "statusTick": 0.5,
        "statusDamage": 8,
        "nameReview": {
          "status": "matched",
          "referenceName": "火遁·豪火球之术",
          "referenceGame": "佐助共享术；腾讯少年写轮眼佐助图鉴提供同名",
          "urls": [
            "https://news.4399.com/hyrz/renzhe/m/615820.html",
            "https://3g.d.cn/naruto/news/detail_464517_1.html"
          ],
          "note": "当前单球火焰符合豪火球；腾讯疾风传豪龙火要求龙头火团，不可混称。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "千鸟刀",
        "text": "贴近目标连续雷剑斩击，持续造成范围伤害。",
        "kind": "melee",
        "element": "lightning",
        "range": 105,
        "radius": 64,
        "damage": 60,
        "cd": 26,
        "duration": 1.4,
        "source": {
          "actor": "sasuke",
          "skill": "sword"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "matched",
          "referenceName": "千鸟刀",
          "referenceGame": "究极风暴4·鹰佐助/腾讯万花筒写轮眼佐助",
          "urls": [
            "https://www.9game.cn/hyrz/2201937.html",
            "https://shouyou.gamersky.com/news/201807/1076198.shtml"
          ],
          "note": "原图可见将雷性质查克拉注入实体刀刃后突刺，符合千鸟刀的核心辨识；该术并非万花筒独占能力，可参考该动作游戏标准名，但不将其整套角色技能表或形态移植过来。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "游戏招募的单属性定位；不等同于角色原作全部查克拉性质。",
    "nameReviewPending": 0,
    "releaseComplete": true
  },
  "kakashi": {
    "key": "kakashi",
    "family": "kakashi",
    "sprite": "kakashi",
    "art": "kakashi",
    "name": "旗木卡卡西",
    "officialId": "chara024",
    "attribute": "雷",
    "hp": 680,
    "movement": 1.1,
    "passive": "战术走位：本人移动速度提高10%。",
    "skills": {
      "雷切": 1,
      "雷遁·影分身之术": 1
    },
    "kit": {
      "passive": {
        "name": "战术走位",
        "text": "本人移动速度提高10%。",
        "effects": {
          "movement": 1.1
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "雷切",
        "text": "靠近敌人后雷遁突刺，造成伤害，短暂眩晕。",
        "kind": "melee",
        "element": "lightning",
        "range": 64,
        "radius": 34,
        "damage": 125,
        "cd": 4.6,
        "damageMode": "hit",
        "duration": 1.6000011000000003,
        "source": {
          "actor": "kakashi",
          "skill": "raikiri"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "matched",
          "note": "源像素明确，当前为俯视游戏施法/独立特效组合；落雷使用描述名。"
        },
        "visualComplete": true
      },
      "secondary": {
        "name": "雷遁·影分身之术",
        "text": "召唤1个独立寻敌的雷分身，攻击造成雷伤并短暂麻痹。",
        "kind": "summon",
        "element": "lightning",
        "range": 240,
        "radius": 30,
        "damage": 38,
        "cd": 10,
        "damageMode": "summon",
        "duration": 1.6,
        "source": {
          "actor": "kakashi",
          "skill": "clone"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "summonCount": 1,
        "independentAI": true,
        "followCaster": false,
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "adapted",
          "note": "源像素明确，当前为俯视游戏施法/独立特效组合；落雷使用描述名。"
        },
        "visualComplete": true
      },
      "ultimate": {
        "name": "雷遁·落雷",
        "text": "在目标位置形成雷柱，持续造成范围雷伤。",
        "kind": "area",
        "element": "lightning",
        "range": 300,
        "radius": 72,
        "damage": 65,
        "cd": 25,
        "damageMode": "periodic",
        "duration": 1.8,
        "source": {
          "actor": "kakashi",
          "skill": "thunder"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "preview",
          "note": "源像素明确，当前为俯视游戏施法/独立特效组合；落雷使用描述名。"
        },
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 1,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "itachi": {
    "key": "itachi",
    "family": "itachi",
    "sprite": "itachi",
    "art": "itachi",
    "name": "宇智波鼬",
    "officialId": "chara079",
    "attribute": "火",
    "hp": 600,
    "reduction": 0.06,
    "movement": 1.04,
    "passive": "乌鸦警戒：本人受到伤害降低6%，移动速度提高4%。",
    "skills": {
      "乌鸦分身": 1,
      "火遁·炎柱": 1
    },
    "kit": {
      "passive": {
        "name": "乌鸦警戒",
        "text": "本人受到伤害降低6%，移动速度提高4%。",
        "effects": {
          "reduction": 0.06,
          "movement": 1.04
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "乌鸦分身",
        "text": "在目标附近形成乌鸦群，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 132.0,
        "radius": 68,
        "damage": 26,
        "cd": 5,
        "damageMode": "periodic",
        "duration": 1.2,
        "source": {
          "actor": "itachi",
          "skill": "crow"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "分身大爆破",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 宇智波鼬（普通晓袍版本）",
          "urls": [
            "https://news.4399.com/hyrz/renzhe/m/614898.html"
          ],
          "note": "只有乌鸦群不能证明移动人形分身和接触爆破；需补分身本体、冲刺与爆炸后才能使用完整技能名。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "secondary": {
        "name": "火遁·炎柱",
        "text": "目标处升起炎柱，持续造成范围伤害并灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 138.60000000000002,
        "radius": 65,
        "damage": 30,
        "cd": 7,
        "damageMode": "periodic",
        "duration": 1.3,
        "source": {
          "actor": "itachi",
          "skill": "flame"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "burn",
        "statusDuration": 2,
        "statusTick": 0.5,
        "statusDamage": 8,
        "nameReview": {
          "status": "preview",
          "referenceName": "天照",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 宇智波鼬（普通晓袍版本）",
          "urls": [
            "https://news.4399.com/hyrz/renzhe/m/614898.html"
          ],
          "note": "天照的识别点是黑炎；不能以黑边普通火柱改名天照，需黑炎燃烧、施法眼部起手。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "写轮眼幻术场",
        "text": "展开幻术领域，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 170.0,
        "radius": 90,
        "damage": 38,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 3.2,
        "source": {
          "actor": "itachi",
          "skill": "illusion"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "月读",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 宇智波鼬（普通晓袍版本）",
          "urls": [
            "https://news.4399.com/hyrz/renzhe/m/614898.html"
          ],
          "note": "写轮眼图样仅说明幻术主题，未见月读幻术空间/月落/受刑等明确表现。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 3,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "pain": {
    "key": "pain",
    "family": "pain",
    "sprite": "pain",
    "art": "pain",
    "name": "佩恩·天道",
    "officialId": "chara085",
    "attribute": "阴",
    "hp": 760,
    "reduction": 0.1,
    "passive": "轮回眼防御：本人受到伤害降低10%。",
    "skills": {
      "神罗天征": 1,
      "引力漩涡": 1
    },
    "kit": {
      "passive": {
        "name": "轮回眼防御",
        "text": "本人受到伤害降低10%。",
        "effects": {
          "reduction": 0.1
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "神罗天征",
        "text": "以自身为中心释放斥力，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 120,
        "radius": 120,
        "damage": 45,
        "cd": 5.5,
        "damageMode": "periodic",
        "duration": 1.85,
        "source": {
          "actor": "pain",
          "skill": "repulsion"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "adapted",
          "referenceName": "神罗天征",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 佩恩[天道]（基础版，非百战/超）",
          "urls": [
            "https://news.4399.com/hyrz/renzhe/m/717381.html"
          ],
          "note": "扩张斥力环可支撑当前名称；机制应弹开/击退，单纯减速不是招式识别点。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "secondary": {
        "name": "引力漩涡",
        "text": "抬手放出引力漩涡，持续造成范围伤害并减速；不冒称已有万象天引抓取动画。",
        "kind": "area",
        "element": "impact",
        "range": 152.0,
        "radius": 72,
        "damage": 24,
        "cd": 7.5,
        "damageMode": "periodic",
        "duration": 1.6,
        "source": {
          "actor": "pain",
          "skill": "attraction"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "万象天引",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 佩恩[天道]（基础版，非百战/超）",
          "urls": [
            "https://news.4399.com/hyrz/renzhe/m/717381.html"
          ],
          "note": "万象天引是把敌人吸至身前，现球体不是其充分视觉证据，需吸附方向/本体牵引。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "球形引力场",
        "text": "生成大型引力领域，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 180.0,
        "radius": 100,
        "damage": 42,
        "cd": 29,
        "damageMode": "periodic",
        "duration": 1.8,
        "source": {
          "actor": "pain",
          "skill": "gravity"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "地爆天星",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 佩恩[天道]（基础版，非百战/超）",
          "urls": [
            "https://news.4399.com/hyrz/renzhe/m/717381.html"
          ],
          "note": "不能因引力球名称就套地爆天星；缺黑核上升、岩石聚集包裹与落地崩解。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 2,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "konan": {
    "key": "konan",
    "family": "konan",
    "sprite": "konan",
    "art": "konan",
    "name": "小南",
    "officialId": "chara086",
    "attribute": "风",
    "hp": 610,
    "movement": 1.14,
    "passive": "式纸轻身：本人移动速度提高14%。",
    "skills": {
      "纸遁旋风": 1,
      "纸矛阵": 1
    },
    "kit": {
      "passive": {
        "name": "式纸轻身",
        "text": "本人移动速度提高14%。",
        "effects": {
          "movement": 1.14
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "纸遁旋风",
        "text": "目标处展开纸片旋风，持续造成范围伤害。",
        "kind": "area",
        "element": "wind",
        "range": 140.4,
        "radius": 70,
        "damage": 25,
        "cd": 4.8,
        "damageMode": "periodic",
        "duration": 1.7,
        "source": {
          "actor": "konan",
          "skill": "paperwhirl"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "preview",
          "referenceName": "式纸之舞·升降",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 小南（普通晓袍版本）",
          "urls": [
            "https://m.ali213.net/news/161111/65977.html"
          ],
          "note": "需本人纸化、突进和空地升降，原地龙卷不对应。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "secondary": {
        "name": "纸矛阵",
        "text": "向最近目标射出纸矛，命中造成伤害并减速。",
        "kind": "area",
        "element": "wind",
        "range": 153.60000000000002,
        "radius": 80,
        "damage": 95,
        "cd": 6.3,
        "damageMode": "hit",
        "duration": 1.2,
        "source": {
          "actor": "konan",
          "skill": "spears"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "式纸之舞·天使审判",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 小南（普通晓袍版本）",
          "urls": [
            "https://m.ali213.net/news/161111/65977.html"
          ],
          "note": "当前不明确是白纸枪且无纸圈切割/飞空发枪全流程，不能只改名。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "纸龙卷",
        "text": "生成大范围纸龙卷，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "wind",
        "range": 166.0,
        "radius": 90,
        "damage": 40,
        "cd": 27,
        "damageMode": "periodic",
        "duration": 1.2,
        "source": {
          "actor": "konan",
          "skill": "tornado"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "式纸之舞·分离",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 小南（普通晓袍版本）",
          "urls": [
            "https://m.ali213.net/news/161111/65977.html"
          ],
          "note": "分离的明确物件是向前滚动并回返的纸轮，不是竖直龙卷。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "nameReviewPending": 3,
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "obito": {
    "key": "obito",
    "family": "obito",
    "sprite": "obito",
    "art": "obito",
    "name": "大战带土",
    "officialId": "chara089",
    "attribute": "火",
    "hp": 690,
    "reduction": 0.14,
    "passive": "空间回避：本人受到伤害降低14%。",
    "skills": {
      "神威": 1,
      "空间领域": 1
    },
    "kit": {
      "passive": {
        "name": "空间回避",
        "text": "本人受到伤害降低14%。",
        "effects": {
          "reduction": 0.14
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "神威",
        "text": "目标处展开空间漩涡，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 126.0,
        "radius": 66,
        "damage": 32,
        "cd": 5,
        "damageMode": "periodic",
        "duration": 1.2,
        "source": {
          "actor": "obito",
          "skill": "kamui"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "adapted",
          "referenceName": "神威",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · “宇智波斑”「白面具」（实际为大战带土；不是斑本人）",
          "urls": [
            "https://m.ali213.net/news/gl2012/542757.html"
          ],
          "note": "可把描述性神威漩涡规范简称神威；只核定空间漩涡主题，不声称还原手游虚化突进抓取机制。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "secondary": {
        "name": "空间领域",
        "text": "展开空间领域，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 148.0,
        "radius": 76,
        "damage": 25,
        "cd": 7,
        "damageMode": "periodic",
        "duration": 1.2,
        "source": {
          "actor": "obito",
          "skill": "space"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "神威",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · “宇智波斑”「白面具」（实际为大战带土；不是斑本人）",
          "urls": [
            "https://m.ali213.net/news/gl2012/542757.html"
          ],
          "note": "只能确认为空间主题；不能额外伪造名为天地爆葬等招式，也不等于完整手游神威。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "火遁长流",
        "text": "向目标方向持续释放火流，持续造成范围伤害并灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 183.0,
        "radius": 95,
        "damage": 43,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.1,
        "source": {
          "actor": "obito",
          "skill": "firestream"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "burn",
        "statusDuration": 2,
        "statusTick": 0.5,
        "statusDamage": 8,
        "nameReview": {
          "status": "preview",
          "referenceName": "火遁·焰扇豪火",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · “宇智波斑”「白面具」（实际为大战带土；不是斑本人）",
          "urls": [
            "https://m.ali213.net/news/gl2012/542757.html"
          ],
          "note": "白面具手游此招需团扇扇出火龙卷；直线火流缺扇击/旋涡；奥义外道魔像则完全缺素材。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "identityReview": "已独立核对白色轮回眼面具、紫色长袍，匹配官方chara089忍界大战阿飞；chara087面具男保持锁定，不共用此profile。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 2,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "deidara": {
    "key": "deidara",
    "family": "deidara",
    "sprite": "deidara",
    "art": "deidara",
    "name": "迪达拉",
    "officialId": "chara083",
    "attribute": "土",
    "hp": 600,
    "personal": 1.15,
    "passive": "爆破艺术：本人所有伤害提高15%。",
    "skills": {
      "黏土飞鸟投掷": 1,
      "起爆黏土·枭": 1
    },
    "kit": {
      "passive": {
        "name": "爆破艺术",
        "text": "本人所有伤害提高15%。",
        "effects": {
          "personal": 1.15
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "黏土飞鸟投掷",
        "text": "投出小型黏土飞鸟，命中造成伤害。",
        "kind": "area",
        "element": "impact",
        "range": 95.0,
        "radius": 55,
        "damage": 85,
        "cd": 4.3,
        "damageMode": "hit",
        "duration": 1.3,
        "source": {
          "actor": "deidara",
          "skill": "skill1"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "nameReview": {
          "status": "preview",
          "referenceName": "绒毯轰炸",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 迪达拉（普通晓袍版本，2016攻略）",
          "urls": [
            "https://m.4399.cn/news-id-652679.html"
          ],
          "note": "2016普通版绒毯轰炸投蜘蛛；鸟群可为普攻或后续重制版本，不能混版强认。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "secondary": {
        "name": "起爆黏土·枭",
        "text": "唤出巨型黏土鸟冲击敌群，持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 134.0,
        "radius": 90,
        "damage": 32,
        "cd": 7,
        "damageMode": "periodic",
        "duration": 1.3,
        "source": {
          "actor": "deidara",
          "skill": "skill2"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "matched",
          "referenceName": "起爆粘土·枭",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 迪达拉（普通晓袍版本，2016攻略）",
          "urls": [
            "https://m.4399.cn/news-id-652679.html"
          ],
          "note": "已逐帧核对0/3/6/9/12/15，有巨鸟形成与骑乘；可保留素材改为该已见动作游戏名称（粘/黏为异体写法）。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "黏土飞鸟爆破",
        "text": "大型黏土鸟引爆，持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 182.0,
        "radius": 110,
        "damage": 60,
        "cd": 27,
        "damageMode": "periodic",
        "duration": 1.5,
        "source": {
          "actor": "deidara",
          "skill": "ultimate"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "preview",
          "referenceName": "C3",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 迪达拉（普通晓袍版本，2016攻略）",
          "urls": [
            "https://m.4399.cn/news-id-652679.html"
          ],
          "note": "仅爆炸无法区分C3、普通鸟爆或其他爆弹，需补C3·十八号人偶炸弹识别物和投下动作。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "nameReviewPending": 2,
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "madara": {
    "key": "madara",
    "family": "madara",
    "sprite": "madara",
    "art": "madara",
    "name": "宇智波斑",
    "officialId": "chara146",
    "attribute": "全",
    "hp": 800,
    "personal": 1.16,
    "passive": "战场压制：本人所有伤害提高16%。",
    "skills": {
      "须佐能乎横扫": 1,
      "火遁喷吐": 1
    },
    "kit": {
      "passive": {
        "name": "战场压制",
        "text": "本人所有伤害提高16%。",
        "effects": {
          "personal": 1.16
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "须佐能乎横扫",
        "text": "发动蓝色能量横扫，持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 230,
        "radius": 80,
        "damage": 36,
        "cd": 5.5,
        "damageMode": "periodic",
        "duration": 1.2,
        "source": {
          "actor": "madara",
          "skill": "skill1"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "preview",
          "referenceName": "须佐能乎·二刀炎舞",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 宇智波斑（普通红甲版，非秽土/六道）",
          "urls": [
            "https://m.ali213.net/news/gl1901/297779.html"
          ],
          "note": "可叫须佐能乎，但当前不能证明两次斩击及二刀完整结构；不建议直接加二刀炎舞后缀。",
          "fullAnimationVerified": false
        },
        "visualComplete": true
      },
      "secondary": {
        "name": "火遁喷吐",
        "text": "向目标喷吐火焰，持续造成范围伤害并灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 270,
        "radius": 64,
        "damage": 37,
        "cd": 7,
        "damageMode": "periodic",
        "duration": 1.05,
        "source": {
          "actor": "madara",
          "skill": "skill2"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "burn",
        "statusDuration": 2,
        "statusTick": 0.5,
        "statusDamage": 8,
        "nameReview": {
          "status": "preview",
          "referenceName": "火遁·豪火灭却",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 宇智波斑（普通红甲版，非秽土/六道）",
          "urls": [
            "https://m.ali213.net/news/gl1901/297779.html"
          ],
          "note": "外观只是通用火焰；需核对大范围火海铺展与原动作/版本，不能仅凭斑会用就改。",
          "fullAnimationVerified": false
        },
        "visualComplete": true
      },
      "ultimate": {
        "name": "火遁持续轰烧",
        "text": "释放大范围持续火焰，持续造成范围伤害并灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 300,
        "radius": 115,
        "damage": 55,
        "cd": 30,
        "damageMode": "periodic",
        "duration": 1.75,
        "source": {
          "actor": "madara",
          "skill": "ultimate"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "burn",
        "statusDuration": 2,
        "statusTick": 0.5,
        "statusDamage": 8,
        "nameReview": {
          "status": "preview",
          "referenceName": "威装·须佐能乎",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 宇智波斑（普通红甲版，非秽土/六道）",
          "urls": [
            "https://m.ali213.net/news/gl1901/297779.html"
          ],
          "note": "普通版手游奥义为须佐九尾，不是持续火海。若保留火遁主题需另选有据的原作技能并补明确识别，不能冒充该手游奥义。",
          "fullAnimationVerified": false
        },
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 3,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "orochimaru": {
    "key": "orochimaru",
    "family": "orochimaru",
    "sprite": "orochimaru",
    "art": "orochimaru",
    "name": "大蛇丸",
    "officialId": "chara116",
    "attribute": "阴",
    "hp": 780,
    "reduction": 0.06,
    "passive": "蛇身韧性：本人受到伤害降低6%；基础生命值为780。",
    "skills": {
      "伸舌回旋击": 1,
      "紫雾吐息": 1
    },
    "kit": {
      "passive": {
        "name": "蛇身韧性",
        "text": "本人受到伤害降低6%；基础生命值为780。",
        "effects": {
          "reduction": 0.06
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "伸舌回旋击",
        "text": "靠近敌人后发动伸舌回旋攻击，造成伤害。",
        "kind": "melee",
        "element": "impact",
        "range": 84.0,
        "radius": 60,
        "damage": 105,
        "cd": 4.5,
        "damageMode": "hit",
        "duration": 1.3,
        "source": {
          "actor": "orochimaru",
          "skill": "skill1"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "nameReview": {
          "status": "preview",
          "referenceName": "咬牙",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 大蛇丸（基础版，非晓/百战皮肤）",
          "urls": [
            "https://hyrz.17173.com/content/07242016/170436420_1.shtml"
          ],
          "note": "咬牙需吐蛇抓取拉回再追击；伸舌扫击不等于蛇咬。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "secondary": {
        "name": "紫雾吐息",
        "text": "向目标吐出紫色雾气，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 157.0,
        "radius": 85,
        "damage": 30,
        "cd": 6.8,
        "damageMode": "periodic",
        "duration": 1.3,
        "source": {
          "actor": "orochimaru",
          "skill": "skill2"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "大蛇役使术",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 大蛇丸（基础版，非晓/百战皮肤）",
          "urls": [
            "https://hyrz.17173.com/content/07242016/170436420_1.shtml"
          ],
          "note": "蛇护体/蛇攻击与紫色毒雾不符；也不能仅凭毒雾就叫白磷之术。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "草薙剑连斩",
        "text": "召剑并发动连续剑气，持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 196.0,
        "radius": 100,
        "damage": 48,
        "cd": 27,
        "damageMode": "periodic",
        "duration": 1.9,
        "source": {
          "actor": "orochimaru",
          "skill": "ultimate"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "preview",
          "referenceName": "万蛇罗之阵",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 大蛇丸（基础版，非晓/百战皮肤）",
          "urls": [
            "https://hyrz.17173.com/content/07242016/170436420_1.shtml"
          ],
          "note": "万蛇罗需要大量蛇群包覆/冲击，剑气显然不是；若保留草薙剑需另核动作游戏确切招式名。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 3,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "kisame": {
    "key": "kisame",
    "family": "kisame",
    "sprite": "kisame",
    "art": "kisame",
    "name": "干柿鬼鲛",
    "officialId": "chara080",
    "attribute": "水",
    "hp": 880,
    "personal": 1.06,
    "passive": "怪力体魄：本人所有伤害提高6%；基础生命值为880。",
    "skills": {
      "鲛肌斩击": 1,
      "水遁·水浪冲击": 1
    },
    "kit": {
      "passive": {
        "name": "怪力体魄",
        "text": "本人所有伤害提高6%；基础生命值为880。",
        "effects": {
          "personal": 1.06
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "鲛肌斩击",
        "text": "贴近敌人挥动鲛肌，造成伤害。",
        "kind": "melee",
        "element": "impact",
        "range": 82.0,
        "radius": 58,
        "damage": 120,
        "cd": 4.8,
        "damageMode": "hit",
        "duration": 1.2,
        "source": {
          "actor": "kisame",
          "skill": "samehada-slash"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "nameReview": {
          "status": "preview",
          "referenceName": "水遁·爆水冲波 / 水遁·雨四鲛 / 水遁·大鲛弹之术",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 干柿鬼鲛（基础A忍，非狂野鲛鲨/青年）",
          "urls": [
            "https://news.17173.com/z/hyrz/content/01282016/210528835.shtml"
          ],
          "note": "鲛肌斩击可作普通武器动作描述，但不是已查基础手游三技能官名；不可把一刀斩叫雨四鲛。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "secondary": {
        "name": "水遁·水浪冲击",
        "text": "向敌群释放水浪，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "water",
        "range": 158.0,
        "radius": 86,
        "damage": 28,
        "cd": 7.5,
        "damageMode": "periodic",
        "duration": 1.9,
        "source": {
          "actor": "kisame",
          "skill": "water-surge"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "水遁·爆水冲波",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 干柿鬼鲛（基础A忍，非狂野鲛鲨/青年）",
          "urls": [
            "https://news.17173.com/z/hyrz/content/01282016/210528835.shtml"
          ],
          "note": "波浪主体可复用；须加入/核实持鲛肌挥动与向前冲进水流，再采用该名，不能仅凭水色改。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "水遁·水鲛弹",
        "text": "释放鲨形水弹，命中造成伤害并减速。",
        "kind": "area",
        "element": "water",
        "range": 175.0,
        "radius": 95,
        "damage": 280,
        "cd": 28,
        "damageMode": "hit",
        "duration": 1.3,
        "source": {
          "actor": "kisame",
          "skill": "water-shark"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "水遁·大鲛弹之术",
          "referenceGame": "腾讯《火影忍者》手游（动作格斗） · 干柿鬼鲛（基础A忍，非狂野鲛鲨/青年）",
          "urls": [
            "https://news.17173.com/z/hyrz/content/01282016/210528835.shtml"
          ],
          "note": "水鲛弹作为原作描述可保留；基础手游大鲛弹含小鲨群后巨大鲨鱼，不能只放大单鲨就称完整奥义。 v28已补完整人物施法与特效阶段，正式术名是否对应仍单独核验。",
          "fullAnimationVerified": false
        },
        "sourceText": "真实BVN/DS像素动作与特效组合，含起手、有效段和收招；时序/距离为俯视玩法适配。",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "nameReviewPending": 3,
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "kakuzu": {
    "key": "kakuzu",
    "family": "kakuzu",
    "sprite": "kakuzu",
    "art": "kakuzu",
    "name": "角都",
    "officialId": "chara081",
    "attribute": "土",
    "hp": 900,
    "reduction": 0.12,
    "passive": "地怨虞体魄：本人受到伤害降低12%；基础生命值为900。",
    "skills": {
      "火遁·火球冲击": 1,
      "雷遁·雷球": 1
    },
    "kit": {
      "passive": {
        "name": "地怨虞体魄",
        "text": "本人受到伤害降低12%；基础生命值为900。",
        "effects": {
          "reduction": 0.12
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "火遁·火球冲击",
        "text": "结印后向前发射火球，爆开后持续造成范围伤害并点燃；当前为火球演出，不冒称头刻苦。",
        "kind": "area",
        "element": "fire",
        "range": 235,
        "radius": 92,
        "damage": 120,
        "cd": 4.8,
        "duration": 1.6,
        "source": {
          "actor": "kakuzu",
          "skill": "kakuzu-primary-v27"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "status": "burn",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "referenceName": "火遁·火球冲击",
          "note": "图层与机制已接入；当前为俯视玩法改编，缺少独立死亡动作。描述性技能名称尚待原作/手游资料核对。",
          "fullAnimationVerified": false
        },
        "sourceText": "原人物像素与独立助手层合成，调色板已修复；当前为本游戏适配时序。"
      },
      "secondary": {
        "name": "雷遁·雷球",
        "text": "向前发射雷球，持续造成范围伤害并短暂眩晕杂兵；当前为球形演出，不冒称伪暗长矛。",
        "kind": "area",
        "element": "lightning",
        "range": 235,
        "radius": 92,
        "damage": 120,
        "cd": 7,
        "duration": 1.6,
        "source": {
          "actor": "kakuzu",
          "skill": "kakuzu-secondary-v27"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "preview",
          "referenceName": "雷遁·雷球",
          "note": "图层与机制已接入；当前为俯视玩法改编，缺少独立死亡动作。描述性技能名称尚待原作/手游资料核对。",
          "fullAnimationVerified": false
        },
        "sourceText": "原人物像素与独立助手层合成，调色板已修复；当前为本游戏适配时序。"
      },
      "ultimate": {
        "name": "地怨虞·面具齐攻",
        "text": "展开四枚地怨虞面具，雷、火、风图层联合攻击前方敌群；持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 235,
        "radius": 110,
        "damage": 40,
        "cd": 28,
        "duration": 2.6,
        "source": {
          "actor": "kakuzu",
          "skill": "kakuzu-ultimate-v27"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "maskCount": 3,
        "nameReview": {
          "status": "preview",
          "referenceName": "地怨虞·面具齐攻",
          "note": "图层与机制已接入；当前为俯视玩法改编，缺少独立死亡动作。描述性技能名称尚待原作/手游资料核对。",
          "fullAnimationVerified": false
        },
        "status": "slow",
        "sourceText": "原人物像素与独立助手层合成，调色板已修复；当前为本游戏适配时序。"
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "游戏招募的单属性定位；不等同于角色原作全部查克拉性质。",
    "sourceNote": "真实MUGEN像素人物与独立特效层；调色板已校正，动作/时空为俯视战斗改编；尚未完成全部基础动作，不开放正式出战。",
    "nameReviewPending": 3,
    "releaseComplete": false,
    "visualComplete": true
  },
  "gaara": {
    "key": "gaara",
    "family": "gaara",
    "sprite": "gaara",
    "art": "gaara",
    "name": "我爱罗",
    "officialId": "chara061",
    "attribute": "土",
    "hp": 850,
    "reduction": 0.18,
    "passive": "砂之盾：本人受到伤害降低18%。",
    "skills": {
      "砂缚牢": 1,
      "砂瀑送葬": 1
    },
    "kit": {
      "passive": {
        "name": "砂之盾",
        "text": "本人受到伤害降低18%。",
        "effects": {
          "reduction": 0.18
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "砂缚牢",
        "text": "用砂流包围目标，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 260,
        "radius": 58,
        "damage": 28,
        "cd": 5.2,
        "duration": 1.2,
        "source": {
          "actor": "gaara",
          "skill": "skill1"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "matched",
          "referenceName": "砂缚牢",
          "referenceGame": "腾讯动作手游·我爱罗疾风传",
          "urls": [
            "https://shouyou.3dmgame.com/gl/42744.html"
          ],
          "note": "砂包形成封锁并破开，符合砂缚牢画面。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "砂瀑送葬",
        "text": "砂层封锁目标后收紧，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 280,
        "radius": 65,
        "damage": 32,
        "cd": 7.5,
        "duration": 1.5,
        "source": {
          "actor": "gaara",
          "skill": "skill2"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "matched",
          "referenceName": "砂瀑送葬",
          "referenceGame": "腾讯动作手游·少年我爱罗具名技能；疾风传仍掌握共有砂术",
          "urls": [
            "https://news.17173.com/z/hyrz/content/01282016/195804915.shtml",
            "https://shouyou.3dmgame.com/gl/42744.html"
          ],
          "note": "本条砂层包裹后升起、收紧、爆破，比现名砂缚柩更完整对应送葬动作；不是砂瀑大葬。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "流砂瀑流",
        "text": "大范围砂流升起并落下，持续造成范围伤害并减速。",
        "kind": "area",
        "element": "impact",
        "range": 300,
        "radius": 115,
        "damage": 55,
        "cd": 29,
        "duration": 1.6,
        "source": {
          "actor": "gaara",
          "skill": "ultimate"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "matched",
          "referenceName": "流砂瀑流",
          "referenceGame": "腾讯动作手游·我爱罗疾风传",
          "urls": [
            "https://ios.9game.cn/hyrz/944902.html"
          ],
          "note": "大范围砂浪升起铺开对应流砂瀑流；未显示大范围粉碎就不能直接改称砂瀑大葬。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "游戏招募的单属性定位；不等同于角色原作全部查克拉性质。",
    "identityReview": "已核对红色长衣与灰色交叉背带，疾风传风影形象使用chara061。",
    "nameReviewPending": 0,
    "releaseComplete": true
  },
  "temari": {
    "key": "temari",
    "family": "temari",
    "sprite": "temari",
    "art": "temari",
    "name": "手鞠",
    "officialId": "chara066",
    "attribute": "风",
    "hp": 620,
    "movement": 1.18,
    "passive": "风势步法：本人移动速度提高18%。",
    "skills": {
      "忍具·风魔手里剑": 1,
      "旋风轰壁": 1
    },
    "kit": {
      "passive": {
        "name": "风势步法",
        "text": "本人移动速度提高18%。",
        "effects": {
          "movement": 1.18
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "忍具·风魔手里剑",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "wind",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.2999998000000001,
        "source": {
          "actor": "temari",
          "skill": "skill1"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "visualComplete": true
      },
      "secondary": {
        "name": "旋风轰壁",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "wind",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 8,
        "damageMode": "periodic",
        "duration": 1.5999994999999998,
        "source": {
          "actor": "temari",
          "skill": "skill2"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "adapted",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "visualComplete": true
      },
      "ultimate": {
        "name": "通灵之术·斩斩舞",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "wind",
        "range": 240,
        "radius": 145,
        "damage": 200,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.5999996000000003,
        "source": {
          "actor": "temari",
          "skill": "ultimate"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "adapted",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "status": "slow",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "identityReview": "沿用现有官网立绘导入ID；像素服装/面具年代须经视觉比对，不将不同官方条目合并。",
    "nameReviewPending": 1,
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "suigetsu": {
    "key": "suigetsu",
    "family": "suigetsu",
    "sprite": "suigetsu",
    "art": "suigetsu",
    "name": "鬼灯水月",
    "officialId": "chara077",
    "attribute": "水",
    "hp": 720,
    "reduction": 0.14,
    "passive": "水化之躯：本人受到伤害降低14%。",
    "skills": {
      "水遁·水刃冲击": 1,
      "水化术·水切": 1
    },
    "kit": {
      "passive": {
        "name": "水化之躯",
        "text": "本人受到伤害降低14%。",
        "effects": {
          "reduction": 0.14
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "水遁·水刃冲击",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "water",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 5,
        "damageMode": "periodic",
        "duration": 1.6999993999999998,
        "source": {
          "actor": "suigetsu",
          "skill": "skill1"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "preview",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "status": "slow",
        "visualComplete": true
      },
      "secondary": {
        "name": "水化术·水切",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "water",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.2999998000000001,
        "source": {
          "actor": "suigetsu",
          "skill": "skill2"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "adapted",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "visualComplete": true
      },
      "ultimate": {
        "name": "激流·水化术",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "water",
        "range": 240,
        "radius": 145,
        "damage": 200,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.099999,
        "source": {
          "actor": "suigetsu",
          "skill": "ultimate"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "adapted",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 1,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "jiraiya": {
    "key": "jiraiya",
    "family": "jiraiya",
    "sprite": "jiraiya",
    "art": "jiraiya",
    "name": "自来也",
    "officialId": "chara049",
    "attribute": "火",
    "hp": 800,
    "personal": 1.13,
    "passive": "三忍历战：本人所有伤害提高13%。",
    "skills": {
      "火遁·炎弹": 1,
      "螺旋丸": 1
    },
    "kit": {
      "passive": {
        "name": "三忍历战",
        "text": "本人所有伤害提高13%。",
        "effects": {
          "personal": 1.13
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "火遁·炎弹",
        "text": "向目标发射炎弹，命中造成伤害并灼烧。",
        "kind": "projectile",
        "element": "fire",
        "range": 300,
        "radius": 48,
        "damage": 90,
        "cd": 4.8,
        "duration": 1,
        "source": {
          "actor": "jiraiya",
          "skill": "fire"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "status": "burn",
        "statusDuration": 2,
        "statusTick": 0.5,
        "statusDamage": 8,
        "nameReview": {
          "status": "matched",
          "referenceName": "火遁·炎弹",
          "referenceGame": "腾讯动作手游·自来也传说中的三忍子技能；常态共有术",
          "urls": [
            "https://game.xiaomi.com/viewpoint/1214995289_1747586517701_16"
          ],
          "note": "常态自来也口喷火弹；只核验术名，未复制该新形态结印系统。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "螺旋丸",
        "text": "靠近敌人后释放，持续造成范围伤害。",
        "kind": "melee",
        "element": "rasengan",
        "range": 64,
        "radius": 44,
        "damage": 34,
        "cd": 6.5,
        "duration": 1,
        "source": {
          "actor": "jiraiya",
          "skill": "rasengan"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "matched",
          "referenceName": "螺旋丸",
          "referenceGame": "自来也常态共有术；腾讯传说中的三忍一技能也使用螺旋丸",
          "urls": [
            "https://game.xiaomi.com/viewpoint/1214995289_1747586517701_16"
          ],
          "note": "现蓝色球体+冲击，没有仙人模式/超大玉特征。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "火遁·蛤蟆油炎弹",
        "text": "召出蛤蟆施展大范围火炎，持续造成范围伤害并灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 300,
        "radius": 115,
        "damage": 47,
        "cd": 29,
        "duration": 2,
        "source": {
          "actor": "jiraiya",
          "skill": "toadfire"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "burn",
        "statusDuration": 2,
        "statusTick": 0.5,
        "statusDamage": 8,
        "nameReview": {
          "status": "matched",
          "referenceName": "火遁·蛤蟆油炎弹",
          "referenceGame": "腾讯动作手游·自来也传说中的三忍的组合技；常态蛤蟆联合忍术",
          "urls": [
            "https://game.xiaomi.com/viewpoint/1214995289_1747586517701_16"
          ],
          "note": "原图634后有蛤蟆本体与吐火，支持蛤蟆油炎弹；没有双大仙及风油火组合，不应称仙法·五右卫门。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "游戏招募的单属性定位；不等同于角色原作全部查克拉性质。",
    "sourceNote": "toadfire原始帧630出现召唤烟雾，634起明确出现蛤蟆本体及吐火，通灵蛤蟆演出已核验。",
    "nameReviewPending": 0,
    "releaseComplete": true
  },
  "killerbee": {
    "key": "killerbee",
    "family": "killerbee",
    "sprite": "killerbee",
    "art": "killerbee",
    "name": "奇拉比",
    "officialId": "chara068",
    "attribute": "雷",
    "hp": 820,
    "personal": 1.08,
    "movement": 1.06,
    "passive": "节奏步伐：本人所有伤害提高8%，移动速度提高6%。",
    "skills": {
      "刃流突刺": 1,
      "雷犁热刀": 1
    },
    "kit": {
      "passive": {
        "name": "节奏步伐",
        "text": "本人所有伤害提高8%，移动速度提高6%。",
        "effects": {
          "personal": 1.08,
          "movement": 1.06
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "刃流突刺",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "lightning",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.3000008,
        "source": {
          "actor": "killerbee",
          "skill": "ink"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "status": "stun",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "preview",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "visualComplete": true
      },
      "secondary": {
        "name": "雷犁热刀",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "lightning",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.5999999,
        "source": {
          "actor": "killerbee",
          "skill": "lightning"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "adapted",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "visualComplete": true
      },
      "ultimate": {
        "name": "雷犁热刀（尾兽衣）",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "lightning",
        "range": 240,
        "radius": 145,
        "damage": 200,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.3000010000000004,
        "source": {
          "actor": "killerbee",
          "skill": "cloak"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "adapted",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "status": "stun",
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "nameReviewPending": 1,
    "releaseComplete": false,
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "neji": {
    "key": "neji",
    "family": "neji",
    "sprite": "neji",
    "art": "neji",
    "name": "日向宁次",
    "officialId": "chara028",
    "attribute": "阳",
    "hp": 680,
    "reduction": 0.1,
    "movement": 1.06,
    "passive": "白眼洞察：本人受到伤害降低10%，移动速度提高6%。",
    "skills": {
      "八卦空掌": 1,
      "八卦掌·回天": 1
    },
    "kit": {
      "passive": {
        "name": "白眼洞察",
        "text": "本人受到伤害降低10%，移动速度提高6%。",
        "effects": {
          "reduction": 0.1,
          "movement": 1.06
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "八卦空掌",
        "text": "向目标释放掌风，命中造成伤害并减速。",
        "kind": "projectile",
        "element": "impact",
        "range": 270,
        "radius": 40,
        "damage": 90,
        "cd": 4.3,
        "duration": 0.8,
        "source": {
          "actor": "neji",
          "skill": "air-palm"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "status": "slow",
        "statusDuration": 1.2,
        "slowFactor": 0.7,
        "nameReview": {
          "status": "matched",
          "referenceName": "八卦空掌",
          "referenceGame": "腾讯动作手游·日向宁次疾风传",
          "urls": [
            "https://wap.gamersky.com/sygl/Content-775111.html",
            "https://3g.d.cn/naruto/news/detail_464517_1.html"
          ],
          "note": "手掌查克拉冲击波；本版段数由玩法决定，不冒称逐帧复刻三掌。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "八卦掌·回天",
        "text": "以自身为中心回旋，持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 120,
        "radius": 75,
        "damage": 32,
        "cd": 7,
        "duration": 1.2,
        "source": {
          "actor": "neji",
          "skill": "rotation"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "self",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "matched",
          "referenceName": "八卦掌·回天",
          "referenceGame": "腾讯动作手游·日向宁次疾风传",
          "urls": [
            "https://wap.gamersky.com/sygl/Content-775111.html",
            "https://3g.d.cn/naruto/news/detail_464517_1.html"
          ],
          "note": "自身旋转与查克拉防护罩辨识明确。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "柔拳法·八卦六十四掌",
        "text": "贴近目标连续柔拳攻击，持续造成范围伤害，短暂眩晕。",
        "kind": "melee",
        "element": "impact",
        "range": 105,
        "radius": 62,
        "damage": 55,
        "cd": 26,
        "duration": 1.6,
        "source": {
          "actor": "neji",
          "skill": "sixty-four-palms"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "matched",
          "referenceName": "柔拳法·八卦六十四掌",
          "referenceGame": "腾讯动作手游·日向宁次疾风传",
          "urls": [
            "https://3g.d.cn/naruto/news/detail_464517_1.html",
            "https://wap.gamersky.com/sygl/Content-775111.html"
          ],
          "note": "柔拳身体和八卦纹组合支持标准术名，但没有64张击掌帧；动作是原素材重组，不能用名称暗示真实打击次数。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "游戏招募的单属性定位；不等同于角色原作全部查克拉性质。",
    "nameReviewPending": 0,
    "releaseComplete": true
  },
  "hinata": {
    "key": "hinata",
    "family": "hinata",
    "sprite": "hinata",
    "art": "hinata",
    "name": "日向雏田",
    "officialId": "chara038",
    "attribute": "阳",
    "hp": 700,
    "personal": 1.06,
    "reduction": 0.08,
    "passive": "柔拳专注：本人所有伤害提高6%，受到伤害降低8%。",
    "skills": {
      "八卦空掌": 1,
      "守护八卦六十四掌": 1
    },
    "kit": {
      "passive": {
        "name": "柔拳专注",
        "text": "本人所有伤害提高6%，受到伤害降低8%。",
        "effects": {
          "personal": 1.06,
          "reduction": 0.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "八卦空掌",
        "text": "挥掌发出压缩气波，向前推进并在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 220,
        "radius": 70,
        "damage": 100,
        "cd": 4.2,
        "damageMode": "periodic",
        "duration": 1.4,
        "source": {
          "actor": "hinata",
          "skill": "gentle-fist"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "adapted",
          "note": "独立掌击、回旋查克拉与双狮拳源图层；当前为俯视玩法改编。"
        },
        "visualComplete": true
      },
      "secondary": {
        "name": "守护八卦六十四掌",
        "text": "以自身为中心形成掌击防线，持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 120,
        "radius": 72,
        "damage": 30,
        "cd": 7,
        "damageMode": "periodic",
        "duration": 1.6499994000000002,
        "source": {
          "actor": "hinata",
          "skill": "guardian-palms"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "adapted",
          "note": "独立掌击、回旋查克拉与双狮拳源图层；当前为俯视玩法改编。"
        },
        "visualComplete": true
      },
      "ultimate": {
        "name": "柔步·双狮拳",
        "text": "双手狮形查克拉连续突击，持续造成范围伤害，短暂眩晕。",
        "kind": "melee",
        "element": "impact",
        "range": 110,
        "radius": 68,
        "damage": 52,
        "cd": 27,
        "damageMode": "periodic",
        "duration": 1.9999994,
        "source": {
          "actor": "hinata",
          "skill": "twin-lion-fists"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "adapted",
          "note": "独立掌击、回旋查克拉与双狮拳源图层；当前为俯视玩法改编。"
        },
        "visualComplete": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "本游戏每形态单属性定位。",
    "nameReviewPending": 0,
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28"
  },
  "lee": {
    "key": "lee",
    "family": "lee",
    "sprite": "lee",
    "art": "lee",
    "name": "李洛克",
    "officialId": "chara026",
    "attribute": "阳",
    "hp": 760,
    "movement": 1.2,
    "passive": "青春热血：本人移动速度提高20%。",
    "skills": {
      "木叶旋风": 1,
      "木叶升风": 1
    },
    "kit": {
      "passive": {
        "name": "青春热血",
        "text": "本人移动速度提高20%。",
        "effects": {
          "movement": 1.2
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计，不声称是原作或动作手游招式名。"
        }
      },
      "primary": {
        "name": "木叶旋风",
        "text": "贴近目标发动回旋踢，造成伤害。",
        "kind": "melee",
        "element": "impact",
        "range": 95,
        "radius": 52,
        "damage": 105,
        "cd": 3.8,
        "duration": 0.8,
        "source": {
          "actor": "lee",
          "skill": "leaf-whirlwind"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "nameReview": {
          "status": "matched",
          "referenceName": "木叶旋风",
          "referenceGame": "腾讯少年李洛克共享术；疾风传亦使用的体术",
          "urls": [
            "https://news.4399.com/gonglue/hyrz/renzhe/m/504853.html",
            "https://apps.apple.com/cn/app/火影忍者/id955396648",
            "https://gamefaqs.gamespot.com/psp/630216-naruto-shippuden-ultimate-ninja-impact/faqs/81116/characters-ll-leaf-village-ninjas"
          ],
          "note": "真实回旋踢可支持木叶旋风；不能改为高速拳击的无限乱舞。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "木叶升风",
        "text": "贴近目标发动上升踢，造成伤害，短暂眩晕。",
        "kind": "melee",
        "element": "impact",
        "range": 100,
        "radius": 42,
        "damage": 130,
        "cd": 6.2,
        "duration": 0.9,
        "source": {
          "actor": "lee",
          "skill": "leaf-rising-wind"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "hit",
        "target": "nearest",
        "upgradable": "main_only",
        "status": "stun",
        "statusDuration": 0.3,
        "nameReview": {
          "status": "matched",
          "referenceName": "木叶升风",
          "referenceGame": "究极忍者英雄3/究极冲击·疾风传李洛克",
          "urls": [
            "https://gamefaqs.gamespot.com/psp/961549-naruto-shippuden-ultimate-ninja-heroes-3/faqs/59186",
            "https://gamefaqs.gamespot.com/psp/630216-naruto-shippuden-ultimate-ninja-impact/faqs/81116/characters-ll-leaf-village-ninjas"
          ],
          "note": "上升踢与Leaf Rising Wind动作一致；中文为通行译名，不擅加八门高阶后缀。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "表莲华",
        "text": "贴近目标发动绷带缠绕与落地重击，持续造成范围伤害。",
        "kind": "melee",
        "element": "impact",
        "range": 110,
        "radius": 72,
        "damage": 55,
        "cd": 26,
        "duration": 1.5,
        "source": {
          "actor": "lee",
          "skill": "primary-lotus"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "damageMode": "periodic",
        "target": "nearest",
        "upgradable": "main_only",
        "hitInterval": 0.25,
        "nameReview": {
          "status": "adapted",
          "referenceName": "表莲华",
          "referenceGame": "究极冲击·疾风传李洛克；腾讯少年李洛克同名体术",
          "urls": [
            "https://gamefaqs.gamespot.com/psp/630216-naruto-shippuden-ultimate-ninja-impact/faqs/81116/characters-ll-leaf-village-ninjas",
            "https://news.4399.com/gonglue/hyrz/renzhe/m/504853.html"
          ],
          "note": "原绷带旋转与独立地面冲击支持术名，但受击目标抛起下砸轨迹仍由运行端配合；不称里莲华或昼虎。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "attributeNote": "游戏招募的单属性定位；不等同于角色原作全部查克拉性质。",
    "identityReview": "疾风传形象使用chara026；少年chara025与博人chara132保持独立。",
    "nameReviewPending": 0,
    "releaseComplete": true
  },
  "sasori": {
    "key": "sasori",
    "family": "sasori",
    "sprite": "sasori",
    "art": "sasori",
    "name": "赤砂之蝎",
    "officialId": "chara084",
    "attribute": "土",
    "hp": 720,
    "reduction": 0.08,
    "releaseComplete": false,
    "nameReviewPending": 1,
    "passive": "傀儡机关：本人受到伤害降低8%。",
    "attributeNote": "游戏招募单属性定位，不等同于原作所有性质。",
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "kit": {
      "passive": {
        "name": "傀儡机关",
        "text": "本人受到伤害降低8%。",
        "effects": {
          "reduction": 0.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      },
      "primary": {
        "name": "砂铁结袭",
        "text": "操纵三代风影傀儡，将砂铁凝成锥体向前突击；有效阶段持续造成范围伤害并减速。",
        "kind": "area",
        "element": "earth",
        "range": 195,
        "radius": 70,
        "damage": 125,
        "cd": 5,
        "duration": 1.4,
        "status": "slow",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原人物像素与独立助手层合成，调色板已修复；当前为本游戏适配时序。",
        "nameReview": {
          "status": "adapted",
          "referenceName": "砂铁结袭",
          "note": "依据原作砂铁机制与源包图层制作；时序与范围为本游戏改编。",
          "fullAnimationVerified": false
        },
        "source": {
          "actor": "sasori",
          "skill": "sasori-primary-v27"
        }
      },
      "secondary": {
        "name": "人傀儡·喷火",
        "text": "展开人傀儡机关向前喷火，持续造成范围伤害并点燃敌人；当前使用描述性技能名。",
        "kind": "area",
        "element": "fire",
        "range": 180,
        "radius": 88,
        "damage": 22,
        "damageMode": "periodic",
        "cd": 7.5,
        "duration": 1.8,
        "status": "burn",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原人物像素与独立助手层合成，调色板已修复；当前为本游戏适配时序。",
        "nameReview": {
          "status": "preview",
          "referenceName": "人傀儡·喷火",
          "note": "图层与机制已接入；当前为俯视玩法改编，缺少独立死亡动作。描述性技能名称尚待原作/手游资料核对。",
          "fullAnimationVerified": false
        },
        "source": {
          "actor": "sasori",
          "skill": "sasori-secondary-v27"
        }
      },
      "ultimate": {
        "name": "砂铁界法",
        "text": "三代风影傀儡使砂铁锥与方块碰撞，展开枝状砂铁网；持续造成范围伤害并减速。",
        "kind": "area",
        "element": "earth",
        "range": 230,
        "radius": 125,
        "damage": 35,
        "damageMode": "periodic",
        "cd": 28,
        "duration": 2.6,
        "status": "slow",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原人物像素与独立助手层合成，调色板已修复；当前为本游戏适配时序。",
        "nameReview": {
          "status": "adapted",
          "referenceName": "砂铁界法",
          "note": "依据原作砂铁机制与源包图层制作；时序与范围为本游戏改编。",
          "fullAnimationVerified": false
        },
        "source": {
          "actor": "sasori",
          "skill": "sasori-ultimate-v27"
        }
      }
    },
    "sourceNote": "真实MUGEN像素人物与独立特效层；调色板已校正，动作/时空为俯视战斗改编；尚未完成全部基础动作，不开放正式出战。",
    "skills": {
      "砂铁结袭": 1,
      "人傀儡·喷火": 1
    },
    "visualComplete": true
  },
  "sakura": {
    "key": "sakura",
    "sprite": "sakura",
    "art": "sakura",
    "family": "sakura",
    "name": "春野樱（疾风传）",
    "officialId": "chara017",
    "attribute": "阳",
    "hp": 792,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "体术·樱连击",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 5,
        "damageMode": "hit",
        "nameReview": {
          "status": "preview",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "duration": 1.6999996000000002,
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "查克拉爆发",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 240,
        "radius": 95,
        "damage": 115,
        "cd": 8,
        "damageMode": "hit",
        "nameReview": {
          "status": "preview",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "duration": 1.8,
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "怪力·樱花冲",
        "text": "由真实像素动作演出起手、持续攻击与收招，在有效阶段持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 240,
        "radius": 145,
        "damage": 200,
        "cd": 28,
        "damageMode": "periodic",
        "nameReview": {
          "status": "adapted",
          "note": "真实源时间轴，时序为俯视玩法适配；描述名不冒称原作确定招式。"
        },
        "duration": 2.3000014,
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "医疗经验",
        "text": "本人基础生命提高10%。",
        "nameReview": {
          "status": "original",
          "note": "本游戏被动设计。"
        },
        "effects": {
          "hp": 792
        }
      }
    },
    "passive": "医疗经验：本人基础生命提高10%。",
    "skills": {
      "体术·樱连击": 1,
      "查克拉爆发": 1
    },
    "nameReviewPending": 2
  },
  "naruto_sage": {
    "key": "naruto_sage",
    "sprite": "naruto_sage",
    "art": "naruto_sage",
    "family": "naruto",
    "name": "仙人鸣人",
    "officialId": "chara003",
    "attribute": "风",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "仙术·震地连击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.804,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "仙法·螺旋丸",
        "text": "靠近敌人，仙人形态独立起手后以螺旋丸近击，球体在有效阶段循环并持续造成范围伤害。",
        "kind": "melee",
        "element": "rasengan",
        "range": 110,
        "radius": 65,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 2.029,
        "nameReview": {
          "status": "adapted",
          "note": "真实仙人形态动作与同名螺旋丸DS效果组合，俯视玩法适配；不是大玉螺旋丸。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "仙术·旋风爆发",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.32,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "仙术·震地连击": 1,
      "仙法·螺旋丸": 1
    },
    "nameReviewPending": 2
  },
  "naruto_kurama": {
    "key": "naruto_kurama",
    "sprite": "naruto_kurama",
    "art": "naruto_kurama",
    "family": "naruto",
    "name": "九尾查克拉鸣人",
    "officialId": null,
    "attribute": "阳",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "查克拉衣·近身连击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.804,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "查克拉臂·螺旋丸",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "melee",
        "element": "impact",
        "range": 110,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 2.096,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "查克拉衣·爆发",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.32,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "查克拉衣·近身连击": 1,
      "查克拉臂·螺旋丸": 1
    },
    "nameReviewPending": 3
  },
  "naruto_one_tail": {
    "key": "naruto_one_tail",
    "sprite": "naruto_one_tail",
    "art": "naruto_one_tail",
    "family": "naruto",
    "name": "一尾鸣人",
    "officialId": null,
    "attribute": "阳",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "尾兽衣·查克拉臂",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.165,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "尾兽衣·突进",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.026,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "尾兽衣·冲击爆发",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.32,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "尾兽衣·查克拉臂": 1,
      "尾兽衣·突进": 1
    },
    "nameReviewPending": 3
  },
  "naruto_four_tail": {
    "key": "naruto_four_tail",
    "sprite": "naruto_four_tail",
    "art": "naruto_four_tail",
    "family": "naruto",
    "name": "四尾鸣人",
    "officialId": null,
    "attribute": "阳",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "尾兽衣·冲击波",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "fire",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 0.93,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "burn",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "尾兽衣·爪击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "fire",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.804,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "burn",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "尾兽玉·爆发",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "fire",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.515,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "burn",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "尾兽衣·冲击波": 1,
      "尾兽衣·爪击": 1
    },
    "nameReviewPending": 3
  },
  "kakashi_kamui": {
    "key": "kakashi_kamui",
    "sprite": "kakashi_kamui",
    "art": "kakashi_kamui",
    "family": "kakashi",
    "name": "神威卡卡西",
    "officialId": null,
    "attribute": "雷",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "忍具·连击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 2.26,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "神威",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 2.152,
        "nameReview": {
          "status": "adapted",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "空间转移·连击",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 1.963,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "忍具·连击": 1,
      "神威": 1
    },
    "nameReviewPending": 2
  },
  "sasuke_curse": {
    "key": "sasuke_curse",
    "sprite": "sasuke_curse",
    "art": "sasuke_curse",
    "family": "sasuke",
    "name": "咒印佐助",
    "officialId": null,
    "attribute": "雷",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "咒印·体术连击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "lightning",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.585,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "咒印·雷遁连击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "lightning",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.804,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "咒印·雷兽冲击",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.404,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "咒印·体术连击": 1,
      "咒印·雷遁连击": 1
    },
    "nameReviewPending": 3
  },
  "sasuke_hebi": {
    "key": "sasuke_hebi",
    "sprite": "sasuke_hebi",
    "art": "sasuke_hebi",
    "family": "sasuke",
    "name": "鹰佐助",
    "officialId": "chara010",
    "attribute": "雷",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "雷遁·突进连击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "lightning",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.738,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "雷遁·连续攻击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "lightning",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.87,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "须佐能乎·弓矢",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.404,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "雷遁·突进连击": 1,
      "雷遁·连续攻击": 1
    },
    "nameReviewPending": 3
  },
  "sasuke_susanoo": {
    "key": "sasuke_susanoo",
    "sprite": "sasuke_susanoo",
    "art": "sasuke_susanoo",
    "family": "sasuke",
    "name": "须佐佐助",
    "officialId": null,
    "attribute": "阴",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "炎遁·黑炎",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "lightning",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.65,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "须佐能乎·骨架攻击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "lightning",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.52,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "stun",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "须佐能乎·终结攻击",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "fire",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.32,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "status": "burn",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "炎遁·黑炎": 1,
      "须佐能乎·骨架攻击": 1
    },
    "nameReviewPending": 3
  },
  "sakura_war": {
    "key": "sakura_war",
    "sprite": "sakura_war",
    "art": "sakura_war",
    "family": "sakura",
    "name": "三忍小樱",
    "officialId": null,
    "attribute": "阳",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "怪力·连击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 2.364,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "怪力·冲击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.52,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "怪力·连续打击",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.32,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "怪力·连击": 1,
      "怪力·冲击": 1
    },
    "nameReviewPending": 3
  },
  "jugo": {
    "key": "jugo",
    "sprite": "jugo",
    "art": "jugo",
    "family": "jugo",
    "name": "重吾",
    "officialId": "chara078",
    "attribute": "阳",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "咒印·地面重击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 5,
        "damageMode": "hit",
        "duration": 1.585,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "secondary": {
        "name": "咒印·查克拉冲击",
        "text": "原形态动作起手，向近处敌人施展专属攻击并收势。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 76,
        "damage": 100,
        "cd": 8,
        "damageMode": "hit",
        "duration": 1.738,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "ultimate": {
        "name": "咒印·查克拉炮",
        "text": "原形态动作起手，持续范围攻击后收势。",
        "kind": "area",
        "element": "impact",
        "range": 210,
        "radius": 120,
        "damage": 32,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.515,
        "nameReview": {
          "status": "preview",
          "note": "取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"
        },
        "sourceText": "真实BVN原形态像素的有限战斗场景适配；术名待核。",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉锻炼",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉锻炼：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "咒印·地面重击": 1,
      "咒印·查克拉冲击": 1
    },
    "nameReviewPending": 3
  },
  "kaguya": {
    "key": "kaguya",
    "sprite": "kaguya",
    "art": "kaguya",
    "family": "kaguya",
    "name": "大筒木辉夜",
    "officialId": "chara095",
    "attribute": "全",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "八十神空击",
        "text": "连续释放紫色查克拉拳压，持续攻击前方区域并击退杂兵。",
        "kind": "area",
        "element": "impact",
        "range": 220,
        "radius": 95,
        "damage": 25,
        "cd": 5.8,
        "damageMode": "periodic",
        "duration": 2.0,
        "status": "slow",
        "nameReview": {
          "status": "adapted",
          "note": "原脚本state400/401名称Yasogami Kugeki，使用9093查克拉拳及原3,12调色；随机位置改为确定性扇形拳阵。"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原始像素人物和独立特效组合，时空为俯视玩法改编；详见素材缺口记录。",
        "visualComplete": true
      },
      "secondary": {
        "name": "兔毛针",
        "text": "以头发射出多枚细针，连续穿过前方敌群。",
        "kind": "area",
        "element": "impact",
        "range": 230,
        "radius": 85,
        "damage": 20,
        "cd": 6.5,
        "damageMode": "periodic",
        "duration": 1.7,
        "status": "slow",
        "nameReview": {
          "status": "preview",
          "note": "素材确为AIR1000/1001发针动作；源脚本注Senpo Kebari Senbon疑似沿用自来也用语，因此当前按辉夜发针视觉适配兔毛针，正式术名须核对。"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原始像素人物和独立特效组合，时空为俯视玩法改编；详见素材缺口记录。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "天之御中·冰空间",
        "text": "展开局部冰空间，召出冰晶包围前方敌群并碎裂，持续造成范围伤害和减速。",
        "kind": "area",
        "element": "water",
        "range": 250,
        "radius": 130,
        "damage": 38,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 3.2,
        "status": "slow",
        "nameReview": {
          "status": "adapted",
          "note": "原state1300/1301冰空间分支，使用9119冰晶及9120/9121/9127源层；本游戏为局部冰空间领域，不声称重现整个舞台替换。"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原始像素人物和独立特效组合，时空为俯视玩法改编；详见素材缺口记录。",
        "visualComplete": true
      },
      "passive": {
        "name": "查克拉始祖",
        "text": "自身忍术伤害提高8%。",
        "effects": {
          "personal": 1.08
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动。"
        }
      }
    },
    "passive": "查克拉始祖：自身忍术伤害提高8%。",
    "personal": 1.08,
    "skills": {
      "八十神空击": 1,
      "兔毛针": 1
    },
    "nameReviewPending": 1
  },
  "guy_death_gate": {
    "key": "guy_death_gate",
    "sprite": "guy_death_gate",
    "art": "guy_death_gate",
    "family": "guy",
    "name": "迈特凯（死门素材）",
    "officialId": null,
    "attribute": "阳",
    "hp": 720,
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "releaseComplete": false,
    "sourceNote": "真实来源像素组合；动画完成度、术名核验与角色基础动作分别记录。",
    "attributeNote": "本游戏每形态单属性定位。",
    "visualComplete": true,
    "sourceCandidate": false,
    "artBatch": "0.28",
    "kit": {
      "primary": {
        "name": "死门·拳压连击",
        "text": "连续挥拳并震起前方地面，持续造成范围伤害。",
        "kind": "area",
        "element": "impact",
        "range": 170,
        "radius": 78,
        "damage": 23,
        "cd": 4.8,
        "damageMode": "periodic",
        "duration": 1.7,
        "status": "slow",
        "nameReview": {
          "status": "preview",
          "note": "描述性名称；原包标签只有招1/招2/必杀，未证明原作术名，不以夕象或夜凯命名。"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原始像素人物和独立特效组合，时空为俯视玩法改编；详见素材缺口记录。",
        "visualComplete": true
      },
      "secondary": {
        "name": "死门·回旋踢",
        "text": "翻身踢击前方敌群，造成范围伤害并短暂眩晕。",
        "kind": "area",
        "element": "impact",
        "range": 160,
        "radius": 80,
        "damage": 130,
        "cd": 7,
        "damageMode": "hit",
        "duration": 1.6,
        "status": "stun",
        "nameReview": {
          "status": "preview",
          "note": "描述性名称；原包标签只有招1/招2/必杀，未证明原作术名，不以夕象或夜凯命名。"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原始像素人物和独立特效组合，时空为俯视玩法改编；详见素材缺口记录。",
        "visualComplete": true
      },
      "ultimate": {
        "name": "死门·血色冲击",
        "text": "血蒸汽爆发后向前连续突击，红色冲击波持续攻击敌群。",
        "kind": "area",
        "element": "impact",
        "range": 230,
        "radius": 110,
        "damage": 38,
        "cd": 28,
        "damageMode": "periodic",
        "duration": 2.8,
        "status": "slow",
        "nameReview": {
          "status": "preview",
          "note": "描述性名称；原包标签只有招1/招2/必杀，未证明原作术名，不以夕象或夜凯命名。"
        },
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "sourceText": "原始像素人物和独立特效组合，时空为俯视玩法改编；详见素材缺口记录。",
        "visualComplete": true
      },
      "passive": {
        "name": "血蒸汽",
        "text": "自身忍术伤害提高10%。",
        "effects": {
          "personal": 1.1
        },
        "nameReview": {
          "status": "original",
          "note": "本游戏原创被动设计。"
        }
      }
    },
    "passive": "血蒸汽：自身忍术伤害提高10%。",
    "personal": 1.1,
    "skills": {
      "死门·拳压连击": 1,
      "死门·回旋踢": 1
    },
    "nameReviewPending": 3
  },
  "shikamaru": {
    "key": "shikamaru",
    "family": "shikamaru",
    "sprite": "v47_shikamaru",
    "art": "shikamaru",
    "name": "奈良鹿丸",
    "officialId": "chara034",
    "attribute": "阴",
    "hp": 660,
    "passive": "影控增伤：自身忍术攻击被束缚或减速的敌人时，伤害提高15%。",
    "skills": {
      "影子模仿术": 1,
      "影缝之术": 1
    },
    "kit": {
      "passive": {
        "name": "影控增伤",
        "text": "自身忍术攻击被束缚或减速的敌人时，伤害提高15%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "用户V6被动的游戏化数值实现。"
        }
      },
      "primary": {
        "name": "影子模仿术",
        "text": "影子延伸后束缚范围内杂兵1.4秒；首领仅减速。",
        "kind": "area",
        "element": "yin",
        "range": 280,
        "radius": 58,
        "damage": 90,
        "cd": 5,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "影子模仿术",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.4
      },
      "secondary": {
        "name": "影缝之术",
        "text": "影刺连续穿刺目标区域，持续造成伤害并减速。",
        "kind": "area",
        "element": "yin",
        "range": 300,
        "radius": 75,
        "damage": 150,
        "cd": 8,
        "duration": 1.7,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "影缝之术",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "影首缚之术",
        "text": "影子化为手臂收拢，持续攻击并束缚范围内杂兵2秒。",
        "kind": "area",
        "element": "yin",
        "range": 300,
        "radius": 95,
        "damage": 310,
        "cd": 26,
        "duration": 2.1,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "影首缚之术",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch47": true,
    "artBatch": "0.47",
    "attributeNote": "每形态单属性游戏定位。",
    "sourceNote": "来源帧重编排适配俯视玩法；※为游戏化组合招式，不代表官方独立术名。"
  },
  "ino": {
    "key": "ino",
    "family": "ino",
    "sprite": "v47_ino",
    "art": "ino",
    "name": "山中井野",
    "officialId": "chara032",
    "attribute": "阴",
    "hp": 610,
    "controlDuration": 1.2,
    "passive": "精神扰动：自身忍术施加的精神控制持续时间提高20%；首领转为减速。",
    "skills": {
      "心转身之术": 1,
      "心乱身之术": 1
    },
    "kit": {
      "passive": {
        "name": "精神扰动",
        "text": "自身忍术施加的精神控制持续时间提高20%；首领转为减速。",
        "effects": {
          "controlDuration": 1.2
        },
        "nameReview": {
          "status": "original",
          "note": "用户V6被动的游戏化数值实现。"
        }
      },
      "primary": {
        "name": "心转身之术",
        "text": "精神体命中目标区域，控制杂兵1.4秒，使其攻击其他敌人；首领仅减速。",
        "kind": "area",
        "element": "yin",
        "range": 280,
        "radius": 48,
        "damage": 65,
        "cd": 6,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "心转身之术",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "charm",
        "statusDuration": 1.4
      },
      "secondary": {
        "name": "心乱身之术",
        "text": "扰乱区域内敌人的行动，使杂兵互相攻击1.6秒。",
        "kind": "area",
        "element": "yin",
        "range": 280,
        "radius": 72,
        "damage": 110,
        "cd": 9,
        "duration": 1.7,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "心乱身之术",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。 用户V6保留候选：本期前期实战展示不充分。",
          "fullAnimationVerified": true
        },
        "status": "charm",
        "statusDuration": 1.6
      },
      "ultimate": {
        "name": "群体心转身※",
        "text": "同时释放多个精神体，持续伤害并控制范围内杂兵2秒。组合型游戏化奥义。",
        "kind": "area",
        "element": "yin",
        "range": 320,
        "radius": 105,
        "damage": 230,
        "cd": 28,
        "duration": 2.1,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "群体心转身※",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "charm",
        "statusDuration": 2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch47": true,
    "artBatch": "0.47",
    "attributeNote": "每形态单属性游戏定位。",
    "sourceNote": "来源帧重编排适配俯视玩法；※为游戏化组合招式，不代表官方独立术名。"
  },
  "choji": {
    "key": "choji",
    "family": "choji",
    "sprite": "v47_choji",
    "art": "choji",
    "name": "秋道丁次",
    "officialId": "chara036",
    "attribute": "阳",
    "hp": 900,
    "reduction": 0.08,
    "passive": "倍化体质：高基础生命值，自身受到伤害降低8%。",
    "skills": {
      "肉弹战车": 1,
      "超倍化之术": 1
    },
    "kit": {
      "passive": {
        "name": "倍化体质",
        "text": "高基础生命值，自身受到伤害降低8%。",
        "effects": {
          "reduction": 0.08
        },
        "nameReview": {
          "status": "original",
          "note": "用户V6被动的游戏化数值实现。"
        }
      },
      "primary": {
        "name": "肉弹战车",
        "text": "靠近敌群后蜷身旋转，沿移动方向碾压周围敌人。",
        "kind": "melee",
        "element": "impact",
        "range": 100,
        "radius": 60,
        "damage": 140,
        "cd": 5,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "肉弹战车",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "超倍化之术",
        "text": "身体逐渐倍化后压击周围敌群，短暂眩晕杂兵。",
        "kind": "melee",
        "element": "impact",
        "range": 125,
        "radius": 90,
        "damage": 190,
        "cd": 9,
        "duration": 1.7,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "超倍化之术",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 0.65
      },
      "ultimate": {
        "name": "超张手",
        "text": "巨大手掌连续向前推出，持续打击周围敌群。",
        "kind": "melee",
        "element": "impact",
        "range": 160,
        "radius": 105,
        "damage": 390,
        "cd": 27,
        "duration": 2.1,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "超张手",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 1.2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch47": true,
    "artBatch": "0.47",
    "attributeNote": "每形态单属性游戏定位。",
    "sourceNote": "来源帧重编排适配俯视玩法；※为游戏化组合招式，不代表官方独立术名。"
  },
  "sai": {
    "key": "sai",
    "family": "sai",
    "sprite": "v47_sai",
    "art": "sai",
    "name": "佐井",
    "officialId": "chara046",
    "attribute": "阴",
    "hp": 650,
    "personal": 1.12,
    "passive": "墨兽协同：自身墨兽忍术伤害提高12%；墨兽不占用小队支援位置。",
    "skills": {
      "超兽伪画·狮子": 1,
      "超兽伪画·鸟": 1
    },
    "kit": {
      "passive": {
        "name": "墨兽协同",
        "text": "自身墨兽忍术伤害提高12%；墨兽不占用小队支援位置。",
        "effects": {
          "personal": 1.12
        },
        "nameReview": {
          "status": "original",
          "note": "用户V6被动的游戏化数值实现。"
        }
      },
      "primary": {
        "name": "超兽伪画·狮子",
        "text": "展开画卷，墨狮扑向目标区域并持续撕咬。",
        "kind": "ink_summon",
        "element": "yin",
        "range": 310,
        "radius": 65,
        "damage": 120,
        "cd": 5,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "超兽伪画·狮子",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "超兽伪画·鸟",
        "text": "绘出双鸟俯冲目标区域，持续造成伤害。",
        "kind": "ink_summon",
        "element": "yin",
        "range": 340,
        "radius": 75,
        "damage": 160,
        "cd": 8,
        "duration": 1.7,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "超兽伪画·鸟",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 1.2
      },
      "ultimate": {
        "name": "墨兽群袭※",
        "text": "墨狮、墨鸟与墨蛇同时出击，持续攻击目标区域。组合型游戏化奥义。",
        "kind": "ink_summon",
        "element": "yin",
        "range": 360,
        "radius": 110,
        "damage": 340,
        "cd": 26,
        "duration": 2.1,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "墨兽群袭※",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 1.8
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch47": true,
    "artBatch": "0.47",
    "attributeNote": "每形态单属性游戏定位。",
    "sourceNote": "来源帧重编排适配俯视玩法；※为游戏化组合招式，不代表官方独立术名。"
  },
  "hidan": {
    "key": "hidan",
    "family": "hidan",
    "sprite": "v47_hidan",
    "art": "hidan",
    "name": "飞段",
    "officialId": "chara082",
    "attribute": "阴",
    "hp": 760,
    "passive": "不死之身：受到致命伤时保留1点生命并无敌1.5秒，每24秒最多触发一次；支援也适用。",
    "skills": {
      "三刃镰刀攻击※": 1,
      "取血诅咒※": 1
    },
    "kit": {
      "passive": {
        "name": "不死之身",
        "text": "受到致命伤时保留1点生命并无敌1.5秒，每24秒最多触发一次；支援也适用。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "用户V6被动的游戏化数值实现。"
        }
      },
      "primary": {
        "name": "三刃镰刀攻击※",
        "text": "靠近敌人挥动三刃镰刀，连续斩击周围敌群。",
        "kind": "melee",
        "element": "yin",
        "range": 100,
        "radius": 78,
        "damage": 145,
        "cd": 5,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "三刃镰刀攻击※",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "取血诅咒※",
        "text": "镰刀取血并留下6秒血咒标记；飞段忍术对标记敌人的伤害提高15%。",
        "kind": "area",
        "element": "yin",
        "range": 280,
        "radius": 70,
        "damage": 140,
        "cd": 8,
        "duration": 1.7,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "取血诅咒※",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "blood",
        "statusDuration": 6
      },
      "ultimate": {
        "name": "咒术·死司凭血",
        "text": "切换为黑白咒术状态，血阵持续攻击目标区域；命中带血咒标记。",
        "kind": "area",
        "element": "yin",
        "range": 320,
        "radius": 100,
        "damage": 370,
        "cd": 28,
        "duration": 2.1,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "咒术·死司凭血",
          "note": "按用户V6方案，来源像素动作重编排；※组合型招式。",
          "fullAnimationVerified": true
        },
        "status": "blood",
        "statusDuration": 6
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch47": true,
    "artBatch": "0.47",
    "attributeNote": "每形态单属性游戏定位。",
    "sourceNote": "来源帧重编排适配俯视玩法；※为游戏化组合招式，不代表官方独立术名。"
  },
  "asuma": {
    "key": "asuma",
    "family": "asuma",
    "sprite": "v54_asuma",
    "art": "asuma",
    "name": "猿飞阿斯玛",
    "officialId": "chara045",
    "attribute": "风",
    "hp": 700,
    "passive": "风遁查克拉刀：近战忍术伤害提高10%。",
    "skills": {
      "飞燕": 1,
      "火遁·灰积烧": 1
    },
    "kit": {
      "passive": {
        "name": "风遁查克拉刀",
        "text": "近战忍术伤害提高10%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "飞燕",
        "text": "挥动风遁查克拉刀，近身连续切割敌群。",
        "kind": "melee",
        "element": "wind",
        "range": 105,
        "radius": 70,
        "damage": 155,
        "cd": 4,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "飞燕",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "火遁·灰积烧",
        "text": "释放灰烟后点燃，持续造成范围伤害并灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 300,
        "radius": 86,
        "damage": 185,
        "cd": 8,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "火遁·灰积烧",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "burn",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "查克拉刀连斩※",
        "text": "连续挥动查克拉双刀，攻击近身大片敌群。",
        "kind": "melee",
        "element": "wind",
        "range": 115,
        "radius": 100,
        "damage": 420,
        "cd": 27,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "查克拉刀连斩※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。"
  },
  "shino": {
    "key": "shino",
    "family": "shino",
    "sprite": "v54_shino",
    "art": "shino",
    "name": "油女志乃",
    "officialId": "chara043",
    "attribute": "土",
    "hp": 700,
    "passive": "寄坏虫：忍术命中时缩短自身奥义冷却0.3秒，每0.8秒最多触发一次。",
    "skills": {
      "虫分身之术": 1,
      "寄坏虫攻击※": 1
    },
    "kit": {
      "passive": {
        "name": "寄坏虫",
        "text": "忍术命中时缩短自身奥义冷却0.3秒，每0.8秒最多触发一次。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "虫分身之术",
        "text": "虫群组成短暂分身，向前侵蚀目标区域。",
        "kind": "area",
        "element": "insect",
        "range": 280,
        "radius": 75,
        "damage": 130,
        "cd": 6,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "虫分身之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "寄坏虫攻击※",
        "text": "寄坏虫群穿行并持续攻击，命中减速2秒。",
        "kind": "projectile",
        "element": "insect",
        "range": 320,
        "radius": 78,
        "damage": 170,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "寄坏虫攻击※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "虫群围困※",
        "text": "虫群环绕围困区域，持续造成伤害并减速2秒。",
        "kind": "area",
        "element": "insect",
        "range": 320,
        "radius": 108,
        "damage": 370,
        "cd": 29,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "虫群围困※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。"
  },
  "tenten": {
    "key": "tenten",
    "family": "tenten",
    "sprite": "v54_tenten",
    "art": "tenten",
    "name": "天天",
    "officialId": "chara030",
    "attribute": "阳",
    "hp": 700,
    "passive": "忍具精通：忍具技能伤害提高10%。",
    "skills": {
      "双升龙": 1,
      "忍具散射※": 1
    },
    "kit": {
      "passive": {
        "name": "忍具精通",
        "text": "忍具技能伤害提高10%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "双升龙",
        "text": "双路盘旋忍具向上展开，持续攻击目标区域。",
        "kind": "area",
        "element": "weapon",
        "range": 310,
        "radius": 90,
        "damage": 145,
        "cd": 6,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "双升龙",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "忍具散射※",
        "text": "向目标散射苦无、手里剑和刀具。",
        "kind": "projectile",
        "element": "weapon",
        "range": 340,
        "radius": 85,
        "damage": 170,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "忍具散射※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "忍具连环阵※",
        "text": "忍具围成连环阵，持续切割大范围敌群。",
        "kind": "area",
        "element": "weapon",
        "range": 340,
        "radius": 112,
        "damage": 380,
        "cd": 28,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "忍具连环阵※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。",
    "personal": 1.1
  },
  "kiba": {
    "key": "kiba",
    "family": "kiba",
    "sprite": "v54_kiba",
    "art": "kiba",
    "name": "犬冢牙",
    "officialId": "chara041",
    "attribute": "阳",
    "hp": 700,
    "passive": "赤丸协同：赤丸协同使牙的忍术伤害提高10%。",
    "skills": {
      "兽人分身": 1,
      "牙通牙": 1
    },
    "kit": {
      "passive": {
        "name": "赤丸协同",
        "text": "赤丸协同使牙的忍术伤害提高10%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "兽人分身",
        "text": "赤丸与兽化协同身影交错攻击目标区域。",
        "kind": "area",
        "element": "physical",
        "range": 230,
        "radius": 75,
        "damage": 145,
        "cd": 6,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "兽人分身",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "牙通牙",
        "text": "与赤丸旋转突袭，持续攻击近身区域。",
        "kind": "melee",
        "element": "physical",
        "range": 110,
        "radius": 85,
        "damage": 190,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "牙通牙",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "牙狼牙",
        "text": "双头狼与旋转牙击连续攻击近身敌群。",
        "kind": "melee",
        "element": "physical",
        "range": 125,
        "radius": 105,
        "damage": 420,
        "cd": 27,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "牙狼牙",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。",
    "personal": 1.1
  },
  "kurenai": {
    "key": "kurenai",
    "family": "kurenai",
    "sprite": "v54_kurenai",
    "art": "kurenai",
    "name": "夕日红",
    "officialId": "new13",
    "attribute": "阴",
    "hp": 700,
    "passive": "幻术精通：忍术命中杂兵有15%概率使其迷惑1秒；同一敌人2秒内最多触发一次。",
    "skills": {
      "魔幻·树缚杀": 1,
      "花瓣幻术（动画）": 1
    },
    "kit": {
      "passive": {
        "name": "幻术精通",
        "text": "忍术命中杂兵有15%概率使其迷惑1秒；同一敌人2秒内最多触发一次。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "魔幻·树缚杀",
        "text": "幻术枯木自目标处长出，束缚杂兵1.2秒；首领仅减速。",
        "kind": "area",
        "element": "yin",
        "range": 300,
        "radius": 75,
        "damage": 120,
        "cd": 7,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "魔幻·树缚杀",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.2
      },
      "secondary": {
        "name": "花瓣幻术（动画）",
        "text": "花瓣幻境围绕目标旋转，使杂兵迷惑1.4秒；首领仅减速。",
        "kind": "area",
        "element": "yin",
        "range": 310,
        "radius": 90,
        "damage": 155,
        "cd": 8,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "花瓣幻术（动画）",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "charm",
        "statusDuration": 1.4
      },
      "ultimate": {
        "name": "树缚幻术连杀※",
        "text": "多处幻树围困并以花瓣攻击，束缚杂兵1.5秒；首领仅减速。",
        "kind": "area",
        "element": "yin",
        "range": 320,
        "radius": 110,
        "damage": 365,
        "cd": 30,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "树缚幻术连杀※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.5
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。"
  },
  "kabuto": {
    "key": "kabuto",
    "family": "kabuto",
    "sprite": "v54_kabuto",
    "art": "kabuto",
    "name": "药师兜",
    "officialId": "chara117",
    "attribute": "阴",
    "hp": 720,
    "passive": "医疗忍术：存活时每秒恢复4点生命；主控和支援均适用。",
    "skills": {
      "查克拉手术刀": 1,
      "死魂之术": 1
    },
    "kit": {
      "passive": {
        "name": "医疗忍术",
        "text": "存活时每秒恢复4点生命；主控和支援均适用。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "查克拉手术刀",
        "text": "双手凝聚查克拉手术刀，持续切割近身敌人。",
        "kind": "melee",
        "element": "chakra",
        "range": 100,
        "radius": 72,
        "damage": 150,
        "cd": 5,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "查克拉手术刀",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "死魂之术",
        "text": "操控死魂人形连续攻击目标范围。",
        "kind": "area",
        "element": "yin",
        "range": 290,
        "radius": 82,
        "damage": 170,
        "cd": 8,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "死魂之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "阴愈伤灭",
        "text": "以医疗查克拉覆盖自身，回复18%最大生命；不造成伤害。",
        "kind": "area",
        "element": "yang",
        "range": 310,
        "radius": 70,
        "damage": 0,
        "cd": 30,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "阴愈伤灭",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "healFraction": 0.18,
        "noDamage": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。"
  },
  "yamato": {
    "key": "yamato",
    "family": "yamato",
    "sprite": "v54_yamato",
    "art": "yamato",
    "name": "大和",
    "officialId": "chara047",
    "attribute": "土",
    "hp": 700,
    "passive": "木遁控制：忍术命中杂兵有15%概率束缚0.6秒；同一敌人2秒内最多触发一次。",
    "skills": {
      "木遁·木锭壁": 1,
      "木遁·四柱牢之术": 1
    },
    "kit": {
      "passive": {
        "name": "木遁控制",
        "text": "忍术命中杂兵有15%概率束缚0.6秒；同一敌人2秒内最多触发一次。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "木遁·木锭壁",
        "text": "木壁从目标两侧升起，持续攻击并减速2秒；演出不会形成地图障碍。",
        "kind": "area",
        "element": "wood",
        "range": 280,
        "radius": 82,
        "damage": 130,
        "cd": 7,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "木遁·木锭壁",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "secondary": {
        "name": "木遁·四柱牢之术",
        "text": "木柱与枝条围困敌群，束缚杂兵1.2秒；首领仅减速。",
        "kind": "area",
        "element": "wood",
        "range": 300,
        "radius": 84,
        "damage": 165,
        "cd": 8,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "木遁·四柱牢之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.4
      },
      "ultimate": {
        "name": "木遁·范围封锁※",
        "text": "木枝在大范围交错生长，束缚杂兵1.5秒；首领仅减速。",
        "kind": "area",
        "element": "wood",
        "range": 320,
        "radius": 115,
        "damage": 380,
        "cd": 29,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "木遁·范围封锁※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.5
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。"
  },
  "zabuza": {
    "key": "zabuza",
    "family": "zabuza",
    "sprite": "v54_zabuza",
    "art": "zabuza",
    "name": "桃地再不斩",
    "officialId": "chara073",
    "attribute": "水",
    "hp": 700,
    "passive": "无声杀人术：对减速或被束缚目标造成的忍术伤害提高15%。",
    "skills": {
      "水遁·水龙弹之术": 1,
      "水遁·水牢之术": 1
    },
    "kit": {
      "passive": {
        "name": "无声杀人术",
        "text": "对减速或被束缚目标造成的忍术伤害提高15%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "水遁·水龙弹之术",
        "text": "水龙在目标处卷起，持续伤害并减速2秒。",
        "kind": "projectile",
        "element": "water",
        "range": 330,
        "radius": 82,
        "damage": 170,
        "cd": 6,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "水遁·水龙弹之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "secondary": {
        "name": "水遁·水牢之术",
        "text": "水流形成牢笼，束缚杂兵1.3秒；首领仅减速。",
        "kind": "area",
        "element": "water",
        "range": 300,
        "radius": 78,
        "damage": 140,
        "cd": 8,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "水遁·水牢之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.4
      },
      "ultimate": {
        "name": "雾隐无声连斩※",
        "text": "雾气与斩首大刀斩影连续攻击近身区域，命中减速2秒。",
        "kind": "melee",
        "element": "physical",
        "range": 125,
        "radius": 110,
        "damage": 420,
        "cd": 28,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "雾隐无声连斩※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。"
  },
  "kimimaro": {
    "key": "kimimaro",
    "family": "kimimaro",
    "sprite": "v54_kimimaro",
    "art": "kimimaro",
    "name": "君麻吕",
    "officialId": "chara120",
    "attribute": "阳",
    "hp": 800,
    "passive": "尸骨脉：自身受到的伤害降低8%。",
    "skills": {
      "柳之舞": 1,
      "椿之舞": 1
    },
    "kit": {
      "passive": {
        "name": "尸骨脉",
        "text": "自身受到的伤害降低8%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "柳之舞",
        "text": "骨刃横向连斩，持续攻击近身敌群。",
        "kind": "melee",
        "element": "bone",
        "range": 105,
        "radius": 75,
        "damage": 155,
        "cd": 5,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "柳之舞",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "椿之舞",
        "text": "骨刃前刺配合旋斩，攻击近身范围。",
        "kind": "melee",
        "element": "bone",
        "range": 115,
        "radius": 86,
        "damage": 195,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "椿之舞",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "早蕨之舞",
        "text": "多根骨刺从目标区域生长，持续造成大范围伤害。",
        "kind": "area",
        "element": "bone",
        "range": 310,
        "radius": 115,
        "damage": 410,
        "cd": 29,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "早蕨之舞",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。",
    "reduction": 0.08
  },
  "minato": {
    "key": "minato",
    "family": "minato",
    "sprite": "v54_minato",
    "art": "minato",
    "name": "波风水门",
    "officialId": "chara055",
    "attribute": "风",
    "hp": 700,
    "passive": "飞雷神标记：忍术命中留下4秒标记，后续忍术对标记目标伤害提高12%。",
    "skills": {
      "飞雷神之术": 1,
      "螺旋丸": 1
    },
    "kit": {
      "passive": {
        "name": "飞雷神标记",
        "text": "忍术命中留下4秒标记，后续忍术对标记目标伤害提高12%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "飞雷神之术",
        "text": "以飞雷神苦无和金色闪光突袭目标区域，附加标记；本版不强制改变玩家位置。",
        "kind": "area",
        "element": "space",
        "range": 260,
        "radius": 76,
        "damage": 155,
        "cd": 6,
        "duration": 1.4,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "飞雷神之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "螺旋丸",
        "text": "靠近敌人释放螺旋丸，漩涡查克拉持续攻击。",
        "kind": "melee",
        "element": "rasengan",
        "range": 100,
        "radius": 78,
        "damage": 190,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "螺旋丸",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "飞雷神连击※",
        "text": "飞雷神术式展开，多道苦无与金色斩影连续追击。",
        "kind": "area",
        "element": "space",
        "range": 320,
        "radius": 110,
        "damage": 425,
        "cd": 29,
        "duration": 2.2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "飞雷神连击※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch54": true,
    "artBatch": "0.54",
    "sourceNote": "来源像素重编排；※为游戏化组合招式。"
  },
  "guy": {
    "key": "guy",
    "family": "guy",
    "sprite": "v56_guy",
    "art": "guy",
    "name": "迈特凯",
    "officialId": "chara044",
    "attribute": "阳",
    "hp": 720,
    "passive": "体术连击：普通攻击速度提高15%。",
    "skills": {
      "木叶刚力旋风": 1,
      "动力前奏": 1
    },
    "kit": {
      "passive": {
        "name": "体术连击",
        "text": "普通攻击速度提高15%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "木叶刚力旋风",
        "text": "旋身踢击，持续攻击近身敌群。",
        "kind": "melee",
        "element": "physical",
        "range": 110,
        "radius": 78,
        "damage": 180,
        "cd": 5,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "木叶刚力旋风",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "动力前奏",
        "text": "向前连续踢击，攻击近身范围；不会强制打断玩家移动。",
        "kind": "melee",
        "element": "physical",
        "range": 115,
        "radius": 82,
        "damage": 190,
        "cd": 7,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "动力前奏",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "朝孔雀",
        "text": "高速拳击形成火焰冲击，持续攻击近身范围并附加灼烧。",
        "kind": "melee",
        "element": "fire",
        "range": 125,
        "radius": 112,
        "damage": 450,
        "cd": 29,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "朝孔雀",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "burn",
        "statusDuration": 2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "attackSpeed": 1.15
  },
  "konohamaru": {
    "key": "konohamaru",
    "family": "konohamaru",
    "sprite": "v56_konohamaru",
    "art": "konohamaru",
    "name": "猿飞木叶丸",
    "officialId": "chara053",
    "attribute": "风",
    "hp": 720,
    "passive": "影分身辅助：忍术命中有15%概率追加一次20%威力的伤害；每0.8秒最多触发一次。",
    "skills": {
      "影分身之术": 1,
      "色诱之术": 1
    },
    "kit": {
      "passive": {
        "name": "影分身辅助",
        "text": "忍术命中有15%概率追加一次20%威力的伤害；每0.8秒最多触发一次。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "影分身之术",
        "text": "召出2个独立行动的分身，持续8秒，各自寻找并攻击敌人。主控技能Lv.3起增加到3个。",
        "kind": "source_summon",
        "element": "chakra",
        "range": 300,
        "radius": 75,
        "damage": 120,
        "cd": 8,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "影分身之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "noDamage": true,
        "noEcho": true
      },
      "secondary": {
        "name": "色诱之术",
        "text": "以烟雾和幻象扰乱敌群，杂兵迷惑1.4秒；首领只减速。采用无裸露的游戏化演出。",
        "kind": "area",
        "element": "yin",
        "range": 290,
        "radius": 85,
        "damage": 125,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "色诱之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "charm",
        "statusDuration": 1.4
      },
      "ultimate": {
        "name": "螺旋丸",
        "text": "靠近敌人释放螺旋丸，查克拉漩涡持续造成范围伤害。",
        "kind": "melee",
        "element": "rasengan",
        "range": 105,
        "radius": 76,
        "damage": 390,
        "cd": 28,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "螺旋丸",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。"
  },
  "tsunade": {
    "key": "tsunade",
    "family": "tsunade",
    "sprite": "v56_tsunade",
    "art": "tsunade",
    "name": "纲手",
    "officialId": "chara050",
    "attribute": "阳",
    "hp": 800,
    "passive": "阴封印：存活时每秒恢复3点生命。",
    "skills": {
      "怪力拳※": 1,
      "通灵·蛞蝓": 1
    },
    "kit": {
      "passive": {
        "name": "阴封印",
        "text": "存活时每秒恢复3点生命。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "怪力拳※",
        "text": "怪力拳震裂地面，持续攻击近身范围。",
        "kind": "melee",
        "element": "physical",
        "range": 110,
        "radius": 84,
        "damage": 190,
        "cd": 5,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "怪力拳※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "通灵·蛞蝓",
        "text": "召出蛞蝓喷吐酸液，附加2秒中毒；同时回复附近存活队员4%最大生命。",
        "kind": "area",
        "element": "acid",
        "range": 310,
        "radius": 82,
        "damage": 150,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "通灵·蛞蝓",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "poison",
        "statusDuration": 2,
        "healTeamFraction": 0.04
      },
      "ultimate": {
        "name": "创造再生",
        "text": "解开阴封印，回复自身20%最大生命并展开医疗查克拉；不造成伤害。",
        "kind": "area",
        "element": "yang",
        "range": 310,
        "radius": 75,
        "damage": 0,
        "cd": 30,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "创造再生",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "healFraction": 0.2,
        "noDamage": true,
        "noEcho": true
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。"
  },
  "jiraiya_sage": {
    "key": "jiraiya_sage",
    "family": "jiraiya_sage",
    "sprite": "v56_jiraiya_sage",
    "art": "jiraiya_sage",
    "name": "仙人自来也",
    "officialId": "90052",
    "attribute": "火",
    "hp": 720,
    "passive": "仙术强化：自身忍术伤害提高12%。",
    "skills": {
      "仙法·毛针千本": 1,
      "仙法·五右卫门": 1
    },
    "kit": {
      "passive": {
        "name": "仙术强化",
        "text": "自身忍术伤害提高12%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "仙法·毛针千本",
        "text": "白发化作针雨，连续攻击目标区域。",
        "kind": "projectile",
        "element": "physical",
        "range": 330,
        "radius": 85,
        "damage": 165,
        "cd": 6,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "仙法·毛针千本",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "仙法·五右卫门",
        "text": "仙术火焰覆盖目标区域，持续伤害并附加灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 330,
        "radius": 110,
        "damage": 210,
        "cd": 9,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "仙法·五右卫门",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "burn",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "魔幻·蛤蟆临唱",
        "text": "肩头二大仙人发出共鸣，持续攻击并束缚杂兵1.5秒；首领只减速。",
        "kind": "area",
        "element": "yin",
        "range": 330,
        "radius": 115,
        "damage": 395,
        "cd": 30,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "魔幻·蛤蟆临唱",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.5
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "personal": 1.12
  },
  "hiruzen": {
    "key": "hiruzen",
    "family": "hiruzen",
    "sprite": "v56_hiruzen",
    "art": "hiruzen",
    "name": "猿飞日斩",
    "officialId": "chara108",
    "attribute": "火",
    "hp": 720,
    "passive": "忍术教授：自身忍术伤害提高10%。",
    "skills": {
      "火遁·火龙炎弹": 1,
      "土遁·土流壁": 1
    },
    "kit": {
      "passive": {
        "name": "忍术教授",
        "text": "自身忍术伤害提高10%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "火遁·火龙炎弹",
        "text": "喷出火龙炎弹，持续攻击目标区域并附加灼烧。",
        "kind": "area",
        "element": "fire",
        "range": 330,
        "radius": 90,
        "damage": 180,
        "cd": 6,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "火遁·火龙炎弹",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "burn",
        "statusDuration": 2
      },
      "secondary": {
        "name": "土遁·土流壁",
        "text": "土墙从地面升起，持续攻击并减速；仅为技能演出，不产生地图障碍。",
        "kind": "area",
        "element": "earth",
        "range": 300,
        "radius": 88,
        "damage": 150,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "土遁·土流壁",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "尸鬼封尽",
        "text": "死神显现并伸手封缚，持续攻击并束缚杂兵1.5秒；首领只减速，不执行秒杀。",
        "kind": "area",
        "element": "yin",
        "range": 320,
        "radius": 115,
        "damage": 445,
        "cd": 32,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "尸鬼封尽",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.5
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "personal": 1.1
  },
  "hashirama": {
    "key": "hashirama",
    "family": "hashirama",
    "sprite": "v56_hashirama",
    "art": "hashirama",
    "name": "千手柱间",
    "officialId": "chara051",
    "attribute": "土",
    "hp": 720,
    "passive": "木遁：木遁忍术伤害提高10%，控制招式附加束缚。",
    "skills": {
      "木遁·树界降诞": 1,
      "木遁·木分身": 1
    },
    "kit": {
      "passive": {
        "name": "木遁",
        "text": "木遁忍术伤害提高10%，控制招式附加束缚。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "木遁·树界降诞",
        "text": "树木从目标周围生长，持续伤害并束缚杂兵1.2秒；首领只减速。",
        "kind": "area",
        "element": "wood",
        "range": 310,
        "radius": 95,
        "damage": 180,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "木遁·树界降诞",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.2
      },
      "secondary": {
        "name": "木遁·木分身",
        "text": "召出2个独立索敌的木分身，持续8秒；主控技能Lv.3起增加到3个。",
        "kind": "source_summon",
        "element": "wood",
        "range": 300,
        "radius": 82,
        "damage": 120,
        "cd": 9,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "木遁·木分身",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "noDamage": true,
        "noEcho": true
      },
      "ultimate": {
        "name": "木遁·森林围攻※",
        "text": "多处树木交错围攻，持续伤害并束缚杂兵1.5秒；首领只减速，不产生障碍。",
        "kind": "area",
        "element": "wood",
        "range": 330,
        "radius": 120,
        "damage": 415,
        "cd": 30,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "木遁·森林围攻※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.5
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "personal": 1.1
  },
  "tobirama": {
    "key": "tobirama",
    "family": "tobirama",
    "sprite": "v56_tobirama",
    "art": "tobirama",
    "name": "千手扉间",
    "officialId": "chara107",
    "attribute": "水",
    "hp": 720,
    "passive": "水遁精通：水遁忍术伤害提高12%。",
    "skills": {
      "水遁·水阵壁": 1,
      "水遁·水龙弹之术": 1
    },
    "kit": {
      "passive": {
        "name": "水遁精通",
        "text": "水遁忍术伤害提高12%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "水遁·水阵壁",
        "text": "水阵形成屏障，持续攻击并减速，同时获得相当于自身最大生命6%的护盾，持续3秒。",
        "kind": "area",
        "element": "water",
        "range": 310,
        "radius": 85,
        "damage": 145,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "水遁·水阵壁",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2,
        "shieldFraction": 0.06
      },
      "secondary": {
        "name": "水遁·水龙弹之术",
        "text": "水龙向目标卷击，持续造成范围伤害并减速。",
        "kind": "projectile",
        "element": "water",
        "range": 330,
        "radius": 90,
        "damage": 185,
        "cd": 7,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "水遁·水龙弹之术",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "大型水遁冲击※",
        "text": "多重水流形成范围冲击，持续攻击大范围敌群并减速。",
        "kind": "area",
        "element": "water",
        "range": 340,
        "radius": 120,
        "damage": 420,
        "cd": 29,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "大型水遁冲击※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "personal": 1.12
  },
  "kankuro": {
    "key": "kankuro",
    "family": "kankuro",
    "sprite": "v56_kankuro",
    "art": "kankuro",
    "name": "勘九郎",
    "officialId": "chara064",
    "attribute": "阴",
    "hp": 720,
    "passive": "傀儡操控：傀儡辅助使自身受到伤害降低8%。",
    "skills": {
      "乌鸦·暗器※": 1,
      "黑蚁·捕获※": 1
    },
    "kit": {
      "passive": {
        "name": "傀儡操控",
        "text": "傀儡辅助使自身受到伤害降低8%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "乌鸦·暗器※",
        "text": "乌鸦傀儡伸展机关，持续攻击目标区域。",
        "kind": "area",
        "element": "puppet",
        "range": 310,
        "radius": 83,
        "damage": 165,
        "cd": 6,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "乌鸦·暗器※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "黑蚁·捕获※",
        "text": "黑蚁张开躯壳捕获，束缚杂兵1.4秒；首领只减速。",
        "kind": "area",
        "element": "puppet",
        "range": 300,
        "radius": 80,
        "damage": 150,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "黑蚁·捕获※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.4
      },
      "ultimate": {
        "name": "黑秘技·机机一发",
        "text": "黑蚁闭合躯壳，配合乌鸦机关连续切割，束缚杂兵1.5秒；首领只减速。",
        "kind": "area",
        "element": "puppet",
        "range": 330,
        "radius": 110,
        "damage": 420,
        "cd": 30,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "黑秘技·机机一发",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.5
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "reduction": 0.08
  },
  "chiyo": {
    "key": "chiyo",
    "family": "chiyo",
    "sprite": "v56_chiyo",
    "art": "chiyo",
    "name": "千代婆婆",
    "officialId": "chara067",
    "attribute": "阴",
    "hp": 720,
    "passive": "傀儡大师：傀儡忍术伤害提高15%。",
    "skills": {
      "父与母傀儡": 1,
      "傀儡机关连击※": 1
    },
    "kit": {
      "passive": {
        "name": "傀儡大师",
        "text": "傀儡忍术伤害提高15%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "父与母傀儡",
        "text": "父与母傀儡配合攻击，持续打击目标范围。",
        "kind": "area",
        "element": "puppet",
        "range": 310,
        "radius": 85,
        "damage": 160,
        "cd": 6,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "父与母傀儡",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "傀儡机关连击※",
        "text": "父母傀儡交错突刺，持续攻击较大区域。",
        "kind": "area",
        "element": "puppet",
        "range": 310,
        "radius": 92,
        "damage": 185,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "傀儡机关连击※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "白秘技·近松十人众",
        "text": "近松十人众展开围攻，十具不同的白衣傀儡持续攻击大范围敌群。",
        "kind": "area",
        "element": "puppet",
        "range": 340,
        "radius": 125,
        "damage": 425,
        "cd": 30,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "白秘技·近松十人众",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "personal": 1.15
  },
  "pain_asura": {
    "key": "pain_asura",
    "family": "pain_asura",
    "sprite": "v56_pain_asura",
    "art": "pain_asura",
    "name": "修罗道佩恩",
    "officialId": "90149",
    "attribute": "雷",
    "hp": 800,
    "passive": "机械改造：机械护甲使自身受到伤害降低10%。",
    "skills": {
      "怪腕火箭弹": 1,
      "机械臂突袭※": 1
    },
    "kit": {
      "passive": {
        "name": "机械改造",
        "text": "机械护甲使自身受到伤害降低10%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "怪腕火箭弹",
        "text": "多枚怪腕火箭弹飞向目标，持续造成范围伤害。",
        "kind": "projectile",
        "element": "mechanical",
        "range": 330,
        "radius": 85,
        "damage": 170,
        "cd": 6,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "怪腕火箭弹",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "机械臂突袭※",
        "text": "伸出分节机械臂并以铁拳突袭，攻击近身范围。",
        "kind": "melee",
        "element": "mechanical",
        "range": 110,
        "radius": 85,
        "damage": 190,
        "cd": 7,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "机械臂突袭※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "机械炮齐射※",
        "text": "多路机械炮束持续扫射目标区域；窄束演出保留地面预警可见性。",
        "kind": "area",
        "element": "lightning",
        "range": 340,
        "radius": 115,
        "damage": 430,
        "cd": 29,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "机械炮齐射※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "reduction": 0.1
  },
  "pain_animal": {
    "key": "pain_animal",
    "family": "pain_animal",
    "sprite": "v56_pain_animal",
    "art": "pain_animal",
    "name": "畜生道佩恩",
    "officialId": "90154",
    "attribute": "阳",
    "hp": 720,
    "passive": "通灵协同：自身通灵忍术伤害提高12%。",
    "skills": {
      "通灵·增殖地狱犬": 1,
      "通灵·八咫鸟": 1
    },
    "kit": {
      "passive": {
        "name": "通灵协同",
        "text": "自身通灵忍术伤害提高12%。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "通灵·增殖地狱犬",
        "text": "增殖地狱犬向目标扑击，攻击中分裂出额外犬影，持续造成范围伤害。",
        "kind": "area",
        "element": "summon",
        "range": 310,
        "radius": 90,
        "damage": 175,
        "cd": 7,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "通灵·增殖地狱犬",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "通灵·八咫鸟",
        "text": "八咫鸟从上方掠过目标，持续打击范围内敌人。",
        "kind": "area",
        "element": "summon",
        "range": 330,
        "radius": 95,
        "damage": 195,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "通灵·八咫鸟",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "ultimate": {
        "name": "多通灵兽齐攻※",
        "text": "增殖犬、犀牛与八咫鸟共同攻击，持续造成大范围伤害。",
        "kind": "area",
        "element": "summon",
        "range": 340,
        "radius": 125,
        "damage": 440,
        "cd": 30,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "多通灵兽齐攻※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "personal": 1.12
  },
  "killerbee_eight_tail": {
    "key": "killerbee_eight_tail",
    "family": "killerbee_eight_tail",
    "sprite": "v56_killerbee_eight_tail",
    "art": "killerbee_eight_tail",
    "name": "完全八尾化奇拉比",
    "officialId": "gyuki",
    "attribute": "阳",
    "hp": 1100,
    "passive": "八尾之躯：基础生命1100，触手技能拥有较大的作用范围。",
    "skills": {
      "触手横扫※": 1,
      "触手缠绕※": 1
    },
    "kit": {
      "passive": {
        "name": "八尾之躯",
        "text": "基础生命1100，触手技能拥有较大的作用范围。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "触手横扫※",
        "text": "触手横扫，持续攻击近身较大范围。",
        "kind": "melee",
        "element": "physical",
        "range": 135,
        "radius": 110,
        "damage": 195,
        "cd": 6,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "触手横扫※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      },
      "secondary": {
        "name": "触手缠绕※",
        "text": "双触手夹击目标区域，束缚杂兵1.4秒；首领只减速。",
        "kind": "area",
        "element": "physical",
        "range": 310,
        "radius": 110,
        "damage": 205,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "触手缠绕※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.4
      },
      "ultimate": {
        "name": "尾兽玉",
        "text": "黑色查克拉球短暂汇聚后爆发，持续造成大范围伤害。",
        "kind": "area",
        "element": "chakra",
        "range": 350,
        "radius": 130,
        "damage": 470,
        "cd": 31,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "尾兽玉",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        }
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。",
    "movement": 0.92
  },
  "yugito": {
    "key": "yugito",
    "family": "yugito",
    "sprite": "v56_yugito",
    "art": "yugito",
    "name": "二位由木人",
    "officialId": "chara100",
    "attribute": "火",
    "hp": 720,
    "passive": "二尾查克拉：忍术命中附加2秒灼烧。",
    "skills": {
      "火焰爪击※": 1,
      "鼠尾球玉": 1
    },
    "kit": {
      "passive": {
        "name": "二尾查克拉",
        "text": "忍术命中附加2秒灼烧。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "火焰爪击※",
        "text": "蓝焰包裹爪击，持续攻击近身区域并灼烧。",
        "kind": "melee",
        "element": "fire",
        "range": 110,
        "radius": 80,
        "damage": 175,
        "cd": 5,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "火焰爪击※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "burn",
        "statusDuration": 2
      },
      "secondary": {
        "name": "鼠尾球玉",
        "text": "发射带长尾轨迹的蓝焰球，持续攻击目标区域并灼烧。",
        "kind": "projectile",
        "element": "fire",
        "range": 330,
        "radius": 85,
        "damage": 185,
        "cd": 7,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "鼠尾球玉",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "burn",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "二尾化冲击※",
        "text": "短暂以二尾之形扑击，持续攻击近身范围并灼烧；结束后恢复人形，可移动施放。",
        "kind": "melee",
        "element": "fire",
        "range": 135,
        "radius": 118,
        "damage": 435,
        "cd": 29,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "二尾化冲击※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "burn",
        "statusDuration": 2
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。"
  },
  "haku": {
    "key": "haku",
    "family": "haku",
    "sprite": "v56_haku",
    "art": "haku",
    "name": "白",
    "officialId": "chara074",
    "attribute": "水",
    "hp": 720,
    "passive": "冰遁：冰遁技能附加减速；奥义可束缚杂兵，首领只减速。",
    "skills": {
      "千杀水翔": 1,
      "冰镜穿梭※": 1
    },
    "kit": {
      "passive": {
        "name": "冰遁",
        "text": "冰遁技能附加减速；奥义可束缚杂兵，首领只减速。",
        "effects": {},
        "nameReview": {
          "status": "original",
          "note": "第一阶段被动的游戏化实现。"
        }
      },
      "primary": {
        "name": "千杀水翔",
        "text": "冰针成扇形连续射出，持续攻击目标区域并减速。",
        "kind": "projectile",
        "element": "ice",
        "range": 330,
        "radius": 85,
        "damage": 165,
        "cd": 6,
        "duration": 1.8,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "千杀水翔",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "secondary": {
        "name": "冰镜穿梭※",
        "text": "两面冰镜间的身影穿梭，持续伤害并减速。",
        "kind": "area",
        "element": "ice",
        "range": 320,
        "radius": 95,
        "damage": 175,
        "cd": 8,
        "duration": 2,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "game_adaptation",
          "referenceName": "冰镜穿梭※",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "slow",
        "statusDuration": 2
      },
      "ultimate": {
        "name": "秘术·魔镜冰晶",
        "text": "多面冰镜围成环阵，冰针向中心交错攻击，束缚杂兵1.5秒；首领只减速。",
        "kind": "area",
        "element": "ice",
        "range": 340,
        "radius": 125,
        "damage": 415,
        "cd": 30,
        "duration": 2.6,
        "damageMode": "hit",
        "autoCast": true,
        "requiresEnemy": true,
        "target": "nearest",
        "upgradable": "main_only",
        "visualComplete": true,
        "nameReview": {
          "status": "adapted",
          "referenceName": "秘术·魔镜冰晶",
          "note": "用户第一阶段方案；来源像素重排为俯视玩法，采样帧不等于独立原画。",
          "fullAnimationVerified": true
        },
        "status": "root",
        "statusDuration": 1.5
      }
    },
    "roles": {
      "main": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "upgradable": [
          "passive",
          "primary",
          "secondary",
          "ultimate"
        ]
      },
      "support": {
        "autoCast": [
          "primary",
          "secondary",
          "ultimate"
        ],
        "skillLevel": 1,
        "upgradeable": false,
        "syncCharacterLevel": true,
        "reviveSeconds": 5
      }
    },
    "visualComplete": true,
    "releaseComplete": true,
    "batch56": true,
    "artBatch": "0.56",
    "sourceNote": "原素材与标注的补绘像素混合制作；技能演出适配俯视玩法，※为游戏化组合。"
  }
};
