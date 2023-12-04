export const setSearchFocus = () => {
  document.getElementById('search').focus();
};

export const showClearTextButton = () => {
  const search = document.getElementById('search');
  const clear = document.getElementById('clear');
  if (search.value.length) {
    clear.classList.remove('none');
    clear.classList.add('flex');
  } else {
    clear.classList.add('none');
    clear.classList.remove('flex');
  }
};

export const clearSearchText = (event) => {
  event.preventDefault(); // to be on safe side
  document.getElementById('search').value = '';
  const clear = document.getElementById('clear');
  clear.classList.add('none');
  clear.classList.remove('flex');
  setSearchFocus();
};

export const clearPushListener = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // to be on safe side
    // tabbing through the page, when focus is on clear button, if Enter is pressed, then clear click event
    // is fired
    document.getElementById('clear').click();
  }
};
