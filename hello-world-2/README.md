# Hello-World-2 Server

This is a slightly more complex **express** server that demonstrates a slight amount of communication between the back-end and front-end of a website.

After the server is started using the command `npm start`, when the client access the website `http://localhost:3000`, the file **index.html** is served and displayed. This file is accessible because it is contained the **public** folder that we make visible to the client. 

This document has a button that when it is clicked, the path `localhost:3000/api/hello` is called, which has a route set up on the server to send the message "Hello from Node.js backend!" to the client. When the client receives this message, the DOM is updated so that this message is displayed.

Note that if the client accesses the route **/api/hello** directly, then a JSON object is delivered to the client. 