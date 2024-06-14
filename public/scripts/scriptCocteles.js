function fetchAllCharacters() {
  const apiURL = `https://whiskyhunter.net/api/auction_data/catawiki/`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';

      data.drinks.forEach(cocktail => {
        const cocktailCard = document.createElement('div');
        cocktailCard.className = 'cocktail-card';
        cocktailCard.innerHTML = `
          <h3>${cocktail.strDrink}</h3>
          <img class="cocktail-image" src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
          <p><strong>Categoría:</strong> ${cocktail.strCategory}</p>
          <p><strong>Ingredientes:</strong> ${cocktail.strIngredient1}, ${cocktail.strIngredient2}, ${cocktail.strIngredient3}</p>
          <p><strong>Instrucciones:</strong> ${cocktail.strInstructions}</p>
        `;
        outputDiv.appendChild(cocktailCard);
      });
    })
    .catch(error => {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = `<p style="color: red;">Error al obtener los cócteles: ${error.message}</p>`;
    });
}

// Llamar a la función para obtener los cócteles al cargar la página
window.onload = fetchAllCharacters;
