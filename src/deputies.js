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
const events = ID => (
  fetch(`${API_URL}/deputados/${ID}/eventos?ordem=ASC&ordenarPor=dataHoraInicio`)
    .then(data => data.json())
);
const agencies = ID => (
  fetch(`${API_URL}/deputados/${ID}/orgaos?ordem=ASC&ordenarPor=dataInicio`)
    .then(data => data.json())
);
const board = ID => (
  fetch(`${API_URL}/legislaturas/${ID}/mesa`)
    .then(data => data.json())
);

export {
  search,
  details,
  expenses,
  events,
  agencies,
  board,
};
