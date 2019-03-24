let allIngredients = []
let button = document.getElementById('submit-ingredient')
let findRecipe = document.getElementById('find-recipe')


button.addEventListener('click', (ev) => {
   ev.preventDefault()
   let ingredient = document.getElementById('user-ingredient')
   allIngredients.push(ingredient.value)
   renderIngredients(ingredient)
})

findRecipe.addEventListener('click', (ev) => {
   ev.preventDefault()
   searchRecipe()
})


function renderIngredients(ingredient){
   let listOfIngredients = document.getElementById('list-of-ingredients')
   listOfIngredients.innerHTML = '';
   ingredient.value = '';
   for(i = 0; i < allIngredients.length; i++) {
      let singleIngredient = document.createElement('li')
      singleIngredient.textContent = allIngredients[i]
      listOfIngredients.appendChild(singleIngredient)
   }
}

function searchRecipe(){
   let query = allIngredients.toString();
   properQuery= query.replace(/,/g, '+')
   fetch(`http://localhost:3000/recipe/${properQuery}`)
   .then(response => response.json())
   .then(json => createCard(json))
}



function createCard(json){
   let recipeResults = json.results
   let recipesDiv = document.getElementById('recipe-div')
   recipesDiv.innerHTML = '';
   for (i = 0; i < 5; i++){
   let cardDiv = document.createElement('div')
   let recipeImg = document.createElement('img')
   let bodyDiv = document.createElement('div')
   let h5 = document.createElement('h5')
   let h1 = document.createElement('h1')
   let smallPText = document.createElement('p')
   let smallText = document.createElement('small')
   cardDiv.className = 'card'
   recipeImg.className = 'card-img-top'
   recipeImg.src = recipeResults[i].thumbnail;
   bodyDiv.className = 'card-body'
   h5.className = 'card-title'
   h5.textContent = recipeResults[i].title
   smallPText.className = 'card-text'
   smallText.className = 'text-muted'
   smallText.textContent = 'powered by www.recipepuppy.com'
   cardDiv.appendChild(recipeImg)
   cardDiv.appendChild(bodyDiv)
   cardDiv.appendChild(h5)
   cardDiv.appendChild(smallPText)
   cardDiv.appendChild(smallText)
   recipesDiv.appendChild(cardDiv)
}}
function main() {
  fetch(QUOTES)
    .then(response => response.json())
    .then(json => {
      json.forEach((quote) => {
        createQuoteCard(quote)
      })
    })
}
