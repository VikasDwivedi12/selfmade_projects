const searchBtn = document.getElementById('submitBtn');
const displayElement = document.getElementsByClassName('display-element')[0];
const apiUrl = './tr.json';

//Basic variables defined for data scrapping
let countryList = [];
let templeList = [];
let beachesList = [];

function collectData(object, array, keyword){
    //This function take two inputs, an object, an array and a keyword.
    //Finds out the keyword in the object and 
    for(let i = 0; i < object.length; i++){
        if(object[i][keyword] !== undefined){
            array.push(object[i][keyword]);
        }
    }
}

async function fetchData(){
    fetch(apiUrl)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const country = data.countries;
        const beaches = data.beaches;
        const temples = data.temples;

        collectData(country, countryList, 'name');
        collectData(beaches, beachesList, 'name');
        collectData(temples, templeList, 'name');

        //Now we have to handle the input provided by the user.
        const userInput = document.getElementById('destination').value;

        if(userInput !== ''){
            if(countryList.includes(userInput)){
                const foundIndex = countryList.indexOf(userInput);
                const result = data['countries'][foundIndex]['cities'];
                
                //Generating the elements destination elements for that country.
                for(let i = 0; i < result.length; i++){
                    const newElement = document.createElement('div');
                    newElement.classList.add('card');
                    newElement.innerHTML = `
                    <img src="${result[i]['imageUrl']}" class="dest-img">
                    <h3 class="dname">${result[i]['name']}</h3>
                    <p class="ddesc">${result[i]['description']}</p>
                    <div class="btn-container">
                        <button class="bookBtn">Book Now</button>
                    </div>
                    `;
                    displayElement.appendChild(newElement);
                }
            }
            else if(beachesList.includes(userInput)){
                const foundIndex = beachesList.indexOf(userInput);
                const result = data['beaches'];
                
                const newElement = document.createElement('div');
                newElement.classList.add('card');
                newElement.innerHTML = `
                <img src="${result[foundIndex]['imageUrl']}" class="dest-img">
                <h3 class="dname">${result[foundIndex]['name']}</h3>
                <p class="ddesc">${result[foundIndex]['description']}</p>
                <div class="btn-container">
                    <button class="bookBtn">Book Now</button>
                </div>
                `;
                displayElement.appendChild(newElement);
            }
            else if(templeList.includes(userInput)){
                const foundIndex = templeList.indexOf(userInput);
                const result = data['temples'];
                
                const newElement = document.createElement('div');
                newElement.classList.add('card');
                newElement.innerHTML = `
                <img src="${result[foundIndex]['imageUrl']}" class="dest-img">
                <h3 class="dname">${result[foundIndex]['name']}</h3>
                <p class="ddesc">${result[foundIndex]['description']}</p>
                <div class="btn-container">
                    <button class="bookBtn">Book Now</button>
                </div>
                `;
                displayElement.appendChild(newElement);
            }
            else{
                console.log('Destination out of reach.');
            }
            //Now the next task is to show the results according to the user preferences,
            //Not by the exact location name.
        }
        else{
            alert("Please enter the destination.");
        }
    })
    .catch((error)=>{
        console.error(error);
        displayElement.innerHTML = `Sorry, Something's wrong at our end.`;
    })
}

searchBtn.addEventListener('click', function(){
    displayElement.innerHTML = '';
    fetchData();
})