# CREDITS — 第三方素材致谢与许可

整理日期：2026-11-04（UTC+8）。素材索引与完整度表见 `assets/thirdparty/INDEX.md`，预览图见 `assets/thirdparty/preview.png`。
本文件只记录第三方素材；游戏内现有程序生成美术/音效不在此列。`assets/portraits/src/*_raw.png` 为项目原有文件，来源未在本次核实。

---

## A. 许可明确的素材（可商用）

### Ninja Adventure – Asset Pack
- 作者：Pixel-boy & AAA
- 来源：https://pixel-boy.itch.io/ninja-adventure-asset-pack （itch.io「Name your own price」，选 0 元 “No thanks, just take me to the downloads”，无需登录；文件 `Ninja Adventure - Asset Pack.zip` 89 MB）
- 许可证：CC0 1.0 Universal（页面 “Asset license: Creative Commons Zero v1.0 Universal”；包内 `LICENSE.txt` 为 CC0 全文，`README.md` 写明可商用、无需署名）
- 署名要求：无需署名（建议致谢，作者希望附上 itch 页面链接）
- 本地路径（同一包按类别拆分，每个目录都保留了 LICENSE.txt + README.md）：
  - `assets/thirdparty/characters_pixel/ninja_adventure/`（Actor：Character / Monster / Boss / Animal / CharacterAnimated）
  - `assets/thirdparty/fx_pixel/ninja_adventure/`（FX）
  - `assets/thirdparty/tiles/ninja_adventure/`（Backgrounds：Tilesets / Animated）
  - `assets/thirdparty/ui/ninja_adventure/`（Ui + Items）
  - `assets/thirdparty/sfx/ninja_adventure/`（Audio/Sounds + Audio/Jingles）
  - `assets/thirdparty/bgm/ninja_adventure/`（Audio/Musics，40 首 .ogg）

### Anime Girl and Boy Portraits
- 作者：stevenburrow
- 来源：https://opengameart.org/content/anime-girl-and-boy-portraits
- 许可证：CC0（OpenGameArt 页面所列；作者原话：“completely public domain … attribute me … not necessary”）
- 署名要求：无需署名（建议致谢）
- 本地路径：`assets/thirdparty/portraits/anime_girl_boy_portraits_stevenburrow/`（含 `LICENSE_from_source_page.txt`）

### Visual Novel Sprites!
- 作者：Breezy (breezy-the-cat)
- 来源：https://breezy-the-cat.itch.io/visual-novel-sprites （免费，min_price 0，无需登录）
- 许可证：CC0（页面说明 “This Asset Pack is under the Creative Commons Zero (CC0)”，可商用/修改/再分发）
- 署名要求：无需署名（建议致谢）。作者请求：不要用于生成式 AI；使用后如方便请告知作者。
- 本地路径：`assets/thirdparty/portraits/breezy_visual_novel_sprites/`（包内无许可文件，已存 `LICENSE_from_source_page.txt` 记录页面声明）

---

## B. 仅限个人学习使用（版权归原作者/岸本齐史/集英社/Pierrot 等，不得商用或发布）

> 以下全部是《火影忍者》相关角色的游戏拆包 sprite、官方卡面或同人素材。项目所有者确认本游戏仅用于个人学习、不商用不发布。
> 这些文件统一放在 `assets/thirdparty/naruto_personal_only/`，与上面的 CC0 素材分开，方便以后整体替换/删除。
> 全部通过公开页面直接下载或 git 公开仓库获取，未登录、未付费、未绕过任何下载限制。

