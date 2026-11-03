/* =========================================================
 * 原创像素画模板（字符矩阵）。'.' = 透明，其余字符映射到调色板。
 * 描边由 sprites.js 自动生成。
 * ========================================================= */
window.PixelArt = {};

PixelArt.legs = {
  A: ['...PPPPPPPPPP...', '...PPPP..PPPP...', '...PPPP..PPPP...', '...KKKK..KKKK...'],
  B: ['...PPPPPPPPPP...', '...PPPP..PPPP...', '...KKKK..PPPP...', '..........KKKK..'],
  C: ['...PPPPPPPPPP...', '...PPPP..PPPP...', '...PPPP..KKKK...', '..KKKK..........']
};

PixelArt.heroes = {
  naruto: [
    '..H..H...H..H...',
    '..HH.HH.HH.HH...',
    '.HHHHHHHHHHHHH..',
    '..HHHHHHHHHHHH..',
    '.HHBBMMMMMMBBHH.',
    '..HSSSSSSSSSSH..',
    '..HSEESSSSEESH..',
    '..SSEeSSSSEeSS..',
    '...SsSSSSSSsS...',
    '....SSSSSSSS....',
    '...DDOOWWOODD...',
    '..SDOOOWWOOODS..',
    '..SOOOOWWOOOOS..',
    '..S.OOOWWOOO.S..',
    '...RRRRRRRRRR...'
  ],
  sasuke: [
    '....HHH..HHH....',
    '...HHHHHHHHHH...',
    '..HHHHHHHHHHHH..',
    '.HHHHHHHHHHHHHH.',
    '.HHBBMMMMMMBBHH.',
    '..HSSHSSSSHSSH..',
    '..HSEESSSSEESH..',
    '..HSEeSSSSEeSH..',
    '...SSSSSSSSSS...',
    '....SSSSSSSS....',
    '...OOWWWWWWOO...',
    '..SOOWOOOOWOOS..',
    '..SOOOOOOOOOOS..',
    '..S.OOOOOOOO.S..',
    '...RRRRRRRRRR...'
  ],
  sakura: [
    '....HHHHHHHH....',
    '...HHHHHHHHHH...',
    '..HHHHHHHHHHHH..',
    '..HBBMMMMMMBBH..',
    '..HHSSSSSSSSHH..',
    '..HSEESSSSEESH..',
    '..HSEeSSSSEeSH..',
    '..HSSSSSSSSSSH..',
    '..HHSSSSSSSSHH..',
    '..HH.SSSSSS.HH..',
    '..HHOOOWWOOOHH..',
    '..SOOOOOOOOOOS..',
    '..SOOOOOOOOOOS..',
    '..S.OOOOOOOO.S..',
    '...RRRRRRRRRR...'
  ],
  kakashi: [
    '........HH.HH...',
    '....HHHHHHHHHH..',
    '...HHHHHHHHHHHH.',
    '..HHHHHHHHHHHHH.',
    '..HMMMMMMBBBBH..',
    '..HMMMMSSSSSSH..',
    '..HMMMMSSSEESH..',
    '..HDDDDDDDEeDH..',
    '...DDDDDDDDDD...',
    '....DDDDDDDD....',
    '...OOWWOOWWOO...',
    '..DOOWWOOWWOOD..',
    '..DOOOOOOOOOOD..',
    '..D.OOOOOOOO.D..',
    '...RRRRRRRRRR...'
  ]
};

/* 人形敌人：上半身 + 通用腿 */
PixelArt.enemyBodies = {
  rogue: [
    '....GGGGGGGG....',
    '...GGGGGGGGGG...',
    '..GGGMMMMMMGGG..',
    '..GGSSSSSSSSGG..',
    '..GGSEESSEESGG..',
    '..GGOOOOOOOOGG..',
    '...GOOOOOOOOG...',
    '....OOOOOOOO....',
    '...CCCCCCCCCC...',
    '..SCCCCCCCCCCS..',
    '..SCCCCCCCCCCS..',
    '..S.CCCCCCCC.S..',
    '...RRRRRRRRRR...'
  ],
  bandit: [
    '....hhhhhhhh....',
    '...hhhhhhhhhh...',
    '..hhhSSSSSShhh..',
    '..hSSSSSSSSSSh..',
    '..SSEESSSSEESS..',
    '..SSSSSSSSSSSS..',
    '..SBBBBBBBBBBS..',
    '...BBBBBBBBBB...',
    '.CCCCCCCCCCCCCC.',
    'SCCCCCCCCCCCCCCS',
    'SCCCCWWWWWWCCCCS',
    'S.CCCCCCCCCCCC.S',
    '..RRRRRRRRRRRR..'
  ],
  puppet: [
    '....WWWWWWWW....',
    '...WWWWWWWWWW...',
    '...WEEWWWWEEW...',
    '...WWWWRRWWWW...',
    '...WWRRRRRRWW...',
    '....WWWWWWWW....',
    '......JJJJ......',
    '..CCCCCCCCCCCC..',
    '.WJCCCCCCCCCCJW.',
    '.W.CCCCCCCCCC.W.',
    '.W.CCCCCCCCCC.W.',
    '...JJJJJJJJJJ...'
  ]
};
PixelArt.enemyBodies.assassin = PixelArt.enemyBodies.rogue;

