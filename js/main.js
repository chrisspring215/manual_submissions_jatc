// Check for bad string while entering Student ID
function studentIdKeytest() {
	var studentId = document.getElementById('studentId').value;

	if (studentId.match(/[a-z]/i)) {
    document.getElementById('studentIdError').setAttribute('class', 'error');
    document.getElementById('studentIdError').innerHTML = " Can not use letters"
	}

	else if (studentId.match(/[0-9]/i)) {
    document.getElementById('studentIdError').setAttribute('class', 'hidden');
	}
}

// Check for bad string when Student ID loses focus
function checkStudentId() {
	var studentId = document.getElementById('studentId').value;

	if (studentId.length != 9) {
		document.getElementById('studentIdError').setAttribute('class', 'error');
		document.getElementById('studentIdError').innerHTML = " Enter '@' followed by 8 digits";
	}

	else if (studentId.match(/[a-z]/i)) {
    document.getElementById('studentIdError').setAttribute('class', 'error');
    document.getElementById('studentIdError').innerHTML = " Can not use letters"
	}

	else{
		document.getElementById('studentIdError').setAttribute('class', 'hidden')
	}
}

function checkAttemptId() {
	var attemptId = document.getElementById('attemptId').value;

	if (studentId.length != 10) {
		document.getElementById('attemptIdError').setAttribute('class', 'error')
	}

	else if (studentId.length = 10) {
		document.getElementById('attemptIdError').setAttribute('class', 'hidden')
	};
}

function studentIdKeytest() {
	var studentId = document.getElementById('studentId').value;

	if (studentId.match(/[a-z]/i)) {
    document.getElementById('studentIdError').setAttribute('class', 'error');
    document.getElementById('studentIdError').innerHTML = " Can not use letters"
	}

	else if (studentId.match(/[0-9]/i)) {
    document.getElementById('studentIdError').setAttribute('class', 'hidden');
	}
}