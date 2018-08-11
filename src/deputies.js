/* global fetch */
/* eslint no-undef: "error" */
import API_URL from './config';

// search - List and search for deputies according to criteria - sorted by name
const search = (name) => {
  const query = encodeURIComponent(name);
  return fetch(`${API_URL}/deputados?nome=${query}&ordem=ASC&ordenarPor=nome`)
    .then(data => data.json());
};

const details = ID => (
  fetch(`${API_URL}/deputados/${ID}`)
    .then(data => data.json())
);
const expenses = ID => (
  fetch(`${API_URL}/deputados/${ID}/despesas?ordem=ASC&ordenarPor=ano`)
    .then(data => data.json())
);
const events = () => {};
const agencies = () => {};
const board = () => {};
const situation = () => {};

export {
  search,
  details,
  expenses,
  events,
  agencies,
  board,
  situation,
};
