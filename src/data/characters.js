/* =========================================================
 * 角色配置（可替换）
 * 所有角色名称 / 称号 / 配色 / 数值都集中在此文件。
 * 想换成原创角色：只需修改 name/fullName/title/desc/palette。
 * sprite 字段指向 src/art/pixelArt.js 里的像素模板。
 * 注意：本项目为粉丝向原型，所有美术均为程序生成的原创像素画。
 * ========================================================= */
window.GameData = window.GameData || {};

GameData.characters = [
  {
    id: 'naruto',
    name: '鸣人',
    fullName: '漩涡 鸣人',
    title: '意外性No.1的忍者',
    rarity: 'SR',
    element: '风',
    color: '#ff8a1f', color2: '#ffd23a',
    unlocked: true,               // 初始解锁
    sprite: 'naruto',
    stats: { hp: 120, speed: 1.0, might: 1.0, cd: 1.0, area: 1.0, regen: 0, crit: 0.05 },
    startSkill: 'rasengan',
    trait: { id: 'kyuubi', name: '尾兽查克拉', desc: 'HP低于30%时，伤害+30%', hpTh: 0.3, mightMul: 1.3 },
    desc: '永不放弃的橙色忍者，擅长螺旋丸与影分身。',
    palette: { H:'#ffd23a', B:'#26357a', M:'#cfd8e6', S:'#ffd2a8', s:'#b0704a', E:'#3a7bff', e:'#0b1c4a',
               O:'#ff8a1f', W:'#fff3d6', D:'#22222e', P:'#ff8a1f', K:'#2a3a8a', R:'#22222e' }
  },
  {
    id: 'sasuke',
    name: '佐助',
    fullName: '宇智波 佐助',
    title: '复仇的雷光',
    rarity: 'SSR',
    element: '雷',
    color: '#5b5bd6', color2: '#c01818',
    unlocked: false,
    sprite: 'sasuke',
    stats: { hp: 95, speed: 1.1, might: 1.15, cd: 1.0, area: 1.0, regen: 0, crit: 0.15 },
    startSkill: 'chidori',
    trait: { id: 'sharingan', name: '写轮之瞳', desc: '暴击率+10%，伤害+15%' },
    desc: '冷静的天才忍者，以千鸟和火遁见长。',
    palette: { H:'#1b1f3a', B:'#2a2a4a', M:'#cfd8e6', S:'#f7d2b0', s:'#c9967a', E:'#d01818', e:'#2a0000',
               O:'#2f3c72', W:'#e8e8f0', D:'#1b1f3a', P:'#2a2f4a', K:'#444466', R:'#7a3ab0' }
  },
  {
    id: 'sakura',
    name: '小樱',
    fullName: '春野 樱',
    title: '百豪的怪力医忍',
    rarity: 'SR',
    element: '土',
    color: '#ff6fa8', color2: '#ffc2dc',
    unlocked: false,
    sprite: 'sakura',
    stats: { hp: 140, speed: 0.95, might: 1.05, cd: 1.0, area: 1.1, regen: 0.5, crit: 0.05 },
    startSkill: 'sakura',
    trait: { id: 'byakugou', name: '百豪之印', desc: '每秒恢复0.5点HP，樱花冲额外回血', healBonus: 2 },
    desc: '近战怪力与医疗忍术兼备，生存能力极强。',
    palette: { H:'#ff9ec8', B:'#c81e3a', M:'#cfd8e6', S:'#ffe0c8', s:'#d8a890', E:'#2fb070', e:'#0a3020',
               O:'#d8203a', W:'#ffffff', D:'#22222e', P:'#3a3a4a', K:'#2a2a40', R:'#f0f0f0' }
  },
  {
    id: 'kakashi',
    name: '卡卡西',
    fullName: '旗木 卡卡西',
    title: '拷贝忍者',
    rarity: 'SSR',
    element: '雷',
    color: '#4a7a3a', color2: '#d8dde8',
    unlocked: false,
    sprite: 'kakashi',
    stats: { hp: 105, speed: 1.05, might: 1.05, cd: 0.9, area: 1.0, regen: 0, crit: 0.08 },
    startSkill: 'kunai',
    trait: { id: 'copy', name: '拷贝忍术', desc: '开局额外随机获得一个忍术，冷却-10%' },
    desc: '经验丰富的上忍，开局即可掌握两种忍术。',
    palette: { H:'#d8dde8', B:'#2a2a4a', M:'#cfd8e6', S:'#f0d0b0', s:'#c0a080', E:'#2a2a2a', e:'#b01010',
               O:'#4a7a3a', W:'#36602c', D:'#23283a', P:'#23283a', K:'#1a1e2c', R:'#23283a' }
  }
];

GameData.charById = {};
GameData.characters.forEach(c => GameData.charById[c.id] = c);
