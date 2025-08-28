const content = document.getElementById("app");

function loadTP(tp) {
  fetch(`views/${tp}.html`)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });
}

window.addEventListener("hashchange", () => {
  const tp = location.hash.replace("#", "") || "tp1";
  loadTP(tp);
});

window.addEventListener("load", () => {
  const tp = location.hash.replace("#", "") || "tp1";
  loadTP(tp);
});
