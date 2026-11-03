/* WebAudio 合成音效与8-bit风格BGM（无外部音频文件） */
window.Sfx = (function () {
  let ctx = null, master, sfxG, musG, noiseBuf;
  const last = {};
  let musicTimer = null, curTrack = null, pendingTrack = null, step = 0, nextTime = 0;

  let bgSuspended = false;   // 因切后台而主动挂起
  function safeResume() {
    if (!ctx || bgSuspended) return;
    if (ctx.state !== 'running' && ctx.resume) { try { const p = ctx.resume(); p && p.catch && p.catch(() => { }); } catch (e) { } }
  }
  function init() {
    if (ctx) { safeResume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try { ctx = new AC(); } catch (e) { ctx = null; return; }
    // iOS: 'interrupted'（来电/切应用）或 'suspended' 时，重新挂上首触解锁监听，下次触摸即可恢复
    ctx.onstatechange = () => { if (ctx.state !== 'running' && !bgSuspended) armUnlock(); };
    master = ctx.createGain(); master.gain.value = 0.55; master.connect(ctx.destination);
    sfxG = ctx.createGain(); sfxG.connect(master);
    musG = ctx.createGain(); musG.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    apply();
    if (pendingTrack) { const t = pendingTrack; pendingTrack = null; music(t); }
  }
  function apply() {
    if (!ctx) return;
    const s = Save.data.settings;
    sfxG.gain.value = s.sfx ? 1 : 0;
    musG.gain.value = s.music ? 0.28 : 0;
  }
  function tone(freq, dur, type, vol, slideTo, delay, dest) {
    const t = ctx.currentTime + (delay || 0);
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'square';
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(vol || 0.1, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(dest || sfxG);
    o.start(t); o.stop(t + dur + 0.03);
  }
  function noise(dur, vol, freq, ftype, delay, dest) {
    const t = ctx.currentTime + (delay || 0);
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = ftype || 'lowpass'; f.frequency.value = freq || 2000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol || 0.1, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f); f.connect(g); g.connect(dest || sfxG);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.03);
  }
  const defs = {
    click: () => tone(880, 0.06, 'square', 0.05, 1320),
    select: () => { tone(660, 0.07, 'square', 0.06); tone(990, 0.1, 'square', 0.06, null, 0.06); },
    throw: () => tone(1400, 0.05, 'square', 0.025, 600),
    hit: () => noise(0.05, 0.08, 2500, 'bandpass'),
    kill: () => tone(300, 0.08, 'square', 0.03, 120),
    gem: () => tone(1500 + Math.random() * 300, 0.05, 'triangle', 0.05, 2200),
    coin: () => { tone(1320, 0.05, 'square', 0.04); tone(1760, 0.1, 'square', 0.04, null, 0.05); },
    levelup: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.14, 'square', 0.06, null, i * 0.07)),
    fire: () => noise(0.25, 0.1, 900, 'lowpass'),
    boom: () => { noise(0.35, 0.18, 600, 'lowpass'); tone(120, 0.3, 'sine', 0.15, 40); },
    chidori: () => { noise(0.25, 0.1, 5000, 'highpass'); tone(1800, 0.2, 'sawtooth', 0.03, 300); },
    thunder: () => { noise(0.6, 0.22, 1200, 'lowpass'); tone(80, 0.5, 'sawtooth', 0.08, 30); },
    punch: () => { tone(160, 0.15, 'square', 0.1, 50); noise(0.12, 0.1, 800); },
    poof: () => noise(0.2, 0.08, 1500, 'bandpass'),
    hurt: () => tone(220, 0.15, 'sawtooth', 0.08, 90),
    heal: () => [784, 988, 1175].forEach((f, i) => tone(f, 0.12, 'triangle', 0.05, null, i * 0.05)),
    boss: () => { for (let i = 0; i < 3; i++) { tone(220, 0.25, 'sawtooth', 0.07, 180, i * 0.35); tone(233, 0.25, 'square', 0.04, null, i * 0.35); } },
    chest: () => [392, 523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.18, 'triangle', 0.07, null, i * 0.06)),
    gacha: () => { for (let i = 0; i < 10; i++) tone(300 + i * 80, 0.12, 'triangle', 0.04, null, i * 0.08); },
    revealR: () => tone(880, 0.2, 'triangle', 0.07),
    revealSR: () => [660, 880, 1320].forEach((f, i) => tone(f, 0.2, 'triangle', 0.07, null, i * 0.06)),
    revealSSR: () => { [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, 0.3, 'square', 0.05, null, i * 0.07)); noise(0.8, 0.06, 6000, 'highpass', 0.1); },
    win: () => [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => tone(f, 0.25, 'square', 0.06, null, i * 0.12)),
    lose: () => [392, 349, 311, 262].forEach((f, i) => tone(f, 0.35, 'triangle', 0.08, null, i * 0.2))
  };
  const gaps = { hit: 45, throw: 70, gem: 40, kill: 50, coin: 60, fire: 120, boom: 90 };
  function play(name) {
    if (!ctx || !Save.data.settings.sfx) return;
    const now = performance.now();
    if (last[name] && now - last[name] < (gaps[name] || 25)) return;
    last[name] = now;
    try { defs[name] && defs[name](); } catch (e) { }
  }

  /* --- BGM：都节音阶（日式五声）简单编曲 --- */
  const m = n => 440 * Math.pow(2, (n - 69) / 12);
  const tracks = {
    lobby: {
      bpm: 88,
      mel: [74, null, 75, null, 79, null, 81, 79, 75, null, 74, null, 70, null, null, null,
            74, null, 79, null, 81, null, 82, 81, 79, null, 75, 74, 75, null, null, null],
      bass: [50, 50, 55, 55, 58, 58, 55, 55], wave: 'triangle'
    },
    battle: {
      bpm: 138,
      mel: [74, null, 75, 74, 70, null, 69, null, 70, 74, 75, null, 79, null, 77, 75,
            74, null, 75, 79, 81, null, 79, 75, 74, null, 70, null, 69, null, 70, null],
      bass: [38, 38, 50, 38, 43, 43, 55, 43, 46, 46, 58, 46, 45, 45, 57, 45], wave: 'square', drums: true
    },
    boss: {
      bpm: 156,
      mel: [62, 63, 62, null, 58, null, 57, null, 62, 63, 67, null, 68, null, 67, 63,
            62, 63, 62, null, 58, 57, 58, null, 55, null, 56, null, 57, null, null, null],
      bass: [38, 38, 38, 39, 38, 38, 36, 37], wave: 'sawtooth', drums: true
    }
  };
  function schedule() {
    if (!ctx || !curTrack) return;
    const tr = tracks[curTrack], spb = 60 / tr.bpm / 2;
    while (nextTime < ctx.currentTime + 0.15) {
      const t = nextTime - ctx.currentTime;
      const n = tr.mel[step % tr.mel.length];
      if (n) tone(m(n), spb * 1.6, tr.wave, curTrack === 'lobby' ? 0.08 : 0.045, null, t, musG);
      if (step % 2 === 0) {
        const b = tr.bass[(step / 2) % tr.bass.length];
        tone(m(b), spb * 1.8, curTrack === 'lobby' ? 'sine' : 'triangle', 0.12, null, t, musG);
      }
      if (tr.drums) {
        if (step % 4 === 0) tone(110, 0.12, 'sine', 0.2, 40, t, musG);
        if (step % 2 === 1) noise(0.04, 0.05, 7000, 'highpass', t, musG);
        if (step % 8 === 4) noise(0.12, 0.09, 1800, 'bandpass', t, musG);
      }
      nextTime += spb; step++;
    }
  }
  function music(track) {
    if (curTrack === track && musicTimer) return;
    stopMusic();
    if (!ctx) { pendingTrack = track; return; }
    curTrack = track; step = 0; nextTime = ctx.currentTime + 0.1;
    musicTimer = setInterval(schedule, 30);
  }
  function stopMusic() { if (musicTimer) clearInterval(musicTimer); musicTimer = null; curTrack = null; }

  /* ---------- iOS / Android 首次触摸解锁 ----------
   * iOS Safari 要求在用户手势回调内创建/resume AudioContext 并实际播放一次声音。
   * 这里在首个 touchstart/touchend/pointerdown/click/keydown 时：创建或 resume 上下文 + 播放 1 帧静音 buffer，
   * 成功进入 running 后移除监听；若仍未 running（某些 iOS 版本只认 touchend），保留监听等待下一次手势。 */
  const UNLOCK_EVENTS = ['touchstart', 'touchend', 'pointerdown', 'click', 'keydown'];
  let unlockArmed = false;
  function playSilent() {
    try {
      const b = ctx.createBuffer(1, 1, 22050), src = ctx.createBufferSource();
      src.buffer = b; src.connect(ctx.destination);
      if (src.start) src.start(0); else if (src.noteOn) src.noteOn(0);
    } catch (e) { }
  }
  function onUnlockGesture() {
    if (typeof Save === 'undefined' || !Save.data) return;
    bgSuspended = false;
    init();
    if (!ctx) { disarmUnlock(); return; }
    safeResume(); playSilent();
    if (ctx.state === 'running') disarmUnlock();
  }
  function armUnlock() {
    if (unlockArmed || typeof window === 'undefined' || !window.addEventListener) return;
    unlockArmed = true;
    UNLOCK_EVENTS.forEach(ev => window.addEventListener(ev, onUnlockGesture, { capture: true, passive: true }));
  }
  function disarmUnlock() {
    if (!unlockArmed) return;
    unlockArmed = false;
    UNLOCK_EVENTS.forEach(ev => window.removeEventListener(ev, onUnlockGesture, { capture: true, passive: true }));
  }
  armUnlock();

  /* ---------- 前后台切换 ---------- */
  function suspend() {
    if (!ctx) return;
    bgSuspended = true;
    if (ctx.state === 'running' && ctx.suspend) { try { const p = ctx.suspend(); p && p.catch && p.catch(() => { }); } catch (e) { } }
  }
  function resume() {
    bgSuspended = false;
    if (!ctx) return;
    safeResume();
    // 在非手势上下文 resume 可能被拒（iOS），挂上解锁监听，玩家下一次点击时恢复
    if (ctx.state !== 'running') armUnlock();
  }
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('visibilitychange', () => { if (document.hidden) suspend(); else resume(); });
    window.addEventListener('pagehide', suspend);
    window.addEventListener('pageshow', () => { if (!document.hidden) resume(); });
  }

  return { init, play, music, stopMusic, apply, suspend, resume, get state() { return ctx ? ctx.state : 'none'; } };
})();