- **死神vs火影 (Bleach vs Naruto) 开源工程 – 角色/援助**｜作者：剑jian / 5DPLAY Game Studio（工程 GPL-3.0；角色形象版权归原作者，sprite 多源自商业游戏）｜来源：https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto （`swf_source/f_fighter/*`, `swf_source/f_assistant/*`, `swf_source/assets/face`, `swf_source/assets/effect`）｜本地：`assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/`、`.../portraits/bvn_openbleachvsnaruto/faces/`、`.../fx_pixel/bvn_openbleachvsnaruto/common_effects_open34/`｜仅限个人学习使用
- **死神vs火影 FlashSrc – 杂兵 zako 与通用特效**｜作者：5DPLAY Game Studio（GPL-3.0）｜来源：https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_FlashSrc （`SRC_XFL/fighter/zako`, `SRC_XFL/effect`）｜本地：`.../characters_pixel/bvn_openbleachvsnaruto/zako_*/`、`.../fx_pixel/bvn_openbleachvsnaruto/common_effects/`｜仅限个人学习使用
  - 说明：上两项由 `assets/thirdparty/naruto_personal_only/_tools/xfl_render.py` 把 XFL 中的位图(.dat)解码并按时间轴标签渲染为动作条带；未修改原仓库。
- **Naruto Shippuden: Shinobi Rumble (DS) sprite sheets**（Naruto, Sasuke, Sakura, Kakashi, Itachi, Deidara, Konan, Pain, Orochimaru, Items/Effects/Icons, Training Field）｜拆图者见图内署名（NEIMAD 等）｜来源：https://spritedatabase.net/game/1889 （各文件页见 SOURCES.txt）｜本地：`.../characters_pixel/spritedatabase_shinobi_rumble_ds/`、`.../fx_pixel/spritedatabase_shinobi_rumble_ds/`、`.../tiles/spritedatabase_shinobi_rumble_ds/`｜仅限个人学习使用
- **Naruto Shippuden: Naruto vs. Sasuke (DS) sprite sheets**（Naruto, Sasuke, Sakura, Kakashi, Orochimaru, Kabuto, Sound Ninja, Puppet, NPCs, Akatsuki[Sasori/Deidara/Kisame/Itachi], Forest/Konoha/Tilesets）｜拆图者：NEIMAD（图内署名）｜来源：https://spritedatabase.net/game/63 （SOURCES.txt）｜本地：`.../characters_pixel/spritedatabase_naruto_vs_sasuke_ds/`、`.../tiles/spritedatabase_naruto_vs_sasuke_ds/`｜仅限个人学习使用
- **simonc312/naruto-js 仓库中的 sprite**（NRPG2-Naruto/Kakashi/Itachi/Jiraya/Orochimaru [Naruto RPG2 NDS, ripped by dimps]、Tobi_Sprite_Sheet、faces sprite sheet、effectstopdown、explosion、kunai、sasukeFire 等）｜仓库作者：simonc312（无许可文件）｜来源：https://github.com/simonc312/naruto-js ｜本地：`.../characters_pixel/github_simonc312_naruto-js/`、`.../fx_pixel/github_simonc312_naruto-js/`、`.../portraits/github_simonc312_naruto-js/`｜仅限个人学习使用
- **ABDELLANI-Youcef/Javascript_Game – Itachi sprite & fireball**｜作者：ABDELLANI-Youcef（MIT 仅覆盖代码；sprite 来自 spritedatabase）｜来源：https://github.com/ABDELLANI-Youcef/Javascript_Game ｜本地：`.../characters_pixel/github_ABDELLANI-Youcef_Javascript_Game/`｜仅限个人学习使用
- **Naruto Sprites [16x16]（同人像素）**｜作者：brendonnogard / nogardlab（页面未声明许可）｜来源：https://nogardlab.itch.io/naruto-themed-sprites-16x16 （0 元，无需登录）｜本地：`.../characters_pixel/itch_nogardlab_naruto_sprites_16x16/`｜仅限个人学习使用
- **Bandai Namco 官方透明背景立绘：NARUTO X BORUTO ナルティメットストーム CONNECTIONS（161 名角色/形态，主力来源）**｜版权：Bandai Namco Entertainment / 岸本齐史 / 集英社 / Pierrot｜来源：https://naruto-game-sc.bn-ent.net/character/ （每人详情页 `detail.php?c=charaNNN`，原图 `images/character/detail/charaNNN/ill.png`，为站点最大尺寸；逐张对应见 `SOURCES.tsv`）｜本地：`.../portraits/bandainamco_naruto-game-sc/`｜仅限个人学习使用
- **Bandai Namco 官方场景图：NARUTO X BORUTO ナルティメットストーム CONNECTIONS STAGE（65 张 JPEG，约 1707×500）**｜版权：Bandai Namco Entertainment / 岸本齐史 / 集英社 / Pierrot｜来源：https://naruto-game-sc.bn-ent.net/stage/ （详情页 `detail.php?s=stageNN`，原图 `images/stage/img_stageNN.jpg`，站内最大尺寸；逐张见 `SOURCES.tsv`）｜本地：`.../stages/bandainamco_naruto-game-sc/`｜仅限个人学习使用
- **BVN（死神vs火影）同人 MOD 角色（Flash SWF，非 MUGEN）**｜原始角色版权：岸本齐史/集英社/Pierrot；MOD 制作者见各包配置（如 得是和道、噢咧哇那路多、Nian、-帅-帅-、披星戴月的六六六 等），发布者 AI Gaming MUGEN / Akane Gaming｜列表页：https://characterdownload.blogspot.com/2021/10/new-sasuke-ending-2.html ；下载为 MediaFire 公开链接（每包 URL 与列表页公开的解压密码见各目录 `SOURCE.txt`）｜处理：JPEXS FFDec 导出 XFL → `_tools/xfl_render.py` 渲染帧条｜本地：`.../characters_pixel/bvnmod_<角色>/`（含 `faces/` 头像与原配置 `orig_*`）｜仅限个人学习使用
- **Bandai Namco 官方透明背景立绘：NARUTO TO BORUTO シノビストライカー（20 人）**｜版权同上｜来源：https://naruto-action.bn-ent.net/character/list.php （原图 `images/chara/list/<key>/img_chara.png`，含特效；见 `SOURCES.tsv`）｜本地：`.../portraits/bandainamco_naruto-action/`｜仅限个人学习使用
- **Bandai Namco 官方透明背景立绘：ナルティメットストーム4 ROAD TO BORUTO（17 张，含内嵌文字）**｜版权同上｜来源：https://naruto-game.bn-ent.net/character/ （`img/NN/img01.png`；见 `SOURCES.txt`）｜本地：`.../portraits/bandainamco_naruto-game/`｜仅限个人学习使用
- **Naruto Shippuden: Ultimate Ninja Blazing 官方卡面立绘 158 张（50+ 角色）**｜版权：Bandai Namco / 岸本齐史 / 集英社 / Pierrot｜来源：Naruto Blazing Fandom Wiki（https://naruto-blazing.fandom.com/wiki/Encyclopedia ；每张的文件页见 `SOURCES.tsv`）｜本地：`.../portraits/naruto_blazing_fandom_wiki/`｜仅限个人学习使用
- **Naruto Shippuden: Ninja Council 4 (DS) sprite sheets**（Naruto, Sakura, Kakashi, Itachi, Deidara, Gaara, Jiraiya, RockLee, Neji, Temari, Guy, Kisame, Sasori, Shikamaru, TenTen, Tsunade, Kankuro, Puppet, SoundNin, 召唤兽/乌鸦/蝙蝠, Items_SFX 共 26 张）｜拆图者：Neimad（DS Ripping Forum，页面要求 give credit）｜来源：https://spritedatabase.net/game/62 （每张文件页与图片 URL 见 `SOURCES.tsv`）｜本地：`.../characters_pixel/spritedatabase_ninja_council_4_ds/`、`.../fx_pixel/spritedatabase_ninja_council_4_ds/Items_SFX.png`；从中切出的帧条：`.../fx_pixel/shosen_heal/`（小樱掌仙术）、`.../fx_pixel/c4_bomb_cloud/deidara_clay_bomb_*`、`.../fx_pixel/eyes/kakashi_mangekyo_cutin_nc4_*`（工具 `_tools/slicer.py`）｜仅限个人学习使用
- **技能特效补缺（2026-11-04）**｜本地：`.../fx_pixel/{amaterasu,kirin,c4_bomb_cloud,shosen_heal,eyes,aura}/`，逐文件来源/原版或替代见 `.../fx_pixel/fx_gap_index.json`｜原版来自：BVN MOD 子元件渲染（New Sasuke Ending #2 → 天照/麒麟；New Sasuke The Last (Break Armour) → 天照/麒麟头；Sasuke Hebi Curse Mask → 写轮眼；Sasuke EMS #2 → 永恒万花筒；Madara Edo Tensei #5 → 轮回眼；Tobi White Mask → 小写轮眼；Sakura 4th War → 医疗查克拉；来源同上一条 BVN MOD）、OpenBleachVsNaruto deidara `元件/mc_013`、NC4（上一条）｜**替代**（重着色衍生）：`aura/aura_{sage_mode_orange,eight_gates_green,sharingan_red,byakugan_white}_*` 由 BVN 通用特效 XG_baoqi 重着色；`c4_bomb_cloud/nano_bomb_cloud_substitute_ninjaadventure_smoke_*` 由 Ninja Adventure FX/Smoke（pixel-boy & AAA，CC0）重着色｜工具：`_tools/fxtool.py`、`_tools/build.py`｜仅限个人学习使用
- **加具土命 / 须佐能乎特效（2026-11-04）**｜本地：`.../fx_pixel/kagutsuchi/`、`.../fx_pixel/susanoo/`，逐文件来源 Symbol 见 `.../fx_pixel/fx_gap_index.json`｜来源：characterdownload.blogspot.com 的 BVN MOD（MediaFire 公开链接，同上「BVN MOD」条）：「Sasuke Rinnegan」(sasuke_rinnegan.swf：Symbol 2428「加具土命」帧 181–257、2509/2552/2553/2591/2592/2596/2666、主 MC 3648「须佐砍1/须佐砍2/须佐招」)、「New Sasuke Uchiha EMS #2」(sasuke_ems.swf：须佐 4 形态 Symbol 2698/2845/2917/3195、光晕 1961)、「New Sasuke The Last (Break Armour)」(Symbol 1569「须佐切陨石」)｜原始角色版权：岸本齐史/集英社/Pierrot；MOD 作者见各包配置｜处理：JPEXS FFDec 直接渲染 SWF 精灵（矢量+色彩变换正确）或 `_tools/xfl_render.py`/`segfilter.py` 渲染位图层；黑底加色混合图层用 `_tools/unblack.py` 按亮度转透明｜仅限个人学习使用

