//*Бургер
document.querySelector('#navbar__burger').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('#navbar__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('locked');
})

//* Убирать active при переходе по ссылке меню
let navLinks = document.querySelectorAll('#navbar__link');
	navLinks.forEach(navLink => {
		navLink.addEventListener('click', () => {
			if(window.innerWidth < 768){
				document.querySelector('#navbar__burger').classList.toggle('active');
				document.querySelector('#navbar__menu').classList.toggle('active');
				document.querySelector('body').classList.toggle('locked');	
			}
		})
	})

//* Логотип обновление страницы
let logos = document.querySelectorAll('#logo');
logos.forEach(logo =>{
	logo.addEventListener('click', () => location.reload());
} )

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

//*Плавная прокрутка к якорю
document.querySelectorAll('a.anchor').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 150;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

//* Навигация прокрутка
window.addEventListener('scroll', () => {
	if(window.innerWidth > 768){	
		if(scrollY > 50){
			document.querySelector('.navbar').style.opacity = 0.9;
		}
		else{
			document.querySelector('.navbar').style.opacity = 1;
		}
	}
	else{
		document.querySelector('.navbar').style.opacity = 1;
	}
})

//*Анимация при скроле
let animItems = document.querySelectorAll('._animItems');

if(animItems.length > 0){

	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(){
		animItems.forEach(animItem => {
			const animItemOffset = offset(animItem);
			const animItemHeight = animItem.offsetHeight;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active')
			}
			else{
				if(!animItem.classList.contains('no-remove')){
					animItem.classList.remove('_active')
				}
			}
		})
	}
	animOnScroll();
	
	function offset(el){
		const rect = el.getBoundingClientRect();
		return rect.top + window.scrollY;
	}
}