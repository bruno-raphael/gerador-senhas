
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");


let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"
let newPssword ="";


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){

    sizePassword.innerHTML=this.value;
}

const generatorPassword =()=>{
    let pass = "";
    for (let i = 0, n = charset.length; i<sliderElement.value; ++i) {
    pass+= charset.charAt(Math.floor(Math.random()*n));
        
    }

        containerPassword.classList.remove("hiden");
      
        password.innerHTML = pass;
        novaSenha = pass;
}

function copyPassword(){

    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha);
}


buttonElement.addEventListener("click", generatorPassword);