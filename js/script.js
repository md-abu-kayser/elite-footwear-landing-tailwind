// Vanilla JavaScript
const themeSwitcher = document.getElementById("theme-switcher");
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
themeSwitcher.value = currentTheme;

themeSwitcher.addEventListener("change", (e) => {
  const newTheme = e.target.value;
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

const casualFilter = document.getElementById("casual-filter");
casualFilter.addEventListener("change", filterProducts("casual"));

function filterProducts(section) {
  return (e) => {
    const value = e.target.value;
    const cards = document.querySelectorAll(`#${section} .card`);
    cards.forEach((card) => {
      let show = true;
      if (value.includes("Under") && parseInt(card.dataset.price) >= 200)
        show = false;
      if (
        value.includes("$200-$400") &&
        (parseInt(card.dataset.price) < 200 ||
          parseInt(card.dataset.price) > 400)
      )
        show = false;
      if (value.includes("Over") && parseInt(card.dataset.price) <= 400)
        show = false;
      card.style.display = show ? "block" : "none";
    });
  };
}

const formalFilter = document.getElementById("formal-filter");
formalFilter.addEventListener("change", filterProducts("formal"));
