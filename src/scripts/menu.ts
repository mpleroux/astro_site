const navMenu = document.getElementById("main-menu");
const menu = document.querySelector<HTMLButtonElement>(".menu");

menu?.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
  navMenu?.classList.toggle("hidden");
  navMenu?.classList.toggle("shadow-md");
});
