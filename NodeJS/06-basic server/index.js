import http from "http"; // built-in node module  to create a http server
import fs from "fs";    // fs -> File System handling 


/**
 * createServer() creates a new instance of the server
 * myServer the server instance 
 * createServer takes a callBackFn as an param which acts an handler function when a request is recieved
 * it takes 2 params, request (req) & response (res)
 * request is http request object which contains info 
 *  headers, auth information, cookies etc..
 * response object is used to send the response back to client 
 * before sending response with define response properties like
 * status code, type of response(static files, JSON, file, redirection link..... etc)
*/

const myServer = http.createServer((req, res) => {
    const log = `${new Date().toISOString()} ${req.url} ${req.method} new req recieved\n`;
    fs.appendFile("./log.txt", log, (err) => {
        if (err) {
            return null;
        }
        res.end("hello")
    })
});


// here we tell the server to listen on PORT 500
// a PORT signifies a communication endpoint
myServer.listen(5000, () => {
    console.log("my server started")
})
