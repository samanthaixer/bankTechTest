# Bank Tech Test

This tech test is an opportunity for me to practice my planning and design skills, and to remind myself how JavaScript works. I'd also like to practice dependency injection.

On top of all of that, this is a chance to showcase my ability to build professional-quality code. Checkout my portfolio to see more on what I consider to be good quality code.

[Sam's portfolio](https://github.com/samanthaixer/Portfolio)

[What code quality means to me]()

## Using the project

### Setting up the project
- `git clone git@github.com:samanthaixer/bankTechTest.git`
- `npm i -g eslint` and `eslint --init` to install the linter

### To run the Tests

type `npm run coverage` to run the tests from the command line and also get coverage stats

### To run the linter (eslint)

- To run the linter, type `eslint src/**`

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).


### Acceptance criteria

- **Given** a client makes a deposit of 1000 on 10-01-2012
- **And** a deposit of 2000 on 13-01-2012
- **And** a withdrawal of 500 on 14-01-2012
- **When** she prints her bank statement
- **Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## User Stories

```
As a user
So that I can add money to my account
I want to be able to make a deposit

As a user
So that I can take money out of my account
I want to be able to make a withdrawal

As a user
So that I can keep track of my money
I want to be able to produce a statement of my account showing the date, an amount and a balance
```

## Objects

`Account` - deposit, withdraw, balance, transactions, printStatement

`Transaction` - type(credit or debit), amount, date, print

## Dependencies

`Account` delegates the storing of each transaction to a `Transaction` object

`Account` delegates responsibility for printing each individual line to the transaction

When testing the `Account`, I should be able to inject `Transaction` objects

## Tests

What do I want to test?

### Feature Tests

The most important feature test is the one that has been provided as acceptance criteria above. In addition to this, I have also added feature tests for:

- Withdrawing multiple amounts and checking the running total
- Depositing multiple amounts and checking the running total

### Unit Tests

- `Transaction` -  adding a credit transaction, adding a debit transaction, validation?, valid date, readable printing

- `Account` - crediting or debiting the account updates the account balance, statement produces a list of transactions

## My Approach

- I started the project by breaking the specification into user stories and using that to model what the objects would be.
- I used TDD to drive the design of the code. I am trying out a new level of TDD, skipping some basic steps as I get better at testing/coding. This seems to mean I have fewer commits as I don't commit until a feature test passes.
- I refactored code with every green test. I looked to keep code and tests DRY and have tried to follow the single responsibility principle throughout.
- Once I had built the main part of the code, I changed the tests to run through the command line and incorporated the code coverage tests.
- Finally, I built dependency injection into the code so that I could mock transactions when testing the account at unit level. I have put the mock functions into helper files so that they could be reused. 
