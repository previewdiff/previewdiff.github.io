
(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const setText = (selector, text) => { const el = $(selector); if (el) el.textContent = text; };

  function initTreeViewer() {
    const examples = window.PREVIEWDIFF_TREE_EXAMPLES || [];
    if (!examples.length) return;

    const exampleRangeWrap = $('#tree-example-range-wrap');
    const exampleRange = $('#tree-example-range');
    const exampleName = $('#tree-example-name');
    const gif = $('#tree-gif');
    const frameImg = $('#tree-frame');
    const frameLabel = $('#tree-frame-label');
    const frameCaption = $('#tree-frame-caption');
    const frameRange = $('#tree-frame-range');
    const framePrev = $('[data-tree-frame="prev"]');
    const frameNext = $('[data-tree-frame="next"]');
    const framePlay = $('[data-tree-frame="play"]');
    const rootRange = $('#tree-root-range');
    const rootLabel = $('#tree-root-label');
    const rootImg = $('#tree-root-img');
    const rootTitle = $('#tree-root-title');
    const rootMeta = $('#tree-root-meta');
    const rootText = $('#tree-root-text');
    const rootNode = $('#tree-root-node');
    const childGrid = $('#child-grid');
    const selectedChildImg = $('#selected-child-img'); // legacy slot; absent in the refreshed layout.
    const selectedChildCaption = $('#selected-child-caption');
    const finalImg = $('#tree-final-img');
    const finalNode = $('#tree-final-node');
    const branchTree = $('#branch-tree');
    const treeLines = $('#tree-lines');
    const treePrompt = $('#tree-prompt');
    const treeNote = $('#tree-note');

    let exampleIndex = 0;
    let frameIndex = 0;
    let rootIndex = 0;
    let selectedChildIndex = 0;
    let timer = null;

    function currentExample() { return examples[exampleIndex]; }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
      if (framePlay) framePlay.textContent = 'Play';
    }

    function cp(value) { return String(parseInt(value, 10)); }

    function childSummary(child) {
      return {
        title: `fix v${child.variant} · branch ${child.branch}`,
        meta: `restart ${child.restart} · cp${child.checkpoint}`
      };
    }

    function addMarker(defs, id, color) {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', id);
      marker.setAttribute('viewBox', '0 0 10 10');
      marker.setAttribute('refX', '9');
      marker.setAttribute('refY', '5');
      marker.setAttribute('markerWidth', '7');
      marker.setAttribute('markerHeight', '7');
      marker.setAttribute('orient', 'auto-start-reverse');
      const markerPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      markerPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
      markerPath.setAttribute('fill', color);
      marker.appendChild(markerPath);
      defs.appendChild(marker);
    }

    function drawTreeLines() {
      if (!branchTree || !treeLines || !rootNode || !finalNode || !childGrid) return;
      if (window.getComputedStyle(treeLines).display === 'none') {
        treeLines.innerHTML = '';
        return;
      }

      const childCards = $$('.child-card', childGrid);
      if (!childCards.length) return;

      const bounds = branchTree.getBoundingClientRect();
      const width = Math.max(1, branchTree.clientWidth);
      const height = Math.max(1, branchTree.clientHeight);
      treeLines.setAttribute('viewBox', `0 0 ${width} ${height}`);
      treeLines.setAttribute('width', width);
      treeLines.setAttribute('height', height);
      treeLines.innerHTML = '';

      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      addMarker(defs, 'tree-arrow-muted', '#aeb1bb');
      addMarker(defs, 'tree-arrow-active', '#5a4bc2');
      treeLines.appendChild(defs);

      function rightCenter(el) {
        const box = el.getBoundingClientRect();
        return { x: box.right - bounds.left, y: box.top - bounds.top + box.height / 2 };
      }
      function leftCenter(el) {
        const box = el.getBoundingClientRect();
        return { x: box.left - bounds.left, y: box.top - bounds.top + box.height / 2 };
      }
      function curve(start, end) {
        const dx = Math.max(36, (end.x - start.x) * 0.55);
        return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} C ${(start.x + dx).toFixed(1)} ${start.y.toFixed(1)}, ${(end.x - dx * 0.35).toFixed(1)} ${end.y.toFixed(1)}, ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
      }
      function appendPath(d, active) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', `tree-line-path${active ? ' active' : ''}`);
        path.setAttribute('marker-end', active ? 'url(#tree-arrow-active)' : 'url(#tree-arrow-muted)');
        treeLines.appendChild(path);
      }

      const rootPoint = rightCenter(rootNode);
      childCards.forEach((card, idx) => {
        appendPath(curve(rootPoint, leftCenter(card)), idx === selectedChildIndex);
      });

      const selectedCard = childCards[selectedChildIndex] || childCards[0];
      if (selectedCard) {
        appendPath(curve(rightCenter(selectedCard), leftCenter(finalNode)), true);
      }
    }

    function scheduleDrawTreeLines() {
      window.requestAnimationFrame(drawTreeLines);
    }

    function setFrame(nextIndex) {
      const ex = currentExample();
      if (!ex || !ex.frames || !ex.frames.length) return;
      frameIndex = (nextIndex + ex.frames.length) % ex.frames.length;
      const frame = ex.frames[frameIndex];
      frameImg.src = frame.src;
      frameImg.alt = frame.alt || frame.label;
      frameLabel.textContent = frame.label;
      frameCaption.textContent = frame.caption;
      frameRange.value = String(frameIndex);
      frameRange.setAttribute('aria-valuetext', frame.label);
    }

    function renderChildren() {
      const ex = currentExample();
      const children = (ex.children && ex.children[String(rootIndex)]) || [];
      childGrid.innerHTML = '';
      children.forEach((child, idx) => {
        const card = document.createElement('button');
        const summary = childSummary(child);
        card.type = 'button';
        card.className = 'child-card' + (idx === selectedChildIndex ? ' active' : '');
        card.setAttribute('aria-label', child.label);
        card.innerHTML = `<img src="${child.src}" alt="${child.alt || child.label}"><span class="child-title">${summary.title}</span><span class="child-meta">${summary.meta}</span>`;
        card.addEventListener('click', () => {
          selectedChildIndex = idx;
          updateSelectedChild();
          $$('.child-card', childGrid).forEach((node, nodeIdx) => node.classList.toggle('active', nodeIdx === selectedChildIndex));
        });
        const img = card.querySelector('img');
        if (img) img.addEventListener('load', scheduleDrawTreeLines, { once: true });
        childGrid.appendChild(card);
      });
      updateSelectedChild();
      scheduleDrawTreeLines();
    }

    function updateSelectedChild() {
      const ex = currentExample();
      const children = (ex.children && ex.children[String(rootIndex)]) || [];
      const child = children[selectedChildIndex] || children[0];
      if (!child) return;
      const summary = childSummary(child);
      if (selectedChildImg) {
        selectedChildImg.src = child.src;
        selectedChildImg.alt = child.alt || child.label;
      }
      if (selectedChildCaption) {
        selectedChildCaption.textContent = `Selected continuation: ${summary.title} · ${summary.meta}.`;
      }
      scheduleDrawTreeLines();
    }

    function setRoot(nextIndex) {
      const ex = currentExample();
      if (!ex.roots || !ex.roots.length) return;
      rootIndex = (nextIndex + ex.roots.length) % ex.roots.length;
      selectedChildIndex = 0;
      const root = ex.roots[rootIndex];
      const checkpoint = cp(root.checkpoint);
      rootImg.src = root.src;
      rootImg.alt = root.alt || root.label;
      if (rootTitle) rootTitle.textContent = `root ${root.index}`;
      if (rootMeta) rootMeta.textContent = `seed ${root.seed} · cp${checkpoint}`;
      rootLabel.textContent = `root ${root.index} · seed ${root.seed} · cp${checkpoint}`;
      rootText.textContent = `Decoded at checkpoint ${checkpoint}. Its children are semantic variants and branch seeds from this root.`;
      rootRange.value = String(rootIndex);
      rootRange.setAttribute('aria-valuetext', root.label);
      renderChildren();
      scheduleDrawTreeLines();
    }

    function setExample(nextIndex) {
      stop();
      exampleIndex = (nextIndex + examples.length) % examples.length;
      const ex = currentExample();
      treePrompt.textContent = `Prompt: “${ex.prompt}”`;
      if (treeNote) treeNote.textContent = ex.note;
      if (gif) {
        gif.src = ex.gif;
        gif.alt = `Animated PreviewDiff tree generation for ${ex.prompt}.`;
      }
      if (finalImg) {
        finalImg.src = ex.final;
        finalImg.alt = `Final PreviewDiff image for ${ex.prompt}.`;
      }
      if (exampleName) exampleName.textContent = `${exampleIndex + 1} / ${examples.length}: ${ex.prompt}`;
      if (exampleRange) exampleRange.value = String(exampleIndex);
      if (frameRange) frameRange.max = String(ex.frames.length - 1);
      if (rootRange) rootRange.max = String(ex.roots.length - 1);
      frameIndex = 0;
      rootIndex = 0;
      setFrame(0);
      setRoot(0);
      scheduleDrawTreeLines();
    }

    if (examples.length > 1 && exampleRangeWrap && exampleRange) {
      exampleRangeWrap.classList.remove('hidden');
      exampleRange.min = '0';
      exampleRange.max = String(examples.length - 1);
      exampleRange.addEventListener('input', (event) => setExample(Number(event.target.value)));
      const examplePrev = $('[data-tree-example="prev"]');
      const exampleNext = $('[data-tree-example="next"]');
      if (examplePrev) examplePrev.addEventListener('click', () => setExample(exampleIndex - 1));
      if (exampleNext) exampleNext.addEventListener('click', () => setExample(exampleIndex + 1));
    }

    frameRange.addEventListener('input', (event) => { stop(); setFrame(Number(event.target.value)); });
    framePrev.addEventListener('click', () => { stop(); setFrame(frameIndex - 1); });
    frameNext.addEventListener('click', () => { stop(); setFrame(frameIndex + 1); });
    framePlay.addEventListener('click', () => {
      if (timer) { stop(); return; }
      if (prefersReducedMotion) return;
      timer = window.setInterval(() => setFrame(frameIndex + 1), 1350);
      framePlay.textContent = 'Pause';
    });
    rootRange.addEventListener('input', (event) => setRoot(Number(event.target.value)));
    $('[data-tree-root="prev"]').addEventListener('click', () => setRoot(rootIndex - 1));
    $('[data-tree-root="next"]').addEventListener('click', () => setRoot(rootIndex + 1));
    if (rootImg) rootImg.addEventListener('load', scheduleDrawTreeLines);
    if (finalImg) finalImg.addEventListener('load', scheduleDrawTreeLines);
    window.addEventListener('resize', scheduleDrawTreeLines);

    setExample(0);
  }

  function initComparisonViewer() {
    const examples = window.PREVIEWDIFF_COMPARISON_EXAMPLES || [];
    if (!examples.length) return;
    const worseBonById = {
      '000009': 'bon1',
      '000049': 'bon1',
      '000065': 'bon0',
      '000077': 'bon1',
      '000121': 'bon1',
      '000133': 'bon1',
      '000149': 'bon0',
      '000153': 'bon0',
      '000185': 'bon0',
      '000189': 'bon0',
      '000213': 'bon1',
      '000217': 'bon0',
      '000225': 'bon0',
      '000233': 'bon0',
      '000249': 'bon1'
    };
    const range = $('#example-range');
    const prev = $('[data-example="prev"]');
    const next = $('[data-example="next"]');
    const counter = $('#example-counter');
    const title = $('#example-title');
    const note = $('#example-note');
    const badges = $('#example-badges');
    const pdImg = $('#example-previewdiff');
    const bonImg = $('#example-bon');
    const pdCap = $('#example-previewdiff-cap');
    const bonCap = $('#example-bon-cap');
    let index = 0;

    function setExample(nextIndex) {
      index = (nextIndex + examples.length) % examples.length;
      const ex = examples[index];
      const bonKey = worseBonById[ex.id] || 'bon0';
      range.value = String(index);
      range.setAttribute('aria-valuetext', `${ex.rank}. ${ex.prompt}`);
      counter.textContent = `${index + 1} / ${examples.length}`;
      title.textContent = `${String(ex.rank).padStart(2, '0')} · ${ex.prompt}`;
      note.textContent = ex.note;
      badges.innerHTML = '';
      const scoreBadge = document.createElement('span');
      scoreBadge.className = 'badge score';
      scoreBadge.textContent = `PreviewDiff score ${ex.score}/4`;
      badges.appendChild(scoreBadge);
      [...new Set(ex.skills)].forEach((skill) => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = skill;
        badges.appendChild(badge);
      });
      pdImg.src = ex.previewdiff;
      bonImg.src = ex[bonKey];
      pdImg.alt = `PreviewDiff result for ${ex.prompt}.`;
      bonImg.alt = `Best-of-N result for ${ex.prompt}.`;
      pdCap.textContent = 'PreviewDiff';
      bonCap.textContent = 'Best-of-N';
    }

    range.min = '0';
    range.max = String(examples.length - 1);
    range.addEventListener('input', (event) => setExample(Number(event.target.value)));
    prev.addEventListener('click', () => setExample(index - 1));
    next.addEventListener('click', () => setExample(index + 1));
    setExample(0);
  }

  function initVideoViewer() {
    const examples = window.PREVIEWDIFF_VIDEO_EXAMPLES || [];
    if (!examples.length) return;
    const worseBonById = {
      '000002': 'bon1',
      '000010': 'bon0',
      '000018': 'bon0',
      '000030': 'bon1',
      '000046': 'bon1',
      '000146': 'bon0',
      '000154': 'bon0',
      '000166': 'bon0',
      '000242': 'bon1',
      '000246': 'bon0'
    };

    const viewer = $('#video-viewer');
    const range = $('#video-example-range');
    const prev = $('[data-video-example="prev"]');
    const next = $('[data-video-example="next"]');
    const toggle = $('[data-video-action="toggle"]');
    const restart = $('[data-video-action="restart"]');
    const counter = $('#video-example-counter');
    const title = $('#video-example-title');
    const prompt = $('#video-example-prompt');
    const badges = $('#video-example-badges');
    const pdVideo = $('#video-previewdiff');
    const bonVideo = $('#video-bon');
    const videos = [pdVideo, bonVideo];

    if (!viewer || !range || !prev || !next || !toggle || !restart || videos.some((video) => !video)) return;

    let index = 0;
    let wantsPlayback = !prefersReducedMotion;
    let isVisible = !('IntersectionObserver' in window);

    function updateToggleLabel() {
      toggle.textContent = wantsPlayback ? 'Pause all' : 'Play all';
      toggle.setAttribute('aria-pressed', wantsPlayback ? 'true' : 'false');
    }

    function pauseAll() {
      videos.forEach((video) => video.pause());
    }

    function restartAll() {
      videos.forEach((video) => {
        try {
          video.currentTime = 0;
        } catch (error) {
          // The browser will remain at the start until metadata is available.
        }
      });
    }

    function playAll(shouldRestart = false) {
      if (!wantsPlayback || !isVisible) return;
      if (shouldRestart) restartAll();
      videos.forEach((video) => {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
      });
    }

    function setVideo(video, src, poster, label) {
      video.pause();
      video.poster = poster;
      video.setAttribute('aria-label', label);
      const source = $('source', video);
      if (source) source.src = src;
      else video.src = src;
      video.load();
    }

    function renderBadges(example) {
      badges.innerHTML = '';
      const scoreBadge = document.createElement('span');
      scoreBadge.className = 'badge score';
      scoreBadge.textContent = `PreviewDiff score ${example.score}/4`;
      badges.appendChild(scoreBadge);

      const categoryBadge = document.createElement('span');
      categoryBadge.className = 'badge';
      categoryBadge.textContent = example.category;
      badges.appendChild(categoryBadge);
    }

    function setExample(nextIndex) {
      pauseAll();
      index = (nextIndex + examples.length) % examples.length;
      const example = examples[index];
      const bonKey = worseBonById[example.id] || 'bon0';
      const bonPosterKey = `${bonKey}Poster`;
      range.value = String(index);
      range.setAttribute('aria-valuetext', `${index + 1}. ${example.title}`);
      counter.textContent = `${index + 1} / ${examples.length}`;
      title.textContent = `${String(index + 1).padStart(2, '0')} · ${example.title}`;
      prompt.textContent = example.prompt;
      renderBadges(example);

      setVideo(pdVideo, example.previewdiff, example.previewdiffPoster, `PreviewDiff video for: ${example.prompt}`);
      setVideo(bonVideo, example[bonKey], example[bonPosterKey], `Best-of-N video for: ${example.prompt}`);

      if (wantsPlayback && isVisible) window.setTimeout(() => playAll(true), 80);
    }

    range.min = '0';
    range.max = String(examples.length - 1);
    range.addEventListener('input', (event) => setExample(Number(event.target.value)));
    prev.addEventListener('click', () => setExample(index - 1));
    next.addEventListener('click', () => setExample(index + 1));
    toggle.addEventListener('click', () => {
      wantsPlayback = !wantsPlayback;
      updateToggleLabel();
      if (wantsPlayback) playAll(false);
      else pauseAll();
    });
    restart.addEventListener('click', () => {
      restartAll();
      if (wantsPlayback) playAll(false);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) playAll(false);
        else pauseAll();
      }, { threshold: 0.18 });
      observer.observe(viewer);
    }

    updateToggleLabel();
    setExample(0);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTreeViewer();
    initComparisonViewer();
    initVideoViewer();
  });
})();
