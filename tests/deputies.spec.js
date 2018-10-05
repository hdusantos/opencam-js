import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Opencam from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Deputies', () => {
  let stubedFetch;
  let op;

  beforeEach(() => {
    op = new Opencam({});
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ body: 'json' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke test', () => {
    it('Should exist the search method', () => {
      expect(op.deputies.search).to.be.a('function');
    });
    it('Should exist the details method', () => {
      expect(op.deputies.details).to.be.a('function');
    });
    it('Should exist the expenses method', () => {
      expect(op.deputies.expenses).to.be.a('function');
    });
    it('Should exist the events method', () => {
      expect(op.deputies.events).to.be.a('function');
    });
    it('Should exist the agencies method', () => {
      expect(op.deputies.agencies).to.be.a('function');
    });
    it('Should exist the board method', () => {
      expect(op.deputies.board).to.be.a('function');
    });
  });

  describe('search', () => {
    it('Should call fetch function', () => {
      const dpt = op.deputies.search();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should receive the correct url to fetch', () => {
      const dpt = op.deputies.search('maria');
      expect(stubedFetch).to.have.been.calledWith('https://dadosabertos.camara.leg.br/api/v2/deputados?nome=maria&ordem=ASC&ordenarPor=nome');
    });
    it('Should return the JSON data from the promise', () => {
      const dpt = op.deputies.search('joao');
      dpt.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });

  describe('details', () => {
    it('Should call fetch function', () => {
      const dpt = op.deputies.details();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should receive the correct url to fetch', () => {
      const dpt = op.deputies.details(73441);
      expect(stubedFetch).to.have.been.calledWith('https://dadosabertos.camara.leg.br/api/v2/deputados/73441');
    });
    it('Should return the JSON data from the promise', () => {
      const dpt = op.deputies.details(73441);
      dpt.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });

  describe('expenses', () => {
    it('Should call fetch function', () => {
      const dpt = op.deputies.expenses();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should receive the correct url to fetch', () => {
      const dpt = op.deputies.expenses(64960);
      expect(stubedFetch).to.have.been.calledWith('https://dadosabertos.camara.leg.br/api/v2/deputados/64960/despesas?ordem=ASC&ordenarPor=ano');
    });
    it('Should return the JSON data from the promise', () => {
      const dpt = op.deputies.expenses(64960);
      dpt.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });

  describe('events', () => {
    it('Should call fetch function', () => {
      const dpt = op.deputies.events();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should receive the correct url to fetch', () => {
      const dpt = op.deputies.events(73441);
      expect(stubedFetch).to.have.been.calledWith('https://dadosabertos.camara.leg.br/api/v2/deputados/73441/eventos?ordem=ASC&ordenarPor=dataHoraInicio');
    });
    it('Should return the JSON data from the promise', () => {
      const dpt = op.deputies.events(73441);
      dpt.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });

  describe('agencies', () => {
    it('Should call fetch function', () => {
      const dpt = op.deputies.agencies();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should receive the correct url to fetch', () => {
      const dpt = op.deputies.agencies(12345);
      expect(stubedFetch).to.have.been.calledWith('https://dadosabertos.camara.leg.br/api/v2/deputados/12345/orgaos?ordem=ASC&ordenarPor=dataInicio');
    });
    it('Should return the JSON data from the promise', () => {
      const dpt = op.deputies.agencies(12345);
      dpt.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });

  describe('board', () => {
    it('Should call fetch function', () => {
      const dpt = op.deputies.board();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should receive the correct url to fetch', () => {
      const dpt = op.deputies.board(12345);
      expect(stubedFetch).to.have.been.calledWith('https://dadosabertos.camara.leg.br/api/v2/legislaturas/12345/mesa');
    });
    it('Should return the JSON data from the promise', () => {
      const dpt = op.deputies.board(12345);
      dpt.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });
});
