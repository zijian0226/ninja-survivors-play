'use strict';
/* skill-art-data.js */
/* Runtime source animation catalogue, v0.28. */
window.SKILL_ART_DATA={"itachi":{"portrait":"assets/skills-v28/itachi/portrait.webp","actor":{"file":"assets/skills-v28/itachi/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":6,"cast":6},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v28/itachi/primary.webp","icon":"assets/skills-v28/itachi/primary-icon.png","name":"乌鸦分身","cell":[137,84],"columns":8,"frames":24,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[16,72],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[80,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,18],"recovery":[19,23]},"emptyFrames":[],"lastOpaqueFrame":23,"source":{"baseFile":"assets/skills-v23/itachi/primary.webp","baseMetadata":{"name":"乌鸦分身","file":"itachi-crow.png","cell":128,"frames":7,"frame_ms":70,"bitmap_ids":[70,75,77,79,82,84,86],"sprite_id":null,"renderer_mode":"vfx_only","mapping_confidence":"high","source_dimensions":[[54,53],[73,67],[67,76],[57,69],[73,67],[74,62],[59,69]],"scale":1,"lifecycle":{"startup":[0,0],"active":[1,4],"recovery":[5,6]},"authored_disappearance":true,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[9,63,65,68,73,88,90],"sourceActorScale":0.9285714285714286,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"itachi/layers/primary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[9,63,65,68,73,88,90],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"itachi/layers/primary-source.webp","cell":[128,128],"frames":7,"columns":7,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"secondary":{"file":"assets/skills-v42/itachi/secondary.webp","icon":"assets/skills-v42/itachi/secondary-icon.png","name":"火遁·炎柱","cell":[147,124],"columns":8,"frames":26,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[18,122],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[92,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,20],"recovery":[21,25]},"emptyFrames":[],"lastOpaqueFrame":25,"source":{"baseFile":"assets/skills-v23/itachi/secondary.webp","baseMetadata":{"name":"火遁炎柱（具体招式待核验）","file":"itachi-flame.png","cell":128,"frames":16,"frame_ms":70,"bitmap_ids":[280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310],"sprite_id":null,"renderer_mode":"vfx_only","mapping_confidence":"medium","source_dimensions":[[36,26],[69,48],[159,158],[171,249],[211,386],[216,396],[223,373],[230,351],[204,367],[200,365],[203,334],[213,346],[211,343],[208,323],[191,317],[167,247]],"scale":0.30303030303030304,"lifecycle":{"startup":[0,2],"active":[3,11],"recovery":[12,15]},"authored_disappearance":true,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[9,261,268,271,274,276,278],"sourceActorScale":0.9285714285714286,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false,"blackMatteCorrection":{"inputFile":"assets/skills-v28/itachi/secondary.webp","method":"max-channel black matte to alpha; premultiplied energy retained","casterGuard":[-20,47,56,127],"casterMask":"connected actor-atlas palette component, one-pixel edge protection and hole fill","preserveBoundaryFrames":true}},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"itachi/layers/secondary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[9,261,268,271,274,276,278],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"itachi/layers/secondary-source.webp","cell":[128,128],"frames":16,"columns":8,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"ultimate":{"file":"assets/skills-v28/itachi/ultimate.webp","icon":"assets/skills-v28/itachi/ultimate-icon.png","name":"写轮眼幻术场","cell":[202,154],"columns":8,"frames":66,"fps":20.625,"frame_times_ms":[48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484,48.484848484848484],"anchor":[49,117],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[100,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,17],"active":[18,51],"recovery":[52,65]},"emptyFrames":[],"lastOpaqueFrame":65,"source":{"baseFile":"assets/skills-v23/itachi/ultimate.webp","baseMetadata":{"name":"写轮眼幻术场","file":"itachi-illusion.png","cell":128,"frames":56,"frame_ms":70,"bitmap_ids":[338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448],"sprite_id":null,"renderer_mode":"vfx_only","mapping_confidence":"medium","source_dimensions":[[132,132],[166,166],[191,261],[193,267],[207,276],[213,280],[214,278],[216,276],[219,276],[220,276],[222,283],[223,289],[224,290],[225,286],[227,285],[229,287],[231,300],[232,311],[234,320],[235,299],[236,314],[235,320],[237,330],[239,326],[240,339],[241,351],[243,336],[243,347],[245,366],[243,372],[245,372],[246,332],[248,337],[250,351],[246,362],[247,364],[249,313],[250,319],[251,324],[252,303],[253,301],[253,310],[253,318],[255,328],[255,290],[255,290],[227,282],[226,288],[226,278],[226,278],[219,277],[219,265],[218,270],[218,270],[203,206],[203,206]],"scale":0.3225806451612903,"lifecycle":{"startup":[0,10],"active":[11,43],"recovery":[44,55]},"authored_disappearance":false,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[9,452,454,457,462,465,467],"sourceActorScale":0.9285714285714286,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"itachi/layers/ultimate-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[9,452,454,457,462,465,467],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"itachi/layers/ultimate-source.webp","cell":[128,128],"frames":56,"columns":8,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"}},"sourceMetadata":{"source_swf":"/workspace/art/catalog/swf/fighters__itachi.swf","source_sha256":"7d06fcf16f84a65928c83a61f2759df05dfa514fa2d99515c02b69d4fc168cb0"},"visualComplete":true},"obito":{"portrait":"assets/skills-v28/obito/portrait.webp","actor":{"file":"assets/skills-v28/obito/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":6,"cast":6},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v28/obito/primary.webp","icon":"assets/skills-v28/obito/primary-icon.png","name":"神威","cell":[160,128],"columns":8,"frames":24,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[22,99],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[75,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,18],"recovery":[19,23]},"emptyFrames":[],"lastOpaqueFrame":23,"source":{"baseFile":"assets/skills-v23/obito/primary.webp","baseMetadata":{"name":"神威漩涡","file":"obito-kamui.png","cell":128,"frames":6,"frame_ms":70,"bitmap_ids":[65,62,60,62,65,67],"sprite_id":null,"renderer_mode":"vfx_only","mapping_confidence":"high","source_dimensions":[[31,36],[75,74],[93,95],[75,74],[31,36],[31,36]],"scale":1,"lifecycle":{"startup":[0,0],"active":[1,3],"recovery":[4,5]},"authored_disappearance":false,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[7,69,71,73,75,77,79,7],"sourceActorScale":0.9285714285714286,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"obito/layers/primary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[7,69,71,73,75,77,79,7],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"obito/layers/primary-source.webp","cell":[128,128],"frames":6,"columns":6,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"secondary":{"file":"assets/skills-v28/obito/secondary.webp","icon":"assets/skills-v28/obito/secondary-icon.png","name":"空间领域","cell":[192,126],"columns":8,"frames":24,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[25,124],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[90,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,18],"recovery":[19,23]},"emptyFrames":[],"lastOpaqueFrame":23,"source":{"baseFile":"assets/skills-v23/obito/secondary.webp","baseMetadata":{"name":"空间领域","file":"obito-space.png","cell":128,"frames":10,"frame_ms":70,"bitmap_ids":[200,202,204,206,208,210,212,214,216,218],"sprite_id":null,"renderer_mode":"vfx_only","mapping_confidence":"medium","source_dimensions":[[258,213],[254,217],[259,212],[259,215],[248,216],[265,215],[245,212],[261,211],[254,213],[252,210]],"scale":0.4528301886792453,"lifecycle":{"startup":[0,1],"active":[2,7],"recovery":[8,9]},"authored_disappearance":false,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[7,192,195,197,221,236,7],"sourceActorScale":0.9285714285714286,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"obito/layers/secondary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[7,192,195,197,221,236,7],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"obito/layers/secondary-source.webp","cell":[128,128],"frames":10,"columns":8,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"ultimate":{"file":"assets/skills-v42/obito/ultimate.webp","icon":"assets/skills-v42/obito/ultimate-icon.png","name":"火遁长流","cell":[224,71],"columns":8,"frames":42,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[22,62],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[110,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,10],"active":[11,32],"recovery":[33,41]},"emptyFrames":[],"lastOpaqueFrame":41,"source":{"baseFile":"assets/skills-v23/obito/ultimate.webp","baseMetadata":{"name":"火遁长流","file":"obito-firestream.png","cell":128,"frames":32,"frame_ms":70,"bitmap_ids":[305,307,309,311,313,315,317,319,321,323,325,327,329,331,333,335,337,339,341,343,345,347,349,351,353,355,357,359,361,363,365,367],"sprite_id":null,"renderer_mode":"vfx_only","mapping_confidence":"high","source_dimensions":[[148,134],[120,126],[212,122],[298,124],[323,126],[366,191],[380,202],[421,161],[527,184],[501,187],[497,186],[510,146],[527,184],[501,187],[497,186],[510,146],[527,184],[501,187],[497,186],[510,146],[527,184],[501,187],[497,186],[510,146],[527,184],[501,187],[497,186],[510,146],[395,156],[357,155],[321,166],[217,164]],"scale":0.22770398481973433,"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,31]},"authored_disappearance":true,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[7,291,294,297,299,301,303,7],"sourceActorScale":0.9285714285714286,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false,"blackMatteCorrection":{"inputFile":"assets/skills-v28/obito/ultimate.webp","method":"max-channel black matte to alpha; premultiplied energy retained","casterGuard":[-16,-13,60,67],"casterMask":"connected actor-atlas palette component, one-pixel edge protection and hole fill","preserveBoundaryFrames":true}},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"obito/layers/ultimate-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[7,291,294,297,299,301,303,7],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"obito/layers/ultimate-source.webp","cell":[128,128],"frames":32,"columns":8,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"}},"sourceMetadata":{"source_swf":"/workspace/art/catalog/swf/fighters__obito.swf","source_sha256":"81c596a0a08b511d719a87645e91976c406841914f3d44ff99c7d67df460e7c2"},"visualComplete":true},"pain":{"portrait":"assets/skills-v28/pain/portrait.webp","actor":{"file":"assets/skills-v28/pain/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":6,"cast":6},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v28/pain/primary.webp","icon":"assets/skills-v28/pain/primary-icon.png","name":"神罗天征","cell":[200,173],"columns":8,"frames":37,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[100,125],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[0,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,9],"active":[10,28],"recovery":[29,36]},"emptyFrames":[],"lastOpaqueFrame":36,"source":{"baseFile":"assets/skills-v23/pain/primary.webp","baseMetadata":{"name":"神罗天征冲击环","file":"pain-repulsion.png","cell":128,"frames":27,"frame_ms":70,"bitmap_ids":[95,535,606,42,84,271,503,317,196,68,381,324,150,94,180,571,14,649,1,244,590,510,145,232,108,107,516],"sprite_id":294,"renderer_mode":"vfx_only","mapping_confidence":"high","source_dimensions":[[91,88],[93,85],[88,79],[89,91],[77,107],[67,93],[62,92],[54,81],[66,71],[52,60],[92,94],[92,94],[120,122],[120,122],[138,142],[138,142],[154,156],[154,156],[162,164],[162,164],[170,172],[170,172],[176,178],[176,178],[178,180],[94,103],[80,99]],"scale":0.6666666666666666,"lifecycle":{"startup":[0,4],"active":[5,20],"recovery":[21,26]},"authored_disappearance":false,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[73,218,457,589,618,73],"sourceActorScale":0.9122807017543859,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"pain/layers/primary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[73,218,457,589,618,73],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"pain/layers/primary-source.webp","cell":[128,128],"frames":27,"columns":8,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"secondary":{"file":"assets/skills-v28/pain/secondary.webp","icon":"assets/skills-v28/pain/secondary-icon.png","name":"引力漩涡","cell":[184,137],"columns":8,"frames":32,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[15,104],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[100,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,8],"active":[9,24],"recovery":[25,31]},"emptyFrames":[],"lastOpaqueFrame":31,"source":{"baseFile":"assets/skills-v23/pain/secondary.webp","baseMetadata":{"name":"黑色引力球","file":"pain-attraction.png","cell":128,"frames":22,"frame_ms":70,"bitmap_ids":[261,366,676,274,449,500,38,533,178,142,467,91,383,565,257,62,623,367,601,420,187,135],"sprite_id":418,"renderer_mode":"vfx_only","mapping_confidence":"medium","source_dimensions":[[134,134],[139,139],[155,152],[160,159],[169,166],[170,168],[172,170],[172,170],[172,170],[171,170],[171,170],[170,170],[170,169],[170,170],[170,170],[169,171],[168,170],[166,169],[169,171],[167,167],[165,165],[127,151]],"scale":0.6976744186046512,"lifecycle":{"startup":[0,3],"active":[4,16],"recovery":[17,21]},"authored_disappearance":false,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[73,407,457,618,664,73],"sourceActorScale":0.9122807017543859,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"pain/layers/secondary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[73,407,457,618,664,73],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"pain/layers/secondary-source.webp","cell":[128,128],"frames":22,"columns":8,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"ultimate":{"file":"assets/skills-v28/pain/ultimate.webp","icon":"assets/skills-v28/pain/ultimate-icon.png","name":"球形引力场","cell":[201,172],"columns":8,"frames":36,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[15,136],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[100,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,9],"active":[10,28],"recovery":[29,35]},"emptyFrames":[],"lastOpaqueFrame":35,"source":{"baseFile":"assets/skills-v23/pain/ultimate.webp","baseMetadata":{"name":"球形引力场","file":"pain-gravity.png","cell":128,"frames":26,"frame_ms":70,"bitmap_ids":[311,404,115,384,195,146,425,682,20,557,545,598,619,525,471,616,245,665,629,358,203,438,491,288,429,72],"sprite_id":400,"renderer_mode":"vfx_only","mapping_confidence":"medium","source_dimensions":[[113,113],[119,119],[123,123],[129,129],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[133,133],[151,151],[169,169],[169,169],[169,169],[168,168],[167,168]],"scale":0.7100591715976331,"lifecycle":{"startup":[0,4],"active":[5,19],"recovery":[20,25]},"authored_disappearance":false,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[73,293,457,618,664,73],"sourceActorScale":0.9122807017543859,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"pain/layers/ultimate-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[73,293,457,618,664,73],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"pain/layers/ultimate-source.webp","cell":[128,128],"frames":26,"columns":8,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"}},"sourceMetadata":{"source_swf":"/workspace/art/catalog/swf/fighters__pain.swf","source_sha256":"8508122395a85ab4310756d560a9c84a42211f0f05bc97c26a2738061df3e58b"},"visualComplete":true},"konan":{"portrait":"assets/skills-v28/konan/portrait.webp","actor":{"file":"assets/skills-v28/konan/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":2,"cast":6},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v41/konan/primary.webp","icon":"assets/skills-v28/konan/primary-icon.png","name":"纸遁旋风","cell":[146,138],"columns":8,"frames":34,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[19,136],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[88,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,8],"active":[9,26],"recovery":[27,33]},"emptyFrames":[],"lastOpaqueFrame":33,"source":{"baseFile":"assets/skills-v23/konan/primary.webp","baseMetadata":{"name":"纸遁旋风","file":"konan-paperwhirl.png","cell":128,"frames":24,"frame_ms":70,"bitmap_ids":[46,79,170,152,183,505,338,605,146,470,248,58,250,596,40,369,241,129,30,514,81,393,115,498],"sprite_id":null,"renderer_mode":"vfx_only","mapping_confidence":"high","source_dimensions":[[63,121],[66,121],[65,121],[65,121],[64,122],[64,122],[64,122],[67,122],[66,121],[66,121],[66,120],[66,119],[66,119],[66,119],[65,118],[65,118],[65,118],[64,116],[64,116],[64,116],[64,116],[38,120],[38,120],[38,120]],"scale":0.9836065573770492,"lifecycle":{"startup":[0,3],"active":[4,18],"recovery":[19,23]},"authored_disappearance":true,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[508,257,551,290,402,24,508],"sourceActorScale":0.6753246753246753,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false,"actorScaleFix":{"referenceBitmap":508,"referenceHeight":77,"targetHeight":52,"method":"One shared caster scale for all poses; effect size/timing/anchors preserved."}},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"assets/skills-v41/konan/primary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[508,257,551,290,402,24,508],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"assets/skills-v23/konan/primary.webp","cell":[128,128],"frames":24,"columns":24,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"secondary":{"file":"assets/skills-v41/konan/secondary.webp","icon":"assets/skills-v28/konan/secondary-icon.png","name":"纸矛阵","cell":[200,73],"columns":8,"frames":24,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[25,71],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[92,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,18],"recovery":[19,23]},"emptyFrames":[],"lastOpaqueFrame":23,"source":{"baseFile":"assets/skills-v23/konan/secondary.webp","baseMetadata":{"name":"纸矛阵","file":"konan-spears.png","cell":128,"frames":10,"frame_ms":70,"bitmap_ids":[516,570,245,305,592,260,390,323,118,122],"sprite_id":553,"renderer_mode":"vfx_only","mapping_confidence":"high","source_dimensions":[[12,23],[98,57],[133,59],[11,49],[144,59],[158,52],[11,47],[160,53],[132,29],[132,29]],"scale":0.75,"lifecycle":{"startup":[0,1],"active":[2,7],"recovery":[8,9]},"authored_disappearance":false,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[508,322,326,328,334,333,508],"sourceActorScale":0.6753246753246753,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false,"actorScaleFix":{"referenceBitmap":508,"referenceHeight":77,"targetHeight":52,"method":"One shared caster scale for all poses; effect size/timing/anchors preserved."}},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"assets/skills-v41/konan/secondary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[508,322,326,328,334,333,508],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"assets/skills-v23/konan/secondary.webp","cell":[128,128],"frames":10,"columns":10,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"ultimate":{"file":"assets/skills-v41/konan/ultimate.webp","icon":"assets/skills-v28/konan/ultimate-icon.png","name":"纸龙卷","cell":[203,160],"columns":8,"frames":24,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[54,158],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[95,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,18],"recovery":[19,23]},"emptyFrames":[],"lastOpaqueFrame":23,"source":{"baseFile":"assets/skills-v23/konan/ultimate.webp","baseMetadata":{"name":"纸龙卷","file":"konan-tornado.png","cell":128,"frames":10,"frame_ms":70,"bitmap_ids":[421,573,25,431,611,287,400,523,228,360],"sprite_id":490,"renderer_mode":"vfx_only","mapping_confidence":"high","source_dimensions":[[83,130],[115,143],[118,158],[123,172],[109,183],[100,186],[103,184],[124,182],[121,181],[120,144]],"scale":0.6451612903225806,"lifecycle":{"startup":[0,1],"active":[2,7],"recovery":[8,9]},"authored_disappearance":true,"note":"For looping fields or projectiles, renderer must ease alpha in/out around this source sequence. Original authored bitmap sequence, alpha bounds centered per frame; source timing reconstructed at 70ms/frame. Canonical jutsu identity only asserted at stated confidence."},"sourceManifest":"/workspace/art/v23-akatsuki-a/ready/manifest.json","actorBitmapIds":[508,473,449,513,177,123,508],"sourceActorScale":0.6753246753246753,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false,"actorScaleFix":{"referenceBitmap":508,"referenceHeight":77,"targetHeight":52,"method":"One shared caster scale for all poses; effect size/timing/anchors preserved."}},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"assets/skills-v41/konan/ultimate-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":[508,473,449,513,177,123,508],"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"assets/skills-v23/konan/ultimate.webp","cell":[128,128],"frames":10,"columns":10,"anchor":[64.0,64.0],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"}},"sourceMetadata":{"source_swf":"/workspace/art/catalog/swf/fighters__konan.swf","source_sha256":"a350cafd75b0fb9b6b59e6a54518ea60f918ae325c97273feda1b5be2c89b781"},"visualComplete":true},"deidara":{"portrait":"assets/skills-v28/deidara/portrait.webp","actor":{"file":"assets/skills-v28/deidara/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":8,"run":8,"cast":8},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v28/deidara/primary.webp","icon":"assets/skills-v28/deidara/primary-icon.png","name":"黏土飞鸟投掷","cell":[63,57],"columns":8,"frames":26,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[21,54],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.24,0.8],"damageOffset":[50,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,20],"recovery":[21,25]},"emptyFrames":[3,22],"lastOpaqueFrame":25,"source":{"baseFile":"assets/skills-v23/deidara/primary.webp","baseMetadata":{"file":"deidara-skill1.png","name":"黏土飞鸟投掷","renderer_mode":"actor_composite","cell":[83,66],"frames":16,"foot_anchor":[30,57],"source_to_atlas_scale":1,"source_character_id":349,"source_frame_ids":[286,288,289,291,292,294,296,297,299,300,302,304,305,307,308,310],"duration":0.65,"phase_frames":{"start":[0,3],"loop":[4,11],"end":[12,15]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false},"sourceManifest":"/workspace/art/v23-akatsuki-b/ready/manifest.json","actorBitmapIds":[],"sourceActorScale":0.8813559322033898,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"deidara/layers/primary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"deidara/layers/primary-source.webp","cell":[83,66],"frames":16,"columns":8,"anchor":[30,57],"renderMode":"actor_composite","containsActor":true,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"secondary":{"file":"assets/skills-v28/deidara/secondary.webp","icon":"assets/skills-v28/deidara/secondary-icon.png","name":"起爆黏土·枭","cell":[143,181],"columns":8,"frames":26,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[73,133],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.24,0.8],"damageOffset":[55,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,20],"recovery":[21,25]},"emptyFrames":[3,22],"lastOpaqueFrame":25,"source":{"baseFile":"assets/skills-v23/deidara/secondary.webp","baseMetadata":{"file":"deidara-skill2.png","name":"黏土巨鸟乘行","renderer_mode":"actor_composite","cell":[174,217],"frames":16,"foot_anchor":[89,157],"source_to_atlas_scale":1,"source_character_id":349,"source_frame_ids":[423,425,427,428,430,432,434,436,437,439,441,443,445,446,448,450],"duration":1.05,"phase_frames":{"start":[0,3],"loop":[4,11],"end":[12,15]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false},"sourceManifest":"/workspace/art/v23-akatsuki-b/ready/manifest.json","actorBitmapIds":[],"sourceActorScale":0.8813559322033898,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"deidara/layers/secondary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"deidara/layers/secondary-source.webp","cell":[174,217],"frames":16,"columns":8,"anchor":[89,157],"renderMode":"actor_composite","containsActor":true,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"ultimate":{"file":"assets/skills-v28/deidara/ultimate.webp","icon":"assets/skills-v28/deidara/ultimate-icon.png","name":"黏土飞鸟爆破","cell":[180,136],"columns":8,"frames":30,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[21,117],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.5,0.81],"damageOffset":[90,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,14],"active":[15,24],"recovery":[25,29]},"emptyFrames":[],"lastOpaqueFrame":29,"source":{"baseFile":"assets/skills-v23/deidara/ultimate.webp","baseMetadata":{"file":"deidara-ultimate.png","name":"黏土飞鸟爆破","renderer_mode":"effect_only","cell":[167,181],"frames":20,"foot_anchor":[76,152],"source_to_atlas_scale":1,"source_character_id":238,"source_frame_ids":[1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58],"duration":1.45,"phase_frames":{"start":[0,4],"loop":[5,14],"end":[15,19]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false},"sourceManifest":"/workspace/art/v23-akatsuki-b/ready/manifest.json","actorBitmapIds":[],"sourceActorScale":0.8813559322033898,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"deidara/layers/ultimate-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"deidara/layers/ultimate-source.webp","cell":[167,181],"frames":20,"columns":8,"anchor":[76,152],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"}},"sourceMetadata":{"source_file":"fighters__deidara.swf","complete":true},"visualComplete":true},"madara":{"portrait":"assets/skills-v28/madara/portrait.webp","actor":{"file":"assets/skills-v28/madara/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":8,"run":8,"cast":8},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"naturalHeight":77.0,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v42/madara/primary.webp","cell":[433,169],"frames":18,"columns":8,"frame_times_ms":[66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667,66.66666666666667],"anchor":[95,157],"name":"须佐能乎横扫","renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery"],"damageWindow":[0.16,0.82],"damageOffset":[70,0],"visualComplete":true,"source":{"file":"madara-skill1.png","name":"须佐能乎横扫","renderer_mode":"actor_composite","cell":[480,193],"frames":16,"foot_anchor":[107.48466257668711,175.21472392638037],"source_to_atlas_scale":0.7361963190184049,"source_character_id":252,"source_frame_ids":[246,249,253,256,260,263,267,270,274,277,281,284,288,291,295,298],"duration":1.2,"phase_frames":{"start":[0,3],"loop":[4,11],"end":[12,15]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":true,"blackMatteCorrection":{"inputFile":"assets/skills-v28/madara/primary.webp","method":"max-channel black matte to alpha; premultiplied energy retained","casterGuard":[57,82,119,162],"casterMask":"connected actor-atlas palette component, one-pixel edge protection and hole fill","preserveBoundaryFrames":true}},"fps":15,"hideBaseActor":true,"allowMovement":false,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":17,"icon":"assets/skills-v42/madara/primary-icon.png"},"secondary":{"file":"assets/skills-v28/madara/secondary.webp","cell":[132,77],"frames":18,"columns":8,"frame_times_ms":[58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336,58.333333333333336],"anchor":[65,67],"name":"火遁喷吐","renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery"],"damageWindow":[0.16,0.82],"damageOffset":[70,0],"visualComplete":true,"source":{"file":"madara-skill2.png","name":"火遁喷吐","renderer_mode":"actor_composite","cell":[204,123],"frames":16,"foot_anchor":[100,103],"source_to_atlas_scale":1,"source_character_id":252,"source_frame_ids":[399,402,406,409,412,415,419,422,425,428,432,435,438,441,445,448],"duration":1.05,"phase_frames":{"start":[0,3],"loop":[4,11],"end":[12,15]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false},"fps":15,"hideBaseActor":true,"allowMovement":false,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":17,"icon":"assets/skills-v28/madara/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v42/madara/ultimate.webp","cell":[420,203],"frames":31,"columns":8,"frame_times_ms":[56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581,56.45161290322581],"anchor":[36,172],"name":"火遁持续轰烧","renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery"],"damageWindow":[0.16,0.82],"damageOffset":[70,0],"visualComplete":true,"source":{"file":"madara-ultimate.png","name":"火遁持续轰烧","renderer_mode":"actor_composite","cell":[480,216],"frames":29,"foot_anchor":[40.74820143884892,179.56834532374103],"source_to_atlas_scale":0.6906474820143885,"source_character_id":252,"source_frame_ids":[705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,789,793,797,801,805,809,813,817,821,825,829,831],"duration":1.75,"phase_frames":{"start":[0,6],"loop":[7,20],"end":[21,28]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false,"blackMatteCorrection":{"inputFile":"assets/skills-v28/madara/ultimate.webp","method":"max-channel black matte to alpha; premultiplied energy retained","casterGuard":[-2,97,81,177],"casterMask":"connected actor-atlas palette component, one-pixel edge protection and hole fill","preserveBoundaryFrames":true}},"fps":15,"hideBaseActor":true,"allowMovement":false,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":30,"icon":"assets/skills-v42/madara/ultimate-icon.png"}},"sourceMetadata":{"source_file":"fighters__madara.swf","complete":true},"visualComplete":true},"orochimaru":{"portrait":"assets/skills-v28/orochimaru/portrait.webp","actor":{"file":"assets/skills-v28/orochimaru/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":8,"run":8,"cast":8},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v28/orochimaru/primary.webp","icon":"assets/skills-v28/orochimaru/primary-icon.png","name":"伸舌回旋击","cell":[128,118],"columns":8,"frames":26,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[58,100],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.24,0.8],"damageOffset":[30,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,20],"recovery":[21,25]},"emptyFrames":[3,22],"lastOpaqueFrame":25,"source":{"baseFile":"assets/skills-v23/orochimaru/primary.webp","baseMetadata":{"file":"orochimaru-skill1.png","name":"伸舌回旋击","renderer_mode":"actor_composite","cell":[159,148],"frames":16,"foot_anchor":[73,121],"source_to_atlas_scale":1,"source_character_id":463,"source_frame_ids":[319,321,323,325,328,330,332,334,336,338,340,342,345,347,349,351],"duration":0.85,"phase_frames":{"start":[0,3],"loop":[4,11],"end":[12,15]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false},"sourceManifest":"/workspace/art/v23-akatsuki-b/ready/manifest.json","actorBitmapIds":[],"sourceActorScale":0.8666666666666667,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"orochimaru/layers/primary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"orochimaru/layers/primary-source.webp","cell":[159,148],"frames":16,"columns":8,"anchor":[73,121],"renderMode":"actor_composite","containsActor":true,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"secondary":{"file":"assets/skills-v28/orochimaru/secondary.webp","icon":"assets/skills-v28/orochimaru/secondary-icon.png","name":"紫雾吐息","cell":[159,140],"columns":8,"frames":26,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[20,113],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.24,0.8],"damageOffset":[90,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,20],"recovery":[21,25]},"emptyFrames":[3,22],"lastOpaqueFrame":25,"source":{"baseFile":"assets/skills-v23/orochimaru/secondary.webp","baseMetadata":{"file":"orochimaru-skill2.png","name":"紫雾吐息","renderer_mode":"actor_composite","cell":[195,173],"frames":16,"foot_anchor":[29,136],"source_to_atlas_scale":1,"source_character_id":463,"source_frame_ids":[389,392,395,398,400,403,406,409,412,415,418,421,423,426,429,432],"duration":1.05,"phase_frames":{"start":[0,3],"loop":[4,11],"end":[12,15]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false},"sourceManifest":"/workspace/art/v23-akatsuki-b/ready/manifest.json","actorBitmapIds":[],"sourceActorScale":0.8666666666666667,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"orochimaru/layers/secondary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"orochimaru/layers/secondary-source.webp","cell":[195,173],"frames":16,"columns":8,"anchor":[29,136],"renderMode":"actor_composite","containsActor":true,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"ultimate":{"file":"assets/skills-v28/orochimaru/ultimate.webp","icon":"assets/skills-v28/orochimaru/ultimate-icon.png","name":"草薙剑连斩","cell":[333,190],"columns":8,"frames":38,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[62,176],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.28,0.81],"damageOffset":[120,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,10],"active":[11,30],"recovery":[31,37]},"emptyFrames":[5,33],"lastOpaqueFrame":37,"source":{"baseFile":"assets/skills-v23/orochimaru/ultimate.webp","baseMetadata":{"file":"orochimaru-ultimate.png","name":"草薙剑连斩","renderer_mode":"actor_composite","cell":[481,182],"frames":28,"foot_anchor":[58.02197802197803,157.48822605965464],"source_to_atlas_scale":0.7535321821036107,"source_character_id":463,"source_frame_ids":[778,785,792,799,806,813,820,827,834,841,848,855,862,869,876,883,890,897,904,911,918,925,932,939,946,953,960,967],"duration":1.8,"phase_frames":{"start":[0,6],"loop":[7,20],"end":[21,27]},"confidence":{"animation":"high: rendered original timeline","jutsu_name":"descriptive visual label; exact canonical variant not asserted"},"black_matte_removed":false},"sourceManifest":"/workspace/art/v23-akatsuki-b/ready/manifest.json","actorBitmapIds":[],"sourceActorScale":0.8666666666666667,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"orochimaru/layers/ultimate-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"orochimaru/layers/ultimate-source.webp","cell":[481,182],"frames":28,"columns":8,"anchor":[58.02197802197803,157.48822605965464],"renderMode":"actor_composite","containsActor":true,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"}},"sourceMetadata":{"source_file":"fighters__orochimaru.swf","complete":true},"visualComplete":true},"kisame":{"portrait":"assets/skills-v28/kisame/portrait.webp","actor":{"file":"assets/skills-v28/kisame/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":6,"cast":3},"ms":{"idle":142.85714285714286,"run":83.33333333333333,"cast":111.11111111111111},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v28/kisame/primary.webp","icon":"assets/skills-v28/kisame/primary-icon.png","name":"鲛肌斩击","cell":[77,92],"columns":8,"frames":24,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[27,90],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.24,0.8],"damageOffset":[30,0],"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,5],"active":[6,19],"recovery":[20,23]},"emptyFrames":[3],"lastOpaqueFrame":23,"source":{"baseFile":"assets/skills-v23/kisame/primary.webp","baseMetadata":{"file":"kisame-samehada-slash.png","frames":7,"cell":[160,160],"anchor":[80,120],"fps":13,"sourceFrames":[{"sourceRect":[0,206,88,302],"sourceAnchor":[28,95],"outputRect":[0,0,160,160]},{"sourceRect":[90,206,178,302],"sourceAnchor":[32,95],"outputRect":[160,0,160,160]},{"sourceRect":[180,206,268,302],"sourceAnchor":[35,95],"outputRect":[320,0,160,160]},{"sourceRect":[270,206,358,302],"sourceAnchor":[35,95],"outputRect":[480,0,160,160]},{"sourceRect":[360,206,448,302],"sourceAnchor":[36,95],"outputRect":[640,0,160,160]},{"sourceRect":[450,206,538,302],"sourceAnchor":[32,95],"outputRect":[800,0,160,160]},{"sourceRect":[540,206,628,302],"sourceAnchor":[28,95],"outputRect":[960,0,160,160]}],"name":"鲛肌斩击","renderMode":"actor_composite","lifecycle":{"startup":[0,2],"active":[3,5],"recovery":[6,6]},"nameConfidence":"visual: Samehada sword arc; no exact move name labeled in source"},"sourceManifest":"/workspace/art/v23-missing-akatsuki/ready/kisame-manifest.json","actorBitmapIds":[],"sourceActorScale":0.9811320754716981,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"kisame/layers/primary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"kisame/layers/primary-source.webp","cell":[160,160],"frames":7,"columns":7,"anchor":[80,120],"renderMode":"actor_composite","containsActor":true,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"secondary":{"file":"assets/skills-v28/kisame/secondary.webp","icon":"assets/skills-v28/kisame/secondary-icon.png","name":"水遁·水浪冲击","cell":[174,100],"columns":8,"frames":38,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[22,98],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[90,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,9],"active":[10,29],"recovery":[30,37]},"emptyFrames":[],"lastOpaqueFrame":37,"source":{"baseFile":"assets/skills-v23/kisame/secondary.webp","baseMetadata":{"file":"kisame-water-surge.png","frames":29,"cell":[192,160],"anchor":[96,132],"fps":18,"sourceFrames":[{"sourceRect":[276,3857,412,3964],"sourceAnchor":[68,98],"outputRect":[0,0,192,160]},{"sourceRect":[414,3857,550,3964],"sourceAnchor":[68,98],"outputRect":[192,0,192,160]},{"sourceRect":[552,3857,688,3964],"sourceAnchor":[68,98],"outputRect":[384,0,192,160]},{"sourceRect":[690,3857,826,3964],"sourceAnchor":[68,98],"outputRect":[576,0,192,160]},{"sourceRect":[828,3857,964,3964],"sourceAnchor":[68,98],"outputRect":[768,0,192,160]},{"sourceRect":[0,3966,136,4073],"sourceAnchor":[68,98],"outputRect":[960,0,192,160]},{"sourceRect":[138,3966,274,4073],"sourceAnchor":[68,98],"outputRect":[1152,0,192,160]},{"sourceRect":[276,3966,412,4073],"sourceAnchor":[68,98],"outputRect":[1344,0,192,160]},{"sourceRect":[414,3966,550,4073],"sourceAnchor":[68,98],"outputRect":[1536,0,192,160]},{"sourceRect":[552,3966,688,4073],"sourceAnchor":[68,98],"outputRect":[1728,0,192,160]},{"sourceRect":[690,3966,826,4073],"sourceAnchor":[68,98],"outputRect":[1920,0,192,160]},{"sourceRect":[828,3966,964,4073],"sourceAnchor":[68,98],"outputRect":[2112,0,192,160]},{"sourceRect":[0,4075,136,4182],"sourceAnchor":[68,98],"outputRect":[2304,0,192,160]},{"sourceRect":[138,4075,274,4182],"sourceAnchor":[68,98],"outputRect":[2496,0,192,160]},{"sourceRect":[276,4075,412,4182],"sourceAnchor":[68,98],"outputRect":[2688,0,192,160]},{"sourceRect":[414,4075,550,4182],"sourceAnchor":[68,98],"outputRect":[2880,0,192,160]},{"sourceRect":[552,4075,688,4182],"sourceAnchor":[68,98],"outputRect":[3072,0,192,160]},{"sourceRect":[690,4075,826,4182],"sourceAnchor":[68,98],"outputRect":[3264,0,192,160]},{"sourceRect":[828,4075,964,4182],"sourceAnchor":[68,98],"outputRect":[3456,0,192,160]},{"sourceRect":[0,4184,136,4291],"sourceAnchor":[68,98],"outputRect":[3648,0,192,160]},{"sourceRect":[138,4184,274,4291],"sourceAnchor":[68,98],"outputRect":[3840,0,192,160]},{"sourceRect":[276,4184,412,4291],"sourceAnchor":[68,98],"outputRect":[4032,0,192,160]},{"sourceRect":[414,4184,550,4291],"sourceAnchor":[68,98],"outputRect":[4224,0,192,160]},{"sourceRect":[552,4184,688,4291],"sourceAnchor":[68,98],"outputRect":[4416,0,192,160]},{"sourceRect":[690,4184,826,4291],"sourceAnchor":[68,98],"outputRect":[4608,0,192,160]},{"sourceRect":[828,4184,964,4291],"sourceAnchor":[68,98],"outputRect":[4800,0,192,160]},{"sourceRect":[0,4293,136,4400],"sourceAnchor":[68,98],"outputRect":[4992,0,192,160]},{"sourceRect":[138,4293,274,4400],"sourceAnchor":[68,98],"outputRect":[5184,0,192,160]},{"sourceRect":[276,4293,412,4400],"sourceAnchor":[68,98],"outputRect":[5376,0,192,160]}],"name":"水遁·水浪冲击","renderMode":"effect_only","lifecycle":{"startup":[0,11],"active":[12,22],"recovery":[23,28]},"nameConfidence":"descriptive name for visually verified rising/splitting water wave; not asserting original named jutsu"},"sourceManifest":"/workspace/art/v23-missing-akatsuki/ready/kisame-manifest.json","actorBitmapIds":[],"sourceActorScale":0.9811320754716981,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"kisame/layers/secondary-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"kisame/layers/secondary-source.webp","cell":[192,160],"frames":28,"columns":8,"anchor":[96,132],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"},"ultimate":{"file":"assets/skills-v28/kisame/ultimate.webp","icon":"assets/skills-v28/kisame/ultimate-icon.png","name":"水遁·水鲛弹","cell":[190,71],"columns":8,"frames":26,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[22,65],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.26,0.78],"damageOffset":[100,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"lifecycle":{"startup":[0,6],"active":[7,20],"recovery":[21,25]},"emptyFrames":[],"lastOpaqueFrame":25,"source":{"baseFile":"assets/skills-v23/kisame/ultimate.webp","baseMetadata":{"file":"kisame-water-shark.png","frames":16,"cell":[192,160],"anchor":[96,132],"fps":16,"sourceFrames":[{"sourceRect":[0,4511,136,4618],"sourceAnchor":[68,98],"outputRect":[0,0,192,160]},{"sourceRect":[138,4511,274,4618],"sourceAnchor":[68,98],"outputRect":[192,0,192,160]},{"sourceRect":[276,4511,412,4618],"sourceAnchor":[68,98],"outputRect":[384,0,192,160]},{"sourceRect":[414,4511,550,4618],"sourceAnchor":[68,98],"outputRect":[576,0,192,160]},{"sourceRect":[552,4511,688,4618],"sourceAnchor":[68,98],"outputRect":[768,0,192,160]},{"sourceRect":[690,4511,826,4618],"sourceAnchor":[68,98],"outputRect":[960,0,192,160]},{"sourceRect":[828,4511,964,4618],"sourceAnchor":[68,98],"outputRect":[1152,0,192,160]},{"sourceRect":[0,4620,136,4727],"sourceAnchor":[68,98],"outputRect":[1344,0,192,160]},{"sourceRect":[138,4620,274,4727],"sourceAnchor":[68,98],"outputRect":[1536,0,192,160]},{"sourceRect":[276,4620,412,4727],"sourceAnchor":[68,98],"outputRect":[1728,0,192,160]},{"sourceRect":[414,4620,550,4727],"sourceAnchor":[68,98],"outputRect":[1920,0,192,160]},{"sourceRect":[552,4620,688,4727],"sourceAnchor":[68,98],"outputRect":[2112,0,192,160]},{"sourceRect":[690,4620,826,4727],"sourceAnchor":[68,98],"outputRect":[2304,0,192,160]},{"sourceRect":[828,4620,964,4727],"sourceAnchor":[68,98],"outputRect":[2496,0,192,160]},{"sourceRect":[0,4729,136,4836],"sourceAnchor":[68,98],"outputRect":[2688,0,192,160]},{"sourceRect":[138,4729,274,4836],"sourceAnchor":[68,98],"outputRect":[2880,0,192,160]}],"name":"水遁·水鲛弹","renderMode":"effect_only","lifecycle":{"startup":[0,6],"active":[7,15],"recovery":[14,15]},"nameConfidence":"visual: water rises and resolves into distinct shark projectile","note":"尾帧为移动水鲨；消散应沿用最后两帧淡出，不循环完整出生序列。"},"sourceManifest":"/workspace/art/v23-missing-akatsuki/ready/kisame-manifest.json","actorBitmapIds":[],"sourceActorScale":0.9811320754716981,"curation":"Original raster art; explicit cast/startup, source attack, recovery, common registration crop; authored alpha fade used for source tails. Not original SWF engine timing.","newDrawnFrameClaim":false},"artStage":"composed","completeAnimation":true,"sourceLayers":{"caster":{"file":"kisame/layers/ultimate-caster.webp","cell":[96,96],"columns":8,"frames":8,"anchor":[48,84],"frame_times_ms":[85,85,85,85,85,85,85,85],"sourceBitmapIds":null,"genuineNewUniqueFrames":false,"note":"Distinct source poses for this move; playback holds/reorders do not count as new drawn frames."},"source":{"file":"kisame/layers/ultimate-source.webp","cell":[192,160],"frames":16,"columns":8,"anchor":[96,132],"renderMode":"effect","containsActor":false,"note":"Original normalized source frames, not a newly generated effect."}},"visualStage":"composed"}},"sourceMetadata":{"character":"kisame","name":"干柿鬼鲛","source":{"game":"Naruto Shippuden: Naruto vs. Sasuke (Nintendo DS)","sheet":"../kisame-ds.png","url":"https://www.spriters-resource.com/media/assets/96/98898.png?updated=1755476471","page":"https://www.spriters-resource.com/ds_dsi/narutoshippudennarutovssasuke/asset/98898/","ripper":"Ploaj","license":"Copyrighted game rip; no open license. Original Naruto/game rights remain with rights holders."}},"visualComplete":true},"kakuzu":{"portrait":"assets/skills-v27/kakuzu/portrait.png","actor":{"file":"assets/skills-v27/kakuzu/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3,"attack":4},"counts":{"idle":2,"run":6,"cast":2,"hurt":1,"attack":3},"ms":{"idle":150,"run":85,"cast":90,"hurt":110,"attack":90},"anchor":[48,84],"scale":1,"naturalHeight":52,"targetHeight":52},"skills":{"primary":{"name":"火遁·火球冲击","id":"kakuzu-primary-v27","file":"assets/skills-v27/kakuzu/primary.webp","icon":"assets/skills-v27/kakuzu/primary-icon.png","cell":[230,83],"anchor":[17,76],"registrationCrop":[79,140,309,223],"originalCell":[384,256],"columns":8,"frames":32,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.38,0.8],"damageOffset":[130,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"emptyFrames":[],"lastOpaqueFrame":31,"sourceMetadata":{"source_archive_sha256":"72575e75b35370e321ff41821fc204328e26dedb642cc4e8cfc447e9ab73005f","composition":"Curated actor/helper choreography; original pixel art and corrected SFF shared palettes. Timing and spacing adapted for this top-down game.","notNewHandDrawnFrames":true}},"secondary":{"name":"雷遁·雷球","id":"kakuzu-secondary-v27","file":"assets/skills-v27/kakuzu/secondary.webp","icon":"assets/skills-v27/kakuzu/secondary-icon.png","cell":[208,91],"anchor":[17,79],"registrationCrop":[79,137,287,228],"originalCell":[384,256],"columns":8,"frames":32,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.38,0.8],"damageOffset":[130,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"emptyFrames":[],"lastOpaqueFrame":31,"sourceMetadata":{"source_archive_sha256":"72575e75b35370e321ff41821fc204328e26dedb642cc4e8cfc447e9ab73005f","composition":"Curated actor/helper choreography; original pixel art and corrected SFF shared palettes. Timing and spacing adapted for this top-down game.","notNewHandDrawnFrames":true}},"ultimate":{"name":"地怨虞·面具齐攻","id":"kakuzu-ultimate-v27","file":"assets/skills-v27/kakuzu/ultimate.webp","icon":"assets/skills-v27/kakuzu/ultimate-icon.png","cell":[346,151],"anchor":[60,144],"registrationCrop":[36,72,382,223],"originalCell":[384,256],"columns":8,"frames":52,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.4,0.84],"damageOffset":[130,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"emptyFrames":[],"lastOpaqueFrame":51,"sourceMetadata":{"source_archive_sha256":"72575e75b35370e321ff41821fc204328e26dedb642cc4e8cfc447e9ab73005f","composition":"Curated actor/helper choreography; original pixel art and corrected SFF shared palettes. Timing and spacing adapted for this top-down game.","notNewHandDrawnFrames":true}}},"sourceManifest":"docs/materials-v26/kakuzu-manifest.json"},"naruto_shippuden":{"portrait":"assets/skills-v23/naruto_shippuden/portrait.webp","actor":{"file":"assets/skills-v23/naruto_shippuden/actor.webp","cell":[96,96],"columns":7,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":7,"cast":4},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1.0,"naturalHeight":52,"targetHeight":52},"skills":{"primary":{"name":"螺旋丸","cell":[128,128],"frames":2,"fps":10,"renderMode":"effect","anchor":[64,64],"renderScale":0.4,"playDuration":1.0,"stationary":true,"chargeDuration":0,"loop":true,"unique_source_frames":2,"source":"Existing authentic DS Rasengan loop retained; source rectangles in audit. Runtime alpha may cover first/last80ms without delaying damage.","file":"assets/skills-v24/naruto_shippuden/primary.webp","id":"rasengan","sourceMetadata":{"name":"螺旋丸","file":"rasengan-stationary.png","cell":[128,128],"frames":2,"fps":10,"renderMode":"effect","anchor":[64,64],"renderScale":0.4,"playDuration":1.0,"stationary":true,"chargeDuration":0,"loop":true,"unique_source_frames":2,"source":"Existing authentic DS Rasengan loop retained; source rectangles in audit. Runtime alpha may cover first/last80ms without delaying damage."},"emptyFrames":[],"lastOpaqueFrame":1,"sourceFrameIndices":[0,1],"offset":[0,-24],"icon":"assets/skills-v24/naruto_shippuden/primary-icon.webp","iconSourceFrame":1},"secondary":{"icon":"assets/skills-v23/naruto_shippuden/secondary-icon.webp","iconSourceFrame":9,"iconOriginalSourceFrame":9,"id":"clone","name":"多重影分身之术","file":"assets/skills-v23/naruto_shippuden/secondary.webp","cell":[116,90],"anchor":[67,82],"fps":14.285714285714286,"frames":10,"renderMode":"actor_composite","renderScale":1.0,"hideBaseActor":true,"sourceMetadata":{"name":"影分身·协同螺旋丸","file":"shippuden-clone.png","cell":128,"frames":10,"frame_ms":70,"renderer_mode":"actor_composite","mapping_confidence":"high","source_scale":1,"authored_disappearance":false,"lifecycle":{"startup":[0,1],"active":[2,7],"recovery":[8,9]},"note":"Source pixels retained. Renderer should fade start/end and hide base actor for actor_composite. Timeline sampling/reassembly is explicitly recorded.","bitmap_ids":[142,144,146,148,150,153,155,157,160,162],"source_swf":"/workspace/art/catalog/swf/fighters__naruto.swf","actor_outfit_match":"Verified black-shoulder orange shippuden outfit matches shippuden-actions.png","source_sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d"},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9],"emptyFrames":[],"lastOpaqueFrame":9,"lifecycle":{"startup":[0,1],"active":[2,7],"recovery":[8,9]},"authored_disappearance":false},"ultimate":{"name":"大玉螺旋丸","cell":[243,193],"frames":47,"fps":16,"anchor":[72,175],"renderMode":"actor_composite","hideBaseActor":true,"renderScale":0.9811320754716981,"natural_actor_height":53,"playDuration":2.9375,"source":{"source_swf":"/workspace/art/catalog/swf/fighters__naruto.swf","sourceSHA256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":737,"source_frame_ids":[601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,671,673,675,677,679,681,683,685,687,689,691,692],"source_fps":32,"sample_stride":2,"labels":{"601":"必杀","640":"必杀1","683":"必杀0"},"original_bitmap_ids":[394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,437,439,441,443,445,447,449,451,453,455,458,460,462,464,466,468,470,472,474,476,478,480,482]},"mappingConfidence":"high visually: shippuden Naruto and shadow clone jointly advance a growing large sphere; exact source labels are generic 必杀, not a written jutsu name","differenceFromOrdinary":["Original two-character shadow-clone choreography","Distinct large sphere with concentric cyan/flame-like outline frames","Forward pushing posture and advancing source actor motion","Large authored ground vortex with debris impact","Authored recovery and clone smoke"],"lifecycle":{"startup":[0,12],"active":[13,33],"impact":[34,38],"recovery":[39,46]},"emptyFrames":[],"lastOpaqueFrame":46,"file":"assets/skills-v24/naruto_shippuden/ultimate.webp","id":"oodama-authored","sourceMetadata":{"name":"大玉螺旋丸","file":"oodama-distinct-composite.png","cell":[243,193],"frames":47,"fps":16,"anchor":[72,175],"renderMode":"actor_composite","hideBaseActor":true,"renderScale":0.9811320754716981,"natural_actor_height":53,"playDuration":2.9375,"source":{"source_swf":"/workspace/art/catalog/swf/fighters__naruto.swf","sourceSHA256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":737,"source_frame_ids":[601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,671,673,675,677,679,681,683,685,687,689,691,692],"source_fps":32,"sample_stride":2,"labels":{"601":"必杀","640":"必杀1","683":"必杀0"},"original_bitmap_ids":[394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,437,439,441,443,445,447,449,451,453,455,458,460,462,464,466,468,470,472,474,476,478,480,482]},"mappingConfidence":"high visually: shippuden Naruto and shadow clone jointly advance a growing large sphere; exact source labels are generic 必杀, not a written jutsu name","differenceFromOrdinary":["Original two-character shadow-clone choreography","Distinct large sphere with concentric cyan/flame-like outline frames","Forward pushing posture and advancing source actor motion","Large authored ground vortex with debris impact","Authored recovery and clone smoke"],"lifecycle":{"startup":[0,12],"active":[13,33],"impact":[34,38],"recovery":[39,46]},"emptyFrames":[],"lastOpaqueFrame":46,"impact":{"file":"oodama-impact.png","cell":[230,193],"frames":4,"fps":16,"anchor":[115,185],"renderMode":"effect","renderScale":1,"source_swf":"/workspace/art/catalog/swf/fighters__naruto.swf","source_bitmap_ids":[455,460,464,468]}},"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"damageWindow":[0.2765957446808511,0.8297872340425532],"allowMovement":true,"icon":"assets/skills-v24/naruto_shippuden/ultimate-icon.webp","iconSourceFrame":35}},"sourceManifest":"/workspace/art/v23-base-a/ready/manifest.json","sourceMetadata":{}},"sasuke":{"portrait":"assets/skills-v23/sasuke/portrait.webp","actor":{"file":"assets/skills-v23/sasuke/actor.webp","cell":[96,96],"columns":4,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":4,"cast":4},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":0.9454545454545454,"naturalHeight":55.0,"targetHeight":52},"skills":{"primary":{"icon":"assets/skills-v23/sasuke/primary-icon.webp","iconSourceFrame":23,"iconOriginalSourceFrame":23,"id":"chidori","name":"千鸟","file":"assets/skills-v23/sasuke/primary.webp","cell":[158,97],"anchor":[59,72],"fps":14.285714285714286,"frames":30,"renderMode":"actor_composite","renderScale":0.9454545454545454,"hideBaseActor":true,"sourceMetadata":{"name":"千鸟连突","file":"sasuke-chidori.png","cell":128,"frames":30,"frame_ms":70,"renderer_mode":"actor_composite","mapping_confidence":"high","source_scale":1,"authored_disappearance":false,"lifecycle":{"startup":[0,5],"active":[6,23],"recovery":[24,29]},"note":"Source pixels retained. Renderer should fade start/end and hide base actor for actor_composite. Timeline sampling/reassembly is explicitly recorded.","source_swf":"/workspace/art/catalog/swf/fighters__sasuke.swf","sprite_id":2,"timeline_frames":[577,579,581,583,585,587,589,591,593,595,597,599,601,603,605,607,609,610,612,614,616,618,620,622,624,626,628,630,632,637],"actor_outfit_match":"Verified white open shirt and purple rope matches sasuke-actions.png","source_sha256":"d421184b595d6122384f47e55312f6827a6ee4779fb7627fbebb6a247dbf5a5a"},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"emptyFrames":[],"lastOpaqueFrame":29,"lifecycle":{"startup":[0,5],"active":[6,23],"recovery":[24,29]},"authored_disappearance":false},"secondary":{"icon":"assets/skills-v23/sasuke/secondary-icon.webp","iconSourceFrame":1,"iconOriginalSourceFrame":1,"id":"fireball","name":"火遁·豪火球之术","file":"assets/skills-v23/sasuke/secondary.webp","cell":[128,128],"anchor":[64.0,64.0],"fps":14.285714285714286,"frames":5,"renderMode":"effect","renderScale":1,"hideBaseActor":false,"sourceMetadata":{"name":"火遁·豪火球之术","file":"sasuke-fireball.png","cell":128,"frames":5,"frame_ms":70,"renderer_mode":"vfx_only","mapping_confidence":"high","source_scale":1,"authored_disappearance":false,"lifecycle":{"startup":[0,0],"active":[1,3],"recovery":[4,4]},"note":"Unique bitmap order recovered from sprite 932, which holds/repeats these 5 source images over 13 timeline frames. Final flame dispersal retained.","source_swf":"/workspace/art/catalog/swf/fighters__sasuke.swf","sprite_id":932,"bitmap_ids":[600,185,772,37,956],"source_sha256":"d421184b595d6122384f47e55312f6827a6ee4779fb7627fbebb6a247dbf5a5a"},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4],"emptyFrames":[],"lastOpaqueFrame":4,"lifecycle":{"startup":[0,0],"active":[1,3],"recovery":[4,4]},"authored_disappearance":false},"ultimate":{"icon":"assets/skills-v23/sasuke/ultimate-icon.webp","iconSourceFrame":6,"iconOriginalSourceFrame":6,"id":"sword","name":"千鸟刀","file":"assets/skills-v23/sasuke/ultimate.webp","cell":[134,68],"anchor":[49,61],"fps":14.285714285714286,"frames":16,"renderMode":"actor_composite","renderScale":0.9454545454545454,"hideBaseActor":true,"sourceMetadata":{"name":"千鸟锐枪·雷剑突刺","file":"sasuke-sword.png","cell":128,"frames":16,"frame_ms":70,"renderer_mode":"actor_composite","mapping_confidence":"high","source_scale":1,"authored_disappearance":false,"lifecycle":{"startup":[0,2],"active":[3,11],"recovery":[12,15]},"note":"Source pixels retained. Renderer should fade start/end and hide base actor for actor_composite. Timeline sampling/reassembly is explicitly recorded.","source_swf":"/workspace/art/catalog/swf/fighters__sasuke.swf","sprite_id":2,"timeline_frames":[269,271,273,275,277,279,281,283,285,287,289,291,293,295,297,298],"actor_outfit_match":"Verified white open shirt and purple rope matches sasuke-actions.png","source_sha256":"d421184b595d6122384f47e55312f6827a6ee4779fb7627fbebb6a247dbf5a5a"},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"emptyFrames":[],"lastOpaqueFrame":15,"lifecycle":{"startup":[0,2],"active":[3,11],"recovery":[12,15]},"authored_disappearance":false}},"sourceManifest":"/workspace/art/v23-base-a/ready/manifest.json","sourceMetadata":{}},"kakashi":{"portrait":"assets/skills-v28/kakashi/portrait.webp","actor":{"file":"assets/skills-v28/kakashi/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":6,"run":7,"cast":4},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1,"naturalHeight":52,"source":{"file":"assets/skills-v23/kakashi/actor.webp","cell":[96,96],"columns":7,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":6,"run":7,"cast":4},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":1.0,"naturalHeight":52,"targetHeight":52}},"skills":{"primary":{"file":"assets/skills-v28/kakashi/primary.webp","cell":[200,69],"columns":8,"frames":27,"frame_times_ms":[59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593,59.2593],"fps":16.875,"anchor":[34,59],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"damageWindow":[0.18518518518518517,0.8518518518518519],"lifecycle":{"startup":[0,4],"active":[5,22],"recovery":[23,26]},"animationReady":true,"source":{"path":"/workspace/sites/ninja-download-release/dist/assets/skills-v23/kakashi/primary.webp","sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09","retainedMetadata":{"name":"雷切","file":"kakashi-raikiri.png","cell":128,"frames":25,"frame_ms":70,"renderer_mode":"actor_composite","mapping_confidence":"high","source_scale":1,"authored_disappearance":false,"lifecycle":{"startup":[0,4],"active":[5,19],"recovery":[20,24]},"note":"Source pixels retained. Renderer should fade start/end and hide base actor for actor_composite. Timeline sampling/reassembly is explicitly recorded.","source_swf":"/workspace/art/catalog/swf/fighters__kakashi.swf","bitmap_ids":[381,383,385,387,389,391,393,395,397,399,401,403,405,407,409,411,413,415,418,420,422,424,426,428,430],"actor_outfit_match":"Verified green flak vest matches kakashi-actions.png","source_sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09"},"adaptation":"Source registered composite retained; neutral startup/recovery and compact texture packing added."},"duration":1.6,"maxTextureDimension":1600,"name":"雷切","nameStatus":"matched","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":26,"icon":"assets/skills-v28/kakashi/primary-icon.webp"},"secondary":{"file":"assets/skills-v28/kakashi/secondary.webp","cell":[148,118],"columns":8,"frames":32,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"fps":20.0,"anchor":[24,108],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.1875,0.84375],"lifecycle":{"startup":[0,5],"active":[6,26],"recovery":[27,31]},"animationReady":true,"source":{"sourceBitmapIds":[121,123,125,129,131,133,135,137,139,141,143,145,147],"electricBitmapIds":[78,80,82,84,86,88],"sourceSwf":"/workspace/art/catalog/swf/fighters__kakashi.swf","adaptation":"Caster remains at foot anchor; original clone/smoke poses move forward and discharge original electric impact layers. New source-based choreography, not an unmodified dedicated movie.","sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09"},"duration":1.6,"maxTextureDimension":1184,"name":"雷遁·影分身之术","nameStatus":"adapted","damageOffset":[70,0],"hideBaseActor":true,"allowMovement":false,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":31,"icon":"assets/skills-v28/kakashi/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v28/kakashi/ultimate.webp","cell":[151,172],"columns":8,"frames":30,"frame_times_ms":[60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0],"fps":16.666666666666668,"anchor":[24,170],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.2,0.8333333333333334],"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,29]},"animationReady":true,"source":{"sourceBitmapIds":[434,438,444],"startupElectricBitmapIds":[78,80,82,84,86,88],"sourceSwf":"/workspace/art/catalog/swf/fighters__kakashi.swf","adaptation":"Original three distinct falling-bolt stages; onset/hold/alpha disappearance and caster pose are explicitly added. No claim of a canon named 雷牢术.","sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09"},"duration":1.8,"maxTextureDimension":1208,"name":"雷遁·落雷","nameStatus":"preview","damageOffset":[95,0],"hideBaseActor":true,"allowMovement":false,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":29,"icon":"assets/skills-v28/kakashi/ultimate-icon.webp"}},"sourceMetadata":{},"visualComplete":true},"gaara":{"portrait":"assets/skills-v23/gaara/portrait.webp","actor":{"file":"assets/skills-v23/gaara/actor.webp","cell":[96,96],"columns":4,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":4,"cast":4},"ms":{"idle":160,"run":95,"cast":85},"anchor":[48,84],"scale":0.9629629629629629,"naturalHeight":54.0,"targetHeight":52},"skills":{"primary":{"icon":"assets/skills-v23/gaara/primary-icon.webp","iconSourceFrame":10,"iconOriginalSourceFrame":11,"id":"skill1","name":"砂缚牢","file":"assets/skills-v23/gaara/primary.webp","cell":[174,157],"anchor":[87.0,149],"fps":15.833333333333334,"frames":19,"renderMode":"effect","renderScale":1,"hideBaseActor":false,"sourceMetadata":{"file":"gaara-skill1.png","name":"砂缚牢","renderer_mode":"effect_only","cell":[174,157],"frames":20,"foot_anchor":[87.0,149],"source_to_atlas_scale":1,"source_character_id":635,"source_frame_ids":[1,4,7,10,14,17,20,23,26,29,33,36,39,42,45,48,52,55,58,61],"duration":1.2,"phase_frames":{"start":[0,4],"loop":[5,14],"end":[15,19]},"confidence":{"animation":"high: visually reviewed original timeline","jutsu_name":"canonical name when named source; otherwise descriptive visual label"}},"removedTransparentFrames":[9],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19],"emptyFrames":[15,16,17,18],"lastOpaqueFrame":14,"phase_frames":{"start":[0,4],"loop":[5,13],"end":[14,18]}},"secondary":{"icon":"assets/skills-v23/gaara/secondary-icon.webp","iconSourceFrame":15,"iconOriginalSourceFrame":17,"id":"skill2","name":"砂瀑送葬","file":"assets/skills-v23/gaara/secondary.webp","cell":[143,164],"anchor":[71.5,156],"fps":12.0,"frames":18,"renderMode":"effect","renderScale":1,"hideBaseActor":false,"sourceMetadata":{"file":"gaara-skill2.png","name":"砂缚柩","renderer_mode":"effect_only","cell":[143,164],"frames":20,"foot_anchor":[71.5,156],"source_to_atlas_scale":1,"source_character_id":695,"source_frame_ids":[1,7,13,18,24,30,36,42,47,53,59,65,70,76,82,88,94,99,105,111],"duration":1.5,"phase_frames":{"start":[0,4],"loop":[5,14],"end":[15,19]},"confidence":{"animation":"high: visually reviewed original timeline","jutsu_name":"canonical name when named source; otherwise descriptive visual label"}},"removedTransparentFrames":[5,6],"sourceFrameIndices":[0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19],"emptyFrames":[16,17],"lastOpaqueFrame":15,"phase_frames":{"start":[0,4],"loop":[5,12],"end":[13,17]}},"ultimate":{"icon":"assets/skills-v23/gaara/ultimate-icon.webp","iconSourceFrame":5,"iconOriginalSourceFrame":6,"id":"ultimate","name":"流砂瀑流","file":"assets/skills-v23/gaara/ultimate.webp","cell":[480,270],"anchor":[240.0,262.4719101123595],"fps":11.875,"frames":19,"renderMode":"effect","renderScale":1,"hideBaseActor":false,"sourceMetadata":{"file":"gaara-ultimate.png","name":"流砂瀑流","renderer_mode":"effect_only","cell":[480,270],"frames":20,"foot_anchor":[240.0,262.4719101123595],"source_to_atlas_scale":0.898876404494382,"source_character_id":745,"source_frame_ids":[1,6,10,15,19,24,28,33,38,42,47,51,56,61,65,70,74,79,83,88],"duration":1.6,"phase_frames":{"start":[0,4],"loop":[5,14],"end":[15,19]},"confidence":{"animation":"high: visually reviewed original timeline","jutsu_name":"canonical name when named source; otherwise descriptive visual label"}},"removedTransparentFrames":[0],"sourceFrameIndices":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"emptyFrames":[18],"lastOpaqueFrame":17,"phase_frames":{"start":[0,3],"loop":[4,13],"end":[14,18]}}},"sourceManifest":"/workspace/art/v23-base-b/ready/manifest.json","sourceMetadata":{"source_file":"fighters__gaara.swf","complete":true}},"temari":{"portrait":"assets/skills-v28/temari/portrait.webp","actor":{"file":"assets/skills-v28/temari/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":8,"cast":6},"ms":{"idle":150,"run":85,"cast":90},"anchor":[48,84],"scale":1,"naturalHeight":52,"sourceFrames":{"idle":[1,3,5,7],"run":[10,12,14,16,18,20,22,24],"cast":[389,391,393,395,397,399]}},"skills":{"primary":{"file":"assets/skills-v28/temari/primary.webp","cell":[61,56],"columns":8,"frames":22,"frame_times_ms":[59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909],"fps":16.923076923076923,"anchor":[25,54],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.18181818181818182,0.8636363636363636],"lifecycle":{"startup":[0,3],"active":[4,18],"recovery":[19,21]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__temari.swf","sha256":"d531eab68ab7d65d643419a4d51a5274df6b298a9d8ad4c429a32c0f40884122","frameRange":[389,427],"timelineSprite":114,"sourceFrameIndices":[389,391,393,395,397,399,401,403,405,407,409,411,413,415,417,419,421,423,425,427],"authoredTimeline":true,"registration":{"sourceFoot":[319.5,622],"scale":0.9629629629629629},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.3,"maxTextureDimension":488,"name":"忍具·风魔手里剑","nameStatus":"preview","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":21,"icon":"assets/skills-v28/temari/primary-icon.webp"},"secondary":{"file":"assets/skills-v28/temari/secondary.webp","cell":[167,141],"columns":8,"frames":19,"frame_times_ms":[84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105,84.2105],"fps":11.875,"anchor":[47,139],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.21052631578947367,0.8421052631578947],"lifecycle":{"startup":[0,3],"active":[4,15],"recovery":[16,18]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__temari.swf","sha256":"d531eab68ab7d65d643419a4d51a5274df6b298a9d8ad4c429a32c0f40884122","frameRange":[428,493],"timelineSprite":114,"sourceFrameIndices":[428,432,436,440,444,448,452,456,460,464,468,472,476,480,484,488,493],"authoredTimeline":true,"registration":{"sourceFoot":[319.5,622],"scale":0.9629629629629629},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.6,"maxTextureDimension":1336,"name":"旋风轰壁","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":18,"icon":"assets/skills-v28/temari/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v28/temari/ultimate.webp","cell":[715,440],"columns":5,"frames":22,"frame_times_ms":[118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818,118.1818],"fps":8.461538461538462,"anchor":[113,338],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.18181818181818182,0.8636363636363636],"lifecycle":{"startup":[0,3],"active":[4,18],"recovery":[19,21]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__temari.swf","sha256":"d531eab68ab7d65d643419a4d51a5274df6b298a9d8ad4c429a32c0f40884122","frameRange":[782,953],"timelineSprite":114,"sourceFrameIndices":[782,791,800,809,818,827,836,845,854,863,872,881,890,899,908,917,926,935,944,953],"authoredTimeline":true,"registration":{"sourceFoot":[319.5,622],"scale":0.9629629629629629},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":2.6,"maxTextureDimension":3575,"name":"通灵之术·斩斩舞","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":21,"icon":"assets/skills-v28/temari/ultimate-icon.webp"}},"sourceMetadata":{},"visualComplete":true},"suigetsu":{"portrait":"assets/skills-v28/suigetsu/portrait.webp","actor":{"file":"assets/skills-v28/suigetsu/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":1,"run":6,"cast":6},"ms":{"idle":150,"run":85,"cast":90},"anchor":[48,84],"scale":1,"naturalHeight":52,"sourceFrames":{"idle":[1],"run":[],"cast":[456,462,469,475,481,488]},"sourceRunRepair":{"file":"assets/skills-v23/suigetsu/actor.webp","sourceScale":0.9811320754716981,"reason":"新导出时间轴缺跑动，使用同形态已核验原版跑动帧，脚底保持一致。"}},"skills":{"primary":{"file":"assets/skills-v28/suigetsu/primary.webp","cell":[331,115],"columns":8,"frames":22,"frame_times_ms":[77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727,77.2727],"fps":12.941176470588236,"anchor":[62,95],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.18181818181818182,0.8636363636363636],"lifecycle":{"startup":[0,3],"active":[4,18],"recovery":[19,21]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__suigetsu.swf","sha256":"fc9c5c608d276b4f7044f5abbef8fee746ebb5410ccd829e8430036d91be7994","frameRange":[456,576],"timelineSprite":600,"sourceFrameIndices":[456,462,469,475,481,488,494,500,507,513,519,525,532,538,544,551,557,563,570,576],"authoredTimeline":true,"registration":{"sourceFoot":[184.5,179],"scale":0.9629629629629629},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.7,"maxTextureDimension":2648,"name":"水遁·水刃冲击","nameStatus":"preview","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":21,"icon":"assets/skills-v28/suigetsu/primary-icon.webp"},"secondary":{"file":"assets/skills-v28/suigetsu/secondary.webp","cell":[130,124],"columns":8,"frames":22,"frame_times_ms":[59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909,59.0909],"fps":16.923076923076923,"anchor":[52,121],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.18181818181818182,0.8636363636363636],"lifecycle":{"startup":[0,3],"active":[4,18],"recovery":[19,21]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__suigetsu.swf","sha256":"fc9c5c608d276b4f7044f5abbef8fee746ebb5410ccd829e8430036d91be7994","frameRange":[682,730],"timelineSprite":600,"sourceFrameIndices":[682,685,687,690,692,695,697,700,702,705,707,710,712,715,717,720,722,725,727,730],"authoredTimeline":true,"registration":{"sourceFoot":[184.5,179],"scale":0.9629629629629629},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.3,"maxTextureDimension":1040,"name":"水化术·水切","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":21,"icon":"assets/skills-v28/suigetsu/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v28/suigetsu/ultimate.webp","cell":[345,122],"columns":8,"frames":22,"frame_times_ms":[95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545,95.4545],"fps":10.476190476190476,"anchor":[36,109],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.18181818181818182,0.8636363636363636],"lifecycle":{"startup":[0,3],"active":[4,18],"recovery":[19,21]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__suigetsu.swf","sha256":"fc9c5c608d276b4f7044f5abbef8fee746ebb5410ccd829e8430036d91be7994","frameRange":[966,1048],"timelineSprite":600,"sourceFrameIndices":[966,970,975,979,983,988,992,996,1001,1005,1009,1013,1018,1022,1026,1031,1035,1039,1044,1048],"authoredTimeline":true,"registration":{"sourceFoot":[184.5,179],"scale":0.9629629629629629},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":2.1,"maxTextureDimension":2760,"name":"激流·水化术","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":21,"icon":"assets/skills-v28/suigetsu/ultimate-icon.webp"}},"sourceMetadata":{},"visualComplete":true},"jiraiya":{"portrait":"assets/skills-v23/jiraiya/portrait.webp","actor":{"file":"assets/skills-v23/jiraiya/actor.webp","cell":[96,96],"columns":9,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":9,"run":8,"cast":6},"ms":{"idle":130,"run":85,"cast":90},"anchor":[48,84],"scale":0.8524590163934426,"naturalHeight":61,"targetHeight":52},"skills":{"primary":{"icon":"assets/skills-v23/jiraiya/primary-icon.webp","iconSourceFrame":9,"iconOriginalSourceFrame":9,"id":"fire","name":"火遁·炎弹","file":"assets/skills-v23/jiraiya/primary.webp","cell":[384,384],"anchor":[128,288],"fps":15.151515151515152,"frames":25,"renderMode":"actor_composite","renderScale":0.8387096774193549,"hideBaseActor":true,"sourceMetadata":{"name":"火遁·炎弹","facing":"right","file":"jiraiya-fire.png","cell":384,"frames":25,"unique_frames":17,"frame_ms":66,"frame_times_ms":[67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,0,100],"source_frame_ids":[365,367,369,371,373,375,377,379,381,383,385,387,389,391,393,395,397,399,401,403,405,407,409,411,411],"sprite_id":13,"renderer_mode":"actor_composite","anchor":[128,288],"mirror_anchor":[256,288],"source_union_bounds":[902,438,1172,566],"scale":0.7848101265822784,"actor_height_px":62,"natural_actor_height":62,"render_scale":0.8387096774193549,"source_clip_bounds":[787,192,1277,681],"outlier_effects_clipped":true,"mapping_confidence":"high","lifecycle":{"startup":[0,6],"active":[7,18],"recovery":[19,24]},"note":"Original authored timeline sequence. Hide base actor during this composite animation. Registration preserved across all frames; left orientation can mirror the complete cell around the supplied anchor.","roles":{"start":[0,6],"loop":[7,18],"end":[19,24]},"playback":"one_shot_start_active_recovery","excluded_blank_source_frames":[]},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"emptyFrames":[],"lastOpaqueFrame":24,"lifecycle":{"startup":[0,6],"active":[7,18],"recovery":[19,24]},"frame_times_ms":[67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,0,100]},"secondary":{"icon":"assets/skills-v23/jiraiya/secondary-icon.webp","iconSourceFrame":2,"iconOriginalSourceFrame":2,"id":"rasengan","name":"螺旋丸","file":"assets/skills-v23/jiraiya/secondary.webp","cell":[384,384],"anchor":[128,288],"fps":14.925373134328359,"frames":18,"renderMode":"actor_composite","renderScale":0.8387096774193549,"hideBaseActor":true,"sourceMetadata":{"name":"螺旋丸","facing":"right","file":"jiraiya-rasengan.png","cell":384,"frames":18,"unique_frames":7,"frame_ms":67,"frame_times_ms":[67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,33,100],"source_frame_ids":[412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,445],"sprite_id":13,"renderer_mode":"actor_composite","anchor":[128,288],"mirror_anchor":[256,288],"source_union_bounds":[910,473,997,558],"scale":0.7848101265822784,"actor_height_px":62,"natural_actor_height":62,"render_scale":0.8387096774193549,"source_clip_bounds":[787,192,1277,681],"outlier_effects_clipped":true,"mapping_confidence":"high","lifecycle":{"startup":[0,1],"active":[2,11],"recovery":[12,17]},"note":"Original authored timeline sequence. Hide base actor during this composite animation. Registration preserved across all frames; left orientation can mirror the complete cell around the supplied anchor.","roles":{"start":[0,1],"loop":[2,11],"end":[12,17]},"playback":"one_shot_start_active_recovery","excluded_blank_source_frames":[]},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"emptyFrames":[],"lastOpaqueFrame":17,"lifecycle":{"startup":[0,1],"active":[2,11],"recovery":[12,17]},"frame_times_ms":[67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,33,100]},"ultimate":{"icon":"assets/skills-v23/jiraiya/ultimate-icon.webp","iconSourceFrame":10,"iconOriginalSourceFrame":10,"id":"toadfire","name":"火遁·蛤蟆油炎弹","file":"assets/skills-v23/jiraiya/ultimate.webp","cell":[576,576],"anchor":[96,360],"fps":5.780346820809249,"frames":24,"renderMode":"actor_composite","renderScale":1.0,"hideBaseActor":true,"sourceMetadata":{"name":"通灵·蛤蟆油炎弹","facing":"right","file":"jiraiya-toadfire.png","cell":576,"frames":24,"unique_frames":21,"frame_ms":173,"frame_times_ms":[133,133,133,133,133,400,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,867,100],"source_frame_ids":[618,622,626,630,634,638,650,654,658,662,666,670,674,678,682,686,690,694,698,702,706,710,714,740],"sprite_id":13,"renderer_mode":"actor_composite","anchor":[96,360],"mirror_anchor":[480,360],"source_union_bounds":[823,371,1634,610],"scale":0.6582278481012658,"actor_height_px":52,"natural_actor_height":52,"render_scale":1.0,"source_clip_bounds":[805,12,1680,887],"outlier_effects_clipped":false,"mapping_confidence":"high","lifecycle":{"startup":[0,6],"active":[7,17],"recovery":[18,23]},"note":"Original authored timeline sequence. Hide base actor during this composite animation. Registration preserved across all frames; left orientation can mirror the complete cell around the supplied anchor.","roles":{"start":[0,6],"loop":[7,17],"end":[18,23]},"playback":"one_shot_start_active_recovery","excluded_blank_source_frames":[]},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"emptyFrames":[],"lastOpaqueFrame":23,"lifecycle":{"startup":[0,6],"active":[7,17],"recovery":[18,23]},"frame_times_ms":[133,133,133,133,133,400,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,133,867,100]}},"sourceManifest":"/workspace/art/v23-support-c/ready/manifest.json","sourceMetadata":{"source_swf":"/workspace/art/catalog/swf/fighters__jiraiya.swf","source_sha256":"ed411522d4b74c26b0a097de4e62f81252c6764493d0a6910b63fd52bf157201","sprite_id":13,"source_foot_anchor":[950.5,559]}},"killerbee":{"portrait":"assets/skills-v28/killerbee/portrait.webp","actor":{"file":"assets/skills-v28/killerbee/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":5,"cast":6},"ms":{"idle":150,"run":85,"cast":90},"anchor":[48,84],"scale":1,"naturalHeight":52,"sourceFrames":{"idle":[1,3,5,7],"run":[10,12,14,16,18],"cast":[392,394,396,398,400,402]}},"skills":{"primary":{"file":"assets/skills-v28/killerbee/primary.webp","cell":[212,87],"columns":8,"frames":21,"frame_times_ms":[61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048,61.9048],"fps":16.153846153846153,"anchor":[19,82],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.19047619047619047,0.8571428571428571],"lifecycle":{"startup":[0,3],"active":[4,17],"recovery":[18,20]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__killerbee.swf","sha256":"07c96783c43cbe7b4cc11da21de5020fbfa4ba3de83f128e99b4c8e4818465dc","frameRange":[356,391],"timelineSprite":759,"sourceFrameIndices":[356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,391],"authoredTimeline":true,"registration":{"sourceFoot":[371,455],"scale":0.7323943661971831},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.3,"maxTextureDimension":1696,"name":"刃流突刺","nameStatus":"preview","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":20,"icon":"assets/skills-v28/killerbee/primary-icon.webp"},"secondary":{"file":"assets/skills-v28/killerbee/secondary.webp","cell":[101,104],"columns":8,"frames":31,"frame_times_ms":[51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129,51.6129],"fps":19.375,"anchor":[23,82],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.1935483870967742,0.8387096774193549],"lifecycle":{"startup":[0,5],"active":[6,25],"recovery":[26,30]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__killerbee.swf","sha256":"07c96783c43cbe7b4cc11da21de5020fbfa4ba3de83f128e99b4c8e4818465dc","frameRange":[392,447],"timelineSprite":759,"sourceFrameIndices":[392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,447],"authoredTimeline":true,"registration":{"sourceFoot":[371,455],"scale":0.7323943661971831},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.6,"maxTextureDimension":808,"name":"雷犁热刀","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":30,"icon":"assets/skills-v28/killerbee/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v28/killerbee/ultimate.webp","cell":[119,95],"columns":8,"frames":33,"frame_times_ms":[69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697,69.697],"fps":14.347826086956523,"anchor":[51,84],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.18181818181818182,0.8484848484848485],"lifecycle":{"startup":[0,5],"active":[6,27],"recovery":[28,32]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__killerbee.swf","sha256":"07c96783c43cbe7b4cc11da21de5020fbfa4ba3de83f128e99b4c8e4818465dc","frameRange":[537,654],"timelineSprite":759,"sourceFrameIndices":[537,541,545,549,553,557,561,565,569,573,577,581,585,589,593,597,601,605,609,613,617,621,625,629,633,637,641,645,649,653,654],"authoredTimeline":true,"registration":{"sourceFoot":[371,455],"scale":0.7323943661971831},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":2.3,"maxTextureDimension":952,"name":"雷犁热刀（尾兽衣）","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[9],"lastOpaqueFrame":32,"icon":"assets/skills-v28/killerbee/ultimate-icon.webp"}},"sourceMetadata":{},"visualComplete":true},"neji":{"portrait":"assets/skills-v23/neji/portrait.webp","actor":{"file":"assets/skills-v23/neji/actor.webp","cell":[96,96],"columns":6,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":1,"run":6,"cast":1},"ms":{"idle":83.33333333333333,"run":83.33333333333333,"cast":83.33333333333333},"anchor":[48,84],"scale":0.9454545454545454,"naturalHeight":55,"targetHeight":52},"skills":{"primary":{"icon":"assets/skills-v23/neji/primary-icon.webp","iconSourceFrame":0,"iconOriginalSourceFrame":0,"id":"air-palm","name":"八卦空掌","file":"assets/skills-v23/neji/primary.webp","cell":[256,256],"anchor":[128,184],"fps":12,"frames":8,"renderMode":"effect","renderScale":1,"hideBaseActor":false,"sourceMetadata":{"file":"neji/air-palm.png","cell":[256,256],"frames":8,"fps":12,"anchor":[128,184],"sourceBitmapIds":[40,267,300,347,367,261,299],"renderMode":"effect","hideBaseActor":false,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"air-palm","name":"八卦空掌","complete":true,"damageFrames":[1,2,3,4,5],"sourceBitmapScale":1},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7],"emptyFrames":[7],"lastOpaqueFrame":6,"frameRoles":["startup","active","active","active","active","active","recovery","despawn"],"damageFrames":[1,2,3,4,5]},"secondary":{"icon":"assets/skills-v23/neji/secondary-icon.webp","iconSourceFrame":5,"iconOriginalSourceFrame":5,"id":"rotation","name":"八卦掌·回天","file":"assets/skills-v23/neji/secondary.webp","cell":[256,256],"anchor":[128,184],"fps":12,"frames":12,"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"sourceMetadata":{"file":"neji/rotation.png","cell":[256,256],"frames":12,"fps":12,"anchor":[128,184],"sourceBitmapIds":[3,46,151,159,217,342,536,217,378,477,3],"renderMode":"actor-composite","hideBaseActor":true,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"rotation","name":"八卦掌·回天","complete":true,"damageFrames":[1,2,3,4,5,6,7,8,9],"sourceBitmapScale":0.8524590163934426},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11],"emptyFrames":[11],"lastOpaqueFrame":10,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","despawn"],"damageFrames":[1,2,3,4,5,6,7,8,9]},"ultimate":{"icon":"assets/skills-v23/neji/ultimate-icon.webp","iconSourceFrame":7,"iconOriginalSourceFrame":7,"id":"sixty-four-palms","name":"柔拳法·八卦六十四掌","file":"assets/skills-v23/neji/ultimate.webp","cell":[256,256],"anchor":[128,184],"fps":12,"frames":11,"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"sourceMetadata":{"file":"neji/sixty-four-palms.png","cell":[256,256],"frames":11,"fps":12,"anchor":[128,184],"sourceBitmapIds":[3,21,244,257,264,283,293,306,338,21,544],"renderMode":"actor-composite","hideBaseActor":true,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"sixty-four-palms","name":"八卦六十四掌","complete":true,"damageFrames":[1,2,3,4,5,6,7,8],"sourceBitmapScale":0.8524590163934426,"compositionNote":"Genuine Gentle Fist stance/strike frames layered over original Bagua ground glyph. Target-hit choreography is supplied by combat renderer."},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10],"emptyFrames":[10],"lastOpaqueFrame":9,"frameRoles":["startup","active","active","active","active","active","active","active","active","recovery","despawn"],"damageFrames":[1,2,3,4,5,6,7,8]}},"sourceManifest":"/workspace/art/v23-support-d/ready/manifest.json","sourceMetadata":{"id":"neji","name":"日向宁次","complete":true,"source":"/workspace/art/catalog/swf/fighters__neji.swf","sourceSha256":"3eefb52fa8de7b69f692d18b3c06a381334896bd9469b008a9285b1675d6fa34","sourceMainSpriteId":552,"notes":["All attack composites must hide the base actor while playing.","Not screen-wide SWF cut-ins; only source combat bitmaps.","Playback is curated from source bitmap IDs; not asserted as original SWF timeline timing.","Mirror all actor/composite frames consistently for left-facing use."],"contact":"neji/contact.jpg"}},"hinata":{"portrait":"assets/skills-v28/hinata/portrait.webp","actor":{"file":"assets/skills-v28/hinata/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":8,"cast":5},"ms":{"idle":83.33333333333333,"run":83.33333333333333,"cast":83.33333333333333},"anchor":[48,84],"scale":1,"naturalHeight":52,"source":{"file":"assets/skills-v23/hinata/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":8,"cast":5},"ms":{"idle":83.33333333333333,"run":83.33333333333333,"cast":83.33333333333333},"anchor":[48,84],"scale":1.0,"naturalHeight":52.0,"targetHeight":52}},"skills":{"primary":{"file":"assets/skills-v28/hinata/primary.webp","cell":[495,247],"columns":8,"frames":28,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"fps":20.0,"anchor":[158,175],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.21428571428571427,0.8214285714285714],"lifecycle":{"startup":[0,5],"active":[6,22],"recovery":[23,27]},"animationReady":true,"source":{"sourceBitmapIds":[28,116,125,134],"effectBitmapIds":[147,149,151,153,155],"sourceSwf":"/workspace/art/catalog/swf/fighters__hinata.swf","adaptation":"Original Hinata palm poses and original compressed air wave layer, registered separately. Added forward travel/alpha phases; no recoloured generic jutsu.","sha256":"d152455adb1d484fadfdaa0f7506e9b2c6f64b4f56c82e298a67a325573fe4dc"},"duration":1.4,"maxTextureDimension":3960,"name":"八卦空掌","nameStatus":"adapted","damageOffset":[95,0],"hideBaseActor":true,"allowMovement":false,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":27,"icon":"assets/skills-v28/hinata/primary-icon.webp"},"secondary":{"file":"assets/skills-v28/hinata/secondary.webp","cell":[121,92],"columns":8,"frames":14,"frame_times_ms":[117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571,117.8571],"fps":8.484848484848484,"anchor":[60,90],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","recovery","recovery"],"damageWindow":[0.21428571428571427,0.8571428571428571],"lifecycle":{"startup":[0,2],"active":[3,11],"recovery":[12,13]},"animationReady":true,"source":{"path":"/workspace/sites/ninja-download-release/dist/assets/skills-v23/hinata/secondary.webp","sha256":"d152455adb1d484fadfdaa0f7506e9b2c6f64b4f56c82e298a67a325573fe4dc","retainedMetadata":{"file":"hinata/guardian-palms.png","cell":[192,192],"frames":12,"fps":12,"anchor":[96,138],"sourceBitmapIds":[28,333,335,339,341,343,345,347,349,351,28],"renderMode":"actor-composite","hideBaseActor":true,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"guardian-palms","name":"守护八卦六十四掌","complete":true,"damageFrames":[1,2,3,4,5,6,7,8,9],"sourceBitmapScale":1.0833333333333333},"adaptation":"Source registered composite retained; neutral startup/recovery and compact texture packing added."},"duration":1.65,"maxTextureDimension":968,"name":"守护八卦六十四掌","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[12],"lastOpaqueFrame":13,"icon":"assets/skills-v28/hinata/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v28/hinata/ultimate.webp","cell":[92,72],"columns":8,"frames":14,"frame_times_ms":[142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571,142.8571],"fps":7.0,"anchor":[24,67],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","recovery","recovery"],"damageWindow":[0.21428571428571427,0.8571428571428571],"lifecycle":{"startup":[0,2],"active":[3,11],"recovery":[12,13]},"animationReady":true,"source":{"path":"/workspace/sites/ninja-download-release/dist/assets/skills-v23/hinata/ultimate.webp","sha256":"d152455adb1d484fadfdaa0f7506e9b2c6f64b4f56c82e298a67a325573fe4dc","retainedMetadata":{"file":"hinata/twin-lion-fists.png","cell":[192,192],"frames":12,"fps":12,"anchor":[96,138],"sourceBitmapIds":[28,116,125,134,125,116,125,134,125,116,28],"renderMode":"actor-composite","hideBaseActor":true,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"twin-lion-fists","name":"柔步双狮拳","complete":true,"damageFrames":[1,2,3,4,5,6,7,8,9],"sourceBitmapScale":1.0833333333333333,"overlayBitmapIds":[10,12,14,16,19,21,23,25],"compositionNote":"Genuine lion-head frames positioned at extended palm over genuine Hinata strike frames; composited effect, not unmodified SWF timeline."},"adaptation":"Source registered composite retained; neutral startup/recovery and compact texture packing added."},"duration":2,"maxTextureDimension":736,"name":"柔步·双狮拳","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[12],"lastOpaqueFrame":13,"icon":"assets/skills-v28/hinata/ultimate-icon.webp"}},"sourceMetadata":{},"visualComplete":true},"lee":{"portrait":"assets/skills-v23/lee/portrait.webp","actor":{"file":"assets/skills-v23/lee/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":5,"run":8,"cast":6},"ms":{"idle":83.33333333333333,"run":83.33333333333333,"cast":83.33333333333333},"anchor":[48,84],"scale":1.0196078431372548,"naturalHeight":51,"targetHeight":52},"skills":{"primary":{"icon":"assets/skills-v23/lee/primary-icon.webp","iconSourceFrame":2,"iconOriginalSourceFrame":2,"id":"leaf-whirlwind","name":"木叶旋风","file":"assets/skills-v23/lee/primary.webp","cell":[128,128],"anchor":[64,92],"fps":12,"frames":13,"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"sourceMetadata":{"file":"lee/leaf-whirlwind.png","cell":[128,128],"frames":13,"fps":12,"anchor":[64,92],"sourceBitmapIds":[7,86,88,90,92,94,96,98,100,103,105,7],"renderMode":"actor-composite","hideBaseActor":true,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"leaf-whirlwind","name":"木叶旋风","complete":true,"damageFrames":[1,2,3,4,5,6,7,8,9,10],"sourceBitmapScale":1.1304347826086956},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12],"emptyFrames":[12],"lastOpaqueFrame":11,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","recovery","despawn"],"damageFrames":[1,2,3,4,5,6,7,8,9,10]},"secondary":{"icon":"assets/skills-v23/lee/secondary-icon.webp","iconSourceFrame":5,"iconOriginalSourceFrame":5,"id":"leaf-rising-wind","name":"木叶升风","file":"assets/skills-v23/lee/secondary.webp","cell":[192,192],"anchor":[96,138],"fps":12,"frames":12,"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"sourceMetadata":{"file":"lee/leaf-rising-wind.png","cell":[192,192],"frames":12,"fps":12,"anchor":[96,138],"sourceBitmapIds":[7,173,175,177,180,182,184,186,188,190,7],"renderMode":"actor-composite","hideBaseActor":true,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"leaf-rising-wind","name":"木叶升风","complete":true,"damageFrames":[1,2,3,4,5,6,7,8,9],"sourceBitmapScale":1.1304347826086956},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11],"emptyFrames":[11],"lastOpaqueFrame":10,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","despawn"],"damageFrames":[1,2,3,4,5,6,7,8,9]},"ultimate":{"icon":"assets/skills-v23/lee/ultimate-icon.webp","iconSourceFrame":4,"iconOriginalSourceFrame":4,"id":"primary-lotus","name":"表莲华","file":"assets/skills-v23/lee/ultimate.webp","cell":[192,192],"anchor":[96,138],"fps":12,"frames":15,"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"sourceMetadata":{"file":"lee/primary-lotus.png","cell":[192,192],"frames":15,"fps":12,"anchor":[96,138],"sourceBitmapIds":[7,264,266,268,270,273,275,277,279,281,283,285,288,7],"renderMode":"actor-composite","hideBaseActor":true,"renderScale":1,"natural_actor_height":52,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","despawn"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","id":"primary-lotus","name":"表莲华","complete":true,"damageFrames":[1,2,3,4,5,6,7,8,9,10,11,12],"sourceBitmapScale":0.8524590163934426,"compositionNote":"Original bandage/rotation actor sequence; target actor and throw trajectory are supplied by combat renderer. Ground-slam hit VFX exported separately.","impact":{"file":"lee/primary-lotus-impact.png","cell":[256,256],"frames":12,"fps":12,"anchor":[128,192],"sourceBitmapIds":[290,292,294,296,298,300,302,304,306,308,310,312],"renderMode":"effect","hideBaseActor":false,"renderScale":1,"natural_actor_height":52,"frameRoles":["impact","impact","impact","impact","fade","fade","fade","fade","fade","fade","fade","fade"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained"}},"removedTransparentFrames":[],"sourceFrameIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"emptyFrames":[14],"lastOpaqueFrame":13,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","despawn"],"damageFrames":[1,2,3,4,5,6,7,8,9,10,11,12],"impact":{"file":"assets/skills-v23/lee/ultimate-impact.webp","cell":[256,256],"frames":12,"fps":12,"anchor":[128,192],"sourceBitmapIds":[290,292,294,296,298,300,302,304,306,308,310,312],"renderMode":"effect","hideBaseActor":false,"renderScale":1,"natural_actor_height":52,"frameRoles":["impact","impact","impact","impact","fade","fade","fade","fade","fade","fade","fade","fade"],"sourceComposition":"original SWF bitmap frames; curated playback order; original pixel colours retained","emptyFrames":[],"lastOpaqueFrame":11}}},"sourceManifest":"/workspace/art/v23-support-d/ready/manifest.json","sourceMetadata":{"id":"lee","name":"李洛克","complete":true,"source":"/workspace/art/catalog/swf/fighters__lee.swf","sourceSha256":"0874ce575f0d2529745587cd9ed491dcb594753261cb84a2467f2f162c165728","sourceMainSpriteId":501,"notes":["All attack composites must hide the base actor while playing.","Not screen-wide SWF cut-ins; only source combat bitmaps.","Playback is curated from source bitmap IDs; not asserted as original SWF timeline timing.","Mirror all actor/composite frames consistently for left-facing use."],"contact":"lee/contact.jpg"}},"sasori":{"portrait":"assets/skills-v27/sasori/portrait.png","actor":{"file":"assets/skills-v27/sasori/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3,"attack":4},"counts":{"idle":3,"run":6,"cast":5,"hurt":1,"attack":4},"ms":{"idle":150,"run":85,"cast":90,"hurt":110,"attack":90},"anchor":[48,84],"scale":1,"naturalHeight":52,"targetHeight":52},"skills":{"primary":{"name":"砂铁结袭","id":"sasori-primary-v27","file":"assets/skills-v27/sasori/primary.webp","icon":"assets/skills-v27/sasori/primary-icon.png","cell":[169,80],"anchor":[23,76],"registrationCrop":[73,140,242,220],"originalCell":[384,256],"columns":8,"frames":28,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.25,0.79],"damageOffset":[108,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"emptyFrames":[],"lastOpaqueFrame":27,"sourceMetadata":{"source_archive_sha256":"df5f5a298ceb396f9ea0a3cbd4d8b11450a72c6a919bcd7c54cae1f4ccf92bd7","composition":"Curated actor/helper choreography; original pixel art and corrected SFF shared palettes. Timing and spacing adapted for this top-down game.","notNewHandDrawnFrames":true}},"secondary":{"name":"人傀儡·喷火","id":"sasori-secondary-v27","file":"assets/skills-v27/sasori/secondary.webp","icon":"assets/skills-v27/sasori/secondary-icon.png","cell":[274,106],"anchor":[45,85],"registrationCrop":[51,131,325,237],"originalCell":[384,256],"columns":8,"frames":36,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.23,0.8],"damageOffset":[100,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"emptyFrames":[],"lastOpaqueFrame":35,"sourceMetadata":{"source_archive_sha256":"df5f5a298ceb396f9ea0a3cbd4d8b11450a72c6a919bcd7c54cae1f4ccf92bd7","composition":"Curated actor/helper choreography; original pixel art and corrected SFF shared palettes. Timing and spacing adapted for this top-down game.","notNewHandDrawnFrames":true}},"ultimate":{"name":"砂铁界法","id":"sasori-ultimate-v27","file":"assets/skills-v27/sasori/ultimate.webp","icon":"assets/skills-v27/sasori/ultimate-icon.png","cell":[271,226],"anchor":[23,187],"registrationCrop":[73,29,344,255],"originalCell":[384,256],"columns":8,"frames":52,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.42,0.84],"damageOffset":[110,-12],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"emptyFrames":[],"lastOpaqueFrame":51,"sourceMetadata":{"source_archive_sha256":"df5f5a298ceb396f9ea0a3cbd4d8b11450a72c6a919bcd7c54cae1f4ccf92bd7","composition":"Curated actor/helper choreography; original pixel art and corrected SFF shared palettes. Timing and spacing adapted for this top-down game.","notNewHandDrawnFrames":true}}},"sourceManifest":"docs/materials-v26/sasori-manifest.json"},"sakura":{"portrait":"assets/skills-v28/sakura/portrait.webp","actor":{"file":"assets/skills-v28/sakura/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2},"counts":{"idle":4,"run":6,"cast":6},"ms":{"idle":150,"run":85,"cast":90},"anchor":[48,84],"scale":1,"naturalHeight":52,"sourceFrames":{"idle":[1,3,5,7],"run":[10,11,13,14,16,17],"cast":[644,647,650,653,656,659]}},"skills":{"primary":{"file":"assets/skills-v28/sakura/primary.webp","cell":[70,66],"columns":8,"frames":26,"frame_times_ms":[65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846,65.3846],"fps":15.294117647058824,"anchor":[28,63],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"damageWindow":[0.19230769230769232,0.8461538461538461],"lifecycle":{"startup":[0,4],"active":[5,21],"recovery":[22,25]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__sakura.swf","sha256":"ce39c06e36becaa762ffe4d039d1d0a639d1f7b5e4e493c338101049828856b3","frameRange":[158,261],"timelineSprite":660,"sourceFrameIndices":[158,162,167,171,176,180,185,189,194,198,203,207,212,216,221,225,230,234,239,243,248,252,257,261],"authoredTimeline":true,"registration":{"sourceFoot":[281.5,209],"scale":1.0833333333333333},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.7,"maxTextureDimension":560,"name":"体术·樱连击","nameStatus":"preview","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":25,"icon":"assets/skills-v28/sakura/primary-icon.webp"},"secondary":{"file":"assets/skills-v28/sakura/secondary.webp","cell":[201,197],"columns":8,"frames":30,"frame_times_ms":[60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0,60.0],"fps":16.666666666666668,"anchor":[40,194],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.2,0.8333333333333334],"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,29]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__sakura.swf","sha256":"ce39c06e36becaa762ffe4d039d1d0a639d1f7b5e4e493c338101049828856b3","frameRange":[809,913],"timelineSprite":660,"sourceFrameIndices":[809,814,818,823,827,830,832,836,841,845,850,851,854,859,863,868,871,872,877,881,886,890,892,895,899,904,908,913],"authoredTimeline":true,"registration":{"sourceFoot":[281.5,209],"scale":1.0833333333333333},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":1.8,"maxTextureDimension":1608,"name":"查克拉爆发","nameStatus":"preview","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":29,"icon":"assets/skills-v28/sakura/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v28/sakura/ultimate.webp","cell":[184,172],"columns":8,"frames":37,"frame_times_ms":[62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622,62.1622],"fps":16.086956521739133,"anchor":[92,159],"renderMode":"actor_composite","renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.1891891891891892,0.8378378378378378],"lifecycle":{"startup":[0,6],"active":[7,30],"recovery":[31,36]},"animationReady":true,"source":{"swf":"/workspace/art/catalog/swf/fighters__sakura.swf","sha256":"ce39c06e36becaa762ffe4d039d1d0a639d1f7b5e4e493c338101049828856b3","frameRange":[644,716],"timelineSprite":660,"sourceFrameIndices":[644,647,650,652,653,656,657,659,660,662,663,665,666,667,669,672,674,675,678,682,683,685,688,690,691,694,696,697,700,703,707,709,710,713,716],"authoredTimeline":true,"registration":{"sourceFoot":[281.5,209],"scale":1.0833333333333333},"adaptation":"Playback resampled to top-down duration; source frame geometry/colours retained; neutral start/recovery appended."},"duration":2.3,"maxTextureDimension":1472,"name":"怪力·樱花冲","nameStatus":"adapted","hideBaseActor":true,"allowMovement":false,"damageOffset":[50,0],"visualStage":"composed","emptyFrames":[15],"lastOpaqueFrame":36,"icon":"assets/skills-v28/sakura/ultimate-icon.webp"}},"sourceMetadata":{},"visualComplete":true},"naruto_sage":{"portrait":"assets/skills-v28/naruto_sage/portrait.webp","actor":{"file":"assets/skills-v28/naruto_sage/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":8,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,16,18,20,22,26,28],"uniqueFrames":6},"cast":{"sourceFrames":[367,369,371,373,375,377],"uniqueFrames":2},"hurt":{"sourceFrames":[1094,1096,1098,1100],"uniqueFrames":3}}},"skills":{"primary":{"id":"naruto_sage-primary","name":"仙术·震地连击","file":"assets/skills-v28/naruto_sage/primary.webp","cell":[183,126],"columns":8,"frames":26,"frame_times_ms":[90,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,130],"fps":14.412416851441241,"anchor":[61,119],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.04988913525498891,0.8547671840354767],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":367,"role":"source","alternate":false},{"frame":369,"role":"source","alternate":false},{"frame":371,"role":"source","alternate":false},{"frame":373,"role":"source","alternate":false},{"frame":375,"role":"source","alternate":false},{"frame":377,"role":"source","alternate":false},{"frame":379,"role":"source","alternate":false},{"frame":381,"role":"source","alternate":false},{"frame":383,"role":"source","alternate":false},{"frame":385,"role":"source","alternate":false},{"frame":387,"role":"source","alternate":false},{"frame":389,"role":"source","alternate":false},{"frame":391,"role":"source","alternate":false},{"frame":393,"role":"source","alternate":false},{"frame":395,"role":"source","alternate":false},{"frame":397,"role":"source","alternate":false},{"frame":399,"role":"source","alternate":false},{"frame":401,"role":"source","alternate":false},{"frame":403,"role":"source","alternate":false},{"frame":405,"role":"source","alternate":false},{"frame":407,"role":"source","alternate":false},{"frame":409,"role":"source","alternate":false},{"frame":411,"role":"source","alternate":false},{"frame":413,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[828.5,907],"sourceToActorScale":0.9454545454545454,"commonRegistrationCrop":[59,145,242,271],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":588,"symbol":"naruto_hermit_fla.鸣人全动作_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":15,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":25,"icon":"assets/skills-v28/naruto_sage/primary-icon.webp"},"secondary":{"id":"naruto_sage-secondary","name":"仙法·螺旋丸","file":"assets/skills-v28/naruto_sage/secondary.webp","cell":[190,115],"columns":8,"frames":29,"frame_times_ms":[90,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,130],"fps":14.292755051749628,"anchor":[46,109],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.04435682602267127,0.8038442582552981],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":548,"role":"source","alternate":false},{"frame":551,"role":"source","alternate":false},{"frame":554,"role":"source","alternate":false},{"frame":557,"role":"source","alternate":false},{"frame":560,"role":"source","alternate":false},{"frame":563,"role":"source","alternate":false},{"frame":566,"role":"source","alternate":false},{"frame":569,"role":"source","alternate":false},{"frame":572,"role":"source","alternate":false},{"frame":575,"role":"source","alternate":false},{"frame":578,"role":"source","alternate":false},{"frame":581,"role":"source","alternate":false},{"frame":584,"role":"source","alternate":false},{"frame":587,"role":"source","alternate":false},{"frame":590,"role":"source","alternate":false},{"frame":593,"role":"source","alternate":false},{"frame":596,"role":"source","alternate":false},{"frame":599,"role":"source","alternate":false},{"frame":602,"role":"source","alternate":false},{"frame":605,"role":"source","alternate":false},{"frame":608,"role":"source","alternate":false},{"frame":611,"role":"source","alternate":false},{"frame":614,"role":"source","alternate":false},{"frame":617,"role":"source","alternate":false},{"frame":620,"role":"source","alternate":false},{"frame":623,"role":"source","alternate":false},{"frame":626,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[828.5,907],"sourceToActorScale":0.9454545454545454,"commonRegistrationCrop":[74,155,216,270],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":588,"symbol":"naruto_hermit_fla.鸣人全动作_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":16,"sourceSharedTechnique":{"file":"assets/skills-v24/naruto_shippuden/primary.webp","note":"同名螺旋丸使用真实DS球体效果，与仙人形态原本体动作独立合成；没有用于大玉螺旋丸。"},"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":28,"icon":"assets/skills-v28/naruto_sage/secondary-icon.webp"},"ultimate":{"id":"naruto_sage-ultimate","name":"仙术·旋风爆发","file":"assets/skills-v28/naruto_sage/ultimate.webp","cell":[384,300],"columns":8,"frames":27,"frame_times_ms":[90,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,130],"fps":11.63793103448276,"anchor":[120,264],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.18362068965517242,0.6905172413793104],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":959,"role":"source","alternate":false},{"frame":964,"role":"source","alternate":false},{"frame":969,"role":"source","alternate":false},{"frame":974,"role":"source","alternate":false},{"frame":979,"role":"source","alternate":false},{"frame":984,"role":"source","alternate":false},{"frame":989,"role":"source","alternate":false},{"frame":994,"role":"source","alternate":false},{"frame":999,"role":"source","alternate":false},{"frame":1004,"role":"source","alternate":false},{"frame":1009,"role":"source","alternate":false},{"frame":1014,"role":"source","alternate":false},{"frame":1019,"role":"source","alternate":false},{"frame":1024,"role":"source","alternate":false},{"frame":1029,"role":"source","alternate":false},{"frame":1034,"role":"source","alternate":false},{"frame":1039,"role":"source","alternate":false},{"frame":1044,"role":"source","alternate":false},{"frame":1049,"role":"source","alternate":false},{"frame":1054,"role":"source","alternate":false},{"frame":1059,"role":"source","alternate":false},{"frame":1064,"role":"source","alternate":false},{"frame":1069,"role":"source","alternate":false},{"frame":1074,"role":"source","alternate":false},{"frame":1075,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[828.5,907],"sourceToActorScale":0.9454545454545454,"commonRegistrationCrop":[0,0,384,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":588,"symbol":"naruto_hermit_fla.鸣人全动作_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":23,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":26,"icon":"assets/skills-v28/naruto_sage/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":588,"symbol":"naruto_hermit_fla.鸣人全动作_2"},"visualComplete":true},"naruto_kurama":{"portrait":"assets/skills-v28/naruto_kurama/portrait.webp","actor":{"file":"assets/skills-v28/naruto_kurama/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":5,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":2},"run":{"sourceFrames":[10,12,14,16,18],"uniqueFrames":5},"cast":{"sourceFrames":[520,523,526,529,532,535],"uniqueFrames":6},"hurt":{"sourceFrames":[1390,1392,1394,1396],"uniqueFrames":3}}},"skills":{"primary":{"id":"naruto_kurama-primary","name":"查克拉衣·近身连击","file":"assets/skills-v28/naruto_kurama/primary.webp","cell":[76,89],"columns":8,"frames":26,"frame_times_ms":[90,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,130],"fps":14.412416851441241,"anchor":[43,85],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.08647450110864745,0.2328159645232816],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":520,"role":"source","alternate":false},{"frame":523,"role":"source","alternate":false},{"frame":526,"role":"source","alternate":false},{"frame":529,"role":"source","alternate":false},{"frame":532,"role":"source","alternate":false},{"frame":535,"role":"source","alternate":false},{"frame":538,"role":"source","alternate":false},{"frame":541,"role":"source","alternate":false},{"frame":544,"role":"source","alternate":false},{"frame":547,"role":"source","alternate":false},{"frame":550,"role":"source","alternate":false},{"frame":553,"role":"source","alternate":false},{"frame":556,"role":"source","alternate":false},{"frame":559,"role":"source","alternate":false},{"frame":562,"role":"source","alternate":false},{"frame":565,"role":"source","alternate":false},{"frame":568,"role":"source","alternate":false},{"frame":571,"role":"source","alternate":false},{"frame":574,"role":"source","alternate":false},{"frame":577,"role":"source","alternate":false},{"frame":580,"role":"source","alternate":false},{"frame":583,"role":"source","alternate":false},{"frame":586,"role":"source","alternate":false},{"frame":588,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[997.0,1094],"sourceToActorScale":1.1304347826086956,"commonRegistrationCrop":[77,179,153,268],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":1437,"symbol":"naruto_hermit_fla.金鸣_18"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":9,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":25,"icon":"assets/skills-v28/naruto_kurama/primary-icon.webp"},"secondary":{"id":"naruto_kurama-secondary","name":"查克拉臂·螺旋丸","file":"assets/skills-v28/naruto_kurama/secondary.webp","cell":[287,231],"columns":8,"frames":30,"frame_times_ms":[90,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,130],"fps":14.312977099236642,"anchor":[120,203],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery"],"damageWindow":[0.10687022900763359,0.9379770992366412],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":589,"role":"source","alternate":false},{"frame":594,"role":"source","alternate":false},{"frame":599,"role":"source","alternate":false},{"frame":604,"role":"source","alternate":false},{"frame":609,"role":"source","alternate":false},{"frame":614,"role":"source","alternate":false},{"frame":619,"role":"source","alternate":false},{"frame":624,"role":"source","alternate":false},{"frame":629,"role":"source","alternate":false},{"frame":634,"role":"source","alternate":false},{"frame":639,"role":"source","alternate":false},{"frame":644,"role":"source","alternate":false},{"frame":649,"role":"source","alternate":false},{"frame":654,"role":"source","alternate":false},{"frame":659,"role":"source","alternate":false},{"frame":664,"role":"source","alternate":false},{"frame":669,"role":"source","alternate":false},{"frame":674,"role":"source","alternate":false},{"frame":679,"role":"source","alternate":false},{"frame":684,"role":"source","alternate":false},{"frame":689,"role":"source","alternate":false},{"frame":694,"role":"source","alternate":false},{"frame":699,"role":"source","alternate":false},{"frame":704,"role":"source","alternate":false},{"frame":709,"role":"source","alternate":false},{"frame":714,"role":"source","alternate":false},{"frame":719,"role":"source","alternate":false},{"frame":722,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[997.0,1094],"sourceToActorScale":1.1304347826086956,"commonRegistrationCrop":[0,61,287,292],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":1437,"symbol":"naruto_hermit_fla.金鸣_18"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":25,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":29,"icon":"assets/skills-v28/naruto_kurama/secondary-icon.webp"},"ultimate":{"id":"naruto_kurama-ultimate","name":"查克拉衣·爆发","file":"assets/skills-v28/naruto_kurama/ultimate.webp","cell":[384,300],"columns":8,"frames":27,"frame_times_ms":[90,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,130],"fps":11.63793103448276,"anchor":[120,264],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.075,0.5456896551724137],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":1232,"role":"source","alternate":false},{"frame":1238,"role":"source","alternate":false},{"frame":1244,"role":"source","alternate":false},{"frame":1250,"role":"source","alternate":false},{"frame":1256,"role":"source","alternate":false},{"frame":1262,"role":"source","alternate":false},{"frame":1268,"role":"source","alternate":false},{"frame":1274,"role":"source","alternate":false},{"frame":1280,"role":"source","alternate":false},{"frame":1286,"role":"source","alternate":false},{"frame":1292,"role":"source","alternate":false},{"frame":1298,"role":"source","alternate":false},{"frame":1304,"role":"source","alternate":false},{"frame":1310,"role":"source","alternate":false},{"frame":1316,"role":"source","alternate":false},{"frame":1322,"role":"source","alternate":false},{"frame":1328,"role":"source","alternate":false},{"frame":1334,"role":"source","alternate":false},{"frame":1340,"role":"source","alternate":false},{"frame":1346,"role":"source","alternate":false},{"frame":1352,"role":"source","alternate":false},{"frame":1358,"role":"source","alternate":false},{"frame":1364,"role":"source","alternate":false},{"frame":1370,"role":"source","alternate":false},{"frame":1371,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[997.0,1094],"sourceToActorScale":1.1304347826086956,"commonRegistrationCrop":[0,0,384,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":1437,"symbol":"naruto_hermit_fla.金鸣_18"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":18,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":26,"icon":"assets/skills-v28/naruto_kurama/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__naruto_hermit.swf","sha256":"1177600b9f3629ee280ad90cd6f97a617bdb6171ffc11ef7b35b54a59d62ed50","spriteId":1437,"symbol":"naruto_hermit_fla.金鸣_18"},"visualComplete":true},"naruto_one_tail":{"portrait":"assets/skills-v28/naruto_one_tail/portrait.webp","actor":{"file":"assets/skills-v28/naruto_one_tail/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":8,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,16,18,20,22,26,28],"uniqueFrames":7},"cast":{"sourceFrames":[338,340,342,344,346,348],"uniqueFrames":6},"hurt":{"sourceFrames":[829,831,833,835],"uniqueFrames":3}}},"skills":{"primary":{"id":"naruto_one_tail-primary","name":"尾兽衣·查克拉臂","file":"assets/skills-v28/naruto_one_tail/primary.webp","cell":[181,68],"columns":8,"frames":17,"frame_times_ms":[90,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,130],"fps":14.592274678111588,"anchor":[37,65],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.1854077253218884,0.455793991416309],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":338,"role":"source","alternate":false},{"frame":340,"role":"source","alternate":false},{"frame":342,"role":"source","alternate":false},{"frame":344,"role":"source","alternate":false},{"frame":346,"role":"source","alternate":false},{"frame":348,"role":"source","alternate":false},{"frame":350,"role":"source","alternate":false},{"frame":352,"role":"source","alternate":false},{"frame":354,"role":"source","alternate":false},{"frame":356,"role":"source","alternate":false},{"frame":358,"role":"source","alternate":false},{"frame":360,"role":"source","alternate":false},{"frame":362,"role":"source","alternate":false},{"frame":364,"role":"source","alternate":false},{"frame":365,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[313.5,613],"sourceToActorScale":1.1063829787234043,"commonRegistrationCrop":[83,199,264,267],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1304,"symbol":"naruto_fla.鸣人九尾全动作_20"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":9,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":16,"icon":"assets/skills-v28/naruto_one_tail/primary-icon.webp"},"secondary":{"id":"naruto_one_tail-secondary","name":"尾兽衣·突进","file":"assets/skills-v28/naruto_one_tail/secondary.webp","cell":[93,80],"columns":8,"frames":15,"frame_times_ms":[90,62,62,62,62,62,62,62,62,62,62,62,62,62,130],"fps":14.61988304093567,"anchor":[53,74],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","recovery"],"damageWindow":[0.20857699805068225,0.8732943469785575],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":437,"role":"source","alternate":false},{"frame":439,"role":"source","alternate":false},{"frame":441,"role":"source","alternate":false},{"frame":443,"role":"source","alternate":false},{"frame":445,"role":"source","alternate":false},{"frame":447,"role":"source","alternate":false},{"frame":449,"role":"source","alternate":false},{"frame":451,"role":"source","alternate":false},{"frame":453,"role":"source","alternate":false},{"frame":455,"role":"source","alternate":false},{"frame":457,"role":"source","alternate":false},{"frame":459,"role":"source","alternate":false},{"frame":460,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[313.5,613],"sourceToActorScale":1.1063829787234043,"commonRegistrationCrop":[67,190,160,270],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1304,"symbol":"naruto_fla.鸣人九尾全动作_20"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":6,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":14,"icon":"assets/skills-v28/naruto_one_tail/secondary-icon.webp"},"ultimate":{"id":"naruto_one_tail-ultimate","name":"尾兽衣·冲击爆发","file":"assets/skills-v28/naruto_one_tail/ultimate.webp","cell":[349,110],"columns":8,"frames":27,"frame_times_ms":[90,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,130],"fps":11.63793103448276,"anchor":[85,82],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.11120689655172414,0.6543103448275862],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":684,"role":"source","alternate":false},{"frame":689,"role":"source","alternate":false},{"frame":694,"role":"source","alternate":false},{"frame":699,"role":"source","alternate":false},{"frame":704,"role":"source","alternate":false},{"frame":709,"role":"source","alternate":false},{"frame":714,"role":"source","alternate":false},{"frame":719,"role":"source","alternate":false},{"frame":724,"role":"source","alternate":false},{"frame":729,"role":"source","alternate":false},{"frame":734,"role":"source","alternate":false},{"frame":739,"role":"source","alternate":false},{"frame":744,"role":"source","alternate":false},{"frame":749,"role":"source","alternate":false},{"frame":754,"role":"source","alternate":false},{"frame":759,"role":"source","alternate":false},{"frame":764,"role":"source","alternate":false},{"frame":769,"role":"source","alternate":false},{"frame":774,"role":"source","alternate":false},{"frame":779,"role":"source","alternate":false},{"frame":784,"role":"source","alternate":false},{"frame":789,"role":"source","alternate":false},{"frame":794,"role":"source","alternate":false},{"frame":799,"role":"source","alternate":false},{"frame":804,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[313.5,613],"sourceToActorScale":1.1063829787234043,"commonRegistrationCrop":[35,182,384,292],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1304,"symbol":"naruto_fla.鸣人九尾全动作_20"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":16,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":26,"icon":"assets/skills-v28/naruto_one_tail/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1304,"symbol":"naruto_fla.鸣人九尾全动作_20"},"visualComplete":true},"naruto_four_tail":{"portrait":"assets/skills-v28/naruto_four_tail/portrait.webp","actor":{"file":"assets/skills-v28/naruto_four_tail/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":8,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,16,18,20,22,26,28],"uniqueFrames":7},"cast":{"sourceFrames":[384,386,388,390,392,394],"uniqueFrames":6},"hurt":{"sourceFrames":[940,942,944,946],"uniqueFrames":3}}},"skills":{"primary":{"id":"naruto_four_tail-primary","name":"尾兽衣·冲击波","file":"assets/skills-v28/naruto_four_tail/primary.webp","cell":[110,65],"columns":8,"frames":12,"frame_times_ms":[90,71,71,71,71,71,71,71,71,71,71,130],"fps":12.903225806451612,"anchor":[36,56],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.24946236559139784,0.4021505376344086],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":384,"role":"source","alternate":false},{"frame":386,"role":"source","alternate":false},{"frame":388,"role":"source","alternate":false},{"frame":390,"role":"source","alternate":false},{"frame":392,"role":"source","alternate":false},{"frame":394,"role":"source","alternate":false},{"frame":396,"role":"source","alternate":false},{"frame":398,"role":"source","alternate":false},{"frame":400,"role":"source","alternate":false},{"frame":402,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[222.0,546],"sourceToActorScale":0.8,"commonRegistrationCrop":[84,208,194,273],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1860,"symbol":"naruto_fla.四尾全动作_31"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":9,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":11,"icon":"assets/skills-v28/naruto_four_tail/primary-icon.webp"},"secondary":{"id":"naruto_four_tail-secondary","name":"尾兽衣·爪击","file":"assets/skills-v28/naruto_four_tail/secondary.webp","cell":[191,218],"columns":8,"frames":26,"frame_times_ms":[90,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,130],"fps":14.412416851441241,"anchor":[67,199],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.12305986696230599,0.7450110864745011],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":440,"role":"source","alternate":false},{"frame":442,"role":"source","alternate":false},{"frame":444,"role":"source","alternate":false},{"frame":446,"role":"source","alternate":false},{"frame":448,"role":"source","alternate":false},{"frame":450,"role":"source","alternate":false},{"frame":452,"role":"source","alternate":false},{"frame":454,"role":"source","alternate":false},{"frame":456,"role":"source","alternate":false},{"frame":458,"role":"source","alternate":false},{"frame":460,"role":"source","alternate":false},{"frame":462,"role":"source","alternate":false},{"frame":464,"role":"source","alternate":false},{"frame":466,"role":"source","alternate":false},{"frame":468,"role":"source","alternate":false},{"frame":470,"role":"source","alternate":false},{"frame":472,"role":"source","alternate":false},{"frame":474,"role":"source","alternate":false},{"frame":476,"role":"source","alternate":false},{"frame":478,"role":"source","alternate":false},{"frame":480,"role":"source","alternate":false},{"frame":482,"role":"source","alternate":false},{"frame":484,"role":"source","alternate":false},{"frame":486,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[222.0,546],"sourceToActorScale":0.8,"commonRegistrationCrop":[53,65,244,283],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1860,"symbol":"naruto_fla.四尾全动作_31"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":19,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":25,"icon":"assets/skills-v28/naruto_four_tail/secondary-icon.webp"},"ultimate":{"id":"naruto_four_tail-ultimate","name":"尾兽玉·爆发","file":"assets/skills-v28/naruto_four_tail/ultimate.webp","cell":[317,261],"columns":8,"frames":29,"frame_times_ms":[90,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,130],"fps":11.530815109343937,"anchor":[53,225],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.10337972166998012,0.7793240556660039],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":785,"role":"source","alternate":false},{"frame":790,"role":"source","alternate":false},{"frame":795,"role":"source","alternate":false},{"frame":800,"role":"source","alternate":false},{"frame":805,"role":"source","alternate":false},{"frame":810,"role":"source","alternate":false},{"frame":815,"role":"source","alternate":false},{"frame":820,"role":"source","alternate":false},{"frame":825,"role":"source","alternate":false},{"frame":830,"role":"source","alternate":false},{"frame":835,"role":"source","alternate":false},{"frame":840,"role":"source","alternate":false},{"frame":845,"role":"source","alternate":false},{"frame":850,"role":"source","alternate":false},{"frame":855,"role":"source","alternate":false},{"frame":860,"role":"source","alternate":false},{"frame":865,"role":"source","alternate":false},{"frame":870,"role":"source","alternate":false},{"frame":875,"role":"source","alternate":false},{"frame":880,"role":"source","alternate":false},{"frame":885,"role":"source","alternate":false},{"frame":890,"role":"source","alternate":false},{"frame":895,"role":"source","alternate":false},{"frame":900,"role":"source","alternate":false},{"frame":905,"role":"source","alternate":false},{"frame":910,"role":"source","alternate":false},{"frame":915,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[222.0,546],"sourceToActorScale":0.8,"commonRegistrationCrop":[67,39,384,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1860,"symbol":"naruto_fla.四尾全动作_31"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":22,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":28,"icon":"assets/skills-v28/naruto_four_tail/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__naruto.swf","sha256":"eb29f3aa41879529927a54bd0faed59e8555082ec1139d13430de8c6ddf0b25d","spriteId":1860,"symbol":"naruto_fla.四尾全动作_31"},"visualComplete":true},"kakashi_kamui":{"portrait":"assets/skills-v28/kakashi_kamui/portrait.webp","actor":{"file":"assets/skills-v28/kakashi_kamui/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":8,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,16,18,20,22,26,28],"uniqueFrames":6},"cast":{"sourceFrames":[475,477,479,481,483,485],"uniqueFrames":4},"hurt":{"sourceFrames":[1209,1211,1213,1215],"uniqueFrames":3}}},"skills":{"primary":{"id":"kakashi_kamui-primary","name":"忍具·连击","file":"assets/skills-v28/kakashi_kamui/primary.webp","cell":[158,78],"columns":8,"frames":26,"frame_times_ms":[90,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,130],"fps":11.504424778761063,"anchor":[120,74],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"damageWindow":[0.03982300884955752,0.8296460176991151],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":254,"role":"source","alternate":true},{"frame":256,"role":"source","alternate":true},{"frame":258,"role":"source","alternate":true},{"frame":260,"role":"source","alternate":true},{"frame":262,"role":"source","alternate":true},{"frame":264,"role":"source","alternate":true},{"frame":266,"role":"source","alternate":true},{"frame":268,"role":"source","alternate":true},{"frame":270,"role":"source","alternate":true},{"frame":272,"role":"source","alternate":true},{"frame":274,"role":"source","alternate":true},{"frame":276,"role":"source","alternate":true},{"frame":278,"role":"source","alternate":true},{"frame":280,"role":"source","alternate":true},{"frame":282,"role":"source","alternate":true},{"frame":284,"role":"source","alternate":true},{"frame":286,"role":"source","alternate":true},{"frame":288,"role":"source","alternate":true},{"frame":290,"role":"source","alternate":true},{"frame":292,"role":"source","alternate":true},{"frame":308,"role":"source","alternate":true},{"frame":310,"role":"source","alternate":true},{"frame":312,"role":"source","alternate":true},{"frame":313,"role":"source","alternate":true},{"frame":1,"role":"recovery"}],"sourceFoot":[942.5,987],"sourceToActorScale":0.9629629629629629,"commonRegistrationCrop":[0,190,158,268],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__kakashi.swf","sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09","spriteId":1197,"symbol":"kakashi_fla.人物全动作_17"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":{"originalRange":[475,510],"replacementRange":[254,314],"reason":"原选择是脚本依赖投射/施术动作，改用同一精确形态已绘制的完整近身动作；未借用其他形态。"},"artReady":true,"releaseComplete":false,"uniqueFrames":24,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":25,"icon":"assets/skills-v28/kakashi_kamui/primary-icon.webp"},"secondary":{"id":"kakashi_kamui-secondary","name":"神威","file":"assets/skills-v28/kakashi_kamui/secondary.webp","cell":[66,61],"columns":8,"frames":30,"frame_times_ms":[90,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,130],"fps":13.940520446096654,"anchor":[26,60],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.20213754646840149,0.49070631970260226],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":567,"role":"source","alternate":false},{"frame":569,"role":"source","alternate":false},{"frame":571,"role":"source","alternate":false},{"frame":573,"role":"source","alternate":false},{"frame":575,"role":"source","alternate":false},{"frame":577,"role":"source","alternate":false},{"frame":581,"role":"source","alternate":false},{"frame":583,"role":"source","alternate":false},{"frame":585,"role":"source","alternate":false},{"frame":587,"role":"source","alternate":false},{"frame":589,"role":"source","alternate":false},{"frame":591,"role":"source","alternate":false},{"frame":593,"role":"source","alternate":false},{"frame":595,"role":"source","alternate":false},{"frame":597,"role":"source","alternate":false},{"frame":599,"role":"source","alternate":false},{"frame":601,"role":"source","alternate":false},{"frame":603,"role":"source","alternate":false},{"frame":605,"role":"source","alternate":false},{"frame":607,"role":"source","alternate":false},{"frame":609,"role":"source","alternate":false},{"frame":611,"role":"source","alternate":false},{"frame":613,"role":"source","alternate":false},{"frame":615,"role":"source","alternate":false},{"frame":617,"role":"source","alternate":false},{"frame":619,"role":"source","alternate":false},{"frame":621,"role":"source","alternate":false},{"frame":622,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[942.5,987],"sourceToActorScale":0.9629629629629629,"commonRegistrationCrop":[94,204,160,265],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__kakashi.swf","sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09","spriteId":1197,"symbol":"kakashi_fla.人物全动作_17"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"adapted","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":15,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":29,"icon":"assets/skills-v28/kakashi_kamui/secondary-icon.webp"},"ultimate":{"id":"kakashi_kamui-ultimate","name":"空间转移·连击","file":"assets/skills-v28/kakashi_kamui/ultimate.webp","cell":[327,98],"columns":8,"frames":23,"frame_times_ms":[90,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,130],"fps":11.716760061130923,"anchor":[120,89],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.1726948548140601,0.7223637289862456],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":1005,"role":"source","alternate":false},{"frame":1012,"role":"source","alternate":false},{"frame":1019,"role":"source","alternate":false},{"frame":1026,"role":"source","alternate":false},{"frame":1033,"role":"source","alternate":false},{"frame":1040,"role":"source","alternate":false},{"frame":1089,"role":"source","alternate":false},{"frame":1096,"role":"source","alternate":false},{"frame":1103,"role":"source","alternate":false},{"frame":1110,"role":"source","alternate":false},{"frame":1117,"role":"source","alternate":false},{"frame":1124,"role":"source","alternate":false},{"frame":1131,"role":"source","alternate":false},{"frame":1138,"role":"source","alternate":false},{"frame":1145,"role":"source","alternate":false},{"frame":1152,"role":"source","alternate":false},{"frame":1159,"role":"source","alternate":false},{"frame":1166,"role":"source","alternate":false},{"frame":1173,"role":"source","alternate":false},{"frame":1180,"role":"source","alternate":false},{"frame":1184,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[942.5,987],"sourceToActorScale":0.9629629629629629,"commonRegistrationCrop":[0,175,327,273],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__kakashi.swf","sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09","spriteId":1197,"symbol":"kakashi_fla.人物全动作_17"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":17,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":22,"icon":"assets/skills-v28/kakashi_kamui/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__kakashi.swf","sha256":"ad84881fc74f5767c2b256377b484f7d6face2fcd70720e3333b6a1730638d09","spriteId":1197,"symbol":"kakashi_fla.人物全动作_17"},"visualComplete":true},"sasuke_curse":{"portrait":"assets/skills-v28/sasuke_curse/portrait.webp","actor":{"file":"assets/skills-v28/sasuke_curse/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":4,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,14,16],"uniqueFrames":4},"cast":{"sourceFrames":[314,316,318,320,322,324],"uniqueFrames":3},"hurt":{"sourceFrames":[811,813,815,817],"uniqueFrames":3}}},"skills":{"primary":{"id":"sasuke_curse-primary","name":"咒印·体术连击","file":"assets/skills-v28/sasuke_curse/primary.webp","cell":[134,198],"columns":8,"frames":23,"frame_times_ms":[90,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,130],"fps":14.511041009463721,"anchor":[64,196],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.056782334384858045,0.42586750788643535],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":212,"role":"source","alternate":true},{"frame":214,"role":"source","alternate":true},{"frame":216,"role":"source","alternate":true},{"frame":218,"role":"source","alternate":true},{"frame":220,"role":"source","alternate":true},{"frame":222,"role":"source","alternate":true},{"frame":224,"role":"source","alternate":true},{"frame":226,"role":"source","alternate":true},{"frame":228,"role":"source","alternate":true},{"frame":230,"role":"source","alternate":true},{"frame":232,"role":"source","alternate":true},{"frame":234,"role":"source","alternate":true},{"frame":236,"role":"source","alternate":true},{"frame":238,"role":"source","alternate":true},{"frame":240,"role":"source","alternate":true},{"frame":242,"role":"source","alternate":true},{"frame":244,"role":"source","alternate":true},{"frame":246,"role":"source","alternate":true},{"frame":248,"role":"source","alternate":true},{"frame":250,"role":"source","alternate":true},{"frame":251,"role":"source","alternate":true},{"frame":1,"role":"recovery"}],"sourceFoot":[180.0,836],"sourceToActorScale":0.8387096774193549,"commonRegistrationCrop":[56,68,190,266],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke.swf","sha256":"d421184b595d6122384f47e55312f6827a6ee4779fb7627fbebb6a247dbf5a5a","spriteId":823,"symbol":"sasuke_fla.佐助咒化_17"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":{"originalRange":[314,356],"replacementRange":[212,252],"reason":"原选择是脚本依赖投射/施术动作，改用同一精确形态已绘制的完整近身动作；未借用其他形态。"},"artReady":true,"releaseComplete":false,"uniqueFrames":11,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":22,"icon":"assets/skills-v28/sasuke_curse/primary-icon.webp"},"secondary":{"id":"sasuke_curse-secondary","name":"咒印·雷遁连击","file":"assets/skills-v28/sasuke_curse/secondary.webp","cell":[131,141],"columns":8,"frames":26,"frame_times_ms":[90,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,130],"fps":14.412416851441241,"anchor":[61,105],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.08647450110864745,0.4157427937915743],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":356,"role":"source","alternate":false},{"frame":359,"role":"source","alternate":false},{"frame":362,"role":"source","alternate":false},{"frame":365,"role":"source","alternate":false},{"frame":368,"role":"source","alternate":false},{"frame":371,"role":"source","alternate":false},{"frame":374,"role":"source","alternate":false},{"frame":377,"role":"source","alternate":false},{"frame":380,"role":"source","alternate":false},{"frame":383,"role":"source","alternate":false},{"frame":386,"role":"source","alternate":false},{"frame":389,"role":"source","alternate":false},{"frame":392,"role":"source","alternate":false},{"frame":395,"role":"source","alternate":false},{"frame":398,"role":"source","alternate":false},{"frame":401,"role":"source","alternate":false},{"frame":404,"role":"source","alternate":false},{"frame":407,"role":"source","alternate":false},{"frame":410,"role":"source","alternate":false},{"frame":413,"role":"source","alternate":false},{"frame":416,"role":"source","alternate":false},{"frame":419,"role":"source","alternate":false},{"frame":422,"role":"source","alternate":false},{"frame":423,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[180.0,836],"sourceToActorScale":0.8387096774193549,"commonRegistrationCrop":[59,159,190,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke.swf","sha256":"d421184b595d6122384f47e55312f6827a6ee4779fb7627fbebb6a247dbf5a5a","spriteId":823,"symbol":"sasuke_fla.佐助咒化_17"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":13,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":25,"icon":"assets/skills-v28/sasuke_curse/secondary-icon.webp"},"ultimate":{"id":"sasuke_curse-ultimate","name":"咒印·雷兽冲击","file":"assets/skills-v28/sasuke_curse/ultimate.webp","cell":[165,217],"columns":8,"frames":28,"frame_times_ms":[90,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,130],"fps":11.647254575707155,"anchor":[120,181],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.03743760399334443,0.3519134775374376],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":692,"role":"source","alternate":false},{"frame":696,"role":"source","alternate":false},{"frame":700,"role":"source","alternate":false},{"frame":704,"role":"source","alternate":false},{"frame":708,"role":"source","alternate":false},{"frame":712,"role":"source","alternate":false},{"frame":716,"role":"source","alternate":false},{"frame":720,"role":"source","alternate":false},{"frame":724,"role":"source","alternate":false},{"frame":728,"role":"source","alternate":false},{"frame":732,"role":"source","alternate":false},{"frame":736,"role":"source","alternate":false},{"frame":740,"role":"source","alternate":false},{"frame":744,"role":"source","alternate":false},{"frame":748,"role":"source","alternate":false},{"frame":752,"role":"source","alternate":false},{"frame":756,"role":"source","alternate":false},{"frame":760,"role":"source","alternate":false},{"frame":764,"role":"source","alternate":false},{"frame":768,"role":"source","alternate":false},{"frame":772,"role":"source","alternate":false},{"frame":776,"role":"source","alternate":false},{"frame":780,"role":"source","alternate":false},{"frame":784,"role":"source","alternate":false},{"frame":788,"role":"source","alternate":false},{"frame":792,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[180.0,836],"sourceToActorScale":0.8387096774193549,"commonRegistrationCrop":[0,83,165,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke.swf","sha256":"d421184b595d6122384f47e55312f6827a6ee4779fb7627fbebb6a247dbf5a5a","spriteId":823,"symbol":"sasuke_fla.佐助咒化_17"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":12,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":27,"icon":"assets/skills-v28/sasuke_curse/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__sasuke.swf","sha256":"d421184b595d6122384f47e55312f6827a6ee4779fb7627fbebb6a247dbf5a5a","spriteId":823,"symbol":"sasuke_fla.佐助咒化_17"},"visualComplete":true},"sasuke_hebi":{"portrait":"assets/skills-v28/sasuke_hebi/portrait.webp","actor":{"file":"assets/skills-v28/sasuke_hebi/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":5,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,14,16,18],"uniqueFrames":3},"cast":{"sourceFrames":[447,450,453,456,459,462],"uniqueFrames":4},"hurt":{"sourceFrames":[1246,1248,1250,1252],"uniqueFrames":3}}},"skills":{"primary":{"id":"sasuke_hebi-primary","name":"雷遁·突进连击","file":"assets/skills-v28/sasuke_hebi/primary.webp","cell":[110,56],"columns":8,"frames":25,"frame_times_ms":[90,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,130],"fps":14.384349827387803,"anchor":[33,55],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.27963176064441886,0.5074798619102416],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":447,"role":"source","alternate":false},{"frame":450,"role":"source","alternate":false},{"frame":453,"role":"source","alternate":false},{"frame":456,"role":"source","alternate":false},{"frame":459,"role":"source","alternate":false},{"frame":462,"role":"source","alternate":false},{"frame":465,"role":"source","alternate":false},{"frame":468,"role":"source","alternate":false},{"frame":471,"role":"source","alternate":false},{"frame":474,"role":"source","alternate":false},{"frame":477,"role":"source","alternate":false},{"frame":480,"role":"source","alternate":false},{"frame":483,"role":"source","alternate":false},{"frame":486,"role":"source","alternate":false},{"frame":489,"role":"source","alternate":false},{"frame":492,"role":"source","alternate":false},{"frame":495,"role":"source","alternate":false},{"frame":498,"role":"source","alternate":false},{"frame":501,"role":"source","alternate":false},{"frame":504,"role":"source","alternate":false},{"frame":507,"role":"source","alternate":false},{"frame":510,"role":"source","alternate":false},{"frame":511,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[487.0,275],"sourceToActorScale":0.9629629629629629,"commonRegistrationCrop":[87,209,197,265],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":718,"symbol":"sasuke_susanoo_fla.鹰佐助_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":10,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":24,"icon":"assets/skills-v28/sasuke_hebi/primary-icon.webp"},"secondary":{"id":"sasuke_hebi-secondary","name":"雷遁·连续攻击","file":"assets/skills-v28/sasuke_hebi/secondary.webp","cell":[221,176],"columns":8,"frames":27,"frame_times_ms":[90,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,130],"fps":14.438502673796792,"anchor":[40,171],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.08342245989304813,0.6481283422459893],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":628,"role":"source","alternate":false},{"frame":631,"role":"source","alternate":false},{"frame":634,"role":"source","alternate":false},{"frame":637,"role":"source","alternate":false},{"frame":640,"role":"source","alternate":false},{"frame":643,"role":"source","alternate":false},{"frame":646,"role":"source","alternate":false},{"frame":649,"role":"source","alternate":false},{"frame":652,"role":"source","alternate":false},{"frame":655,"role":"source","alternate":false},{"frame":658,"role":"source","alternate":false},{"frame":661,"role":"source","alternate":false},{"frame":664,"role":"source","alternate":false},{"frame":667,"role":"source","alternate":false},{"frame":670,"role":"source","alternate":false},{"frame":673,"role":"source","alternate":false},{"frame":676,"role":"source","alternate":false},{"frame":679,"role":"source","alternate":false},{"frame":682,"role":"source","alternate":false},{"frame":685,"role":"source","alternate":false},{"frame":688,"role":"source","alternate":false},{"frame":691,"role":"source","alternate":false},{"frame":694,"role":"source","alternate":false},{"frame":697,"role":"source","alternate":false},{"frame":699,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[487.0,275],"sourceToActorScale":0.9629629629629629,"commonRegistrationCrop":[80,93,301,269],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":718,"symbol":"sasuke_susanoo_fla.鹰佐助_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":16,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":26,"icon":"assets/skills-v28/sasuke_hebi/secondary-icon.webp"},"ultimate":{"id":"sasuke_hebi-ultimate","name":"须佐能乎·弓矢","file":"assets/skills-v28/sasuke_hebi/ultimate.webp","cell":[226,173],"columns":8,"frames":28,"frame_times_ms":[90,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,130],"fps":11.647254575707155,"anchor":[99,152],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.0723793677204659,0.7712146422628952],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":1103,"role":"source","alternate":false},{"frame":1108,"role":"source","alternate":false},{"frame":1113,"role":"source","alternate":false},{"frame":1118,"role":"source","alternate":false},{"frame":1123,"role":"source","alternate":false},{"frame":1128,"role":"source","alternate":false},{"frame":1133,"role":"source","alternate":false},{"frame":1138,"role":"source","alternate":false},{"frame":1143,"role":"source","alternate":false},{"frame":1148,"role":"source","alternate":false},{"frame":1153,"role":"source","alternate":false},{"frame":1158,"role":"source","alternate":false},{"frame":1163,"role":"source","alternate":false},{"frame":1168,"role":"source","alternate":false},{"frame":1173,"role":"source","alternate":false},{"frame":1178,"role":"source","alternate":false},{"frame":1183,"role":"source","alternate":false},{"frame":1188,"role":"source","alternate":false},{"frame":1193,"role":"source","alternate":false},{"frame":1198,"role":"source","alternate":false},{"frame":1203,"role":"source","alternate":false},{"frame":1208,"role":"source","alternate":false},{"frame":1213,"role":"source","alternate":false},{"frame":1218,"role":"source","alternate":false},{"frame":1223,"role":"source","alternate":false},{"frame":1227,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[487.0,275],"sourceToActorScale":0.9629629629629629,"commonRegistrationCrop":[21,112,247,285],"blackPlatePixelsRemoved":97575,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":718,"symbol":"sasuke_susanoo_fla.鹰佐助_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":23,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":27,"icon":"assets/skills-v28/sasuke_hebi/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":718,"symbol":"sasuke_susanoo_fla.鹰佐助_2"},"visualComplete":true},"sasuke_susanoo":{"portrait":"assets/skills-v28/sasuke_susanoo/portrait.webp","actor":{"file":"assets/skills-v28/sasuke_susanoo/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":5,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,14,16,18],"uniqueFrames":5},"cast":{"sourceFrames":[534,536,538,540,542,544],"uniqueFrames":3},"hurt":{"sourceFrames":[1406,1408,1410,1412],"uniqueFrames":3}}},"skills":{"primary":{"id":"sasuke_susanoo-primary","name":"炎遁·黑炎","file":"assets/skills-v28/sasuke_susanoo/primary.webp","cell":[121,60],"columns":8,"frames":24,"frame_times_ms":[90,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,130],"fps":14.545454545454545,"anchor":[17,54],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","startup","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.17272727272727273,0.21212121212121213],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":534,"role":"source","alternate":false},{"frame":536,"role":"source","alternate":false},{"frame":538,"role":"source","alternate":false},{"frame":540,"role":"source","alternate":false},{"frame":542,"role":"source","alternate":false},{"frame":544,"role":"source","alternate":false},{"frame":546,"role":"source","alternate":false},{"frame":548,"role":"source","alternate":false},{"frame":550,"role":"source","alternate":false},{"frame":552,"role":"source","alternate":false},{"frame":554,"role":"source","alternate":false},{"frame":556,"role":"source","alternate":false},{"frame":558,"role":"source","alternate":false},{"frame":560,"role":"source","alternate":false},{"frame":562,"role":"source","alternate":false},{"frame":564,"role":"source","alternate":false},{"frame":566,"role":"source","alternate":false},{"frame":568,"role":"source","alternate":false},{"frame":570,"role":"source","alternate":false},{"frame":572,"role":"source","alternate":false},{"frame":574,"role":"source","alternate":false},{"frame":576,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[1154.5,1144],"sourceToActorScale":0.9122807017543859,"commonRegistrationCrop":[103,210,224,270],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":1534,"symbol":"sasuke_susanoo_fla.佐助_52"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":6,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":23,"icon":"assets/skills-v28/sasuke_susanoo/primary-icon.webp"},"secondary":{"id":"sasuke_susanoo-secondary","name":"须佐能乎·骨架攻击","file":"assets/skills-v28/sasuke_susanoo/secondary.webp","cell":[171,198],"columns":8,"frames":22,"frame_times_ms":[90,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,130],"fps":14.473684210526315,"anchor":[72,180],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.05921052631578947,0.40131578947368424],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":672,"role":"source","alternate":false},{"frame":674,"role":"source","alternate":false},{"frame":676,"role":"source","alternate":false},{"frame":678,"role":"source","alternate":false},{"frame":680,"role":"source","alternate":false},{"frame":682,"role":"source","alternate":false},{"frame":684,"role":"source","alternate":false},{"frame":686,"role":"source","alternate":false},{"frame":688,"role":"source","alternate":false},{"frame":690,"role":"source","alternate":false},{"frame":692,"role":"source","alternate":false},{"frame":694,"role":"source","alternate":false},{"frame":696,"role":"source","alternate":false},{"frame":698,"role":"source","alternate":false},{"frame":700,"role":"source","alternate":false},{"frame":702,"role":"source","alternate":false},{"frame":704,"role":"source","alternate":false},{"frame":706,"role":"source","alternate":false},{"frame":708,"role":"source","alternate":false},{"frame":710,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[1154.5,1144],"sourceToActorScale":0.9122807017543859,"commonRegistrationCrop":[48,84,219,282],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":1534,"symbol":"sasuke_susanoo_fla.佐助_52"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":17,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":21,"icon":"assets/skills-v28/sasuke_susanoo/secondary-icon.webp"},"ultimate":{"id":"sasuke_susanoo-ultimate","name":"须佐能乎·终结攻击","file":"assets/skills-v28/sasuke_susanoo/ultimate.webp","cell":[384,300],"columns":8,"frames":27,"frame_times_ms":[90,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,130],"fps":11.63793103448276,"anchor":[120,264],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.03879310344827586,0.7991379310344827],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":1243,"role":"source","alternate":false},{"frame":1249,"role":"source","alternate":false},{"frame":1255,"role":"source","alternate":false},{"frame":1261,"role":"source","alternate":false},{"frame":1267,"role":"source","alternate":false},{"frame":1273,"role":"source","alternate":false},{"frame":1279,"role":"source","alternate":false},{"frame":1285,"role":"source","alternate":false},{"frame":1291,"role":"source","alternate":false},{"frame":1297,"role":"source","alternate":false},{"frame":1303,"role":"source","alternate":false},{"frame":1309,"role":"source","alternate":false},{"frame":1315,"role":"source","alternate":false},{"frame":1321,"role":"source","alternate":false},{"frame":1327,"role":"source","alternate":false},{"frame":1333,"role":"source","alternate":false},{"frame":1339,"role":"source","alternate":false},{"frame":1345,"role":"source","alternate":false},{"frame":1351,"role":"source","alternate":false},{"frame":1357,"role":"source","alternate":false},{"frame":1363,"role":"source","alternate":false},{"frame":1369,"role":"source","alternate":false},{"frame":1375,"role":"source","alternate":false},{"frame":1381,"role":"source","alternate":false},{"frame":1387,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[1154.5,1144],"sourceToActorScale":0.9122807017543859,"commonRegistrationCrop":[0,0,384,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":1534,"symbol":"sasuke_susanoo_fla.佐助_52"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":24,"blackPlateRepair":{"removedPixels":445776,"method":"Near-black connected rectangular plate only, with one-pixel coloured-edge protection; dark nonrectangular flames not globally keyed."},"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":26,"icon":"assets/skills-v28/sasuke_susanoo/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__sasuke_susanoo.swf","sha256":"80af87cb46ea33b394bdc5658f13dec833193d7e79bd5adcf39a55286e060d76","spriteId":1534,"symbol":"sasuke_susanoo_fla.佐助_52"},"visualComplete":true},"sakura_war":{"portrait":"assets/skills-v28/sakura_war/portrait.webp","actor":{"file":"assets/skills-v28/sakura_war/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":8,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":3},"run":{"sourceFrames":[10,12,14,16,20,22,24,26],"uniqueFrames":7},"cast":{"sourceFrames":[288,290,292,294,296,298],"uniqueFrames":6},"hurt":{"sourceFrames":[748,750,752,754],"uniqueFrames":3}}},"skills":{"primary":{"id":"sakura_war-primary","name":"怪力·连击","file":"assets/skills-v28/sakura_war/primary.webp","cell":[70,58],"columns":8,"frames":34,"frame_times_ms":[90,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,130],"fps":14.382402707275803,"anchor":[34,56],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.09475465313028765,0.689932318104907],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":105,"role":"source","alternate":true},{"frame":107,"role":"source","alternate":true},{"frame":109,"role":"source","alternate":true},{"frame":111,"role":"source","alternate":true},{"frame":113,"role":"source","alternate":true},{"frame":115,"role":"source","alternate":true},{"frame":117,"role":"source","alternate":true},{"frame":119,"role":"source","alternate":true},{"frame":121,"role":"source","alternate":true},{"frame":123,"role":"source","alternate":true},{"frame":125,"role":"source","alternate":true},{"frame":127,"role":"source","alternate":true},{"frame":129,"role":"source","alternate":true},{"frame":131,"role":"source","alternate":true},{"frame":133,"role":"source","alternate":true},{"frame":135,"role":"source","alternate":true},{"frame":137,"role":"source","alternate":true},{"frame":139,"role":"source","alternate":true},{"frame":141,"role":"source","alternate":true},{"frame":143,"role":"source","alternate":true},{"frame":145,"role":"source","alternate":true},{"frame":147,"role":"source","alternate":true},{"frame":149,"role":"source","alternate":true},{"frame":151,"role":"source","alternate":true},{"frame":153,"role":"source","alternate":true},{"frame":155,"role":"source","alternate":true},{"frame":157,"role":"source","alternate":true},{"frame":159,"role":"source","alternate":true},{"frame":161,"role":"source","alternate":true},{"frame":163,"role":"source","alternate":true},{"frame":165,"role":"source","alternate":true},{"frame":165,"role":"source","alternate":true},{"frame":1,"role":"recovery"}],"sourceFoot":[221.5,347],"sourceToActorScale":1.0833333333333333,"commonRegistrationCrop":[86,208,156,266],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sakura_sr.swf","sha256":"b2e42ab317ce6d1a507f5ecca4ceacccb3f16957f8550313af665fbc74fdd33f","spriteId":676,"symbol":"sakura_sr_fla.人物全动作_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":{"originalRange":[288,317],"replacementRange":[105,166],"reason":"原选择是脚本依赖投射/施术动作，改用同一精确形态已绘制的完整近身动作；未借用其他形态。"},"artReady":true,"releaseComplete":false,"uniqueFrames":16,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":33,"icon":"assets/skills-v28/sakura_war/primary-icon.webp"},"secondary":{"id":"sakura_war-secondary","name":"怪力·冲击","file":"assets/skills-v28/sakura_war/secondary.webp","cell":[122,104],"columns":8,"frames":22,"frame_times_ms":[90,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,130],"fps":14.473684210526315,"anchor":[40,68],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.2730263157894737,0.743421052631579],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":347,"role":"source","alternate":false},{"frame":349,"role":"source","alternate":false},{"frame":351,"role":"source","alternate":false},{"frame":353,"role":"source","alternate":false},{"frame":355,"role":"source","alternate":false},{"frame":357,"role":"source","alternate":false},{"frame":359,"role":"source","alternate":false},{"frame":361,"role":"source","alternate":false},{"frame":363,"role":"source","alternate":false},{"frame":365,"role":"source","alternate":false},{"frame":367,"role":"source","alternate":false},{"frame":369,"role":"source","alternate":false},{"frame":371,"role":"source","alternate":false},{"frame":373,"role":"source","alternate":false},{"frame":375,"role":"source","alternate":false},{"frame":377,"role":"source","alternate":false},{"frame":379,"role":"source","alternate":false},{"frame":381,"role":"source","alternate":false},{"frame":383,"role":"source","alternate":false},{"frame":385,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[221.5,347],"sourceToActorScale":1.0833333333333333,"commonRegistrationCrop":[80,196,202,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sakura_sr.swf","sha256":"b2e42ab317ce6d1a507f5ecca4ceacccb3f16957f8550313af665fbc74fdd33f","spriteId":676,"symbol":"sakura_sr_fla.人物全动作_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":11,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":21,"icon":"assets/skills-v28/sakura_war/secondary-icon.webp"},"ultimate":{"id":"sakura_war-ultimate","name":"怪力·连续打击","file":"assets/skills-v28/sakura_war/ultimate.webp","cell":[161,208],"columns":8,"frames":27,"frame_times_ms":[90,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,130],"fps":11.63793103448276,"anchor":[88,172],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"damageWindow":[0.328448275862069,0.871551724137931],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":567,"role":"source","alternate":false},{"frame":574,"role":"source","alternate":false},{"frame":581,"role":"source","alternate":false},{"frame":588,"role":"source","alternate":false},{"frame":595,"role":"source","alternate":false},{"frame":602,"role":"source","alternate":false},{"frame":609,"role":"source","alternate":false},{"frame":616,"role":"source","alternate":false},{"frame":623,"role":"source","alternate":false},{"frame":630,"role":"source","alternate":false},{"frame":637,"role":"source","alternate":false},{"frame":644,"role":"source","alternate":false},{"frame":651,"role":"source","alternate":false},{"frame":658,"role":"source","alternate":false},{"frame":665,"role":"source","alternate":false},{"frame":672,"role":"source","alternate":false},{"frame":679,"role":"source","alternate":false},{"frame":686,"role":"source","alternate":false},{"frame":693,"role":"source","alternate":false},{"frame":700,"role":"source","alternate":false},{"frame":707,"role":"source","alternate":false},{"frame":714,"role":"source","alternate":false},{"frame":721,"role":"source","alternate":false},{"frame":728,"role":"source","alternate":false},{"frame":729,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[221.5,347],"sourceToActorScale":1.0833333333333333,"commonRegistrationCrop":[32,92,193,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__sakura_sr.swf","sha256":"b2e42ab317ce6d1a507f5ecca4ceacccb3f16957f8550313af665fbc74fdd33f","spriteId":676,"symbol":"sakura_sr_fla.人物全动作_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":24,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":26,"icon":"assets/skills-v28/sakura_war/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__sakura_sr.swf","sha256":"b2e42ab317ce6d1a507f5ecca4ceacccb3f16957f8550313af665fbc74fdd33f","spriteId":676,"symbol":"sakura_sr_fla.人物全动作_2"},"visualComplete":true},"jugo":{"portrait":"assets/skills-v28/jugo/portrait.webp","actor":{"file":"assets/skills-v28/jugo/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":8,"cast":6,"hurt":4},"ms":{"idle":125,"run":83,"cast":83,"hurt":83},"anchor":[48,84],"scale":1,"naturalHeight":52,"actions":{"idle":{"sourceFrames":[1,2,3,4,6,7,8,9],"uniqueFrames":2},"run":{"sourceFrames":[10,12,14,16,18,20,22,24],"uniqueFrames":5},"cast":{"sourceFrames":[424,426,428,430,432,434],"uniqueFrames":4},"hurt":{"sourceFrames":[1041,1043,1045,1047],"uniqueFrames":3}}},"skills":{"primary":{"id":"jugo-primary","name":"咒印·地面重击","file":"assets/skills-v28/jugo/primary.webp","cell":[204,123],"columns":8,"frames":23,"frame_times_ms":[90,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,130],"fps":14.511041009463721,"anchor":[67,101],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.138801261829653,0.6309148264984227],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":424,"role":"source","alternate":false},{"frame":426,"role":"source","alternate":false},{"frame":428,"role":"source","alternate":false},{"frame":430,"role":"source","alternate":false},{"frame":432,"role":"source","alternate":false},{"frame":434,"role":"source","alternate":false},{"frame":436,"role":"source","alternate":false},{"frame":438,"role":"source","alternate":false},{"frame":440,"role":"source","alternate":false},{"frame":442,"role":"source","alternate":false},{"frame":444,"role":"source","alternate":false},{"frame":446,"role":"source","alternate":false},{"frame":448,"role":"source","alternate":false},{"frame":450,"role":"source","alternate":false},{"frame":452,"role":"source","alternate":false},{"frame":454,"role":"source","alternate":false},{"frame":456,"role":"source","alternate":false},{"frame":458,"role":"source","alternate":false},{"frame":460,"role":"source","alternate":false},{"frame":462,"role":"source","alternate":false},{"frame":464,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[501.5,264],"sourceToActorScale":1.1304347826086956,"commonRegistrationCrop":[53,163,257,286],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__juggo.swf","sha256":"c5019f663284bb24c4236a432516d6e5f9a27f92d4c4cce79e122adb5f35689b","spriteId":627,"symbol":"juggo_fla.mc_021_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":13,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":22,"icon":"assets/skills-v28/jugo/primary-icon.webp"},"secondary":{"id":"jugo-secondary","name":"咒印·查克拉冲击","file":"assets/skills-v28/jugo/secondary.webp","cell":[182,137],"columns":8,"frames":25,"frame_times_ms":[90,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,130],"fps":14.384349827387803,"anchor":[110,126],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"damageWindow":[0.1277330264672037,0.6214039125431531],"damageOffset":[40,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":539,"role":"source","alternate":false},{"frame":542,"role":"source","alternate":false},{"frame":545,"role":"source","alternate":false},{"frame":548,"role":"source","alternate":false},{"frame":551,"role":"source","alternate":false},{"frame":554,"role":"source","alternate":false},{"frame":557,"role":"source","alternate":false},{"frame":560,"role":"source","alternate":false},{"frame":563,"role":"source","alternate":false},{"frame":566,"role":"source","alternate":false},{"frame":569,"role":"source","alternate":false},{"frame":572,"role":"source","alternate":false},{"frame":575,"role":"source","alternate":false},{"frame":578,"role":"source","alternate":false},{"frame":581,"role":"source","alternate":false},{"frame":584,"role":"source","alternate":false},{"frame":587,"role":"source","alternate":false},{"frame":590,"role":"source","alternate":false},{"frame":593,"role":"source","alternate":false},{"frame":596,"role":"source","alternate":false},{"frame":599,"role":"source","alternate":false},{"frame":602,"role":"source","alternate":false},{"frame":605,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[501.5,264],"sourceToActorScale":1.1304347826086956,"commonRegistrationCrop":[10,138,192,275],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__juggo.swf","sha256":"c5019f663284bb24c4236a432516d6e5f9a27f92d4c4cce79e122adb5f35689b","spriteId":627,"symbol":"juggo_fla.mc_021_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":14,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":24,"icon":"assets/skills-v28/jugo/secondary-icon.webp"},"ultimate":{"id":"jugo-ultimate","name":"咒印·查克拉炮","file":"assets/skills-v28/jugo/ultimate.webp","cell":[306,179],"columns":8,"frames":29,"frame_times_ms":[90,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,130],"fps":11.530815109343937,"anchor":[42,143],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"frameRoles":["startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery"],"damageWindow":[0.10337972166998012,0.94831013916501],"damageOffset":[65,0],"allowMovement":false,"sourceFrames":[{"frame":1,"role":"startup"},{"frame":895,"role":"source","alternate":false},{"frame":900,"role":"source","alternate":false},{"frame":905,"role":"source","alternate":false},{"frame":910,"role":"source","alternate":false},{"frame":915,"role":"source","alternate":false},{"frame":920,"role":"source","alternate":false},{"frame":925,"role":"source","alternate":false},{"frame":930,"role":"source","alternate":false},{"frame":935,"role":"source","alternate":false},{"frame":940,"role":"source","alternate":false},{"frame":945,"role":"source","alternate":false},{"frame":950,"role":"source","alternate":false},{"frame":955,"role":"source","alternate":false},{"frame":960,"role":"source","alternate":false},{"frame":965,"role":"source","alternate":false},{"frame":970,"role":"source","alternate":false},{"frame":975,"role":"source","alternate":false},{"frame":980,"role":"source","alternate":false},{"frame":985,"role":"source","alternate":false},{"frame":990,"role":"source","alternate":false},{"frame":995,"role":"source","alternate":false},{"frame":1000,"role":"source","alternate":false},{"frame":1005,"role":"source","alternate":false},{"frame":1010,"role":"source","alternate":false},{"frame":1015,"role":"source","alternate":false},{"frame":1020,"role":"source","alternate":false},{"frame":1022,"role":"source","alternate":false},{"frame":1,"role":"recovery"}],"sourceFoot":[501.5,264],"sourceToActorScale":1.1304347826086956,"commonRegistrationCrop":[78,121,384,300],"blackPlatePixelsRemoved":0,"source":{"file":"/workspace/art/catalog/swf/fighters__juggo.swf","sha256":"c5019f663284bb24c4236a432516d6e5f9a27f92d4c4cce79e122adb5f35689b","spriteId":627,"symbol":"juggo_fla.mc_021_2"},"choreography":"Bounded root-foot viewport at fixed 52px actor density; cut-in black plates removed; actual source startup and idle recovery supplied. No source ActionScript executed.","nameReview":{"status":"preview","note":"取自此形态真实像素与动作；命名为主题/视觉描述，未冒称已核验官方动作手游招式。"},"replacement":null,"artReady":true,"releaseComplete":false,"uniqueFrames":20,"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":28,"icon":"assets/skills-v28/jugo/ultimate-icon.webp"}},"sourceMetadata":{"file":"/workspace/art/catalog/swf/fighters__juggo.swf","sha256":"c5019f663284bb24c4236a432516d6e5f9a27f92d4c4cce79e122adb5f35689b","spriteId":627,"symbol":"juggo_fla.mc_021_2"},"visualComplete":true},"kaguya":{"portrait":"assets/skills-v28/kaguya/portrait.webp","actor":{"file":"assets/skills-v28/kaguya/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":8,"run":7,"cast":7,"hurt":1},"ms":{"idle":150,"run":90,"cast":90,"hurt":90},"anchor":[48,84],"scale":1,"targetHeight":52,"sourceUniqueSpriteRefs":{"idle":4,"run":2,"cast":5,"hurt":1}},"skills":{"primary":{"file":"assets/skills-v28/kaguya/primary.webp","icon":"assets/skills-v28/kaguya/primary-icon.png","name":"八十神空击","cell":[244,77],"columns":8,"frames":40,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[49,72],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.23,0.82],"damageOffset":[120,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"source":{"path":"/workspace/art/kaguya-youtube/Otsutsuki_Kaguya-v1.0.rar","sha256":"8d482eb5a2ec79f4e2ab7e55a1aeaec9a07a8dcb92b2bb502b39f754da49eb6a","page":"https://www.andersonkenya1.net/files/file/61539-otsutsuki-kaguya-jus-naruto-series/","sffVersion":"2","author":"Baby_Desu; original credits CobraG6/Shinrashi/Inseph","rootStates":[400,401]},"composition":"Original source actor/effect bitmaps; timing, positioning and phase transitions adapted for top-down combat, not exact source-engine playback.","artStage":"composed","remaining":["正式术名与核心机制最终人工核验；基础动作不足20张独立关键帧。"],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":39},"secondary":{"file":"assets/skills-v28/kaguya/secondary.webp","icon":"assets/skills-v28/kaguya/secondary-icon.png","name":"兔毛针","cell":[252,60],"columns":8,"frames":36,"fps":21.176470588235293,"frame_times_ms":[47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222],"anchor":[40,55],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.25,0.83],"damageOffset":[130,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery"],"source":{"path":"/workspace/art/kaguya-youtube/Otsutsuki_Kaguya-v1.0.rar","sha256":"8d482eb5a2ec79f4e2ab7e55a1aeaec9a07a8dcb92b2bb502b39f754da49eb6a","page":"https://www.andersonkenya1.net/files/file/61539-otsutsuki-kaguya-jus-naruto-series/","sffVersion":"2","author":"Baby_Desu; original credits CobraG6/Shinrashi/Inseph","rootStates":[1000,1001]},"composition":"Original source actor/effect bitmaps; timing, positioning and phase transitions adapted for top-down combat, not exact source-engine playback.","artStage":"composed","remaining":["正式术名与核心机制最终人工核验；基础动作不足20张独立关键帧。"],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":35},"ultimate":{"file":"assets/skills-v28/kaguya/ultimate.webp","icon":"assets/skills-v28/kaguya/ultimate-icon.png","name":"天之御中·冰空间","cell":[298,135],"columns":8,"frames":64,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[49,110],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.36,0.86],"damageOffset":[135,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"source":{"path":"/workspace/art/kaguya-youtube/Otsutsuki_Kaguya-v1.0.rar","sha256":"8d482eb5a2ec79f4e2ab7e55a1aeaec9a07a8dcb92b2bb502b39f754da49eb6a","page":"https://www.andersonkenya1.net/files/file/61539-otsutsuki-kaguya-jus-naruto-series/","sffVersion":"2","author":"Baby_Desu; original credits CobraG6/Shinrashi/Inseph","rootStates":[1300,1301,1302]},"composition":"Original source actor/effect bitmaps; timing, positioning and phase transitions adapted for top-down combat, not exact source-engine playback.","artStage":"composed","remaining":["正式术名与核心机制最终人工核验；基础动作不足20张独立关键帧。"],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":63}},"sourceMetadata":{"path":"/workspace/art/kaguya-youtube/Otsutsuki_Kaguya-v1.0.rar","sha256":"8d482eb5a2ec79f4e2ab7e55a1aeaec9a07a8dcb92b2bb502b39f754da49eb6a","page":"https://www.andersonkenya1.net/files/file/61539-otsutsuki-kaguya-jus-naruto-series/","sffVersion":"2","author":"Baby_Desu; original credits CobraG6/Shinrashi/Inseph"},"visualComplete":true},"guy_death_gate":{"portrait":"assets/skills-v28/guy_death_gate/portrait.webp","actor":{"file":"assets/skills-v28/guy_death_gate/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3},"counts":{"idle":4,"run":3,"cast":4,"hurt":3},"ms":{"idle":150,"run":85,"cast":85,"hurt":85},"anchor":[48,84],"scale":1,"targetHeight":52},"skills":{"primary":{"file":"assets/skills-v28/guy_death_gate/primary.webp","icon":"assets/skills-v28/guy_death_gate/primary-icon.png","name":"死门·拳压连击","cell":[200,131],"columns":8,"frames":36,"fps":21.176470588235293,"frame_times_ms":[47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222,47.22222222222222],"anchor":[28,128],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.32,0.8],"damageOffset":[90,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"source":{"path":"/workspace/art/bvn-community-research/guy8gate.swf","sha256":"ec2eba815c3cc487bd3a1bff9db5efc0d8fe43b5eabee8f17001e86b124d11ca","download":"https://www.mediafire.com/file/dwzpsnh5jgwfhlh/guy8gate.swf/file","listing":"https://characterdownload.blogspot.com/2021/10/new-sasuke-ending-2.html","author":"Exact version author not independently confirmed","extraction":"JPEXS bitmap extraction; XML display-list inspected; no ActionScript executed."},"composition":"Original source actor/effect bitmaps; timing, positioning and phase transitions adapted for top-down combat, not exact source-engine playback.","artStage":"composed","remaining":["正式术名与核心机制最终人工核验；基础动作不足20张独立关键帧。"],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":35},"secondary":{"file":"assets/skills-v28/guy_death_gate/secondary.webp","icon":"assets/skills-v28/guy_death_gate/secondary-icon.png","name":"死门·回旋踢","cell":[144,71],"columns":8,"frames":36,"fps":22.5,"frame_times_ms":[44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444,44.44444444444444],"anchor":[25,69],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.27,0.76],"damageOffset":[80,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"source":{"path":"/workspace/art/bvn-community-research/guy8gate.swf","sha256":"ec2eba815c3cc487bd3a1bff9db5efc0d8fe43b5eabee8f17001e86b124d11ca","download":"https://www.mediafire.com/file/dwzpsnh5jgwfhlh/guy8gate.swf/file","listing":"https://characterdownload.blogspot.com/2021/10/new-sasuke-ending-2.html","author":"Exact version author not independently confirmed","extraction":"JPEXS bitmap extraction; XML display-list inspected; no ActionScript executed."},"composition":"Original source actor/effect bitmaps; timing, positioning and phase transitions adapted for top-down combat, not exact source-engine playback.","artStage":"composed","remaining":["正式术名与核心机制最终人工核验；基础动作不足20张独立关键帧。"],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":35},"ultimate":{"file":"assets/skills-v28/guy_death_gate/ultimate.webp","icon":"assets/skills-v28/guy_death_gate/ultimate-icon.png","name":"死门·血色冲击","cell":[270,251],"columns":8,"frames":56,"fps":20.0,"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"anchor":[45,220],"renderMode":"actor_composite","renderScale":1,"hideBaseActor":true,"allowMovement":false,"damageWindow":[0.46,0.86],"damageOffset":[125,0],"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery","recovery","recovery"],"source":{"path":"/workspace/art/bvn-community-research/guy8gate.swf","sha256":"ec2eba815c3cc487bd3a1bff9db5efc0d8fe43b5eabee8f17001e86b124d11ca","download":"https://www.mediafire.com/file/dwzpsnh5jgwfhlh/guy8gate.swf/file","listing":"https://characterdownload.blogspot.com/2021/10/new-sasuke-ending-2.html","author":"Exact version author not independently confirmed","extraction":"JPEXS bitmap extraction; XML display-list inspected; no ActionScript executed."},"composition":"Original source actor/effect bitmaps; timing, positioning and phase transitions adapted for top-down combat, not exact source-engine playback.","artStage":"composed","remaining":["正式术名与核心机制最终人工核验；基础动作不足20张独立关键帧。"],"visualStage":"composed","emptyFrames":[],"lastOpaqueFrame":55}},"sourceMetadata":{"path":"/workspace/art/bvn-community-research/guy8gate.swf","sha256":"ec2eba815c3cc487bd3a1bff9db5efc0d8fe43b5eabee8f17001e86b124d11ca","download":"https://www.mediafire.com/file/dwzpsnh5jgwfhlh/guy8gate.swf/file","listing":"https://characterdownload.blogspot.com/2021/10/new-sasuke-ending-2.html","author":"Exact version author not independently confirmed","extraction":"JPEXS bitmap extraction; XML display-list inspected; no ActionScript executed."},"visualComplete":true},"shikamaru":{"portrait":"assets/skills-v47/shikamaru/portrait.webp","actor":{"file":"assets/skills-v47/shikamaru/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3,"attack":4,"death":5},"counts":{"idle":3,"run":6,"cast":4,"hurt":2,"attack":8,"death":5},"ms":{"idle":160,"run":85,"cast":80,"hurt":80,"attack":70,"death":90},"anchor":[48,84],"scale":1,"targetHeight":52,"sourceFrames":{"idle":[{"action":0,"sprite":[0,0]},{"action":0,"sprite":[0,1]},{"action":0,"sprite":[0,2]}],"run":[{"action":100,"sprite":[20,0]},{"action":100,"sprite":[20,1]},{"action":100,"sprite":[20,2]},{"action":100,"sprite":[20,3]},{"action":100,"sprite":[20,4]},{"action":100,"sprite":[20,5]}],"cast":[{"action":1000,"sprite":[200,0]},{"action":1000,"sprite":[200,22]},{"action":1000,"sprite":[200,23]},{"action":3000,"sprite":[200,1]}],"hurt":[{"action":5000,"sprite":[5000,0]},{"action":5001,"sprite":[5000,1]}],"attack":[{"action":200,"sprite":[200,2]},{"action":200,"sprite":[200,4]},{"action":210,"sprite":[200,42]},{"action":210,"sprite":[200,44]},{"action":210,"sprite":[200,47]},{"action":210,"sprite":[200,49]},{"action":220,"sprite":[200,17]},{"action":220,"sprite":[200,19]}],"death":[{"action":5050,"sprite":[5000,4]},{"action":5070,"sprite":[5000,0]},{"action":5070,"sprite":[5000,2]},{"action":5070,"sprite":[5000,3]},{"action":5080,"sprite":[5000,9]}]},"uniqueRenderedPoses":27},"skills":{"primary":{"file":"assets/skills-v47/shikamaru/primary.webp","cell":[384,288],"columns":5,"frames":28,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"name":"影子模仿术","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,27]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61105-shikamaru-jus/","author":"Salah","sffSHA256":"7ebfb36d6155e78036d10e0ae4d3e2e18243a69a7bc6a228c1ce2b9f1567359f","casterActions":[1000],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/shikamaru/primary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/shikamaru/primary-caster.webp","effect":"assets/skills-v47/shikamaru/primary.webp"},"icon":"assets/skills-v47/shikamaru/primary-icon.webp"},"secondary":{"file":"assets/skills-v47/shikamaru/secondary.webp","cell":[384,288],"columns":5,"frames":34,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"name":"影缝之术","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,6],"active":[7,29],"recovery":[30,33]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61105-shikamaru-jus/","author":"Salah","sffSHA256":"7ebfb36d6155e78036d10e0ae4d3e2e18243a69a7bc6a228c1ce2b9f1567359f","casterActions":[3000,3001],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/shikamaru/secondary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/shikamaru/secondary-caster.webp","effect":"assets/skills-v47/shikamaru/secondary.webp"},"icon":"assets/skills-v47/shikamaru/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v47/shikamaru/ultimate.webp","cell":[384,288],"columns":5,"frames":42,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"name":"影首缚之术","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,7],"active":[8,36],"recovery":[37,41]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61105-shikamaru-jus/","author":"Salah","sffSHA256":"7ebfb36d6155e78036d10e0ae4d3e2e18243a69a7bc6a228c1ce2b9f1567359f","casterActions":[3200,1000],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/shikamaru/ultimate-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/shikamaru/ultimate-caster.webp","effect":"assets/skills-v47/shikamaru/ultimate.webp"},"icon":"assets/skills-v47/shikamaru/ultimate-icon.webp"}},"visualComplete":true,"sourceMetadata":{"page":"https://www.andersonkenya1.net/files/file/61105-shikamaru-jus/","author":"Salah","sff":"/workspace/art/v28-new-packs/packages/61105-shikamaru-jus/extracted/Shikamaru/Shikamaru.sff.gz","sha256":"7ebfb36d6155e78036d10e0ae4d3e2e18243a69a7bc6a228c1ce2b9f1567359f","staticOnly":true}},"ino":{"portrait":"assets/skills-v47/ino/portrait.webp","actor":{"file":"assets/skills-v47/ino/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3,"attack":4,"death":5},"counts":{"idle":4,"run":3,"cast":8,"hurt":4,"attack":8,"death":8},"ms":{"idle":160,"run":85,"cast":80,"hurt":80,"attack":70,"death":90},"anchor":[48,84],"scale":1,"targetHeight":52,"sourceFrames":{"idle":[{"action":0,"sprite":[0,0]},{"action":0,"sprite":[0,1]},{"action":0,"sprite":[0,2]},{"action":0,"sprite":[0,3]}],"run":[{"action":100,"sprite":[6,1]},{"action":100,"sprite":[41,1]},{"action":100,"sprite":[41,3]}],"cast":[{"action":3000,"sprite":[3000,0]},{"action":3000,"sprite":[3000,3]},{"action":3000,"sprite":[3000,6]},{"action":3000,"sprite":[3000,9]},{"action":1500,"sprite":[200,6]},{"action":1501,"sprite":[1000,5]},{"action":1501,"sprite":[500,1]},{"action":1300,"sprite":[180,2]}],"hurt":[{"action":5000,"sprite":[5000,0]},{"action":5000,"sprite":[5000,10]},{"action":5001,"sprite":[5000,11]},{"action":5002,"sprite":[5000,20]}],"attack":[{"action":200,"sprite":[200,0]},{"action":200,"sprite":[200,2]},{"action":200,"sprite":[200,3]},{"action":210,"sprite":[200,5]},{"action":210,"sprite":[200,7]},{"action":220,"sprite":[200,9]},{"action":220,"sprite":[200,10]},{"action":220,"sprite":[200,12]}],"death":[{"action":5050,"sprite":[5030,30]},{"action":5050,"sprite":[5030,31]},{"action":5070,"sprite":[5010,10]},{"action":5070,"sprite":[5030,0]},{"action":5070,"sprite":[5030,10]},{"action":5080,"sprite":[5040,20]},{"action":5080,"sprite":[5040,0]},{"action":5080,"sprite":[5040,10]}]},"uniqueRenderedPoses":32},"skills":{"primary":{"file":"assets/skills-v47/ino/primary.webp","cell":[384,288],"columns":5,"frames":28,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"name":"心转身之术","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,27]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/54752-ino/","author":"CobraG6","sffSHA256":"88e617cd6552a6d3662cfa7c435cf2ff1ce6f3a9a4e5ca35e44c64bd73cc117a","casterActions":[3000],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/ino/primary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/ino/primary-caster.webp","effect":"assets/skills-v47/ino/primary.webp"},"icon":"assets/skills-v47/ino/primary-icon.webp"},"secondary":{"file":"assets/skills-v47/ino/secondary.webp","cell":[384,288],"columns":5,"frames":34,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"name":"心乱身之术","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,6],"active":[7,29],"recovery":[30,33]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/54752-ino/","author":"CobraG6","sffSHA256":"88e617cd6552a6d3662cfa7c435cf2ff1ce6f3a9a4e5ca35e44c64bd73cc117a","casterActions":[1500,1501],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/ino/secondary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/ino/secondary-caster.webp","effect":"assets/skills-v47/ino/secondary.webp"},"icon":"assets/skills-v47/ino/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v47/ino/ultimate.webp","cell":[384,288],"columns":5,"frames":42,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"name":"群体心转身※","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,7],"active":[8,36],"recovery":[37,41]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/54752-ino/","author":"CobraG6","sffSHA256":"88e617cd6552a6d3662cfa7c435cf2ff1ce6f3a9a4e5ca35e44c64bd73cc117a","casterActions":[1300],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/ino/ultimate-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/ino/ultimate-caster.webp","effect":"assets/skills-v47/ino/ultimate.webp"},"icon":"assets/skills-v47/ino/ultimate-icon.webp"}},"visualComplete":true,"sourceMetadata":{"page":"https://www.andersonkenya1.net/files/file/54752-ino/","author":"CobraG6","sff":"/workspace/art/v28-new-packs/packages/54752-ino/extracted/G6_Ino/Ino.sff.gz","sha256":"88e617cd6552a6d3662cfa7c435cf2ff1ce6f3a9a4e5ca35e44c64bd73cc117a","staticOnly":true}},"choji":{"portrait":"assets/skills-v47/choji/portrait.webp","actor":{"file":"assets/skills-v47/choji/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3,"attack":4,"death":5},"counts":{"idle":3,"run":3,"cast":8,"hurt":4,"attack":8,"death":8},"ms":{"idle":160,"run":85,"cast":80,"hurt":80,"attack":70,"death":90},"anchor":[48,84],"scale":1,"targetHeight":52,"sourceFrames":{"idle":[{"action":0,"sprite":[0,0]},{"action":0,"sprite":[0,1]},{"action":0,"sprite":[0,2]}],"run":[{"action":100,"sprite":[6,1]},{"action":100,"sprite":[41,1]},{"action":100,"sprite":[41,5]}],"cast":[{"action":1000,"sprite":[400,6]},{"action":1000,"sprite":[400,8]},{"action":3200,"sprite":[41,1]},{"action":3100,"sprite":[3100,0]},{"action":3100,"sprite":[3100,1]},{"action":3100,"sprite":[3100,3]},{"action":3100,"sprite":[5,0]},{"action":3101,"sprite":[3100,5]}],"hurt":[{"action":5000,"sprite":[5000,0]},{"action":5000,"sprite":[5000,10]},{"action":5001,"sprite":[5000,11]},{"action":5002,"sprite":[5000,20]}],"attack":[{"action":200,"sprite":[3200,9]},{"action":200,"sprite":[3200,11]},{"action":200,"sprite":[5,0]},{"action":210,"sprite":[3200,13]},{"action":210,"sprite":[3200,14]},{"action":210,"sprite":[3200,16]},{"action":210,"sprite":[3200,17]},{"action":210,"sprite":[3200,19]}],"death":[{"action":5050,"sprite":[5030,30]},{"action":5050,"sprite":[5030,31]},{"action":5070,"sprite":[5010,10]},{"action":5070,"sprite":[5030,0]},{"action":5070,"sprite":[5030,10]},{"action":5080,"sprite":[5040,20]},{"action":5080,"sprite":[5040,0]},{"action":5080,"sprite":[5040,10]}]},"uniqueRenderedPoses":25},"skills":{"primary":{"file":"assets/skills-v47/choji/primary.webp","cell":[384,288],"columns":5,"frames":28,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"name":"肉弹战车","renderMode":"actor_composite","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,27]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/54650-choji/","author":"Mikel8888","sffSHA256":"2f039ece122c85c3eb391b74760dfa457f961e1b627429e074e106c191556397","casterActions":[1000],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"damageOffset":[0,0],"sourceLayers":{"caster":"assets/skills-v47/choji/primary-caster.webp","effect":"assets/skills-v47/choji/primary.webp"},"icon":"assets/skills-v47/choji/primary-icon.webp"},"secondary":{"file":"assets/skills-v47/choji/secondary.webp","cell":[384,288],"columns":5,"frames":34,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"name":"超倍化之术","renderMode":"actor_composite","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,6],"active":[7,29],"recovery":[30,33]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/54650-choji/","author":"Mikel8888","sffSHA256":"2f039ece122c85c3eb391b74760dfa457f961e1b627429e074e106c191556397","casterActions":[3200,3201],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"damageOffset":[0,0],"sourceLayers":{"caster":"assets/skills-v47/choji/secondary-caster.webp","effect":"assets/skills-v47/choji/secondary.webp"},"icon":"assets/skills-v47/choji/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v47/choji/ultimate.webp","cell":[384,288],"columns":5,"frames":42,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"name":"超张手","renderMode":"actor_composite","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,7],"active":[8,36],"recovery":[37,41]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/54650-choji/","author":"Mikel8888","sffSHA256":"2f039ece122c85c3eb391b74760dfa457f961e1b627429e074e106c191556397","casterActions":[3100,3101],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"damageOffset":[0,0],"sourceLayers":{"caster":"assets/skills-v47/choji/ultimate-caster.webp","effect":"assets/skills-v47/choji/ultimate.webp"},"icon":"assets/skills-v47/choji/ultimate-icon.webp"}},"visualComplete":true,"sourceMetadata":{"page":"https://www.andersonkenya1.net/files/file/54650-choji/","author":"Mikel8888","sff":"/workspace/art/v28-new-packs/packages/54650-choji/extracted/Choji/Choji.sff.gz","sha256":"2f039ece122c85c3eb391b74760dfa457f961e1b627429e074e106c191556397","staticOnly":true}},"sai":{"portrait":"assets/skills-v47/sai/portrait.webp","actor":{"file":"assets/skills-v47/sai/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3,"attack":4,"death":5},"counts":{"idle":8,"run":3,"cast":8,"hurt":4,"attack":8,"death":8},"ms":{"idle":160,"run":85,"cast":80,"hurt":80,"attack":70,"death":90},"anchor":[48,84],"scale":1,"targetHeight":52,"sourceFrames":{"idle":[{"action":0,"sprite":[0,0]},{"action":0,"sprite":[0,1]},{"action":0,"sprite":[0,2]},{"action":0,"sprite":[0,3]},{"action":0,"sprite":[0,4]},{"action":0,"sprite":[0,5]},{"action":0,"sprite":[0,6]},{"action":0,"sprite":[0,7]}],"run":[{"action":100,"sprite":[6,0]},{"action":100,"sprite":[41,1]},{"action":100,"sprite":[41,5]}],"cast":[{"action":1000,"sprite":[1000,0]},{"action":1000,"sprite":[1000,3]},{"action":1000,"sprite":[1000,7]},{"action":3100,"sprite":[500,2]},{"action":3100,"sprite":[3100,2]},{"action":3200,"sprite":[3000,0]},{"action":3200,"sprite":[3000,4]},{"action":3200,"sprite":[3000,7]}],"hurt":[{"action":5000,"sprite":[5000,0]},{"action":5000,"sprite":[5000,10]},{"action":5001,"sprite":[5000,11]},{"action":5002,"sprite":[5000,20]}],"attack":[{"action":200,"sprite":[200,3]},{"action":200,"sprite":[200,6]},{"action":210,"sprite":[200,2]},{"action":220,"sprite":[200,15]},{"action":220,"sprite":[200,19]},{"action":230,"sprite":[1000,2]},{"action":230,"sprite":[1000,5]},{"action":230,"sprite":[1000,8]}],"death":[{"action":5050,"sprite":[5030,30]},{"action":5050,"sprite":[5030,31]},{"action":5070,"sprite":[5010,10]},{"action":5070,"sprite":[5030,0]},{"action":5070,"sprite":[5030,10]},{"action":5080,"sprite":[5040,20]},{"action":5080,"sprite":[5040,0]},{"action":5080,"sprite":[5040,10]}]},"uniqueRenderedPoses":36},"skills":{"primary":{"file":"assets/skills-v47/sai/primary.webp","cell":[384,288],"columns":5,"frames":28,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"name":"超兽伪画·狮子","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,27]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61438-sai-yamakana-jus-naruto-series/","author":"CobraG6","sffSHA256":"1a6074133a1bcaf521f9bf83e685b2e78e9a6aafd875f677207403031fca8958","casterActions":[1000],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/sai/primary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/sai/primary-caster.webp","effect":"assets/skills-v47/sai/primary.webp"},"icon":"assets/skills-v47/sai/primary-icon.webp"},"secondary":{"file":"assets/skills-v47/sai/secondary.webp","cell":[384,288],"columns":5,"frames":34,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"name":"超兽伪画·鸟","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,6],"active":[7,29],"recovery":[30,33]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61438-sai-yamakana-jus-naruto-series/","author":"CobraG6","sffSHA256":"1a6074133a1bcaf521f9bf83e685b2e78e9a6aafd875f677207403031fca8958","casterActions":[3100],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/sai/secondary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/sai/secondary-caster.webp","effect":"assets/skills-v47/sai/secondary.webp"},"icon":"assets/skills-v47/sai/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v47/sai/ultimate.webp","cell":[384,288],"columns":5,"frames":42,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"name":"墨兽群袭※","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,7],"active":[8,36],"recovery":[37,41]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61438-sai-yamakana-jus-naruto-series/","author":"CobraG6","sffSHA256":"1a6074133a1bcaf521f9bf83e685b2e78e9a6aafd875f677207403031fca8958","casterActions":[3200],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/sai/ultimate-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/sai/ultimate-caster.webp","effect":"assets/skills-v47/sai/ultimate.webp"},"icon":"assets/skills-v47/sai/ultimate-icon.webp"}},"visualComplete":true,"sourceMetadata":{"page":"https://www.andersonkenya1.net/files/file/61438-sai-yamakana-jus-naruto-series/","author":"CobraG6","sff":"/workspace/art/v28-new-packs/packages/61438-sai-yamakana-jus-naruto-series/extracted/G6_Sai/Sai.sff.gz","sha256":"1a6074133a1bcaf521f9bf83e685b2e78e9a6aafd875f677207403031fca8958","staticOnly":true}},"hidan":{"portrait":"assets/skills-v47/hidan/portrait.webp","actor":{"file":"assets/skills-v47/hidan/actor.webp","cell":[96,96],"columns":8,"rows":{"idle":0,"run":1,"cast":2,"hurt":3,"attack":4,"death":5},"counts":{"idle":8,"run":2,"cast":8,"hurt":4,"attack":8,"death":7},"ms":{"idle":160,"run":85,"cast":80,"hurt":80,"attack":70,"death":90},"anchor":[48,84],"scale":1,"targetHeight":52,"sourceFrames":{"idle":[{"action":0,"sprite":[0,4]},{"action":0,"sprite":[0,5]},{"action":0,"sprite":[0,7]},{"action":0,"sprite":[0,8]},{"action":0,"sprite":[0,9]},{"action":0,"sprite":[0,10]},{"action":0,"sprite":[0,12]},{"action":0,"sprite":[0,13]}],"run":[{"action":100,"sprite":[41,1]},{"action":100,"sprite":[41,5]}],"cast":[{"action":200,"sprite":[200,15]},{"action":200,"sprite":[200,18]},{"action":210,"sprite":[1400,14]},{"action":3200,"sprite":[1100,8]},{"action":18202,"sprite":[3205,3]},{"action":18202,"sprite":[3205,6]},{"action":18202,"sprite":[3205,10]},{"action":17300,"sprite":[15020,4]}],"hurt":[{"action":5000,"sprite":[5000,0]},{"action":5000,"sprite":[5000,10]},{"action":5001,"sprite":[5000,11]},{"action":5002,"sprite":[5000,20]}],"attack":[{"action":200,"sprite":[200,15]},{"action":200,"sprite":[200,16]},{"action":200,"sprite":[200,17]},{"action":200,"sprite":[200,18]},{"action":210,"sprite":[200,5]},{"action":210,"sprite":[1400,13]},{"action":210,"sprite":[1400,14]},{"action":210,"sprite":[1400,15]}],"death":[{"action":5050,"sprite":[5030,30]},{"action":5050,"sprite":[5030,31]},{"action":5070,"sprite":[5010,10]},{"action":5070,"sprite":[5030,0]},{"action":5070,"sprite":[5030,10]},{"action":5080,"sprite":[5040,20]},{"action":5080,"sprite":[5040,10]}]},"uniqueRenderedPoses":29},"skills":{"primary":{"file":"assets/skills-v47/hidan/primary.webp","cell":[384,288],"columns":5,"frames":28,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery"],"name":"三刃镰刀攻击※","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,5],"active":[6,24],"recovery":[25,27]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61469-hidan-jus-naruto-series/","author":"Frak20","sffSHA256":"bfff880fdfae42dee320bfca64f26800a545fef7eb2fd57276dab61bdc47919d","casterActions":[200,210,220],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/hidan/primary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/hidan/primary-caster.webp","effect":"assets/skills-v47/hidan/primary.webp"},"icon":"assets/skills-v47/hidan/primary-icon.webp"},"secondary":{"file":"assets/skills-v47/hidan/secondary.webp","cell":[384,288],"columns":5,"frames":34,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery"],"name":"取血诅咒※","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,6],"active":[7,29],"recovery":[30,33]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61469-hidan-jus-naruto-series/","author":"Frak20","sffSHA256":"bfff880fdfae42dee320bfca64f26800a545fef7eb2fd57276dab61bdc47919d","casterActions":[3200],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/hidan/secondary-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/hidan/secondary-caster.webp","effect":"assets/skills-v47/hidan/secondary.webp"},"icon":"assets/skills-v47/hidan/secondary-icon.webp"},"ultimate":{"file":"assets/skills-v47/hidan/ultimate.webp","cell":[384,288],"columns":5,"frames":42,"fps":20.0,"anchor":[160,168],"frame_times_ms":[50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],"renderScale":1,"frameRoles":["startup","startup","startup","startup","startup","startup","startup","startup","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","active","recovery","recovery","recovery","recovery","recovery"],"name":"咒术·死司凭血","renderMode":"split","allowMovement":true,"damageWindow":[0.18,0.86],"lifecycle":{"startup":[0,7],"active":[8,36],"recovery":[37,41]},"animationReady":true,"completeAnimation":true,"source":{"page":"https://www.andersonkenya1.net/files/file/61469-hidan-jus-naruto-series/","author":"Frak20","sffSHA256":"bfff880fdfae42dee320bfca64f26800a545fef7eb2fd57276dab61bdc47919d","casterActions":[18201,18202,17300],"adaptation":"Static source-frame choreography; not original MUGEN engine timing."},"caster":{"file":"assets/skills-v47/hidan/ultimate-caster.webp","cell":[320,160],"columns":6,"frames":14,"fps":16.47058823529412,"anchor":[128,136],"frame_times_ms":[60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714,60.714],"renderScale":1,"duration":0.85},"sourceLayers":{"caster":"assets/skills-v47/hidan/ultimate-caster.webp","effect":"assets/skills-v47/hidan/ultimate.webp"},"icon":"assets/skills-v47/hidan/ultimate-icon.webp"}},"visualComplete":true,"sourceMetadata":{"page":"https://www.andersonkenya1.net/files/file/61469-hidan-jus-naruto-series/","author":"Frak20","sff":"/workspace/art/v28-new-packs/packages/61469-hidan-jus-naruto-series/extracted/Hidan/Hidan.sff.gz","sha256":"bfff880fdfae42dee320bfca64f26800a545fef7eb2fd57276dab61bdc47919d","staticOnly":true}}};

;
/* skill-kits-v23.js */
/* Kits retain separate animation and name review gates. */
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
  }
};

;
/* characters.js */
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

;
/* skill-catalog.js */
/* Design records; unimplemented forms are labelled explicitly in the UI. */
window.NINJA_SKILL_CATALOG=[{"character_id":"naruto","form_id":"young","form":"少年篇","skills":[{"slot":"被动","name":"不服输的忍道","effect_lv1":"主控/支援自身低于40%生命时，伤害+12%；只影响本人及其分身，不提供复活。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"螺旋丸","effect_lv1":"近身放置1秒范围丸；总伤害2A，击退杂兵。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"技能二","name":"影分身之术","effect_lv1":"召唤1个独立分身持续6秒；普攻为本体35%，不复制奥义，不触发全队光环。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"奥义","name":"鸣人连弹","effect_lv1":"追击最近敌人并完成四段连击，总伤害5A；最后一段击飞。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"naruto","form_id":"shippuden","form":"疾风传","skills":[{"slot":"被动","name":"分身协同","effect_lv1":"本人或分身命中后给目标施加本人标记；本人技能命中标记目标，直伤+10%，不可自循环触发。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"螺旋丸","effect_lv1":"近身持续1秒，总伤害2A，击退。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"技能二","name":"多重影分身","effect_lv1":"召唤2个分身持续6秒；各造成本体25%普攻伤害，总人数含升级最多3个；不继承被动光环或奥义。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"奥义","name":"大玉螺旋丸","effect_lv1":"分身辅助短距接敌后释放一次大范围冲击，总伤害5.5A，范围90；与普通丸使用不同施放流程，不仅放大贴图。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"}]},{"character_id":"naruto","form_id":"sage","form":"仙人模式","skills":[{"slot":"被动","name":"仙人感知","effect_lv1":"自身受到伤害降低8%；攻击处于减速/束缚/封穴的目标时，直伤+10%。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"蛙组手","effect_lv1":"近身无形冲击，2A，破甲4秒。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"仙法·螺旋手里剑","effect_lv1":"投掷命中后形成1秒风刃区域，总伤害2.8A；对灼烧目标可触发风火联动。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"奥义","name":"仙法·超大玉螺旋丸","effect_lv1":"近身引爆范围110，总伤害6A并击退；仅该形态主控可释放。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"}]},{"character_id":"naruto","form_id":"kurama","form":"九喇嘛连结","skills":[{"slot":"被动","name":"九喇嘛查克拉","effect_lv1":"本人移速+8%；每6秒为附近队伍提供3秒、目标最大生命5%的盾，同名光环取最高。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"查克拉手臂横扫〔动作名〕","effect_lv1":"扇形扫击，2A，将杂兵向侧面推开。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"},{"slot":"技能二","name":"查克拉投射〔动作名〕","effect_lv1":"发射3枚查克拉投射物，每枚0.8A，同目标最多中2枚。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"},{"slot":"奥义","name":"多臂大玉螺旋丸〔暂定〕","effect_lv1":"多臂分别锁定最多3敌，伤害预算总6A；单一Boss最多承受4.5A，避免多目标技能单体重复吃满。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"}]},{"character_id":"naruto","form_id":"one_tail","form":"第一尾","skills":[{"slot":"被动","name":"尾兽外衣","effect_lv1":"本人减伤8%；近身命中普通灼烧目标时获得2秒、最大生命3%护盾，每4秒最多一次。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"查克拉爪击〔动作名〕","effect_lv1":"三连爪击合计2A，施加1层流血。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"查克拉冲击〔动作名〕","effect_lv1":"扇形冲击1.8A，击退并减速。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"朱之螺旋丸〔术名待核〕","effect_lv1":"短距离接敌单体重击4.5A，周围60范围附带1A冲击；不是普通丸换色。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"naruto","form_id":"four_tail","form":"第四尾","skills":[{"slot":"被动","name":"尾兽再生","effect_lv1":"本人每秒恢复最大生命0.5%；不影响死亡判定与5秒支援复活。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"查克拉手臂抓击〔动作名〕","effect_lv1":"伸臂抓取杂兵并拉近，2A；Boss不位移。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"咆哮冲击〔动作名〕","effect_lv1":"环形咆哮1.7A，使杂兵眩晕。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"尾兽玉","effect_lv1":"沿瞄准方向释放爆炸弹，命中范围110，总6A。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"kakashi","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"战术洞察","effect_lv1":"全队对处于破甲/封穴目标的直伤+6%；同名被动不叠加，仅存活且250范围内生效。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"雷切","effect_lv1":"近身突刺2.2A，施加感电。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"技能二","name":"雷遁影分身","effect_lv1":"召唤1个雷分身持续4秒；到期在其位置爆开1.2A，施加感电；不复制本体其他技能。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"奥义","name":"雷切·追击〔玩法名〕","effect_lv1":"本体与雷分身夹击同一目标，总5A；附近潮湿目标可导电，不另召奥义分身。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"kakashi","form_id":"branch","form":"万花筒写轮眼","skills":[{"slot":"被动","name":"空间预判","effect_lv1":"本人每12秒可抵挡一次攻击并短暂虚化0.3秒；不自动触发奥义，也不改变死亡规则。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"神威","effect_lv1":"目标位置生成0.8秒扭曲，总2.2A并聚拢杂兵；Boss只加架势。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"雷遁影分身","effect_lv1":"雷分身到期造成1.2A，施加感电；不复制神威。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"奥义","name":"神威·空间绞杀〔玩法名〕","effect_lv1":"持续1.5秒空间区，总5.5A，杂兵束缚；Boss不放逐、不秒杀。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"sasuke","form_id":"base","form":"疾风传","skills":[{"slot":"被动","name":"写轮眼洞察","effect_lv1":"每6秒标记本人最近敌人4秒；全队对该标记目标的首次直伤额外+8%，每成员每标记仅一次。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"千鸟","effect_lv1":"近身短突刺2A，施加感电；不从远处凭空击中。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"技能二","name":"火遁·豪火球之术","effect_lv1":"直线火球命中1.5A，附1层灼烧。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"奥义","name":"千鸟流","effect_lv1":"自身向周围释放0.8秒雷流，总5A并感电；周围潮湿敌人可导电，不从远处召唤落雷。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"}]},{"character_id":"sasuke","form_id":"curse","form":"咒印","skills":[{"slot":"被动","name":"咒印解放","effect_lv1":"生命低于50%时本人伤害+12%、移速+5%；不持续扣血，支援可正常使用。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"咒印千鸟〔形态招式〕","effect_lv1":"近身雷突刺2.3A，感电。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"翼击〔动作名〕","effect_lv1":"羽翼横扫1.8A，将杂兵击飞。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"恸哭千鸟〔术名待核〕","effect_lv1":"短跃落点爆发，中心4A、外围1A，不叠加中心与外围伤害；破甲。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"sasuke","form_id":"mangekyo","form":"万花筒","skills":[{"slot":"被动","name":"黑炎掌控","effect_lv1":"本人施加的黑炎持续时间+1秒；同名来源取最高，不扩大全队DOT层数。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"天照","effect_lv1":"目标脚下产生3秒黑炎区，直伤1A并施加1层黑炎。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"炎遁·加具土命","effect_lv1":"将前方黑炎塑为焰刃，2A并短时束缚杂兵；没有黑炎也能施放，不消耗队友黑炎。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"须佐能乎·射击〔演出待核〕","effect_lv1":"短时须佐演出，三次箭击合计5.5A；一次施法最多一次架势贡献。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"sasuke","form_id":"susanoo","form":"须佐能乎","skills":[{"slot":"被动","name":"须佐防护","effect_lv1":"本人每12秒获得最大生命10%护盾，持续5秒；不能让队友常驻无敌。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"炎遁·焰阵〔玩法名〕","effect_lv1":"指定区域黑炎持续3秒，总直伤1.4A，附黑炎；场地可通行。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"须佐能乎·箭","effect_lv1":"贯穿箭2.5A，最多穿透3敌，后续目标伤害依次为70%、50%。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"须佐能乎·连射〔玩法名〕","effect_lv1":"短时展开须佐、射出5箭，总伤害上限6A；同Boss不逐箭完整触发反应。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"sakura","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"查克拉精控","effect_lv1":"本人治疗量+10%；全队受到本人治疗后3秒内首次直伤+6%，不多次叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"樱花冲","effect_lv1":"近身砸地产生半径70冲击，1.8A，破甲4秒。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"技能二","name":"医疗忍术","effect_lv1":"治疗生命比例最低的存活队员，恢复目标最大生命12%，净化一个普通减益。","asset_description":"已有对应技能或视觉模块可复用；不代表本稿新增效果已实现"},{"slot":"奥义","name":"怪力连击〔玩法名〕","effect_lv1":"三段重拳、一次砸地，总4.5A；末段眩晕，不为杂兵长时间抓取Boss。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"sakura","form_id":"branch","form":"百豪","skills":[{"slot":"被动","name":"百豪再生","effect_lv1":"本人每秒恢复最大生命0.6%；低于40%生命时该值翻倍。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"百豪·樱花冲〔玩法名〕","effect_lv1":"近身重击2A，破甲；每次命中最多为本人恢复最大生命3%。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"通灵·蛞蝓治疗","effect_lv1":"放置可通行治疗区持续5秒，每秒治疗区内队员最大生命2%；不产额外被动光环。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"百豪·怪力爆发〔玩法名〕","effect_lv1":"冲击总4A并击退；随后全队获得最大生命12%护盾5秒。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"itachi","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"写轮眼压迫","effect_lv1":"本人对幻惑目标的直伤+12%；对Boss易伤目标同样生效，不能额外叠20%易伤上限。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"乌鸦分身","effect_lv1":"分身吸引杂兵2秒后散为乌鸦，1.2A并施加幻惑；Boss不强制改目标。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"天照","effect_lv1":"黑炎落点1A，施加黑炎。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"月读","effect_lv1":"局部幻术区总4A，杂兵幻惑，Boss获得易伤与架势。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"gaara","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"砂之盾","effect_lv1":"本人每10秒获得最大生命10%护盾，持续4秒。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"砂缚柩","effect_lv1":"砂手束缚杂兵并造成1.5A；Boss仅减速与架势。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"},{"slot":"技能二","name":"砂时雨","effect_lv1":"砂弹覆盖区域，总2A，施加减速。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"砂瀑送葬","effect_lv1":"指定区域压砂总5A，束缚目标额外架势+4；不秒杀Boss。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"deidara","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"艺术余波","effect_lv1":"本人爆炸命中至少3敌时，下次技能一伤害+15%；每6秒最多触发一次。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"起爆黏土·小鸟","effect_lv1":"3只追踪鸟，总2A，爆炸击退；同目标每次施法一次反应。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"},{"slot":"技能二","name":"起爆黏土·蜘蛛","effect_lv1":"布置最多3只蜘蛛，接敌后爆炸，总2A；可通行，不作为障碍。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"C3","effect_lv1":"投下大型黏土爆弹，延迟0.8秒后范围130、6A爆炸；友方不受伤。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"jiraiya","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"豪杰守护","effect_lv1":"附近250范围队友受到持续伤害降低10%；本人存活时生效，同名取最高。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"火遁·炎弹","effect_lv1":"炎弹命中1.6A并灼烧。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"忍法·针地藏","effect_lv1":"自身获得最大生命12%护盾3秒，期间首次近身受击反刺1A；反刺不可反应连锁。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"通灵·蛤蟆油弹","effect_lv1":"通灵油弹覆盖区域，先施加油污，再以火伤引燃，总4.5A；自身组合每目标仅一次反应。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"jugo","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"咒印自愈","effect_lv1":"本人每次被攻击后3秒内恢复最大生命3%，每5秒最多一次；不叠多份。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"活塞拳","effect_lv1":"重拳2A，破甲。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"多连不自炮","effect_lv1":"扇形查克拉炮，总2.4A，按单次施法计算反应。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"地面冲击〔动作名〕","effect_lv1":"向地面轰击，半径110，总5A，击飞杂兵。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"karin","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"神乐心眼","effect_lv1":"队伍经验拾取半径+12%，250范围队友命中标记目标时直伤+5%；同名不叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"查克拉治疗","effect_lv1":"治疗最低生命比例队员最大生命15%，本人恢复最大生命3%；不以扣血换治疗。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"感知锁定〔机制名〕","effect_lv1":"标记最近精英/Boss4秒，同时施加易伤；无伤害，不给全队永久标记。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"奥义","name":"金刚封锁","effect_lv1":"锁链束缚区域内敌人并造成4A；Boss不被拖离结界。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"killerbee","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"七刀节奏","effect_lv1":"本人每第4次普攻追加0.4A刃伤；追加不重复计数、不触发被动链。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"荒缲鹭伐刀","effect_lv1":"多刀连击合计2A，施加1层流血。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"雷犁热刀","effect_lv1":"近身雷遁突进2A并感电；优先攻击前方近敌。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"墨分身·围猎〔玩法名〕","effect_lv1":"墨分身围住目标，先束缚后集火，总4.5A；不复制奥义或被动。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"kimimaro","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"尸骨脉","effect_lv1":"本人防御+10%；本人流血对处于破甲的敌人持续时间+1秒。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"椿之舞","effect_lv1":"骨刀连续突刺2A，流血。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"柳之舞","effect_lv1":"周身骨刃旋击2A，击退杂兵。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"早蕨之舞","effect_lv1":"指定区域地骨连刺，总5.5A并破甲；骨刺只是可通行伤害区。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"konan","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"式纸之舞","effect_lv1":"本人受到的远程伤害降低10%；纸片攻击不能绕过Boss所有防御。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"纸手里剑","effect_lv1":"扇形纸刃总1.8A，最多穿透2敌。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"纸缚〔玩法名〕","effect_lv1":"纸片围住目标，1.2A并束缚。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"起爆符纸雨〔玩法名〕","effect_lv1":"范围持续2秒的起爆纸雨，总5A，附1层灼烧；非6000亿起爆符永久演出。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"lee","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"努力的天才","effect_lv1":"本人普攻间隔缩短10%，对破甲目标的体术直伤+8%；不能触发元素反应。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"木叶旋风","effect_lv1":"回旋踢2A并击退。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"影舞叶","effect_lv1":"近身上踢1.4A并击飞杂兵；Boss只加架势。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"表莲华","effect_lv1":"连段后砸地总5A，施加破甲；Boss原地承伤、不被抓出预警。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"lee","form_id":"branch","form":"杜门","skills":[{"slot":"被动","name":"杜门解放","effect_lv1":"本人技能冷却缩短8%；每次施法后2秒移速+8%，同类移速不重复叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"高速突击〔动作名〕","effect_lv1":"突进至近敌身前造成1.8A；不越过Boss结界。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"木叶大旋风","effect_lv1":"快速回旋踢2.2A，击退。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"里莲华","effect_lv1":"高速多段打击合计5.5A，末段击飞；一次施法仅一次架势贡献。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"madara","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"战场威压","effect_lv1":"本人攻击至少3个目标的技能直伤+8%；对单体Boss改为架势贡献+10%。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"火遁·豪火灭却","effect_lv1":"扇形火海持续1.5秒，总2.6A并灼烧。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"火遁·龙炎放歌之术","effect_lv1":"3条火龙寻敌，总2.7A，同目标最多中2条。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"须佐能乎斩击","effect_lv1":"大型须佐斩击总6A，破甲并击退；不以完全体立绘推断有完整动画。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"hinata","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"白眼洞察","effect_lv1":"本人每4秒首次近身命中施加封穴；仅本人触发，不让全队普攻常驻封穴。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"八卦空掌","effect_lv1":"短程掌波1.8A，击退。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"柔拳连击〔动作名〕","effect_lv1":"近身三连掌合计1.8A，封穴。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"柔步双狮拳","effect_lv1":"双狮拳持续连击，总5A，破甲。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"}]},{"character_id":"neji","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"白眼守势","effect_lv1":"本人受到近身伤害降低10%；本人对封穴目标的架势贡献+10%。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"八卦空掌","effect_lv1":"掌波1.8A，施加封穴。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"八卦掌回天","effect_lv1":"原地回转0.8秒，总1.6A；获得最大生命10%护盾，推开杂兵。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"八卦六十四掌","effect_lv1":"近身多掌总5A，封穴与破甲；不对每一掌单独加架势。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"obito","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"神威虚化","effect_lv1":"每12秒本人可抵挡一次直接伤害，虚化0.3秒；不抵挡整场Boss技能。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"火遁·豪火球之术","effect_lv1":"火球1.5A并灼烧。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"锁链束缚〔动作名〕","effect_lv1":"锁链扫击1.4A并束缚杂兵；Boss转换架势。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"神威空间攻击〔玩法名〕","effect_lv1":"扭曲区域总4.8A并聚拢；不将Boss或队友传出场地。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"obito","form_id":"branch","form":"忍界大战","skills":[{"slot":"被动","name":"空间掌控","effect_lv1":"本人对减速/束缚目标直伤+10%；不影响所有角色的标记归属。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"神威","effect_lv1":"小范围扭曲2A并束缚。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"火遁·爆风乱舞","effect_lv1":"旋转火流持续1秒，总2.4A，施加灼烧。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"神威·爆风合击〔玩法名〕","effect_lv1":"先聚拢杂兵，再爆风乱舞，总5.5A；同次施法只结算一次反应。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"orochimaru","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"蛇蜕恢复","effect_lv1":"本人首次低于30%生命时，3秒内恢复最大生命15%，每20秒一次；死亡后不触发。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"潜影蛇手","effect_lv1":"蛇手命中1.5A，施加中毒。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"草薙剑攻击","effect_lv1":"延伸剑刺2A并破甲。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"通灵·罗生门","effect_lv1":"罗生门冲击2.5A并为全队提供最大生命18%护盾5秒；在地面投影显示，不产生障碍。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"pain","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"轮回眼威压","effect_lv1":"附近250范围队友对减速/束缚目标伤害+6%；同名不叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"万象天引","effect_lv1":"将杂兵拉向目标点，1A；Boss仅架势，不能拖离结界。","asset_description":"已视觉抽样确认部分动作/特效，完整生命周期和命中仍需整理"},{"slot":"技能二","name":"神罗天征","effect_lv1":"环形冲击2A，击退；不弹飞队友的忍术。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"地爆天星","effect_lv1":"生成2秒引力区，总5A并束缚；Boss不被封进演出或秒杀。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"suigetsu","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"水化之术","effect_lv1":"本人受到刃/体术直接伤害降低10%；受到雷伤提高10%，这是本人明确弱点，不给全队加弱点。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"水铁炮之术","effect_lv1":"水弹1.6A并潮湿。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"水遁·豪水腕之术","effect_lv1":"强化手臂近身重击2A，破甲并潮湿。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"水化·大刀连斩〔玩法名〕","effect_lv1":"水化接近后刀斩总5A，流血；刀斩不自动视为水伤。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"temari","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"风场指挥","effect_lv1":"附近250范围队员移速+5%，本人风伤对减速目标直伤+8%；同名光环不叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"镰鼬之术","effect_lv1":"扇形风刃1.8A并减速。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"技能二","name":"大镰鼬之术","effect_lv1":"宽风刃总2.4A，击退；与技能一不同的宽度/节奏/击退用途。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"},{"slot":"奥义","name":"通灵·斩斩舞","effect_lv1":"通灵横扫区域，总5.5A并破甲。","asset_description":"仅有战斗包/时间轴/符号，未完成拟定术名的逐招映射"}]},{"character_id":"minato","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"飞雷神术式","effect_lv1":"本人技能命中留下个人标记4秒；对本人标记目标技能命中后返还当前技能冷却10%，每技能每6秒一次。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"螺旋丸","effect_lv1":"近身冲击2A并击退；可复用丸模块，但水门施法人物帧仍不足。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"飞雷神之术","effect_lv1":"投术式苦无后移动到近敌侧方，造成1.5A并标记；位移受结界限制。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"飞雷神二段","effect_lv1":"锁定近敌完成位移与螺旋丸重击，4.5A；本人标记存在时附外围0.8A冲击。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"ino","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"感知传递","effect_lv1":"附近250范围全队对易伤目标直伤+6%；同名不叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"心转身之术","effect_lv1":"单体1A并幻惑；杂兵攻击其他敌人，不操控玩家角色。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"心乱身之术","effect_lv1":"小区域精神扰乱1.2A，减速；与心转身不互相刷新无限幻惑。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"心乱演武〔玩法名〕","effect_lv1":"范围内最多5个杂兵幻惑并受到3.5A精神冲击；Boss易伤/架势转换。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"kabuto","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"医疗解剖","effect_lv1":"本人治疗+8%；本人刀类攻击对中毒/流血目标直伤+10%。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"查克拉手术刀","effect_lv1":"近身手术刀1.8A，破甲；不因名字含刀而重复算两种伤害。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"掌仙术","effect_lv1":"最低生命比例队员恢复最大生命14%，净化一个普通减益。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"死魂之术","effect_lv1":"召唤2个临时死魂持续6秒，攻击预算总4.5A；使用独立召唤体，不复活或占用队友墓碑。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"sai","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"墨迹追踪","effect_lv1":"本人召唤物命中留下个人标记；本人对标记目标普攻伤害+10%，不让召唤物触发自身被动光环。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"超兽伪画·狮","effect_lv1":"墨狮扑击后撕咬，共2A，减速。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"超兽伪画·鸟","effect_lv1":"墨鸟掠过敌群，总2A，命中最多4敌。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"超兽伪画·群兽〔玩法名〕","effect_lv1":"群兽冲击2秒，总5A；末段束缚杂兵。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"shikamaru","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"战术推演","effect_lv1":"本人造成束缚后，附近队伍3秒直伤+6%，每8秒一次；同名不叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"影子模仿术","effect_lv1":"扇形影子命中1A并束缚。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"影缝术","effect_lv1":"影刺穿刺2A并破甲；没有场地碰撞。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"影首缚颈术","effect_lv1":"锁定区域进行影绞，总4.8A并束缚；Boss只架势和减速。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"tenten","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"忍具补给","effect_lv1":"全队手里剑普攻伤害+10%，同名不叠加；不提高忍术、分身或傀儡的专属技能伤害。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"忍具散射〔动作名〕","effect_lv1":"扇形多枚忍具，总1.8A；同目标最多承受2枚伤害。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"操具·双升龙","effect_lv1":"双卷轴分两波投射，总2.4A，施加流血。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"操具·天刃乱万","effect_lv1":"忍具雨持续2秒，总5A并破甲；卷轴不改变为可拾取技能道具。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"onoki","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"老练指挥","effect_lv1":"本人每次对Boss贡献架势后，下次普攻附0.3A；每4秒一次，不通过DOT触发。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"土遁·加重岩之术","effect_lv1":"区域1.5A，减速并破甲。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"土遁·轻重岩之术","effect_lv1":"附近队伍移速+10%持续4秒；同类移速增益取最高，不给永久飞行。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"尘遁·原界剥离之术","effect_lv1":"尘遁结界总5.5A，无视目标防御20%；不无条件抹除Boss。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"tsunade","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"百豪之印","effect_lv1":"本人治疗使目标获得最大生命3%护盾3秒；按统一盾上限处理。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"痛天脚","effect_lv1":"近身砸地2A，破甲。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"医疗忍术","effect_lv1":"最低生命比例队员恢复最大生命15%，净化一个普通减益。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"通灵·蛞蝓","effect_lv1":"治疗区持续5秒，每秒恢复区内队员最大生命3%；首次出现时全队获得10%护盾。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"utakata","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"泡沫护身","effect_lv1":"本人每10秒获得最大生命8%护盾3秒，破盾后附近杂兵减速；Boss不受击退。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"漂浮泡沫〔玩法名〕","effect_lv1":"缓速泡泡漂浮，命中1.4A并潮湿；最多3个同时存在。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"泡沫束缚〔玩法名〕","effect_lv1":"泡泡包裹目标1.2秒，1A并束缚、潮湿。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"爆破泡沫〔玩法名〕","effect_lv1":"引爆本人泡泡并生成局部泡沫爆区，伤害预算总5A；没有在场泡泡也可施放。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"tobirama","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"水遁精通","effect_lv1":"本人施加潮湿持续时间+1秒；同名取最高，不能突破反应冷却。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"水遁·水龙弹之术","effect_lv1":"水龙命中2A，潮湿。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"飞雷神之术","effect_lv1":"术式苦无接近后近身斩击1.5A并标记；受结界边界约束。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"水遁·水断波","effect_lv1":"直线高压水流持续1秒，总5A，潮湿并破甲。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"sasori","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"傀儡毒师","effect_lv1":"本人中毒持续时间+1秒；流血/中毒层数仍各最多3，不突破统一DOT规则。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"绯流琥·尾刺","effect_lv1":"尾刺1.8A，中毒。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"技能二","name":"绯流琥·针八波","effect_lv1":"扇形毒针总2A，同目标最多中3针，每次施法只加1层毒。","asset_description":"仅援护包，不能证明完整四技能战斗形态"},{"slot":"奥义","name":"绯流琥·机关齐射〔玩法名〕","effect_lv1":"尾刺牵制配合毒针齐射，总4.8A并破甲；不凭空切换百机形态。","asset_description":"仅援护包，不能证明完整四技能战斗形态"}]},{"character_id":"kisame","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"鲛肌吸收","effect_lv1":"本人技能命中感电/封穴目标时恢复最大生命2%，每3秒一次；不偷取Boss技能或奥义。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"水遁·水鲛弹之术","effect_lv1":"水鲛弹1.9A，潮湿。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"技能二","name":"水遁·五食鲛","effect_lv1":"五鲛围攻合计2.5A，减速并潮湿；同次施法只一次导电判定。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"奥义","name":"水遁·大鲛弹之术","effect_lv1":"大型鲛弹爆炸5.5A，潮湿并破甲；不因被敌忍术命中而无限增伤。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"}]},{"character_id":"guy","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"青春燃烧","effect_lv1":"本人连续近身命中三次后，4秒内直伤+10%，每8秒一次；追加伤不计入触发。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"木叶刚力旋风","effect_lv1":"强力回旋踢2A，击退。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"技能二","name":"朝孔雀","effect_lv1":"高速拳压扇形连打，总2.5A；画面火花不按火遁施加灼烧。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"奥义","name":"昼虎","effect_lv1":"空气压缩冲击总5.5A，破甲并击退；不是风遁，不触发风火扩散。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"}]},{"character_id":"kankuro","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"傀儡协同","effect_lv1":"本人傀儡攻击中毒目标时直伤+10%；傀儡不继承被动光环、不生成更多傀儡。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"傀儡操演·乌鸦","effect_lv1":"乌鸦傀儡攻击6秒，总伤害预算2A，首次命中施加中毒。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"技能二","name":"黑秘技·机机一发","effect_lv1":"傀儡机关合击2A，束缚杂兵；Boss原地架势。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"奥义","name":"黑秘技·机机二发","effect_lv1":"多傀儡围攻，总5A，流血与中毒各1层；演出不让Boss离场。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"}]},{"character_id":"iruka","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"教师的鼓励〔机制名〕","effect_lv1":"全队经验获取+5%，主控低于40%生命时提供3秒最大生命5%护盾，每20秒一次，同名不叠加。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"手里剑连投〔动作名〕","effect_lv1":"连续投掷3枚手里剑，总1.5A；与普通攻击独立冷却。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能二","name":"忍具绊索〔玩法名〕","effect_lv1":"布置可通行绊索区，命中施加束缚，无伤害；不作为地图障碍。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"奥义","name":"守护同伴〔机制奥义〕","effect_lv1":"全队获得最大生命20%护盾4秒，净化一个普通减益；不替死、不复活主控。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"}]},{"character_id":"fukasaku_shima","form_id":"base","form":"基础形态","skills":[{"slot":"被动","name":"仙术合鸣","effect_lv1":"本人存活且距主控250内时，主控对封穴/幻惑目标直伤+6%；同名不叠加，其他单位不自动获得仙人模式。","asset_description":"机制/UI/通用代码表现，无需独占原作特效；仍待实现"},{"slot":"技能一","name":"仙法·蛙鸣〔映射待核〕","effect_lv1":"音波1.2A，减速；不把普通蛙鸣直接当成奥义级幻术。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"技能二","name":"仙法·舌战斩","effect_lv1":"舌刃横扫2A，流血。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"},{"slot":"奥义","name":"魔幻·蛤蟆临唱","effect_lv1":"两仙人合唱1秒后产生幻术，总3.5A，杂兵幻惑，Boss易伤/架势转换。","asset_description":"仅目录或立绘/形态条目，不满足完整动作与技能需求"}]}];

;
/* hub.js */
/* Mobile illustration hub. Display preference and battle selection are independent. */
window.HubUI={
 page:'home',sheet:null,display:null,draftDisplay:null,draftBattle:null,detailId:null,detailForm:null,filter:'all',query:'',displayQuery:'',gameLoaded:0,secondaryLoaded:0,failed:false,initialized:false,bootFinished:false,focusReturn:null,secondaryEpoch:0,
 esc(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));},
 el(id){return document.getElementById(id);},
 character(id){return SHINOBI_CHARACTERS.find(c=>c.id===id)||SHINOBI_CHARACTERS[0];},
 form(id,formId){const c=this.character(id);return c.forms.find(f=>f.id===formId)||c.forms[0];},
 art(key){return 'assets/illustrations/'+key+'.webp';},
 icon(key,alt=''){return `<img src="assets/hub-modern/${key}.svg" alt="${this.esc(alt)}">`;},
 displayForm(c,id){return c.forms.find(f=>f.id===id&&f.fullBodyArt)||c.forms.find(f=>f.fullBodyArt);},
 displayArt(f){return 'assets/home-lite/'+f.fullBodyArt+'.webp';},
 preference(){if(this.display)return this.display;let p;try{p=JSON.parse(localStorage.getItem('ninja-home-display'))}catch{}const c=SHINOBI_CHARACTERS.find(c=>c.id===p?.id);this.display=c&&this.displayForm(c,p.form)?{id:c.id,form:this.displayForm(c,p.form).id}:{id:'naruto',form:'shippuden'};return this.display;},
 refreshHome(){const p=this.preference(),c=this.character(p.id),f=this.form(c.id,p.form);const image=this.el('lobbyHero');if(image){const url=this.displayArt(f);if(image.getAttribute('src')!==url)image.src=url;image.alt=c.name+' · '+(f.fullBodyName||f.name)+'全身立绘';}if(this.el('lobbyName'))this.el('lobbyName').textContent=c.name;if(this.el('hubDisplayForm'))this.el('hubDisplayForm').textContent=f.fullBodyName||f.name;if(this.el('hubHeroEnglish'))this.el('hubHeroEnglish').textContent=c.en;if(this.el('hubHeroNumber'))this.el('hubHeroNumber').textContent=c.number;},
 setDisplay(id,form){const c=this.character(id);this.display={id:c.id,form:this.displayForm(c,form).id};try{localStorage.setItem('ninja-home-display',JSON.stringify(this.display))}catch{}this.refreshHome();},
 gameProgress(value,message){this.gameLoaded=Math.max(0,Math.min(1,value));if(!assetsReady&&!this.battleFailed)this.el('start').textContent='准备战斗 '+Math.round(this.gameLoaded*100)+'%';this.updateBoot();},
 updateBoot(){const n=Math.round(this.secondaryLoaded*100);this.el('bootBar').style.width=n+'%';this.el('bootPercent').textContent=n+'%';this.el('bootProgress').setAttribute('aria-valuenow',n);if(n===100&&!this.failed)this.finishBoot();},
 finishBoot(){if(this.bootFinished)return;this.bootFinished=true;this.el('bootMessage').textContent='忍者集结完毕';const boot=this.el('bootOverlay');boot.classList.add('complete');setTimeout(()=>{if(this.bootFinished&&!this.failed)boot.hidden=true},230);},
 loadError(){this.failed=true;this.bootFinished=false;const b=this.el('bootOverlay');b.hidden=false;b.classList.remove('complete');b.classList.add('hub-load-error');this.el('bootMessage').textContent='加载遇到问题，请重试';this.el('bootRetry').hidden=false;this.el('bootRetry').disabled=false;},
 async secondary(){const epoch=++this.secondaryEpoch;this.secondaryLoaded=0;try{let loaded=0;const ready=()=>{if(epoch===this.secondaryEpoch){this.secondaryLoaded=++loaded/2;this.updateBoot();}};await Promise.all([document.fonts.load('16px Pixel').then(ready),new Promise((resolve,reject)=>{const im=new Image(),timer=setTimeout(()=>reject(Error('portrait timeout')),15000);im.onload=()=>{clearTimeout(timer);ready();resolve()};im.onerror=()=>{clearTimeout(timer);reject(Error('portrait'))};const p=this.preference();im.src=this.displayArt(this.form(p.id,p.form))})]);if(epoch!==this.secondaryEpoch)return;this.secondaryLoaded=1;this.updateBoot();}catch{if(epoch===this.secondaryEpoch)this.loadError();}},
 restart(){this.failed=false;this.bootFinished=false;this.gameLoaded=0;this.el('bootOverlay').hidden=false;this.el('bootOverlay').classList.remove('hub-load-error','complete');this.el('bootRetry').hidden=true;this.el('bootMessage').textContent='正在重新集结忍者…';this.secondary();preload();},
 init(){if(this.initialized)return;this.initialized=true;DebugMode.init();for(const id of ['start','chooseNinjaMobile','homeNinja','homeTrial','homeJutsu','homeRoster','homeRecords']){if(this.el(id))this.el(id).onclick=null;}this.el('start').onclick=()=>{if(assetsReady)this.openBattle(false);else if(this.battleFailed)preload()};this.el('bootRetry').onclick=()=>this.restart();this.el('startOverlay').addEventListener('click',e=>{if(e.target.closest('[data-ban-nature],[data-main-key]'))RecruitRun.prepClick(e);else this.click(e)});this.el('startOverlay').addEventListener('input',e=>this.input(e));document.addEventListener('keydown',e=>this.key(e));this.refreshHome();this.secondary();},
 click(e){const b=e.target.closest('button,a');if(!b){if(!this.el('hubSide').hidden&&!e.target.closest('#hubSide'))this.closeSide();return;}if(b.disabled)return;if(b.dataset.page){this.setPage(b.dataset.page);return;}if(b.dataset.character){this.openDetail(b.dataset.character);return;}if(b.dataset.filter){this.filter=b.dataset.filter;this.updateArchive();return;}if(b.dataset.form){this.detailForm=b.dataset.form;this.renderDetail();return;}if(b.dataset.displayChoice){const id=b.dataset.displayChoice;this.draftDisplay={id,form:this.displayForm(this.character(id)).id};this.renderDisplaySheet();this.el('hubSheetBody').scrollTop=0;return;}if(b.dataset.displayForm){if(!this.form(this.draftDisplay.id,b.dataset.displayForm).fullBodyArt)return;this.draftDisplay.form=b.dataset.displayForm;this.renderDisplaySheet();return;}if(b.dataset.battleChoice){this.draftBattle=b.dataset.battleChoice;this.renderBattleSheet();return;}if(b.dataset.jutsuTab){this.renderJutsu(b.dataset.jutsuTab);return;}switch(b.dataset.action){case'skill-lab':SkillLab.open(b.dataset.unitKey);break;case'display':this.openDisplay();break;case'confirm-display':this.setDisplay(this.draftDisplay.id,this.draftDisplay.form);this.closeSheet();break;case'close-sheet':this.closeSheet();break;case'confirm-battle':this.confirmBattle();break;case'standard':this.openBattle(false);break;case'boss':this.openBattle(true);break;case'side':this.toggleSide();break;case'ranking':this.setPage('ranking');break;case'back':this.setPage(this.page==='detail'?'ninja':'home');break;case'help':this.closeSide();info('help');break;case'credits':this.closeSide();info('credits');break;case'sound':this.closeSide();this.el('sound').click();this.el('hubSound').setAttribute('aria-pressed',String(!muted));this.el('hubSound').querySelector('span').textContent=muted?'音效关':'音效开';break;}if(!b.closest('#hubSide')&&b.dataset.action!=='side')this.closeSide();},
 input(e){if(e.target.id==='hubSearch'){this.query=e.target.value;this.updateArchive(false)}if(e.target.id==='hubDisplaySearch'){this.displayQuery=e.target.value;this.updateDisplayGrid()}},
 key(e){if(this.el('startOverlay').hidden)return;if(e.key==='Escape'){if(this.sheet)this.closeSheet();else if(!this.el('hubSide').hidden)this.closeSide();else if(state==='info')this.el('closeInfo')?.click();else if(this.page!=='home')this.setPage(this.page==='detail'?'ninja':'home');}if(e.key==='Tab'&&this.sheet){const focusable=[...this.el('hubSheet').querySelectorAll('.hub-sheet button:not(:disabled),.hub-sheet input,.hub-sheet a[href]')].filter(x=>x.offsetParent!==null);if(!focusable.length)return;const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}},
 toggleSide(){const open=this.el('hubSide').hidden;this.el('hubSide').hidden=!open;this.el('sideToggle').setAttribute('aria-expanded',String(open));this.el('sideToggle').setAttribute('aria-label',open?'收起侧边栏':'展开侧边栏');},
 closeSide(){this.el('hubSide').hidden=true;this.el('sideToggle').setAttribute('aria-expanded','false');this.el('sideToggle').setAttribute('aria-label','展开侧边栏');},
 setPage(page){if(state==='info'&&viewReturn==='intro')this.el('closeInfo')?.click();if(state!=='intro')return;this.closeSide();this.closeSheet(false);this.page=page;this.el('startOverlay').dataset.page=page;const home=page==='home';this.el('hubPage').hidden=home;this.el('hubMain').inert=!home;this.el('sideToggle').hidden=!home;const active=page==='detail'?'ninja':page;document.querySelectorAll('.hub-nav>[data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===active);if(b.dataset.page===active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});if(home){this.refreshHome();return;}this.el('hubPageBody').scrollTop=0;this.el('hubPageCount').textContent='';switch(page){case'ninja':this.renderArchive();break;case'detail':this.renderDetail();break;case'trials':this.renderTrials();break;case'recruit':this.renderRecruit();break;case'jutsu':this.renderJutsu('exclusive');break;case'ranking':this.renderRanking();break;}},
 onHome(){this.closeSheet(false);this.setPage('home');this.refreshHome();},
 title(text,count=''){this.el('hubPageTitle').textContent=text;this.el('hubPageCount').textContent=count;},
 card(c,mode='archive'){const selected=mode==='display'&&this.draftDisplay?.id===c.id,available=this.displayForm(c);return `<button class="hub-character-card ${selected?'selected':''}" ${mode==='display'?'data-display-choice':'data-character'}="${this.esc(c.id)}" ${mode==='display'&&!available?'disabled':''} aria-label="${this.esc(c.name)}${mode==='display'?'，选择首页展示':'，查看忍者档案'}"><img src="${this.art(c.art)}" alt="" loading="lazy"><span class="hub-card-tag ${c.available?'':'preview'}">${mode==='display'?(available?'全身立绘':'全身立绘待补'):c.id==='naruto'?'主控':['sasuke','sakura','kakashi'].includes(c.id)?'支援':'图鉴'}</span><strong>${this.esc(c.name)}</strong></button>`;},
 renderArchive(){if(window.OfficialGallery)return OfficialGallery.renderArchive();this.title('忍者',SHINOBI_CHARACTERS.length+' 位');this.el('hubPageBody').innerHTML=`<label class="hub-search"><input id="hubSearch" type="search" placeholder="搜索忍者姓名…" aria-label="搜索所有忍者" autocomplete="off" value="${this.esc(this.query)}"></label><div id="hubArchiveFilters" class="hub-filter-row"><button data-filter="all">全部忍者</button><button data-filter="available">可出战</button></div><div id="hubArchiveGrid" class="hub-character-grid"></div>`;this.updateArchive();},
 updateArchive(){document.querySelectorAll('#hubArchiveFilters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===this.filter));const q=this.query.trim().toLowerCase(),items=SHINOBI_CHARACTERS.filter(c=>(this.filter!=='available'||c.available)&&(!q||(c.name+c.en+c.faction).toLowerCase().includes(q)));this.el('hubArchiveGrid').innerHTML=items.map(c=>this.card(c)).join('')||'<p class="hub-empty">没有找到这位忍者</p>';this.el('hubPageCount').textContent=items.length+' / '+SHINOBI_CHARACTERS.length;},
 openDetail(id){this.detailId=this.character(id).id;this.detailForm=this.character(id).forms[0].id;this.setPage('detail');},
 renderDetail(){const c=this.character(this.detailId),f=this.form(c.id,this.detailForm);this.title('忍者档案',c.faction);const known=['naruto','sasuke','sakura','kakashi'].includes(c.id)&&f.id===c.forms[0].id;this.el('hubPageBody').innerHTML=`<article class="hub-detail-hero"><img src="${this.art(f.art)}" alt="${this.esc(c.name+' '+f.name)}立绘"><div><h3>${this.esc(c.name)}</h3><p>${this.esc(c.role)} / ${this.esc(f.name)}</p></div></article><span class="hub-state-tag">${RecruitRun.units.some(u=>u.family===c.id)?'已接入主控或支援池':'图鉴忍者 · 暂未接入招募'}</span><div class="catalog-natures">${RecruitRun.chips({family:c.id,form:f.id})}</div><p class="hub-section-caption">游戏单属性 · 各形态独立配置</p><p class="hub-copy">${this.esc(c.bio)}</p>${(DebugMode.enabled?RecruitRun.units.filter(u=>u.family===c.id):[]).map(u=>`<button class="hub-skill-test" ${!assetsReady?'disabled':''} data-action="skill-lab" data-unit-key="${u.key}">${u.name} · 技能与奥义试放</button>`).join('')}<h3 class="hub-section-title">形态图鉴</h3><div class="hub-form-tabs">${c.forms.map(x=>`<button data-form="${x.id}" class="${x.id===f.id?'active':''}" aria-pressed="${x.id===f.id}">${this.esc(x.name)}</button>`).join('')}</div><h3 class="hub-section-title">${known?'基础忍术':'招式预览'}</h3>${SkillLab.catalog(c.id,f.id)}<p class="hub-section-caption">${['naruto','sasuke','sakura','kakashi'].includes(c.id)?'当前单人开局，通过升级招募支援。形态在开局时固定，局内不变身。':'此页可查看立绘与招式预览，尚未接入当前小队。'}</p>`;},
 skillRows(skills,note){return skills.map((name,i)=>`<div class="hub-skill-row">${this.icon(i%2?'ninja':'jutsu')}<div><b>${this.esc(name)}</b><small>${this.esc(note)}</small></div></div>`).join('');},
 renderTrials(){this.title('试炼');this.el('hubPageBody').innerHTML=`<p class="hub-copy">单人开局，升级招募支援，依次击败三名首领。</p><button class="hub-trial-card" data-action="standard"><small>木叶篇 / 生存试炼</small><h3>铃铛争夺战</h3><p>自由探索，收集查克拉。<br>两名小首领，一名最终首领。</p><span>选择主控与属性 →</span></button><button class="hub-trial-card boss" data-action="boss"><img src="${this.art('kakashi')}" alt="卡卡西立绘"><small>首领快速挑战</small><h3>卡卡西训练分身</h3><p>跳过生存阶段，<br>直接体验首领战。</p><span>选择主控与属性 →</span></button>`;},
 renderRecruit(){this.title('招募');const pool=RecruitRun.mainOptions();this.el('hubPageBody').innerHTML=`<p class="hub-copy">在试炼中升级招募队友，最多3名。队伍未满时，每次升级有2名支援与1项技能；满员后全部为技能。</p><p class="hub-copy">开局可排除0–3种属性，每个形态仅一种属性，“全”为独立第八类。当前已接入 ${pool.length} 个可招募形态，同形态不重复，不同形态鸣人可以同队。</p>${pool.map(u=>`<div class="hub-skill-row"><b>${u.name}</b><p>${RecruitRun.natureText(u)} · 技能固定Lv.1 · 角色等级同步</p></div>`).join('')}<button class="hub-primary" data-action="standard" style="width:100%">准备出战</button>`;},
 renderJutsu(tab){this.title('忍术');const tabs={exclusive:'主控忍术',common:'全队被动',support:'队友忍术',links:'小队联动'},key=tabs[tab]?tab:'exclusive',nav=`<div class="hub-filter-row">${Object.entries(tabs).map(([id,name])=>`<button data-jutsu-tab="${id}" class="${id===key?'active':''}">${name}</button>`).join('')}</div>`;let body;if(key==='links')body=`<p class="hub-copy">主控与匹配支援组成连携，招募后自动附加到主技能，不另选升级卡。支援倒地仍生效；支援之间不触发。不占十槽。</p><div class="character-kit">${SquadLinks.definitions.map(d=>`<article><small>${d.label}</small><b>${d.name}</b><p>${d.text}</p>${RecruitRun.mainOptions().some(u=>d.families.some(g=>g.includes(u.family)))?'':'<small>此组合所需主控暂未开放，不会由两名支援激活</small>'}</article>`).join('')}</div><p class="hub-section-caption">联动效果为游戏设计，复用已有忍术组件，并非原作新增招式。</p>`;else if(key==='exclusive')body=`<p class="hub-copy">每个形态固定招式。技能一、二各5级，奥义3级；升级改变范围、次数、持续与协同，不更换招式名。满级退出升级池。</p>${this.skillRows(RecruitRun.mainOptions().map(u=>u.name+' · '+Object.keys(u.skills).join(' / ')),'仅强化主控技能；支援角色等级同步、技能固定Lv.1')}`;else if(key==='common')body=`<p class="hub-copy">全队共享增益，保留四类被动槽。</p>${this.skillRows(['查克拉共鸣 · 冷却','协同作战 · 增伤','生命防护 · 生存','生生不息 · 恢复'],'影响当前存活队员，不修改其技能等级')}`;else body=`<p class="hub-copy">当前${RecruitRun.mainOptions().length}个支援形态，角色等级跟随主控，忍术与奥义固定Lv.1，倒地5秒复活。</p>${this.skillRows(RecruitRun.mainOptions().map(u=>u.name+' · '+Object.keys(u.skills).join(' / ')),'自动释放自身奥义；仅与主控形成自动连携')}`;this.el('hubPageBody').innerHTML=nav+body;},
 renderRanking(){this.title('排行榜');this.el('hubPageBody').innerHTML=`<div class="hub-coming"><div class="hub-coming-icon">${this.icon('rank')}</div><span class="hub-state-tag">排行榜即将开放</span><h3>向更高的试炼进发</h3><p>排行榜开放后，<br>可在这里查看忍者们的成绩。</p><h4 class="hub-section-title">我的试炼记录</h4><div class="hub-local-records"><div><b>${best.wins}</b><small>生存试炼通关</small></div><div><b>${best.kills}</b><small>最高击破</small></div></div><p class="hub-section-caption">当前仅展示此浏览器保存的个人记录。</p></div>`;},
 openSheet(kind){if(state!=='intro')return;this.closeSide();this.focusReturn=document.activeElement;this.sheet=kind;this.el('hubSheet').hidden=false;this.el('startOverlay').dataset.sheet='true';setTimeout(()=>{if(this.sheet!==kind)return;this.el('hubSheet').querySelector('.hub-sheet [data-action="close-sheet"]')?.focus({preventScroll:true});for(const e of document.querySelectorAll('.hub-main,.hub-header,.hub-page,.hub-nav,#sideToggle,#hubSide'))e.inert=true;},0);},
 closeSheet(restore=true){if(!this.sheet)return;this.sheet=null;this.el('hubSheet').hidden=true;delete this.el('startOverlay').dataset.sheet;for(const e of document.querySelectorAll('.hub-main,.hub-header,.hub-page,.hub-nav,#sideToggle,#hubSide'))e.inert=false;this.el('hubMain').inert=this.page!=='home';if(restore&&this.focusReturn?.isConnected)this.focusReturn.focus({preventScroll:true});},
 openDisplay(){this.draftDisplay={...this.preference()};this.displayQuery='';this.openSheet('display');this.renderDisplaySheet();},
 renderDisplaySheet(){if(this.sheet!=='display')return;const c=this.character(this.draftDisplay.id),f=this.form(c.id,this.draftDisplay.form),body=this.el('hubSheetBody'),top=body.scrollTop;this.el('hubSheetTitle').textContent='切换首页展示';this.el('hubSheetKicker').textContent='HOME DISPLAY / 独立保存';this.el('hubSheetBody').innerHTML=`<div class="hub-display-selection"><img src="${this.displayArt(f)}" alt=""><div><b>${this.esc(c.name)}</b><small>只改变首页立绘，不改变出战忍者。</small></div></div><div class="hub-form-tabs">${c.forms.map(x=>`<button data-display-form="${x.id}" ${x.fullBodyArt?'':'disabled'} title="${x.fullBodyArt?'全身立绘':'全身立绘待补'}" class="${x.id===f.id?'active':''}">${this.esc(x.fullBodyName||x.name)}${x.fullBodyArt?'':' · 待补'}</button>`).join('')}</div><label class="hub-search"><input id="hubDisplaySearch" type="search" placeholder="搜索展示忍者…" aria-label="搜索首页展示忍者" value="${this.esc(this.displayQuery)}"></label><div id="hubDisplayGrid" class="hub-character-grid"></div>`;this.el('hubSheetFooter').innerHTML=`<button class="hub-primary" data-action="confirm-display">设为首页展示</button>`;this.updateDisplayGrid();body.scrollTop=top;},
 updateDisplayGrid(){const q=this.displayQuery.trim().toLowerCase(),items=SHINOBI_CHARACTERS.filter(c=>!q||(c.name+c.en).toLowerCase().includes(q));this.el('hubDisplayGrid').innerHTML=items.map(c=>this.card(c,'display')).join('')||'<p class="hub-empty">没有找到这位忍者</p>';},
 openBattle(quick){if((quick&&!DebugMode.enabled)||!assetsReady||state!=='intro')return;this.draftBattle=roster.some(c=>c.id===selectedCharacter)?selectedCharacter:'naruto';this.quickBattle=!!quick;this.openSheet('battle');this.renderBattleSheet();},
 renderBattleSheet(){if(this.sheet==='battle')RecruitRun.renderPrep();},
 async confirmBattle(){if(this.sheet!=='battle'||!RecruitRun.commit())return;const quick=this.quickBattle;const button=this.el('hubSheetFooter').querySelector('button');if(button){button.disabled=true;button.textContent='正在准备忍术…';}try{await SkillArt.ensure(RecruitRun.mainKey);}catch{toast('忍术加载失败，请重试');this.renderBattleSheet();return;}if(this.sheet!=='battle')return;selectedCharacter=RecruitRun.get(RecruitRun.mainKey).family;this.closeSheet(false);reset(quick);}
};

;
/* world.js */
'use strict';
// World coordinates are independent of the portrait viewport. Only nearby ground chunks are cached.
class KonohaWorld{
 constructor(seed=731){this.width=6144;this.height=6144;this.seed=seed;this.tile=32;this.chunk=512;this.cache=new Map();this.origin={x:2288,y:2048};this.start=this.townPoint(430,240);this.landmarks=[{...this.start,name:'木叶广场',short:'广场'},{...this.townPoint(215,256),name:'忍者学校周边',short:'学校'},{...this.townPoint(505,725),name:'一乐拉面街',short:'一乐'},{...this.townPoint(448,858),name:'木叶村口',short:'村口'},{x:4480,y:3008,name:'第七演习场',short:'演习场'},{x:1696,y:3616,name:'木叶河畔',short:'河畔'}];this.objects=[];this.rects=[];this.grid=new Map();this.prepare()}
 townPoint(x,y){return{x:this.origin.x+x*2,y:this.origin.y+y*2}}
 hash(x,y,n=0){let h=Math.imul(x^this.seed,374761393)^Math.imul(y+n*31,668265263);h=Math.imul(h^(h>>>13),1274126177);return((h^(h>>>16))>>>0)/4294967296}
 inTown(x,y){return x>this.origin.x&&x<this.origin.x+1570&&y>this.origin.y&&y<this.origin.y+2068}
 roadAt(x,y){const mainX=3150+Math.sin(y/680)*45,mainY=2860+Math.sin(x/620)*65;return Math.abs(x-mainX)<58||Math.abs(y-mainY)<48||Math.hypot(x-4480,y-3008)<135||Math.abs(y-3910)<45&&x>1500&&x<3500}
 riverAt(x,y){return !this.inTown(x,y)&&Math.abs(x-(1620+Math.sin(y/320)*75))<70}
 bridgeAt(x,y){return this.riverAt(x,y)&&(Math.abs(y-2860)<55||Math.abs(y-3910)<55)}
 terrainAt(x,y){if(this.bridgeAt(x,y))return 18;if(this.riverAt(x,y))return 5;if(Math.hypot(x-4480,y-3008)<160)return 1;if(this.roadAt(x,y))return this.hash(x>>5,y>>5,4)>.8?2:1;return this.hash(x>>5,y>>5,5)>.97?6:0}
 addObject(o){this.objects.push(o);const k=(o.x>>8)+','+(o.y>>8);if(!this.grid.has(k))this.grid.set(k,[]);this.grid.get(k).push(o)}
 prepare(){/* Open training ground: no buildings, trees or collision props. */}

 near(x,y,radius=100){const result=[];for(let cy=Math.floor((y-radius)/256);cy<=Math.floor((y+radius)/256);cy++)for(let cx=Math.floor((x-radius)/256);cx<=Math.floor((x+radius)/256);cx++){const list=this.grid.get(cx+','+cy);if(list)for(const o of list)if(Math.abs(o.x-x)<radius+45&&Math.abs(o.y-y)<radius+90)result.push(o)}return result}
 blocked(x,y,r=11){return x<32+r||y<32+r||x>this.width-32-r||y>this.height-32-r}

 freePoint(x,y,r=12){if(!this.blocked(x,y,r))return{x,y};for(let ring=1;ring<10;ring++)for(let i=0;i<12;i++){const a=i*Math.PI/6,nx=x+Math.cos(a)*ring*24,ny=y+Math.sin(a)*ring*24;if(!this.blocked(nx,ny,r))return{x:nx,y:ny}}return{...this.start}}
 move(e,dx,dy,r=11,arena=null){if(arena){e.x=Math.max(arena.x+r,Math.min(arena.x+arena.w-r,e.x+dx));e.y=Math.max(arena.y+r,Math.min(arena.y+arena.h-r,e.y+dy));return}if(!this.blocked(e.x+dx,e.y,r))e.x+=dx;if(!this.blocked(e.x,e.y+dy,r))e.y+=dy}
 updateNavigation(p,dt){this.navWait=(this.navWait||0)-dt;const gx=Math.floor(p.x/24),gy=Math.floor(p.y/24),key=gy*256+gx;if(this.flow&&(key===this.navKey||this.navWait>0))return;this.navWait=.4;this.navKey=key;if(!this.walkable)this.walkable=new Uint8Array(65536);if(!this.flow)this.flow=new Int16Array(65536);this.flow.fill(-1);const free=(x,y)=>{if(x<1||y<1||x>254||y>254)return false;const k=y*256+x;if(!this.walkable[k])this.walkable[k]=this.blocked(x*24+12,y*24+12,13)?2:1;return this.walkable[k]===1};let goal=null;for(let r=0;r<4&&!goal;r++)for(let y=gy-r;y<=gy+r&&!goal;y++)for(let x=gx-r;x<=gx+r;x++)if(free(x,y)){goal={x,y};break}if(!goal)return;const queue=new Int32Array(65536);let head=0,tail=1;queue[0]=goal.y*256+goal.x;this.flow[queue[0]]=0;while(head<tail){const k=queue[head++],x=k%256,y=Math.floor(k/256);for(const [dx,dy]of [[-1,0],[1,0],[0,-1],[0,1]]){const nx=x+dx,ny=y+dy,nk=ny*256+nx;if(Math.abs(nx-gx)>40||Math.abs(ny-gy)>40||!free(nx,ny)||this.flow[nk]>=0)continue;this.flow[nk]=this.flow[k]+1;queue[tail++]=nk}}}
 pursue(e,p,dt){const d=Math.hypot(p.x-e.x,p.y-e.y)||1,step=Math.min(e.speed*dt,d);this.move(e,(p.x-e.x)/d*step,(p.y-e.y)/d*step,e.r)}

 createLoot(){const chests=[],lamps=[];const p=this.start;const starters=[{x:p.x+90,y:p.y+50,reward:'skill'},{x:p.x-115,y:p.y+140,reward:'food'},{x:p.x+150,y:p.y-150,reward:'magnet'}];let uid=0;
  for(const e of starters){const q=this.freePoint(e.x,e.y,22);chests.push({...q,id:'chest-'+(++uid),opened:false,reward:e.reward})}
  for(let y=1;y<16;y++)for(let x=1;x<16;x++)if(this.hash(x,y,40)>.63){const q=this.freePoint(x*384+this.hash(x,y,41)*150-75,y*384+this.hash(x,y,42)*150-75,22);if(chests.some(c=>Math.hypot(c.x-q.x,c.y-q.y)<170))continue;chests.push({...q,id:'chest-'+(++uid),opened:false,reward:null})}
  for(let y=1;y<24;y++)for(let x=1;x<24;x++)if(this.hash(x,y,44)>.65){const q=this.freePoint(x*256+this.hash(x,y,46)*100,y*256+this.hash(x,y,47)*100,18);lamps.push({...q,id:'lamp-'+x+'-'+y,kind:'lamp',hp:18,maxHp:18,r:12,hit:0})}
  for(const [dx,dy]of [[-140,-45],[155,100]]){const q=this.freePoint(p.x+dx,p.y+dy,15);lamps.push({...q,id:'lamp-start-'+dx,kind:'lamp',hp:18,maxHp:18,r:12,hit:0})}
  return{chests,lamps}}
 tileDraw(ctx,img,index,x,y,size=32){ctx.drawImage(img,(index%8)*16,Math.floor(index/8)*16,16,16,Math.round(x),Math.round(y),size,size)}
 groundChunk(cx,cy,images){const key=cx+','+cy;if(this.cache.has(key)){const c=this.cache.get(key);this.cache.delete(key);this.cache.set(key,c);return c}const c=document.createElement('canvas');c.width=c.height=512;const g=c.getContext('2d');g.imageSmoothingEnabled=false;
  for(let y=0;y<512;y+=32)for(let x=0;x<512;x+=32){const wx=cx*512+x,wy=cy*512+y,index=this.terrainAt(wx,wy);this.tileDraw(g,images.terrain,index,x,y);if(index===0&&this.hash(wx>>5,wy>>5,51)>.83){g.fillStyle='#aab37c22';g.fillRect(x+5,y+7,2,3);g.fillRect(x+13,y+17,2,2)}}
  // The original village layer is clipped by the chunk canvas; no giant world bitmap is allocated.
  this.cache.set(key,c);if(this.cache.size>(this.cacheLimit||18))this.cache.delete(this.cache.keys().next().value);return c}
 drawGround(ctx,images,camera,arena=null){this.cacheLimit=Math.max(18,(Math.ceil(ctx.canvas.width/512)+2)*(Math.ceil(ctx.canvas.height/512)+2));const ax=Math.floor(camera.x/512),ay=Math.floor(camera.y/512);for(let cy=ay;cy<=Math.floor((camera.y+ctx.canvas.height)/512);cy++)for(let cx=ax;cx<=Math.floor((camera.x+ctx.canvas.width)/512);cx++){if(cx>=0&&cy>=0&&cx<12&&cy<12)ctx.drawImage(this.groundChunk(cx,cy,images),Math.round(cx*512-camera.x),Math.round(cy*512-camera.y))}
  if(arena){ctx.save();ctx.translate(-Math.round(camera.x),-Math.round(camera.y));ctx.beginPath();ctx.rect(arena.x,arena.y,arena.w,arena.h);ctx.clip();for(let y=0;y<arena.h;y+=32)for(let x=0;x<arena.w;x+=32)this.tileDraw(ctx,images.terrain,(x/32+y/32)%7===0?2:1,arena.x+x,arena.y+y);ctx.fillStyle='#a18d6125';ctx.fillRect(arena.x,arena.y,arena.w,arena.h);ctx.strokeStyle='#e8c68a';ctx.lineWidth=2;ctx.strokeRect(arena.x+12,arena.y+12,arena.w-24,arena.h-24);ctx.restore()}}
 drawObject(ctx,images,o,p){if(o.kind==='tree'){ctx.save();if(p.y<o.y&&Math.abs(p.x-o.x)<40&&o.y-p.y<80)ctx.globalAlpha=.45;const top=o.variant?10:8,bottom=o.variant?11:9;this.tileDraw(ctx,images.terrain,top,o.x-16,o.y-54);this.tileDraw(ctx,images.terrain,bottom,o.x-16,o.y-22);ctx.restore()}else if(o.kind==='bush')this.tileDraw(ctx,images.terrain,13,o.x-16,o.y-22);else if(o.kind==='post'){ctx.fillStyle='#313c2e';ctx.fillRect(o.x-8,o.y-35,16,38);ctx.fillStyle='#b09560';ctx.fillRect(o.x-5,o.y-34,10,34);ctx.fillStyle='#61513a';ctx.fillRect(o.x-6,o.y-20,12,3)}}
 nearestChest(chests,p,arena=null){let item=null,d=Infinity;for(const c of chests){if(c.opened)continue;if(arena&&(c.x<arena.x||c.x>arena.x+arena.w||c.y<arena.y||c.y>arena.y+arena.h))continue;const n=Math.hypot(c.x-p.x,c.y-p.y);if(n<d){d=n;item=c}}return item?{item,distance:d}:null}
 district(x,y){if(this.inTown(x,y)){let nearest=this.landmarks[0];for(const l of this.landmarks.slice(0,4))if(Math.hypot(x-l.x,y-l.y)<Math.hypot(x-nearest.x,y-nearest.y))nearest=l;return nearest.name}if(Math.hypot(x-4480,y-3008)<300)return'第七演习场';if(Math.abs(x-1620)<300)return'木叶河畔';return'木叶外围林地'}
 drawMap(ctx,width,height,p,chests,arena=null,local=false){ctx.save();ctx.fillStyle='#172d23';ctx.fillRect(0,0,width,height);ctx.beginPath();ctx.rect(0,0,width,height);ctx.clip();const range=local?1100:this.width;const left=local?p.x-range/2:0,top=local?p.y-range/2:0,sx=width/range,sy=height/range;const X=x=>(x-left)*sx,Y=y=>(y-top)*sy;
  ctx.fillStyle='#526b41';ctx.fillRect(X(this.origin.x),Y(this.origin.y),1570*sx,2068*sy);ctx.strokeStyle='#b7a574';ctx.lineWidth=local?2:3;ctx.beginPath();for(let y=0;y<=6144;y+=128){const x=3150+Math.sin(y/680)*45;if(y===0)ctx.moveTo(X(x),Y(y));else ctx.lineTo(X(x),Y(y))}ctx.stroke();ctx.beginPath();for(let x=0;x<=6144;x+=128){const y=2860+Math.sin(x/620)*65;if(x===0)ctx.moveTo(X(x),Y(y));else ctx.lineTo(X(x),Y(y))}ctx.stroke();ctx.strokeStyle='#4a8d91';ctx.lineWidth=local?6:4;ctx.beginPath();for(let y=0;y<=6144;y+=128){const x=1620+Math.sin(y/320)*75;if(y===0)ctx.moveTo(X(x),Y(y));else ctx.lineTo(X(x),Y(y))}ctx.stroke();
  for(const c of chests)if(!c.opened){ctx.fillStyle='#e5b95e';ctx.fillRect(X(c.x)-1,Y(c.y)-1,local?3:2,local?3:2)}
  for(const l of this.landmarks){ctx.fillStyle='#b5d0a5';ctx.fillRect(X(l.x)-2,Y(l.y)-2,4,4);if(!local){ctx.fillStyle='#e6deb9';ctx.font='10px Pixel,monospace';ctx.fillText(l.short,X(l.x)+5,Y(l.y)+4)}}
  if(arena){ctx.strokeStyle='#ed9878';ctx.lineWidth=2;ctx.strokeRect(X(arena.x),Y(arena.y),arena.w*sx,arena.h*sy)}ctx.fillStyle='#fff3c7';ctx.fillRect(X(p.x)-3,Y(p.y)-3,6,6);ctx.fillStyle='#ef9b67';ctx.fillRect(X(p.x)-1,Y(p.y)-1,2,2);ctx.restore()}
}
window.KonohaWorld=KonohaWorld;

;
/* squad.js */
/* Fixed Team Seven prototype. Ally skill levels never participate in the upgrade pool. */
window.TeamSeven={
 definitions:Object.freeze([
  Object.freeze({id:'sasuke',name:'佐助',hp:620,color:'#9cb2ff',skills:Object.freeze({千鸟:1,豪火球:1})}),
  Object.freeze({id:'sakura',name:'小樱',hp:700,color:'#efa5ba',skills:Object.freeze({樱花冲:1,医疗忍术:1})}),
  Object.freeze({id:'kakashi',name:'卡卡西',hp:660,color:'#9ddccf',skills:Object.freeze({雷切:1})})
 ]),
 create(){return[];},
 maxHp(a){return a.baseHp*(1+(s.teamVital||0)*.12);},
 bonus(a){return (a?.profile?.personal||1)*(1+(s.teamPower||0)*.1+(s.reserve||0)*.02);},
 cooldown(){return 1-(s.haste||0)*.07;},
 living(){return [s.p,...(s.allies||[]).filter(a=>a.down<=0&&a.hp>0)];},
 target(e){return this.living().reduce((best,a)=>dist(e,a)<dist(e,best)?a:best,s.p);},
 hurt(a,d){if(a===s.p){hurt(d);return;}if(a.down>0||a.inv>0||state!=='play')return;d=Math.max(1,Math.round(d*(1-(a.profile?.reduction||0))/(1+s.reserveGuard*.02)));const absorb=Math.min(a.shield||0,d);a.shield=(a.shield||0)-absorb;d-=absorb;a.hp=Math.max(0,a.hp-d);a.inv=.65;SkillArt.survive(a);floating(a.x,a.y-42,'−'+d,'#ffb9b1');if(a.hp<=0){a.down=5;a.grave={x:a.x,y:a.y};a.action=null;a.moving=false;effect(a.x,a.y-20,35,'smoke',.45);}},
 respawn(a,i){a.x=s.p.x+[-45,45,0][i];a.y=s.p.y+[30,30,65][i];s.world.move(a,0,0,12,s.arena);a.hp=this.maxHp(a);a.down=0;a.grave=null;a.inv=2;a.atk=.35;a.jutsu=.8;a.secondary=2;effect(a.x,a.y-20,35,'smoke',.45);floating(a.x,a.y-62,a.name+'归队','#b8ebbd');},
 projectile(a,e,damage,element='shuriken'){if(OriginalNinja.interceptBasic(a))return;startCast(a);const angle=Math.atan2(e.y-a.y,e.x-a.x),speed=element==='fire'?245:400;s.shots.push({x:a.x,y:a.y-25,px:a.x,py:a.y-25,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,angle,life:2.5,damage:damage*this.bonus(a),r:element==='fire'?15:7,kind:element==='wind'?'wind':'support',element,owner:a});},
 castPrimary(a,e){if(a.profile?.kit){const ok=SkillArt.cast(a,a.profile,'primary',1,e);if(ok)a.jutsu=a.profile.kit.primary.cd*this.cooldown();return ok;}if(!e||e.hp<=0)return false;const style=a.profile?.style||a.id;if(['wind','water','clay','sand'].includes(style)){if(dist(a,e)>360)return false;startCast(a);this.projectile(a,e,style==='clay'?32:28,{wind:'wind',water:'water',clay:'clay',sand:'sand'}[style]);a.jutsu=4*this.cooldown();return true;}if(dist(a,e)>64)return false;startCast(a);a.facing=e.x>a.x?1:-1;const element=style==='sakura'?'impact':['sasuke','kakashi'].includes(style)?'lightning':'rasengan';addDamageZone(a.x+a.facing*25,a.y-24,(style==='sakura'?15:12)*this.bonus(a),element,.65,style==='sakura'?50:34);a.jutsu=3*this.cooldown();return true;},
 castSecondary(a,e){if(a.profile?.kit){const ok=SkillArt.cast(a,a.profile,'secondary',1,e);if(ok)a.secondary=a.profile.kit.secondary.cd*this.cooldown();return ok;}const style=a.profile?.style||a.id;if(style==='sakura'){const patient=this.living().filter(x=>x.hp<(x===s.p?mainMaxHp():this.maxHp(x))*.85).sort((x,y)=>x.hp/(x===s.p?mainMaxHp():this.maxHp(x))-y.hp/(y===s.p?mainMaxHp():this.maxHp(y)))[0];if(!patient||dist(patient,a)>=240)return false;startCast(a);const heal=Math.round(140*(a.profile?.healing||1));patient.hp=Math.min(patient===s.p?mainMaxHp():this.maxHp(patient),patient.hp+heal);effect(patient.x,patient.y-20,38,'heal',.6);floating(patient.x,patient.y-50,'+'+heal,'#b5e8a7');a.secondary=7*this.cooldown();return true;}
  if(['naruto','kakashi'].includes(style)){if(s.supportClones.length+s.summons.length>=6)return false;s.supportClones.push({owner:a,x:a.x+20,y:a.y+10,sprite:a.sprite||s.form,life:style==='kakashi'?4:6,atk:.3,facing:a.facing});startCast(a);effect(a.x+20,a.y-15,25,'smoke',.4);a.secondary=10*this.cooldown();return true;}
  if(!e||e.hp<=0||dist(a,e)>=360)return false;startCast(a);if(style==='sasuke')this.projectile(a,e,34,'fire');else if(style==='sage')this.projectile(a,e,40,'wind');else if(style==='chakra')this.projectile(a,e,32,'chakra');else{const el={wind:'wind',water:'water',sand:'sand'}[style]||'impact';addDamageZone(e.x,e.y-24,14*this.bonus(a),el,.8,60);if(style==='sand')e.slow=2;}a.secondary=6*this.cooldown();return true;},
 castUltimate(a,u,e){if(u?.kit)return SkillArt.cast(a,u,'ultimate',a===s.p?s.ultimate:1,e);if(a.hp<=0||a.down>0||!u||!e||e.hp<=0||dist(a,e)>400)return false;startCast(a);a.action.duration=.5;effect(a.x,a.y-24,32,'smoke',.45);const style=u.style,el={naruto:'rasengan',sage:'rasengan',chakra:'rasengan',sasuke:'lightning',kakashi:'lightning',sakura:'impact',wind:'wind',water:'water',clay:'impact',sand:'sand'}[style],bonus=(u.personal||1)*(1+s.teamPower*.1+s.reserve*.02),l=a===s.p?s.ultimate:1;s.pendingSkills??=[];for(let i=0;i<(l>=2?2:1);i++)s.pendingSkills.push({time:.28+i*.25,x:e.x+(i?24:0),y:e.y-24,damage:60*bonus*(l>=2?.72:1),element:el,duration:l>=3?2:1.6,radius:l>=3?130:l>=2?110:85,push:l>=3});if(l>=3){a.hp=Math.min(mainMaxHp(),a.hp+mainMaxHp()*.08);effect(a.x,a.y-20,50,'heal',.5);}const linked=SquadLinks.onUltimate(a,u,e);UltimateCue.show(a,u,linked);return true;},
 updatePendingSkills(dt){for(const z of s.pendingSkills||[]){z.time-=dt;if(z.time<=0){if(z.linkId)SquadLinks.ultimateBurst(z);else Growth.zone(z);z.done=true;}}s.pendingSkills=(s.pendingSkills||[]).filter(z=>!z.done);},
 update(dt){
  const enemies=(s.boss?[...s.enemies,s.boss]:s.enemies).filter(e=>e.hp>0);
  for(const [i,a]of s.allies.entries()){a.level=s.level;
   if(a.down>0){a.down=Math.max(0,a.down-dt);if(a.down<=0)this.respawn(a,i);continue;}
   a.hp=Math.min(this.maxHp(a),a.hp+s.reserveRegen*dt);updateCast(a,dt);a.inv=Math.max(0,a.inv-dt);a.atk-=dt;a.jutsu-=dt;a.secondary-=dt;a.ultimateCd=(a.ultimateCd??45)-dt;
   const leash=dist(a,s.p);if(leash>650){a.x=s.p.x+[-40,40,0][i];a.y=s.p.y+55;s.world.move(a,0,0,12,s.arena);effect(a.x,a.y-20,24,'smoke',.3);}
   const e=enemies.filter(e=>dist(e,s.p)<400).sort((x,y)=>dist(x,a)-dist(y,a))[0];a.target=e||null;
   let goal={x:s.p.x+[-65,65,0][i],y:s.p.y+[45,45,90][i]},speed=(leash>240?220:150)*(a.profile?.movement||1);
   if(e&&leash<270){const angle=i*2.1,d=dist(a,e);goal=d>45?{x:e.x+Math.cos(angle)*36,y:e.y+Math.sin(angle)*36}:{x:a.x,y:a.y};}
   let dx=goal.x-a.x,dy=goal.y-a.y,d=Math.hypot(dx,dy)||1,vx=d>12?dx/d*speed:0,vy=d>12?dy/d*speed:0;
   for(const other of this.living()){if(other===a)continue;const gap=dist(a,other)||1;if(gap<40){vx+=(a.x-other.x)/gap*(40-gap)*5;vy+=(a.y-other.y)/gap*(40-gap)*5;}}
   if(s.boss?.phase==='warn'&&s.boss.pattern==='pulse'){const gap=dist(a,s.boss)||1;if(gap<RunFlow.plans[s.bossStep].radius+30){vx=(a.x-s.boss.x)/gap*220;vy=(a.y-s.boss.y)/gap*220;}}else if(s.boss?.phase==='warn'&&s.boss.dash){const q=s.boss.dash,along=(a.x-q.x)*q.dx+(a.y-q.y)*q.dy,side=(a.x-q.x)*(-q.dy)+(a.y-q.y)*q.dx;if(along>-30&&along<850&&Math.abs(side)<65){const sign=side>=0?1:-1;vx=-q.dy*sign*205;vy=q.dx*sign*205;}}
   a.moving=Math.hypot(vx,vy)>4;if(a.moving&&!SkillArt.blocksMovement(a)){s.world.move(a,vx*dt,vy*dt,12,s.arena);if(Math.abs(vx)>3)a.facing=vx>0?1:-1;}
   if(e&&a.atk<=0&&dist(a,e)<400){this.projectile(a,e,12);a.atk=1.05*this.cooldown();}
   const style=a.profile?.style||a.id;
   if(e&&a.jutsu<=0)this.castPrimary(a,e);
   if(a.secondary<=0)this.castSecondary(a,e);
   if(e&&a.ultimateCd<=0&&this.castUltimate(a,a.profile,e))a.ultimateCd=(a.profile.kit?.ultimate.cd||45)*this.cooldown();

  }
  this.updateSupportClones(dt);
 },
 updateSupportClones(dt){for(const c of s.supportClones){c.life-=dt;if(c.owner.down>0){c.life=0;continue;}const e=(s.boss?[...s.enemies,s.boss]:s.enemies).filter(e=>e.hp>0).sort((a,b)=>dist(a,c)-dist(b,c))[0];if(e){const d=dist(e,c)||1;if(d>75)s.world.move(c,(e.x-c.x)/d*145*dt,(e.y-c.y)/d*145*dt,12,s.arena);c.facing=e.x>=c.x?1:-1;c.atk-=dt;if(c.atk<=0){this.projectile({...c,profile:c.owner.profile},e,7);c.atk=1.2*this.cooldown();}}else if(dist(c,s.p)>240){c.x=s.p.x+40;c.y=s.p.y+50;}if(c.life<=0&&c.owner.profile?.key==='kakashi')addDamageZone(c.x,c.y-24,12*this.bonus(c.owner),'lightning',.6,45);}s.supportClones=s.supportClones.filter(c=>c.life>0);},
 draw(entities){for(const a of s.allies){if(a.down>0){const g=a.grave||a;entities.push({y:g.y,draw:()=>this.drawGrave(a)});continue;}entities.push({y:a.y,draw:()=>{if(!SkillArt.hidden(a))sprite(a.sprite||a.id,a.action?'cast':a.moving?'run':'idle',a.x,a.y,a.facing,a.inv>0&&Math.sin(s.t*24)>0?.55:1,0,false,a.action?a.action.age:null);ctx.fillStyle='#1b2927';ctx.fillRect(a.x-18,a.y+7,36,5);ctx.fillStyle=this.definitions.find(d=>d.id===a.id)?.color||'#afd2ab';ctx.fillRect(a.x-17,a.y+8,34*a.hp/this.maxHp(a),3);ctx.font='9px Pixel,sans-serif';ctx.textAlign='center';ctx.fillStyle='#e7e8cc';ctx.fillText(a.name,a.x,a.y-67);ctx.textAlign='left';}});}for(const c of s.supportClones||[])entities.push({y:c.y,draw:()=>sprite(c.sprite,'run',c.x,c.y,c.facing,.55)});},
 drawGrave(a){const g=a.grave||a,x=Math.round(g.x),y=Math.round(g.y);ctx.save();ctx.fillStyle='#12231b66';ctx.fillRect(x-21,y-2,42,6);ctx.fillStyle='#273c37';ctx.fillRect(x-17,y-35,34,35);ctx.fillRect(x-13,y-39,26,4);ctx.fillStyle='#a3ada0';ctx.fillRect(x-14,y-34,28,31);ctx.fillRect(x-10,y-37,20,3);ctx.fillStyle='#cbd0b8';ctx.fillRect(x-11,y-32,3,25);ctx.fillStyle='#5a6b60';ctx.fillRect(x+10,y-32,2,26);ctx.fillStyle='#344a41';ctx.font='14px Pixel,sans-serif';ctx.textAlign='center';ctx.fillText('忍',x,y-14);ctx.restore();},
 drawGraveLabels(){const boxes=[],ratio=W/Math.max(1,$('shell').clientWidth);s.graveLabelBoxes=[];for(const a of s.allies){if(a.down<=0)continue;const g=a.grave||a;ctx.save();ctx.font=`600 ${12*ratio}px system-ui,sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';const w=Math.min(W-16*ratio,Math.max(74*ratio,ctx.measureText(a.name).width+18*ratio)),h=39*ratio,minY=145*ratio,maxY=H-h-70*ratio;let x=clamp(g.x-s.camera.x-w/2,8*ratio,W-w-8*ratio),y=clamp(g.y-s.camera.y-80*ratio,minY,Math.max(minY,maxY));for(let n=0;n<8&&boxes.some(b=>x<b.x+b.w+4*ratio&&x+w>b.x-4*ratio&&y<b.y+b.h+4*ratio&&y+h>b.y-4*ratio);n++){y-=h+5*ratio;if(y<minY){y=clamp(g.y-s.camera.y+12*ratio,minY,maxY);x=clamp(x+(n%2?1:-1)*(w+5*ratio),8*ratio,W-w-8*ratio);}}const b={x,y,w,h,name:a.name};boxes.push(b);s.graveLabelBoxes.push(b);x+=s.camera.x;y+=s.camera.y;ctx.fillStyle='#13281ff2';ctx.fillRect(x,y,w,h);ctx.strokeStyle='#c8b584';ctx.lineWidth=ratio;ctx.strokeRect(x,y,w,h);ctx.fillStyle='#f4dfac';ctx.fillText(a.name,x+w/2,y+13*ratio);ctx.font=`600 ${11*ratio}px system-ui,sans-serif`;ctx.fillStyle='#c8d8bd';ctx.fillText(Math.ceil(a.down)+'秒后复活',x+w/2,y+28*ratio);ctx.restore();}},
 pauseCards(){return s.allies.map(a=>`<article class="pause-ally"><img src="${SkillArt.portrait(a.profile)}" alt="${a.name}"><div><div class="pause-ally-title"><strong>${a.name} · Lv.${a.level||s.level}</strong><span class="${a.down>0?'fallen':''}">${a.down>0?'倒地 · '+Math.ceil(a.down)+'秒复活':'生命 '+Math.ceil(a.hp)+' / '+Math.round(this.maxHp(a))}</span></div><p>${Object.entries(a.skillLevels).map(([name,level])=>`<span>${name} <b>Lv.${level}</b></span>`).join('')}<span>${SkillLab.ultimates[a.id]} <b>Lv.1</b></span></p><small>${a.profile?.passive||'支援固定被动'}<br>${a.profile?RecruitRun.natureText(a.profile):''} · 技能与奥义固定 Lv.1</small></div></article>`).join('');}
};
function mainMaxHp(){return (RecruitRun.get(s?.mainKey||RecruitRun.mainKey)?.hp||1000)*(1+(s?.teamVital||0)*.12);}

;
/* recruitment.js */
/* Upgrade recruitment. Nature records belong to characters; jutsu elements remain separate. */
window.RecruitRun={
 types:['火','风','雷','土','水','阴','阳','全'],
 excluded:[],mainKey:'naruto_shippuden',
 units:[
 {key:'naruto_young',family:'naruto',sprite:'young',art:'naruto-young',name:'少年鸣人',hp:650,style:'naruto',skills:{螺旋丸:1,影分身:1},passive:'不服输：本人伤害 +8%',personal:1.08},
 {key:'naruto_shippuden',family:'naruto',sprite:'shippuden',art:'naruto-shippuden',name:'疾风传鸣人',hp:700,style:'naruto',skills:{螺旋丸:1,多重影分身:1},passive:'分身协同：本人伤害 +8%',personal:1.08},
 {key:'naruto_sage',family:'naruto',sprite:'sage',art:'naruto-sage',name:'仙人鸣人',hp:720,style:'sage',skills:{仙法大玉螺旋丸:1,螺旋手里剑:1},passive:'仙人感知：本人减伤 8%',reduction:.08},
 {key:'naruto_kurama',family:'naruto',sprite:'gold_old',art:'naruto-kurama',name:'九尾查克拉鸣人',hp:760,style:'chakra',skills:{查克拉近击:1,查克拉投射:1},passive:'尾兽外衣：本人减伤 8%',reduction:.08},
 {key:'sasuke',family:'sasuke',sprite:'sasuke',art:'sasuke',name:'佐助',hp:620,style:'sasuke',skills:{千鸟:1,豪火球:1},passive:'洞察：本人伤害 +8%',personal:1.08},
 {key:'sakura',family:'sakura',sprite:'sakura',art:'sakura',name:'小樱',hp:700,style:'sakura',skills:{樱花冲:1,医疗忍术:1},passive:'精控：治疗额外 +10%',healing:1.1},
 {key:'kakashi',family:'kakashi',sprite:'kakashi',art:'kakashi',name:'卡卡西',hp:660,style:'kakashi',skills:{雷切:1,雷分身:1},passive:'战术：本人伤害 +8%',personal:1.08},
 {key:'temari',family:'temari',sprite:'temari',art:'temari',name:'手鞠',hp:620,style:'wind',skills:{镰鼬之术:1,大镰鼬之术:1},passive:'风场：本人移速 +8%',movement:1.08},
 {key:'suigetsu',family:'suigetsu',sprite:'suigetsu',art:'suigetsu',name:'水月',hp:700,style:'water',skills:{水铁炮:1,豪水腕:1},passive:'水化：本人减伤 8%',reduction:.08},
 {key:'deidara',family:'deidara',sprite:'deidara',art:'deidara',name:'迪达拉',hp:600,style:'clay',skills:{起爆黏土小鸟:1,黏土爆破:1},passive:'艺术：本人伤害 +8%',personal:1.08},
 {key:'gaara',family:'gaara',sprite:'gaara',art:'gaara',name:'我爱罗',hp:850,style:'sand',skills:{砂弹:1,砂缚冲击:1},passive:'砂盾：本人减伤 10%',reduction:.1}
 ],
 init(){try{const x=JSON.parse(localStorage.getItem('ninja-recruit-loadout'));if(x&&Array.isArray(x.excluded)){const valid=[...new Set(x.excluded)].filter(n=>this.types.includes(n));if(valid.length<=3)this.excluded=valid;}if(this.mainOptions().some(u=>u.key===x?.mainKey))this.mainKey=x.mainKey}catch{}},
 get(key){return this.units.find(u=>u.key===key);},
 mainOptions(){return this.units.filter(u=>SkillArt.isReady(u.key)&&(u.releaseComplete!==false||DebugMode.enabled));},
 attribute(u){if(u?.attribute)return u.attribute;const c=SHINOBI_CHARACTERS.find(c=>c.id===(u.family||u.character_id));const form=u.form||(u.family==='naruto'?u.key?.replace('naruto_',''):'base');return c?.forms.find(f=>f.id===form)?.gameAttribute||c?.forms[0]?.gameAttribute;},
 natures(u){const n=this.attribute(u);return n?[n]:[];},
 candidates(excluded=s?.excludedNatures||this.excluded,main=s?.mainKey||this.mainKey,owned=s?.allies||[]){const used=new Set(owned.map(a=>a.id));return this.units.filter(u=>(u.releaseComplete!==false||DebugMode.enabled)&&u.key!==main&&!used.has(u.key)&&this.natures(u).length>0&&!this.natures(u).some(n=>excluded.includes(n)));},
 random(items){return items.map(x=>({x,r:Math.random()})).sort((a,b)=>a.r-b.r).map(p=>p.x);},
 offers(){const skills=getSkillOffers();if(s.allies.length>=3)return skills.slice(0,3);const recruits=this.random(this.candidates()).slice(0,2).map(u=>({id:'recruit:'+u.key,recruit:u.key,name:u.name,text:()=>this.natureText(u)+' · '+Object.keys(u.skills).join('、')+' · 技能 Lv.1',max:1}));for(const x of recruits)SkillArt.ensure(x.recruit).catch(()=>{});return [...recruits,...skills.slice(0,3-recruits.length)];},
 add(key){const u=this.get(key);if(!u||!SkillArt.isReady(key)||!SkillArt.loaded(key)||s.allies.length>=3||!this.candidates().some(x=>x.key===key))return false;const i=s.allies.length,a={id:u.key,name:u.name,level:s.level,ultimateCd:10+i*3,baseHp:u.hp,hp:u.hp*(1+s.teamVital*.12),sprite:u.sprite,profile:u,skillLevels:Object.freeze({...u.skills}),x:s.p.x+[-55,55,0][i],y:s.p.y+[40,40,75][i],facing:1,moving:false,inv:2,down:0,atk:.2,jutsu:.8,secondary:2,action:null,grave:null};s.world.move(a,0,0,12,s.arena);s.allies.push(a);if(u.releaseComplete===false)s.debugUsed=true;UltimateCue.preload(u);SquadLinks.sync();effect(a.x,a.y-20,35,'smoke',.5);toast(u.name+' 加入 / 支援 '+s.allies.length+'/3');return true;},
 isAll(u){return this.attribute(u)==='全';},
 natureText(u){return this.isAll(u)?'全':this.natures(u).join(' / ')||'待核';},
 chips(u){return (this.isAll(u)?['全']:this.natures(u)).map(n=>`<span class="nature-chip" data-nature="${n}">${n}</span>`).join('');},
 renderPrep(){const body=HubUI.el('hubSheetBody'),scroll=body.scrollTop;HubUI.el('hubSheetTitle').textContent='出战准备';HubUI.el('hubSheetKicker').textContent='SOLO START / 升级招募队友';const selected=this.get(this.mainKey),pool=this.candidates(this.excluded,this.mainKey,[]);body.innerHTML=`<p class="hub-copy">单人开局，升级招募最多 3 名支援。每关约15分钟，击败2名小首领与1名大首领。</p><h3 class="hub-section-title">选择主控</h3><div class="main-pick-grid">${this.mainOptions().map(u=>`<button class="main-pick ${u.key===this.mainKey?'selected':''}" data-main-key="${u.key}" aria-pressed="${u.key===this.mainKey}"><img src="${SkillArt.portrait(u)}" alt=""><span>${u.name}</span>${u.releaseComplete===false?`<small>${u.original?'原创角色 · 试玩':u.sourceCandidate?'源动作候选 · 待核':u.visualComplete?'动画已接入 · 术名待核':'调试预览 · 演出待校正'}</small>`:''}<small class="main-card-natures">${this.natureText(u)}</small></button>`).join('')}</div><div class="prep-natures"><b>${selected.name}</b><div>${this.chips(selected)}</div></div><h3 class="hub-section-title">排除招募属性 · 可选 0–3 个 <small>${this.excluded.length}/3</small></h3><div class="nature-picks">${this.types.map(n=>`<button data-ban-nature="${n}" class="${this.excluded.includes(n)?'excluded':''}" aria-pressed="${this.excluded.includes(n)}"><span>${n}</span><small>${this.excluded.includes(n)?'已排除':'保留'}</small></button>`).join('')}</div><p class="prep-note">每个形态仅一种属性；排除只屏蔽对应属性。“全”是独立第八类，不会因排除火等属性而消失。主控不受影响。</p><h3 class="hub-section-title">本局可招募 ${pool.length} 个形态</h3><div class="pool-preview">${pool.map(u=>`<div><img src="${SkillArt.portrait(u)}" alt=""><span>${u.name}</span><small>${this.natureText(u)}</small>${SquadLinks.forRecruit(u,this.mainKey).map(d=>`<small class="pool-link">可附加：${d.name}</small>`).join('')}</div>`).join('')}</div>${pool.length<3?`<p class="pool-warning">剩余${pool.length}名支援；候选不足时以技能补齐。可减少排除项，扩大招募池。</p>`:''}<p class="prep-note">技能通过范围、连发与协同强化，名称与形态不变。招募匹配支援会给主控技能自动附加连携。属性按形态游戏定位分配。正式出战仅开放技能名称与画面已对应的 ${this.units.filter(u=>u.releaseComplete!==false).length} 个形态；开启调试可预览全部 ${this.units.length} 个试作形态，预览局不计战绩。</p>`;HubUI.el('hubSheetFooter').innerHTML=`<button class="hub-primary" data-action="confirm-battle" ${this.excluded.length>3?'disabled':''}>${HubUI.quickBattle?'直入大首领':'开始试炼'} ${HubUI.icon('check')}</button><p>开局没有队友 · 未满员时升级 2 张支援＋1 张技能</p>`;body.scrollTop=scroll;},
 prepClick(e){const b=e.target.closest('[data-ban-nature],[data-main-key]');if(!b)return;if(b.dataset.mainKey){this.mainKey=b.dataset.mainKey;}else{const n=b.dataset.banNature;if(this.excluded.includes(n))this.excluded=this.excluded.filter(x=>x!==n);else if(this.excluded.length<3)this.excluded.push(n);else{toast('最多排除3种；请先取消一个已选属性');return;}}this.renderPrep();},
 commit(){if(this.excluded.length>3||!this.mainOptions().some(u=>u.key===this.mainKey))return false;localStorage.setItem('ninja-recruit-loadout',JSON.stringify({mainKey:this.mainKey,excluded:this.excluded}));return true;}
};
window.RunFlow={
 speed:1,
 plans:[{name:'精英·木叶突袭忍者',at:300,hp:6000,sprite:'enemy',pattern:'dash',damage:110,move:410,warn:1.25,rest:2.8}, {name:'精英·砂隐忍者',at:600,hp:12000,sprite:'gaara',pattern:'pulse',damage:140,radius:112,warn:1.3,rest:3.2}, {name:'卡卡西训练分身',at:780,hp:32000,sprite:'kakashi',pattern:'dash',damage:180,move:520,warn:1.25,rest:2.4}],
 init(){const n=Number(localStorage.getItem('ninja-battle-speed'));if([1,1.5,2,3].includes(n))this.speed=n;const btn=document.getElementById('battleSpeed');btn.onclick=()=>this.setSpeed([1,1.5,2,3][([1,1.5,2,3].indexOf(this.speed)+1)%4]);this.setSpeed(this.speed);},
 setSpeed(n){if(![1,1.5,2,3].includes(n))return;this.speed=n;localStorage.setItem('ninja-battle-speed',n);const el=document.getElementById('battleSpeed');if(el){el.textContent=n+'×';el.setAttribute('aria-label','战斗倍速 '+n+' 倍，点击切换');}document.querySelectorAll('[data-run-speed]').forEach(b=>b.classList.toggle('active',Number(b.dataset.runSpeed)===n));},
 advance(real){if(state!=='play')return;let left=Math.min(.1,Math.max(0,real))*this.speed;while(left>1e-8&&state==='play'){const dt=Math.min(1/60,left);tick(dt);left-=dt;}},
 defeated(){const i=s.bossStep;if(s.bossLedger[i]==='defeated')return;s.bossLedger[i]='defeated';if(i===2){finish(true);return;}s.boss=null;s.bossMode=false;s.arena=null;s.zones=[];s.growthQueue=[];s.growthEchoes=[];s.pendingSkills=[];s.meleeCast=null;s.shots=[];s.enemies=[];s.world.cache.clear();s.p.hp=Math.min(mainMaxHp(),s.p.hp+120);s.xp+=Math.floor(s.need*.6);s.bossStep++;s.nextBossAt=Math.max(this.plans[s.bossStep].at,s.t+10);s.spawn=.5;toast('小首领已击败 / 继续招募与成长');updateCamera(1);updateHud();},
 updateBoss(dt){const b=s.boss,p=this.plans[s.bossStep];b.hit=Math.max(0,b.hit-dt);b.protection=Math.max(0,b.protection-dt);b.timer-=dt;
  if(b.phase==='idle'){const d=dist(b,s.p)||1;b.facing=s.p.x>b.x?1:-1;if(d>145)s.world.move(b,(s.p.x-b.x)/d*24*dt*(b.originalDaze>0?.8:1),(s.p.y-b.y)/d*24*dt*(b.originalDaze>0?.8:1),19,s.arena);if(b.timer<=0){b.phase='warn';b.timer=p.warn;b.cycle++;b.pattern=p.pattern;b.burstDone=false;const dx=s.p.x-b.x,dy=s.p.y-b.y,den=Math.hypot(dx,dy)||1;b.dash={x:b.x,y:b.y,dx:dx/den,dy:dy/den};if(s.bossStep===2&&b.cycle%2===0)b.clones=[{x:clamp(b.x-70,s.arena.x+25,s.arena.x+s.arena.w-25),y:b.y+35},{x:clamp(b.x+70,s.arena.x+25,s.arena.x+s.arena.w-25),y:b.y-35}];}}
  else if(b.phase==='warn'&&b.timer<=0){b.phase='dash';b.timer=b.pattern==='pulse'?.2:.65;}
  else if(b.phase==='dash'){if(b.pattern==='pulse'){if(!b.burstDone){b.burstDone=true;effect(b.x,b.y,112,'break',.5);for(const a of TeamSeven.living())if(dist(a,b)<p.radius)TeamSeven.hurt(a,p.damage);}}else{const old={x:b.x,y:b.y};s.world.move(b,b.dash.dx*p.move*dt,b.dash.dy*p.move*dt,19,s.arena);for(const a of TeamSeven.living())if(segmentDistance(a,old,b)<30)TeamSeven.hurt(a,p.damage);}if(b.timer<=0||b.x<=s.arena.x+19||b.x>=s.arena.x+s.arena.w-19||b.y<=s.arena.y+19||b.y>=s.arena.y+s.arena.h-19){b.phase='recover';b.timer=2;b.clones=[];}}
  else if((b.phase==='recover'||b.phase==='stun')&&b.timer<=0){if(b.phase==='stun')b.protection=8;b.phase='idle';b.timer=p.rest;}
  if(!['recover','stun'].includes(b.phase))for(const a of TeamSeven.living())if(dist(b,a)<28)TeamSeven.hurt(a,s.bossStep===2?90:55);
 },
 progress(){return `首领 ${s.bossLedger.filter(x=>x==='defeated').length}/3 · ${s.bossStep<2?'小首领 '+(s.bossStep+1):'大首领'}`;},
 debugPanel(){if(!DebugMode.enabled||state!=='paused')return;$('modal').innerHTML=`<section class="pause-panel"><div class="pause-top"><div><small>DEVELOPMENT / 调试工具</small><h2>本局调试</h2></div></div><div class="pause-scroll"><p>保留当前队伍与技能。使用后本局不写入正式战绩。</p><button class="debug-upgrade" id="debugUpgrade">立即升一级 · 打开三选一</button><label class="debug-label" for="debugBoss">跳到指定首领</label><select id="debugBoss">${this.plans.map((p,i)=>`<option value="${i}">${i+1}. ${p.name}${i<2?'（小首领）':'（大首领）'}</option>`).join('')}</select><button class="debug-upgrade" id="debugJump">跳转并恢复主控生命</button><h3>联动阵容预设</h3><p>开启独立调试局，招募后自动附加主控连携。</p>${SquadLinks.definitions.filter(d=>RecruitRun.mainOptions().some(u=>d.families.some(g=>g.includes(u.family)))).map(d=>`<button class="debug-link-preset" data-debug-link="${d.id}">${d.name}<small>${d.label}</small></button>`).join('')}<h3>角色技能与奥义</h3><p>选择角色查看被动、技能一、技能二和奥义。试放会开启独立训练，不保留当前战斗进度。</p><div class="debug-character-grid">${RecruitRun.units.map(u=>`<button data-debug-unit="${u.key}"><img src="${SkillArt.portrait(u)}" alt=""><strong>${u.name}</strong><small>${RecruitRun.natureText(u)}</small></button>`).join('')}</div><a class="debug-catalog-link" href="downloads/four-skills.html" target="_blank" rel="noopener">历史方案：38人／50形态技能设计表 ↗</a><h3>战斗倍速</h3><div class="run-speed-options">${[1,1.5,2,3].map(n=>`<button data-run-speed="${n}" class="${this.speed===n?'active':''}">${n}×</button>`).join('')}</div></div><div class="pause-actions"><button class="primary" id="debugBack">返回暂停页</button></div></section>`;document.querySelectorAll('[data-debug-link]').forEach(b=>b.onclick=()=>SquadLinks.debugPreset(b.dataset.debugLink));document.querySelectorAll('[data-debug-unit]').forEach(b=>b.onclick=()=>SkillLab.open(b.dataset.debugUnit));$('debugUpgrade').onclick=()=>{if(!DebugMode.enabled)return;if(s.skillLab)reset(false);s.debugUsed=true;state='play';$('modal').classList.remove('squad-pause');$('modal').hidden=true;s.xp=s.need;gainLevel();};$('debugJump').onclick=()=>this.jump(Number($('debugBoss').value));$('debugBack').onclick=()=>{state='play';pause()};document.querySelectorAll('[data-run-speed]').forEach(b=>b.onclick=()=>this.setSpeed(Number(b.dataset.runSpeed)));},
 jump(i){if(!DebugMode.enabled||![0,1,2].includes(i))return;if(s.skillLab)reset(false);SkillLab.closeDock();s.skillLab=null;s.debugUsed=true;s.boss=null;s.bossMode=false;s.arena=null;s.bossStep=i;s.bossLedger=['pending','pending','pending'].map((x,n)=>n<i?'skipped':x);s.t=this.plans[i].at;s.nextBossAt=s.t;s.p.hp=mainMaxHp();s.p.inv=2;state='play';$('modal').hidden=true;$('modal').classList.remove('squad-pause');spawnBoss();updateHud();}
};

;
/* skill-lab.js */
/* Character-specific skill inspection and original-asset combat rehearsal. */
window.SkillLab={
 ultimates:Object.fromEntries(Object.entries(window.SKILL_KITS||{}).map(([key,kit])=>[key,kit.kit?.ultimate?.name||kit.ultimate?.name||'奥义'])),
 kit(u){
  if(!u)return [];
  const kit=u.kit||window.SKILL_KITS?.[u.key];
  if(kit)return [['passive','被动'],['primary','技能一'],['secondary','技能二'],['ultimate','奥义']].map(([kind,slot])=>{
   const detail=kit[kind]||{},name=typeof detail==='string'?detail:detail.name||slot,effect=typeof detail==='string'?detail:detail.text||detail.description||'此技能的说明尚未整理。';
   if(kind==='ultimate')this.ultimates[u.key]=name;
   return {slot,kind,name,effect:effect+(window.SkillArt?.reviewText(detail)?' ['+SkillArt.reviewText(detail)+']':''),definition:typeof detail==='object'?detail:null};
  });
  const names=Object.keys(u.skills||{});
  return [{slot:'被动',name:(u.passive||'固有被动').split('：')[0],effect:u.passive||'角色固有属性常驻生效。',kind:'passive'},
   {slot:'技能一',name:names[0]||'技能一',effect:'角色专属忍术；完整效果以已接入的角色技能配置为准。',kind:'primary'},
   {slot:'技能二',name:names[1]||'技能二',effect:'角色专属忍术；完整效果以已接入的角色技能配置为准。',kind:'secondary'},
   {slot:'奥义',name:this.ultimates[u.key]||'奥义',effect:'角色奥义。主控可以升级；支援可以施放，技能等级固定。',kind:'ultimate'}];
 },
 playable(u){return !!u&&RecruitRun.mainOptions().some(x=>x.key===u.key)&&!!window.SkillArt?.isReady(u.key);},
 sourceText(k){const d=k?.definition;if(!d||k.kind==='passive')return '';const source=d.sourceText||d.sourceNote||d.artNote||d.source;return (typeof source==='string'?source:'使用已接入的像素动作素材。')+(d.nameReview?' '+SkillArt.reviewText(d)+'；'+d.nameReview.note:'');},
 unitFor(family,form){return RecruitRun.units.find(u=>u.family===family&&(u.form===form||u.formId===form||u.form_id===form||(family==='naruto'?u.key==='naruto_'+form:form==='base')));},
 catalog(family,form){const u=this.unitFor(family,form),record=window.NINJA_SKILL_CATALOG?.find(x=>x.character_id===family&&x.form_id===form),kit=u?this.kit(u):record?.skills?.map(x=>({slot:x.slot,name:x.name,effect:x.effect_lv1}));if(!kit)return '<p class="hub-copy">此形态的技能设计待整理。</p>';const ready=this.playable(u);return `<div class="character-kit"><p>${ready?'角色专属技能 · 原始像素素材已接入':'技能资料 · 此形态尚未开放试放'}</p>${kit.map(k=>`<article><small>${HubUI.esc(k.slot)}</small><b>${HubUI.esc(k.name)}</b><p>${HubUI.esc(k.effect)}</p>${ready&&this.sourceText(k)?`<small>${HubUI.esc(this.sourceText(k))}</small>`:''}</article>`).join('')}<p>主控与支援角色等级同步；只有主控技能可以升级。支援的忍术与奥义固定Lv.1，倒地5秒复活；倒地期间已组成的小队联动继续生效，支援之间不触发联动。</p></div>`;},
 closeDock(){document.getElementById('skillLabDock')?.remove();document.body.classList.remove('skill-testing');},
 async open(key){const u=RecruitRun.get(key);if(!DebugMode.enabled||!u||!assetsReady)return;if(!this.playable(u)){toast('此形态尚未完成战斗素材，暂不能进入试放');return;}try{await window.SkillArt.ensure(key);}catch(error){console.warn('Skill rehearsal assets unavailable',key,error);toast('角色素材加载失败，请稍后重试');return;}if(!DebugMode.enabled||!this.playable(u))return;window.SkillArt.clear();reset(false);s.debugUsed=true;s.skillLab={key,auto:false,auto1:0,auto2:0,damage:0,last:'点击下方技能试放',selected:'primary'};s.mainKey=u.key;s.form=u.sprite;s.character=u.family;forms[u.sprite]??={name:u.name,tag:'技能调试'};s.p.profile=u;s.p.sprite=u.sprite;s.p.name=u.name;s.p.inv=1e6;s.p.jutsu=0;s.p.secondary=0;s.need=1e9;s.enemies=[];s.chests=[];s.pickups=[];s.summons=[];s.supportClones=[];s.nextBossAt=1e9;s.camera.x=clamp(s.p.x-W/2,0,s.world.width-W);s.camera.y=clamp(s.p.y-H*.30,0,s.world.height-H);document.body.classList.add('skill-testing');this.resetTarget();this.renderDock();updateHud();},
 resetTarget(){UltimateCue.clear();window.SkillArt?.clear();const lab=s.skillLab;if(!lab)return;s.enemies=[{id:++s.uid,x:s.p.x+52,y:s.p.y,hp:1e8,maxHp:1e8,r:12,speed:0,hit:0,elite:false,phase:0,facing:-1,training:true}];s.shots=[];s.zones=[];s.meleeCast=null;s.pendingSkills=[];s.supportClones=[];s.summons=[];s.growthQueue=[];s.growthEchoes=[];s.p.hp=mainMaxHp();lab.damage=0;lab.last='训练靶就绪 · 无敌，不计战绩';this.refresh();},
 renderDock(){this.closeDock();document.body.classList.add('skill-testing');const u=RecruitRun.get(s.skillLab.key),kit=this.kit(u),el=document.createElement('section');el.id='skillLabDock';el.innerHTML=`<div class="lab-head"><div><b>${HubUI.esc(u.name)}</b><small>${HubUI.esc(RecruitRun.natureText(u))} · 专属技能试放</small></div><button id="labMenu">角色 / 返回</button></div><div class="lab-skill-buttons">${kit.map(k=>`<button data-lab-skill="${k.kind}" class="${k.kind==='primary'?'selected':''}"><small>${k.slot}${k.definition?.nameReview?.status==='preview'?' · 待校正':''}</small><strong>${HubUI.esc(k.name)}</strong></button>`).join('')}</div><div class="lab-growth-levels"><button data-lab-level="1">Lv.1</button><button data-lab-level="3">Lv.3</button><button data-lab-level="5">满级机制</button></div><p id="labDescription"></p><div class="lab-tools"><button id="labTarget">重置靶标</button><button id="labAuto" aria-pressed="false">自动连放：关</button><output id="labDamage">累计伤害 0</output></div><p id="labStatus" role="status"></p>`;$('shell').appendChild(el);el.querySelectorAll('[data-lab-skill]').forEach(b=>b.onclick=()=>this.cast(b.dataset.labSkill));el.querySelectorAll('[data-lab-level]').forEach(b=>b.onclick=()=>this.setLevel(Number(b.dataset.labLevel)));$('labTarget').onclick=()=>this.resetTarget();$('labAuto').onclick=()=>{s.skillLab.auto=!s.skillLab.auto;$('labAuto').textContent='自动连放：'+(s.skillLab.auto?'开':'关');$('labAuto').setAttribute('aria-pressed',String(s.skillLab.auto));};$('labMenu').onclick=()=>this.menu();this.refresh();},
 cast(kind){if(!DebugMode.enabled||!s.skillLab||state!=='play')return false;const u=RecruitRun.get(s.skillLab.key),lab=s.skillLab,e=s.enemies.find(e=>e.training),k=this.kit(u).find(k=>k.kind===kind);if(!k||!this.playable(u))return false;lab.selected=kind;let ok=false;if(kind==='passive'){lab.last=k.effect+' 被动常驻，无需施法。';ok=true;}else{if(u.style==='sakura'&&kind==='secondary')s.p.hp=mainMaxHp()*.6;const level=kind==='ultimate'?(s.ultimate||1):kind==='secondary'?(s.clone||1):(s.ras||1);ok=window.SkillArt.cast(s.p,u,kind,level,e);lab.last=ok?`${k.slot} · ${k.name} 已释放`:'未释放：请等待当前招式收招，或重置靶标后再试';}this.refresh();return ok;},
 refresh(){if(!s?.skillLab||!$('labDescription'))return;const u=RecruitRun.get(s.skillLab.key),k=this.kit(u).find(k=>k.kind===s.skillLab.selected);if(!k)return;const source=this.sourceText(k);$('labDescription').textContent=k.effect+(source?' '+source:'')+' 主控可升级；支援角色等级同步，技能与奥义固定Lv.1。';document.querySelectorAll('[data-lab-level]').forEach(b=>b.classList.toggle('active',Number(b.dataset.labLevel)===s.ras));$('labStatus').textContent=s.skillLab.last;document.querySelectorAll('[data-lab-skill]').forEach(b=>b.classList.toggle('selected',b.dataset.labSkill===s.skillLab.selected));const e=s.enemies.find(e=>e.training);$('labDamage').textContent='累计伤害 '+Math.round(e?e.maxHp-e.hp:0);},
 setLevel(l){if(!s.skillLab||!DebugMode.enabled||!Number.isInteger(l)||l<1||l>5)return;s.ras=l;s.clone=l;s.ultimate=Math.min(3,l);this.resetTarget();s.skillLab.last='已切换主控技能等级；招式与形态不变，支援技能不升级';this.refresh();updateHud();},
 update(dt){if(!s.skillLab)return;const lab=s.skillLab;s.p.inv=1e6;if(lab.auto){lab.auto1-=dt;lab.auto2-=dt;if(lab.auto1<=0){lab.auto1=this.cast('primary')?(RecruitRun.get(lab.key)?.kit?.primary.cd||3):.2;}if(lab.auto2<=0){lab.auto2=this.cast('secondary')?(RecruitRun.get(lab.key)?.kit?.secondary.cd||7):.2;}}lab.refresh=(lab.refresh||0)-dt;if(lab.refresh<=0){lab.refresh=.15;this.refresh();}},
 menu(){if(!s.skillLab)return;state='paused';this.closeDock();$('modal').hidden=false;$('modal').classList.add('squad-pause');RunFlow.debugPanel();const quit=document.createElement('button');quit.className='pause-secondary';quit.id='labExit';quit.textContent='退出试放，返回首页';quit.onclick=()=>{window.SkillArt?.clear();goHome();};$('debugBack').parentElement.appendChild(quit);const back=$('debugBack');back.textContent='返回试放';back.onclick=()=>{state='play';$('modal').hidden=true;$('modal').classList.remove('squad-pause');this.renderDock();};}
};

;
/* debug-mode.js */
/* One persisted owner-facing debug preference. Defaults on until explicitly disabled. */
window.DebugMode={
 enabled:true,
 init(){try{this.enabled=localStorage.getItem('ninja-debug-enabled')!=='off'}catch{}const toggle=document.getElementById('debugToggle');if(toggle)toggle.onclick=()=>this.set(!this.enabled);const open=document.getElementById('debugHomeOpen');if(open)open.onclick=()=>this.openHome();this.paint();},
 paint(){if(!this.enabled&&RecruitRun.get(RecruitRun.mainKey)?.releaseComplete===false)RecruitRun.mainKey='naruto_shippuden';document.body.dataset.debug=this.enabled?'on':'off';const b=document.getElementById('debugToggle');if(b){b.setAttribute('aria-checked',String(this.enabled));b.setAttribute('aria-label','调试模式，当前'+(this.enabled?'开启':'关闭')+'，点击切换');b.querySelector('b').textContent=this.enabled?'开启':'关闭';}const o=document.getElementById('debugHomeOpen');if(o)o.hidden=!this.enabled;const original=document.getElementById('originalTry');if(original)original.hidden=!this.enabled;},
 set(value){this.enabled=!!value;try{localStorage.setItem('ninja-debug-enabled',this.enabled?'on':'off')}catch{}this.paint();if(!this.enabled){if(s?.skillLab)goHome();if(HubUI.sheet==='debug')HubUI.closeSheet();}if(state==='intro'&&HubUI.page==='detail'){if(window.OfficialGallery?.currentId)OfficialGallery.renderDetail(OfficialGallery.currentId);else HubUI.renderDetail();}},
 openHome(){if(!this.enabled||state!=='intro')return;HubUI.openSheet('debug');HubUI.el('hubSheetTitle').textContent='调试面板';HubUI.el('hubSheetKicker').textContent='DEBUG / 角色与战斗';HubUI.el('hubSheetBody').innerHTML=`<p class="hub-copy">选择角色查看被动、两个技能和奥义，并进入独立训练。战斗中的暂停页可升级、跳到指定首领。</p><label class="og-search"><input id="debugUnitSearch" type="search" placeholder="搜索忍者或形态…" aria-label="搜索可试放忍者"></label><div class="debug-character-grid">${RecruitRun.units.map(u=>`<button data-home-test="${u.key}"><img src="${SkillArt.portrait(u)}" alt=""><strong>${u.name}</strong><small>${RecruitRun.natureText(u)}${u.sourceCandidate?' · 源动作候选':u.visualComplete?' · 动画已接入':''}</small></button>`).join('')}</div><h3 class="hub-section-title">联动阵容预设</h3><p class="hub-copy">开启独立调试局，招募后自动附加主控词条。</p>${SquadLinks.definitions.filter(d=>RecruitRun.mainOptions().some(u=>d.families.some(g=>g.includes(u.family)))).map(d=>`<button class="debug-link-preset" data-home-link="${d.id}">${d.name}<small>${d.label}</small></button>`).join('')}<p class="hub-copy">关闭首页的调试开关后，所有试放、升级与跳关工具都会隐藏。</p>`;HubUI.el('hubSheetFooter').innerHTML='<button id="debugStartRun" class="hub-primary">准备战斗 · 测试升级与首领</button>';document.querySelectorAll('[data-home-link]').forEach(b=>b.onclick=()=>{HubUI.closeSheet(false);SquadLinks.debugPreset(b.dataset.homeLink)});document.querySelectorAll('[data-home-test]').forEach(b=>b.onclick=()=>{HubUI.closeSheet(false);SkillLab.open(b.dataset.homeTest)});document.getElementById('debugUnitSearch').oninput=e=>document.querySelectorAll('[data-home-test]').forEach(b=>b.hidden=!b.textContent.toLowerCase().includes(e.target.value.trim().toLowerCase()));document.getElementById('debugStartRun').onclick=()=>{HubUI.closeSheet(false);HubUI.openBattle(false)};}
};

;
/* growth.js */
/* Mechanism upgrades keep the original jutsu and actor form. */
window.Growth={
 enemies(){return (s.boss?[...s.enemies,s.boss]:s.enemies).filter(e=>e.hp>0);},
 main(){return RecruitRun.get(s.mainKey)||RecruitRun.get(RecruitRun.mainKey);},
 ranged(){return this.main().kit.secondary.kind!=='summon';},
 primaryName(){if(this.main().kit)return this.main().kit.primary.name;return {naruto_young:'螺旋丸',naruto_shippuden:'螺旋丸',naruto_sage:'仙法·大玉螺旋丸',naruto_kurama:'查克拉近击',kakashi:'雷切'}[s.mainKey]||SkillLab.kit(this.main())[1].name;},
 secondaryName(){if(this.main().kit)return this.main().kit.secondary.name;return this.ranged()?Object.keys(this.main().skills)[1]:this.main().style==='kakashi'?'雷分身':'影分身';},
 primaryStats(l=s.ras){return {radius:([0,36,50,50,58,62][l]||62)*(s.form==='sage'?1.25:1),count:l>=3?2:1,duration:l>=4?1.6:1,echo:l>=5};},
 cloneCount(){return [0,1,2,2,3,3][s.clone]||3;},
 primaryText(){if(this.main().kit)return SkillArt.description('primary',s.ras+1);const l=s.ras+1;return ({2:'范围扩大约40%，一次覆盖更多敌人',3:'一次施法连续释放两次，间隔0.24秒',4:'持续1秒→1.6秒，并击退杂兵',5:this.main().style==='kakashi'?'满级：额外雷击附近两个目标':'满级：分身在附近敌人旁补放一次'})[l];},
 secondaryText(){if(this.main().kit)return SkillArt.description('secondary',s.clone+1);const l=s.clone+1,style=this.main().style;if(style==='sage')return ({2:'风刃爆发半径75→100',3:'单枚→双枚投射，优先分散目标',4:'风刃区域持续0.8→1.4秒',5:'满级：命中后再分裂两个小风刃区域'})[l];if(style==='chakra')return ({2:'单枚→双枚查克拉投射',3:'双枚→三枚，附带范围爆发',4:'爆发范围扩大，附带2秒减速',5:'满级：五枚散射，覆盖整片敌群'})[l];return ({2:'独立分身1→2个',3:'分身近身忍术范围32→44',4:'独立分身2→3个',5:'满级：分身范围扩大，主控施法时近身分身跟进攻击'})[l];},
 ultimateText(){if(this.main().kit)return SkillArt.description('ultimate',s.ultimate+1);return s.ultimate===1?'范围扩大，连续爆发两次':'满级：持续至2秒，击退杂兵并恢复自身8%生命';},
 offers(pool){const links=[],core=pool.filter(u=>['ras','clone','ultimate'].includes(u.id)),other=pool.filter(u=>!core.includes(u));const rand=a=>RecruitRun.random(a);const chosen=[];if(links.length)chosen.push(links.find(u=>u.link===s.preferredLink)||rand(links)[0]);if(core.length){const prefer=core.find(u=>u.id===(s.ras<2?'ras':s.clone<2?'clone':s.upgradeCount%3===0?'ultimate':s.upgradeCount%2?'ras':'clone'));chosen.push(prefer||rand(core)[0]);}for(const u of rand([...other,...core]))if(!chosen.some(x=>x.id===u.id))chosen.push(u);return chosen.slice(0,3);},
 nearestEnemy(actor=s.p,range=520){return Growth.enemies().filter(e=>e.hp>0&&dist(e,actor)<=range).sort((a,b)=>dist(a,actor)-dist(b,actor))[0];},
 queue(event){s.growthQueue??=[];if(s.growthQueue.length<36)s.growthQueue.push(event);},
 zone(z){if(s.zones.length>=64)return null;const zone=addDamageZone(z.x,z.y,z.damage,z.element,z.duration,z.radius);if(z.push)for(const e of Growth.enemies())if(e!==s.boss&&e.hp>0&&Math.hypot(e.x-z.x,e.y-24-z.y)<z.radius+e.r){const d=Math.hypot(e.x-z.x,e.y-24-z.y)||1;s.world.move(e,(e.x-z.x)/d*26,(e.y-24-z.y)/d*26,e.r,s.arena);}return zone;},
 castPrimary(damage){if(this.main().kit)return SkillArt.cast(s.p,this.main(),'primary',s.ras);damage*=this.main().personal||1;if(state!=='play'||s.meleeCast)return false;const e=this.nearestEnemy(s.p,64);if(!e)return false;const st=this.primaryStats(),dx=e.x-s.p.x,dy=e.y-s.p.y,d=Math.hypot(dx,dy)||1,element=s.character==='kakashi'?'lightning':'rasengan';startCast(s.p);s.p.facing=dx>=0?1:-1;const z={x:s.p.x+dx/d*32,y:s.p.y-24+dy/d*32,damage:damage*.35*(st.count===2?.72:1),element,duration:st.duration,radius:st.radius,push:s.ras>=4};s.meleeCast=this.zone(z);if(!s.meleeCast)return false;if(st.count===2)this.queue({...z,time:.24,x:z.x+s.p.facing*24,type:'zone'});if(st.echo){if(s.character==='kakashi')SquadLinks.lightning(z,2,damage*.32);else this.echo(this.main().sprite,this.nearestEnemy(s.p,180)||e,damage*.2,element);}
 if(!this.ranged()&&s.clone>=5)for(const c of s.summons){const target=this.nearestEnemy(c,64);if(target){startCast(c);this.queue({type:'zone',time:.18,x:target.x,y:target.y-24,damage:damage*.12,element,duration:.6,radius:42});}}
 SquadLinks.onPrimary(z,damage);s.cast=1;return true;},
 echo(sprite,e,damage,element='rasengan'){if(!e||e.hp<=0)return;const x=e.x-30,y=e.y;s.growthEchoes??=[];if(s.growthEchoes.length<12)s.growthEchoes.push({sprite,x,y,age:0,duration:.75});effect(x,y-10,26,'smoke',.4);this.queue({type:'zone',time:.2,x:e.x,y:e.y-24,damage,element,duration:.8,radius:38});},
 castSecondary(){if(this.main().kit)return SkillArt.cast(s.p,this.main(),'secondary',s.clone);if(!this.ranged())return false;const targets=Growth.enemies().filter(e=>e.hp>0&&dist(e,s.p)<400).sort((a,b)=>dist(a,s.p)-dist(b,s.p));if(!targets.length)return false;const sage=this.main().style==='sage',l=s.clone,count=sage?(l>=3?2:1):(l>=5?5:l>=3?3:l>=2?2:1);startCast(s.p);for(let i=0;i<count;i++){const e=targets[i%targets.length],a=Math.atan2(e.y-24-(s.p.y-25),e.x-s.p.x)+(targets.length===1?(i-(count-1)/2)*.14:0),speed=310;s.shots.push({x:s.p.x,y:s.p.y-25,px:s.p.x,py:s.p.y-25,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,angle:a,life:2.5,damage:(sage?95:55)*(this.main().personal||1)*(1+s.power*.12)*(1+s.teamPower*.1+s.reserve*.02),r:sage?17:10,element:sage?'wind':'chakra',kind:sage?'wind':'support',growthSecondary:true,growthLevel:l,growthTarget:e,owner:s.p});}return true;},
 onSecondaryImpact(q){const sage=q.element==='wind',l=q.growthLevel,z={x:q.x,y:q.y,damage:q.damage*(sage?.4:.35),element:sage?'wind':'rasengan',duration:sage?(l>=4?1.4:.8):.8,radius:sage?(l>=2?100:75):(l>=4?60:l>=3?45:28)};this.zone(z);if(!sage&&l>=4)for(const e of Growth.enemies())if(Math.hypot(e.x-z.x,e.y-24-z.y)<=z.radius+e.r)e.slow=2;if(sage&&l>=5)for(const offset of[-60,60])this.queue({...z,type:'zone',time:.25,x:z.x+offset,damage:z.damage*.4,radius:45,duration:.6});},
 update(dt){const queue=s.growthQueue||[];s.growthQueue=[];for(const e of queue){e.time-=dt;if(e.time<=0)this.zone(e);else s.growthQueue.push(e);}for(const e of s.growthEchoes||[]){e.age+=dt;if(e.age>=e.duration)effect(e.x,e.y-8,24,'smoke',.25);}s.growthEchoes=(s.growthEchoes||[]).filter(e=>e.age<e.duration);SquadLinks.update(dt);},
 draw(entities){for(const e of s.growthEchoes||[])entities.push({y:e.y,draw:()=>sprite(e.sprite,'cast',e.x,e.y,1,.6*Math.min(1,(e.duration-e.age)/.2),0,false,e.age)});},
 describe(kind){if(this.main().kit&&this.main().kit[kind])return SkillArt.description(kind,kind==='primary'?s.ras:kind==='secondary'?s.clone:s.ultimate);const l=s.clone,style=this.main().style;if(kind==='primary'){const x=this.primaryStats();return `近身64范围才能释放。当前${x.count}连发／范围${Math.round(x.radius)}／持续${x.duration}秒${s.ras>=4?'／击退杂兵':''}${s.ras>=5?'／额外追击':''}。`;}if(kind==='secondary'){if(style==='sage')return `当前${l>=3?2:1}枚投射／爆发范围${l>=2?100:75}／持续${l>=4?1.4:.8}秒${l>=5?'／每次命中再分裂两处风刃':''}。`;if(style==='chakra')return `当前${l>=5?5:l>=3?3:l>=2?2:1}枚查克拉投射／爆发范围${l>=4?60:l>=3?45:28}${l>=4?'／减速2秒':''}。`;return `当前${this.cloneCount()}个独立分身／近身忍术范围${l>=5?52:l>=3?44:32}${l>=5?'／主控施法时近身分身跟进':''}。`;}if(kind==='ultimate')return `当前${s.ultimate>=2?2:1}次爆发／范围${s.ultimate>=3?130:s.ultimate>=2?110:85}／持续${s.ultimate>=3?2:1.6}秒${s.ultimate>=3?'／击退并恢复自身8%生命':''}。奥义仍复用现有特效。`;return null;},
 summary(){if(this.main().kit)return ['primary','secondary','ultimate'].map((k,i)=>this.main().kit[k].name+' Lv.'+[s.ras,s.clone,s.ultimate][i]+SquadLinks.traitMarkup(k)).join('<br>');const st=this.primaryStats();return `${this.primaryName()} Lv.${s.ras} · ${st.count}连发 / 范围${Math.round(st.radius)} / 持续${st.duration}秒<br>${SquadLinks.traitMarkup('primary')}<br>${this.secondaryName()} Lv.${s.clone} · ${this.ranged()?'投射强化':this.cloneCount()+'个独立分身'}<br>${SkillLab.ultimates[this.main().key]} Lv.${s.ultimate}${SquadLinks.traitMarkup('ultimate')}`;}
};
window.SquadLinks={
 definitions:[
 {id:'wind_thunder',name:'雷遁协击',families:[['naruto'],['sasuke']],label:'鸣人主控＋佐助支援',text:'近身忍术追加雷击；奥义附加雷击',icon:'assets/lightning.png',slots:['primary','ultimate']},
 {id:'clone_pursuit',name:'分身追击',families:[['naruto'],['kakashi']],label:'鸣人／卡卡西一人为主控，另一人为支援',text:'近身忍术与奥义追加分身追击',icon:'assets/shippuden-portrait.png',slots:['primary','ultimate']},
 {id:'sand_aid',name:'砂护疗阵',families:[['sakura'],['gaara']],label:'小樱／我爱罗一人为主控，另一人为支援',text:'主控生命低于60%时治疗与加盾',icon:'assets/pickup-pill-existing.png',slots:['passive','ultimate']},
 {id:'water_thunder',name:'水雷传导',families:[['suigetsu'],['sasuke','kakashi']],label:'水月／雷遁忍者一人为主控，另一人为支援',text:'主控忍术附加水雷扩散；奥义强化',icon:'assets/lightning.png',slots:['primary','ultimate']},
 {id:'wind_fire',name:'风助火势',families:[['temari'],['sasuke']],label:'手鞠／佐助一人为主控，另一人为支援',text:'主控火术追加风刃；奥义附加风刃',icon:'assets/rasenshuriken.png',slots:['secondary','ultimate']},
 {id:'sand_blast',name:'聚砂爆破',families:[['deidara'],['gaara']],label:'迪达拉／我爱罗一人为主控，另一人为支援',text:'主控黏土追加延迟爆破；奥义强化',icon:'assets/clay-bird.png',slots:['primary','ultimate']}
 ],
 partners(d,mainKey=s.mainKey,allies=s.allies){const main=RecruitRun.get(mainKey);if(!main)return[];let result=[];d.families.forEach((g,i)=>{if(g.includes(main.family))result.push(...allies.filter(a=>d.families[1-i].includes(a.profile.family)));});return [...new Set(result)];},
 forRecruit(u,mainKey=s.mainKey){return this.definitions.filter(d=>this.partners(d,mainKey,[{profile:u}]).length);},
 ready(d){return this.partners(d).length>0;},
 sync(){s.synergies=this.definitions.filter(d=>this.ready(d)).map(d=>d.id);},
 offers(){return[];},learn(){return false;},
 active(id){const d=this.definitions.find(d=>d.id===id);return !!d&&this.ready(d);},
 proc(id,cooldown,channel='primary'){const key=channel+':'+id;if(!this.active(id)||(s.linkCooldowns[key]||0)>0)return false;s.linkCooldowns[key]=cooldown;const d=this.definitions.find(d=>d.id===id);startCast(s.p);s.linkTriggers[id]=(s.linkTriggers[id]||0)+1;if(s.t-(s.lastLinkLabel??-10)>=2){floating(s.p.x,s.p.y-75,d.name,'#bce8e3');s.lastLinkLabel=s.t;}return true;},
 lightning(p,count,damage){const targets=Growth.enemies().filter(e=>e.hp>0&&Math.hypot(e.x-p.x,e.y-24-p.y)<170).sort((a,b)=>Math.hypot(a.x-p.x,a.y-24-p.y)-Math.hypot(b.x-p.x,b.y-24-p.y)).slice(0,count);for(const e of targets){s.fx.push({x:p.x,y:p.y,tx:e.x,ty:e.y-24,type:'chain',life:.35,max:.35});hit(e,damage);e.slow=1.5;}},
 onPrimary(z,damage){if(this.proc('wind_thunder',3))this.lightning(z,2,damage*.55);if(this.proc('clone_pursuit',4)){const partner=this.partners(this.definitions.find(d=>d.id==='clone_pursuit'))[0];for(const e of Growth.enemies().filter(e=>dist(e,s.p)<250).slice(0,2))Growth.echo(partner.profile.sprite,e,damage*.2);}if(this.proc('water_thunder',4)){Growth.zone({...z,damage:damage*.15,element:'water',duration:.8,radius:75});this.lightning(z,2,damage*.4);}},
 onImpact(q){if(q.owner!==s.p)return;if((q.element==='fire'||q.element==='wind'&&Growth.main().family==='temari')&&this.proc('wind_fire',5))Growth.zone({x:q.x,y:q.y,damage:q.damage*.4,element:'wind',duration:1,radius:100});if((q.element==='clay'||q.element==='sand'&&Growth.main().family==='gaara')&&this.proc('sand_blast',5)){for(const e of Growth.enemies())if(dist(e,q)<115)e.slow=2;Growth.queue({type:'zone',time:.45,x:q.x,y:q.y,damage:q.damage*.65,element:'impact',duration:.8,radius:110});}},
 onUltimate(a,u,e){if(a!==s.p)return[];const applied=[];for(const d of this.definitions)if(d.slots.includes('ultimate')&&this.proc(d.id,.5,'ultimate')){const partner=this.partners(d)[0];s.pendingSkills.push({time:.3,x:e.x,y:e.y-24,damage:70,linkId:d.id,partner:partner.profile});applied.push(partner.profile);}return [...new Map(applied.map(u=>[u.key,u])).values()];},
 ultimateBurst(z){if(z.linkId==='clone_pursuit'){for(const e of Growth.enemies().filter(e=>Math.hypot(e.x-z.x,e.y-24-z.y)<220).slice(0,2))Growth.echo(z.partner.sprite,e,z.damage*.3);return;}if(['wind_thunder','water_thunder'].includes(z.linkId)){if(z.linkId==='water_thunder')Growth.zone({...z,element:'water',damage:24,duration:1.2,radius:95});this.lightning(z,2,z.damage);return;}if(z.linkId==='sand_aid'){s.p.hp=Math.min(mainMaxHp(),s.p.hp+mainMaxHp()*.12);s.p.shield=mainMaxHp()*.08;s.p.shieldTime=3;return;}Growth.zone({...z,element:z.linkId==='wind_fire'?'wind':'impact',duration:1,radius:110});},
 update(dt){this.sync();for(const key in s.linkCooldowns)s.linkCooldowns[key]=Math.max(0,s.linkCooldowns[key]-dt);for(const a of TeamSeven.living()){a.shieldTime=Math.max(0,(a.shieldTime||0)-dt);if(!a.shieldTime)a.shield=0;}if(s.p.hp<mainMaxHp()*.6&&this.proc('sand_aid',12)){s.p.hp=Math.min(mainMaxHp(),s.p.hp+mainMaxHp()*.12);s.p.shield=mainMaxHp()*.08;s.p.shieldTime=3;effect(s.p.x,s.p.y-20,70,'heal',.7);}},
 traits(slot){return this.definitions.filter(d=>d.slots.includes(slot)&&this.ready(d));},
 traitMarkup(slot){return this.traits(slot).map(d=>`<span class="skill-link-trait">附加：${d.name} · ${this.partners(d)[0].name}</span>`).join('');},
 recruitMarkup(u,mainKey=s.mainKey){const list=this.forRecruit(u,mainKey);return list.length?list.map(d=>`<span class="recruit-link-tag">连携：${d.name} → ${d.slots.includes('primary')?'技能一':'主技能'}／奥义</span>`).join(''):'<span class="recruit-no-link">当前主控无匹配连携</span>';},
 async debugPreset(id){if(!DebugMode.enabled)return;const d=this.definitions.find(d=>d.id===id);if(!d)return;const main=RecruitRun.mainOptions().find(u=>d.families.some(g=>g.includes(u.family)));if(!main){toast('此组合的主控形态尚未开放');return;}const partner=RecruitRun.units.find(u=>this.forRecruit(u,main.key).some(x=>x.id===id));try{await Promise.all([SkillArt.ensure(main.key),partner?SkillArt.ensure(partner.key):Promise.resolve()]);}catch{toast('连携素材加载失败，请重试');return;}const previous=RecruitRun.mainKey;RecruitRun.mainKey=main.key;reset(false);RecruitRun.mainKey=previous;s.debugUsed=true;s.excludedNatures=[];const u=RecruitRun.units.find(u=>this.forRecruit(u,s.mainKey).some(x=>x.id===id));if(u)RecruitRun.add(u.key);this.sync();toast('自动连携已附加 · '+d.name);},
 panel(){this.sync();return `<section class="squad-link-panel"><h3>主控技能附加连携 ${s.synergies.length}</h3>${this.definitions.filter(d=>d.families.some(g=>g.includes(Growth.main().family))).map(d=>`<article><b>${d.name}</b><span>${this.ready(d)?'招募已附加 · 支援倒地仍生效':'招募对应支援后自动附加'}</span><small>${d.label} · ${d.text}</small></article>`).join('')}<p>仅主控与支援连携，支援之间不触发。</p></section>`;}
};

;
/* ultimate-cue.js */
/* Non-blocking portrait cut-in. Positions are measured below the battle HUD. */
window.UltimateCue={
 current:null,queue:[],
 art(u){return 'assets/cue/'+u.art+'.webp';},
 preload(u){const img=new Image();img.src=this.art(u);},
 clear(){this.current=null;this.queue=[];document.getElementById('ultimateCue')?.remove();},
 show(actor,u,partners=[]){const item={unit:u,partners,name:SkillLab.ultimates[u.key]||'奥义',level:actor===s.p?s.level:actor.level||s.level,role:actor===s.p?'主控':'支援',remaining:1.6};if(!this.current){this.current=item;this.render();}else if(this.queue.length<16)this.queue.push(item);},
 render(){if(!this.current)return;document.getElementById('ultimateCue')?.remove();const c=this.current,el=document.createElement('aside');el.id='ultimateCue';el.className='ultimate-cue';el.setAttribute('role','status');el.setAttribute('aria-live','polite');el.dataset.caster=c.unit.key;const units=[c.unit,...c.partners];el.classList.toggle('linked',c.partners.length>0);el.innerHTML=`<div class="cue-portraits">${units.map(u=>`<div class="cue-person"><img data-cue-unit="${u.key}" src="${this.art(u)}" alt="${HubUI.esc(u.name)}立绘"></div>`).join('')}</div><div class="cue-copy"><strong>${HubUI.esc(c.name)}</strong></div>`;$('shell').appendChild(el);this.position();},
 position(){const el=document.getElementById('ultimateCue');if(!el)return;if(s.boss&&$('bossHud').hidden)updateHud();const shell=$('shell').getBoundingClientRect(),hud=document.querySelector('.hud').getBoundingClientRect(),top=Math.max(104,hud.bottom-shell.top+8);el.style.top=Math.round(top)+'px';el.style.height=Math.max(64,Math.min(90,shell.height-top-70))+'px';},
 update(real){const el=document.getElementById('ultimateCue');if(!this.current)return;if(el)el.hidden=state!=='play';if(state!=='play')return;this.current.remaining-=Math.min(.1,real);this.position();if(el)el.style.opacity=String(Math.min(1,this.current.remaining/.18));if(this.current.remaining<=0){this.current=this.queue.shift()||null;if(this.current)this.render();else el?.remove();}}
};

;
/* build-inspect.js */
/* Inspect owned skills without replacing or rerolling the upgrade choices. */
window.BuildInspect={
 opener:null,
 init(){document.getElementById('modal').addEventListener('click',e=>{const slot=e.target.closest('[data-build-slot]');if(slot&&state==='upgrade'){e.preventDefault();this.open(slot.dataset.buildSlot,slot);}});document.addEventListener('keydown',e=>{if(!this.isOpen())return;if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();this.close();}if(e.key==='Tab'){const b=[...document.querySelectorAll('#skillInspect button')],first=b[0],last=b.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}},true);},
 isOpen(){return !!document.getElementById('skillInspect');},
 data(id){const u=Growth.main(),kit=SkillLab.kit(u),entry=kind=>kit.find(k=>k.kind===kind),teamDamage=s.teamPower*10+s.reserve*2;const detail=(kind,rank)=>{const k=entry(kind);return {name:k?.name||'角色技能',rank,text:k?.effect||'技能详情尚未整理。',lines:[...(SkillLab.sourceText(k)?[SkillLab.sourceText(k)]:[]),'主控技能可以升级；升级保留角色形态与招式名称。','支援角色等级与主控同步，忍术与奥义固定Lv.1，不能升级。'],slot:kind};};const common={name:s.commonSkill?.name||'通用技能',rank:s.commonSkill?'Lv.'+(s.commonSkill.level||1):'未携带',text:s.commonSkill?.description||'本局尚未携带通用技能，这个固定槽位保留为空。',lines:[],slot:null};return ({
 'main-passive':{...detail('passive','主控固有被动'),lines:[`忍术精研：主控伤害 +${s.power*12}%`,`坚韧忍道：主控减伤 ${s.guard*6}%`,`主控额外恢复：每秒 ${s.regen*4} 生命`,`经验拾取范围增加：${s.magnet*25}%`,'角色等级同步不会提高支援的被动技能等级。']},
 'main-skill1':detail('primary',`Lv.${s.ras} / 5`),
 'main-skill2':detail('secondary',`Lv.${s.clone} / 5`),
 'main-ultimate':detail('ultimate',`Lv.${s.ultimate} / 3`),
 'common-active':common,
 'passive-cooldown':{name:'查克拉共鸣',rank:s.haste?'Lv.'+s.haste:'未学习',text:`全队忍术冷却缩短 ${s.haste*7}%。`,lines:['影响主控和支援的忍术、奥义冷却。','每次强化增加7%，上限4级。'],slot:null},
 'passive-damage':{name:'协同增伤',rank:teamDamage?'已生效':'未学习',text:`当前全队伤害增加 ${teamDamage}%。`,lines:[`协同作战 Lv.${s.teamPower}：+${s.teamPower*10}%`,`持续修行 Lv.${s.reserve}：+${s.reserve*2}%`],slot:null},
 'passive-vitality':{name:'生命防护',rank:s.teamVital+s.reserveGuard?'已生效':'未学习',text:`全队最大生命增加 ${s.teamVital*12}%。`,lines:[`生命加护 Lv.${s.teamVital}`,`坚守阵线 Lv.${s.reserveGuard}：额外减伤约 ${(100-100/(1+s.reserveGuard*.02)).toFixed(1)}%`],slot:null},
 'passive-recovery':{name:'生生不息',rank:s.reserveRegen?'Lv.'+s.reserveRegen:'未学习',text:`存活队员每秒恢复 ${s.reserveRegen} 点生命。`,lines:['按战斗时间结算，暂停与升级选择期间冻结。'],slot:null},
 'summon':{name:s.summonSkill?.name||'通灵兽技能',rank:s.summonSkill?'Lv.'+(s.summonSkill.level||1):'未携带',text:s.summonSkill?.description||'本局尚未携带通灵兽技能，这个固定槽位保留为空。',lines:[],slot:null}
 })[id];},
 links(slot){if(!slot)return '<p>这是通用加成或携带槽，不单独形成角色连携。</p>';const list=SquadLinks.definitions.filter(d=>d.slots.includes(slot)&&d.families.some(g=>g.includes(Growth.main().family)));if(!list.length)return '<p>此技能暂无可附加的角色连携。</p>';return list.map(d=>{const partners=SquadLinks.partners(d),missing=d.families.find(g=>!g.includes(Growth.main().family))||[];return `<article class="inspect-link"><b>${d.name}</b><span>${partners.length?'已附加 · '+partners[0].name+(partners[0].down>0?'（倒地仍生效）':''):'未附加 · 需要支援 '+missing.map(k=>SHINOBI_CHARACTERS.find(c=>c.id===k)?.name||k).join(' 或 ')}</span><p>${d.text}</p></article>`}).join('');},
 open(id,opener){if(state!=='upgrade'||this.isOpen())return;const d=this.data(id);if(!d)return;this.opener=opener;const overlay=document.createElement('div');overlay.id='skillInspect';overlay.className='skill-inspect-overlay';overlay.innerHTML=`<section class="skill-inspect-panel" role="dialog" aria-modal="true" aria-labelledby="inspectTitle"><header><div><small>技能详情 · ${HubUI.esc(d.rank)}</small><h2 id="inspectTitle">${HubUI.esc(d.name)}</h2></div><button id="inspectClose" aria-label="关闭技能详情">×</button></header><div class="skill-inspect-scroll"><p class="inspect-description">${HubUI.esc(d.text)}</p>${d.lines.map(x=>`<p class="inspect-stat">${HubUI.esc(x)}</p>`).join('')}<h3>连携情况</h3>${this.links(d.slot)}<p class="inspect-note">联动自动附加在主控技能上，无需另选。参与者倒地仍生效，支援之间不触发。支援倒地5秒复活；角色等级同步，支援技能与奥义保持Lv.1。</p></div><footer><button id="inspectReturn">返回技能选择</button></footer></section>`;document.querySelector('.upgrade-layout').inert=true;document.getElementById('modal').appendChild(overlay);overlay.onclick=e=>{if(e.target===overlay)this.close()};document.getElementById('inspectClose').onclick=()=>this.close();document.getElementById('inspectReturn').onclick=()=>this.close();document.getElementById('inspectClose').focus({preventScroll:true});},
 close(focus=true){document.getElementById('skillInspect')?.remove();const layout=document.querySelector('.upgrade-layout');if(layout)layout.inert=false;if(focus&&this.opener?.isConnected)this.opener.focus({preventScroll:true});this.opener=null;}
};

;
/* skill-art.js */
/* Source-frame playback. Readiness is per exact form, never per character family. */
window.SkillArt={
 registry:{},recent:[],cache:new Map(),loads:new Map(),active:[],metrics:{casts:0,pulses:0},
 init(){
  for(const [key,profile] of Object.entries(window.SKILL_KITS||{})){
   const art=window.SKILL_ART_DATA?.[key];
   const ready=!!art?.actor&&['primary','secondary','ultimate'].every(k=>art.skills[k]?.frames>0&&profile.kit[k]);
   this.registry[key]={...profile,key,unitKey:key,ready};
  }
  RecruitRun.units=Object.values(this.registry).filter(u=>u.ready).sort((a,b)=>Number(!!b.original)-Number(!!a.original));
  if(!RecruitRun.units.some(u=>u.key===RecruitRun.mainKey))RecruitRun.mainKey='naruto_shippuden';
  for(const u of RecruitRun.units){forms[u.sprite]={name:u.name,tag:RecruitRun.natureText(u)+' · 专属忍术'};SkillLab.ultimates[u.key]=u.kit.ultimate.name;}
 },
 get readyOfficialIds(){return new Set(Object.values(this.registry).filter(u=>u.ready&&u.releaseComplete!==false).map(u=>u.officialId));},
 isReady(key){return this.registry[key]?.ready===true;},
 loaded(key){return this.cache.has(window.SKILL_ART_DATA?.[key]?.actor.file)&&['primary','secondary','ultimate'].every(k=>this.cache.has(window.SKILL_ART_DATA[key].skills[k].file)&&(!window.SKILL_ART_DATA[key].skills[k].caster||this.cache.has(window.SKILL_ART_DATA[key].skills[k].caster.file)));},
 image(url){if(this.cache.has(url))return Promise.resolve(this.cache.get(url));if(this.loads.has(url))return this.loads.get(url);const p=new Promise((resolve,reject)=>{const im=new Image(),t=setTimeout(()=>reject(Error('技能素材加载超时')),15000);im.onload=()=>{clearTimeout(t);this.cache.set(url,im);resolve(im);};im.onerror=()=>{clearTimeout(t);reject(Error('技能素材加载失败'));};im.src=url;}).finally(()=>this.loads.delete(url));this.loads.set(url,p);return p;},
 trim(key){this.recent=[key,...this.recent.filter(k=>k!==key)].slice(0,6);const keep=new Set([...this.recent,RecruitRun.mainKey,...(typeof s!=='undefined'&&s?[s.mainKey,...s.allies.map(a=>a.profile.key)]:[]),...this.active.map(q=>q.unit.key)]);for(const [k,d]of Object.entries(window.SKILL_ART_DATA))if(!keep.has(k))for(const c of Object.values(d.skills)){this.cache.delete(c.file);if(c.impact)this.cache.delete(c.impact.file);if(c.caster)this.cache.delete(c.caster.file);}},
 async ensure(key){if(!this.isReady(key))throw Error('此形态尚未完成');const d=window.SKILL_ART_DATA[key];await Promise.all([this.image(d.actor.file),...Object.values(d.skills).flatMap(x=>[this.image(x.file),...(x.impact?[this.image(x.impact.file)]:[]),...(x.caster?[this.image(x.caster.file)]:[])])]);const u=this.registry[key],a=d.actor;images[u.sprite]=this.cache.get(a.file);spriteMeta[u.sprite]={file:a.file,renderScale:a.scale,animations:Object.fromEntries(['idle','run','cast'].map(k=>[k,{row:a.rows[k],count:a.counts[k],ms:a.ms[k]}]))};this.trim(key);},
 portrait(u){return window.SKILL_ART_DATA?.[u?.key]?.portrait||'assets/'+(u?.sprite||'shippuden')+'-portrait.png';},
 icon(u,slot){return window.SKILL_ART_DATA?.[u?.key]?.skills[slot]?.icon||this.portrait(u);},
 clear(){for(const q of this.active)if(q.actor)q.actor.sourceMove=null;this.active=[];},
 busy(a){return this.active.some(q=>q.actor===a&&q.age>=0&&(q.composite?q.age<q.duration:q.age<(q.clip.caster?.duration||0)));},
 blocksMovement(a){return this.active.some(q=>q.actor===a&&q.composite&&q.age>=0&&q.age<q.duration&&!q.clip.allowMovement);},
 reviewText(k){const v=k?.nameReview;if(!v)return '';if(v.status==='preview')return k.visualComplete?'动画已接入 · 正式术名待核':'源动作预览 · 术名/机制待核';return ({game_adaptation:'游戏化招式 · 原作能力改编',matched:'招式名称已核对',adapted:'已核对术名 · 像素玩法改编',preview:'演出待校正 · 当前名称为素材描述或局部招式',original:'本游戏原创被动',original_jutsu:'本游戏原创忍术'})[v.status]||'';},
 frame(q){const c=q.clip;if(c.frame_times_ms?.length===c.frames){const total=c.frame_times_ms.reduce((a,b)=>a+b,0);let t=Math.max(0,Math.min(1,q.age/q.duration))*total;for(let i=0;i<c.frames;i++){t-=c.frame_times_ms[i];if(t<0)return i;}return c.frames-1;}if(c.frames<=3)return Math.floor(q.age*c.fps)%c.frames;return Math.min(c.frames-1,Math.floor(Math.min(1,q.age/q.duration)*c.frames));},
 hidden(a){return this.active.some(q=>q.actor===a&&q.age>=0&&(q.composite?q.age<q.duration:q.age<(q.clip.caster?.duration||0))&&a.hp>0&&!(a.down>0)&&!(q.clip.emptyFrames||[]).includes(this.frame(q)));},
 cast(a,u,slot,level=1,e){
  if(state!=='play'||!this.isReady(u?.key)||!a||a.hp<=0||a.down>0||this.busy(a))return false;
  if(!this.loaded(u.key)){this.ensure(u.key).catch(()=>{});return false;}
  const kit=u.kit[slot],clip=window.SKILL_ART_DATA[u.key].skills[slot];if(!kit||!clip)return false;
  e=e?.hp>0?e:Growth.nearestEnemy(a,kit.range||400);
  if(!e||dist(a,e)>(kit.range||400))return false;
  const isMain=a===s.p,l=isMain?level:1,boost=isMain?1+(s.power||0)*.12:1,team=1+(s.teamPower||0)*.1+(s.reserve||0)*.02;
  const summon=kit.kind==='summon',melee=kit.kind==='melee',composite=clip.renderMode==='actor_composite';
  a.facing=e.x>=a.x?1:-1;startCast(a);
  const natural=clip.frame_times_ms?.reduce((a,b)=>a+b,0)/1000||clip.frames/clip.fps,duration=Math.max(kit.duration&&kit.kind!=='summon'?kit.duration:.45,Math.min(3.6,natural));
  const radius=(kit.radius||50)*(l>=2?1.25:1)*(slot==='ultimate'&&l>=3?1.15:1);
  let x=composite||summon||melee?a.x:e.x,y=composite||summon||melee?a.y:e.y;
  if(!composite&&melee)x+=a.facing*30;
  const q={actor:a,unit:u,slot,kit,clip,age:0,duration,x,y,damageX:e.x,damageY:e.y,fromX:a.x,fromY:a.y,target:e,facing:a.facing,composite,radius,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:(kit.damage||38)*(u.personal||1)*boost*team*(1+(l-1)*.16),level:l,travel:kit.kind==='projectile'&&!composite?.28:0};
  if(clip.damageOffset){q.damageX=a.x+a.facing*clip.damageOffset[0];q.damageY=a.y+clip.damageOffset[1];}
  if(composite){a.sourceMove=q;a.action.duration=duration;}if(isMain&&slot==='ultimate'&&l>=2)this.active.push({...q,age:-duration-.16,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:q.damage*.65});
  this.active.push(q);if(isMain&&l>=3&&slot!=='ultimate'&&!summon){this.active.push({...q,age:-duration-.16,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:q.damage*.6});if(l>=5)this.active.push({...q,age:-duration*2-.32,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:q.damage*.4});}if(this.active.length>32)this.active.shift();this.metrics.casts++;
  if(summon){
   if(isMain){updateClones(0,40*boost*team,TeamSeven.cooldown());}
   else if(s.supportClones.length+s.summons.length<8)s.supportClones.push({owner:a,x:a.x+a.facing*24,y:a.y+12,sprite:a.sprite,life:u.key==='kakashi'?5:8,atk:.25,facing:a.facing});
  }
  const center={x:e.x,y:e.y-24};
  if(isMain&&slot==='primary'){SquadLinks.onPrimary(center,q.damage);SquadLinks.onImpact({...center,owner:a,element:kit.element,damage:q.damage});}
  if(isMain&&slot==='secondary')SquadLinks.onImpact({...center,owner:a,element:kit.element,damage:q.damage});
  if(slot==='ultimate'){const links=SquadLinks.onUltimate(a,u,e);UltimateCue.show(a,u,links);if(isMain&&l>=3)a.hp=Math.min(mainMaxHp(),a.hp+mainMaxHp()*.08);}
  return true;
 },
 update(dt){
  for(const q of this.active){
   q.age+=dt;if(q.actor.hp<=0||q.actor.down>0){q.age=q.duration;continue;}
   if(q.age>=q.nextPulse&&q.age<q.damageEnd&&q.kit.kind!=='summon'){
    q.nextPulse+=.2;this.metrics.pulses++;
    const near=q.kit.kind==='melee'&&!q.clip.damageOffset,cx=near?q.actor.x+q.facing*30:q.damageX,cy=near?q.actor.y-24:q.damageY-24;
    const totalPulses=Math.max(1,Math.ceil((q.damageEnd-q.duration*(q.clip.damageWindow?.[0]??.15))/.2));
    for(const e of skillTargets())if(e.hp>0&&Math.hypot(e.x-cx,e.y-24-cy)<q.radius+(e.r||12)){
     let damage=q.kit.damageMode==='periodic'?q.damage:q.damage/totalPulses;
     if(q.unit.key==='shikamaru'&&(e.skillStun>0||e.slow>0))damage*=1.15;
     if(q.unit.key==='hidan'&&(e.bloodMark||0)>s.t)damage*=1.15;
     hit(e,damage);
     if(q.unit.batch47){const duration=(q.kit.statusDuration||1)*(q.unit.controlDuration||1);
      if(q.kit.status==='root'){if(e!==s.boss)e.skillStun=Math.max(e.skillStun||0,duration);e.slow=Math.max(e.slow||0,duration);}
      if(q.kit.status==='charm'){if(e===s.boss)e.slow=Math.max(e.slow||0,duration);else{e.originalCharm=Math.max(e.originalCharm||0,duration);e.originalCharmAtk=e.originalCharmAtk??.3;e.originalCharmDamage=q.damage*.08;}}
      if(q.kit.status==='blood')e.bloodMark=s.t+duration;
     }
     if(q.kit.status==='slow')e.slow=Math.max(e.slow||0,q.unit.batch47?q.kit.statusDuration||2:2);
     if(q.kit.status==='burn')e.skillBurn={left:2,next:.5,damage:q.damage*.04};
     if(q.kit.status==='stun'&&e!==s.boss)e.skillStun=Math.max(e.skillStun||0,.35);
     if(q.level>=4&&e!==s.boss&&q.kit.kind==='melee')s.world.move(e,q.facing*5,0,e.r||12,s.arena);
    }
   }
   if(q.age>=q.duration&&q.actor.sourceMove===q)q.actor.sourceMove=null;
  }
  this.active=this.active.filter(q=>q.age<q.duration);
  for(const e of Growth.enemies()){
   if(e.skillStun>0)e.skillStun=Math.max(0,e.skillStun-dt);
   const b=e.skillBurn;if(!b)continue;b.left-=dt;b.next-=dt;if(b.left<=0)e.skillBurn=null;else if(b.next<=0){hit(e,b.damage);b.next+=.5;}
  }
 },
 lift(e){const q=this.active.find(q=>q.unit.key==='lee'&&q.slot==='ultimate'&&q.target===e&&q.age>=0);return q?-Math.sin(Math.min(1,q.age/q.duration)*Math.PI)*58:0;},
 survive(a){const u=a===s.p?Growth.main():a.profile;if(u?.key!=='hidan'||a.hp>0||s.t-(a.lastImmortal??-Infinity)<24)return false;a.lastImmortal=s.t;a.hp=1;a.inv=1.5;floating(a.x,a.y-58,'不死之身','#efb5c1');effect(a.x,a.y-20,34,'smoke',.4);return true;},
 draw(entities){for(const q of this.active){entities.push({y:q.composite?q.actor.y:q.y,draw:()=>this.drawClip(q)});if(q.clip.caster&&q.age>=0&&q.age<q.clip.caster.duration)entities.push({y:q.actor.y,draw:()=>this.drawCaster(q)});}},
 drawCaster(q){if(q.actor.hp<=0||q.actor.down>0)return;const c=q.clip.caster;this.drawClip({...q,clip:c,composite:true,x:q.actor.x,y:q.actor.y,duration:c.duration,travel:0});},
 drawClip(q){if(q.age<0)return;const c=q.clip,im=this.cache.get(c.file);if(!im)return;const [w,h]=c.cell,[ax,ay]=c.anchor;let x=(q.composite?q.actor.x:q.x)+(c.offset?.[0]||0),y=(q.composite?q.actor.y:q.y)+(c.offset?.[1]||0);
  if(q.travel&&q.age<q.travel){const t=q.age/q.travel;x=q.fromX+(q.x-q.fromX)*t;y=q.fromY+(q.y-q.fromY)*t;}
  const progress=Math.min(1,q.age/q.duration),frame=this.frame(q),scale=c.renderScale||1;
  if(q.unit.key==='lee'&&q.slot==='ultimate'&&q.clip.impact&&progress>.62){const impact=q.clip.impact,hitIm=this.cache.get(impact.file);if(hitIm){const [iw,ih]=impact.cell,i=Math.min(impact.frames-1,Math.floor((progress-.62)/.38*impact.frames));ctx.save();ctx.globalAlpha=Math.min(1,(1-progress)/.15);ctx.drawImage(hitIm,i*iw,0,iw,ih,q.target.x-impact.anchor[0],q.target.y-impact.anchor[1],iw,ih);ctx.restore();}}
  ctx.save();ctx.imageSmoothingEnabled=false;ctx.translate(Math.round(x),Math.round(y));if(q.facing<0)ctx.scale(-1,1);ctx.globalAlpha=q.composite?1:Math.max(0,Math.min(1,q.age/.09,(q.duration-q.age)/.18));
  const columns=c.columns||c.frames;ctx.drawImage(im,(frame%columns)*w,Math.floor(frame/columns)*h,w,h,Math.round(-ax*scale),Math.round(-ay*scale),Math.round(w*scale),Math.round(h*scale));ctx.restore();
 },
 description(slot,l){const u=Growth.main(),k=u.kit[slot];if(!k)return '';if(k.kind==='summon')return k.text+' ['+this.reviewText(k)+']'+` 当前${Growth.cloneCount()}个独立分身；近身忍术范围${s.clone>=5?52:s.clone>=3?44:32}；各自索敌与攻击。`;return k.text+' ['+this.reviewText(k)+']'+` 当前 Lv.${l}：范围×${l>=2?'1.25':'1'}，威力 +${Math.round((l-1)*16)}%${l>=3&&slot!=='ultimate'&&k.kind!=='summon'?'；追加'+(l>=5?'两次':'一次')+'追击':''}${l>=4&&k.kind==='melee'?'；命中击退杂兵':''}${slot==='ultimate'&&l>=2?'；追加一次奥义追击':''}${slot==='ultimate'&&l>=3?'；释放恢复自身8%生命':''}。`;}
};

;
/* original-ninja.js */
/* Original fan character. Independent caster frames, VFX and replacement-form state. */
(()=>{
const KEY='original_hiri',BASE='assets/original-hiri/';
const original={status:'original_jutsu',note:'原创角色与原创招式；美术为已确认生成素材，不冒称原作或BVN素材。'};
window.SKILL_KITS[KEY]={key:KEY,family:'original_hiri',sprite:'original_hiri',art:'original-hiri',name:'宇智波·绯璃',attribute:'阴',hp:680,initialUltimateCd:6,personal:1.08,original:true,releaseComplete:false,nameReviewPending:0,passive:'绯瞳余焰：忍术伤害提高8%；花焰命中魅惑目标追加一次莲火。',skills:{'幻术·绯瞳花狱':1,'火遁·绯莲花':1},attributeNote:'原创角色的游戏单属性定位。',kit:{
 passive:{name:'绯瞳余焰',text:'忍术伤害提高8%；花焰首次命中被魅惑的敌人，追加一次小范围莲火。',effects:{personal:1.08},nameReview:{status:'original',note:'本游戏原创被动。'}},
 primary:{name:'幻术·绯瞳花狱',text:'以万花筒发动大范围幻术，持续造成范围伤害并魅惑杂兵2秒，使其攻击其他敌人；Boss只受2秒迷乱减速。',kind:'area',element:'yin',range:420,radius:160,damage:100,cd:8,duration:1.45,nameReview:original,sourceText:'原创抬指施幻术动作与独立粉色瞳术特效。'},
 secondary:{name:'火遁·绯莲花',text:'结印吐出花焰，在敌群中绽放1.2秒，每0.2秒造成范围伤害并附加点燃；对魅惑敌人触发莲火。',kind:'projectile',element:'fire',range:400,radius:70,damage:27,cd:4.8,duration:1.85,nameReview:original,sourceText:'原创结印吐火动作；花焰从火种、绽放到熄灭独立播放。'},
 ultimate:{name:'须佐能乎·绯天舞',text:'召出半透明樱花神女须佐。本体隐藏，须佐随玩家移动，6秒内自动挥刀攻击；魅惑与花焰保持冷却并照常释放。',kind:'avatar',element:'yin',range:480,radius:155,damage:155,cd:28,duration:7.4,nameReview:original,sourceText:'原创木花咲耶姬意象；人面甲胄羽衣、花瓣翼，默认65%不透明度。'}
}};
window.SKILL_ART_DATA[KEY]={portrait:BASE+'portrait.webp',actor:{file:BASE+'actor.png',cell:[96,96],columns:8,anchor:[48,84],scale:1,rows:{idle:0,run:1,cast:4},counts:{idle:8,run:8,cast:8},ms:{idle:125,run:83,cast:75}},skills:Object.fromEntries([['primary',192,8],['secondary',128,8],['ultimate',256,16]].map(([slot,size,frames])=>[slot,{name:window.SKILL_KITS[KEY].kit[slot].name,file:BASE+slot+(slot==='ultimate'?'.webp':'.png'),icon:BASE+slot+'-icon.png',cell:[size,size],anchor:[size/2,size*.88],frames,fps:10,renderMode:'original_effect'}]))};
window.OriginalNinja={
 key:KEY,forms:new Map(),effects:[],metrics:{casts:{primary:0,secondary:0,ultimate:0},slashes:0,pulses:0,charms:0,combos:0},
 is(a){return !!a&&(a.profile?.key===KEY||a===s?.p&&s.mainKey===KEY);},
 avatar(a){return this.forms.get(a)||null;},
 visible(a){const q=this.avatar(a);return !!q&&q.age>=.4&&q.age<q.duration;},
 clear(){this.forms.clear();this.effects=[];},
 level(a,slot){return a===s.p?(slot==='primary'?s.ras:slot==='secondary'?s.clone:s.ultimate):1;},
 power(a,l){return (1.08)*(1+(a===s.p?s.power:0)*.12)*(1+s.teamPower*.1+s.reserve*.02)*(1+(l-1)*.16);},
 cast(a,u,slot,l,e){
  if(state!=='play'||a.hp<=0||a.down>0||!SkillArt.loaded(KEY))return false;
  if(slot==='ultimate'&&this.avatar(a))return false;
  if(!this.avatar(a)&&a.action?.originalSlot&&a.action.age<a.action.duration)return false;
  const k=u.kit[slot];if(!k)return false;e=e?.hp>0?e:Growth.nearestEnemy(a,k.range);if(!e||dist(a,e)>k.range)return false;
  l=this.level(a,slot);a.facing=e.x>=a.x?1:-1;
  if(!this.avatar(a))a.action={name:'cast',age:0,duration:slot==='ultimate'?.58:.6,originalSlot:slot};
  const scale=this.power(a,l),radius=k.radius*(l>=2?1.25:1);
  if(slot==='ultimate'){
   this.forms.set(a,{actor:a,unit:u,age:0,duration:7.4+(l>=3?2:0),damage:k.damage*scale,radius,slashAge:9,slashDue:false,nextSlash:.05,slashFacing:a.facing});
   const links=SquadLinks.onUltimate(a,u,e);UltimateCue.show(a,u,links);
  }else{
   const flower=slot==='secondary',q={actor:a,unit:u,slot,age:0,duration:flower?1.85:1.45,x:flower?e.x:a.x,y:flower?e.y-24:a.y-24,fromX:a.x+a.facing*18,fromY:a.y-(this.visible(a)?90:28),radius,damage:k.damage*scale,level:l,nextPulse:flower?.42:.25,charmApplied:false,comboTargets:new Set()};
   this.effects.push(q);if(this.effects.length>30)this.effects.shift();
   if(a===s.p){SquadLinks.onImpact({owner:a,x:e.x,y:e.y-24,element:k.element,damage:q.damage});if(slot==='primary')SquadLinks.onPrimary({x:e.x,y:e.y-24},q.damage);}
  }
  this.metrics.casts[slot]++;SkillArt.metrics.casts++;return true;
 },
 // Base shuriken emission is suppressed only while this actor owns a live avatar.
 interceptBasic(a){return this.is(a)&&!!this.avatar(a);},
 charmed(e){return e!==s.boss&&(e.originalCharm||0)>0;},
 update(dt){
  for(const [a,q]of this.forms){q.age+=dt;q.slashAge+=dt;if(a.hp<=0||a.down>0||q.age>=q.duration){this.forms.delete(a);continue;}
   if(q.age>=.95&&q.age<q.duration-.5){q.nextSlash-=dt;const target=Growth.nearestEnemy(a,260);if(q.nextSlash<=0&&target){q.nextSlash=.9;q.slashAge=0;q.slashDue=true;q.slashFacing=target.x>=a.x?1:-1;}
    if(q.slashDue&&q.slashAge>=.18){q.slashDue=false;this.metrics.slashes++;for(const e of Growth.enemies())if(Math.hypot(e.x-a.x,e.y-a.y)<q.radius+(e.r||12)&&(e.x-a.x)*q.slashFacing>-45){hit(e,q.damage);SkillArt.metrics.pulses++;}}
   }
  }
  for(const q of this.effects){q.age+=dt;if(q.actor.hp<=0||q.actor.down>0){q.age=q.duration;continue;}
   if(q.age>=q.nextPulse&&q.age<(q.slot==='primary'?1.15:1.55)){
    q.nextPulse+=.2;this.metrics.pulses++;SkillArt.metrics.pulses++;
    for(const e of Growth.enemies())if(Math.hypot(e.x-q.x,e.y-24-q.y)<=q.radius+(e.r||12)){
     if(q.slot==='primary'){
      hit(e,q.damage/5);if(e===s.boss){if(!q.charmApplied)e.originalDaze=Math.max(e.originalDaze||0,2);}else if(!q.charmApplied){e.originalCharm=2+(q.level>=4?.6:0);e.originalCharmAtk=.3;e.originalCharmDamage=10*this.power(q.actor,q.level);this.metrics.charms++;}
     }else{
      const combo=this.charmed(e)&&!q.comboTargets.has(e);hit(e,q.damage);e.originalBurn={left:2.4,next:.6,damage:q.damage*.65};
      if(combo){q.comboTargets.add(e);this.metrics.combos++;for(const other of Growth.enemies())if(dist(e,other)<55)hit(other,q.damage*.8);effect(e.x,e.y-24,34,'fire',.35);}
     }
    }
    if(q.slot==='primary')q.charmApplied=true;
   }
  }
  this.effects=this.effects.filter(q=>q.age<q.duration);
  const enemies=Growth.enemies(),hostiles=enemies.filter(e=>!this.charmed(e));
  for(const e of enemies){
   e.originalDaze=Math.max(0,(e.originalDaze||0)-dt);
   if(e.originalCharm>0){e.originalCharm=Math.max(0,e.originalCharm-dt);e.originalCharmAtk=(e.originalCharmAtk||0)-dt;
    let target=null,best=260;for(const x of hostiles){const d=dist(x,e);if(x!==e&&d<best){target=x;best=d;}}
    if(target&&dist(e,target)<260){const d=dist(e,target)||1;if(d>28&&!(e.skillStun>0))s.world.move(e,(target.x-e.x)/d*(e.speed||40)*dt,(target.y-e.y)/d*(e.speed||40)*dt,e.r||12,s.arena);if(d<=40&&e.originalCharmAtk<=0){hit(target,e.originalCharmDamage||10);e.originalCharmAtk=.7;}}
   }
   const burn=e.originalBurn;if(burn){burn.left-=dt;burn.next-=dt;if(burn.left<=0)e.originalBurn=null;else if(burn.next<=0){hit(e,burn.damage);burn.next+=.6;}}
  }
 },
 drawActor(key,action,x,y,facing,alpha,phase,flash,actionAge){
  if(key!==KEY)return false;const im=images[key];if(!im)return true;
  const a=s.p&&Math.abs(s.p.x-x)<.01&&Math.abs(s.p.y-y)<.01&&s.mainKey===KEY?s.p:s.allies.find(a=>a.profile?.key===KEY&&Math.abs(a.x-x)<.01&&Math.abs(a.y-y)<.01);
  const slot=a?.action?.originalSlot;let row=action==='run'?1:action==='cast'?2:0;let n=Math.floor(s.t*(action==='run'?12:8)+phase)%8;
  if(action==='cast'){row=slot==='primary'?4:slot==='secondary'?5:slot==='ultimate'?6:2;n=Math.min(7,Math.floor((actionAge||0)/(a?.action?.duration||.34)*8));}
  ctx.save();ctx.imageSmoothingEnabled=false;ctx.globalAlpha=alpha;ctx.translate(Math.round(x),Math.round(y));if(facing<0)ctx.scale(-1,1);ctx.drawImage(im,n*96,row*96,96,96,-48,-84,96,96);ctx.restore();return true;
 },
 frame(q){if(q.slot==='primary'){if(q.age<.4)return Math.min(3,Math.floor(q.age*10));if(q.age<1.05)return 4+Math.floor((q.age-.4)*10)%2;return Math.min(7,6+Math.floor((q.age-1.05)/.4*2));}if(q.age<.3)return Math.floor(q.age/.15);if(q.age<.6)return 2+Math.min(1,Math.floor((q.age-.3)/.15));if(q.age<1.5)return 4+Math.floor((q.age-.6)*10)%2;return Math.min(7,6+Math.floor((q.age-1.5)/.35*2));},
 draw(entities){
  for(const q of this.effects)entities.push({y:q.y+24,draw:()=>{const c=SKILL_ART_DATA[KEY].skills[q.slot],im=SkillArt.cache.get(c.file);if(!im)return;const size=q.radius*2.15;let x=q.x,y=q.y;if(q.slot==='secondary'&&q.age<.3){const t=q.age/.3;x=q.fromX+(q.x-q.fromX)*t;y=q.fromY+(q.y-q.fromY)*t;}ctx.save();ctx.globalAlpha=(q.slot==='primary'?.68:.9)*Math.min(1,q.age/.08,(q.duration-q.age)/.13);ctx.imageSmoothingEnabled=false;ctx.drawImage(im,this.frame(q)*c.cell[0],0,...c.cell,x-size/2,y-size*.62,size,size);ctx.restore();}});
  for(const[a,q]of this.forms)if(this.visible(a))entities.push({y:a.y,draw:()=>{const c=SKILL_ART_DATA[KEY].skills.ultimate,im=SkillArt.cache.get(c.file);if(!im)return;let n;if(q.age<1)n=Math.min(3,Math.floor((q.age-.4)/.6*4));else if(q.age>=q.duration-.5)n=Math.min(15,12+Math.floor((q.age-q.duration+.5)/.5*4));else n=q.slashAge<.65?8+Math.min(3,Math.floor(q.slashAge/.65*4)):4+Math.floor(s.t*7)%4;const size=184;ctx.save();ctx.imageSmoothingEnabled=false;ctx.globalAlpha=.65;ctx.translate(Math.round(a.x),Math.round(a.y));if((q.slashAge<.65?q.slashFacing:a.facing)<0)ctx.scale(-1,1);ctx.drawImage(im,n*256,0,256,256,-size/2,-size*.91,size,size);ctx.restore();}});
  for(const e of Growth.enemies())if(this.charmed(e))entities.push({y:e.y,draw:()=>{ctx.save();ctx.strokeStyle='#ff99cf';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(e.x,e.y-4,16,6,0,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#ffc3e2';ctx.fillRect(e.x-2,e.y-54,4,4);ctx.restore();}});
 },
 initUI(){const b=document.getElementById('originalTry');if(!b)return;b.onclick=async()=>{if(!DebugMode.enabled||!assetsReady)return;b.disabled=true;try{HubUI.closeSheet(false);await SkillLab.open(KEY);}catch(error){console.warn('Original character load',error);toast('原创角色加载失败，请重试');}finally{b.disabled=!assetsReady;}};},
 readyUI(){const b=document.getElementById('originalTry');if(b)b.disabled=false;if(!this.queryConsumed&&DebugMode.enabled&&new URLSearchParams(location.search).get('try')===KEY){this.queryConsumed=true;setTimeout(()=>{if(state==='intro'&&assetsReady&&DebugMode.enabled)b?.click();},650);}},
 description(slot,l){const k=SKILL_KITS[KEY].kit[slot];if(slot==='ultimate')return k.text+` 当前Lv.${l}：须佐有效时间${l>=3?8:6}秒；挥刀伤害提高${Math.max(0,(l-1)*16)}%，${l>=2?'斩击范围扩大25%。':'斩击范围155。'}本体不叠加显示，进入形态不重置两项技能冷却。`;return k.text+` 当前Lv.${l}：威力提高${Math.max(0,(l-1)*16)}%，范围${Math.round(k.radius*(l>=2?1.25:1))}${slot==='primary'&&l>=4?'，魅惑延长至2.6秒':''}。`;}
};
const cast=SkillArt.cast,update=SkillArt.update,draw=SkillArt.draw,hidden=SkillArt.hidden,clear=SkillArt.clear,description=SkillArt.description;
SkillArt.cast=function(a,u,...rest){return u?.key===KEY?OriginalNinja.cast(a,u,...rest):cast.call(this,a,u,...rest)};
SkillArt.update=function(dt){update.call(this,dt);OriginalNinja.update(dt)};
SkillArt.draw=function(entities){draw.call(this,entities);OriginalNinja.draw(entities)};
SkillArt.hidden=function(a){return OriginalNinja.visible(a)||hidden.call(this,a)};
SkillArt.clear=function(){clear.call(this);OriginalNinja.clear()};
SkillArt.description=function(slot,l){return Growth.main().key===KEY?OriginalNinja.description(slot,l):description.call(this,slot,l)};
const openLab=SkillLab.open,updateLab=SkillLab.update;
SkillLab.open=async function(key){await openLab.call(this,key);if(key===KEY&&s.skillLab?.key===KEY){s.p.hp=mainMaxHp();s.skillLab.auto=true;s.skillLab.auto1=.15;s.skillLab.auto2=.95;s.skillLab.autoUltimate=2;const b=document.getElementById('labAuto');if(b){b.textContent='自动连放：开';b.setAttribute('aria-pressed','true');}this.refresh();}};
SkillLab.update=function(dt){updateLab.call(this,dt);const lab=s.skillLab;if(lab?.key===KEY&&lab.auto){lab.autoUltimate=(lab.autoUltimate??1.2)-dt;if(lab.autoUltimate<=0)lab.autoUltimate=this.cast('ultimate')?12:.2;}};
})();

/* A single tap moves the original-character rehearsal into the actual survival loop. */
(()=>{const base=SkillLab.renderDock;SkillLab.renderDock=function(){base.call(this);if(s.skillLab?.key!==OriginalNinja.key)return;const button=document.createElement('button');button.id='originalFieldTest';button.textContent='实战试炼 · 操控移动';button.onclick=()=>{RecruitRun.mainKey=OriginalNinja.key;reset(false);s.debugUsed=true;toast('原创绯璃实战 / 6秒后首次召唤须佐');};document.querySelector('#skillLabDock .lab-tools')?.prepend(button);};})();

(()=>{const base=SkillLab.refresh;SkillLab.refresh=function(){base.call(this);if(s.skillLab?.key!==OriginalNinja.key)return;const k=this.kit(Growth.main()).find(k=>k.kind===s.skillLab.selected);if(k&&document.getElementById('labDescription'))document.getElementById('labDescription').textContent=k.effect;const label=document.querySelector('#skillLabDock .lab-head small');if(label)label.textContent='原创角色 · 阴 · 独立技能试放';};})();

;
/* official-gallery.js */
/* Generated by prepare-official-gallery.py; official entries remain exact form records. */
window.OfficialGalleryEntries=[{"id":"new16","name":"宇智波无名（Nanashi）（无名）","nameJa":"うちはナナシ","family":"nanashi","familyName":"宇智波无名（Nanashi）","form":"无名","era":"game_original","icon":"assets/official-gallery/new16-icon.webp","art":"assets/official-gallery/new16.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new16","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new16/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new15","name":"漩涡博人（楔进化）","nameJa":"うずまきボルト(「楔」進化)","family":"boruto","familyName":"漩涡博人","form":"楔进化","era":"boruto","icon":"assets/official-gallery/new15-icon.webp","art":"assets/official-gallery/new15.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new15","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new15/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new14","name":"川木（楔进化）","nameJa":"カワキ(「楔」進化)","family":"kawaki","familyName":"川木","form":"楔进化","era":"boruto","icon":"assets/official-gallery/new14-icon.webp","art":"assets/official-gallery/new14.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new14","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new14/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new13","name":"夕日红","nameJa":"夕日紅","family":"kurenai","familyName":"夕日红","form":"基础形态","era":"naruto","icon":"assets/official-gallery/new13-icon.webp","art":"assets/official-gallery/new13.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new13","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new13/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new12","name":"大筒木一式","nameJa":"大筒木イッシキ","family":"isshiki","familyName":"大筒木一式","form":"基础形态","era":"boruto","icon":"assets/official-gallery/new12-icon.webp","art":"assets/official-gallery/new12.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new12","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new12/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new11","name":"大筒木羽衣","nameJa":"大筒木ハゴロモ","family":"hagoromo","familyName":"大筒木羽衣","form":"基础形态","era":"naruto","icon":"assets/official-gallery/new11-icon.webp","art":"assets/official-gallery/new11.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new11","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new11/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new10","name":"果心居士","nameJa":"果心居士","family":"kashin_koji","familyName":"果心居士","form":"基础形态","era":"boruto","icon":"assets/official-gallery/new10-icon.webp","art":"assets/official-gallery/new10.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new10","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new10/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new09","name":"博罗","nameJa":"ボロ","family":"boro","familyName":"博罗","form":"基础形态","era":"boruto","icon":"assets/official-gallery/new09-icon.webp","art":"assets/official-gallery/new09.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new09","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new09/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new08","name":"迪鲁达（Delta）","nameJa":"デルタ","family":"delta","familyName":"迪鲁达（Delta）","form":"基础形态","era":"boruto","icon":"assets/official-gallery/new08-icon.webp","art":"assets/official-gallery/new08.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new08","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new08/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new05","name":"漩涡博人（楔）","nameJa":"うずまきボルト「楔」","family":"boruto","familyName":"漩涡博人","form":"楔","era":"boruto","icon":"assets/official-gallery/new05-icon.webp","art":"assets/official-gallery/new05.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new05","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new05/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new06","name":"川木","nameJa":"カワキ","family":"kawaki","familyName":"川木","form":"基础形态","era":"boruto","icon":"assets/official-gallery/new06-icon.webp","art":"assets/official-gallery/new06.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new06","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new06/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new07","name":"慈弦","nameJa":"ジゲン","family":"jigen","familyName":"慈弦","form":"基础形态","era":"boruto","icon":"assets/official-gallery/new07-icon.webp","art":"assets/official-gallery/new07.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new07","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new07/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new04","name":"宇智波佐助（支撑之影）","nameJa":"うちはサスケ(支う影)","family":"sasuke","familyName":"宇智波佐助","form":"支撑之影","era":"boruto","icon":"assets/official-gallery/new04-icon.webp","art":"assets/official-gallery/new04.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new04","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new04/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new03","name":"漩涡鸣人（重粒子模式）","nameJa":"うずまきナルト(重粒子モード)","family":"naruto","familyName":"漩涡鸣人","form":"重粒子模式","era":"boruto","icon":"assets/official-gallery/new03-icon.webp","art":"assets/official-gallery/new03.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new03","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new03/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new01","name":"大筒木阿修罗","nameJa":"大筒木アシュラ","family":"ashura","familyName":"大筒木阿修罗","form":"基础形态","era":"naruto","icon":"assets/official-gallery/new01-icon.webp","art":"assets/official-gallery/new01.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new01","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new01/ill.png","mappings":[],"sharedArtIds":[]},{"id":"new02","name":"大筒木因陀罗","nameJa":"大筒木インドラ","family":"indra","familyName":"大筒木因陀罗","form":"基础形态","era":"naruto","icon":"assets/official-gallery/new02-icon.webp","art":"assets/official-gallery/new02.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=new02","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/new02/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara001","name":"漩涡鸣人（少年篇）","nameJa":"うずまきナルト(少年篇)","family":"naruto","familyName":"漩涡鸣人","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara001-icon.webp","art":"assets/official-gallery/chara001.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara001","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara001/ill.png","mappings":[{"family":"naruto","form":"young"}],"sharedArtIds":[]},{"id":"chara002","name":"漩涡鸣人（疾风传）","nameJa":"うずまきナルト","family":"naruto","familyName":"漩涡鸣人","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara002-icon.webp","art":"assets/official-gallery/chara002.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara002","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara002/ill.png","mappings":[{"family":"naruto","form":"shippuden"}],"sharedArtIds":[]},{"id":"chara003","name":"漩涡鸣人（仙人模式）","nameJa":"うずまきナルト(仙人モード)","family":"naruto","familyName":"漩涡鸣人","form":"仙人模式","era":"naruto","icon":"assets/official-gallery/chara003-icon.webp","art":"assets/official-gallery/chara003.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara003","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara003/ill.png","mappings":[{"family":"naruto","form":"sage"}],"sharedArtIds":[]},{"id":"chara126","name":"漩涡鸣人（仙法·超大玉螺旋多连丸）","nameJa":"うずまきナルト(仙法・超大玉螺旋多連丸)","family":"naruto","familyName":"漩涡鸣人","form":"仙法·超大玉螺旋多连丸","era":"naruto","icon":"assets/official-gallery/chara126-icon.webp","art":"assets/official-gallery/chara126.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara126","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara126/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara127","name":"漩涡鸣人（尾兽玉）","nameJa":"うずまきナルト(尾獣玉)","family":"naruto","familyName":"漩涡鸣人","form":"尾兽玉","era":"naruto","icon":"assets/official-gallery/chara127-icon.webp","art":"assets/official-gallery/chara127.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara127","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara127/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara004","name":"漩涡鸣人（九喇嘛连结模式）","nameJa":"うずまきナルト(九喇嘛リンクモード)","family":"naruto","familyName":"漩涡鸣人","form":"九喇嘛连结模式","era":"naruto","icon":"assets/official-gallery/chara004-icon.webp","art":"assets/official-gallery/chara004.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara004","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara004/ill.png","mappings":[{"family":"naruto","form":"kurama"}],"sharedArtIds":[]},{"id":"chara005","name":"漩涡鸣人（六道仙人模式）","nameJa":"うずまきナルト(六道仙人モード)","family":"naruto","familyName":"漩涡鸣人","form":"六道仙人模式","era":"naruto","icon":"assets/official-gallery/chara005-icon.webp","art":"assets/official-gallery/chara005.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara005","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara005/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara006","name":"漩涡鸣人（THE LAST）","nameJa":"うずまきナルト(THE LAST)","family":"naruto","familyName":"漩涡鸣人","form":"THE LAST","era":"naruto","icon":"assets/official-gallery/chara006-icon.webp","art":"assets/official-gallery/chara006.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara006","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara006/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara007","name":"漩涡鸣人（BORUTO）","nameJa":"うずまきナルト(BORUTO)","family":"naruto","familyName":"漩涡鸣人","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara007-icon.webp","art":"assets/official-gallery/chara007.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara007","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara007/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara008","name":"宇智波佐助（少年篇）","nameJa":"うちはサスケ(少年篇)","family":"sasuke","familyName":"宇智波佐助","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara008-icon.webp","art":"assets/official-gallery/chara008.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara008","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara008/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara128","name":"宇智波佐助（少年篇·后期服装）","nameJa":"うちはサスケ(少年篇・後期服)","family":"sasuke","familyName":"宇智波佐助","form":"少年篇·后期服装","era":"naruto","icon":"assets/official-gallery/chara128-icon.webp","art":"assets/official-gallery/chara128.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara128","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara128/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara009","name":"宇智波佐助（疾风传）","nameJa":"うちはサスケ","family":"sasuke","familyName":"宇智波佐助","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara009-icon.webp","art":"assets/official-gallery/chara009.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara009","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara009/ill.png","mappings":[{"family":"sasuke","form":"base"}],"sharedArtIds":[]},{"id":"chara010","name":"宇智波佐助（鹰）","nameJa":"うちはサスケ(”鷹”)","family":"sasuke","familyName":"宇智波佐助","form":"鹰","era":"naruto","icon":"assets/official-gallery/chara010-icon.webp","art":"assets/official-gallery/chara010.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara010","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara010/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara011","name":"宇智波佐助（永恒万花筒写轮眼）","nameJa":"うちはサスケ(永遠の万華鏡写輪眼)","family":"sasuke","familyName":"宇智波佐助","form":"永恒万花筒写轮眼","era":"naruto","icon":"assets/official-gallery/chara011-icon.webp","art":"assets/official-gallery/chara011.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara011","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara011/ill.png","mappings":[{"family":"sasuke","form":"susanoo"}],"sharedArtIds":[]},{"id":"chara012","name":"宇智波佐助（五影会谈）","nameJa":"うちはサスケ(五影会談)","family":"sasuke","familyName":"宇智波佐助","form":"五影会谈","era":"naruto","icon":"assets/official-gallery/chara012-icon.webp","art":"assets/official-gallery/chara012.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara012","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara012/ill.png","mappings":[{"family":"sasuke","form":"mangekyo"}],"sharedArtIds":[]},{"id":"chara013","name":"宇智波佐助（轮回写轮眼）","nameJa":"うちはサスケ(輪廻写輪眼)","family":"sasuke","familyName":"宇智波佐助","form":"轮回写轮眼","era":"naruto","icon":"assets/official-gallery/chara013-icon.webp","art":"assets/official-gallery/chara013.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara013","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara013/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara014","name":"宇智波佐助（THE LAST）","nameJa":"うちはサスケ(THE LAST)","family":"sasuke","familyName":"宇智波佐助","form":"THE LAST","era":"naruto","icon":"assets/official-gallery/chara014-icon.webp","art":"assets/official-gallery/chara014.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara014","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara014/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara015","name":"宇智波佐助（BORUTO）","nameJa":"うちはサスケ(BORUTO)","family":"sasuke","familyName":"宇智波佐助","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara015-icon.webp","art":"assets/official-gallery/chara015.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara015","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara015/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara016","name":"春野樱（少年篇）","nameJa":"春野サクラ(少年篇)","family":"sakura","familyName":"春野樱","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara016-icon.webp","art":"assets/official-gallery/chara016.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara016","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara016/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara017","name":"春野樱（疾风传）","nameJa":"春野サクラ","family":"sakura","familyName":"春野樱","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara017-icon.webp","art":"assets/official-gallery/chara017.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara017","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara017/ill.png","mappings":[{"family":"sakura","form":"base"}],"sharedArtIds":[]},{"id":"chara129","name":"宇智波樱（BORUTO）","nameJa":"うちはサクラ(BORUTO)","family":"sakura","familyName":"春野樱","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara129-icon.webp","art":"assets/official-gallery/chara129.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara129","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara129/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara018","name":"漩涡博人（基础形态）","nameJa":"うずまきボルト","family":"boruto","familyName":"漩涡博人","form":"基础形态","era":"boruto","icon":"assets/official-gallery/chara018-icon.webp","art":"assets/official-gallery/chara018.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara018","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara018/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara019","name":"漩涡博人（科学忍具）","nameJa":"うずまきボルト(科学忍具)","family":"boruto","familyName":"漩涡博人","form":"科学忍具","era":"boruto","icon":"assets/official-gallery/chara019-icon.webp","art":"assets/official-gallery/chara019.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara019","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara019/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara020","name":"漩涡博人（中忍考试）","nameJa":"うずまきボルト(中忍試験)","family":"boruto","familyName":"漩涡博人","form":"中忍考试","era":"boruto","icon":"assets/official-gallery/chara020-icon.webp","art":"assets/official-gallery/chara020.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara020","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara020/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara021","name":"宇智波佐良娜（基础形态）","nameJa":"うちはサラダ","family":"sarada","familyName":"宇智波佐良娜","form":"基础形态","era":"boruto","icon":"assets/official-gallery/chara021-icon.webp","art":"assets/official-gallery/chara021.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara021","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara021/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara022","name":"宇智波佐良娜（千鸟）","nameJa":"うちはサラダ(千鳥)","family":"sarada","familyName":"宇智波佐良娜","form":"千鸟","era":"boruto","icon":"assets/official-gallery/chara022-icon.webp","art":"assets/official-gallery/chara022.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara022","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara022/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara023","name":"巳月","nameJa":"ミツキ","family":"mitsuki","familyName":"巳月","form":"基础形态","era":"boruto","icon":"assets/official-gallery/chara023-icon.webp","art":"assets/official-gallery/chara023.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara023","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara023/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara024","name":"旗木卡卡西（疾风传）","nameJa":"はたけカカシ","family":"kakashi","familyName":"旗木卡卡西","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara024-icon.webp","art":"assets/official-gallery/chara024.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara024","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara024/ill.png","mappings":[{"family":"kakashi","form":"base"}],"sharedArtIds":[]},{"id":"chara130","name":"旗木卡卡西（忍界大战）","nameJa":"はたけカカシ(忍界大戦)","family":"kakashi","familyName":"旗木卡卡西","form":"忍界大战","era":"naruto","icon":"assets/official-gallery/chara130-icon.webp","art":"assets/official-gallery/chara130.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara130","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara130/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara131","name":"旗木卡卡西（双写轮眼）","nameJa":"はたけカカシ(両目写輪眼)","family":"kakashi","familyName":"旗木卡卡西","form":"双写轮眼","era":"naruto","icon":"assets/official-gallery/chara131-icon.webp","art":"assets/official-gallery/chara131.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara131","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara131/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara025","name":"李洛克（少年篇）","nameJa":"ロック・リー(少年篇)","family":"lee","familyName":"李洛克","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara025-icon.webp","art":"assets/official-gallery/chara025.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara025","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara025/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara026","name":"李洛克（疾风传）","nameJa":"ロック・リー","family":"lee","familyName":"李洛克","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara026-icon.webp","art":"assets/official-gallery/chara026.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara026","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara026/ill.png","mappings":[{"family":"lee","form":"base"}],"sharedArtIds":[]},{"id":"chara132","name":"李洛克（BORUTO）","nameJa":"ロック・リー(BORUTO)","family":"lee","familyName":"李洛克","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara132-icon.webp","art":"assets/official-gallery/chara132.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara132","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara132/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara027","name":"日向宁次（少年篇）","nameJa":"日向ネジ(少年篇)","family":"neji","familyName":"日向宁次","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara027-icon.webp","art":"assets/official-gallery/chara027.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara027","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara027/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara028","name":"日向宁次（疾风传）","nameJa":"日向ネジ","family":"neji","familyName":"日向宁次","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara028-icon.webp","art":"assets/official-gallery/chara028.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara028","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara028/ill.png","mappings":[{"family":"neji","form":"base"}],"sharedArtIds":[]},{"id":"chara029","name":"天天（少年篇）","nameJa":"テンテン(少年篇)","family":"tenten","familyName":"天天","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara029-icon.webp","art":"assets/official-gallery/chara029.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara029","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara029/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara030","name":"天天（疾风传）","nameJa":"テンテン","family":"tenten","familyName":"天天","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara030-icon.webp","art":"assets/official-gallery/chara030.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara030","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara030/ill.png","mappings":[{"family":"tenten","form":"base"}],"sharedArtIds":[]},{"id":"chara133","name":"天天（BORUTO）","nameJa":"テンテン(BORUTO)","family":"tenten","familyName":"天天","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara133-icon.webp","art":"assets/official-gallery/chara133.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara133","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara133/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara031","name":"山中井野（少年篇）","nameJa":"山中いの(少年篇)","family":"ino","familyName":"山中井野","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara031-icon.webp","art":"assets/official-gallery/chara031.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara031","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara031/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara032","name":"山中井野（疾风传）","nameJa":"山中いの","family":"ino","familyName":"山中井野","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara032-icon.webp","art":"assets/official-gallery/chara032.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara032","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara032/ill.png","mappings":[{"family":"ino","form":"base"}],"sharedArtIds":[]},{"id":"chara134","name":"山中井野（BORUTO）","nameJa":"山中いの(BORUTO)","family":"ino","familyName":"山中井野","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara134-icon.webp","art":"assets/official-gallery/chara134.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara134","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara134/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara033","name":"奈良鹿丸（少年篇）","nameJa":"奈良シカマル(少年篇)","family":"shikamaru","familyName":"奈良鹿丸","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara033-icon.webp","art":"assets/official-gallery/chara033.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara033","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara033/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara034","name":"奈良鹿丸（疾风传）","nameJa":"奈良シカマル","family":"shikamaru","familyName":"奈良鹿丸","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara034-icon.webp","art":"assets/official-gallery/chara034.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara034","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara034/ill.png","mappings":[{"family":"shikamaru","form":"base"}],"sharedArtIds":[]},{"id":"chara135","name":"奈良鹿丸（BORUTO）","nameJa":"奈良シカマル(BORUTO)","family":"shikamaru","familyName":"奈良鹿丸","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara135-icon.webp","art":"assets/official-gallery/chara135.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara135","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara135/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara035","name":"秋道丁次（少年篇）","nameJa":"秋道チョウジ(少年篇)","family":"choji","familyName":"秋道丁次","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara035-icon.webp","art":"assets/official-gallery/chara035.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara035","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara035/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara036","name":"秋道丁次（疾风传）","nameJa":"秋道チョウジ","family":"choji","familyName":"秋道丁次","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara036-icon.webp","art":"assets/official-gallery/chara036.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara036","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara036/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara136","name":"秋道丁次（BORUTO）","nameJa":"秋道チョウジ(BORUTO)","family":"choji","familyName":"秋道丁次","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara136-icon.webp","art":"assets/official-gallery/chara136.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara136","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara136/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara037","name":"日向雏田（少年篇）","nameJa":"日向ヒナタ(少年篇)","family":"hinata","familyName":"日向雏田","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara037-icon.webp","art":"assets/official-gallery/chara037.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara037","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara037/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara038","name":"日向雏田（疾风传）","nameJa":"日向ヒナタ","family":"hinata","familyName":"日向雏田","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara038-icon.webp","art":"assets/official-gallery/chara038.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara038","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara038/ill.png","mappings":[{"family":"hinata","form":"base"}],"sharedArtIds":[]},{"id":"chara137","name":"漩涡雏田（BORUTO）","nameJa":"うずまきヒナタ(BORUTO)","family":"hinata","familyName":"日向雏田","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara137-icon.webp","art":"assets/official-gallery/chara137.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara137","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara137/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara039","name":"日向花火","nameJa":"日向ハナビ","family":"hanabi","familyName":"日向花火","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara039-icon.webp","art":"assets/official-gallery/chara039.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara039","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara039/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara040","name":"犬冢牙（少年篇）","nameJa":"犬塚キバ(少年篇)","family":"kiba","familyName":"犬冢牙","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara040-icon.webp","art":"assets/official-gallery/chara040.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara040","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara040/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara041","name":"犬冢牙（疾风传）","nameJa":"犬塚キバ","family":"kiba","familyName":"犬冢牙","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara041-icon.webp","art":"assets/official-gallery/chara041.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara041","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara041/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara138","name":"犬冢牙（BORUTO）","nameJa":"犬塚キバ(BORUTO)","family":"kiba","familyName":"犬冢牙","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara138-icon.webp","art":"assets/official-gallery/chara138.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara138","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara138/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara042","name":"油女志乃（少年篇）","nameJa":"油女シノ(少年篇)","family":"shino","familyName":"油女志乃","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara042-icon.webp","art":"assets/official-gallery/chara042.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara042","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara042/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara043","name":"油女志乃（疾风传）","nameJa":"油女シノ","family":"shino","familyName":"油女志乃","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara043-icon.webp","art":"assets/official-gallery/chara043.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara043","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara043/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara139","name":"油女志乃（BORUTO）","nameJa":"油女シノ(BORUTO)","family":"shino","familyName":"油女志乃","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara139-icon.webp","art":"assets/official-gallery/chara139.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara139","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara139/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara044","name":"迈特凯（基础形态）","nameJa":"マイト・ガイ","family":"guy","familyName":"迈特凯","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara044-icon.webp","art":"assets/official-gallery/chara044.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara044","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara044/ill.png","mappings":[{"family":"guy","form":"base"}],"sharedArtIds":["chara140"]},{"id":"chara140","name":"迈特凯（忍界大战）","nameJa":"マイト・ガイ(忍界大戦)","family":"guy","familyName":"迈特凯","form":"忍界大战","era":"naruto","icon":"assets/official-gallery/chara140-icon.webp","art":"assets/official-gallery/chara140.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara140","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara140/ill.png","mappings":[],"sharedArtIds":["chara044"]},{"id":"chara045","name":"猿飞阿斯玛","nameJa":"猿飛アスマ","family":"asuma","familyName":"猿飞阿斯玛","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara045-icon.webp","art":"assets/official-gallery/chara045.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara045","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara045/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara046","name":"佐井（疾风传）","nameJa":"サイ","family":"sai","familyName":"佐井","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara046-icon.webp","art":"assets/official-gallery/chara046.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara046","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara046/ill.png","mappings":[{"family":"sai","form":"base"}],"sharedArtIds":[]},{"id":"chara141","name":"山中佐井（BORUTO）","nameJa":"山中サイ(BORUTO)","family":"sai","familyName":"佐井","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara141-icon.webp","art":"assets/official-gallery/chara141.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara141","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara141/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara047","name":"大和","nameJa":"ヤマト","family":"yamato","familyName":"大和","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara047-icon.webp","art":"assets/official-gallery/chara047.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara047","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara047/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara048","name":"海野伊鲁卡","nameJa":"うみのイルカ","family":"iruka","familyName":"海野伊鲁卡","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara048-icon.webp","art":"assets/official-gallery/chara048.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara048","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara048/ill.png","mappings":[{"family":"iruka","form":"base"}],"sharedArtIds":[]},{"id":"chara049","name":"自来也","nameJa":"自来也","family":"jiraiya","familyName":"自来也","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara049-icon.webp","art":"assets/official-gallery/chara049.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara049","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara049/ill.png","mappings":[{"family":"jiraiya","form":"base"}],"sharedArtIds":[]},{"id":"chara050","name":"纲手","nameJa":"綱手","family":"tsunade","familyName":"纲手","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara050-icon.webp","art":"assets/official-gallery/chara050.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara050","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara050/ill.png","mappings":[{"family":"tsunade","form":"base"}],"sharedArtIds":[]},{"id":"chara051","name":"千手柱间（初代火影）","nameJa":"初代火影千手柱間","family":"hashirama","familyName":"千手柱间","form":"初代火影","era":"naruto","icon":"assets/official-gallery/chara051-icon.webp","art":"assets/official-gallery/chara051.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara051","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara051/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara052","name":"志村团藏","nameJa":"志村ダンゾウ","family":"danzo","familyName":"志村团藏","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara052-icon.webp","art":"assets/official-gallery/chara052.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara052","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara052/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara053","name":"猿飞木叶丸","nameJa":"猿飛木ノ葉丸","family":"konohamaru","familyName":"猿飞木叶丸","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara053-icon.webp","art":"assets/official-gallery/chara053.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara053","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara053/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara054","name":"宇智波止水","nameJa":"うちはシスイ","family":"shisui","familyName":"宇智波止水","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara054-icon.webp","art":"assets/official-gallery/chara054.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara054","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara054/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara055","name":"波风水门（基础形态）","nameJa":"波風ミナト","family":"minato","familyName":"波风水门","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara055-icon.webp","art":"assets/official-gallery/chara055.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara055","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara055/ill.png","mappings":[{"family":"minato","form":"base"}],"sharedArtIds":[]},{"id":"chara056","name":"漩涡玖辛奈","nameJa":"うずまきクシナ","family":"kushina","familyName":"漩涡玖辛奈","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara056-icon.webp","art":"assets/official-gallery/chara056.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara056","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara056/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara057","name":"宇智波带土（少年期）","nameJa":"うちはオビト(少年期)","family":"obito","familyName":"宇智波带土","form":"少年期","era":"naruto","icon":"assets/official-gallery/chara057-icon.webp","art":"assets/official-gallery/chara057.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara057","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara057/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara058","name":"旗木卡卡西（少年期）","nameJa":"はたけカカシ(少年期)","family":"kakashi","familyName":"旗木卡卡西","form":"少年期","era":"naruto","icon":"assets/official-gallery/chara058-icon.webp","art":"assets/official-gallery/chara058.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara058","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara058/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara059","name":"野原琳","nameJa":"のはらリン","family":"rin","familyName":"野原琳","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara059-icon.webp","art":"assets/official-gallery/chara059.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara059","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara059/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara060","name":"我爱罗（少年篇）","nameJa":"我愛羅(少年篇)","family":"gaara","familyName":"我爱罗","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara060-icon.webp","art":"assets/official-gallery/chara060.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara060","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara060/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara061","name":"我爱罗（风影）","nameJa":"風影・我愛羅","family":"gaara","familyName":"我爱罗","form":"风影","era":"naruto","icon":"assets/official-gallery/chara061-icon.webp","art":"assets/official-gallery/chara061.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara061","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara061/ill.png","mappings":[{"family":"gaara","form":"base"}],"sharedArtIds":[]},{"id":"chara142","name":"我爱罗（五影会谈）","nameJa":"風影・我愛羅(五影会談)","family":"gaara","familyName":"我爱罗","form":"五影会谈","era":"naruto","icon":"assets/official-gallery/chara142-icon.webp","art":"assets/official-gallery/chara142.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara142","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara142/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara062","name":"我爱罗（忍界大战）","nameJa":"風影・我愛羅(忍界大戦)","family":"gaara","familyName":"我爱罗","form":"忍界大战","era":"naruto","icon":"assets/official-gallery/chara062-icon.webp","art":"assets/official-gallery/chara062.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara062","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara062/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara143","name":"我爱罗（BORUTO）","nameJa":"風影・我愛羅(BORUTO)","family":"gaara","familyName":"我爱罗","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara143-icon.webp","art":"assets/official-gallery/chara143.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara143","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara143/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara063","name":"勘九郎（少年篇）","nameJa":"カンクロウ(少年篇)","family":"kankuro","familyName":"勘九郎","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara063-icon.webp","art":"assets/official-gallery/chara063.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara063","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara063/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara064","name":"勘九郎（疾风传）","nameJa":"カンクロウ","family":"kankuro","familyName":"勘九郎","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara064-icon.webp","art":"assets/official-gallery/chara064.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara064","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara064/ill.png","mappings":[{"family":"kankuro","form":"base"}],"sharedArtIds":[]},{"id":"chara144","name":"勘九郎（BORUTO）","nameJa":"カンクロウ(BORUTO)","family":"kankuro","familyName":"勘九郎","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara144-icon.webp","art":"assets/official-gallery/chara144.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara144","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara144/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara065","name":"手鞠（少年篇）","nameJa":"テマリ(少年篇)","family":"temari","familyName":"手鞠","form":"少年篇","era":"naruto","icon":"assets/official-gallery/chara065-icon.webp","art":"assets/official-gallery/chara065.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara065","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara065/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara066","name":"手鞠（疾风传）","nameJa":"テマリ","family":"temari","familyName":"手鞠","form":"疾风传","era":"naruto","icon":"assets/official-gallery/chara066-icon.webp","art":"assets/official-gallery/chara066.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara066","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara066/ill.png","mappings":[{"family":"temari","form":"base"}],"sharedArtIds":[]},{"id":"chara145","name":"奈良手鞠（BORUTO）","nameJa":"奈良テマリ(BORUTO)","family":"temari","familyName":"手鞠","form":"BORUTO","era":"boruto","icon":"assets/official-gallery/chara145-icon.webp","art":"assets/official-gallery/chara145.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara145","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara145/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara067","name":"千代","nameJa":"チヨバア","family":"chiyo","familyName":"千代","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara067-icon.webp","art":"assets/official-gallery/chara067.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara067","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara067/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara068","name":"奇拉比（基础形态）","nameJa":"キラービー","family":"killerbee","familyName":"奇拉比","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara068-icon.webp","art":"assets/official-gallery/chara068.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara068","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara068/ill.png","mappings":[{"family":"killerbee","form":"base"}],"sharedArtIds":[]},{"id":"chara069","name":"奇拉比（鲛肌）","nameJa":"キラービー(鮫肌)","family":"killerbee","familyName":"奇拉比","form":"鲛肌","era":"naruto","icon":"assets/official-gallery/chara069-icon.webp","art":"assets/official-gallery/chara069.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara069","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara069/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara070","name":"艾（四代雷影）（四代雷影）","nameJa":"雷影・エー","family":"a","familyName":"艾（四代雷影）","form":"四代雷影","era":"naruto","icon":"assets/official-gallery/chara070-icon.webp","art":"assets/official-gallery/chara070.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara070","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara070/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara071","name":"达鲁伊","nameJa":"ダルイ","family":"darui","familyName":"达鲁伊","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara071-icon.webp","art":"assets/official-gallery/chara071.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara071","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara071/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara072","name":"大野木","nameJa":"オオノキ","family":"onoki","familyName":"大野木","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara072-icon.webp","art":"assets/official-gallery/chara072.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara072","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara072/ill.png","mappings":[{"family":"onoki","form":"base"}],"sharedArtIds":[]},{"id":"chara073","name":"桃地再不斩","nameJa":"桃地再不斬","family":"zabuza","familyName":"桃地再不斩","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara073-icon.webp","art":"assets/official-gallery/chara073.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara073","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara073/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara074","name":"白","nameJa":"白","family":"haku","familyName":"白","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara074-icon.webp","art":"assets/official-gallery/chara074.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara074","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara074/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara075","name":"照美冥","nameJa":"照美メイ","family":"mei","familyName":"照美冥","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara075-icon.webp","art":"assets/official-gallery/chara075.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara075","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara075/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara076","name":"漩涡香磷","nameJa":"香燐","family":"karin","familyName":"漩涡香磷","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara076-icon.webp","art":"assets/official-gallery/chara076.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara076","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara076/ill.png","mappings":[{"family":"karin","form":"base"}],"sharedArtIds":[]},{"id":"chara077","name":"鬼灯水月","nameJa":"鬼灯水月","family":"suigetsu","familyName":"鬼灯水月","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara077-icon.webp","art":"assets/official-gallery/chara077.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara077","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara077/ill.png","mappings":[{"family":"suigetsu","form":"base"}],"sharedArtIds":[]},{"id":"chara078","name":"重吾","nameJa":"重吾","family":"jugo","familyName":"重吾","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara078-icon.webp","art":"assets/official-gallery/chara078.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara078","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara078/ill.png","mappings":[{"family":"jugo","form":"base"}],"sharedArtIds":[]},{"id":"chara079","name":"宇智波鼬","nameJa":"うちはイタチ","family":"itachi","familyName":"宇智波鼬","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara079-icon.webp","art":"assets/official-gallery/chara079.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara079","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara079/ill.png","mappings":[{"family":"itachi","form":"base"}],"sharedArtIds":[]},{"id":"chara080","name":"干柿鬼鲛","nameJa":"干柿鬼鮫","family":"kisame","familyName":"干柿鬼鲛","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara080-icon.webp","art":"assets/official-gallery/chara080.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara080","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara080/ill.png","mappings":[{"family":"kisame","form":"base"}],"sharedArtIds":[]},{"id":"chara081","name":"角都","nameJa":"角都","family":"kakuzu","familyName":"角都","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara081-icon.webp","art":"assets/official-gallery/chara081.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara081","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara081/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara082","name":"飞段","nameJa":"飛段","family":"hidan","familyName":"飞段","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara082-icon.webp","art":"assets/official-gallery/chara082.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara082","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara082/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara083","name":"迪达拉","nameJa":"デイダラ","family":"deidara","familyName":"迪达拉","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara083-icon.webp","art":"assets/official-gallery/chara083.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara083","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara083/ill.png","mappings":[{"family":"deidara","form":"base"}],"sharedArtIds":[]},{"id":"chara084","name":"蝎","nameJa":"サソリ","family":"sasori","familyName":"蝎","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara084-icon.webp","art":"assets/official-gallery/chara084.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara084","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara084/ill.png","mappings":[{"family":"sasori","form":"base"}],"sharedArtIds":[]},{"id":"chara085","name":"佩恩（六道／天道）","nameJa":"ペイン","family":"pain","familyName":"佩恩","form":"六道／天道","era":"naruto","icon":"assets/official-gallery/chara085-icon.webp","art":"assets/official-gallery/chara085.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara085","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara085/ill_sp.png","mappings":[{"family":"pain","form":"base"}],"sharedArtIds":[]},{"id":"chara086","name":"小南","nameJa":"小南","family":"konan","familyName":"小南","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara086-icon.webp","art":"assets/official-gallery/chara086.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara086","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara086/ill.png","mappings":[{"family":"konan","form":"base"}],"sharedArtIds":[]},{"id":"chara087","name":"宇智波带土（面具男）","nameJa":"仮面の男","family":"obito","familyName":"宇智波带土","form":"面具男","era":"naruto","icon":"assets/official-gallery/chara087-icon.webp","art":"assets/official-gallery/chara087.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara087","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara087/ill.png","mappings":[{"family":"obito","form":"base"}],"sharedArtIds":[]},{"id":"chara088","name":"宇智波带土（阿飞）","nameJa":"トビ","family":"obito","familyName":"宇智波带土","form":"阿飞","era":"naruto","icon":"assets/official-gallery/chara088-icon.webp","art":"assets/official-gallery/chara088.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara088","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara088/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara089","name":"宇智波带土（阿飞·忍界大战）","nameJa":"トビ(忍界大戦)","family":"obito","familyName":"宇智波带土","form":"阿飞·忍界大战","era":"naruto","icon":"assets/official-gallery/chara089-icon.webp","art":"assets/official-gallery/chara089.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara089","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara089/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara090","name":"宇智波带土（面具破碎）","nameJa":"うちはオビト","family":"obito","familyName":"宇智波带土","form":"面具破碎","era":"naruto","icon":"assets/official-gallery/chara090-icon.webp","art":"assets/official-gallery/chara090.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara090","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara090/ill.png","mappings":[{"family":"obito","form":"branch"}],"sharedArtIds":[]},{"id":"chara091","name":"宇智波带土（十尾人柱力）","nameJa":"うちはオビト(十尾の人柱力)","family":"obito","familyName":"宇智波带土","form":"十尾人柱力","era":"naruto","icon":"assets/official-gallery/chara091-icon.webp","art":"assets/official-gallery/chara091.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara091","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara091/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara092","name":"宇智波带土（暴走）","nameJa":"うちはオビト(暴走)","family":"obito","familyName":"宇智波带土","form":"暴走","era":"naruto","icon":"assets/official-gallery/chara092-icon.webp","art":"assets/official-gallery/chara092.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara092","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara092/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara146","name":"宇智波斑（基础形态）","nameJa":"うちはマダラ","family":"madara","familyName":"宇智波斑","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara146-icon.webp","art":"assets/official-gallery/chara146.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara146","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara146/ill.png","mappings":[{"family":"madara","form":"base"}],"sharedArtIds":[]},{"id":"chara093","name":"宇智波斑（秽土转生·解）","nameJa":"うちはマダラ(穢土転生・解)","family":"madara","familyName":"宇智波斑","form":"秽土转生·解","era":"naruto","icon":"assets/official-gallery/chara093-icon.webp","art":"assets/official-gallery/chara093.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara093","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara093/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara094","name":"宇智波斑（六道）","nameJa":"うちはマダラ(六道)","family":"madara","familyName":"宇智波斑","form":"六道","era":"naruto","icon":"assets/official-gallery/chara094-icon.webp","art":"assets/official-gallery/chara094.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara094","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara094/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara095","name":"大筒木辉夜","nameJa":"大筒木カグヤ","family":"kaguya","familyName":"大筒木辉夜","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara095-icon.webp","art":"assets/official-gallery/chara095.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara095","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara095/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara096","name":"大筒木桃式","nameJa":"大筒木モモシキ","family":"momoshiki","familyName":"大筒木桃式","form":"基础形态","era":"boruto","icon":"assets/official-gallery/chara096-icon.webp","art":"assets/official-gallery/chara096.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara096","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara096/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara097","name":"大筒木金式","nameJa":"大筒木キンシキ","family":"kinshiki","familyName":"大筒木金式","form":"基础形态","era":"boruto","icon":"assets/official-gallery/chara097-icon.webp","art":"assets/official-gallery/chara097.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara097","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara097/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara098","name":"长门","nameJa":"長門","family":"nagato","familyName":"长门","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara098-icon.webp","art":"assets/official-gallery/chara098.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara098","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara098/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara100","name":"二位由木人","nameJa":"二位ユギト","family":"yugito","familyName":"二位由木人","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara100-icon.webp","art":"assets/official-gallery/chara100.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara100","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara100/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara101","name":"枸橘矢仓","nameJa":"やぐら","family":"yagura","familyName":"枸橘矢仓","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara101-icon.webp","art":"assets/official-gallery/chara101.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara101","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara101/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara102","name":"老紫","nameJa":"老紫","family":"roshi","familyName":"老紫","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara102-icon.webp","art":"assets/official-gallery/chara102.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara102","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara102/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara103","name":"汉","nameJa":"ハン","family":"han","familyName":"汉","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara103-icon.webp","art":"assets/official-gallery/chara103.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara103","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara103/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara104","name":"羽高","nameJa":"ウタカタ","family":"utakata","familyName":"羽高","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara104-icon.webp","art":"assets/official-gallery/chara104.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara104","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara104/ill.png","mappings":[{"family":"utakata","form":"base"}],"sharedArtIds":[]},{"id":"chara105","name":"芙","nameJa":"フウ","family":"fu","familyName":"芙","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara105-icon.webp","art":"assets/official-gallery/chara105.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara105","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara105/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara106","name":"千手柱间（秽土转生）","nameJa":"初代火影 千手柱間(穢土転生)","family":"hashirama","familyName":"千手柱间","form":"秽土转生","era":"naruto","icon":"assets/official-gallery/chara106-icon.webp","art":"assets/official-gallery/chara106.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara106","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara106/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara107","name":"千手扉间（二代火影）","nameJa":"二代目火影 千手扉間","family":"tobirama","familyName":"千手扉间","form":"二代火影","era":"naruto","icon":"assets/official-gallery/chara107-icon.webp","art":"assets/official-gallery/chara107.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara107","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara107/ill.png","mappings":[{"family":"tobirama","form":"base"}],"sharedArtIds":[]},{"id":"chara108","name":"猿飞日斩（三代火影）","nameJa":"三代目火影 猿飛ヒルゼン","family":"hiruzen","familyName":"猿飞日斩","form":"三代火影","era":"naruto","icon":"assets/official-gallery/chara108-icon.webp","art":"assets/official-gallery/chara108.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara108","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara108/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara109","name":"波风水门（秽土转生）","nameJa":"波風ミナト(穢土転生)","family":"minato","familyName":"波风水门","form":"秽土转生","era":"naruto","icon":"assets/official-gallery/chara109-icon.webp","art":"assets/official-gallery/chara109.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara109","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara109/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara110","name":"罗砂（四代风影）（四代风影）","nameJa":"四代目風影","family":"rasa","familyName":"罗砂（四代风影）","form":"四代风影","era":"naruto","icon":"assets/official-gallery/chara110-icon.webp","art":"assets/official-gallery/chara110.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara110","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara110/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara111","name":"艾（三代雷影）（三代雷影）","nameJa":"三代目雷影","family":"third_raikage","familyName":"艾（三代雷影）","form":"三代雷影","era":"naruto","icon":"assets/official-gallery/chara111-icon.webp","art":"assets/official-gallery/chara111.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara111","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara111/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara112","name":"无（二代土影）（二代土影）","nameJa":"二代目土影","family":"mu","familyName":"无（二代土影）","form":"二代土影","era":"naruto","icon":"assets/official-gallery/chara112-icon.webp","art":"assets/official-gallery/chara112.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara112","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara112/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara113","name":"鬼灯幻月（二代水影）（二代水影）","nameJa":"二代目水影","family":"gengetsu","familyName":"鬼灯幻月（二代水影）","form":"二代水影","era":"naruto","icon":"assets/official-gallery/chara113-icon.webp","art":"assets/official-gallery/chara113.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara113","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara113/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara114","name":"山椒鱼半藏","nameJa":"半蔵","family":"hanzo","familyName":"山椒鱼半藏","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara114-icon.webp","art":"assets/official-gallery/chara114.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara114","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara114/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara115","name":"三船","nameJa":"ミフネ","family":"mifune","familyName":"三船","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara115-icon.webp","art":"assets/official-gallery/chara115.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara115","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara115/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara116","name":"大蛇丸","nameJa":"大蛇丸","family":"orochimaru","familyName":"大蛇丸","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara116-icon.webp","art":"assets/official-gallery/chara116.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara116","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara116/ill.png","mappings":[{"family":"orochimaru","form":"base"}],"sharedArtIds":[]},{"id":"chara117","name":"药师兜（基础形态）","nameJa":"薬師カブト","family":"kabuto","familyName":"药师兜","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara117-icon.webp","art":"assets/official-gallery/chara117.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara117","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara117/ill.png","mappings":[{"family":"kabuto","form":"base"}],"sharedArtIds":[]},{"id":"chara118","name":"药师兜（蛇斗篷）","nameJa":"薬師カブト(蛇マント)","family":"kabuto","familyName":"药师兜","form":"蛇斗篷","era":"naruto","icon":"assets/official-gallery/chara118-icon.webp","art":"assets/official-gallery/chara118.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara118","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara118/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara119","name":"药师兜（仙人模式）","nameJa":"薬師カブト(仙人モード)","family":"kabuto","familyName":"药师兜","form":"仙人模式","era":"naruto","icon":"assets/official-gallery/chara119-icon.webp","art":"assets/official-gallery/chara119.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara119","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara119/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara120","name":"君麻吕","nameJa":"君麻呂","family":"kimimaro","familyName":"君麻吕","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara120-icon.webp","art":"assets/official-gallery/chara120.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara120","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara120/ill.png","mappings":[{"family":"kimimaro","form":"base"}],"sharedArtIds":[]},{"id":"chara121","name":"次郎坊","nameJa":"次郎坊","family":"jirobo","familyName":"次郎坊","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara121-icon.webp","art":"assets/official-gallery/chara121.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara121","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara121/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara122","name":"左近／右近","nameJa":"左近/右近","family":"sakon_ukon","familyName":"左近／右近","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara122-icon.webp","art":"assets/official-gallery/chara122.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara122","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara122/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara123","name":"鬼童丸","nameJa":"鬼童丸","family":"kidomaru","familyName":"鬼童丸","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara123-icon.webp","art":"assets/official-gallery/chara123.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara123","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara123/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara124","name":"多由也","nameJa":"多由也","family":"tayuya","familyName":"多由也","form":"基础形态","era":"naruto","icon":"assets/official-gallery/chara124-icon.webp","art":"assets/official-gallery/chara124.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara124","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara124/ill.png","mappings":[],"sharedArtIds":[]},{"id":"chara125","name":"机械鸣人（机械忍者）","nameJa":"メカナルト","family":"mecha_naruto","familyName":"机械鸣人","form":"机械忍者","era":"game_original","icon":"assets/official-gallery/chara125-icon.webp","art":"assets/official-gallery/chara125.webp","sourcePage":"https://naruto-game-sc.bn-ent.net/character/detail.php?c=chara125","sourceArt":"https://naruto-game-sc.bn-ent.net/images/character/detail/chara125/ill.png","mappings":[],"sharedArtIds":[]}];
/* Standalone archive; lobby display selection remains owned by HubUI. */
window.OfficialGallery={
 era:'naruto',availability:'all',query:'',currentId:null,
 get entries(){return window.OfficialGalleryEntries||[];},
 esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));},
 get(id){return this.entries.find(e=>e.id===id);},
 readyRecord(e){
  if(!e)return null;
  const art=window.SkillArt,ids=art?.readyOfficialIds||window.readyOfficialIds||[];
  const approved=ids instanceof Set?ids.has(e.id):Array.isArray(ids)?ids.includes(e.id):ids?.[e.id]===true;
  const registry=art?.registry||{};
  const records=registry instanceof Map?[...registry.values()]:Object.values(registry);
  const exact=records.find(r=>r&&r.officialId===e.id&&r.ready===true&&r.releaseComplete!==false);
  return exact|| (approved?{officialId:e.id,ready:true}:null);
 },
 record(e){return e?Object.values(window.SkillArt?.registry||{}).find(r=>r.officialId===e.id):null;},
 isReady(e){return !!this.readyRecord(e);},
 bind(){
  const body=document.getElementById('hubPageBody');if(!body||body.dataset.ogBound)return;body.dataset.ogBound='true';
  body.addEventListener('click',e=>{const b=e.target.closest('[data-og]');if(!b)return;e.stopPropagation();const action=b.dataset.og;
   if(action==='era'){this.era=b.dataset.value;this.renderArchive();}
   else if(action==='available'){this.availability=b.dataset.value;this.renderArchive();}
   else if(action==='detail'){this.renderDetail(b.dataset.id);}
   else if(action==='archive'){this.renderArchive();}
   else if(action==='lab'){const entry=this.get(b.dataset.id),r=this.readyRecord(entry)||this.record(entry);if(r&&window.DebugMode?.enabled&&window.SkillLab?.open&&r.unitKey)window.SkillLab.open(r.unitKey);}
  });
  body.addEventListener('input',e=>{if(e.target.id!=='ogSearch')return;this.query=e.target.value;this.updateGrid();});
 },
 context(detail=false){const h=window.HubUI;if(h){h.page=detail?'detail':'ninja';const start=document.getElementById('startOverlay');if(start)start.dataset.page=h.page;}this.bind();},
 title(text,count){if(window.HubUI?.title)window.HubUI.title(text,count);},
 renderArchive(){
  this.context();this.currentId=null;const body=document.getElementById('hubPageBody');if(!body)return;
  body.innerHTML=`<section class="og-archive" aria-label="忍者形态图鉴"><div class="og-summary"><span>忍者形态档案</span><small>161 个官方条目 · 逐形态开放</small></div><label class="og-search"><span class="og-sr">搜索忍者与形态</span><input id="ogSearch" type="search" placeholder="搜索忍者、形态…" value="${this.esc(this.query)}" autocomplete="off"></label><div class="og-tabs" aria-label="时代筛选">${[['naruto','火影忍者'],['boruto','博人传'],['game_original','游戏原创'],['all','全部']].map(([k,n])=>`<button data-og="era" data-value="${k}" class="${this.era===k?'active':''}" aria-pressed="${this.era===k}">${n}</button>`).join('')}</div><div class="og-status-tabs" aria-label="开放状态">${[['all','全部形态'],['ready','已开放'],['locked','待完成']].map(([k,n])=>`<button data-og="available" data-value="${k}" class="${this.availability===k?'active':''}" aria-pressed="${this.availability===k}">${n}</button>`).join('')}</div><p class="og-note">立绘可预览；动作与技能美术完成后，该形态开放出战。</p><div id="ogGrid" class="og-grid"></div></section>`;
  this.updateGrid();
 },
 updateGrid(){
  const q=this.query.trim().toLowerCase();let items=this.entries.filter(e=>(this.era==='all'||e.era===this.era)&&(!q||(e.name+e.nameJa+e.familyName+e.form).toLowerCase().includes(q))&&(this.availability==='all'||this.isReady(e)===(this.availability==='ready')));
  items=items.slice().sort((a,b)=>Number(this.isReady(b))-Number(this.isReady(a)));
  this.title('忍者',`${items.length} / 161 形态`);const grid=document.getElementById('ogGrid');if(!grid)return;
  grid.innerHTML=items.map(e=>{const ready=this.isReady(e);return `<button class="og-card ${ready?'og-ready':'og-locked'}" data-og="detail" data-id="${e.id}" aria-label="${this.esc(e.name)}，${ready?'已开放':'未开放，可查看立绘'}"><div class="og-card-image"><img src="${e.icon}" width="192" height="192" loading="lazy" decoding="async" alt=""><span class="og-badge">${ready?'已开放':'待完成'}</span></div><strong>${this.esc(e.familyName)}</strong><small>${this.esc(e.form)}</small></button>`;}).join('')||'<p class="og-empty">没有找到符合条件的形态</p>';
 },
 renderKit(profile){
  if(!profile?.kit)return '';
  const art=window.SkillArt,labels={passive:'被动',primary:'技能一',secondary:'技能二',ultimate:'奥义'};
  return `<section class="og-kit" aria-label="角色四技能"><div class="og-kit-heading"><h4>专属忍术</h4><span>属性 · ${this.esc(profile.attribute||'待配置')}</span></div><p class="og-kit-rule">主控：四技能可升级 · 支援：技能固定 Lv.1</p><div class="og-kit-list">${Object.entries(labels).map(([slot,label])=>{const skill=profile.kit[slot];if(!skill)return '';const realIcon=window.SKILL_ART_DATA?.[profile.key]?.skills?.[slot]?.icon;const icon=slot==='passive'?art?.portrait?.(profile):realIcon?art?.icon?.(profile,slot):null;return `<article class="og-kit-card">${icon?`<img src="${this.esc(icon)}" width="48" height="48" loading="lazy" decoding="async" alt="">`:''}<div><small>${label} · ${this.esc(art?.reviewText?.(skill)||'')}</small><h5>${this.esc(skill.name)}</h5><p>${this.esc(skill.text)}</p>${skill.nameReview?.status==='preview'?`<p class="og-review-note">参考招式：${this.esc(skill.nameReview.referenceName)}。当前演出尚未对应，不作为完整还原。</p>`:''}</div></article>`;}).join('')}</div></section>`;
 },
 renderDetail(id){
  const e=this.get(id);if(!e){this.renderArchive();return;}this.context(true);this.currentId=id;this.title('忍者档案',e.id.toUpperCase());const ready=this.isReady(e),record=this.readyRecord(e)||this.record(e);const body=document.getElementById('hubPageBody');if(!body)return;
  const nature=record?.unitKey&&window.RecruitRun?.get&&window.RecruitRun?.natureText?window.RecruitRun.natureText(window.RecruitRun.get(record.unitKey)):'';
  body.innerHTML=`<article class="og-detail"><button class="og-back" data-og="archive">‹ 返回忍者图鉴</button><div class="og-detail-art"><img src="${e.art}" width="700" height="1000" decoding="async" alt="${this.esc(e.name)}官方立绘"><span class="og-detail-state ${ready?'ready':''}">${ready?'动作已接入 · 技能核验见下方':record?.visualComplete?'技能动画已接入 · 正式出战待核':'正式出战锁定 · 形态或演出待完成'}</span></div><div class="og-detail-name"><small>${this.esc({naruto:'火影忍者',boruto:'博人传',game_original:'游戏原创'}[e.era])}</small><h3>${this.esc(e.familyName)}</h3><p>${this.esc(e.form)}${nature?' · '+this.esc(nature):''}</p></div><p class="og-note">${ready?'该形态已通过本轮名称与核心画面核对。其他带“待校正”标记的角色只在调试模式提供演出预览。':'该形态暂未通过正式出战核验。已有素材的角色可在调试模式预览，补齐招式对应后正式开放。'}</p>${record?this.renderKit(record):''}${record?.unitKey&&window.DebugMode?.enabled?`<button class="og-lab" data-og="lab" data-id="${e.id}">查看技能与奥义调试</button>`:''}<div class="og-meta"><span>官方名称</span><p lang="ja">${this.esc(e.nameJa)}</p><span>形态编号</span><p>${e.id.toUpperCase()}</p></div><a class="og-source" href="${e.sourcePage}" target="_blank" rel="noopener noreferrer">查看官方立绘来源 ↗</a></article>`;
  body.scrollTop=0;
 },
 refresh(){if(this.currentId)this.renderDetail(this.currentId);else this.renderArchive();}
};

;
/* materials.js */
/* Read-only evidence and animation browser. This never unlocks incomplete characters. */
window.MaterialBook={
 data:null,promise:null,currentViewer:null,
 esc(v){return HubUI.esc(String(v??''));},
 load(){if(this.data)return Promise.resolve(this.data);if(this.promise)return this.promise;return this.promise=fetch('assets/materials-v26/index.json?v=allskills28').then(r=>{if(!r.ok)throw Error('素材索引加载失败');return r.json()}).then(d=>this.data=d).catch(e=>{this.promise=null;throw e});},
 bind(){const body=$('hubPageBody');if(!body||body.dataset.mbBound)return;body.dataset.mbBound='true';body.addEventListener('click',e=>{const b=e.target.closest('[data-mb]');if(!b)return;e.stopPropagation();if(b.dataset.mb==='index')this.openIndex();else if(b.dataset.mb==='view')this.view(b.dataset.pack);});},
 async archive(){this.bind();try{await this.load();if(HubUI.page!=='ninja')return;const archive=document.querySelector('.og-archive');if(!archive||archive.querySelector('.mb-toolbar'))return;const el=document.createElement('section');el.className='mb-toolbar';el.innerHTML=`<div><b>全角色技能素材进度</b><small>${this.data.summary.officialForms}个形态逐招登记 · 缺项已标注</small></div><button data-mb="index">查看进度与动画</button>`;archive.querySelector('.og-note')?.after(el);this.badges();}catch(e){console.warn('Material index',e);}},
 badges(){if(!this.data)return;for(const card of document.querySelectorAll('.og-card')){const e=this.data.entries[card.dataset.id];if(!e||card.querySelector('.mb-card-status'))continue;const span=document.createElement('span');span.className='mb-card-status';span.textContent=e.visualComplete&&e.status!=='runtime_reviewed'?'三招动画已接入':({runtime_reviewed:'招式已核对',runtime_pending:'演出待校正',candidate_extracted:'已拆招·待核',layers_extracted:'已有分层',source_listed:'人物包待核',source_pending:'素材待适配',missing:'缺对应素材',raw_verified:'实包待拆招'})[e.status]||'待核验';card.appendChild(span);}},
 slotText(s){if(s?.visualComplete)return s.status==='matched'?'动画与术名已核对':'动画已接入 · 术名待核';return ({reviewed_clip:'画面与名称已核对',clip_pending_review:'已接入·待校正',implemented_passive:'已实现被动',implemented:'已实现被动',matched:'动画与术名已核对',adapted:'已接入·玩法改编',preview:'源动作或术名待核',planned_not_verified:'仅有技能方案·缺已核验演出',unplanned_not_found:'招式与素材待补'})[s?.status]||'待核验';},
 packButton(key,related=false){const p=this.data.packs[key];return p?`<button class="mb-pack-button" data-mb="view" data-pack="${this.esc(key)}"><b>${this.esc(p.name)}</b><small>${related?'同家族候选，不能视作同形态':({runtime:'现有游戏动作与特效',candidate:'新拆时间轴候选·未完成',layers:'独立分层·待组合',assist:'仅援护·非完整技能组',original:'原创角色试作'})[p.kind]||'素材候选'} · ${Object.keys(p.clips).length}项</small><span>查看动画 ›</span></button>`:'';},
 async detail(id){this.bind();try{await this.load();if(OfficialGallery.currentId!==id)return;const root=document.querySelector('.og-detail'),e=this.data.entries[id];if(!root||!e)return;root.querySelector('.mb-detail')?.remove();const el=document.createElement('section');el.className='mb-detail';const labels={passive:'被动',primary:'技能一',secondary:'技能二',ultimate:'奥义'};el.innerHTML=`<h4>素材制作进度</h4><p class="mb-status" data-status="${e.status}">${this.esc(this.data.statusLabels[e.status])}</p>${e.audit?`<p class="mb-note">${this.esc(e.audit.reason)}</p>`:''}<div class="mb-slot-list">${Object.entries(labels).map(([slot,label])=>{const s=e.skills[slot];return `<div><small>${label}</small><b>${this.esc(s?.name||'招式待整理')}</b><span>${this.esc(this.slotText(s))}</span></div>`}).join('')}</div>${e.packKeys.map(k=>this.packButton(k)).join('')}${e.relatedPackKeys.length?`<details class="mb-related"><summary>同家族其他形态素材 ${e.relatedPackKeys.length} 组</summary><p>这些候选不能代替本形态的动作与技能。</p>${e.relatedPackKeys.map(k=>this.packButton(k,true)).join('')}</details>`:''}${e.leads.length?`<details class="mb-related"><summary>已找到的公开人物包线索 ${e.leads.length} 条</summary><p>以下为已核查发布页；同家族人物包不能证明本形态已完成。</p>${e.leads.map(l=>`<a href="${this.esc(l.url)}" target="_blank" rel="noopener noreferrer">${this.esc(l.title)} · ${this.esc(l.downloadState==='downloaded_extracted'?'已取得源包':l.downloadState==='failed'?'下载受阻':'发布页已查')} ↗</a>`).join('')}</details>`:''}<p class="mb-note">人物动作、技能层和完整演出分别核验。未完成的形态继续锁定，不用同名角色或重复特效冒充。</p><button class="mb-index-link" data-mb="index">查看全部角色的制作进度</button>`;root.querySelector('.og-meta')?.before(el);}catch(e){console.warn('Material detail',e);}},
 async openIndex(){await this.load();HubUI.openSheet('materials');$('hubSheetTitle').textContent='全角色技能素材';$('hubSheetKicker').textContent='161形态 · 逐招核验';const counts=this.data.summary;const content=$('hubSheetBody');content.innerHTML=`<div class="mb-totals"><b>${counts.officialForms}<small>官方形态</small></b><b>${counts.formsWithThreeAnimations||0}<small>精确形态动画已接入</small></b><b>${counts.sourceMoveCandidateFamilies||0}<small>同家族源动作候选</small></b></div><p class="hub-copy">新素材均保留缺口标记，暂不增加正式开放人数。动画、分层与完整技能不是同一项完成标准。</p><label class="mb-search"><input id="mbSearch" type="search" placeholder="搜索角色或形态" autocomplete="off"></label><label class="mb-filter"><select id="mbFilter"><option value="all">全部161形态</option><option value="available">已有可查看的精确形态素材</option><option value="pending">待制作／待核验</option><option value="missing">暂无已核验素材</option></select></label><div id="mbIndexRows"></div><h3 class="hub-section-title">本轮补充素材与额外形态</h3><div class="mb-pack-list">${Object.values(this.data.packs).filter(p=>p.kind!=='runtime').map(p=>this.packButton(p.key)).join('')}</div>`;
 $('hubSheetFooter').innerHTML='<a class="hub-primary" href="downloads/character-materials-v0.28.csv" download>下载逐角色技能与缺口表</a>';
 const update=()=>{const q=$('mbSearch').value.trim().toLowerCase(),filter=$('mbFilter').value;let entries=Object.entries(this.data.entries).filter(([,e])=>(!q||e.name.toLowerCase().includes(q))&&(filter==='all'||filter==='available'&&e.packKeys.length||filter==='pending'&&!['runtime_reviewed','missing'].includes(e.status)||filter==='missing'&&['missing','source_listed'].includes(e.status)));$('mbIndexRows').innerHTML=entries.map(([id,e])=>`<article class="mb-index-row"><img src="${e.icon}" loading="lazy" width="48" height="48" alt=""><div><b>${this.esc(e.name)}</b><small>${this.esc(this.data.statusLabels[e.status])}</small><span>${e.packKeys.length?'已有'+e.packKeys.length+'组精确形态素材':e.leads.length?'找到'+e.leads.length+'条发布线索，未核验':'待补动作与技能'}</span></div><button data-mb-entry="${id}">详情</button></article>`).join('')||'<p class="hub-copy">没有匹配的形态。</p>';content.querySelectorAll('[data-mb-entry]').forEach(b=>b.onclick=()=>{HubUI.closeSheet(false);HubUI.setPage('ninja');OfficialGallery.renderDetail(b.dataset.mbEntry)});};
 content.querySelector('#mbSearch').oninput=update;content.querySelector('#mbFilter').onchange=update;content.querySelectorAll('[data-mb="view"]').forEach(b=>b.onclick=()=>this.view(b.dataset.pack));update();},
 async view(key){await this.load();const pack=this.data.packs[key];if(!pack)return;this.closeViewer();const modal=document.createElement('dialog');modal.className='mb-viewer';modal.innerHTML=`<div class="mb-viewer-head"><div><small>独立素材预览</small><h3>${this.esc(pack.name)}</h3></div><button id="mbClose" aria-label="关闭素材预览">×</button></div><p class="mb-note">${this.esc(pack.note)}</p><label class="mb-clip-label">动作／分层<select id="mbClip">${Object.entries(pack.clips).map(([k,c])=>`<option value="${this.esc(k)}">${this.esc(c.name)} · ${c.frames}帧${c.category==='layer'?'（独立层）':''}</option>`).join('')}</select></label><canvas id="mbCanvas" width="320" height="260"></canvas><div class="mb-view-controls"><button id="mbPause">暂停</button><button id="mbMirror">朝向：原始</button><span id="mbFrame"></span></div><p id="mbClipNote" class="mb-note"></p><div class="mb-skill-gaps">${(pack.skills||[]).map(s=>`<article><b>${this.esc(({primary:'技能一',secondary:'技能二',ultimate:'奥义'})[s.slot]||s.slot)} · ${this.esc(s.name)}</b><small>${s.status==='matched'||s.status==='adapted'?'已核对／玩法改编':'候选或分层·未完成完整演出'}</small>${s.notes?.length?`<p>${this.esc(Array.isArray(s.notes)?s.notes.join('；'):s.notes)}</p>`:''}</article>`).join('')}</div>${pack.missingRefs?.length?`<p class="mb-missing">已发现缺帧引用：${this.esc(pack.missingRefs.map(r=>r.join(':')).join('、'))}</p>`:''}${pack.sources?.map(s=>`<a class="og-source" href="${this.esc(s.url)}" target="_blank" rel="noopener noreferrer">${this.esc(s.title)} ↗</a>`).join('')}`;
 document.body.appendChild(modal);modal.showModal();const viewer={modal,paused:false,mirror:false,clock:0,last:performance.now(),image:null,clip:null,serial:0,raf:0};this.currentViewer=viewer;
 const close=()=>this.closeViewer();modal.querySelector('#mbClose').onclick=close;modal.addEventListener('cancel',close);modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
 modal.querySelector('#mbPause').onclick=()=>{viewer.paused=!viewer.paused;modal.querySelector('#mbPause').textContent=viewer.paused?'播放':'暂停'};modal.querySelector('#mbMirror').onclick=()=>{viewer.mirror=!viewer.mirror;modal.querySelector('#mbMirror').textContent=viewer.mirror?'朝向：镜像':'朝向：原始'};
 const choose=()=>{const k=modal.querySelector('#mbClip').value,c=pack.clips[k],seq=++viewer.serial;viewer.clock=0;viewer.clip=c;viewer.image=null;modal.querySelector('#mbClipNote').textContent=[...(c.notes||[]),c.thumbnailScale<1?'当前为缩略预览，原始图层另行保留。':'',c.fullSkill===false&&pack.kind!=='runtime'?'动作／分层候选，不等于完整战斗技能。':''].filter(Boolean).join(' ');const image=new Image;image.onload=()=>{if(viewer.serial===seq)viewer.image=image};image.onerror=()=>{modal.querySelector('#mbClipNote').textContent='图集加载失败，请稍后重试。'};image.src=c.file;};modal.querySelector('#mbClip').onchange=choose;choose();
 const paint=t=>{if(this.currentViewer!==viewer)return;const canvas=modal.querySelector('#mbCanvas'),ctx=canvas.getContext('2d');if(!viewer.paused)viewer.clock+=Math.min(.15,(t-viewer.last)/1000);viewer.last=t;ctx.clearRect(0,0,canvas.width,canvas.height);const c=viewer.clip,im=viewer.image;if(c&&im){let index;if(c.frameTimes?.length===c.frames){let t=viewer.clock*1000%c.frameTimes.reduce((a,b)=>a+b,0);index=0;while(index<c.frames-1&&t>=c.frameTimes[index]){t-=c.frameTimes[index];index++;}}else index=Math.floor(viewer.clock*(c.fps||12))%c.frames;const [cw,ch]=c.cell,cols=c.columns||c.frames,x=index%cols*cw,y=((c.row||0)+Math.floor(index/cols))*ch,scale=Math.min(2.5,290/cw,230/ch),w=cw*scale,h=ch*scale;ctx.save();ctx.imageSmoothingEnabled=false;ctx.translate(160,130);if(viewer.mirror)ctx.scale(-1,1);ctx.drawImage(im,x,y,cw,ch,-w/2,-h/2,w,h);ctx.restore();modal.querySelector('#mbFrame').textContent=(index+1)+' / '+c.frames;}viewer.raf=requestAnimationFrame(paint);};viewer.raf=requestAnimationFrame(paint);
 },
 closeViewer(){const v=this.currentViewer;if(!v)return;this.currentViewer=null;cancelAnimationFrame(v.raf);v.modal.close();v.modal.remove();}
};
(()=>{const archive=OfficialGallery.renderArchive,detail=OfficialGallery.renderDetail,grid=OfficialGallery.updateGrid;OfficialGallery.renderArchive=function(){archive.call(this);MaterialBook.archive()};OfficialGallery.renderDetail=function(id){detail.call(this,id);MaterialBook.detail(id)};OfficialGallery.updateGrid=function(){grid.call(this);MaterialBook.badges()};})();

;
/* game.js */
'use strict';
const $=id=>document.getElementById(id),canvas=$('game'),ctx=canvas.getContext('2d');
let W=480,H=720;const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
ctx.imageSmoothingEnabled=false;
let selectedCharacter='naruto'; // Main form is selected before each run.
let state='intro',s,keys={},pointer=null,muted=true,audio,images={},spriteMeta={},assetsReady=false,uiClock=0,toastTimer,viewReturn='intro';
const forms={kakashi:{name:'旗木卡卡西',tag:'拷贝忍者 · 雷遁 / 近战'},young:{name:'小鸣人',tag:'少年篇 · 风遁 / 分身'},shippuden:{name:'疾风传·鸣人',tag:'疾风传 · 风遁 / 分身'},sage:{name:'仙人模式·鸣人',tag:'仙术觉醒 · 范围爆发'},gold_old:{name:'九尾查克拉·鸣人',tag:'尾兽共鸣 · 高频追击'}};
let best={wins:0,kills:0,quickWins:0};try{const b=JSON.parse(localStorage.getItem('shinobi-pixel-records'));if(b)best={...best,...b}}catch{}
function showBest(){$('best').textContent=best.wins?`${best.wins} 次通关 / ${best.kills} 击破`:'开启你的第一次试炼'}showBest();
function levelNeed(level){return Math.round(8+level*3+level*level*.4)}
function idleState(){const world=new KonohaWorld();const loot=world.createLoot();const p={x:world.start.x,y:world.start.y},main=RecruitRun.get(RecruitRun.mainKey);return{mainKey:main.key,excludedNatures:[...RecruitRun.excluded],bossStep:0,bossLedger:['pending','pending','pending'],nextBossAt:300,debugUsed:false,ultimateCd:main.initialUltimateCd||45,ultimate:1,synergies:[],linkCooldowns:{},linkTriggers:{},growthQueue:[],growthEchoes:[],supportClones:[],allies:[],teamPower:0,teamVital:0,regen:0,guard:0,magnet:0,reserve:0,reserveGuard:0,reserveRegen:0,world,character:main.family,camera:{x:world.start.x-W/2,y:world.start.y-H*.52},arena:null,chests:loot.chests.map(c=>({...c,kind:"chest",hp:1,maxHp:1,r:16})),lamps:[],pickups:[],lootHistory:[],chestsOpened:0,magnetCount:0,treasurePending:false,t:0,level:1,xp:0,need:levelNeed(1),p:{x:world.start.x,y:world.start.y,hp:main.hp,inv:0,facing:1,moving:false},form:main.sprite,branch:null,quick:false,enemies:[],shots:[],gems:[],fx:[],texts:[],ras:1,clone:1,haste:0,power:0,wind:0,kills:0,damage:0,spawn:.25,nextWave:30,waveCount:0,waveWarned:false,wavePending:0,waveSpawn:0,atk:0,jutsuAtk:.45,cloneAtk:.8,summons:[],zones:[],meleeCast:null,windAtk:1.5,boss:null,bossMode:false,uid:0,cast:0,upgradeCount:0,lastEvolutionOffer:0,formAnnounced:false}}
function reset(quick=false){if((RecruitRun.get(RecruitRun.mainKey)?.releaseComplete===false&&!DebugMode.enabled)||!SkillArt.isReady(RecruitRun.mainKey)||!SkillArt.loaded(RecruitRun.mainKey))return;if(!assetsReady||(quick&&!DebugMode.enabled))return;SkillArt.clear();UltimateCue.clear();BuildInspect.close(false);SkillLab.closeDock();document.body.dataset.home='false';fitBattle();$('shell').appendChild($('modal'));$('modal').classList.remove('choice-screen','squad-pause');if($('rosterOverlay'))$('rosterOverlay').hidden=true;clearTimeout(toastTimer);$('battleToast').classList.remove('show');s=idleState();s.debugUsed=RecruitRun.get(s.mainKey).releaseComplete===false;s.quick=quick;s.t=quick?780:0;s.level=quick?12:1;s.form=RecruitRun.get(s.mainKey).sprite;s.ras=quick?4:1;s.clone=quick?2:1;s.haste=quick?1:0;s.need=levelNeed(s.level);keys={};release();state='play';$('startOverlay').hidden=true;$('modal').hidden=true;document.body.dataset.playing='true';if(quick){s.bossStep=2;s.bossLedger=['skipped','skipped','pending'];s.nextBossAt=s.t;s.debugUsed=true;spawnBoss()}else toast(s.debugUsed?'调试预览局 / 演出待校正，不计战绩':'单人试炼 / 升级招募，最多3名支援');updateHud()}
function sound(f=440,d=.08){if(muted)return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator(),g=audio.createGain();o.frequency.setValueAtTime(f,audio.currentTime);o.frequency.exponentialRampToValueAtTime(Math.max(40,f*.5),audio.currentTime+d);g.gain.setValueAtTime(.035,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+d);o.type='square';o.connect(g);g.connect(audio.destination);o.start();o.stop(audio.currentTime+d)}catch{}}
function toast(msg){$('battleToast').textContent=msg;$('battleToast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('battleToast').classList.remove('show'),2400)}
function effect(x,y,r=24,type='hit',life=.4){s.fx.push({x,y,r,type,life,max:life})}
function floating(x,y,text,color='#fff0be'){if(s.texts.length<35)s.texts.push({x,y,text,color,life:.65})}
function spawnEnemy(elite=false,side=null){if(s.enemies.length>=200)return;let point=null;for(let i=0;i<16;i++){const edge=side===null||i>3?Math.floor(Math.random()*4):side,cam=s.camera;let x,y;if(edge<2){x=cam.x+(edge===0?-35:W+35);y=cam.y+100+Math.random()*(H-120)}else{x=cam.x+Math.random()*W;y=cam.y+(edge===2?-45:H+45)}if(s.world.blocked(x,y,15))continue;point={x,y};break}if(!point)return;const hp=(elite?170:38)*(1+s.t*.003);s.enemies.push({...point,id:++s.uid,hp,maxHp:hp,enemyType:EnemyArt.pick(elite),r:elite?15:12,speed:elite?43:42+Math.random()*12,elite,hit:0,facing:point.x<s.p.x?1:-1,phase:Math.random()*100})}
function updateSpawns(dt){if(s.skillLab||s.bossMode)return;if(s.t>=s.nextBossAt){spawnBoss();return}s.spawn-=dt;if(s.spawn<=0){const count=s.t<60?3:s.t<120?4:5;for(let i=0;i<count;i++)spawnEnemy(s.t>60&&Math.random()<.07);s.spawn=s.t<60?.65:s.t<120?.55:.5}if(!s.waveWarned&&s.t>=s.nextWave-3){s.waveWarned=true;toast('敌潮预警 / 大批敌人即将从两侧包围！');sound(220,.2)}if(s.t>=s.nextWave){s.waveCount++;s.wavePending=Math.min(120,24+s.waveCount*8);s.waveSpawn=0;s.waveSide=s.waveCount%4;s.nextWave+=30;s.waveWarned=false;toast('第 '+s.waveCount+' 波敌潮来袭！')}if(s.wavePending>0){s.waveSpawn-=dt;while(s.waveSpawn<=0&&s.wavePending>0){spawnEnemy(s.waveCount>=3&&s.wavePending%12===0,(s.waveSide+s.wavePending%2)%4);s.wavePending--;s.waveSpawn+=.075}}}

function targetList(){const all=s.boss?[...s.enemies,s.boss]:s.enemies.slice();for(const c of s.chests)if(!c.opened&&c.hp>0&&dist(c,s.p)<520)all.push(c);return all}

function nearest(x,y){let target=null,d=520;for(const e of targetList()){if(e.hp<=0)continue;const n=Math.hypot(e.x-x,e.y-y);if(n<d){d=n;target=e}}return target}

function squadArena(){const hud=$('bossHud'),wasHidden=hud.hidden;hud.hidden=false;const shellRect=$('shell').getBoundingClientRect(),bottom=(hud.getBoundingClientRect().bottom-shellRect.top)*H/shellRect.height;hud.hidden=wasHidden;const top=Math.max(H*.21,bottom+14);return{x:s.camera.x+(W-Math.min(W-40,680))/2,y:s.camera.y+top,w:Math.min(W-40,680),h:Math.max(150,H*.87-top)}}
function spawnBoss(){if(s.boss)return;s.growthQueue=[];s.growthEchoes=[];s.pendingSkills=[];s.bossMode=true;s.zones=[];s.meleeCast=null;s.wavePending=0;s.waveWarned=false;s.enemies=[];for(const g of s.gems)s.xp+=g.value;s.gems=[];s.shots=[];s.p.hp=Math.min(mainMaxHp(),s.p.hp+200);s.camera.x=clamp(s.p.x-W/2,0,s.world.width-W);s.camera.y=clamp(s.p.y-H*.52,0,s.world.height-H);s.arena=squadArena();s.world.move(s.p,0,0,12,s.arena);s.chests=s.chests.filter(c=>c.x<s.arena.x-40||c.x>s.arena.x+s.arena.w+40||c.y<s.arena.y-40||c.y>s.arena.y+s.arena.h+40);s.lamps=[];for(const c of [...s.summons,...s.allies,...s.supportClones])s.world.move(c,0,0,12,s.arena);s.world.cache.clear();const a=s.arena;const points=[{x:a.x+70,y:a.y+65},{x:a.x+a.w-70,y:a.y+65},{x:a.x+a.w/2,y:a.y+a.h-65}].sort((q,r)=>dist(r,s.p)-dist(q,s.p));const plan=RunFlow.plans[s.bossStep];s.boss={...points[0],sprite:plan.sprite,pattern:plan.pattern,name:plan.name,hp:plan.hp,maxHp:plan.hp,r:19,phase:'idle',timer:2.5,posture:0,protection:0,cycle:0,hit:0,facing:1,clones:[],dash:null};toast(plan.name+' / '+(s.bossStep<2?'小首领 '+(s.bossStep+1)+'/2':'最终首领'));effect(s.boss.x,s.boss.y,75,'smoke',.7);sound(180,.4)}

function startCast(actor){if(actor.action&&actor.action.age<actor.action.duration)return;actor.action={name:'cast',age:0,duration:.34}}
function updateCast(actor,dt){if(actor.action){actor.action.age+=dt;if(actor.action.age>=actor.action.duration)actor.action=null}}
function fire(x,y,damage,kind='shuriken'){if(OriginalNinja.interceptBasic(s.p))return;if(kind==='orb')return castMelee(damage);const e=nearest(x,y);if(!e)return;startCast(s.p);const a=Math.atan2(e.y-24-y,e.x-x),element=kind==='orb'?(s.character==='kakashi'?'lightning':'rasengan'):kind==='wind'?'wind':'shuriken',speed=element==='shuriken'?400:310;s.shots.push({x,y,px:x,py:y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life:2.5,damage,r:kind==='wind'?17:element==='shuriken'?7:11,kind,element,angle:a});if(kind!=='clone')s.cast=.18}
function hit(e,d){if(e.hp<=0||state!=='play')return;if(e.kind==='chest'){e.hp=0;openChest(e);return}if(e.kind==='lamp'){e.hp-=d;effect(e.x,e.y-16,20,'break',.35);if(e.hp<=0){const roll=Math.random();if(roll<.24)dropPickup('food',e.x,e.y);else if(roll<.36)dropPickup('magnet',e.x,e.y);else s.gems.push({x:e.x,y:e.y,value:3});sound(520,.08)}return;}const boss=e===s.boss;if(boss&&e.phase==='stun')d*=1.5;const dealt=Math.min(d,e.hp);e.hp-=d;e.hit=.11;EnemyArt.onHit(e);if(Math.random()<.45)floating(e.x,e.y-35,Math.round(dealt));effect(e.x,e.y-15,22,'hit',.25);if(boss){if(e.phase!=='stun'&&e.protection<=0){e.posture+=dealt/e.maxHp*250;if(e.posture>=100){e.posture=0;e.phase='stun';e.timer=2;e.clones=[];toast('破防！持续攻击 / 伤害 +50%');effect(e.x,e.y-20,80,'break',.65);sound(650,.25)}}}else if(e.hp<=0){s.kills++;s.gems.push({x:e.x,y:e.y,value:e.elite?5:1});effect(e.x,e.y-17,40,'smoke',.35);if(e.elite)s.p.hp=Math.min(mainMaxHp(),s.p.hp+45)}}
function hurt(d){if(s.p.inv>0||state!=='play')return;d=Math.max(1,Math.round(d*(1-(Growth.main().reduction||0))*(1-s.guard*.06)/(1+s.reserveGuard*.02)));const absorb=Math.min(s.p.shield||0,d);s.p.shield=(s.p.shield||0)-absorb;d-=absorb;s.p.hp-=d;s.damage+=d;s.p.inv=.8;SkillArt.survive(s.p);floating(s.p.x,s.p.y-40,'−'+d,'#ffb191');effect(s.p.x,s.p.y-20,30,'hurt',.3);sound(110,.08)}
function gainLevel(){s.xp-=s.need;s.level++;for(const a of s.allies)a.level=s.level;s.need=levelNeed(s.level);upgrade()}
const upgradeDefinitions=[
 {id:'ras',name:'技能一强化',text:()=>Growth.primaryText(),max:5},
 {id:'clone',name:'技能二强化',text:()=>Growth.secondaryText(),max:5},
 {id:'ultimate',name:'奥义强化',text:()=>Growth.ultimateText(),max:3},
 {id:'power',name:'主控 · 忍术精研',text:()=>`主控被动 / 主控及其分身伤害 +${(s.power+1)*12}%`,max:5},
 {id:'guard',name:'主控 · 坚韧忍道',text:()=>`主控被动 / 主控受到的伤害降低 ${(s.guard+1)*6}%`,max:4},
 {id:'regen',name:'主控 · 查克拉恢复',text:()=>`主控被动 / 每秒恢复 ${(s.regen+1)*4} 点生命`,max:4},
 {id:'magnet',name:'主控 · 查克拉感知',text:()=>`主控被动 / 经验拾取半径提升 ${(s.magnet+1)*25}%`,max:3},
 {id:'haste',name:'全队 · 查克拉共鸣',text:()=>`通用被动 / 全队忍术冷却缩短 ${(s.haste+1)*7}%`,max:4},
 {id:'teamPower',name:'全队 · 协同作战',text:()=>`通用被动 / 全队伤害 +${(s.teamPower+1)*10}%`,max:4},
 {id:'teamVital',name:'全队 · 生命加护',text:()=>`通用被动 / 全队最大生命 +${(s.teamVital+1)*12}%`,max:4},
 {id:'reserve',name:'全队 · 持续修行',text:()=>`通用被动 / 全队伤害额外 +${(s.reserve+1)*2}%`,max:Infinity},
 {id:'reserveGuard',name:'全队 · 坚守阵线',text:()=>`通用被动 / 全队获得额外减伤，当前强化 Lv.${s.reserveGuard+1}`,max:Infinity},
 {id:'reserveRegen',name:'全队 · 生生不息',text:()=>`通用被动 / 全队每秒恢复 ${s.reserveRegen+1} 点生命`,max:Infinity}
];
function getSkillOffers(){let pool=upgradeDefinitions.filter(u=>s[u.id]<u.max&&!u.id.startsWith('reserve'));if(pool.length<3)pool.push(...upgradeDefinitions.filter(u=>u.id.startsWith('reserve')));return Growth.offers(pool)}
function getOffers(){return RecruitRun.offers()}
function upgradeIcon(u){if(u.recruit)return SkillArt.portrait(RecruitRun.get(u.recruit));if(['ras','clone','ultimate'].includes(u.id))return SkillArt.icon(Growth.main(),{ras:'primary',clone:'secondary',ultimate:'ultimate'}[u.id]);if(u.id==='ultimate')return s.character==='kakashi'?'assets/lightning.png':'assets/rasengan-ds-icon.png';if(u.id==='clone'&&Growth.ranged())return s.form==='sage'?'assets/rasenshuriken.png':'assets/rasengan-ds-icon.png';if(u.link)return SquadLinks.definitions.find(d=>d.id===u.link).icon;if(u.recruit)return 'assets/'+RecruitRun.get(u.recruit).sprite+'-portrait.png';if(u.evolution)return 'assets/'+(u.portrait||u.id)+'-portrait.png';return ({ras:s.character==='kakashi'?'assets/lightning.png':'assets/rasengan-ds-icon.png',clone:'assets/'+s.form+'-portrait.png',haste:'assets/ui-leaf.png',power:'assets/pickup-scroll-existing.png',wind:'assets/rasenshuriken.png',heal:'assets/pickup-pill-existing.png',regen:'assets/pickup-pill-existing.png',guard:'assets/ui-leaf.png',teamVital:'assets/pickup-pill-existing.png',teamPower:'assets/pickup-scroll-existing.png'})[u.id]||'assets/pickup-scroll-existing.png'}
function equippedStrip(){
 const u=RecruitRun.get(s.mainKey)||RecruitRun.get(RecruitRun.mainKey),mainPassive=SkillLab.kit(u)[0];
 const group1=[
 {id:'main-passive',name:mainPassive.name,icon:'assets/hub-modern/ninja.svg',badge:'被'},
 {id:'main-skill1',name:coreName(),icon:s.character==='kakashi'?'assets/lightning.png':'assets/rasengan-ds-icon.png',badge:s.ras},
 {id:'main-skill2',name:Growth.secondaryName(),icon:Growth.ranged()?(s.form==='sage'?'assets/rasenshuriken.png':'assets/rasengan-ds-icon.png'):'assets/'+s.form+'-portrait.png',badge:s.clone},
 {id:'main-ultimate',name:SkillLab.ultimates[u.key],icon:s.character==='kakashi'?'assets/lightning.png':'assets/rasengan-ds-icon.png',badge:s.ultimate},
 {id:'common-active',name:s.commonSkill?.name||'通用技能 · 未携带',icon:s.commonSkill?.icon||null,badge:s.commonSkill?.level||'',empty:!s.commonSkill,mark:'通'}
 ];
 for(const [i,slot]of group1.slice(0,4).entries())slot.icon=i?SkillArt.icon(u,['passive','primary','secondary','ultimate'][i]):SkillArt.portrait(u);
 const group2=[
 {id:'passive-cooldown',name:'通用被动 · 冷却缩减',icon:'assets/ui-leaf.png',badge:s.haste,empty:!s.haste},
 {id:'passive-damage',name:'通用被动 · 协同增伤（含持续修行）',icon:'assets/pickup-scroll-existing.png',badge:s.teamPower+s.reserve,empty:!(s.teamPower+s.reserve)},
 {id:'passive-vitality',name:'通用被动 · 生命防护（含坚守阵线）',icon:'assets/hub-modern/trial.svg',badge:s.teamVital+s.reserveGuard,empty:!(s.teamVital+s.reserveGuard)},
 {id:'passive-recovery',name:'通用被动 · 全队恢复',icon:'assets/pickup-pill-existing.png',badge:s.reserveRegen,empty:!s.reserveRegen},
 {id:'summon',name:s.summonSkill?.name||'通灵兽 · 未携带',icon:s.summonSkill?.icon||null,badge:s.summonSkill?.level||'',empty:!s.summonSkill,mark:'灵'}
 ];
 const slots=list=>list.map(x=>`<button type="button" aria-haspopup="dialog" class="equipped-slot ${x.empty?'empty':''} ${x.id==='main-ultimate'?'ultimate-slot':''}" data-build-slot="${x.id}" aria-label="${HubUI.esc(x.name)}" title="${HubUI.esc(x.name)}">${!x.empty&&x.icon?`<img src="${x.icon}" alt="">`:`<i>${x.mark||'＋'}</i>`}${!x.empty?`<small>${x.badge}</small>`:''}</button>`).join('');
 return `<div class="build-group jutsu-group"><span class="build-group-label">忍术 <small>主控 4 ＋ 通用 1</small></span><div class="build-slots">${slots(group1)}</div></div><div class="build-group passive-group"><span class="build-group-label">被动 <small>通用 4 ＋ 通灵 1</small></span><div class="build-slots">${slots(group2)}</div></div>`;
}
function upgrade(force=false){if(state!=='play')return;state='upgrade';release();s.upgradeCount++;const treasure=s.treasurePending;s.treasurePending=false;const offers=treasure?getSkillOffers():getOffers();$('modal').hidden=false;$('modal').classList.add('choice-screen');$('modal').innerHTML=`<div class="upgrade-layout"><h2 class="upgrade-ribbon">${treasure?'忍术卷轴':'技能选择'}</h2><div class="equipped-build" aria-label="忍术五槽与被动五槽，同一行十个槽">${equippedStrip()}</div><div class="choices">${offers.map(u=>{const current=u.recruit||u.link?0:s[u.id]||0,next=current+1,max=Math.min(5,Number.isFinite(u.max)?u.max:5);return `<button class="choice ${u.link?'link-choice':''} ${u.recruit?'recruit-choice':''} ${u.evolution?'evolution':''}" data-upgrade="${u.id}"><b class="choice-heading">${u.id==='ras'?Growth.primaryName():u.id==='clone'?Growth.secondaryName():u.id==='ultimate'?SkillLab.ultimates[s.mainKey]:u.name.replace(/^(进化卡|专精卡) · /,'')}</b><span class="choice-tag">${u.recruit?(RecruitRun.get(u.recruit).releaseComplete===false?'预览招募':'招募'):u.link?'联动':['ras','clone','ultimate'].includes(u.id)?'机制强化':u.name.startsWith('全队')?'全队':'主控'}</span><div class="choice-art"><img src="${upgradeIcon(u)}" alt="${u.name}"></div><small class="choice-description">${u.recruit?`<span class="choice-natures">${RecruitRun.natureText(RecruitRun.get(u.recruit))}</span><span>${Object.keys(RecruitRun.get(u.recruit).skills).join(' · ')}</span><span>角色 Lv.${s.level} · 技能 Lv.1</span>${SquadLinks.recruitMarkup(RecruitRun.get(u.recruit))}`:u.text().replace(/主控主动 \/ |主控被动 \/ |通用被动 \/ /,'')}${u.id==='ras'?SquadLinks.traitMarkup('primary'):u.id==='ultimate'?SquadLinks.traitMarkup('ultimate'):''}</small><div class="choice-footer">${u.recruit?'点击加入 · '+s.allies.length+'/3':u.link?'解锁小队联动':u.evolution?'形态解锁':u.id==='heal'?'立即恢复':`<span class="choice-stars">${Array.from({length:max},(_,i)=>`<i class="${i<next?'on':''}">★</i>`).join('')}</span><em>Lv.${current} → ${next}</em>`}</div></button>`}).join('')}</div><p class="upgrade-instruction">${s.allies.length<3?'选择支援，或强化主控与全队':'支援已满 · 选择技能强化'}</p><small class="upgrade-pause-note">战斗暂停 · 点击上方技能看详情 · Lv.${s.level}</small></div>`;document.querySelectorAll('[data-upgrade]').forEach(button=>button.onclick=async()=>{const id=button.dataset.upgrade;if(id.startsWith('recruit:')){button.disabled=true;try{await SkillArt.ensure(id.slice(8));}catch{button.disabled=false;toast('素材加载失败，请重试');return;}if(state!=='upgrade')return;}state='play';$('modal').classList.remove('choice-screen','squad-pause');if(id.startsWith('link:')){SquadLinks.learn(id.slice(5));$('modal').hidden=true;updateHud();if(s.xp>=s.need)gainLevel();return;}if(id.startsWith('recruit:')){RecruitRun.add(id.slice(8));$('modal').hidden=true;updateHud();if(s.xp>=s.need)gainLevel();return;}const oldMax=mainMaxHp();s[id]++;if(['ras','clone','ultimate'].includes(id))toast('机制强化 · '+(id==='ras'?Growth.primaryName():id==='clone'?Growth.secondaryName():SkillLab.ultimates[s.mainKey])+' Lv.'+s[id]);if(id==='teamVital'){s.p.hp=s.p.hp/oldMax*mainMaxHp();for(const a of s.allies)if(a.down<=0)a.hp=a.hp/(1+(s.teamVital-1)*.12)*(1+s.teamVital*.12);}$('modal').hidden=true;updateHud();if(s.xp>=s.need)gainLevel()})}
function segmentDistance(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,den=dx*dx+dy*dy;const t=den?clamp(((p.x-a.x)*dx+(p.y-a.y)*dy)/den,0,1):0;return Math.hypot(p.x-a.x-dx*t,p.y-a.y-dy*t)}
function tick(dt){if(state!=='play')return;s.t+=dt;EnemyArt.update(dt);s.p.hp=Math.min(mainMaxHp(),s.p.hp+(s.regen*4+s.reserveRegen)*dt);s.cast=Math.max(0,s.cast-dt);updateCast(s.p,dt);s.p.inv=Math.max(0,s.p.inv-dt);let mx=(keys.d||keys.ArrowRight?1:0)-(keys.a||keys.ArrowLeft?1:0),my=(keys.s||keys.ArrowDown?1:0)-(keys.w||keys.ArrowUp?1:0);if(pointer){mx=clamp((pointer.x-pointer.sx)/30,-1,1);my=clamp((pointer.y-pointer.sy)/30,-1,1)}const mag=Math.hypot(mx,my);s.p.moving=mag>.1;if(s.p.moving&&!SkillArt.blocksMovement(s.p)){s.world.move(s.p,mx/Math.max(1,mag)*175*(Growth.main().movement||1)*dt,my/Math.max(1,mag)*175*(Growth.main().movement||1)*dt,12,s.arena);if(Math.abs(mx)>.05)s.p.facing=mx>0?1:-1}
 updateSpawns(dt);TeamSeven.update(dt);SkillArt.update(dt);
 const damage=[0,36,46,58,72,88][s.ras]*(1+s.power*.12)*(1+s.teamPower*.1+s.reserve*.02)*(s.form==='sage'||s.branch==='kakashi_lightning'?1.35:s.form==='gold_old'?1.2:1);const cd=(1-s.haste*.07)*(s.form==='gold_old'||s.branch==='kakashi_copy'?.85:1);
 if(!s.skillLab){s.atk-=dt;if(s.atk<=0){fire(s.p.x+s.p.facing*16,s.p.y-25,18*(Growth.main().personal||1)*(1+s.power*.12)*(1+s.teamPower*.1+s.reserve*.02),'shuriken');s.atk=.65*cd}
 s.jutsuAtk-=dt;if(s.jutsuAtk<=0&&castMelee(damage))s.jutsuAtk=Growth.main().kit.primary.cd*cd
 s.cloneAtk-=dt;if(s.cloneAtk<=0&&Growth.castSecondary())s.cloneAtk=Growth.main().kit.secondary.cd*cd;if(s.summons.length)updateClones(dt,damage,cd);
 }if(s.skillLab&&s.summons.length)updateClones(dt,damage,cd);Growth.update(dt);TeamSeven.updatePendingSkills(dt);updateMelee(dt);


 for(const e of s.enemies){e.hit=Math.max(0,e.hit-dt);if(OriginalNinja.charmed(e))continue;const target=TeamSeven.target(e),d=dist(e,target)||1;e.facing=e.x<target.x?1:-1;e.slow=Math.max(0,(e.slow||0)-dt);if(!(e.skillStun>0))s.world.pursue(e,target,dt*(e.slow>0?.65:1));if(d<e.r+11){EnemyArt.attack(e);TeamSeven.hurt(target,e.elite?100:55)}}
 if(s.boss)RunFlow.updateBoss(dt);
 for(const q of s.shots){q.life-=dt;q.px=q.x;q.py=q.y;const target=q.growthTarget?.hp>0?q.growthTarget:nearest(q.x,q.y);if(target&&q.element!=='shuriken'&&q.element!=='fire'){const a=Math.atan2(target.y-24-q.y,target.x-q.x);q.vx+=(Math.cos(a)*310-q.vx)*dt*3;q.vy+=(Math.sin(a)*310-q.vy)*dt*3}q.x+=q.vx*dt;q.y+=q.vy*dt;q.angle=Math.atan2(q.vy,q.vx);for(const e of targetList()){if(e.hp>0&&q.life>0&&segmentDistance({x:e.x,y:e.y-24},{x:q.px,y:q.py},q)<q.r+e.r){SquadLinks.onImpact(q);if(q.growthSecondary)Growth.onSecondaryImpact(q);else if(['water','sand','clay'].includes(q.element)){if(q.element==='sand')e.slow=2;addDamageZone(q.x,q.y,q.damage*.35,q.element==='clay'?'impact':q.element,.8,45);}else if(q.element==='fire')addDamageZone(q.x,q.y,q.damage*.35,'fire',.8,48);else if(q.kind==='wind')addDamageZone(q.x,q.y,q.damage*.4,'wind',.8,75);else hit(e,q.damage);q.life=0;break}}}
 s.enemies=s.enemies.filter(e=>e.hp>0&&(s.bossMode||dist(e,s.p)<1100));s.shots=s.shots.filter(q=>q.life>0);
 for(const g of s.gems){const d=dist(g,s.p);if(d<78*(1+s.magnet*.25)||g.magnet){g.x+=(s.p.x-g.x)*Math.min(1,dt*8);g.y+=(s.p.y-g.y)*Math.min(1,dt*8)}if(d<19){g.taken=true;s.xp+=g.value}}
 s.gems=s.gems.filter(g=>!g.taken);if(s.gems.length>650)mergeGems();for(const f of s.fx)f.life-=dt;s.fx=s.fx.filter(f=>f.life>0);for(const t of s.texts){t.life-=dt;t.y-=dt*32}s.texts=s.texts.filter(t=>t.life>0);
 SkillLab.update(dt);if(!s.skillLab){s.ultimateCd=(s.ultimateCd??45)-dt;if(s.ultimateCd<=0){const u=RecruitRun.get(s.mainKey);if(TeamSeven.castUltimate(s.p,u,Growth.nearestEnemy()))s.ultimateCd=(u.kit?.ultimate.cd||45)*cd;}}
 if(s.p.hp<=0){finish(false,'生命耗尽');return}if(s.boss&&s.boss.hp<=0){RunFlow.defeated();return}if(!s.skillLab&&s.t>=900){finish(false,'试炼超时');return}updateCamera(dt);updateLoot(dt);if(state!=='play')return;if(s.xp>=s.need){gainLevel();return}uiClock+=dt;if(uiClock>.08){updateHud();uiClock=0}}
function updateCamera(dt){if(s.arena)return;const tx=clamp(s.p.x-W/2,0,s.world.width-W),ty=clamp(s.p.y-H*(s.skillLab?.30:.52),0,s.world.height-H);const n=Math.min(1,dt*9);s.camera.x+=(tx-s.camera.x)*n;s.camera.y+=(ty-s.camera.y)*n}
function mergeGems(){const buckets=new Map();for(const g of s.gems){const k=Math.floor(g.x/64)+','+Math.floor(g.y/64);if(!buckets.has(k))buckets.set(k,{...g});else{const m=buckets.get(k);m.value+=g.value;m.magnet=m.magnet||g.magnet}}s.gems=[...buckets.values()]}
function lootLog(message){s.lootHistory.unshift(message);s.lootHistory=s.lootHistory.slice(0,4);const el=$('lootLog');if(el)el.innerHTML=s.lootHistory.map(x=>'<div>'+x+'</div>').join('')}
function dropPickup(kind,x,y){s.pickups.push({id:++s.uid,kind,x,y,phase:Math.random()*5});effect(x,y-12,20,'break',.3)}
function vacuum(){s.magnetCount++;if(s.gems.length){for(const g of s.gems)g.magnet=true;toast('经验吸铁石 / 回收场上全部经验');lootLog('吸铁石 · 回收散落经验')}else{s.xp+=12;toast('吸铁石 / 查克拉补给 +12');lootLog('吸铁石 · 查克拉补给 +12')}sound(700,.16)}
function openChest(c){if(c.opened||state!=='play')return;c.opened=true;c.hp=0;s.chestsOpened++;const roll=Math.random(),reward=c.reward||(roll<.46?'skill':roll<.78?'food':'magnet');effect(c.x,c.y-10,45,'break',.65);dropPickup(reward,c.x,c.y);toast('宝箱击碎 / 靠近拾取地面道具');lootLog('宝箱掉落 · '+({skill:'忍术卷轴',food:'兵粮丸',magnet:'吸铁石'})[reward]);sound(760,.2)}
function updateLoot(dt){for(const p of s.pickups){p.phase+=dt;if(dist(p,s.p)<25){if(p.kind==='food'){if(s.p.hp>=mainMaxHp())continue;s.p.hp=Math.min(mainMaxHp(),s.p.hp+300);toast('兵粮丸 / 生命恢复 +300');lootLog('兵粮丸 · 恢复生命')}else if(p.kind==='skill'){p.taken=true;s.pickups=s.pickups.filter(q=>!q.taken);s.treasurePending=true;upgrade(false);return}else vacuum();p.taken=true}}s.pickups=s.pickups.filter(p=>!p.taken);s.chests=s.chests.filter(c=>!c.opened)}
function skillTargets(){return s.boss?[...s.enemies,s.boss,...s.chests]:[...s.enemies,...s.chests]}
function pulseZone(c){if(c.damage<=0)return;for(const e of skillTargets())if(e.hp>0&&Math.hypot(e.x-c.x,e.y-24-c.y)<=c.radius+(e.r||12))hit(e,c.damage)}
function addDamageZone(x,y,damage,element,duration=1,radius=36){const c={x,y,damage,element,age:0,duration,radius,nextPulse:.2};s.zones.push(c);pulseZone(c);return c}
function castMelee(damage){return Growth.castPrimary(damage)}
function updateMelee(dt){for(const c of s.zones){const end=Math.min(c.duration,c.age+dt);while(c.nextPulse<c.duration-1e-8&&c.nextPulse<=end+1e-8){pulseZone(c);c.nextPulse+=.2}c.age=end}s.zones=s.zones.filter(c=>c.age<c.duration);if(s.meleeCast&&s.meleeCast.age>=s.meleeCast.duration)s.meleeCast=null}

function updateClones(dt,damage,cd){damage*=Growth.main().personal||1;while(s.summons.length<Growth.cloneCount()){const id=s.summons.length,angle=id*2.4;s.summons.push({id,x:s.p.x+Math.cos(angle)*65,y:s.p.y+Math.sin(angle)*65,facing:s.p.facing,atk:.2+id*.23,jutsu:.7+id*.31,target:null,retarget:0,roam:null,roamTime:0,moving:false})}const all=(s.boss?[...s.enemies,s.boss]:s.enemies).filter(e=>e.hp>0),claimed=new Map();for(let i=0;i<s.summons.length;i++){const c=s.summons[i];updateCast(c,dt);c.retarget=(c.retarget||0)-dt;const unclaimed=all.filter(e=>!claimed.has(e));const candidates=(unclaimed.length?unclaimed:all).slice().sort((a,b)=>(dist(a,c)+(claimed.get(a)||0)*450)-(dist(b,c)+(claimed.get(b)||0)*450));if(!c.target||c.target.hp<=0||!all.includes(c.target)||c.retarget<=0||(claimed.has(c.target)&&candidates.some(e=>!claimed.has(e)))){c.target=candidates[0]||null;c.retarget=.45+i*.11}if(c.target)claimed.set(c.target,(claimed.get(c.target)||0)+1);let destination;if(c.target){const angle=(i+1)*Math.PI*2/(s.summons.length+1);destination={x:c.target.x+Math.cos(angle)*35,y:c.target.y+Math.sin(angle)*35}}else{c.roamTime=(c.roamTime||0)-dt;if(!c.roam||c.roamTime<=0||dist(c,c.roam)<10){const a=Math.random()*Math.PI*2;c.roam={x:clamp(c.x+Math.cos(a)*90,50,s.world.width-50),y:clamp(c.y+Math.sin(a)*90,50,s.world.height-50)};c.roamTime=1.5+Math.random()*1.5}destination=c.roam}let vx=0,vy=0;const d=dist(c,destination)||1;if(d>8){const speed=c.target?155:75;vx=(destination.x-c.x)/d*speed;vy=(destination.y-c.y)/d*speed}for(const other of s.summons){if(other===c)continue;const gap=dist(c,other)||.1;if(gap<46){vx+=(c.x-other.x)/gap*(46-gap)*5;vy+=(c.y-other.y)/gap*(46-gap)*5}}c.moving=Math.hypot(vx,vy)>3;if(c.moving){s.world.move(c,vx*dt,vy*dt,12,s.arena);if(Math.abs(vx)>3)c.facing=vx>0?1:-1}c.atk-=dt;c.jutsu-=dt;const e=c.target;if(!e)continue;if(c.atk<=0&&dist(e,c)<520){startCast(c);const a=Math.atan2(e.y-24-(c.y-25),e.x-c.x);s.shots.push({x:c.x,y:c.y-25,px:c.x,py:c.y-25,vx:Math.cos(a)*400,vy:Math.sin(a)*400,life:2.5,damage:damage*(s.branch==='kakashi_copy'?.6:.4),r:7,kind:'clone',element:'shuriken'});c.atk=1.2*cd}if(c.jutsu<=0&&dist(e,c)<=60){startCast(c);addDamageZone(c.x+c.facing*25,c.y-24,damage*.4*.35,s.character==='kakashi'?'lightning':'rasengan',.6,s.clone>=5?52:s.clone>=3?44:32);c.jutsu=2.1*cd}}}

function format(t){return Math.floor(t/60).toString().padStart(2,'0')+':'+Math.floor(t%60).toString().padStart(2,'0')}
function coreName(){return Growth.primaryName()}
let lastForm='',lastCharacter='';function updateHud(){updateCharacterUI();$('chooseNinja').disabled=state!=='intro';$('chooseNinja').textContent=state==='intro'?'选择出战忍者 ▾':'返回大厅可更换忍者';if($('hudName'))$('hudName').firstChild.textContent=Growth.main().name+' ';if($('cloneName'))$('cloneName').textContent=Growth.secondaryName();$('timer').textContent=format(s.t);if($('killCount'))$('killCount').textContent=s.kills;$('level').textContent='Lv.'+s.level;$('hpText').textContent=`${Math.max(0,Math.ceil(s.p.hp))} / ${Math.round(mainMaxHp())}`;$('hpBar').style.width=clamp(s.p.hp/mainMaxHp()*100,0,100)+'%';$('xpBar').style.width=clamp(s.xp/s.need*100,0,100)+'%';$('bossHud').hidden=!s.boss;$('coreName').textContent=coreName();$('coreLevel').textContent='Lv.'+s.ras;$('cloneLevel').textContent='Lv.'+s.clone;$('buildSummary').textContent=coreName()+' Lv.'+s.ras;if(lastForm!==s.form){const f=forms[s.form];$('portrait').src=$('hudPortrait').src=SkillArt.portrait(Growth.main());$('portrait').alt=f.name+'像素形象';$('characterName').textContent=f.name;$('formName').textContent=f.name;$('eraTag').textContent=f.tag;lastForm=s.form;document.querySelectorAll('.era').forEach(e=>e.classList.add('active'))}if(s.boss){$('bossBar').style.width=clamp(s.boss.hp/s.boss.maxHp*100,0,100)+'%';$('postureBar').style.width=s.boss.posture+'%';$('bossHud').querySelector('.boss-hud-title b').textContent=s.boss.name;$('bossHint').textContent=s.boss.pattern==='pulse'&&s.boss.phase==='warn'?'砂暴预警 · 离开圆圈':({warn:'雷切预警 · 横向躲避',dash:'雷切！',recover:'硬直 · 输出机会',stun:'破防！伤害 +50%',idle:'保持距离，寻找机会'})[s.boss.phase]}const stage=s.boss?3:s.t<60?0:s.t<120?1:2;$('stageLabel').textContent=state==='intro'?'木叶村':s.boss?'封印结界':s.world.district(s.p.x,s.p.y);if($('chestCount'))$('chestCount').textContent=s.chestsOpened;if($('district'))$('district').textContent=s.world.district(s.p.x,s.p.y);if($('waveGuide'))$('waveGuide').textContent=RunFlow.progress()+' / '+(s.wavePending?'第 '+s.waveCount+' 波敌潮来袭':'敌潮 '+s.waveCount+' / 下波 '+format(Math.max(0,s.nextWave-s.t)));if($('minimap'))$('minimap').hidden=state==='intro'||!!s.boss;if($('worldStatus'))$('worldStatus').hidden=state==='intro'||!!s.boss;document.querySelectorAll('.step').forEach((e,i)=>e.classList.toggle('active',i===stage))}
function finish(win,reason=''){$('modal').classList.remove('choice-screen','squad-pause');if(state!=='play')return;state='end';release();if(win&&!s.debugUsed){if(s.quick)best.quickWins++;else{best.wins++;best.kills=Math.max(best.kills,s.kills)}try{localStorage.setItem('shinobi-pixel-records',JSON.stringify(best))}catch{}showBest()}$('modal').hidden=false;$('modal').innerHTML=`<p class="eyebrow">${win?'TRIAL COMPLETED':'NEVER GIVE UP'} / ${s.quick?'BOSS 体验':'标准试炼'}</p><img class="result-form" src="${SkillArt.portrait(Growth.main())}" alt="本局形象"><h2>${win?'试炼成功':'再一次，超越自己'}</h2><p>${win?'卡卡西：做得不错，你通过了考验。':reason+(s.character==='kakashi'?' / 再试一次，寻找破绽。':' / 鸣人：我才不会在这里放弃！')}</p><div class="stats"><div><b>${format(s.t)}</b><span>战斗计时</span></div><div><b>${s.kills}</b><span>击破敌人</span></div><div><b>${s.level}</b><span>角色等级</span></div></div><p>${s.debugUsed?'调试局 · 不写入正式战绩<br>':''}首领进度：${s.bossLedger.map((x,i)=>(i+1)+':'+({pending:'未挑战',skipped:'跳过',defeated:'击败'})[x]).join(' / ')}<br>本局形态：${forms[s.form].name}<br>开启宝箱 ${s.chestsOpened} 个 / 使用吸铁石 ${s.magnetCount} 次</p><button class="primary" id="retry">再次挑战 →</button><button class="text-btn" id="return">返回首页</button>`;$('retry').onclick=()=>reset(s.quick);$('return').onclick=goHome;sound(win?620:140,.4);updateHud()}
function goHome(){SkillArt.clear();UltimateCue.clear();BuildInspect.close(false);SkillLab.closeDock();$('modal').classList.remove('choice-screen','squad-pause');document.body.dataset.home='true';state='intro';keys={};release();s=idleState();if($('lootLog'))$('lootLog').textContent='攻击宝箱击碎后，靠近拾取掉落道具。';lastForm='';$('modal').hidden=true;$('startOverlay').hidden=false;document.body.dataset.playing='false';clearTimeout(toastTimer);$('battleToast').classList.remove('show');updateHud();window.HubUI?.onHome()}
// Rendering uses source pixels at their original scale. Actor images share a stable foot anchor.
function sprite(key,action,x,y,facing=1,alpha=1,phase=0,hitFlash=false,actionAge=null){if(OriginalNinja.drawActor(key,action,x,y,facing,alpha,phase,hitFlash,actionAge)||EnemyArt.drawActor(key,action,x,y,facing,alpha,phase,hitFlash,actionAge))return;const meta=spriteMeta[key]||spriteMeta.kakashi,im=images[key];if(!im||!meta)return;const a=meta.animations[action]||meta.animations.idle;const frame=actionAge===null?Math.floor((s?s.t:0)*1000/a.ms+phase)%a.count:Math.min(a.count-1,Math.floor(actionAge*1000/a.ms));ctx.save();ctx.translate(Math.round(x),Math.round(y));if(facing<0)ctx.scale(-1,1);if(actionAge!==null){const n=Math.sin(Math.min(1,actionAge/.34)*Math.PI);ctx.translate(Math.round(n*2),0);ctx.scale(1+n*.025,1-n*.025)}ctx.globalAlpha=alpha;ctx.fillStyle='#23392155';ctx.fillRect(-13,-3,26,5);if(hitFlash){ctx.globalAlpha*=.5}const scale=meta.renderScale||1;ctx.drawImage(im,frame*96,a.row*96,96,96,Math.round(-48*scale),Math.round(-84*scale),Math.round(96*scale),Math.round(96*scale));ctx.restore()}
function drawEffect(f){const p=1-f.life/f.max;ctx.save();ctx.globalAlpha=Math.min(1,(1-p)*1.4);if(f.type==='melee'){ctx.drawImage(images[f.element],Math.round(f.x-18),Math.round(f.y-18),36,36)}else if(f.type==='chain'){ctx.strokeStyle='#b4ebeb';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(f.x,f.y);for(let i=1;i<=7;i++){const t=i/7;ctx.lineTo(Math.round(f.x+(f.tx-f.x)*t+(i%2?4:-4)),Math.round(f.y+(f.ty-f.y)*t))}ctx.stroke()}else if(f.type==='smoke'){const im=images[p<.6?'smoke':'smoke-end'],size=Math.round(f.r*(.7+p*.5));ctx.drawImage(im,Math.round(f.x-size/2),Math.round(f.y-size),size,size)}else if(f.type==='wind'){const im=images.rasenshuriken,size=Math.round(f.r*(.8+p*.7));ctx.translate(Math.round(f.x),Math.round(f.y));ctx.rotate(p*2);ctx.drawImage(im,-size/2,-size/2,size,size)}else{const color=f.type==='hurt'?'#f3a47b':f.type==='break'?'#ffe3a1':'#a7e8e0';ctx.fillStyle=color;for(let i=0;i<6;i++){const a=i*Math.PI/3,r=f.r*p;const x=Math.round(f.x+Math.cos(a)*r),y=Math.round(f.y+Math.sin(a)*r);ctx.fillRect(x-2,y-2,4,4)}if(p<.4)ctx.fillRect(f.x-3,f.y-3,6,6)}ctx.restore()}
function drawMainHealth(){const ratio=clamp(s.p.hp/mainMaxHp(),0,1),x=Math.round(s.p.x-27),y=Math.round(s.p.y+9);ctx.save();ctx.fillStyle='#112018';ctx.fillRect(x,y,54,8);ctx.fillStyle='#42513b';ctx.fillRect(x+2,y+2,50,4);ctx.fillStyle=ratio<.25?'#ed9778':'#b6d95f';ctx.fillRect(x+2,y+2,Math.round(50*ratio),4);if(s.p.shield>0){ctx.fillStyle='#a8e3e7';ctx.fillRect(x+2,y+7,Math.round(50*Math.min(1,s.p.shield/(mainMaxHp()*.08))),2);}ctx.restore()}
function draw(){if(document.body.dataset.home==='true')return;ctx.clearRect(0,0,W,H);if(!s||!assetsReady||!images.town||!images.terrain){ctx.fillStyle='#53654b';ctx.fillRect(0,0,W,H);return}s.world.drawGround(ctx,images,s.camera,s.arena);if(state==='intro')return;ctx.save();ctx.translate(-Math.round(s.camera.x),-Math.round(s.camera.y));
 for(const g of s.gems){if(!visible(g,12))continue;const x=Math.round(g.x),y=Math.round(g.y);ctx.fillStyle='#285866';ctx.fillRect(x-4,y-4,8,8);ctx.fillStyle=g.value>1?'#f7d28b':'#a7e2cb';ctx.fillRect(x-2,y-3,4,6);ctx.fillStyle='#edf4d0';ctx.fillRect(x-1,y-3,2,2)}
 const nearby=s.world.near(s.camera.x+W/2,s.camera.y+H/2,Math.max(W,H)/2+100).filter(o=>!s.arena||o.x<s.arena.x-25||o.x>s.arena.x+s.arena.w+25||o.y<s.arena.y-25||o.y>s.arena.y+s.arena.h+25);const environment=nearby.map(o=>({y:o.y,draw:()=>s.world.drawObject(ctx,images,o,s.p)}));for(const c of s.chests)if(!c.opened&&visible(c,70))environment.push({y:c.y,draw:()=>drawChest(c)});for(const l of s.lamps)if(l.hp>0&&visible(l,50))environment.push({y:l.y,draw:()=>drawLamp(l)});for(const p of s.pickups)if(visible(p,40))environment.push({y:p.y,draw:()=>drawPickup(p)});const entities=s.enemies.map(e=>({y:e.y,draw:()=>EnemyArt.drawEnemy(e,SkillArt.lift(e))}));EnemyArt.drawCorpses(entities);
 if(s.boss){const b=s.boss;for(const c of b.clones)entities.push({y:c.y,draw:()=>sprite(b.sprite||'kakashi','idle',c.x,c.y,b.facing,.35)});entities.push({y:b.y,draw:()=>{sprite(b.sprite||'kakashi',b.phase==='warn'?'cast':b.phase==='dash'?'run':'idle',b.x,b.y,b.facing,1,0,b.hit>0,b.phase==='warn'?Math.min(.254,1.25-b.timer):null);if(b.phase==='stun'){ctx.fillStyle='#ffe1a2';for(let i=0;i<3;i++)ctx.fillRect(Math.round(b.x-15+i*13),Math.round(b.y-61+Math.sin(s.t*8+i)*3),4,4)}if(b.phase==='dash'&&b.pattern!=='pulse'&&b.sprite!=='enemy_brute'){const im=images.lightning;ctx.drawImage(im,Math.round(b.x-42+b.facing*15),Math.round(b.y-65),76,76)}}})}
 for(let i=0;i<s.summons.length;i++){const c=s.summons[i];entities.push({y:c.y,draw:()=>sprite(s.form,c.action?'cast':c.moving?'run':'idle',c.x,c.y,c.facing,.72,i,false,c.action?c.action.age:null)})}
 Growth.draw(entities);TeamSeven.draw(entities);SkillArt.draw(entities);entities.push({y:s.p.y,draw:()=>{if(!SkillArt.hidden(s.p))sprite(s.form,s.p.action?'cast':s.p.moving?'run':'idle',s.p.x,s.p.y,s.p.facing,s.p.inv>0&&Math.sin(s.t*40)>0?.4:1,0,false,s.p.action?s.p.action.age:null)}});entities.push(...environment);entities.sort((a,b)=>a.y-b.y);for(const e of entities)e.draw();
 drawMainHealth();
 for(const q of s.shots){ctx.save();ctx.translate(Math.round(q.x),Math.round(q.y));if(q.element==='shuriken'){ctx.rotate(s.t*22);const width=q.kind==='clone'?22:26,height=Math.round(width*images.shuriken.height/images.shuriken.width);ctx.drawImage(images.shuriken,-Math.floor(width/2),-Math.floor(height/2),width,height)}else if(['water','sand','clay'].includes(q.element)){ctx.rotate(q.angle);if(q.element==='clay')ctx.drawImage(images.clayBird,-17,-12,34,24);else{ctx.fillStyle=q.element==='water'?'#a6e5f2':'#d6b57f';ctx.beginPath();ctx.arc(0,0,9,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#f2ebca';ctx.lineWidth=2;ctx.stroke();}}else if(q.element==='fire'){ctx.rotate(q.angle);ctx.drawImage(images.sasukeFire,-24,-16,48,32)}else if(q.kind==='wind'){ctx.rotate(s.t*8);ctx.drawImage(images.rasenshuriken,-25,-25,50,50)}else{ctx.rotate(s.t*10);const size=q.kind==='clone'?19:25;ctx.drawImage(images[q.element==='lightning'?'lightning':'rasengan'],-size/2,-size/2,size,size)}ctx.restore()}
 for(const f of s.fx)drawEffect(f);drawMelee();
 if(s.arena)drawSeal(s.arena);
 // Danger indicators are rendered above all player spells and characters.
 if(s.boss&&s.boss.phase==='warn'&&s.boss.pattern!=='pulse'){const d=s.boss.dash;ctx.save();ctx.translate(Math.round(d.x),Math.round(d.y));ctx.rotate(Math.atan2(d.dy,d.dx));ctx.fillStyle='#cf644e55';ctx.fillRect(0,-26,850,52);ctx.strokeStyle='#ffe0a2';ctx.lineWidth=2;ctx.setLineDash([10,8]);ctx.strokeRect(0,-26,850,52);ctx.setLineDash([]);ctx.fillStyle='#f2b179';for(let i=40;i<650;i+=50){ctx.beginPath();ctx.moveTo(i,-8);ctx.lineTo(i+10,0);ctx.lineTo(i,8);ctx.stroke()}ctx.restore()}
 if(s.boss&&s.boss.phase==='warn'&&s.boss.pattern==='pulse'){const b=s.boss;ctx.save();ctx.fillStyle='#dc795b44';ctx.strokeStyle='#ffe0a2';ctx.lineWidth=3;ctx.beginPath();ctx.arc(b.x,b.y,RunFlow.plans[s.bossStep].radius,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.restore();}
 for(const t of s.texts){ctx.globalAlpha=t.life/.65;ctx.fillStyle='#1b2a24';ctx.font='12px Pixel,monospace';ctx.textAlign='center';ctx.fillText(t.text,Math.round(t.x)+1,Math.round(t.y)+1);ctx.fillStyle=t.color;ctx.fillText(t.text,Math.round(t.x),Math.round(t.y));ctx.globalAlpha=1}ctx.textAlign='left';TeamSeven.drawGraveLabels();ctx.restore();drawWorldHUD()}
function visible(o,pad=0){return o.x>s.camera.x-pad&&o.x<s.camera.x+W+pad&&o.y>s.camera.y-pad&&o.y<s.camera.y+H+pad}
function drawChest(c){const x=Math.round(c.x),y=Math.round(c.y);if(!c.opened){const n=2+Math.round(Math.sin(s.t*4+c.x)*2);ctx.fillStyle='#edc66e25';ctx.fillRect(x-24,y-29-n,48,40+n);ctx.fillStyle='#ffe7a5';ctx.fillRect(x-2,y-44-n,4,4);ctx.fillRect(x+17,y-28,2,2)}ctx.drawImage(images[c.opened?'chestOpen':'chestClosed'],x-20,y-35,40,40)}
function drawLamp(l){s.world.tileDraw(ctx,images.terrain,16,l.x-16,l.y-23);s.world.tileDraw(ctx,images.terrain,15,l.x-16,l.y-44);ctx.fillStyle='#f3be6b22';ctx.fillRect(l.x-21,l.y-43,42,44)}
function drawPickup(p){const y=Math.round(p.y-14+Math.sin(p.phase*4)*3),x=Math.round(p.x),im=images[p.kind==='food'?'food':p.kind==='skill'?'scroll':'magnet'],width=p.kind==='skill'?38:30,height=Math.round(width*im.height/im.width);ctx.drawImage(im,x-Math.floor(width/2),y-Math.floor(height/2),width,height)}
function skillStage(c){const intro=Math.min(.12,c.duration*.2),outro=Math.min(.22,c.duration*.3);return c.age<intro?'appear':c.age>=c.duration-outro?'disperse':'sustain'}
function drawMelee(){for(const c of s.zones){const intro=Math.min(.12,c.duration*.2),outro=Math.min(.22,c.duration*.3),stage=skillStage(c);ctx.save();if(c.element==='rasengan'){const frame=Math.floor(c.age/.09)%2,size=Math.round(c.radius*2+12),im=c.radius>40?images.oodamaLoop:images.rasenganLoop;ctx.globalAlpha=Math.min(1,.45+c.age/.1,Math.max(0,(c.duration-c.age)/.18));ctx.drawImage(im,frame*32,0,32,32,Math.round(c.x-size/2),Math.round(c.y-size/2),size,size)}else if(c.element==='water'||c.element==='sand'){ctx.globalAlpha=Math.min(1,c.age/.1,(c.duration-c.age)/.2);if(c.element==='sand')ctx.drawImage(images.sandHit,c.x-32,c.y-35,64,60);else{ctx.strokeStyle='#9edfea';ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(c.x,c.y,c.radius,c.radius*.6,0,0,Math.PI*2);ctx.stroke();}}else if(c.element==='impact'||c.element==='fire'){const progress=c.age/c.duration;ctx.globalAlpha=Math.min(1,c.age/.1,(c.duration-c.age)/.2);if(c.element==='fire'){ctx.drawImage(images.sasukeFire,c.x-38,c.y-30,76,55)}else{ctx.strokeStyle='#f0adbb';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(c.x,c.y+15,c.radius*(.6+progress*.4),c.radius*.4,0,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#b69a75';for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.fillRect(c.x+Math.cos(a)*c.radius*progress,c.y+Math.sin(a)*c.radius*.5*progress-10,5,5)}}}else{let scale=stage==='appear'?.35+.65*c.age/intro:1;ctx.globalAlpha=stage==='disperse'?Math.max(0,(c.duration-c.age)/outro):1;const im=c.element==='wind'?images.rasenshuriken:stage==='disperse'?images['lightning-end']:images.lightning,size=(c.element==='wind'?c.radius*2:Math.max(60,c.radius*2))*scale;ctx.translate(Math.round(c.x),Math.round(c.y));if(c.element==='wind')ctx.rotate(c.age*15);ctx.drawImage(im,-size/2,-size/2,size,size)}ctx.restore()}}

function drawSeal(a){ctx.fillStyle='#26334577';ctx.fillRect(a.x-10,a.y-10,a.w+20,8);ctx.fillRect(a.x-10,a.y+a.h+2,a.w+20,8);ctx.fillRect(a.x-10,a.y-2,8,a.h+4);ctx.fillRect(a.x+a.w+2,a.y-2,8,a.h+4);ctx.strokeStyle='#efc785';ctx.lineWidth=3;ctx.strokeRect(a.x,a.y,a.w,a.h);ctx.strokeStyle='#ea9c76';ctx.lineWidth=1;ctx.strokeRect(a.x-5,a.y-5,a.w+10,a.h+10);for(const x of[a.x,a.x+a.w])for(const y of[a.y,a.y+a.h]){ctx.fillStyle='#283b2b';ctx.fillRect(x-8,y-23,16,31);ctx.fillStyle='#e5c381';ctx.fillRect(x-5,y-19,10,21);ctx.fillStyle='#675a3a';ctx.fillRect(x-2,y-15,4,13)}ctx.fillStyle='#f2d298';for(let i=0;i<12;i++){const x=a.x+(s.t*35+i*37)%a.w;ctx.fillRect(Math.round(x),a.y-2,3,5);ctx.fillRect(Math.round(x),a.y+a.h-2,3,5)}}
function drawWorldHUD(){if(state==='intro')return;const map=$('minimap');if(map&&!s.boss){s.world.drawMap(map.getContext('2d'),88,88,s.p,s.chests,s.arena,true)}const nearest=s.world.nearestChest(s.chests,s.p,s.arena);const label=$('chestGuide');if(label)label.textContent=nearest?'宝箱 '+Math.round(nearest.distance/16)+' 米':'区域宝箱已开启';if(nearest&&nearest.distance>260){const dx=nearest.item.x-s.p.x,dy=nearest.item.y-s.p.y,len=Math.hypot(dx,dy),x=clamp(W/2+dx/len*(W/2-30),25,W-25),y=clamp(H*.52+dy/len*(H*.4),130,H-100);ctx.save();ctx.translate(Math.round(x),Math.round(y));ctx.rotate(Math.atan2(dy,dx));ctx.fillStyle='#f2d58c';ctx.beginPath();ctx.moveTo(7,0);ctx.lineTo(-5,-5);ctx.lineTo(-5,5);ctx.closePath();ctx.fill();ctx.restore()}}
function pause(){if(s.skillLab&&state==='play'){SkillLab.menu();return;}if(state==='play'){state='paused';keys={};release();$('modal').classList.remove('choice-screen','squad-pause');$('modal').classList.add('squad-pause');$('modal').hidden=false;$('modal').innerHTML=`<section class="pause-panel"><div class="pause-top"><div><small>SURVIVAL / 试炼暂停</small><h2>小队情报</h2></div><b>${format(s.t)}</b></div><div class="pause-scroll"><article class="pause-main"><img src="${SkillArt.portrait(Growth.main())}" alt="主控"><div><strong>${forms[s.form].name} <em>主控 · Lv.${s.level}</em></strong><small>生命 ${Math.max(0,Math.ceil(s.p.hp))} / ${Math.round(mainMaxHp())}</small><p>${Growth.summary()}</p></div></article><h3>支援队友 ${s.allies.length}/3</h3>${s.allies.length?TeamSeven.pauseCards():'<p>升级时选择支援卡，逐步组成小队。</p>'}${SquadLinks.panel()}<h3>本关首领</h3><p>${RunFlow.plans.map((p,i)=>(i+1)+'. '+p.name+' · '+({pending:'未挑战',skipped:'已跳过',defeated:'已击败'})[s.bossLedger[i]]).join('<br>')}</p><h3>战斗倍速</h3><div class="run-speed-options">${[1,1.5,2,3].map(n=>`<button data-run-speed="${n}" class="${RunFlow.speed===n?'active':''}">${n}×</button>`).join('')}</div><div class="pause-team-buffs"><h3>全队被动</h3><p>忍术冷却 −${s.haste*7}% · 伤害 +${s.teamPower*10+s.reserve*2}%<br>最大生命 +${s.teamVital*12}%${s.reserveRegen?' · 每秒恢复 '+s.reserveRegen+' 生命':''}</p></div></div><div class="pause-actions"><button class="primary" id="resume">继续试炼</button>${DebugMode.enabled?'<button class="pause-secondary" id="pauseBoss">调试工具 <small>升级 / 跳转首领</small></button>':''}<button class="text-btn" id="quit">返回首页</button></div></section>`;$('resume').onclick=pause;if($('pauseBoss'))$('pauseBoss').onclick=()=>RunFlow.debugPanel();$('quit').onclick=goHome;document.querySelectorAll('[data-run-speed]').forEach(b=>b.onclick=()=>RunFlow.setSpeed(Number(b.dataset.runSpeed)));}else if(state==='paused'){$('modal').hidden=true;$('modal').classList.remove('squad-pause');state='play';}}

function info(kind){$('modal').classList.remove('choice-screen','squad-pause');if(!['intro','play'].includes(state))return;viewReturn=state;if(state==='intro')$('startOverlay').appendChild($('modal'));state='info';keys={};release();let title,body;
 if(kind==='map'){title='木叶村 · 演习地图';body='<canvas id="fullMap" width="300" height="300" aria-label="木叶村地图"></canvas><p>白色为当前位置 / 金色为未开启宝箱。<br>自由探索村内街区、村口与外围林地。</p>'}
 else if(kind==='credits'){title='素材来源与鸣谢';body='<div class="credits-text"><p>人物与忍术：剑jian / 5DPLAY Game Studio《死神 VS 火影》公开素材。</p><p><a href="https://github.com/5DPLAY-Game-Studio/BleachVsNaruto_TagAssets" target="_blank" rel="noopener">5DPLAY 素材仓库 ↗</a></p><p>小鸣人：《Naruto: Ninja Council 2》，精灵表贡献者 Deekman。</p><p><a href="https://www.spriters-resource.com/game_boy_advance/narutonc2/asset/14390/" target="_blank" rel="noopener">小鸣人精灵表 ↗</a></p><p>木叶村中央街区：《Naruto RPG》GBA，精灵表贡献者 Naruto[NU]。外围地表与树木：Kenney Roguelike/RPG Pack，CC0。<br>中文像素字体：TakWolf / Fusion Pixel Font，OFL-1.1。</p><p>首页全身立绘来自万代南梦宫《NARUTO X BORUTO 终极风暴羁绊》官方角色页。图鉴旧立绘来自 Naruto Mobile Hub，双仙人为 Narutopedia 图像。首页矢量 Logo、图标与背景由代码绘制；战斗保持像素风。木叶标志来自 Ninja Council 2 原版图集，Naruto[NU] 提取。卷轴与兵粮丸来自 Naruto Story 的真实物品页面。螺旋丸来自 DS《Naruto Shippuden: Shinobi Rumble》效果图集，Neimad 提取。<br>同人非官方样机。角色及原作内容归相应权利人。</p><p><a href="assets/catalog/index.html" target="_blank">全部角色与技能素材清单 ↗</a></p><p><a href="assets/asset-reference.html" target="_blank">道具与螺旋丸素材对照 ↗</a></p><p><a href="assets/CREDITS.txt" target="_blank">完整素材记录 ↗</a></p></div>'}
 else if(kind==='records'){title='试炼战绩';body=`<p>标准局通关 ${best.wins} 次 / 最高击破 ${best.kills}<br>快速 Boss 通关 ${best.quickWins} 次</p><p>记录保存在当前浏览器。快速体验与标准局独立统计。</p>`}
 else if(kind==='ninja'){title='升级招募小队';body='<p>单人开局，升级招募最多3名支援。未满队时提供2名支援和1项技能，满队后提供3项技能。局内没有主控切换与变身。</p><p>支援角色等级跟随主控，技能与奥义固定Lv.1，倒地5个战斗秒后复活；暂停冻结计时。主控死亡则结束。</p>'}
 else if(kind==='jutsu'||kind==='build'){title='本局小队构筑';body=`<p>主控：${RecruitRun.get(s.mainKey)?.name||forms[s.form].name} / Lv.${s.level}</p><p class="build-skill-summary">${Growth.summary()}</p><div class="modal-list">${upgradeDefinitions.filter(u=>s[u.id]>0).map(u=>`<div><span>${u.name}</span><span>Lv.${s[u.id]}</span></div>`).join('')}</div><p>支援 ${s.allies.length}/3：${s.allies.length?s.allies.map(a=>a.name+'（'+RecruitRun.natureText(a.profile)+'）').join('、'):'尚未招募'}</p><p>通用技能：${s.commonSkill?.name||'未携带'}<br>通灵兽：${s.summonSkill?.name||'未携带'}</p><p>升级只强化主控技能或全队被动；支援角色等级同步，技能与奥义保持Lv.1。</p>`}
 else{title='操作指南';body='<p>拖动移动主控，全员自动攻击。近战忍术需要接近敌人。开局可排除0–3种招募属性，每个形态只有一种属性；全是独立第八类，按对应属性排除。</p><p>升级未满队：2名支援+1项技能；满3名支援后全是技能。支援角色等级同步，技能与奥义固定Lv.1，倒地5个战斗秒后满血复活。局内不变身、不切换主控。</p><p>每关约15分钟，5/10分钟小首领，13分钟大首领，15分钟超时。战斗右下角切换1/1.5/2/3倍速；暂停查看队友技能和调试工具，支持升级与指定首领跳转。调试不写入正式战绩。</p><p>宝箱被攻击后留下忍术卷轴、兵粮丸或吸铁石，靠近拾取。</p>'}
 $('modal').hidden=false;$('modal').innerHTML=`<p class="eyebrow">SHINOBI ARCHIVES</p><h2>${title}</h2>${body}<button class="primary" id="closeInfo">${viewReturn==='play'?'继续试炼':'返回首页'} →</button>`;if(kind==='map'){const c=$('fullMap');s.world.drawMap(c.getContext('2d'),300,300,s.p,s.chests,s.arena,false)}$('closeInfo').onclick=()=>{state=viewReturn;$('modal').hidden=true;document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.view==='trial'))}}
const roster=[{id:'naruto',name:'漩涡鸣人',portrait:'shippuden',subtitle:'第七班主控 / 螺旋丸与分身',description:'固定疾风传形象，局内强化主动与被动；佐助、小樱、卡卡西自动支援。'}];
function updateCharacterUI(){if(lastCharacter===s.mainKey)return;lastCharacter=s.mainKey;const u=Growth.main();$('characterKana').textContent='';$('characterQuote').textContent=u.kit.passive.name;$('characterMotto').textContent=u.passive;$('coreIcon').src=SkillArt.icon(u,'primary');$('evolutionTrack').innerHTML=`<div class="era active"><img src="${SkillArt.portrait(u)}" alt="${u.name}"><span>${u.name}</span><small>本局主控</small></div>`;}

function openRoster(){if(state!=='intro')return;if(window.HubUI){HubUI.setPage('ninja');return;}const el=$('rosterOverlay');el.hidden=false;renderRoster()}
function renderRoster(){$('rosterCards').innerHTML=roster.map(c=>`<button class="roster-card ${selectedCharacter===c.id?'selected':''}" data-character="${c.id}"><span class="roster-selected">${selectedCharacter===c.id?'已选择 ✓':'选择出战'}</span><img src="assets/${c.portrait}-portrait.png" alt="${c.name}"><h3>${c.name}</h3><small>${c.subtitle}</small><p>${c.description}</p></button>`).join('');document.querySelectorAll('[data-character]').forEach(b=>b.onclick=()=>{selectedCharacter=b.dataset.character;try{localStorage.setItem('shinobi-selected-character',selectedCharacter)}catch{}s=idleState();lastForm='';updateHud();renderRoster();updateRosterPreview()})}
function updateRosterPreview(){if(window.HubUI)HubUI.refreshHome()}
$('chooseNinja').onclick=$('chooseNinjaMobile').onclick=openRoster;$('closeRoster').onclick=$('confirmRoster').onclick=()=>{$('rosterOverlay').hidden=true};$('rosterOverlay').addEventListener('click',e=>{if(e.target===$('rosterOverlay'))$('rosterOverlay').hidden=true});
$('homeRoster').onclick=$('homeNinja').onclick=openRoster;$('homeHelp').onclick=()=>info('help');$('homeCredits').onclick=()=>info('credits');$('homeJutsu').onclick=()=>info('jutsu');$('homeRecords').onclick=()=>info('records');$('homeTrial').onclick=()=>{if(state==='info')$('closeInfo')?.click()};
$('start').onclick=()=>assetsReady?reset():preload();$('quick').onclick=()=>reset(true);$('pause').onclick=pause;$('build').onclick=()=>info('build');$('help').onclick=()=>info('help');if($('mapButton'))$('mapButton').onclick=()=>info('map');if($('minimap'))$('minimap').onclick=()=>info('map');$('credits').onclick=$('footerCredits').onclick=()=>info('credits');$('sound').onclick=()=>{muted=!muted;$('sound').textContent=muted?'♪':'♫';$('sound').title=$('sound').ariaLabel=muted?'开启音效':'关闭音效';if(!muted)sound(600)};
 document.querySelectorAll('.nav').forEach(n=>n.onclick=()=>{if(n.dataset.view==='ninja'&&state==='intro'){openRoster();return}if(n.dataset.view==='trial'){if(state==='info')$('closeInfo')?.click();return}info(n.dataset.view);if(state==='info')document.querySelectorAll('.nav').forEach(e=>e.classList.toggle('active',e===n))});
window.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select'))return;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key))e.preventDefault();keys[e.key.length===1?e.key.toLowerCase():e.key]=true;if(e.code==='Escape'){if(!$('rosterOverlay').hidden)$('rosterOverlay').hidden=true;else pause()}});window.addEventListener('keyup',e=>{keys[e.key.length===1?e.key.toLowerCase():e.key]=false});window.addEventListener('blur',()=>{keys={};release();if(state==='play')pause()});document.addEventListener('visibilitychange',()=>{if(document.hidden&&state==='play')pause()});
const shell=$('shell');shell.addEventListener('pointerdown',e=>{if(state!=='play'||pointer||e.target.closest('button,#minimap'))return;const r=shell.getBoundingClientRect(),x=(e.clientX-r.left)*W/r.width,y=(e.clientY-r.top)*H/r.height;pointer={id:e.pointerId,sx:x,sy:y,x,y};shell.setPointerCapture(e.pointerId);const j=$('joystickBase');j.style.display='block';j.style.left=(e.clientX-r.left-40)+'px';j.style.top=(e.clientY-r.top-40)+'px'});shell.addEventListener('pointermove',e=>{if(!pointer||pointer.id!==e.pointerId)return;const r=shell.getBoundingClientRect();pointer.x=(e.clientX-r.left)*W/r.width;pointer.y=(e.clientY-r.top)*H/r.height;const dx=clamp(pointer.x-pointer.sx,-26,26),dy=clamp(pointer.y-pointer.sy,-26,26);$('joystickBase').firstElementChild.style.transform=`translate(${dx}px,${dy}px)`});function release(){pointer=null;$('joystickBase').style.display='none'}shell.addEventListener('pointerup',release);shell.addEventListener('pointercancel',release);shell.addEventListener('lostpointercapture',release);
async function preload(){const run=preload.sequence=(preload.sequence||0)+1;assetsReady=false;if($('debugHomeOpen'))$('debugHomeOpen').disabled=true;if(window.HubUI)HubUI.battleFailed=false;$('start').disabled=true;$('quick').disabled=true;$('start').textContent='正在准备…';window.HubUI?.gameProgress(0,'正在载入忍界…');try{EnemyArt.init();const response=await fetch('assets/sprites.json?v=mobile22',{signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error('sprites');spriteMeta=await response.json();spriteMeta.enemy={...spriteMeta.kakashi,file:'assets/training-clone.png'};const urls={};for(const [key,meta]of Object.entries(spriteMeta))if(!meta.file.includes('skills-v23'))urls[key]=meta.file;Object.assign(urls,{sasukeFire:'assets/sasuke-fire.png',clayBird:'assets/clay-bird.png',sandHit:'assets/sand-hit.png',terrain:'assets/world-tiles.png',town:'assets/konoha-town-delivery.webp',chestOpen:'assets/chest-open.png',chestClosed:'assets/chest-closed.png',food:'assets/pickup-pill-existing.png',magnet:'assets/pickup-magnet.png',scroll:'assets/pickup-scroll-existing.png',rasengan:'assets/rasengan-ds-icon.png',rasenganLoop:'assets/rasengan-ds-loop.png',oodamaLoop:'assets/oodama-ds-loop.png',shuriken:'assets/shuriken.png',rasenshuriken:'assets/rasenshuriken.png',smoke:'assets/smoke.png','smoke-end':'assets/smoke-end.png',lightning:'assets/lightning.png','lightning-end':'assets/lightning-end.png'});Object.assign(urls,EnemyArt.files);const entries=Object.entries(urls);let loaded=0;await Promise.all(entries.map(([key,url])=>new Promise((resolve,reject)=>{const im=new Image(),timer=setTimeout(()=>reject(Error('asset timeout: '+key)),15000);im.onload=()=>{clearTimeout(timer);if(run===preload.sequence){images[key]=im;loaded++;window.HubUI?.gameProgress(.08+.92*loaded/entries.length,'正在集结忍者…')}resolve()};im.onerror=()=>{clearTimeout(timer);reject(Error('asset: '+key))};im.src=url})));if(run!==preload.sequence)return;await SkillArt.ensure(RecruitRun.mainKey);assetsReady=true;$('start').disabled=false;$('quick').disabled=false;$('start').textContent='快速开始';window.HubUI?.gameProgress(1,'正在进入木叶…');if($('debugHomeOpen'))$('debugHomeOpen').disabled=false;OriginalNinja.readyUI();document.querySelectorAll('[data-action="skill-lab"]').forEach(b=>b.disabled=false)}catch(error){if(run!==preload.sequence)return;$('start').disabled=false;$('start').textContent='重试战斗加载';if(window.HubUI)HubUI.battleFailed=true;console.warn('Pixel assets could not load',error)}}
function fitBattle(){if(document.body.dataset.home!=='false')return;const r=$('shell').getBoundingClientRect();if(!r.width||!r.height)return;const scale=r.width/480,nw=Math.round(r.width/scale),nh=Math.round(r.height/scale);if(nw===W&&nh===H)return;W=nw;H=nh;canvas.width=W;canvas.height=H;ctx.imageSmoothingEnabled=false;if(s){s.camera.x=clamp(s.p.x-W/2,0,s.world.width-W);s.camera.y=clamp(s.p.y-H*.52,0,s.world.height-H);if(s.arena){s.arena=squadArena();s.world.move(s.p,0,0,12,s.arena);for(const a of s.allies)s.world.move(a,0,0,12,s.arena);if(s.boss)s.world.move(s.boss,0,0,19,s.arena)}}}
window.addEventListener('resize',fitBattle);
SkillArt.init();BuildInspect.init();RecruitRun.init();RunFlow.init();s=idleState();document.body.dataset.home='true';document.body.dataset.playing='false';updateHud();updateRosterPreview();window.HubUI?.init();OriginalNinja.initUI();preload();let last=performance.now();function frame(t){const dt=Math.min(Math.max((t-last)/1000,0),.1);last=t;RunFlow.advance(dt);UltimateCue.update(dt);draw();requestAnimationFrame(frame)}requestAnimationFrame(frame);
