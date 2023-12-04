import {
  clearPushListener,
  clearSearchText,
  setSearchFocus,
  showClearTextButton,
} from './searchBar.js';
import { getSearchTerm, retrieveSearchResults } from './dataFunctions.js';
import {
  buildSearchResults,
  clearStatsLine,
  deleteSearchResults,
  setStatsLine,
} from './searchResults.js';

// initialize only when page content is fully loaded
document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // set the focus on loading the website
  setSearchFocus();

  const search = document.getElementById('search');
  search.addEventListener('input', showClearTextButton);

  const clear = document.getElementById('clear');
  clear.addEventListener('click', clearSearchText);
  clear.addEventListener('keydown', clearPushListener);

  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitTheSearch);
};

// Procedural "workflow" function
const submitTheSearch = (event) => {
  // prevent reload
  event.preventDefault();

  deleteSearchResults(); // deleting old search results
  processTheSearch();
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === '') return;
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) {
    buildSearchResults(resultArray);
  }
  setStatsLine(resultArray.length);
};
