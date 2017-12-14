# stylesheet-traverser

[![npm](https://img.shields.io/npm/v/stylesheet-traverser.svg)](https://www.npmjs.com/package/stylesheet-traverser)
[![Travis](https://img.shields.io/travis/ezze/stylesheet-traverser/develop.svg)](https://travis-ci.org/ezze/stylesheet-traverser)
[![Coveralls](https://img.shields.io/coveralls/github/ezze/stylesheet-traverser/develop.svg)](https://coveralls.io/github/ezze/stylesheet-traverser)
[![Greenkeeper](https://badges.greenkeeper.io/ezze/stylesheet-traverser.svg)](https://greenkeeper.io/)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

A set of helper functions to work with CSS in JavaScript.

## Installation

```
npm install stylesheet-helpers
```

## Usage

- ES6:

   ```javascript
   import { getStylesheetRule } from 'stylesheet-traverser';
   const rule = getStylesheetRule('.super-element');
   console.log(rule);
   ```

- Common.js:

   ```javascript
   var traverser = require('stylesheet-traverser');
   var rule = traverser.getStylesheetRule('.super-element');
   console.log(rule);
   ```
    
- Browser (include `dist/stylesheet-traverser.js` or `dist/stylesheet-traverser.min.js`):

    ```javascript
    var traverser = window.stylesheetTraverser;
    var rule = traverser.getStylesheetRule('.super-element');
    console.log(rule);
    ```
    
## Functions

### `getStylesheetRule`

Looks for document's first stylesheet rule by exact CSS selector or RegExp pattern:

```javascript
import { getStylesheetRule } from 'stylesheet-traverser';
const classRule = getStylesheetRule('.super-element');
const regExpRule = getStylesheetRule(/(div|span)\.super-element/);
console.log(classRule);
console.log(regExpRule);
```
  
### `getStylesheetRules`

The same as `getStylesheetRule` but returns an array of all found rules.

### `ensureStylesheetsAreReady`

Waits while all document's stylesheets are being loaded:

```javascript
import { ensureStylesheetsAreReady } from 'stylesheet-traverser';
ensureStylesheetsAreReady().then(() => {
   // do some stuff
});
```
    
### `preloadImages`

[Preloads all images](https://stackoverflow.com/a/40311881/506695) found in `url`s of document's
stylesheets:
    
```javascript
import { preloadImages } from 'stylesheet-traverser';
preloadImages().then(() => {
   // do some stuff
})
```
    
## Building

In order to build the library run:

```
npm run build
```                                          
    
## Testing
    
Run tests:

```
npm test
```
    
Run tests with coverage:

```
npm run test:coverage
```
    
In order to run tests with [Coveralls](http://coveralls.io) locally you have to provide `COVERALLS_REPO_TOKEN`:
   
```
COVERALLS_REPO_TOKEN=<token> npm run test:coveralls
``` 
    
## Contributing
    
Before making a pull request, please, be sure that you start from `develop` branch.

## License

[MIT](LICENSE)
