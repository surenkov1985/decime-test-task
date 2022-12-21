import "./styles/main.scss";

const phoneInput = document.querySelector(".phone");
const sityInput = document.querySelector(".sity");
const phoneLabel = document.querySelector(".phone-label");
const formContainer = document.querySelector(".form__container");
const formSubmit = document.querySelector(".form__submit");
const phoneButton = document.querySelector(".phone-button");

formContainer.addEventListener("submit", function (e) {
	const phoneValue = phoneInput.value;

	if (!phoneValue) {
		e.preventDefault();
		phoneLabel.classList.add("error");
		setTimeout(function () {
			phoneLabel.classList.remove("error");
		}, 1500);
	} else {
		phoneInput.value = "";
		sityInput.value = "";
	}
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	phoneInput.addEventListener("input", function (e) {
		phoneButton.style.display = e.target.value ? "flex" : "none";
	});

	phoneInput.addEventListener("focus", function (e) {
		window.addEventListener("resize", function () {
			formSubmit.scrollIntoView(false);
		});
	});
}