PixelArt.enemyPalettes = {
  rogue:    { G:'#5a5f6e', M:'#9aa0aa', S:'#e0b890', E:'#ff3030', O:'#1a1a22', C:'#3c4150', R:'#7a2020', P:'#2a2d38', K:'#1a1a22' },
  assassin: { G:'#6a8fb0', M:'#c0d0e0', S:'#e0c8b0', E:'#202040', O:'#e8eef5', C:'#3a5a80', R:'#2a3a5a', P:'#2a3a50', K:'#1a2030' },
  bandit:   { h:'#b02a2a', S:'#d8a070', E:'#201010', B:'#5a3a20', C:'#7a5a3a', W:'#a08060', R:'#3a2a1a', P:'#4a3a2a', K:'#2a1a10' },
  puppet:   { W:'#c89a5a', E:'#2a1a10', R:'#c02030', J:'#6a4a2a', C:'#6a3a8a', P:'#8a6a3a', K:'#5a3a1a' },
  wolf:     { D:'#6a6a7a', L:'#b8b8c8', E:'#ff4040', N:'#111111', K:'#3a3a4a' }
};

PixelArt.wolf = {
  top: [
    '...........D.D..',
    '..........DDDD..',
    'D........DDEDDN.',
    '.D.....DDDDDDDD.',
    '..DDDDDDDDDDDD..',
    '..DDLLLLLLLLDD..',
    '..DDDDDDDDDDD...'
  ],
  legsA: ['..D.D....D.D....', '..D.D....D.D....', '..K.K....K.K....'],
  legsB: ['..D..D...D..D...', '.D....D.D....D..', '.K....K.K....K..']
};

PixelArt.boss = {
  top: [
    '......HHHHHHHH......',
    '.....HHHHHHHHHH.....',
    '....HHHHHHHHHHHH....',
    '....HHMMMMMMMMHH....',
    '....HSSSSSSSSSSH....',
    '....HSEESSSSEESH....',
    '....HSSSSSSSSSSH....',
    '...CCCSSSSSSSSCCC...',
    '..CCCCCCSSSSCCCCCC..',
    '.CCCCCCCCCCCCCCCCCC.',
    '.CCFCCCCCCCCCCCFCCC.',
    'CCFFFCCCCCCCCCCFFFCC',
    'CCCFCCCCCCCCCCCCFCCC',
    'CCCCCCCCCCCCCCCCCCCC',
    'SCCCCCCCCCCCCCCCCCCS',
    'SCCCCCCFCCCCCCCCCCCS',
    '.CCCCCFFFCCCCCCCCCC.',
    '.CCCCCCFCCCCCCCCCCC.',
    '.CCCCCCCCCCCCCCCCCC.',
    '..CCCCCCCCCCCCCCCC..',
    '..CCCCCCCC.CCCCCCC..'
  ],
  legsA: ['...KKKK......KKKK...'],
  legsB: ['..KKKK........KKKK..']
};

