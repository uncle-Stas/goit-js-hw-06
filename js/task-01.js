const categoriesItem = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesItem.length);

for (const item of categoriesItem) {
  console.log('Category: ', item.querySelector('h2').textContent);

  const categoriesItemList = item.querySelectorAll('li');
  console.log('Elements: ', categoriesItemList.length);
}
