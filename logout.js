const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
	if(user) {
		//acount info
		//const html = `
		//<div>Welcome, ${user.email}</div>`;
		//accountDetails.innerHTML = html;
		db.collection('users').doc(user.uid).get().then(doc => {
			const html = `
			<div>Welcome back,<span class="highlight"> ${doc.data().bio} </span></div>`;
			accountDetails.innerHTML = html;
		})
		

		loggedInLinks.forEach(item => item.style.display = 'inline');
		loggedOutLinks.forEach(item => item.style.display = 'none');
	} else {
		accountDetails.innerHTML ='';
		loggedInLinks.forEach(item => item.style.display = 'none');
		loggedOutLinks.forEach(item => item.style.display = 'inline');
	}
}


auth.onAuthStateChanged(user => {
	if (user) {
		setupUI(user);

		//quoteList.style.display = 'block';
		//get data
		//db.collection('post').onSnapshot(snapshot => {
		//setupGuides(snapshot.docs);		
		//}, err => {
		//	console.log(err.message)
		//});
	} else {
		setupUI();
		//setupGuides([]);
		//quoteList.style.display = 'none';

	}
});


const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) =>{
	e.preventDefault();
	
	auth.signOut().then(() => {
		alert("Succesfully logged out!");
	});
});