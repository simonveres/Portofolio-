const translationToggle = document.querySelector("#translation-toggle");

if (translationToggle) {
	let isEnglish = false;

	translationToggle.addEventListener("click", () => {
		isEnglish = !isEnglish;

		document.querySelectorAll("[data-id][data-en]").forEach((element) => {
			element.textContent = isEnglish ? element.dataset.en : element.dataset.id;
		});

		translationToggle.textContent = isEnglish
			? "Translate to Indonesian"
			: "Translate to English";
		translationToggle.setAttribute("aria-pressed", String(isEnglish));
	});
}

function googleTranslateElementInit() {
	if (window.google && google.translate) {
		new google.translate.TranslateElement({
			pageLanguage: "id",
			includedLanguages: "id,en",
			buttonText: "Translate",
			autoDisplay: false
		}, "google_translate_element");
	}
}

const translateContainer = document.querySelector("#google_translate_element");

if (translateContainer && !document.querySelector("script[data-google-translate]")) {
	const translateScript = document.createElement("script");

	translateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
	translateScript.async = true;
	translateScript.dataset.googleTranslate = "true";
	document.body.appendChild(translateScript);
}
