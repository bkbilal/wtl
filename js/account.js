var username_allocted=['salman' ,'sarfaraz','javed'] 
funcation checksum(e){
	elements=e.target;
	var message=document.getElementById('usererr');
	for(var i=0;i<=username_allocted.length;i++)
		{
			
			if(username_allocted[i]==element.value)
				{
					message.textContent="usernmae Unavilable";
					flag=1;				
					break;
					
				}
		}
	if(flag==0 && message.textContent!=""){
		message.textContent="user name Avilable";
	}
	
}

function setAcive(e) {
    var element=e.target;
    var previousElement=document.getElementsByClassName('active');
    if(previousElement.length==1)
    previousElement[0].setAttribute('class','form-control')
    element.setAttribute('class','form-control active');
}

var elements=documnet.getElementsByTagName('input');
for(var i=0;i<elements.length;i++){
    if(elements[i].type!="submit" && elements[i].type!="reset")
        {
elements[i].addEventListener('focus',setActive,false);
        }
}