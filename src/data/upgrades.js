/* 局外永久强化 & 召唤配置 */
window.GameData = window.GameData || {};

GameData.metaUpgrades = [
  { id: 'hp',     name: '体魄修炼',   desc: '最大HP +10',     max: 10, base: 100, grow: 1.45, icon: 'pill',      per: 10 },
  { id: 'atk',    name: '忍术精进',   desc: '伤害 +5%',       max: 10, base: 150, grow: 1.5,  icon: 'whetstone', per: 0.05 },
  { id: 'spd',    name: '瞬身术',     desc: '移动速度 +3%',   max: 5,  base: 120, grow: 1.6,  icon: 'sandals',   per: 0.03 },
  { id: 'cd',     name: '查克拉控制', desc: '冷却 -3%',       max: 5,  base: 200, grow: 1.6,  icon: 'chakra',    per: 0.03 },
  { id: 'magnet', name: '感知术',     desc: '拾取范围 +10%',  max: 5,  base: 80,  grow: 1.5,  icon: 'magnet',    per: 0.1 },
  { id: 'xp',     name: '修行之道',   desc: '经验获取 +5%',   max: 5,  base: 150, grow: 1.6,  icon: 'wind',      per: 0.05 },
  { id: 'coin',   name: '招财术',     desc: '金币获取 +10%',  max: 5,  base: 200, grow: 1.6,  icon: 'coin',      per: 0.1 },
  { id: 'revive', name: '不屈之志',   desc: '战斗中倒下时复活一次', max: 1, base: 2000, grow: 1, icon: 'ramen', per: 1 }
];
// per：每级效果（hp 为 +HP；atk/spd/magnet/xp/coin 为 +比例；cd 为 −比例；revive 为复活次数），由 game.js recalc() 读取
GameData.upgradeCost = (u, lv) => Math.round(u.base * Math.pow(u.grow, lv) / 10) * 10;

GameData.gacha = {
  bannerName: '限定召唤 · 宿命之瞳',
  cost1: 100, cost10: 900,          // 勾玉（仅游戏内货币，无真实付费）
  rates: { SSR: 0.03, SR: 0.12, R: 0.85 },
  pity: 60,                          // 60抽必出SSR
  featured: ['sasuke', 'kakashi'],
  rItems: [
    { id: 'kit',    name: '忍具包',   icon: 'shuriken', coins: 120 },
    { id: 'pouch',  name: '金币袋',   icon: 'coin',     coins: 200 },
    { id: 'scroll', name: '修行卷轴', icon: 'chakra',   coins: 150 }
  ],
  srItem: { id: 'shard', name: '勾玉结晶', icon: 'magatama', gouyu: 40 },
  maxStars: 5,
  dupMaxCoins: 1500
};
