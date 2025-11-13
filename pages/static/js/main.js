// ======================== SWITCHER SCRIPT ========================
document.addEventListener('DOMContentLoaded', function () {
  console.log('Switcher script loaded');

  const weekBtn = document.getElementById('weekBtn');
  const monthBtn = document.getElementById('monthBtn');
  const weekCards = document.getElementById('weekCards');
  const monthCards = document.getElementById('monthCards');

  if (!weekBtn || !monthBtn || !weekCards || !monthCards) {
    console.warn('⚠️ Switcher: one or more elements not found — skipping this feature.');
    return;
  }

  function showPanel(targetId) {
    [weekBtn, monthBtn].forEach(btn => {
      const isActive = btn.dataset.target === targetId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (targetId === 'weekCards') {
      weekCards.classList.add('show'); weekCards.setAttribute('aria-hidden','false');
      monthCards.classList.remove('show'); monthCards.setAttribute('aria-hidden','true');
    } else {
      monthCards.classList.add('show'); monthCards.setAttribute('aria-hidden','false');
      weekCards.classList.remove('show'); weekCards.setAttribute('aria-hidden','true');
    }
  }

  showPanel('weekCards');

  weekBtn.addEventListener('click', (e)=>{ e.preventDefault(); showPanel('weekCards'); });
  monthBtn.addEventListener('click', (e)=>{ e.preventDefault(); showPanel('monthCards'); });

  [weekBtn, monthBtn].forEach(btn => {
    btn.addEventListener('keydown', (e)=>{
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  });

  console.log('Switcher initialized');
});


// ======================== GRID/LIST VIEW TOGGLER ========================
document.addEventListener("DOMContentLoaded", () => {
  const gridBtn = document.getElementById("gridView");
  const listBtn = document.getElementById("listView");
  const cards = document.querySelectorAll(".theme-card");
  const cols = document.querySelectorAll(".theme-col");

  // Only run if buttons exist
  if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", () => {
      gridBtn.style.backgroundColor = "#76C01D";
      gridBtn.style.color = "white";
      listBtn.style.backgroundColor = "#E6E6E6";
      listBtn.style.color = "black";

      cards.forEach(card => card.classList.remove("list-view"));
      cols.forEach(col => col.classList.remove("list-mode"));
    });

    listBtn.addEventListener("click", () => {
      listBtn.style.backgroundColor = "#76C01D";
      listBtn.style.color = "white";
      gridBtn.style.backgroundColor = "#E6E6E6";
      gridBtn.style.color = "black";

      cards.forEach(card => card.classList.add("list-view"));
      cols.forEach(col => col.classList.add("list-mode"));
    });
  } else {
    console.warn("⚠️ Grid/List toggle elements not found — skipping this feature.");
  }
});

