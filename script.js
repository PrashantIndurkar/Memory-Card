const showButton = document.querySelector('#show');
const addContainer = document.querySelector('#add-container');
const hideButton = document.querySelector('#hide');

console.log(hide);

showButton.addEventListener('click', (e) => {
	addContainer.classList.add('show');
});
hideButton.addEventListener('click', (e) => {
	addContainer.classList.remove('show');
});
