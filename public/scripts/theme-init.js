(function () {
  var stored =
    typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
  var theme =
    stored === "dark" || stored === "light"
      ? stored
      : typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  document.documentElement.classList.toggle("dark", theme === "dark");
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  }
})();
