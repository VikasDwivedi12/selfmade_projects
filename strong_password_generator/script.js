const generateBtn = document.getElementById('generate-Btn');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '~!@#$%^&*';


generateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    const selectedPreferences = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    const preferenceValues = selectedPreferences.map(checkbox => checkbox.value);
    
    if(!selectedOption){
        alert("You have to choose an option");
    }
    else{
        if(preferenceValues.length != 0){
            const length = Number.parseInt(selectedOption.value);
            const totalPreferences = preferenceValues.length;
            let password = '';
            
            const charPPreference = Math.floor(length/totalPreferences);
            //Now if incase charPPreference is less than length
            for(let i = 0; i < charPPreference; i++){
                if(preferenceValues.includes('uppercase')){
                    const randomIndex = Math.floor(Math.random() * uppercase.length);
                    password += uppercase[randomIndex];
                }
            }
            for(let i = 0; i < charPPreference; i++){
                if(preferenceValues.includes('lowercase')){
                    const randomIndex = Math.floor(Math.random() * lowercase.length);
                    password += lowercase[randomIndex];
                }
            }
            for(let i = 0; i < charPPreference; i++){
                if(preferenceValues.includes('numbers')){
                    const randomIndex = Math.floor(Math.random() * numbers.length);
                    password += numbers[randomIndex];
                }
            }
            for(let i = 0; i < charPPreference; i++){
                if(preferenceValues.includes('special')){
                    const randomIndex = Math.floor(Math.random() * specialChars.length);
                    password += specialChars[randomIndex];
                }
            }
            
            if(charPPreference < length){
                const bound = length - password.length;
                for(let i = 0; i < bound; i++){  
                    if(preferenceValues.includes('uppercase')){
                        const randomIndex = Math.floor(Math.random() * uppercase.length);
                        password += uppercase[randomIndex];
                    }
                    else if(preferenceValues.includes('lowercase')){
                        const randomIndex = Math.floor(Math.random() * lowercase.length);
                        password += lowercase[randomIndex];
                    }
                    else if(preferenceValues.includes('numbers')){
                        const randomIndex = Math.floor(Math.random() * numbers.length);
                        password += numbers[randomIndex];
                    }
                    else if(preferenceValues.includes('special')){
                        const randomIndex = Math.floor(Math.random() * specialChars.length);
                        password += specialChars[randomIndex];
                    }
                }
            }
            document.getElementById('display-field').value = password;
        }
        else{
            alert("You have to select preferences.");
        }
    }
})