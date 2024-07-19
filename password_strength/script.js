const passwordInput = document.getElementById("passwordInput");
const inputStatus = document.getElementById("passwordStatus");

passwordInput.addEventListener('input', function(){
    const password = passwordInput.value;
    
    //conditions for password checking.
    if(password.length === 0){
        inputStatus.textContent = '';
    }
    else if(password.length < 8){
        inputStatus.textContent = "Password is less than 8 characters.";
        inputStatus.style.color = "red";
    }
    else{
        if(password.search(/[a-z]/) == -1){
            inputStatus.textContent = "Password must contain a lowercase character.";
            inputStatus.style.color = "red";
        }
        else if(password.search(/[A-Z]/) == -1){
            inputStatus.textContent = "Password must contain an uppercase character.";
            inputStatus.style.color = "red";
        }
        else if(password.search(/[0-9]/) == -1){
            inputStatus.textContent = "Password must contain a number.";
            inputStatus.style.color = "red";
        }
        else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            inputStatus.textContent = "Password must contain special characters.";
            inputStatus.style.color = "red";
        }
        else{
            inputStatus.textContent = "Password is strong enough.";
            inputStatus.style.color = "lightgreen"
        }
    }
})