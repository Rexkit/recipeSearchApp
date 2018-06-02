import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const cleatInput = () => {
    elements.searchInput.value = ''
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
    if (title.length > limit) {
        return title.substring(0, title.substring(0, limit).lastIndexOf(' ')) + ' …';
    }
    return title;
};

const renderRecipe = recipe => {
    const murkup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', murkup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};
