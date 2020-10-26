const guideList = document.querySelector('.guides');
const quoteList = document.querySelector('.quote');
const darkList = document.querySelector('.dark');
const accountDetails = document.querySelector('.account-details');
const newsLetter = document.querySelector('.news');
const email = document.getElementById('news-email');
const searchBar = document.getElementById('searchBar');

let guide = [];


const setupGuides = (data) => {
	if (data.length) {
	let html ='';
	data.forEach(doc => {
		guide = doc.data();
		const li = `
		<li>
			<a>
				<h2>${guide.name}</h2>
				<h3>Created by: ${guide.created_by}</h3>
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

searchBar.addEventListener('keyup', (e) => {
	const input = e.target.value.toUpperCase();
	console.log(input);
	var ul, li, a, i;
   // input = document.getElementById("myInput");
   // filter = input.value.toUpperCase();
    ul = document.getElementById("services");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
});
	//console.log(guide.name);
	//const filtered = setupGuides.filter((c))

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
