
var error = document.getElementById('error');
var messagesError = [];

document.addEventListener('keydown', function (event) {
	  if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
	    var form = event.target.form;
	    var index = Array.prototype.indexOf.call(form, event.target);
	    form.elements[index + 1].focus();
	    event.preventDefault();
	  }

}); 

function validateForm (name) {
	if (validateName(name) === false) {
		
	}
	console.log(name);
	if (messageError.length > 0 ) {
		return false;
	}
	return true;
}

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


document.addEventListener('submit', (e) => {
	
	messagesError = [];
	/* 
	** Validate name input
	*/
	var name = document.getElementById('name').value;
	if (invalidRequireInput(name)) {
		messagesError.push({
			elementError: "name",
			messageError: "Họ tên là bắt buộc"
		});
	} else {
		var elementsName = name.split(" ");
		if (elementsName.length > 0) {
			name = '';
			var i;
			for (i in elementsName) {
				if (elementsName[i] != '') {
					/* skip string is null 	*/
					name += jsUcfirst(elementsName[i]) + ' ';	
				}
			}

			if (name === '') {
				messagesError.push({
					elementError: "name",
					messageError: "Họ tên không hợp lệ"
				});
			}
			/* 
			** validated name 
			*/
		} else {
			messagesError.push({
				elementError: "name",
				messageError: "Họ tên không hợp lệ"
			});
		}	
	}
	
	/* 
	** end validate name
	*/


	/* 
	** validate date
	*/
	var dateOfBirth = document.getElementById('date-of-birth').value;
	if (invalidRequireInput(dateOfBirth)) {
		messagesError.push({
			elementError: "date-of-birth",
			messageError: "Ngày sinh là bắt buộc"
		});
	}
	/* 
	** end validate date
	*/

	/*
	** Validate email
	*/
	var email = document.getElementById('email').value;
	if (invalidRequireInput(email)) {
		messagesError.push({
			elementError: "email",
			messageError: "Email là bắt buộc"
		});
	}
	
	/*
	** end validate email
	*/


	/*
	**	validate username
	*/
	var username = document.getElementById('username').value;
	if (invalidRequireInput(username)) {
		messagesError.push({
			elementError: "username",
			messageError: "Tên sử dụng là bắt buộc"
		});
		/* username */
	}
	/*
	** end validate username
	*/

	/* 
	** validate password
	*/
	var password = document.getElementById('password').value;
	if (invalidRequireInput(password)) {
		messagesError.push({
			elementError: "password",
			messageError: "Mật khẩu là bắt buộc"
		});
	}
	
	/*
	** validate confirm pwd
	*/

	var confirmPwd = document.getElementById('confirm-pwd').value;

	if (invalidRequireInput(confirmPwd)) {
		messagesError.push({
			elementError: "confirm-pwd",
			messageError: "Mật khẩu nhập lại là bắt buộc"
		});
	} else {
		if (confirmPwd.normalize() != password.normalize()) {
			messagesError.push({
			elementError: "confirm-pwd",
			messageError: "Mật khẩu nhập lại là chưa đúng"
		});
		}
	}
	console.log(name);
	console.log(dateOfBirth);
	console.log(email);
	console.log(username);
	console.log(password);
	console.log(messagesError);
	
	

	e.preventDefault();
})


function invalidRequireInput (string) {
	return (string === '' || string === null || typeof string === undefined);
}
/*
value maxdate is today 
var maxDate

*/;