IMPORTANT NOTE: Fixing Issues — Language Guesser Challenge
Before you begin watching the upcoming video lecture for the Language Guesser Challenge, we need to address an important update related to the franc module used in that exercise.

The upcoming video was recorded when franc was at version 5.0.0, which supported the require() function. However, franc has been updated since then, and now only supports ES6 modules that use the import keyword instead (it's basically a different system of importing modules in JavaScript).

Before we continue, an important instruction: When you continue the course after the upcoming Language Guesser Challenge video, make sure to continue using the require() function just as Colt does to ensure that your applications work correctly, and to ensure full compatibility with the course. The require() approach is widely adopted and can still be considered the mostly implemented way of importing modules when working with Node.js and Express.js. Switching these systems is not as simple as just replacing require() with the import statement — instead, it can cause unexpected issues and complications, especially with your Node.js/Express.js applications. Therefore, follow Colt and use the require() function. When you finish the course and master all the concepts taught here, then you can look into this different system called "ES6 modules" and the "import" statement.

With all that in mind, when it comes to the next video specifically, to ensure a smooth learning experience, we will provide instructions on how to use franc version 5.0.0 with require(), as well as how to use the updated franc version with import. Please read the following information carefully:

1. Instructions for using franc version 5.0.0 like in the video, so you can follow along with Colt directly:
To install and use the older version of franc — in the terminal, in the same directory as your code file, you can run the npm install command with this syntax to install franc version 5.0.0 specifically:

npm install franc@5.0.0

After you install franc version 5.0.0, you will be able to use the require() function as shown in the upcoming video lecture.

2. Instructions for using the updated franc version that works with the import statement instead:
First, make sure to install the latest version of the franc module with this npm install command:

npm install franc@latest

Next, for this ES6 module system to work, we need to add a new entry to our package.json file. You will need to open up the package.json file in the project folder and add the
"type": "module" entry to it.

Your package.json file should look like this (copy-paste it from here):

{
  "type": "module",
  "name": "langguessr",
  "version": "2.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "colors": "^1.4.0",
    "franc": "^6.1.0",
    "langs": "^2.0.0"
  }
}
This will enable us to use the ES6 modules system, so then instead of using the require() function in our index.js code, we need to switch to using the import statement.

Therefore, your index.js file should look like this:

// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';
 
const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
  console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
  const language = langs.where("3", langCode);
  console.log(colors.green(`Our best guess is: ${language.name}`));
}
Please note that after switching to ES6 modules, you cannot use require() anymore. We had to use the import statement for importing the other modules as well.

And again: make sure not to use the import statement while following any other future course lectures (after the Language Guesser Challenge), but instead use require() just as Colt does — review the instructions about it towards the top of this written lecture.

ADDITIONAL NOTE (A SMALL BUG FIX FOR THE LANGUAGE GUESSER):
There is a specific edge case that we noticed students reporting, where you may sometimes see this error when you run the code: TypeError: Cannot read properties of undefined (reading 'name')

That error gets triggered when the program tries to read the language.name property, when the language is set to undefined. This can happen if the langs package is unable to find a language with the provided 3-letter code from franc.

To handle this error, you can add a check to make sure the language object is defined before attempting to access its properties (i.e. check if the langs package was able to find a language with the provided 3-letter code from franc).

import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';
 
const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
    }
}
With this update, the program should now display a proper error message when it is unable to find a language for the provided code, instead of throwing an unhandled TypeError. Note: this bug fix will work whether you are using the import statement or the require() function approach in this exercise.

If you have any questions or need further clarification, please don't hesitate to reach out on the Q&A boards.

