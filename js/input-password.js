function show_hide_current_password(target){
	var input = document.getElementById('current-password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hide_new_password(target){
	var input = document.getElementById('new-password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hide_confirm_password(target){
	var input = document.getElementById('confirm-password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function checkValue () {
	let input = document.getElementById('new-password-input');
	let inputValue = document.getElementById('new-password-input').value;
	if (inputValue == '') {
			input.onfocus();
	} else {  };
};

checkValue();