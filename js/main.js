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

// Check not selected on course
function checkCourse() {
	var courseChoice = document.getElementById('courseChoice').value;


	if (courseChoice === 'Choose One') {
		document.getElementById('courseError').setAttribute('class', 'error');
		document.getElementById('courseError').innerHTML = " Choose a course";
	}

	else {
		document.getElementById('courseError').setAttribute('class', 'hidden');
	}
}

// Check not selected on submission type
function checkSubmissionType() {
	var submissionChoice = document.getElementById('submissionChoice').value;


	if (submissionChoice === 'Choose One') {
		document.getElementById('submissionError').setAttribute('class', 'error');
		document.getElementById('submissionError').innerHTML = " Choose a submission type";
	}

	else {
		document.getElementById('submissionError').setAttribute('class', 'hidden');
	}
}

// Check not selected on lesson
function checkLesson() {
	var lessonChoice = document.getElementById('lessonChoice').value;


	if (lessonChoice === 'Choose One') {
		document.getElementById('lessonError').setAttribute('class', 'error');
		document.getElementById('lessonError').innerHTML = " Choose a lesson";
	}

	else {
		document.getElementById('lessonError').setAttribute('class', 'hidden');
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


// Check for bad string while entering date
function dateKeyTest() {
	var monthDate = document.getElementById('month').value;
	var monthDateNumber = Number(document.getElementById('month').value);

	var dayDate = document.getElementById('day').value;
	var dayDateNumber = Number(document.getElementById('day').value);

	var yearDate = document.getElementById('year').value;
	var yearDateNumber = Number(document.getElementById('year').value);

	// Checks month for errors
	if (monthDate.match(/[a-z]/i)) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Can not use letters"
	}

	else if (monthDate.length != 2) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Use two digit month format: Jan = 01"
	}

	else if (monthDateNumber > 12) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Not a month: 01-12"
	}

	else if (monthDate.match(/[0-9]/i)) {
    document.getElementById('submissionDateError').setAttribute('class', 'hidden');
	}

	// Checks day for errors
	if (dayDate.match(/[a-z]/i)) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Can not use letters"
	}

	else if (dayDate.length != 2) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Use two digit day format: 1st = 01"
	}

	else if (dayDateNumber > 31) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Not a day: 01-31"
	}

	else if (dayDate.match(/[0-9]/i)) {
    document.getElementById('submissionDateError').setAttribute('class', 'hidden');
	}

	// Checks year for errors
	if (yearDate.match(/[a-z]/i)) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Can not use letters"
	}

	else if (yearDate.length != 4) {
    document.getElementById('submissionDateError').setAttribute('class', 'error');
    document.getElementById('submissionDateError').innerHTML = " Use four digit year format: 2016, 2020"
	}

	else if (yearDate.match(/[0-9]/i)) {
    document.getElementById('submissionDateError').setAttribute('class', 'hidden');
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