window.addEventListener("scroll", () => {
	let header = document.querySelector("#nav");
	header.classList.toggle("sticky", window.scrollY > 0);
});

/*
	Smooth scroll functionality for anchor links (animates the scroll
	rather than a sudden jump in the page)
*/
