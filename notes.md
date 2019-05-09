## Setup

### Create a git repository

- git init
- create repo on github


### Create a Jasmine-based JavaScript file system

To create a basic JavaScript project using Jasmine for tests, do:

- Download the latest Jasmine library [Jasmine](https://github.com/jasmine/jasmine)
- There should be a src folder for code, a spec folder for test files, a lib folder containing Jasmine and a SpecRunner.html

### Getting test coverage working using nyc(Istanbul)

First I had to get the jasmine tests running in the command line instead of via SpecRunner.html

`npm install --save-dev jasmine`
`node node_modules/jasmine/bin/jasmine init`

I had to export all of my classes as modules:

`module.exports = ClassName;`

And require them in the spec files:

`var Account = require('../src/Account');`

Then to install nyc:

`npm install --save-dev nyc`

To actually run the test coverage stats and the tests, update package.json to include:
`"scripts": {
  "test": "jasmine",
  "coverage": "nyc npm run test"
},`
When you then run `npm run coverage` from the command line it will run the tests and the coverage stats.


### Basic JavaScript syntax - a reminder

```
Function SomeName() {
}


SomeName.prototype.someMethod = function(parameter) {
};

SomeName.prototype = {
  someMethod: function(parameter) {
    this.someAttribute.doSomething();
  }
}
```

## Approach

- Turn specification into User Stories
- Map out objects, methods and attributes from user stories
- Set up basic project and create README
- Get SpecRunner running with a useful error message
  - Include some basic files in the hierarchy and add them to the SpecRunner.html
  - Run the files and check the console for error messages
- Write the first feature test which will fail
- Write the first unit test that should fail with the same error message