/* 小物件 */
PixelArt.items = {
  shuriken0: { pal: { M:'#c8d0dc', D:'#4a5060' }, rows: ['...M...', '...M...', '..MDM..', 'MMD.DMM', '..MDM..', '...M...', '...M...'] },
  shuriken1: { pal: { M:'#c8d0dc', D:'#4a5060' }, rows: ['M.....M', '.M...M.', '..MDM..', '..D.D..', '..MDM..', '.M...M.', 'M.....M'] },
  kunai:     { pal: { M:'#dfe4ee', D:'#3a3f50', O:'#c0a040' }, rows: ['O.DD.....', '.ODDMMMMM', 'O.DD.....'] },
  gemB:  { pal: { G:'#3aa0ff', W:'#d8f0ff' }, rows: ['..G..', '.GWG.', 'GWGGG', '.GGG.', '..G..'] },
  gemG:  { pal: { G:'#3ad070', W:'#e0ffe8' }, rows: ['..G..', '.GWG.', 'GWGGG', '.GGG.', '..G..'] },
  gemR:  { pal: { G:'#ff3a5a', W:'#ffe0e8' }, rows: ['...G...', '..GWG..', '.GWGGG.', 'GWGGGGG', '.GGGGG.', '..GGG..', '...G...'] },
  coin:  { pal: { Y:'#ffd23a', y:'#c89010', D:'#5a3a00' }, rows: ['.YYYYY.', 'YYyyyYY', 'YyYYYyY', 'YyYDYyY', 'YyYYYyY', 'YYyyyYY', '.YYYYY.'] },
  magatama: { pal: { R:'#e0204a', W:'#ffd0dc', r:'#8a0a2a' }, rows: ['..RRRR.', '.RRRRRR', 'RRWRRRR', 'RRRRRRR', '.RRRRRr', '...RRr.', '..Rr...', '.r.....'] },
  ramen: { pal: { W:'#fff0c0', Y:'#ffd040', R:'#d02020', D:'#5a2a10', w:'#ffffff' }, rows: ['.WYWYWYW.', 'RRRRRRRRR', 'RwwRwwRwR', '.RRRRRRR.', '..RRRRR..', '...DDD...'] },
  chest: { pal: { D:'#4a2a10', Y:'#ffd23a', B:'#a0602a' }, rows: ['.DDDDDDDD.', 'DYYYYYYYYD', 'DBBBBBBBBD', 'DDDDYYDDDD', 'DBBBYYBBBD', 'DBBBBBBBBD', 'DDDDDDDDDD'] },
  scrollItem: { pal: { W:'#f0e8d0', R:'#3a80ff', D:'#5a4a3a' }, rows: ['.WWWWWW.', 'RWWWWWWR', 'RWDDDDWR', 'RWWWWWWR', 'RWDDDWWR', '.WWWWWW.'] },
  bullet: { pal: { M:'#a0c0e0', D:'#203040' }, rows: ['.M.', 'MDM', '.M.'] },
  tuft:  { pal: { g:'#5aa848' }, outline: false, rows: ['..g..', 'g.g.g', '.ggg.'] },
  stone: { pal: { M:'#8a8f98', D:'#5a5f68', W:'#b0b5bd' }, rows: ['.WMM..', 'WMMMM.', 'MMMMMM', '.DDDD.'] },
  flower:{ pal: { Y:'#ffe040', R:'#ff6080' }, outline: false, rows: ['.R.', 'RYR', '.R.'] },
  flower2:{ pal: { Y:'#ffe040', R:'#ffffff' }, outline: false, rows: ['.R.', 'RYR', '.R.'] },
  bush:  { pal: { G:'#2f6a2c', g:'#3f8a3a', l:'#5aa848' }, rows: ['..ggg...', '.gglgg..', 'gglggggg', 'GgggglgG', '.GGGGGG.'] },
  stump: { pal: { B:'#8a5a30', b:'#c08a50', D:'#5a3a1a' }, rows: ['.bbbb.', 'bBbbBb', 'BBBBBB', 'BDBBDB', 'DD..DD'] }
};

