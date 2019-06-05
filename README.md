# opencam
[![Build Status](https://travis-ci.org/hdusantos/opencam.svg?branch=master)](https://travis-ci.org/hdusantos/opencam)
[![Coverage Status](https://coveralls.io/repos/github/hdusantos/opencam/badge.svg?branch=master)](https://coveralls.io/github/hdusantos/opencam?branch=master)

A JavaScript Wrapper to use API [Dados Abertos da Câmara](https://dadosabertos.camara.leg.br/)

> See more about the API: https://dadosabertos.camara.leg.br/


## Installation

```sh
npm install opencam --save
```


## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the  "Dados Abertos da Câmara" API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.



## How to use

### ES6

```js
import Opencam from 'opencam';

const opencam = new Opencam({});

// using  method
opencam.deputies.search("Maria");
```

### CommonJS

```js
const Opencam = require('opencam').default;

const opencam = new Opencam({});

// using  method
opencam.deputies.search("Maria");
```

### UMD in Browser

UMD files are located in the `./dist` folder

    .
    ├── dist                   # UMD Folder
    |   └── opencam.umd.js     # UMD File - File to use with the html script tag
    |__ lib                    # Compiled files


## Methods

> Follow the methods that the library provides.
- [search](#deputiessearchname)
- [details](#deputiesdetailsid)
- [expenses](#deputiesexpensesid)
- [events](#deputieseventsid)
- [agencies](#deputiesagenciesid)
- [board](#deputiesboardid)

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


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/hdusantos/opencam/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
