import * as variables from './js/variables.js';
import { getUser, showError } from './js/functions.js';

variables.form.addEventListener('submit', e => {
  e.preventDefault();
  if (variables.search.value === '') {
    return showError('Please enter a valid username');
  }
  getUser(variables.search.value.split(' ').join(''));
  variables.search.value = '';
});
