const languageButton = document.getElementById("languageButton");
let currentLanguage = "pt";

function changeLanguage() {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-pt][data-en]").forEach((element) => {
    element.innerHTML = element.dataset[currentLanguage];
  });
  languageButton.textContent = currentLanguage === "pt" ? "EN" : "PT";
  languageButton.setAttribute(
    "aria-label",
    currentLanguage === "pt" ? "Switch to English" : "Mudar para português"
  );
}

languageButton.addEventListener("click", changeLanguage);