---

## C. 衍生成品登记：BVN 像素精灵 → `assets/sprites/`（按 docs/art-guide.md §8.1 模板）

> ⚠️ 仅限个人学习，不得商用/公开发布。本节所列素材的版权归原作者/版权方所有（角色形象 © 岸本齐史 / 集英社 / Pierrot；BVN sprite 多源自商业游戏及同人修改）。
> 处理方式（全部条目相同）：按动作条带切帧 → 脚底/头部中心对齐 → BOX 平滑缩小 → alpha 二值化 → Lab 色彩空间调色板映射（主角用 art-guide §2.3 角色色+暗部色；敌人用源素材 k-means 12 色）→ 去孤立像素 → 1px 4 邻域 `#161020` 外描边；敌人另去除倒地拖尾特效。状态：草稿，未接入代码。

| 本地路径 | 素材名 | 作者 | 来源链接 | 许可 | 下载日期 | 修改说明 | 用于 | 使用限制 |
|---|---|---|---|---|---|---|---|---|
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/fighter_naruto/元件_mc_0004/ | 死神vs火影 鸣人（站立/走/砍1/被打） | 剑jian / 5DPLAY Game Studio | https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto （swf_source/f_fighter/naruto） | 工程 GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至站立约 30px、§2.3 调色板映射、帧 52x37 | assets/sprites/characters/naruto.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/fighter_sasuke/元件_mc_040/ | 死神vs火影 佐助（疾风传白衣；站立/走/砍1/被打） | 剑jian / 5DPLAY Game Studio | https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto （swf_source/f_fighter/sasuke） | 工程 GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至站立约 31px、§2.3 调色板映射、帧 52x37 | assets/sprites/characters/sasuke.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/fighter_sakura/元件_mc_029/ | 死神vs火影 小樱（站立/走/砍1/被打） | 剑jian / 5DPLAY Game Studio | https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto （swf_source/f_fighter/sakura） | 工程 GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至站立约 28px、§2.3 调色板映射、帧 52x37 | assets/sprites/characters/sakura.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/fighter_kakashi/元件_mc_028/ | 死神vs火影 卡卡西（绿马甲；站立/走/砍1/被打） | 剑jian / 5DPLAY Game Studio | https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto （swf_source/f_fighter/kakashi） | 工程 GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至站立约 28px（源为弯腰姿势）、§2.3 调色板映射、帧 52x37 | assets/sprites/characters/kakashi.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/zako_ninja1/ | 死神vs火影 杂兵 ninja1（紫衣小忍者） | 5DPLAY Game Studio | https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_FlashSrc （SRC_XFL/fighter/zako/ninja1） | GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至约 24px、k-means 12 色、去拖尾特效 | assets/sprites/enemies/otoninja.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/zako_dog1/ | 死神vs火影 杂兵 dog1（灰狼） | 5DPLAY Game Studio | https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_FlashSrc （SRC_XFL/fighter/zako/dog1） | GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至约 14px 高、k-means 12 色、去拖尾特效 | assets/sprites/enemies/hound.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/zako_ninja_earth1/ | 死神vs火影 杂兵 ninja_earth1（红衣忍者） | 5DPLAY Game Studio | https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_FlashSrc （SRC_XFL/fighter/zako/ninja_earth1） | GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至约 26px、k-means 12 色、去拖尾特效 | assets/sprites/enemies/redninja.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/zako_ninja_thunder1/ | 死神vs火影 杂兵 ninja_thunder1（白发忍者） | 5DPLAY Game Studio | https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_FlashSrc （SRC_XFL/fighter/zako/ninja_thunder1） | GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至约 26px、k-means 12 色、去拖尾特效 | assets/sprites/enemies/whiteninja.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/zako_ninja2/ | 死神vs火影 杂兵 ninja2（紫头巾巨汉） | 5DPLAY Game Studio | https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_FlashSrc （SRC_XFL/fighter/zako/ninja2） | GPL-3.0；角色形象版权归原作者 | 2026-11-04（本文件整理日期） | 缩小至约 28px、k-means 12 色、去拖尾特效 | assets/sprites/enemies/brute.png + .json | 仅限个人学习，不得商用/公开发布 |


