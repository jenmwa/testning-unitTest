# Inlämningsuppgift 1 - Enhetstester med jest

Syftet med detta repo är att det skall fungera som er kod som ni får given. Ni skall inte ändra på funktionaliteten som nu finns på något sätt. För att komma igång med inlämningen behöver ni göra följande:

- Klona ner repot till er dator
- Ta bort .git-mappen
- Skapa ett nytt gitrepo åt er själva

## Gör er bekväm med koden

Jag vill att ni tittar igenom koden, gör er bekväm med den så att ni förstår vad den gör. Testkör applikationen och se till att den beter sig som ni tänker er att den skall göra. Ni får i detta läge absolut lägga till en del console.log där ni känner för det.

### Att köra applikationen

När ni har klonat ner repot och skapat ert eget repo behöver ni köra följande kommandon:

- npm i
- npx parcel src/index.html

Där det sista kommandot kommer att sätta igång applikationen så att ni kan surfa och titta på den. 

## Er uppgift

Det ni behöver göra i denna inlämning är att skapa tester för de funktioner som finns i main.ts. Ni behöver skapa godkända tester för så många funktioner ni hinner med. Ni behöver ha ett code coverage på minst 50%. Detta kommer att ge er ett G.

Om ni vill uppnå ett VG skall ni även implementera en godkänt sortering av listan och skriva tester för denna funktion också. Ni behöver också ha ett code coverage på över 90%.

##

# Testning

Set up kursen testning, Jenny Waller, fed22 Medieinstitutet 2023

## install parcel

```bash
    npm install --save-dev parcel
```

installera typescript
```bash
    npm install --save-dev typescript
```
installera sass
```bash
    npm install --save-dev sass
```
köra igång projektet i localhost
```bash
    npx parcel src/index.html --no-cache
```

## Install jest

npm install --save-dev jest

npm install --save-dev ts-jest

npm install --save-dev @types/jest

or, install them all together and once: 
```bash
  npm install --save-dev jest ts-jest @types/jest
```

## Install jest-environment-jsdom

for jest test DOM:

```bash
  npm i --save-dev jest-environment-jsdom
```

i testfil allra högst upp OAVSETT vad, alltid rad 1 och som en kommentar: 
```bash
  /**
 * @jest-enviroment jsdom
 */
```

 uppdatera package.json under jest: med:

```bash
    "jest": {
      "testEnvironment": "node",
    }
```

## Code Coverage Config

make code Coverage as a table i terminal
```bash
  npx jest --coverage
```
men vi vill ha det som en html, uppdatera pckage.json med:
```bash
  "jest": {
    "testEnvironment": "node",
    "collectCoverage": true,
    "coverageReporters": ["html"]
  },
```
thereafter in terminal to create coverage folder:
```bash
  npx jest
```

## Avinstallation

Något gått fel? ta bort package:

```bash
  npm uninstall package-name
```


## KONFIGURATION

 I package.json:

```bash
"jest": {
    "preset": "ts-jest"
}
```
 I terminalen:

```bash
  npx jest
```
Förenkla och göra eget script i package.json:

```bash
  
  "scripts": {
    "test": "npx jest --watchAll"
  }
```

 därefter i terminalen:

```bash
  npm test
```


## Examples

examples test

```bash
  test('should add numbers correctly', () => {
    // 1.arrange
    let small = 4;
    let big = 4711;
    let sum= 0;

    //2. act
    sum = add(small, big);
    
    //3. assert
    expect(sum).toBe(4715);

});
```
    
## Matchers

Common examples of Jest matchers:

* toBe: checks that two values are the same using the strict equality operator (===)
* toEqual: checks that two values are the same using the loose equality operator (==)
* toBeNull: checks that a value is null
* toBeUndefined: checks that a value is undefined
* toBeDefined: checks that a value is not undefined
* toBeTruthy: checks that a value is truthy (i.e. evaluates to true when used in a boolean context)
* toBeFalsy: checks that a value is falsy (i.e. evaluates to false when used in a boolean context)
* toContain: checks that an array or a string contains a specific element
* toThrow: checks that a function throws an error when called
* toMatch: checks that a string matches a regular expression
* toHaveBeenCalled: checks that a mock function has been called
* toHaveBeenCalledWith: checks that a mock function has been called with specific arguments


## Usage/Examples

```javascript
import { sendMessage } from "../ts/main";

test('should be what goes in', () => {
  let message = sendMessage('Hello World');
  expect(message).toBe('Hello World');

});
```

# kursens mappstruktur
### struktur<br>

(projektnamn)<br>
  - .parcel-cache
  - dist
    - index.html
    - main.asdf321.js
    - main.321adf.css
  - node_modules
  - src<br>
    - scss<br>
      - main.scss<br>
    - ts<br>
      - main.ts<br>
    - index.html<br>
    - _ _ test _ _ 
      - main.test.ts
  - package.json

 
 ## KOM IHÅG
 se till att vi står i rätt mapp när vi använder terminalen
    - _cd '.\projektnamn\'_ 
    
_cd = change directory_
  

## html mall struktur
html5
