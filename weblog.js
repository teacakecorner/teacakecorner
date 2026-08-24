const entries = [
  "2026-03-08",
  "2025-12-14",
  "2025-07-07",
  "2025-06-27"
];

entries.sort().reverse();

const recent = entries.slice(0, 5);
const archived = entries.slice(5);


recent.forEach(date => {
  fetch(`https://teacakecorner.nekoweb.org/entries/${date}.html`)
    .then(r => r.text())
    .then(html => {
      const article = document.createElement("article");
      article.className = "card";
      article.innerHTML = `
        <h4 class="entry-date">${formatDate(date)}</h4>
        ${html}
      `;
      document.getElementById("entries-container").appendChild(article);
    });
});

function formatDate(str) {
  const d = new Date(str);
  return d.toLocaleDateString("en-US", { day:"2-digit", month:"long", year:"numeric" });
}