**C-HD. 原尺寸 HD 档（2026-11-04 新增，`assets/sprites_hd/`，由 `tools/art/bvn/hd.py` 生成）** — 来源、作者、许可与上表对应行完全相同（同一批 BVN 源条带），仅处理方式不同：不缩放、不减色、不加描边，只去底 + 脚底锚点对齐 + 统一帧；redninja/whiteninja 叠加放大后的轮廓补丁。⚠️ 仅限个人学习，不得商用/公开发布。

| 本地路径 | 素材名 | 作者 | 来源链接 | 许可 | 下载日期 | 修改说明 | 用于 | 使用限制 |
|---|---|---|---|---|---|---|---|---|
| （同上表 4 主角行：fighter_naruto/元件_mc_0004、fighter_sasuke/元件_mc_040、fighter_sakura/元件_mc_029、fighter_kakashi/元件_mc_028） | 死神vs火影 第七班（站立/走/砍1/被打）原尺寸 | 剑jian / 5DPLAY Game Studio | https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto | 工程 GPL-3.0；角色形象版权归原作者 | 2026-11-04 | 原尺寸、统一帧 92x60 锚点(46,58)（与鼬/迪达拉共用），未改色 | assets/sprites_hd/characters/{naruto,sasuke,sakura,kakashi}.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/fighter_itachi/元件_mc_011/ | 死神vs火影 宇智波鼬（晓袍；站立/走/砍1/被打）原尺寸 | 剑jian / 5DPLAY Game Studio | https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto （swf_source/f_fighter/itachi） | 工程 GPL-3.0；角色形象版权归原作者 | 2026-11-04 | 原尺寸、未改色；走/站立去掉条带尾部重复帧；统一帧 92x60 锚点(46,58) | assets/sprites_hd/characters/itachi.png + .json | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/characters_pixel/bvn_openbleachvsnaruto/fighter_deidara/元件_mc_024/ | 死神vs火影 迪达拉（晓袍；站立/走/砍1/被打）原尺寸 | 剑jian / 5DPLAY Game Studio | https://gitlab.com/5dplay-game-studio/OpenBleachVsNaruto （swf_source/f_fighter/deidara） | 工程 GPL-3.0；角色形象版权归原作者 | 2026-11-04 | 原尺寸、未改色；源帧内并排的其他姿势副本已去除（只留帧中心本体）；去重复帧、砍1 截至 6 帧；统一帧 92x60 锚点(46,58) | assets/sprites_hd/characters/deidara.png + .json | 仅限个人学习，不得商用/公开发布 |
| （同上表 5 敌人行：zako_ninja1、zako_dog1、zako_ninja_earth1、zako_ninja_thunder1、zako_ninja2） | 死神vs火影 杂兵 HD v2 | 5DPLAY Game Studio | https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_FlashSrc | GPL-3.0；角色形象版权归原作者 | 2026-11-04 | HD v2：按目标站高缩小（杂兵 40/狼 25/巨汉 58 px，预乘α LANCZOS + 源色吸附 + 线稿修复）、去拖尾特效；brute 攻击特效裁切；redninja/whiteninja 轮廓补丁终尺寸手绘 | assets/sprites_hd/enemies/{otoninja,hound,redninja,whiteninja,brute}.png + .json | 仅限个人学习，不得商用/公开发布 |

