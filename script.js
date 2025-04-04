function applyTheme() {
    let theme = document.getElementById("themeInput").value;
    let resultSection = document.getElementById("themeResult");

    if (theme.trim() === "") {
        resultSection.innerHTML = `<p style="color: red;">Please enter a theme!</p>`;
        return;
    }

    resultSection.innerHTML = `<p>Generating AI-powered effects for <strong>${theme}</strong>...</p>`;
    setTimeout(() => {
        resultSection.innerHTML = `<p>✨ AI has generated a stunning effect for <strong>${theme}</strong>! 🚀</p>`;
    }, 2000);
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");
    darkModeToggle.innerHTML = isDarkMode ? `<i class="fas fa-sun"></i> Light Mode` : `<i class="fas fa-moon"></i> Dark Mode`;
    localStorage.setItem("darkMode", isDarkMode);
});

// Load Dark Mode Preference
window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
    }
};
