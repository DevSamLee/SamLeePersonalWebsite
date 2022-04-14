document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("regEx").addEventListener("submit", validate);

}

function validate(e){
	
	hideAllErrors();

	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}

/*	
	formHasErrors function
	returns a true if errors are discovered
	returns a false if there are no errors
*/
function formHasErrors(){

	let errorFlag = false;

	//	Create and test your 3 regular expressions here. 
	//	If one or any fail, remember to display the appropriate error message 
	//	and update the error flag
	let requiredFields = ["email", "pwd"];

	for(let i = 0; i < requiredFields.length; i++) {
		let textField = document.getElementById(requiredFields[i]);
		if(!formFieldHasInput(textField)){
			document.getElementById(requiredFields[i] + "_error").style.visibility = "visible";
			if(!errorFlag){
				textField.focus();
				textField.select();
			}

			errorFlag = true;
		}
	}

	let regex1 = new RegExp(/^\S+@\S+\.\S+$/);
	let emailValue = document.getElementById("email").value;
	console.log(emailValue);

	if(!regex1.test(emailValue)){
		document.getElementById("email_error").style.visibility = "visible";
		document.getElementById("email_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	let regex2 = new RegExp(/^\d{6}$/);
	let pwdValue = document.getElementById("pwd").value;
	console.log(pwdValue);

	if(!regex2.test(pwdValue)){
		document.getElementById("pwd_error").style.visibility = "visible";
		document.getElementById("pwd_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("pwd").focus();
			document.getElementById("pwd").select();
		}

		errorFlag = true;
	}
	//	Code above here!
	return errorFlag;

}

function trim(str){
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(fieldElement){
	// Check if the text field has a value
	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		// Invalid entry
		return false;
	}
	
	// Valid entry
	return true;
}

function hideAllErrors()
{
	//	Get an array of the error fields
	var errorFields = document.getElementsByClassName("error");

	//	Loop through each error field
	for(var i = 0;i < errorFields.length; i++){
		//	Hide the error field
		errorFields[i].style.display = "none";
	}
}
