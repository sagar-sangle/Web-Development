/*
Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It uses the V8 JavaScript engine, which is the same engine used by Google Chrome, to execute JavaScript code on the server-side. This allows developers to write server-side applications using JavaScript, a language traditionally used for client-side scripting in web browsers.

npm, short for Node Package Manager, is the default package manager for Node.js. It is used to install, manage, and share packages of code written in JavaScript. These packages can be libraries, frameworks, tools, or any other kind of JavaScript code. npm is also used for dependency management in Node.js projects, allowing developers to easily include external libraries and tools in their applications.

Together, Node.js and npm form a powerful ecosystem for building server-side applications, command-line tools, and more using JavaScript.
*/

const slugify = require('slugify');
//import slugify from 'slugify';  es module importinh

const originalString = "Hello World";
const slug = slugify(originalString,'_');


console.log(slug); // Output: hello-world
