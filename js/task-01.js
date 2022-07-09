const categoriesItems = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesItems.length);

for (const item of categoriesItems) {
  const title = item.querySelector('h2');
  console.log('Category: ', title.textContent);

  const categoriesItemList = item.querySelectorAll('li');
  console.log('Elements: ', categoriesItemList.length);
}
