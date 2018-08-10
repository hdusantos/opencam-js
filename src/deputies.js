/* global fetch */
/* eslint no-undef: "error" */
import API_URL from './config';

// search - List and search for deputies according to criteria - sorted by name
const search = (name) => {
  const query = encodeURIComponent(name);
  return fetch(`${API_URL}/deputados?nome=${query}&ordem=ASC&ordenarPor=nome`)
    .then(data => data.json());
};

const details = () => {};
const expenses = () => {};
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
