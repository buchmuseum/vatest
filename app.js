
const container = document.getElementById("chapters");
const nav = document.getElementById("nav");
const bgLayer = document.getElementById("bg-layer");
const chapters = window.chapters;

function buildNav() {
  nav.innerHTML = "";

  if (chapters.length <= 2) {

  chapters.forEach((ch, index) => {
    const link = document.createElement("a");
    link.href = "#pill-" + ch.id;
    link.textContent = ch.title;

    nav.appendChild(link);

    // 👉 Pipe nur zwischen den Elementen (nicht nach dem letzten)
    if (index < chapters.length - 1) {
      const sep = document.createElement("span");
      sep.textContent = " | ";
      sep.style.color = "#666";
      sep.style.margin = "0 8px";
      nav.appendChild(sep);
    }
  });

  return;
}

  const overview = document.createElement("div");
  overview.className = "nav-overview";

  const mainLink = document.createElement("a");
  mainLink.href = "#";
  mainLink.textContent = "Überblick";

  const dropdown = document.createElement("div");
  dropdown.className = "nav-dropdown";

  mainLink.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });

  chapters.forEach(ch => {
    const link = document.createElement("a");
    link.href = "#" + ch.id;
    link.textContent = ch.title;

    link.addEventListener("click", () => {
      dropdown.classList.remove("open");
    });

    dropdown.appendChild(link);
  });

  overview.appendChild(mainLink);
  overview.appendChild(dropdown);
  nav.appendChild(overview);
}

function openMeta(meta) {
  const overlay = document.createElement("div");
  overlay.className = "meta-overlay";

  const safe = (label, value) => {
    if (!value) return "";
    return `<p><strong>${label}</strong> ${value}</p>`;
  };

  const urlBlock = meta.url
  ? `<p>
      <a href="${meta.url}" target="_blank" rel="noopener noreferrer">
        Zum Objekt bei der datengebenden Institution
      </a>
    </p>`
  : "";

  overlay.innerHTML = `
    <div class="meta-box">

      ${meta.title ? `<h2 style="font-size:24px; font-weight:700; margin-bottom:15px;">
        ${meta.title}
      </h2>` : ""}

      ${safe("Wie darf ich das Objekt nutzen:", meta.license)}
      ${safe("Rechteinformation:", meta.rights)}
      ${safe("Beschreibung:", meta.description)}

      <hr style="margin:15px 0; opacity:0.2;">

      ${safe("Typ:", meta.type)}
      ${safe("Identifikator:", meta.identifier)}
      ${safe("Beteiligte Personen und Organisationen:", meta.participants)}
      ${safe("Zeit:", meta.time)}
      ${safe("Ort:", meta.place)}

      ${urlBlock}

      <button style="margin-top:20px;" onclick="this.closest('.meta-overlay').remove()">
        Schließen
      </button>

    </div>
  `;

  document.body.appendChild(overlay);
}

// NAV + SECTIONS

// =========================
// 1. INTRO (nur Inhalt)
// =========================

chapters.forEach((ch, index) => {

  // =========================
  // INTRO
  // =========================
  if (ch.type === "intro") {
    const introSection = document.createElement("section");
    introSection.className = "chapter";
    introSection.id = ch.id;

    introSection.innerHTML = ch.blocks.map(b => {
      if (b.type === "text") {
        return `<p class="text-block">${b.content}</p>`;
      }
      return "";
    }).join("");

    container.appendChild(introSection);
    return;
  }

  // 🔥 1. OVAL MARKER VOR DEM KAPITEL
  const marker = document.createElement("div");
  marker.className = "chapter-marker";

  const styleClass = ch.style || "style-paper"; // 👈 Default

marker.innerHTML = `
  <div class="chapter-pill ${styleClass}"
    id="pill-${ch.id}"
    style="--chapter-color:${ch.color || ch.background.value}">
    
    <div class="num">${ch.id.split("-")[1].padStart(2, "0")}</div>
    <div class="title">${ch.title}</div>
  </div>
`;

  container.appendChild(marker);

  // 🔥 2. KAPITEL SELBST
  const section = document.createElement("section");
  section.className = "chapter";
  section.id = ch.id;

  section.innerHTML = `


  ${ch.blocks.map(b => {

    
    if (b.type === "text") {
      return `<p class="text-block">${b.content}</p>`;
    }

    if (b.type === "media") {
    const metaAttr = b.meta
      ? `data-meta='${JSON.stringify(b.meta)}'`
      : "";

    return `
      <div class="media-block">

        <div class="media-image">
          <div class="image-wrapper" ${metaAttr}>

            <img src="${b.media.src}">
            ${b.meta ? `<button class="info-btn">i</button>` : ""}

          </div>
        </div>

        <div class="media-text">
          <p class="text-block">${b.text}</p>
        </div>

      </div>
    `;
  }

    if (b.type === "image") {
      return `
        <div class="image-wrapper">
          <img src="${b.src}">
          ${b.meta ? `
            <button class="info-btn" onclick='openMeta(${JSON.stringify(b.meta)})'>
              i
            </button>
          ` : ""}
        </div>
      `;
    }

  if (b.type === "gallery") {

  const hasMedia = b.items.some(i => i.type === "media");
  const visible = hasMedia ? 1 : 3;

  return `
    <div class="gallery-slider" data-visible="${visible}">
      <button class="gallery-btn prev">‹</button>

      <div class="gallery-viewport">
        <div class="gallery-track">

          ${b.items.map(item => {

            // 🔹 IMAGE MODE
            if (item.type === "image") {
              return `
                <div class="image-wrapper"
                  ${item.meta ? `data-meta='${JSON.stringify(item.meta)}'` : ""}>

                  <img src="${item.src}">
                  ${item.meta ? `<button class="info-btn">i</button>` : ""}

                </div>
              `;
            }

            // 🔹 MEDIA MODE (Bild + Text)
            if (item.type === "media") {

            const metaAttr = item.meta
              ? `data-meta='${JSON.stringify(item.meta)}'`
              : "";

            return `
              <div class="media-slide">

                <div class="media-image image-wrapper" ${metaAttr}>
                  <img src="${item.media.src}">
                  ${item.meta ? `<button class="info-btn">i</button>` : ""}
                </div>

                <div class="media-text">
                  <p>${item.text || ""}</p>
                </div>

              </div>
            `;
          }

            return "";

          }).join("")}

        </div>
      </div>

      <button class="gallery-btn next">›</button>
    </div>
  `;
}

    return "";
  }).join("")}
`;

  container.appendChild(section);
});