/* 图标（10x10 左右） */
PixelArt.icons = {
  shuriken: { pal: { M:'#dfe6f0', D:'#4a5060' }, rows: ['....M....', '....M....', '...MMM...', '...MDM...', 'MMMD.DMMM', '...MDM...', '...MMM...', '....M....', '....M....'] },
  kunai: { pal: { M:'#e8ecf4', D:'#3a3f50', O:'#d0a040' }, rows: ['........M', '.......MM', '......MM.', '.....MM..', '....MM...', '...DD....', '..DD.....', '.OD......', 'O........'] },
  rasengan: 'proc', rsk: 'proc', katon: 'proc',
  chidori: { pal: { Y:'#bff4ff', B:'#40b0ff' }, rows: ['.....YYB.', '....YYB..', '...YYB...', '..YYYYYB.', '....YYB..', '...YYB...', '..YYB....', '.YB......', 'Y........'] },
  kirin: { pal: { Y:'#ffffff', B:'#80d0ff', D:'#3060c0' }, rows: ['DDD..DDD.', '.D.YB..D.', '...YYB...', '..YYYYYB.', '....YYB..', '...YYB...', '..YYB....', '.YB......', 'Y........'] },
  clone: { pal: { W:'#f0f0f0', G:'#c0c0c8', O:'#ff8a1f', H:'#ffd23a' }, rows: ['..WWW.....', '.WWGWW.HH.', 'WWGGGWHHHH', 'WGGWGWOOOO', '.WWWWWOOOO', '..WWW.OOOO', '......O..O'] },
  sakura: { pal: { S:'#ffd8c0', s:'#d8a090', R:'#ff5a9a', W:'#ffffff' }, rows: ['..SSSS...', '.SSSSSS..', '.SSSSSSS.', '.SsSsSsS.', '.SSSSSSS.', '..SSSSS..', '..RRRRR..', '..RWRRR..'] },
  sandals: { pal: { K:'#2a3a8a', B:'#8aa0ff', W:'#ffffff' }, rows: ['......WW.', '.....WW..', '.KKKKKKK.', 'KBBBBBBBK', 'KKKKKKKKK'] },
  pill: { pal: { G:'#4a3020', g:'#8a6040', W:'#c0a080' }, rows: ['..GGGG..', '.GgggGG.', 'GgWggggG', 'GggggggG', 'GggggggG', '.GgggGG.', '..GGGG..'] },
  chakra: { pal: { W:'#f0e8d0', R:'#3a80ff', D:'#5a4a3a' }, rows: ['.WWWWWWW.', 'RWWWWWWWR', 'RWWDDDWWR', 'RWWWWWWWR', 'RWDDDDWWR', 'RWWWWWWWR', '.WWWWWWW.'] },
  wind: { pal: { W:'#f0e8d0', R:'#30c070', D:'#5a4a3a' }, rows: ['.WWWWWWW.', 'RWWWWWWWR', 'RWWDDDWWR', 'RWWWWWWWR', 'RWDDDDWWR', 'RWWWWWWWR', '.WWWWWWW.'] },
  whetstone: { pal: { M:'#dfe4ee', W:'#ffffff', D:'#3a3f50', R:'#c03030' }, rows: ['....M....', '...MMM...', '...MWM...', '...MWM...', '...MMM...', '..DDDDD..', '....R....', '....R....', '...R.R...'] },
  magnet: { pal: { R:'#e03030', W:'#e0e0e8' }, rows: ['.WW....WW.', '.RR....RR.', '.RR....RR.', '.RR....RR.', '.RRR..RRR.', '..RRRRRR..', '...RRRR...'] },
  coin: PixelArt.items.coin, magatama: PixelArt.items.magatama, ramen: PixelArt.items.ramen, chest: PixelArt.items.chest,
  home: { pal: { R:'#ff8a1f', W:'#ffffff', B:'#3a5a9a' }, rows: ['....R....', '...RRR...', '..RRRRR..', '.RRRRRRR.', 'RRRRRRRRR', '.WWWWWWW.', '.WWBBWWW.', '.WWBBWWW.'] },
  gear: { pal: { G:'#9aa8c0', D:'#5a6a80' }, rows: ['...GG....', '.G.GG.G..', '..GGGGG..', 'GGGDDGGG.', 'GGD..DGG.', 'GGGDDGGG.', '..GGGGG..', '.G.GG.G..', '...GG....'] },
  scrollBig: { pal: { W:'#f6eed8', R:'#c02040', D:'#7a5a3a', Y:'#ffd23a' }, rows: ['RR.......RR', 'RWWWWWWWWWR', 'RWDDYYYDDWR', 'RWWWWWWWWWR', 'RWDDDDDDWWR', 'RWWWWWWWWWR', 'RR.......RR'] }
};

/* 3x5 数字点阵 */
PixelArt.digits = [
  ['###', '#.#', '#.#', '#.#', '###'],
  ['.#.', '##.', '.#.', '.#.', '###'],
  ['###', '..#', '###', '#..', '###'],
  ['###', '..#', '###', '..#', '###'],
  ['#.#', '#.#', '###', '..#', '..#'],
  ['###', '#..', '###', '..#', '###'],
  ['###', '#..', '###', '#.#', '###'],
  ['###', '..#', '.#.', '.#.', '.#.'],
  ['###', '#.#', '###', '#.#', '###'],
  ['###', '#.#', '###', '..#', '###']
];
