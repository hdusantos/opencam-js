/* global fetch */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["request"] }] */

import API_URL from './config';
import deputies from './deputies';

export default class Opencam {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.deputies = deputies.bind(this)();
  }

  request(url) {
    return fetch(url)
      .then(response => response.json())
      .catch((err) => {
        console.error(err);
      });
  }
}
