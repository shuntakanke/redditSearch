import reddit from './redditApi.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
  // get search term
  const searchTerm = searchInput.value;

  // get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  console.log(sortBy);

  // get limit
  const searchLimit = document.getElementById('limit').value;

  // check input
  if(searchTerm === '') {
    // show message
    showMessage('please add search term','alert-danger');
  }
  

  // clear input
  searchInput.value = '';

  // search Reddit
  reddit.search(searchTerm, searchLimit,sortBy);

  e.preventDefault();
});


// show Message
function showMessage(message, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // get parent
  const searchContainer = document.getElementById('search-container');
  // get search
  const search = document.getElementById('search');

  // Insert message
  searchContainer.insertBefore(div,search);

  // Timeout alert
  setTimeout(() => document.querySelector('.alert').remove(),3000);
};