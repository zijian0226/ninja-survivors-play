# v0.62 素材说明

- tailed-beasts-v62：尾兽蛋、九喇嘛、守鹤、又旅为 Python/Pillow 代码绘制的临时像素小图。原作角色归各权利方，不冒称官方游戏提取图片。
- skill-motion-v62：既有技能合图的运行派生版本。原始 skill-art-data.js 与原图保留；依旧遵循原有 CREDITS-v23/v28/v47/v54/v56 记录。算法移除施法区域后，以周边预乘 RGBA 的离散调和插值补齐；这是技术性补绘，不是重新获取的官方独立技能包。
- 接触线条由代码补绘，少量旧帧缺乏独立特效时使用；迪达拉使用现有 clay-bird.png。完整逐招标记见私有源码 docs/combat-v62/skill-audit.json 的 contactStroke 字段。
- 根运动较大的源合图可能保留局部人物；部分补齐区较软、恢复阶段可能仍有空帧。需要人工逐帧重做的美术缺口不等同功能检查失败，也不宣称已经精修完毕。
- 可复现生成入口 tools/combat/build-motion.py（Pillow/NumPy/SciPy）、build-beasts.py（Pillow）。
