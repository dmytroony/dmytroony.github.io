
const getCurrentAge = date => ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
const myAge = getCurrentAge('1989-11-07');
const currentAge = document.getElementById('currentAge').innerText = myAge;
