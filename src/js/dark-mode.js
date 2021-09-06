export const toggleDarkMode = () => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }

    const switchMode = document.getElementById("modeToggle");

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
    })
}