// ============================
// BACKGROUND LAYERS
// ============================
const bgA = document.getElementById("bg-layer");
const bgB = document.getElementById("bg-layer-2");

let activeLayer = bgA;

// ============================
// BACKGROUND CROSSFADE
// ============================
function setBackground(bg) {
  if (!bgLayer) return;

  if (bg?.type === "image") {
    bgLayer.style.backgroundImage = `url('${bg.value}')`;
    bgLayer.style.backgroundColor = "";
  }

  if (bg?.type === "color") {
    bgLayer.style.backgroundImage = "none";
    bgLayer.style.backgroundColor = bg.value;
  }
}

// ============================
// OBSERVER (CHAPTER SCROLL)
// ============================
let activeChapterId = null;

const observer = new IntersectionObserver((entries) => {

  // 1. nur sichtbare Elemente
  const visibleEntries = entries.filter(e => e.isIntersecting);

  if (!visibleEntries.length) return;

  // 2. das „dominanteste“ Kapitel wählen
  const best = visibleEntries.reduce((prev, current) => {
    return current.intersectionRatio > prev.intersectionRatio
      ? current
      : prev;
  });

  const chapter = window.chapters.find(
    c => c.id === best.target.id
  );

  if (!chapter) return;

  // 3. nur wechseln wenn wirklich neu
  if (activeChapterId === chapter.id) return;

  activeChapterId = chapter.id;

  // 🔥 Übergang aktivieren
  document.body.style.transition = "background 0.6s ease";

  // 4. Background setzen
  setTimeout(() => {
  setBackground(chapter.background);
}, 250);

  // 5. Active State UI
  document.querySelectorAll(".chapter").forEach(el => {
    el.classList.toggle("active", el.id === chapter.id);
  });

  document.querySelectorAll(".topbar a").forEach(a => {
    a.classList.toggle(
      "active",
      a.getAttribute("href") === "#" + chapter.id
    );
  });

}, {
  threshold: [0.2, 0.5, 0.8]
});

// ============================
// OBSERVE START
// ============================
setTimeout(() => {
  document.querySelectorAll(".chapter").forEach(el => {
    observer.observe(el);
  });
}, 50);

// Start-Hintergrund sauber setzen
window.addEventListener("DOMContentLoaded", () => {
  const first = window.chapters?.[0];
  if (first?.background) {
    setBackground(first.background);
  }
});


// ============================
// INFO BUTTON CLICK HANDLER
// ============================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("info-btn")) {

    const wrapper = e.target.closest(".image-wrapper");
    const meta = wrapper.dataset.meta;

    if (meta) {
      openMeta(JSON.parse(meta));
    }
  }
});

//Slider-Gallery
document.querySelectorAll(".gallery-slider").forEach(slider => {
  const track = slider.querySelector(".gallery-track");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");

  const originalItems = Array.from(track.children);

  const visible = parseInt(slider.dataset.visible) || 3;

  let index = 0;

  // 🔥 CLONES erzeugen (erste Slides hinten anhängen)
  const clones = originalItems.slice(0, visible).map(el => {
    const clone = el.cloneNode(true);
    clone.classList.add("clone");
    return clone;
  });

  clones.forEach(c => track.appendChild(c));

  const total = track.children.length;

  function update(animate = true) {
    track.style.transition = animate ? "transform 0.5s ease" : "none";
    const move = -(index * (100 / visible));
    track.style.transform = `translateX(${move}%)`;
  }

  next.addEventListener("click", () => {
    index++;
    update();

    // 🔥 wenn wir im Clone-Bereich landen → reset ohne Animation
    if (index === originalItems.length) {
      setTimeout(() => {
        index = 0;
        update(false);
      }, 500);
    }
  });

  prev.addEventListener("click", () => {
    if (index === 0) {
      index = originalItems.length;
      update(false);
    }

    setTimeout(() => {
      index--;
      update();
    }, 20);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const first = window.chapters?.[0];

  if (first?.background) {
    setBackground(first.background);
    activeChapterId = first.id; // 🔥 wichtig
  }
});


buildNav();
