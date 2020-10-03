const loginForm = document.getElementById('login-form');
const email = document.getElementById('login-email');
const pass1 = document.getElementById('login-password');


loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
	const email = loginForm['login-email'].value;
	const password = loginForm['login-password'].value;

	auth.signInWithEmailAndPassword(email, password).then(cred => {
		loginForm.reset();
		window.location.replace("index.html");
	}).catch(err => {
		alert(err.message)
	})

});

function checkInputs() {

 const emailVal =	email.value.trim();
 const passVal1 =	pass1.value.trim();

 		if(emailVal === '') {
 			setErrorFor(email, 'Email cannot be blank!');

 		} else if(!isEmail(emailVal)){
 				setErrorFor(email, 'Email is not valid!');
 		} else {
 			setSuccessFor(email);
 			}

 		if(passVal1 === '') {
 			setErrorFor(pass1, 'Password cannot be empty!');

 		} else if(passVal1.length < 6) {
 			setErrorFor(pass1, 'Password length must be at least 6 or more');
 		} else {
 			setSuccessFor(pass1);
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
