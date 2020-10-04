
// Counting age
const getCurrentAge = date => ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
const myAge = getCurrentAge('1989-11-07');
document.getElementById('currentAge').innerText = myAge;


// Back To Top
const arrowTop = document.querySelector('.back_to_top');

arrowTop.onclick = function() {
	window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
	arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
	arrowTop.style.zIndex = '9999';
});


// Resume update - upload
let getResumeDate = (refreshType, year, month, day) => {
	let refreshDate = `${year}.${month}.${day}`;

	if (refreshType === 'pdf') {
		document.body.querySelectorAll('.typePdf')
			.forEach(typePdf => {
				typePdf.title = `Last upload: ${refreshDate}`
			});
	}
	if (refreshType === 'online') {
		document.body.querySelectorAll('.typeOnline')
			.forEach(typeOnline => {
				typeOnline.title = `Last update: ${refreshDate}`
			});
	}


}

getResumeDate('pdf',2020, 10, 4);
getResumeDate('online',2020, 10, 4);
