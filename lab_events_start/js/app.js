document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (evt) {

    evt.preventDefault();
    resultParagraph = document.querySelector('#reading-list');

    const newItem = document.createElement('li')
    newItem.textContent = `Title: ${evt.target.title.value} Author:${evt.target.author.value} Category: ${evt.target.category.value }`

    const list = document.querySelector('ul')
    list.appendChild(newItem)

    const resetForm = document.querySelector('#new-item-form');
    resetForm.reset();
  };
  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)
})
