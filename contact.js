const contactForm = document.getElementById('contact-form');
const full = document.getElementById('fullname');
const con_email = document.getElementById('email');


contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
	const con_email2 = contactForm['email'].value;
	const full2 = contactForm['fullname'].value;
	

});

function checkInputs() {

 const emailVal =	con_email.value.trim();
 const passVal1 =	full.value.trim();

 		if(emailVal === '') {
 			setErrorFor(con_email, 'Email cannot be blank!');

 		} else if(!isEmail(emailVal)){
 				setErrorFor(con_email, 'Email is not valid!');
 		} else {
 			setSuccessFor(con_email);
 			}

 		if(passVal1 === '') {
 			setErrorFor(full, 'Name cannot be empty!');

 		}
 		 else {
 			setSuccessFor(full);
 			}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement; //input-field class
	const small = formControl.querySelector('small');

	small.innerText = message;
	formControl.className = 'input-field error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input-field success';
}

function isEmail(email) {
	return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
}