---

## D. 衍生成品登记：万代南梦宫官方透明立绘 → `assets/portraits/`（第七班 + 批次 1 鼬/迪达拉正式立绘，按 docs/art-guide.md §8.5）

> ⚠️ 仅限个人学习，不得商用/公开发布。官方素材，未授权。
> 处理方式（4 条相同）：alpha<16 杂边清零（卡卡西源图第 0 行有一整行 alpha=10 的杂线）→ 按 alpha bbox 裁空白 → LANCZOS 等比缩放到统一身高 1382px（头顶留白 7%=107px、脚底对齐 97%=y1489）→ 放到 1024×1536 RGBA 透明画布，按人物本体（排除雷切特效）水平居中 → 未量化（均 <800KB）。整理日期 2026-11-04。

| 本地路径 | 素材名 | 作者 | 来源链接 | 许可 | 下载日期 | 修改说明 | 用于 | 使用限制 |
|---|---|---|---|---|---|---|---|---|
| assets/thirdparty/naruto_personal_only/portraits/bandainamco_naruto-game-sc/naruto_uzumaki.png | うずまきナルト（chara002，449×1157 全身） | 未知（SOURCES.tsv 未记录；版权 ©岸本斉史/集英社・万代南梦宫等） | https://naruto-game-sc.bn-ent.net/images/character/detail/chara002/ill.png （页面 https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara002 ） | 官方素材，未授权 | 2026-11-04 | 放大 ×1.194 | assets/portraits/naruto.png | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/portraits/bandainamco_naruto-game-sc/sasuke_uchiha.png | うちはサスケ（chara009，435×1103 全身） | 未知（SOURCES.tsv 未记录；版权 ©岸本斉史/集英社・万代南梦宫等） | https://naruto-game-sc.bn-ent.net/images/character/detail/chara009/ill.png （页面 https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara009 ） | 官方素材，未授权 | 2026-11-04 | 放大 ×1.253 | assets/portraits/sasuke.png | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/portraits/bandainamco_naruto-game-sc/sakura_haruno.png | 春野サクラ（chara017，530×1057 全身） | 未知（SOURCES.tsv 未记录；版权 ©岸本斉史/集英社・万代南梦宫等） | https://naruto-game-sc.bn-ent.net/images/character/detail/chara017/ill.png （页面 https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara017 ） | 官方素材，未授权 | 2026-11-04 | 放大 ×1.307 | assets/portraits/sakura.png | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/portraits/bandainamco_naruto-game-sc/kakashi_hatake.png | はたけカカシ（chara024，769×1170 全身，含雷切特效） | 未知（SOURCES.tsv 未记录；版权 ©岸本斉史/集英社・万代南梦宫等） | https://naruto-game-sc.bn-ent.net/images/character/detail/chara024/ill.png （页面 https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara024 ） | 官方素材，未授权 | 2026-11-04 | 去第 0 行杂线、放大 ×1.260；雷切完整保留未裁 | assets/portraits/kakashi.png | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/portraits/bandainamco_naruto-game-sc/itachi_uchiha.png | うちはイタチ（chara079，650×1142 全身） | 未知（SOURCES.tsv 未记录；版权 ©岸本斉史/集英社・万代南梦宫等） | https://naruto-game-sc.bn-ent.net/images/character/detail/chara079/ill.png （页面 https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara079 ） | 官方素材，未授权 | 2026-11-04 | 放大 ×1.210（同第七班流程，tools/art/portraits/build_portraits.py） | assets/portraits/itachi.png | 仅限个人学习，不得商用/公开发布 |
| assets/thirdparty/naruto_personal_only/portraits/bandainamco_naruto-game-sc/deidara.png | デイダラ（chara083，489×1064 全身） | 未知（SOURCES.tsv 未记录；版权 ©岸本斉史/集英社・万代南梦宫等） | https://naruto-game-sc.bn-ent.net/images/character/detail/chara083/ill.png （页面 https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara083 ） | 官方素材，未授权 | 2026-11-04 | 放大 ×1.299（同第七班流程，tools/art/portraits/build_portraits.py） | assets/portraits/deidara.png | 仅限个人学习，不得商用/公开发布 |

