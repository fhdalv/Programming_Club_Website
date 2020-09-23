const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) =>{
	e.preventDefault();
	
	auth.signOut().then(() => {
		alert("Succesfully logged out!");
	});
});