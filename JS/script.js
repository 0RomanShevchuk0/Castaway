//*Бургер
document.querySelector('#navbar__burger').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('#navbar__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('locked');
})

document.querySelector('#navbar__logo').addEventListener('click', () => location.reload())


//*Рейтинги
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

function initRatings() {
	let ratingActive, ratingValue;
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();
	}

	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active')
		ratingValue = rating.querySelector('.rating__value')
	}

	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}
