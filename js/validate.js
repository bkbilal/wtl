function checkRollNo(e){

		var element=e.target;

	if(/[^a-zA-Z0-9]/.test(element.value))
		{
		alert("invalid roll no");	
			return false;
		}
	if(!/[a-zA-Z]/.test(element.value))
		{
				alert("missing alphabtaes");
			return false;
		}
	if(!/[0-9]/.test(element.value)){
		
			alert("number misiing");
		return false;
	}
	return true;
}
function checkName(e){
	var element=e.target;
	if(/[^a-zA-Z ]/.test(element.value)){
		
		alert("name is in valid! Onliy charcter from A-z and A-Z allowed");
		element.value="";
		return false;
	}
		
	if(element.value.length<3)
		{
			alert("Name is to short!");
			element.value="";
			return false;
		}
	return true;
	
	

}
function checkAddress(e){
	
	var element=e.target;
	
	if(element.value.length<50)
		{
			alert("adress is to short!");
			element.value="";
			return false;
		}
	return true;
}

function checkEmail(e)
{
	var element=e.target;
	
	if(element.value.length<20)
		{
			alert("adress is to short!");
			element.value="";
			return false;
		}
	return true;
}

var rollno=document.getElementById("rollno");
var sname=document.getElementById("sname");
var address=document.getElementById("address");
var email=document.getElementById("email");


rollno.addEventListener('blur',checkRollNo,false);

sname.addEventListener('blur',checkName,false);


address.addEventListener('blur',checkAddress,false);

email.addEventListener('blur',checkEmail,false)