document.addEventListener('DOMContentLoaded', () => {
  initCopyright();
  initMobileMenu();
  initTabSwitching();
  initTypewriter();
});

/* -------------------------------------------------------------
 * 1. DYNAMIC COPYRIGHT YEAR
 * ------------------------------------------------------------- */
function initCopyright() {
  const yearElement = document.getElementById('copyright-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* -------------------------------------------------------------
 * 2. MOBILE MENU TOGGLE
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
      if (!isClickInside && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
}

/* -------------------------------------------------------------
 * 3. INTERACTIVE TAB SWITCHING
 * ------------------------------------------------------------- */
function initTabSwitching() {
  const tabAbout = document.getElementById('tab-about');
  const tabExperience = document.getElementById('tab-experience');
  
  const contentAbout = document.getElementById('content-about');
  const contentExperience = document.getElementById('content-experience');
  
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  function switchTab(activeTab, inactiveTab, activeContent, inactiveContent) {
    // 1. Manage tab links active states
    inactiveTab.classList.remove('active');
    inactiveTab.setAttribute('aria-selected', 'false');
    
    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');

    // 2. Hide inactive content, show active content with animation
    inactiveContent.style.display = 'none';
    inactiveContent.classList.remove('active');
    
    activeContent.style.display = 'block';
    // Small timeout allows display style to apply before class triggers CSS animation
    setTimeout(() => {
      activeContent.classList.add('active');
    }, 10);

    // 3. Close mobile menu if open
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (navToggle) navToggle.classList.remove('active');
    }
  }

  if (tabAbout && tabExperience && contentAbout && contentExperience) {
    tabAbout.addEventListener('click', () => {
      switchTab(tabAbout, tabExperience, contentAbout, contentExperience);
    });

    tabExperience.addEventListener('click', () => {
      switchTab(tabExperience, tabAbout, contentExperience, contentAbout);
    });
  }
}

/* -------------------------------------------------------------
 * 4. TYPEWRITER EFFECT (Greeting)
 * ------------------------------------------------------------- */
async function initTypewriter() {
  const typewriterText = document.getElementById('typewriter-text');
  const cursor = document.querySelector('.typewriter-cursor');
  const textToType = "Hi, I'm Alfie.";
  
  if (!typewriterText) return;

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Clear initially
  typewriterText.textContent = "";

  // Natural typing speed variables
  const baseSpeed = 100; // ms
  const variance = 40;  // ms

  await delay(600); // Initial breathing room before typing starts

  for (let i = 0; i < textToType.length; i++) {
    typewriterText.textContent += textToType.charAt(i);
    // Add natural rhythm variance
    const randomDelay = baseSpeed + (Math.random() * variance * 2 - variance);
    await delay(randomDelay);
  }

  // Blinking cursor fading out after a few seconds of idle
  await delay(2500);
  if (cursor) {
    cursor.style.transition = 'opacity 1s ease';
    cursor.style.opacity = '0';
    setTimeout(() => {
      cursor.style.display = 'none';
    }, 1000);
  }
}
