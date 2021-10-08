export default function toggleDarkMode() {
    const switchMode = document.getElementById("modeToggle");

    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        switchMode.checked = true;
    } else {
        document.documentElement.classList.remove("dark");
        switchMode.checked = false;
    }

    switchMode.addEventListener("change", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        if (switchMode.checked) {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
    });
}
