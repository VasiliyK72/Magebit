
/*--Setting variables--*/
const thanks        = document.getElementById('page__thanks-body');
const newsletter    = document.getElementById('page__newsletter-body');

const form          = document.getElementById('form');
const submit_img    = document.getElementById("submit-img");
const submit        = document.getElementById("submit");
const input_group   = document.querySelector(".input-group");
const email         = document.querySelector("#form-email");
const terms         = document.querySelector("#form-terms");


/*--Input Form--*/
input_group.addEventListener("mouseover", function( event ) {
    submit_img.src="img/ic_arrow_hover.svg";
    
    email.style.border         = "1px solid #4066A5";
    email.style.borderLeft     = "4px solid #4066A5";
},false);
input_group.addEventListener("mouseout", function( event ) {
    submit_img.src="img/ic_arrow.svg";
    
    email.style.border         = "1px solid #E3E3E4";
    email.style.borderLeft     = "4px solid #E3E3E4";
},false);

submit.addEventListener('click', e => {
	e.preventDefault();
	
	data = checkInputs();
	data.act = "new_email";
	
	if(data.result === true) setSuccessFor(email, data);
});

/*--Validation---*/
function checkInputs() {
	// trim to remove the whitespaces
	
	const emailValue    = email.value.trim();
	const termsValue    = terms.checked;
    let validation = false;
	
	
	if(emailValue === '') {
		setErrorFor(email, 'Email address is required');
        return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please provide a valid e-mail address');
        return false;
    } else if (isColombia(emailValue)) {
		setErrorFor(email, 'We are not accepting subscriptions from Colombia emails');
        return false;
	} else {
        validation = true;
	}

    if(termsValue === false) {
		setErrorFor(email, 'You must accept the terms and conditions');
        validation = false;
	} else {
		
        validation = (validation) ? true : false;
	}

	return {result: validation, email: emailValue, terms: termsValue};
}

/*--Error--*/
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'input-group error';
	small.innerText = message;
}


/*--Success--*/
function setSuccessFor(input, data) {
    
    
    send_comand( data, 
        function(R) {
            console.log('Success');
            const formControl = input.parentElement;
        	formControl.className       = 'input-group';
        	form.style.display          = "none";
            newsletter.style.display    = "none";
            thanks.style.display        = "block";
        },
        function(R) {
            console.log('Error');
            setErrorFor(email, R.message);
    } );
}

/*--Specific validation Email--*/
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isColombia(email) {
	return /^[a-z0-9]+@[a-z]+\.co$/.test(email);
}