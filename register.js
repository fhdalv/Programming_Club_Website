const form = document.getElementById('signup-form');
const username = document.getElementById('signup-bio');
const email = document.getElementById('signup-email');
const pass1 = document.getElementById('signup-password1');
const pass2 = document.getElementById('signup-password2');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
	const email = form['signup-email'].value;
	const password = form['signup-password2'].value;

	auth.createUserWithEmailAndPassword(email, password).then(cred => {
		console.log(cred);
		form.reset();
		window.location.replace("index.html");
	})
});

function checkInputs() {
 const usernameVal = username.value.trim();
 const emailVal =	email.value.trim();
 const passVal1 =	pass1.value.trim();
 const passVal2 =	pass2.value.trim();

 		if(usernameVal === '') {
 			setErrorFor(username, 'Username cannot be blank!');

 		} else {
 			setSuccessFor(username);
 			}

 		if(emailVal === '') {
 			setErrorFor(email, 'This field cannot be blank!');

 		} else if(!isEmail(emailVal)){
 				setErrorFor(email, 'Email is not valid!');
 		} else {
 			setSuccessFor(email);
 			}

 		if(passVal1 === '') {
 			setErrorFor(pass1, 'Password cannot be empty!');

 		} else if(passVal1.length < 6){
 			setErrorFor(pass1, 'Password length must be at least 6 or more characters!');
 		} else {
 			setSuccessFor(pass1);
 			}

 		if(passVal2 === '') {
 			setErrorFor(pass2, 'Password cannot be empty!');

 		} else if(passVal1 !== passVal2){
 				setErrorFor(pass2, 'Password does not match!');
 		} else {
 			setSuccessFor(pass2);
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