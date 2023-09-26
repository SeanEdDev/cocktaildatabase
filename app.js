
function newSearch(){
  location.reload();
}


document.addEventListener('click', (e) =>
  {
    
    let elementId = e.target.id;
    var openText = document.getElementById(elementId + "inner");
    
    if (openText.style.display != "flex") {
        
        openText.style.display = "flex";   
       
    }
   else  if (openText.style.display == "flex" ){ 
    var openText = document.getElementById(elementId + "inner");
    openText.style.display = "none";
    
    }
  }
);

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }




function getcockbyName() {
var cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = ""; 
var userInput = document.getElementById("userInput").value;


fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput)
      .then(res => res.json())
      .then(data => {
        drink = data;
        
        console.log(drink.drinks);
        var json_data = drink.drinks;
        var result = [];
        
        for(var i in json_data)
        result.push([i, json_data [i]]);
        
        
        let obj = Object.fromEntries(result);
        
        Object.keys(obj).forEach(key => {
            if (obj[key] === null) {
              delete obj[key];
            }
          });

          console.log(obj)
          
        for (let step = 0; step < result.length; step++) {


                drinkName = (obj[step].strDrink);
                drinkPic = (obj[step].strDrinkThumb);
                drinkInstruct = (obj[step].strInstructions);
        for  (let count = 0; count< 9; count++) {  
            drinkIngredients = []
            if (obj[step].strMeasure1) {

                var pushValue = obj[step].strMeasure1 + obj[step].strIngredient1
                
                drinkIngredients.push(pushValue);
                
            }
                
            if (obj[step].strMeasure2) {
                var pushValue = obj[step].strMeasure2 + obj[step].strIngredient2
                drinkIngredients.push(pushValue);
            }
               
            if (obj[step].strMeasure3) {
                var pushValue = obj[step].strMeasure3 + obj[step].strIngredient3 
            }
                
            if (obj[step].strMeasure4) {
                var pushValue = obj[step].strMeasure4 + obj[step].strIngredient4
                drinkIngredients.push(pushValue);
                                
            }
            if (obj[step].strMeasure5) {
                var pushValue = obj[step].strMeasure5+ obj[step].strIngredient5
                                
            }
            if (obj[step].strMeasure6) {
                var pushValue = obj[step].strMeasure6 + obj[step].strIngredient6 
                drinkIngredients.push(pushValue);
                                
            }
            if (obj[step].strMeasure6) {
                var pushValue = obj[step].strMeasure7 + obj[step].strIngredient7 
                                
            }
            if (obj[step].strMeasure6) {
                var pushValue = obj[step].strMeasure8 + obj[step].strIngredient8 
                drinkIngredients.push(pushValue);
                                
            }
            if (obj[step].strMeasure6) {
                var pushValue = obj[step].strMeasure9 + obj[step].strIngredient9 
                drinkIngredients.push(pushValue);
                                
            }

             }
                
         
               
                
               
                // create a new div element
                const newDiv = document.createElement("div");
                newDiv.setAttribute("id", "Div"+ step);
                newDiv.setAttribute("class","drinkCard");
                newDiv.setAttribute("openClose", 0);
                // and give it some content
                const newName = document.createTextNode(drinkName);
                const newPicture = document.createElement("img");
                newPicture.setAttribute("src",drinkPic);
                newPicture.style.height ="200px";
                newPicture.style.width ="cover";
               

                //make inner div
                const innerDiv = document.createElement("div");
                innerDiv.setAttribute("class","drinkInstruct");
                innerDiv.setAttribute("id","Div"+ step + "inner");
                const innerDiv2 = document.createElement("div");
                innerDiv2.setAttribute("class","drinkIngredMes");
                innerDiv2.setAttribute("id","Div"+ step + "ingredMes");
                innerDiv2.style.maxWidth = "fit-content";
                
                const newInstructions = document.createTextNode(drinkInstruct)
                const newIngredMesure = document.createTextNode(drinkIngredients)
                


                // add the text node to the newly created div
                newDiv.appendChild(newName);
                newDiv.appendChild(newPicture);
                innerDiv.appendChild(newInstructions);;
                innerDiv2.appendChild(newIngredMesure)
                
                // select div i will append to
                cardContainer = document.getElementById("cardContainer");
                // add the newly created element and its content into the DOM
                const currentDiv = document.getElementById("div");

                const appendDiv = document.body.insertBefore(newDiv, currentDiv);
              
                cardContainer.append(appendDiv);
                newDiv.appendChild(innerDiv);
                innerDiv.appendChild(innerDiv2);
          }
         
    })
    
}
