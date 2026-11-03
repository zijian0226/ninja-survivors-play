/* 敌人与BOSS配置 */
window.GameData = window.GameData || {};

GameData.enemies = {
  rogue:    { name: '流浪忍者', sprite: 'rogue',    hp: 12, speed: 28, dmg: 4,  r: 5, xp: 1, from: 0,   weight: 10 },
  wolf:     { name: '忍犬',     sprite: 'wolf',     hp: 8,  speed: 47, dmg: 3,  r: 5, xp: 1, from: 40,  weight: 6 },
  bandit:   { name: '山贼',     sprite: 'bandit',   hp: 38, speed: 20, dmg: 7, r: 7, xp: 3, from: 90,  weight: 4 },
  assassin: { name: '雾隐刺客', sprite: 'assassin', hp: 18, speed: 30, dmg: 4,  r: 5, xp: 2, from: 150, weight: 3, ranged: true },
  puppet:   { name: '傀儡',     sprite: 'puppet',   hp: 65, speed: 34, dmg: 9, r: 6, xp: 5, from: 240, weight: 3 }
};

GameData.bosses = [
  { time: 180, name: '叛忍·赤炎',   hp: 900,  speed: 26, dmg: 18, palette: { C:'#2a1a2e', F:'#d02828', H:'#3a2a40', S:'#e8c8a8', E:'#ffdd33', M:'#8890a0', K:'#111118' } },
  { time: 360, name: '蛇影之主',   hp: 2600, speed: 28, dmg: 24, palette: { C:'#2c3a2a', F:'#9ad040', H:'#d8d8e8', S:'#e8e0f0', E:'#ffe040', M:'#7a6aa0', K:'#141a12' } },
  { time: 540, name: '傀儡师·千手', hp: 5600, speed: 30, dmg: 30, palette: { C:'#1e2440', F:'#ff7a2a', H:'#c03030', S:'#f0d0b0', E:'#40e0ff', M:'#a0a8c0', K:'#0e1020' } }
];

GameData.battle = {
  duration: 600,        // 存活10分钟即胜利
  swarmEvery: 60,       // 每60秒一次包围潮
  maxEnemies: 280,
  /* ---- 以下为从 game.js 原样迁出的数值（纯搬迁，数值未改；见 docs/design.md 11.7 P0-2） ---- */
  xpCurve: { a: 3, b: 2.5, p: 1.45 },                               // xpFor(lv) = floor(a + b·lv + lv^p)
  growth: { hpLin: 0.3, hpQuad: 0.03, dmgLin: 0.08, speedMin: 0.88, speedMax: 1.12 },   // hpMul = 1 + hpLin·tm + hpQuad·tm²；dmgMul = 1 + dmgLin·tm（tm 为分钟）
  spawn: { tick: 0.5, base: 22, perSec: 0.48, maxPerTick: 10, fillDiv: 3, radiusPad: 14, radiusRand: 20,
           fade: { type: 'rogue', div: 40, minWeight: 3 },        // 流浪忍者权重随时间衰减：max(minWeight, weight − t / div)
           farMul: 0.85, teleportPad: 10 },                        // 距离 > 对角线×farMul 的普通怪传送到主角前方
  swarm: { first: 90, base: 16, perMin: 3, gapRad: 1.8, radiusPad: 10, recycleFarthest: true,   // 间隔沿用 swarmEvery；recycleFarthest：超上限时先回收最远普通怪
           types: [ { until: 300, type: 'wolf' }, { until: 1e9, type: 'bandit' } ] },              // 数量 = base + perMin·floor(t/60)；t ≤ until 取该类型
  boss: { r: 13, xp: 60, firstWalk: 3, charge: 0.7, dash: 0.55, dashMul: 5, walkMin: 2.5, walkMax: 4, kbMul: 0.05, chestGems: 12, chestGemXp: 10 },
  ranged: { flee: 70, strafe: 95, shootRange: 150, shootCd: 2.6, bulletSpeed: 75, bulletLife: 3 },
  player: { speed: 52, pickup: 28, crit: 0.05 },                     // 基础移速（像素/秒）、基础拾取半径、默认暴击率
  playerInv: 0.5,                                                    // 受击后无敌秒数
  starBonus: 0.06,                                                   // 星级系数 = 1 + starBonus × (星级 − 1)
  critMul: 1.7, dmgRand: [0.9, 1.1],
  revive: { hpPct: 0.6, inv: 2, radius: 90, dmg: 200 },
  drops: { coinChance: 0.035, ramenChance: 0.006, magnetChance: 0.0025, gemMerge: 260,
           coinMin: 2, coinMax: 5, ramenHeal: 30, chestCoins: 30, chestFallbackCoins: 50 },
  levelupFallback: { heal: 40, coins: 30 },
  settle: { coinPerKill: 0.5, coinPerMin: 20, winCoins: 300, gouyuPerMin: 10, gouyuPerBoss: 30, winGouyu: 120 },
  /* ---- 性能档位（docs/design.md 12.2）：cap = 同屏敌人硬上限 maxEnemies（包围潮/BOSS 生成前回收最远普通怪以保证不超）；
   *      projs/effects/parts/nums/gems = 投射物/特效/粒子/伤害数字/宝石上限（宝石超出后新经验并入已有宝石）；
   *      sepEveryFrames = 敌人互斥分离每 N 帧算一次；shadows = 是否画脚下阴影；fxDensity = 粒子生成密度倍率 ---- */
  perfTiers: {
    low:  { cap: 350, projs: 300, effects: 120, parts: 200, nums: 30, gems: 200, sepEveryFrames: 2, shadows: false, fxDensity: 0.5 },
    mid:  { cap: 550, projs: 500, effects: 200, parts: 300, nums: 50, gems: 260, sepEveryFrames: 1, shadows: true,  fxDensity: 0.75 },
    high: { cap: 800, projs: 700, effects: 260, parts: 400, nums: 80, gems: 320, sepEveryFrames: 1, shadows: true,  fxDensity: 1 }
  },
  // 自动档位：3s 窗口平均 fps 连续 2 个窗口 < 50 → 降一档；连续 20s fps ≥ 58 且每帧 update+render < 8ms → 升一档（每局最多 1 次，与上次切换间隔 ≥ 60s）
  autoTier: { downFps: 50, downWindowSec: 3, downConsecutive: 2, upFps: 58, upWorkMs: 8, upWindowSec: 20,
              minSecBetween: 60, maxUpsPerRun: 1, cullPerSec: 40 },
  numMergeSec: 0.2,     // 同一敌人 0.2s 内的伤害数字合并为一条
  sepMaxNeighbors: 6    // 互斥分离每只敌人最多处理的邻居数
};
