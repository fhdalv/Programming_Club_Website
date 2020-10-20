const guideList = document.querySelector('.guides');
const quoteList = document.querySelector('.quote');
const darkList = document.querySelector('.dark');
const accountDetails = document.querySelector('.account-details');
const newsLetter = document.querySelector('.news');
const email = document.getElementById('news-email');
const searchBar = document.getElementById('searchBar');

let guide = [];

//setup guides
const setupGuides = (data) => {
	if (data.length) {
	let html ='';
	data.forEach(doc => {
		guide = doc.data();
		const li = `
		<li>
			<a>
				<h2>Created by: ${guide.created_by}</h2>
				<h3>${guide.name}</h3>
				<p>${guide.thread}</p>
			</a>
		</li><br>
		`;
		html += li
	});

	guideList.innerHTML = html;

} else {
		guideList.innerHTML = `<h3>Login to view threads</h3>`
		darkList.innerHTML = `<h3>Login to post threads<h3>`
		}

}




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
