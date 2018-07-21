function isTenSymbols(password) {
	var reg = '.{10}';
	if(password.match(reg)) {
		return true;
	} else {
		throw new Error('Password must consist of at least 10 symbols');
	}
}

function isOneUppercase(password) {
	var reg = /[A-Z]/;
	if(password.match(reg)) {
		return true;
	} else {
		throw new Error('There isn`t any uppercase symbol((((');
	}
}

function isOneLowercase(password) {
	var reg = /[a-z]/;
	if(password.match(reg)) {
		return true;
	} else {
		throw new Error('There isn`t any lowercase symbol((((');
	}
}


function isOneNumber(password) {
	var reg = /\d/;
	if(password.match(reg)) {
		return true;
	} else {
		throw new Error('There isn`t any number((((');
	}
}

function isOneSpecial(password, specialSymbols) {
	var reg = new RegExp( '['+specialSymbols+']');
	if(password.match(reg)) {
		return true;
	} else {
		throw new Error('There isn`t any special symbol( !@#$%^&*()-_=+{};:,<.>? )');
	}
}

function isNoRepeatedMoreThan(password, times) {
	var regTimes = '';
	var counter = 0;
	while(counter < times) {
		regTimes+='\\1';
		counter++;
	}

	var reg = new RegExp('(.)' + regTimes);
	if(!password.match(reg)) {
		return true;
	} else {
		var errorMessage = new Error('There are more than ' + times + ' symbols in a row(((('); 
		throw errorMessage;
	}
}


function checkPassword(password) {
	isTenSymbols(password);
	isOneUppercase(password);
	isOneLowercase(password);
	isOneNumber(password);
	isOneSpecial(password, `!@#$%^&*()-_=+{};:,<.>?`);
	isNoRepeatedMoreThan(password, 2);
	return true;
}

checkPassword('gffes5#grdrgsE')

