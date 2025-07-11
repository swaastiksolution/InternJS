import http from "http"; // built-in node module  to create a http server
import fs from "fs";    // fs -> File System handling
import url from "url";


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
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    // basic routing setup
    const log = `${new Date().toISOString()} ${req.url} ${req.method} new req recieved\n`;
    fs.appendFile("./log.txt", log, (err) => {
        if (err) {
            return null;
        }
        const myURL = url.parse(req.url, true);
        console.log(myURL);
        if ( myURL.pathname === '/') {
            if (req.method === 'GET') {
                // setting up header to define the type of resposne being sent 
                res.setHeader("content-type",'application/json')
                return res.end(JSON.stringify({message: "helloo"}))
            }
            else if (req.method === 'POST') {
                return res.end("created new user")
            } 
        }
        else if (req.method === 'GET' && myURL.pathname === '/aboutus') {
            return res.end("this is about page")
        }
        else if (req.method === 'GET' && myURL.pathname === '/contactus') {
            return res.end("this contact us page")
        }
        else if (req.method === 'GET' && myURL.pathname === '/welcome') {
            const { name = 'guest user', age } = myURL.query;
            return res.end(`Hi ${name}`)
        }
        else {
            return res.end("404 - page not found")
        }
    })
});


// here we tell the server to listen on PORT 5000
// a PORT signifies a communication endpoint
myServer.listen(5000, () => {
    console.log("my server started")
})
