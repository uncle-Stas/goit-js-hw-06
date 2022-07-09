const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const elementList = ingredients.map(ingredient => {
  const ingredientElem = document.createElement('li');

  ingredientElem.textContent = ingredient;
  ingredientElem.classList.add('item');

  return ingredientElem;
});

ingredientsList.append(...elementList);