## 首页名字字体

Ma Shan Zheng（马善政毛笔字体），Copyright 2018 The Ma Shan Zheng Project Authors。通过 Google Fonts 获取角色名所需97字的精简字库（66 KB），按 SIL Open Font License 1.1 使用。项目：https://github.com/googlefonts/mashanzheng ；完整许可证：`fonts/MaShanZheng-OFL.txt`。

## v0.40 已接入敌人

现有 `assets/sprites_hd/enemies/` 中5套 BVN 衍生敌人（紫衣忍者、红衣忍者、白发忍者、紫头巾巨汉、灰狼）无损打包至 `battle/assets/enemies/atlas.png` 并接入战斗。来源和逐动作限制见 `battle/assets/enemies/manifest.json`、`battle/assets/enemies/CREDITS.md`；未新增绘制或声称原素材不存在的灰狼攻击动作。

## v0.44 属性图标

火、风、雷、土、水采用 [Naruto Online Combo Simulator](https://github.com/senboni/Combo-Simulator/tree/master/ComboSimulator/Client/wwwroot/assets/attributes) 的现有图标；原文件、映射与仓库许可证见 `nature-icons/SOURCES.md`、`nature-icons/SOURCE-LICENSE.txt`。阴、阳、全为本项目代码绘制的配套 SVG 徽记。

## v0.45 第一阶段53角色立绘

46张既有《终极风暴 CONNECTIONS》官方立绘，6张腾讯《火影忍者手游》官方半身图，1张Maxiuchiha22整理的《Ninja Voltage》八尾牛鬼透明图。逐角色来源与原图/输出校验见 `phase-one/SOURCES.md`、`phase-one/SOURCES.json`。仅调整显示裁切与压缩，未制作新的战斗美术。


## v0.47 五角色技能美术
鹿丸（Salah）、井野（CobraG6）、丁次（Mikel8888）、佐井（CobraG6）、飞段（Frak20）的社区来源与静态解码记录见 `battle/assets/CREDITS-v47.md`；不将素材公开下载当作开源授权。


## v0.51 完整身体立绘替换
- 咒印二佐助：Lwisf3rxd（来源站署名），[下载页](https://www.pngitem.com/middle/hmhxxJR_sasuke-shippuden-curse-seal-2-render-by-lwisf3rxd/)。
- 仙人自来也：Vdb1000（镜像标题署名，d64y52c），[下载页](https://www.pngaaa.com/detail/1375285)。
- 四尾鸣人：[下载页](https://www.pngaaa.com/detail/7428974)，镜像未核实原作者，不宣称为官方绘制或开源授权。
角色 IP 和图片权利归原权利人；镜像页面为个人/非商用用途素材记录。未删除作品内署名。保留原始半身文件，替换图位于 assets/phase-one-full，来源哈希与核验见私有源码 docs/portraits-v51/sources.json。
