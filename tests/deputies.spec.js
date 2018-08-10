import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import {
  search,
  details,
  expenses,
  events,
  agencies,
  board,
  situation,
} from '../src/deputies';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Deputies', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ body: 'json' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke test', () => {
    it('Should exist the search method', () => {
      expect(search).to.be.a('function');
    });
    it('Should exist the details method', () => {
      expect(details).to.be.a('function');
    });
    it('Should exist the expenses method', () => {
      expect(expenses).to.be.a('function');
    });
    it('Should exist the events method', () => {
      expect(events).to.be.a('function');
    });
    it('Should exist the agencies method', () => {
      expect(agencies).to.be.a('function');
    });
    it('Should exist the board method', () => {
      expect(board).to.be.a('function');
    });
    it('Should exist the situation method', () => {
      expect(situation).to.be.a('function');
    });
  });

  describe('Search', () => {
    it('Should call fetch function', () => {
      const dpt = search();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should receive the correct url to fetch', () => {
      const dpt = search('maria');
      expect(stubedFetch).to.have.been.calledWith('https://dadosabertos.camara.leg.br/api/v2/deputados?nome=maria&ordem=ASC&ordenarPor=nome');
    });
    it('Should return the JSON data from the promise', () => {
      const dpt = search('joao');
      dpt.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });
});
