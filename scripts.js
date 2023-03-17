window.addEventListener("scroll", () => {
	let header = document.querySelector("#nav");
	header.classList.toggle("sticky", window.scrollY > 0);
});

