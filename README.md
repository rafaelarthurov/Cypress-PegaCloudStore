# Cypress-PegaCloudStore
This is a repo about the automation of PegaCloudStore using Cypress

The site was used:
```
https://training.openspan.com/login
```
### Topics covered until now (E2E):
1. Custom Commands - To simplify the repetitive actions
2. Fixture - To store the Elements names and used it later
3. Assertions

### Topics in process (E2E):
1. Test Stubs to load API calls
2. Simulated a Database query using Fixture file Json
3. Test about some values in the cookies

#### Examples of `Custom Commands`, `Fixtures` and `Assertions`
1. `Custom Commands`
2. ![customcommands](https://github.com/rafaelarthurov/Cypress-PegaCloudStore/assets/102332961/80b4de4a-293a-438d-9f4b-1de6523fecee)
3. `Fixtures`
4. ![fixtures](https://github.com/rafaelarthurov/Cypress-PegaCloudStore/assets/102332961/80535306-0a75-4719-8b53-b66cfecf577c)
5. `Assertions`
6. ![assertions](https://github.com/rafaelarthurov/Cypress-PegaCloudStore/assets/102332961/2ab7ec37-8e4b-4c12-8e98-f15a0da4281e)

## Installation
To install the dependencies, run:
```
cd /your/project/path
```
```
npm install cypress --save-dev
```
## To execute
To run the tests:
```
.\node_modules\.bin\cypress open
```
