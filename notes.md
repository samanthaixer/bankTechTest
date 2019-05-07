## Setup

### Create a git repository

- git init
- create repo on github


### Create a Jasmine-based JavaScript file system

To create a basic JavaScript project using Jasmine for tests, do:

- Download the latest Jasmine library [Jasmine](https://github.com/jasmine/jasmine)
- There should be a src folder for code, a spec folder for test files, a lib folder containing Jasmine and a SpecRunner.html


### Basic syntax

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
