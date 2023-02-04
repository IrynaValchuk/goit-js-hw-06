const categoriesList = document.querySelector('#categories');
const categoriesListItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesListItem.length}`);

categoriesListItem.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
