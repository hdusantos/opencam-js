# opencam
[![Build Status](https://travis-ci.org/hdusantos/opencam.svg?branch=master)](https://travis-ci.org/hdusantos/opencam)
[![Coverage Status](https://coveralls.io/repos/github/hdusantos/opencam/badge.svg?branch=master)](https://coveralls.io/github/hdusantos/opencam?branch=master)

A JavaScript Wrapper to use API [Dados Abertos da Câmara](https://dadosabertos.camara.leg.br/)

> See more about the API: https://dadosabertos.camara.leg.br/


## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Methods

> Follow the methods that the library provides.
- [search](###deputies.search(name))
- [details](###deputies.details(id))
- [expenses](###deputies.expenses(id))
- [events](###deputies.events(id))
- [agencies](###deputies.agencies(id))
- [board](###deputies.board(id))

### deputies.search(name)

> Search for informations about deputy with provided name.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name`    |*string* | 'Any search query'|


**Example**

```js
opencam.deputies.search('Maria')
  .then(data => {
    // do what you want with the data
  })
```


### deputies.details(id)

> Complete informations about deputy with provided ID.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ID`      |*integer*| 'Any search query'|


**Example**

```js
opencam.deputies.details(000000)
  .then(data => {
    // do what you want with the data
  })
```


### deputies.expenses(id)

> Information on the expenses of a Member with ID provided

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ID`      |*integer*| 'Any search query'|


**Example**

```js
opencam.deputies.expenses(000000)
  .then(data => {
    // do what you want with the data
  })
```



### deputies.events(id)

> Informations about events with provided ID.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ID`      |*integer*| 'Any search query'|


**Example**

```js
opencam.deputies.events(000000)
  .then(data => {
    // do what you want with the data
  })
```


### deputies.agencies(id)

> Informations about agencies with provided ID.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ID`      |*integer*| 'Any search query'|


**Example**

```js
opencam.deputies.agencies(000000)
  .then(data => {
    // do what you want with the data
  })
```


### deputies.board(id)

> Informations about board with provided ID.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ID`      |*integer*| 'Any search query'|


**Example**

```js
opencam.deputies.board(000000)
  .then(data => {
    // do what you want with the data
  })
```
