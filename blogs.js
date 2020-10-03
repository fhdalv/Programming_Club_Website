const accountDetails = document.querySelector('.account-details');
const newsLetter = document.querySelector('.news');
const email = document.getElementById('news-email');


newsLetter.addEventListener('submit', (e) => {
	e.preventDefault();
	checkEmail();
	newsLetter.reset();
})
function checkEmail() {

 const emailVal =	email.value.trim();

 		if(emailVal === '') {
 			alert('Email cannot be blank!');

 		} else if(!isEmail(emailVal)){
 				alert('Email is not valid!');
 		} else {
 			alert('Thanks for subscribing!');
 			}
}
function isEmail(email) {
	return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
}
