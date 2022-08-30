document.querySelector('#navbar__burger').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('#navbar__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('locked');
})

document.querySelector('#navbar__logo').addEventListener('click', () => location.reload())