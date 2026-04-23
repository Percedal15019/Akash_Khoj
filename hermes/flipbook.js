/**
 * flipbook.js — Hermes HandBook Flip Engine
 * ==========================================
 * Pure JS, no dependencies.
 * Smooth hardware-accelerated 3D page turns.
 * Book opens like a standard real-life book (right to left).
 */

(function () {
  'use strict';

  /* ===== STATE ===== */
  const state = {
    totalLeaves: 0,
    currentLeaf: 0,
    isFlipping: false,
    isOpen: false
  };

  /* ===== DOM REFS ===== */
  const bookEl = document.getElementById('book');
  const bookViewport = document.getElementById('book-viewport');
  const introScreen = document.getElementById('intro-screen');
  const openBtn = document.getElementById('open-book-btn');
  const closeBtn = document.getElementById('close-book-btn');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const currentPgDisp = document.getElementById('current-page-display');
  const totalPgDisp = document.getElementById('total-page-display');

  /* ===== BUILD BOOK DOM ===== */
  function buildBook() {
    state.totalLeaves = PAGES.length;

    PAGES.forEach((leaf, idx) => {
      const leafEl = document.createElement('div');
      leafEl.classList.add('page');
      leafEl.dataset.leafIndex = idx;
      if (leaf.isCover) leafEl.classList.add('cover-page');

      // Unflipped leaves stack on the right. Lowest idx is on top.
      leafEl.style.zIndex = state.totalLeaves - idx;

      // ---- FRONT FACE (Right side) ----
      const frontEl = document.createElement('div');
      frontEl.classList.add('page-front');

      if (leaf.front.type === 'cover' || leaf.front.isBackCover) {
        frontEl.innerHTML = leaf.front.html;
      } else {
        const contentEl = document.createElement('div');
        contentEl.classList.add('page-content');
        contentEl.innerHTML = leaf.front.html;
        frontEl.appendChild(contentEl);
      }

      // ---- BACK FACE (Left side after flip) ----
      const backEl = document.createElement('div');
      backEl.classList.add('page-back');

      if (leaf.back.type === 'cover' || leaf.back.isBackCover) {
        backEl.innerHTML = leaf.back.html;
      } else {
        const contentEl = document.createElement('div');
        contentEl.classList.add('page-content');
        contentEl.innerHTML = leaf.back.html;
        backEl.appendChild(contentEl);
      }

      leafEl.appendChild(frontEl);
      leafEl.appendChild(backEl);
      bookEl.appendChild(leafEl);

      // Simple click to turn mapping
      leafEl.addEventListener('click', () => {
        if (state.isFlipping) return;

        // If it's the top right-side page, flip it forward
        if (!leafEl.classList.contains('flipped') && idx === state.currentLeaf) {
          flipForward();
        }
        // If it's the top left-side page, flip it back
        else if (leafEl.classList.contains('flipped') && idx === state.currentLeaf - 1) {
          flipBack();
        }
      });
    });

    updatePageIndicator();
    updateNavButtons();
  }

  /* ===== FLIP FORWARD ===== */
  function flipForward() {
    if (state.isFlipping || state.currentLeaf >= state.totalLeaves) return;

    // The leaf being turned is the topmost right-side leaf
    const leafEl = getLeafAt(state.currentLeaf);
    if (!leafEl) return;

    state.isFlipping = true;

    // Elevate z-index during turn
    leafEl.classList.add('turning');
    leafEl.style.zIndex = state.totalLeaves + 10;

    // Trigger CSS 3D Rotation
    requestAnimationFrame(() => {
      leafEl.classList.add('flipped');
    });

    // Match CSS transition duration
    const durationStr = getComputedStyle(document.documentElement).getPropertyValue('--flip-duration').trim();
    const duration = parseFloat(durationStr) * 1000 || 2000;

    setTimeout(() => {
      leafEl.classList.remove('turning');
      state.currentLeaf++;
      updateLeafZIndices();
      updatePageIndicator();
      updateNavButtons();
      state.isFlipping = false;
    }, duration);
  }

  /* ===== FLIP BACK ===== */
  function flipBack() {
    if (state.isFlipping || state.currentLeaf <= 0) return;

    // The leaf to flip back is the topmost left-side leaf
    const leafToTurnIndex = state.currentLeaf - 1;
    const leafEl = getLeafAt(leafToTurnIndex);
    if (!leafEl) return;

    state.isFlipping = true;

    // Elevate z-index during turn
    leafEl.classList.add('turning');
    leafEl.style.zIndex = state.totalLeaves + 10;

    // Trigger CSS 3D Rotation back
    requestAnimationFrame(() => {
      leafEl.classList.remove('flipped');
    });

    // Match CSS transition duration
    const durationStr = getComputedStyle(document.documentElement).getPropertyValue('--flip-duration').trim();
    const duration = parseFloat(durationStr) * 1000 || 2000;

    setTimeout(() => {
      leafEl.classList.remove('turning');
      state.currentLeaf--;
      updateLeafZIndices();
      updatePageIndicator();
      updateNavButtons();
      state.isFlipping = false;
    }, duration);
  }

  /* ===== Z-INDEX MANAGEMENT ===== */
  function updateLeafZIndices() {
    const leaves = bookEl.querySelectorAll('.page:not(.turning)');
    leaves.forEach((leaf) => {
      const idx = parseInt(leaf.dataset.leafIndex, 10);
      const isFlipped = leaf.classList.contains('flipped');

      if (isFlipped) {
        // For flipped pages (left side): the most recently flipped (highest idx) must be on top.
        leaf.style.zIndex = idx + 1;
      } else {
        // For unflipped pages (right side): the first unflipped (lowest idx) must be on top.
        leaf.style.zIndex = state.totalLeaves - idx;
      }
    });
  }

  /* ===== GET LEAF ELEMENT BY INDEX ===== */
  function getLeafAt(idx) {
    return bookEl.querySelector(`.page[data-leaf-index="${idx}"]`);
  }

  /* ===== PAGE INDICATOR ===== */
  const ROMAN_NUMERALS = [
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
    'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
    'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX'
  ];

  function toRoman(num) {
    if (num <= 0) return 'I';
    if (num < ROMAN_NUMERALS.length) return ROMAN_NUMERALS[num];
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    return (
      (num >= 1000 ? 'M'.repeat(Math.floor(num / 1000)) : '') +
      hundreds[Math.floor((num % 1000) / 100)] +
      tens[Math.floor((num % 100) / 10)] +
      ones[num % 10]
    );
  }

  function updatePageIndicator() {
    // Leaf 0 = pages 1 & 2
    // Leaf N = pages (2N+1) & (2N+2)
    // When leaf N is open, you see page 2N (left) and 2N+1 (right). 
    // Except when N=0 (0 left, 1 right). So spread = currentLeaf * 2.
    // We'll show the right-side reading page.
    const spread = Math.max(1, state.currentLeaf * 2 + 1);
    const total = state.totalLeaves * 2 - 1; // last leaf covers back side
    currentPgDisp.textContent = toRoman(spread);
    totalPgDisp.textContent = toRoman(total);
  }

  /* ===== NAV BUTTONS ===== */
  function updateNavButtons() {
    prevBtn.disabled = state.currentLeaf <= 0;
    // We can flip until currentLeaf reaching totalLeaves, which hides the back cover.
    nextBtn.disabled = state.currentLeaf >= state.totalLeaves;
  }

  /* ===== OPEN BOOK ===== */
  function openBook() {
    introScreen.classList.add('hidden');

    bookViewport.classList.remove('hidden');
    bookViewport.style.opacity = '0';
    bookViewport.style.visibility = 'visible';

    setTimeout(() => {
      bookViewport.style.transition = 'opacity 0.6s ease';
      bookViewport.style.opacity = '1';
    }, 50);

    bookEl.classList.remove('closed');
    bookEl.classList.add('opening');

    setTimeout(() => {
      bookEl.classList.remove('opening');
      state.isOpen = true;
      flipForward();
    }, 1200);
  }

  /* ===== CLOSE BOOK ===== */
  function closeBook() {
    if (state.isFlipping) return;
    state.isOpen = false;

    bookEl.classList.add('closing');

    setTimeout(() => {
      bookEl.classList.remove('closing');

      // Reset all pages rapidly without animating
      const oldDur = bookEl.style.transition;
      bookEl.style.transition = 'none';

      bookEl.querySelectorAll('.page').forEach(leaf => {
        leaf.style.transition = 'none';
        leaf.classList.remove('flipped', 'turning');
        // Force reflow
        void leaf.offsetWidth;
        leaf.style.transition = '';
      });
      state.currentLeaf = 0;
      updatePageIndicator();
      updateNavButtons();
      updateLeafZIndices();

      // Hide viewport
      bookViewport.style.opacity = '0';
      setTimeout(() => {
        bookViewport.classList.add('hidden');
        introScreen.classList.remove('hidden');
      }, 400);
    }, 1000);
  }

  /* ===== EVENT LISTENERS ===== */
  openBtn.addEventListener('click', openBook);
  closeBtn.addEventListener('click', closeBook);
  prevBtn.addEventListener('click', flipBack);
  nextBtn.addEventListener('click', flipForward);

  document.addEventListener('keydown', (e) => {
    if (!state.isOpen) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') flipForward();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') flipBack();
  });

  /* ===== INIT ===== */
  buildBook();

})();
