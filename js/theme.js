(() => {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const apply = (theme) => {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      btn.textContent = "☀️";
      btn.setAttribute("aria-label", "Switch to dark theme");
      btn.title = "Switch to dark theme";
    } else {
      root.removeAttribute("data-theme");
      btn.textContent = "🌙";
      btn.setAttribute("aria-label", "Switch to light theme");
      btn.title = "Switch to light theme";
    }
  };

  // Reflect whatever the early <head> script already applied (or the
  // dark default, if it did nothing) rather than assuming.
  apply(root.getAttribute("data-theme") === "light" ? "light" : "dark");

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    apply(next);
  });
})();
