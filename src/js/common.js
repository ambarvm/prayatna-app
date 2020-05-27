M.AutoInit();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const scrollButton = document.getElementById('scroll-button');

window.addEventListener('scroll', () => {
	if (window.scrollY > 20) {
		scrollButton.style.display = 'block';
	} else {
		scrollButton.style.display = 'none';
	}
});

function scrollToTop() {
	window.scroll({ top: 0, behavior: 'smooth' });
}

scrollButton.addEventListener('click', scrollToTop);
