let form = document.querySelector('#contact-form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message')
let nameErrMessage = document.querySelector('#name-error');
let emailErrMessage = document.querySelector('#email-error');
let messageErrMessage = document.querySelector('#message-error')

const nameEvent = (event) => {
	nameErrMessage.innerHTML="";
	emailErrMessage.innerHTML="";
	messageErrMessage.innerHTML = ""; 
	event.preventDefault();
	if (name.value.length < 4){
		nameErrMessage.innerHTML="Your Name must be 4 characters or more";
	}
	else if (/[^A-Za-z0-9\s]/.test(name.value)) {
		nameErrMessage.innerHTML="Your Name cannot contain special characters";
	}
	let emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!emailRegEx.test(email.value)){
		emailErrMessage.innerHTML = "Enter your email in the right format";
	}
	if (message.value.length < 20){
		messageErrMessage.innerHTML = "Your Message has to be 20 characters or more";
	}
	if (nameErrMessage.innerHTML==""&emailErrMessage.innerHTML==""&messageErrMessage.innerHTML == "") {
		document.querySelector("#form-success-message").innerHTML = "Sumbmitted successfully";
		form.reset();
	}
}

form.addEventListener('submit', nameEvent);