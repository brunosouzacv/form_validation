// Const
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Add event listener
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
    setErrorFor(input, message);
    setSuccessFor(input);
    isEmail();
});

// Function check inputs
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	// Username verification
	if(usernameValue === '') {
		setErrorFor(username, 'Usuário deve ser preenchido!');
	} else {
		setSuccessFor(username);
	}
	
	// E-mail verification
	if(emailValue === '') {
		setErrorFor(email, 'E-mail deve ser preenchido!');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'E-mail inválido!');
	} else {
		setSuccessFor(email);
	}
	
	// Password verification
	if(passwordValue === '') {
		setErrorFor(password, 'Senha deve ser preenchida!');
	} else {
		setSuccessFor(password);
	}
	
	// Password check verification
	if(password2Value === '') {
		setErrorFor(password2, 'Confirmação de senha deve ser preenchida!');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Senha não confere!');
	} else{
		setSuccessFor(password2);
	}
}

// Function error
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

// Function success
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
// Email verification function 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};