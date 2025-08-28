const content = document.getElementById("app");
const nav = document.getElementById("nav");

function loadTP(tp) {
  fetch(`views/${tp}.html`)
    .then(res => res.ok ? res.text() : "Contenido no encontrado")
    .then(html => {
      content.innerHTML = html;
    });
}

function buildNav() {
  fetch("views/index.json")
    .then(res => res.json())
    .then(items => {
      items.forEach(item => {
        const tp = item.file.replace(".html", "");
        const link = document.createElement("a");
        link.href = `#${tp}`;
        link.textContent = item.title;
        nav.appendChild(link);
      });
    });
}

window.addEventListener("hashchange", () => {
  const tp = location.hash.replace("#", "") || "tp1";
  loadTP(tp);
});

window.addEventListener("load", () => {
  buildNav();
  const tp = location.hash.replace("#", "") || "tp1";
  loadTP(tp);
});
