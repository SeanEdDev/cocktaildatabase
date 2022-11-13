



function getcockbyName() {
var userInput = document.getElementById("userInput").value;
var counter = 1
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInput)
      .then(res => res.json())
      .then(data => {
        drink = data;
      })
      .then(() => {
        document.getElementById("drinkCard1").style.display = "none";
        document.getElementById("drinkCard2").style.display = "none";
        document.getElementById("drinkCard3").style.display = "none";
        document.getElementById("drinkCard4").style.display = "none";
        document.getElementById("cardIngred1").innerHTML = ""
        document.getElementById("cardIngred2").innerHTML = ""
        document.getElementById("cardIngred3").innerHTML = ""
        document.getElementById("cardIngred4").innerHTML = ""
        document.getElementById("cardInstruct1").innerHTML = ""
        document.getElementById("cardInstruct2").innerHTML = ""
        document.getElementById("cardInstruct3").innerHTML = ""
        document.getElementById("cardInstruct4").innerHTML = ""
        counter = 1

        drink.drinks.forEach(drink => {
            
            
            console.log(drink)
            if (counter === 1) {
                document.getElementById("drinkCard1").style.display = "flex"
                document.getElementById("cardPic1").style.backgroundImage = "URL(" + drink.strDrinkThumb + ")"
                document.getElementById("cardName1").innerHTML = drink.strDrink
                document.getElementById("cardInstruct1").insertAdjacentHTML('beforeend',drink.strInstructions );

                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',drink.strIngredient1);
                if (drink.strMeasure1) {
                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',"-" + drink.strMeasure1 + "<br>");    
                }
                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',drink.strIngredient2);
                if (drink.strMeasure2) {
                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',"-" + drink.strMeasure2 + "<br>");    
                }
                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',drink.strIngredient3);
                if (drink.strMeasure3) {
                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',"-" + drink.strMeasure3 + "<br>");    
                }
                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',drink.strIngredient4);
                if (drink.strMeasure4) {
                    document.getElementById("cardIngred1").insertAdjacentHTML('beforeend',"-" + drink.strMeasure4 + "<br>");    
                } else {
                                    
                }
                

                   } else if (counter === 2) { 
                        document.getElementById("drinkCard2").style.display = "flex"
                        document.getElementById("cardPic2").style.backgroundImage = "URL(" + drink.strDrinkThumb + ")"
                        document.getElementById("cardName2").innerHTML = drink.strDrink
                        document.getElementById("cardInstruct2").insertAdjacentHTML('beforeend',drink.strInstructions );
                       
                        document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',drink.strIngredient1);
                        if (drink.strMeasure1) {
                            document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',"-" + drink.strMeasure1 + "<br>");    
                        }
                            document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',drink.strIngredient2);
                        if (drink.strMeasure2) {
                            document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',"-" + drink.strMeasure2 + "<br>");    
                        }
                            document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',drink.strIngredient3);
                        if (drink.strMeasure3) {
                            document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',"-" + drink.strMeasure3 + "<br>");    
                        }
                            document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',drink.strIngredient4);
                        if (drink.strMeasure4) {
                            document.getElementById("cardIngred2").insertAdjacentHTML('beforeend',"-" + drink.strMeasure4 + "<br>");    
                        } else {
                                    
                        }

                    }  
                            else if (counter === 3) { 
                                document.getElementById("drinkCard3").style.display = "flex"
                                document.getElementById("cardPic3").style.backgroundImage = "URL(" + drink.strDrinkThumb + ")"
                                document.getElementById("cardName3").innerHTML = drink.strDrink 
                                document.getElementById("cardInstruct3").insertAdjacentHTML('beforeend',drink.strInstructions );
                              
                                document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',drink.strIngredient1);
                                if (drink.strMeasure1) {
                                    document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',"-" + drink.strMeasure1 + "<br>");    
                                }
                                    document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',drink.strIngredient2);
                                if (drink.strMeasure2) {
                                    document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',"-" + drink.strMeasure2 + "<br>");    
                                }
                                    document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',drink.strIngredient3);
                                if (drink.strMeasure3) {
                                    document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',"-" + drink.strMeasure3 + "<br>");    
                                }
                                    document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',drink.strIngredient4);
                                if (drink.strMeasure4) {
                                    document.getElementById("cardIngred3").insertAdjacentHTML('beforeend',"-" + drink.strMeasure4 + "<br>");    
                                } else {

                                }

                            }
                                else if (counter === 4) { 
                                    document.getElementById("drinkCard4").style.display = "flex"
                                    document.getElementById("cardPic4").style.backgroundImage = "URL(" + drink.strDrinkThumb + ")"
                                    document.getElementById("cardName4").innerHTML = drink.strDrink
                                    document.getElementById("cardInstruct4").insertAdjacentHTML('beforeend',drink.strInstructions );
                                    document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',drink.strIngredient1);
                                    if (drink.strMeasure1) {
                                        document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',"-" + drink.strMeasure1 + "<br>");    
                                    }
                                        document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',drink.strIngredient2);
                                    if (drink.strMeasure2) {
                                        document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',"-" + drink.strMeasure2 + "<br>");    
                                    }
                                        document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',drink.strIngredient3);
                                    if (drink.strMeasure3) {
                                        document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',"-" + drink.strMeasure3 + "<br>");    
                                    }
                                        document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',drink.strIngredient4);
                                    if (drink.strMeasure4) {
                                        document.getElementById("cardIngred4").insertAdjacentHTML('beforeend',"-" + drink.strMeasure4 + "<br>");    
                                    } else {
                                    
                                    }
                                }
                                counter += 1
})})}
            
                       
            
      