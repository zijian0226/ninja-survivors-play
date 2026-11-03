/* 忍术（武器）与被动道具配置 */
window.GameData = window.GameData || {};

GameData.weapons = {
  shuriken: {
    name: '手里剑', icon: 'shuriken', color: '#9fb4c8',
    desc: ['向最近的敌人投掷手里剑', '数量+1', '穿透+1，伤害提升', '数量+1', '数量+1，伤害与冷却大幅提升'],
    levels: [
      { cd: 1.1, dmg: 9,  count: 1, pierce: 1 },
      { cd: 1.05, dmg: 10, count: 2, pierce: 1 },
      { cd: 1.0, dmg: 12, count: 2, pierce: 2 },
      { cd: 0.95, dmg: 13, count: 3, pierce: 2 },
      { cd: 0.8, dmg: 16, count: 4, pierce: 3 }
    ]
  },
  kunai: {
    name: '苦无·扇射', icon: 'kunai', color: '#c8ccd8',
    desc: ['朝移动方向扇形投掷苦无', '伤害提升，穿透+1', '数量+2', '伤害提升，穿透+1', '数量+2，冷却缩短'],
    levels: [
      { cd: 1.4, dmg: 7,  count: 3, pierce: 1 },
      { cd: 1.3, dmg: 9,  count: 3, pierce: 2 },
      { cd: 1.2, dmg: 9,  count: 5, pierce: 2 },
      { cd: 1.1, dmg: 11, count: 5, pierce: 3 },
      { cd: 0.9, dmg: 13, count: 7, pierce: 3 }
    ]
  },
  rasengan: {
    name: '螺旋丸', icon: 'rasengan', color: '#5ac8ff',
    desc: ['两颗螺旋丸环绕自身旋转', '伤害与半径提升', '数量+1', '伤害与半径提升', '数量+1，转速提升'],
    levels: [
      { count: 2, dmg: 11, radius: 26, speed: 3.4 },
      { count: 2, dmg: 14, radius: 28, speed: 3.6 },
      { count: 3, dmg: 16, radius: 31, speed: 3.8 },
      { count: 3, dmg: 20, radius: 34, speed: 4.0 },
      { count: 4, dmg: 24, radius: 37, speed: 4.3 }
    ]
  },
  chidori: {
    name: '千鸟', icon: 'chidori', color: '#9fe8ff',
    desc: ['雷光贯穿直线上的敌人并短距冲刺', '伤害与距离提升', '雷电额外连锁1个敌人', '伤害与距离提升', '连锁+1，冷却缩短'],
    levels: [
      { cd: 2.6, dmg: 22, len: 80,  width: 8,  chain: 0 },
      { cd: 2.4, dmg: 27, len: 90,  width: 9,  chain: 0 },
      { cd: 2.2, dmg: 32, len: 100, width: 10, chain: 1 },
      { cd: 2.0, dmg: 38, len: 110, width: 11, chain: 1 },
      { cd: 1.7, dmg: 46, len: 125, width: 12, chain: 2 }
    ]
  },
  katon: {
    name: '火遁·豪火球', icon: 'katon', color: '#ff7a2a',
    desc: ['向敌人喷射火球，命中后爆炸', '爆炸范围提升', '火球数量+1', '伤害与范围提升', '火球数量+1'],
    levels: [
      { cd: 2.3, dmg: 16, radius: 20, count: 1 },
      { cd: 2.2, dmg: 19, radius: 25, count: 1 },
      { cd: 2.1, dmg: 21, radius: 26, count: 2 },
      { cd: 1.9, dmg: 27, radius: 31, count: 2 },
      { cd: 1.7, dmg: 32, radius: 34, count: 3 }
    ]
  },
  clone: {
    name: '影分身之术', icon: 'clone', color: '#ffb347',
    desc: ['召唤一个影分身协同投掷手里剑', '投掷更快、伤害提升', '分身数量+1', '投掷更快、伤害提升', '分身数量+1'],
    levels: [
      { count: 1, cd: 1.1, dmg: 7 },
      { count: 1, cd: 0.9, dmg: 9 },
      { count: 2, cd: 0.9, dmg: 10 },
      { count: 2, cd: 0.75, dmg: 12 },
      { count: 3, cd: 0.65, dmg: 14 }
    ]
  },
  sakura: {
    name: '樱花冲', icon: 'sakura', color: '#ff8ac0', knockback: 150,   // knockback：击退速度
    desc: ['震地冲拳击退周围敌人并恢复HP', '范围与伤害提升', '冷却缩短，回复提升', '范围与伤害提升', '冲击更强、冷却缩短'],
    levels: [
      { cd: 3.0, dmg: 18, radius: 32, heal: 2 },
      { cd: 2.8, dmg: 22, radius: 37, heal: 2 },
      { cd: 2.5, dmg: 26, radius: 40, heal: 3 },
      { cd: 2.3, dmg: 32, radius: 45, heal: 3 },
      { cd: 2.0, dmg: 40, radius: 52, heal: 4 }
    ]
  },
  /* ===== 进化忍术 ===== */
  rasenshuriken: {
    name: '风遁·螺旋手里剑', icon: 'rsk', color: '#bff3ff', evolved: true,
    desc: ['【进化】环绕螺旋丸×4，并周期性投出贯穿一切的巨型螺旋手里剑'],
    levels: [ { count: 4, dmg: 26, radius: 38, speed: 4.3, cd: 2.2, bigDmg: 34, boom: 42 } ]
  },
  kirin: {
    name: '麒麟', icon: 'kirin', color: '#e6f7ff', evolved: true,
    desc: ['【进化】召唤天雷，同时轰击屏幕内多个敌人'],
    levels: [ { cd: 3.0, dmg: 65, strikes: 8, radius: 22 } ]
  }
};

GameData.passives = {
  sandals:   { name: '疾风草鞋', icon: 'sandals',   desc: '移动速度 +10%', per: 0.1 },
  pill:      { name: '兵粮丸',   icon: 'pill',      desc: '最大HP +20', per: 20 },
  chakra:    { name: '查克拉卷轴', icon: 'chakra',  desc: '忍术冷却 -8%', per: 0.08 },
  wind:      { name: '风之卷轴', icon: 'wind',      desc: '忍术范围 +10%', per: 0.1 },
  whetstone: { name: '磨刀石',   icon: 'whetstone', desc: '伤害 +10%', per: 0.1 },
  magnet:    { name: '通灵磁石', icon: 'magnet',    desc: '拾取范围 +30%', per: 0.3 }
};
GameData.passiveMax = 5;
GameData.maxWeapons = 6;
GameData.maxPassives = 6;

/* 进化配方：武器满级(Lv5) + 持有对应被动 */
GameData.evolutions = [
  { weapon: 'rasengan', passive: 'wind',   result: 'rasenshuriken' },
  { weapon: 'chidori',  passive: 'chakra', result: 'kirin' }
];
