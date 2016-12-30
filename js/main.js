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

// Check for bad string while entering Attempt ID
function attemptIdKeytest() {
	var attemptId = document.getElementById('attemptId').value;
	if (attemptId.match(/[a-z]/i)) {
    document.getElementById('attemptIdError').setAttribute('class', 'error');
    document.getElementById('attemptIdError').innerHTML = " Can not use letters"
	}

	else if (attemptId.match(/[0-9]/i)) {
    document.getElementById('attemptIdError').setAttribute('class', 'hidden');
	}
}

// Check for bad string when Attempt ID loses focus
function checkAttemptId() {
	var attemptId = document.getElementById('attemptId').value;

	if (attemptId.length != 10) {
		document.getElementById('attemptIdError').setAttribute('class', 'error');
		document.getElementById('attemptIdError').innerHTML = " Must be 10 digits";
	}

	else if (attemptId.match(/[a-z]/i)) {
    document.getElementById('attemptIdError').setAttribute('class', 'error');
    document.getElementById('attemptIdError').innerHTML = " Can not use letters"
	}

	else{
		document.getElementById('attemptIdError').setAttribute('class', 'hidden')
	}
}

// Check for bad string while entering Percent Correct
function percentCorrectKeytest() {
	var percentCorrect = document.getElementById('percentCorrect').value;
	if (percentCorrect.match(/[a-z]/i)) {
    document.getElementById('percentCorrectError').setAttribute('class', 'error');
    document.getElementById('percentCorrectError').innerHTML = " Can not use letters"
	}

	else if (percentCorrect.match(/[0-9]/i)) {
    document.getElementById('percentCorrectError').setAttribute('class', 'hidden');
	}
}

// Check for bad string when Percent Correct loses focus
function checkPercentCorrect() {

	var percentCorrect = document.getElementById('percentCorrect').value;
	var percentage = parseInt(percentCorrect);

	if (percentage > 100) {
		document.getElementById('percentCorrectError').setAttribute('class', 'error');
		document.getElementById('percentCorrectError').innerHTML = " Enter a valid percent (0-100)";
	}

	else if (percentCorrect === '') {
		document.getElementById('percentCorrectError').setAttribute('class', 'error');
		document.getElementById('percentCorrectError').innerHTML = " Enter a valid percent (0-100)";
	}

	else if (percentCorrect.length > 3) {
		document.getElementById('percentCorrectError').setAttribute('class', 'error');
		document.getElementById('percentCorrectError').innerHTML = " Enter a valid percent (0-100)";
	}

	else if (percentCorrect.match(/[a-z]/i)) {
    document.getElementById('percentCorrectError').setAttribute('class', 'error');
    document.getElementById('percentCorrectError').innerHTML = " Can not use letters"
	}

	else{
		document.getElementById('percentCorrectError').setAttribute('class', 'hidden')
	}

}

// Check for bad string while entering Answer Responses
function answerResponseKeytest() {
	var answerInput = document.getElementsByClassName('answer-input');


	if (answerInput[0].value.match(/[0-9]/i)) {
    document.getElementById('answerInputError').setAttribute('class', 'error');
    document.getElementById('answerInputError').innerHTML = " Can not use numbers"
	}

	else if (answerInput[0].value.match(/[a-e]/i)) {
    document.getElementById('answerInputError').setAttribute('class', 'hidden');
	}

}

// Check for bad string when Answer Responses loses focus
function checkAnswerResponse() {
	
	var answerInput = document.getElementsByClassName('answer-input');
	var answerInputblocks = document.getElementById('answerResponseBlocks').getElementsByTagName('input');
	var answerInputblocksLength = document.getElementById('answerResponseBlocks').getElementsByTagName('input').length;
	var totalAnswers = [];
	var totalQuestions = [];

	for (var i = 0; i < answerInputblocksLength; i++) {	
		totalAnswers[i] = answerInputblocks[i].value.length;
		totalQuestions[i] = answerInput[i].size;
	};

	function addAnswers(total1, num1) {
	    return total1 + num1;
	}

	function addQuestions(total2, num2) {
	    return total2 + num2;
	}

	function tally(item) {
	    if (totalAnswers.reduce(addAnswers) < totalQuestions.reduce(addQuestions)) {
	    	document.getElementById('answerInputError').setAttribute('class', 'error');
    		document.getElementById('answerInputError').innerHTML = " There are missing answers: " + totalAnswers.reduce(addAnswers) + '/' + totalQuestions.reduce(addQuestions)
	    }
    	else {
    		document.getElementById('answerInputError').setAttribute('class', 'hidden');
    	}
	}
	tally();
}
