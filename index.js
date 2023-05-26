const campos = document.querySelectorAll('[required]')

function validarCampos(campo){
    function verificarErros(){
        let foundError = false;

        for(let error in campo.validity){
            if(campo.validity[error] && !campo.validity.valid){
                foundError = error
            }
        }
        return foundError;
    }

    function mensagemCustomizada(typeError){
        const messages = {
            text:{
                valueMissing: "Por favor, preencha esse campo"
            },
            email:{
                valueMissing: "E-mail obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            },
            senha:{
                valueMissing: "Por favor, preencha esse campo"
            },
        }
        return messages[campo.type][typeError]
    }
    function setMensagemCustomizada(message){

        const spanError = campo.parentNode.querySelector("span.error")

        if(message){
            spanError.classList.add("active")
            spanError.innerHTML = message
        }else{
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
        
    }
    return function(){

        const error =verificarErros()
        
        if(error){
            const message = mensagemCustomizada(error)
            campo.style.borderColor = "red"
            setMensagemCustomizada(message)
        }else{
            campo.style.borderColor = "green"
            setMensagemCustomizada()
        }
    }
}