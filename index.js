const form = document.getElementById('form')
const compos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span')
function validacaoEmail(){
    let emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(inputText.value.match(emailFormat))
	{
		alert("Esse não um email válido");
		return false;
		}
}

