# fx-v67 素材说明

- `gokakyu-sheet.png` / `gokakyu.json`：火遁·豪火球之术 像素特效（蓄力 4 / 飞行循环 6 / 爆炸 8，96×96，12fps，朝右）。
  由本项目以生成草图为底，经抠图、按游戏尺寸重采样、8 色调色板量化（#FFF6D6 #FFE066 #FFB02E #F26B1D #C8323C #7A1E1E #3A2A2A + 描边 #0B1122）与 1px 外描边后处理制作。
  同人非官方学习项目自制素材，不含第三方素材包内容。
- `gokakyu-icon.png`（v0.67.1 起）：火遁·豪火球 技能图标。源图为《火影忍者》手游（腾讯，©岸本齐史/集英社·Tencent）宇智波佐助「火遁·豪火球」技能图标 100×100 JPG，取自 4399 资料页 https://news.4399.com/gonglue/hyrz/renzhe/m/504716.html（图片 https://newsimg.5054399.com/uploads/userup/1609/0610032aT6.jpg ，需带 4399 Referer）。经 `tools/pixelize-icon.py --size 32 --scale 2 --map luma` 去底色与圆框、重采样为 32×32 像素网格、量化到豪火球 7 色调色板并加 1px #0B1122 描边，最近邻放大到 64×64。版权归原游戏方，仅用于个人非商业同人学习项目；不属于开放授权素材。
