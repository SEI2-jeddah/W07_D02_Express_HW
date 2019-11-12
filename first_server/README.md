# Intro to Express

## Objectives

1. Set up a basic Express server
1. Set up a basic GET route
1. Use nodemon to restart your sever when your code changes


<br>

## Express

We'll be working with one package throughout this unit called `express` - which calls itself a framework AND unopinionated ¯\_(ツ)_/¯

[express](https://www.npmjs.com/package/express) is a Fast, unopinionated, minimalist web framework for node.

At first, we'll be running our express server in terminal and we'll interact with it in our browser. Our browser will send requests to our express app, and our express app will send responses back to our own browser.

<br>

## Create an Express app

- `mkdir first_server`
- `cd first_server`
- First we have to initialize our directory with a `package.json` file. We can create it interactively by typing

	`npm init -y` in terminal

- Let's install the library `express`:

	`npm i express`

We can see that we've successfully added because or `package.json` file will have updated (under dependencies)

![package.json with express](https://i.imgur.com/jHWP7bd.png)


Additionally, we see that we now have a directory called `node_modules` and a file called `package-lock.json`

![files](https://i.imgur.com/sS4uziE.png)

We're not going to edit our `package-lock.json` file, it's just a helper file for npm that helps npm do some under the hood stuff.

Inside `node_modules` is all the code that was downloaded so we could use `express`, the code is tucked into folders that are managed by npm. Like jQuery, we don't ever have to look at the source code or modify it in any way, it can just sit there and we'll bring in the code and use it in our own files.  

<br>

## Set up a basic Express server

In the root of our project, `touch server.js`

![server.js](https://i.imgur.com/FlNsHyM.png)

Now that the library has been installed (downloaded), we can use it in our code, by using the `require()` function

```javascript
const express = require('express');
```

- let's `console.log(express)`

- run our code by typing `node server.js` in terminal

- We can see it's a giant object with a ton of properties and functions. We can learn how to use this functionality by checking out the docs.

[express on npm](https://www.npmjs.com/package/express)

[Full express documentation](http://expressjs.com/en/api.html)

Looking at express on npm we see how to build the most bare bones simple server

![express server on npm](https://i.imgur.com/u3Dfkql.png)

It looks like we have a good start, but have to write a little more code. And we'll continue to write our code with the newer `ES6` syntax (`const` instead of `var` and arrow functions)

Add:


 ```js
const app = express();

app.get('/', ( req, res )=>{
 console.log("Oh hey! I got a request. Let me respond with something");
  res.send('Hello World!')
})

app.listen(3000, ()=> {
  console.log("I am listening for requests!!!");
});
 ```


- Start the app by executing `node server.js` in the command line. It'll now run continuously because of the functionality of the `app.listen`

- Therefore, it will start and then you won't get your bash prompt back, it'll just hang

	> **Note**: If you want to quit your server, you have to use `control c`


- Visit http://localhost:3000/ in your browser.  You should see your 'Hello world' text. You've successfully created a basic web server!  This will serve dynamic pages to web browsers.

<br>

#### So let's look a little deeper at our code

- `const app = express();`
	- this creates a shorthand for calling the express function. Less typing!

- `app.listen(3000);` 
	- this says 'express listen to the port 3000' , by default it will be listening to localhost - it will be listening and waiting for any requests coming to `localhost:3000` from the browser

- We can see `app.listen` fire by using a callback

	```js
	app.listen(3000, ()=> {
	  console.log("I am listening for requests!!!");
	});
	```

- Only you on your computer can access your `localhost`, later we'll learn how to update the settings so your server can live on the web and other computers can send requests.

- Finally, we have to unpack this very dense bit of code:

	```js
	app.get('/', ( req, res )=>{
	 console.log("Oh hey! I got a request. Let me respond with something");
	  res.send('Hello World!')
	})
	```
<br>

These 3 lines of code are doing a lot!

- First, we're calling express, and we're setting a 'GET' route of '/', that means if a user goes to `localhost:3000/` this is the method that will get triggered.
- Then we pass a call back function with two parameters, by convention, they are `req` (for request) and `res` (for response)
- Inside our callback we can write whatever code we want.
- In this case we are using a method on the response object (`res.send()`) - that is saying 'send this plain text as the response'
- We can build as many routes as we like and customize them to do whatever we want.


**Final code with comments and console.logs**:


```js
// Dependencies
const express = require('express');
const app = express();

// listen for when someone goes to
// localhost:3000/
// upon getting a request at that URL
// send text 'Hello World'

// Routes
app.get('/', (req, res) => {
  console.log("Oh hey! I got a request. Let me respond with something");
  res.send('Hello World!');
});

app.get('/somedata', (request, response)=>{
  // console.log('response: ', response);
  // console.log('===================');
  response.send('here is your information');
});

// App Listen
app.listen(3000, ()=> {
  console.log("I am listening for requests!!!");
});
```

**On semi-colons**: The debate of using semi-colons everywhere is being hotly debated. The place you will end up working will likely have strong opinions. Recommendation: choose a style for a project and be consistent.

<br>

## Set up a basic GET route

Now we'll create our own basic GET route so that visitors to (clients of) our web-server can retrieve some information from it.

We can also pass a callback to our `app.listen` which is handy to use to send a `console.log` message to terminal to let us know if our sever is up and running

Let's add a get route, so when a user goes to `localhost:3000/somedata`, they'll get a text response of `here is your information`

```javascript
const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/', (req, res)=>{
  res.send('Hello world');
});

app.get('/somedata', (req, res) => {
    res.send('here is your information');
});

app.listen(3000, () => {
    console.log("I am listening");
});
```

- The function passed as a second parameter to `app.get()` is executed each time a user (client) goes to http://localhost:3000/somedata
- The function (callback) takes two parameters
    - `request (req for short)`
        - object containing information about the request made (browser, ip, query params, etc)
    - `response (res for short)`
        - object containing methods for sending information back to the user (client)

- We can see the response in the browser

<br>

## Shut down your server

You can't run two servers on the same port and you can get annoying errors if you don't shut your servers down properly. Get in the habit of `control c` to shut your server down when you are done working.

<br>

## Use nodemon to restart your sever when your code changes

An NPM package called `nodemon` allows us to run code just like `node`, but it will restart the application whenever code in the application's directory is changed. This is really handy and gives us a better workflow.

1. Install it `npm install nodemon -g`
    - the `-g` tells npm to make the package available for use in the terminal in any directory (globally). You might not be able to install node packages globally by default. You may have to run `sudo npm i nodemon -g` and enter your computer's username and password
1. Now we can call `nodemon server.js`, and the server will restart whenever the app's code changes

1. If you want to get really fancy, you can go to your `package.json` file and change the value of `main` from `index.js` to `server.js` - now you can just type `nodemon` in terminal and it will 'know' you mean to run `server.js`

When you start a new project and do `npm init` and go through the prompts, you can set this right away.


<br>




________
