# Hello-World Server

This server doesn't do anything except for display "Hello World!!!" in a browser window when the server is accessed. It does this by setting up a basic **express** server which is achieved through the following:

1. Create a file for the server such as **server.js**
2. Run `npm init -y`, which will create the file **package.json** which manages the project dependencies
3. Run `npm install express`, which will add **express** as a dependency to your project and install all the files it requires in a folder named **node_modules**
4. Add the line: `"type": "module",` to the file **package.json** in order to enable the simpler *import* statements in node

To start the server run the command: `node server.js`, or whatever you named the server file. For simplicity, you can add the following lines to the **package.json** file and this will allow you to start the server by typing in the command `npm start`, which is an expected command to start any express server, no matter what the complexity of the setup.

```
"scripts": {
	"start": "node server.js"
}
```

You should now be able to access the website at `http://localhost:3000`.

When the website is accessed, the server detects this and sends out the string "Hello World!!!" to the client, so whereas this looks like a very simple website, it is the most basic setup for a simple server application.