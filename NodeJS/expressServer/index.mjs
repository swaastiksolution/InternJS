//1. import krna
import express from "express";
import path from "path"
//2 initialize server
const app = express();

app.use(express.json());
app.use(express.urlencoded());

function dummyAuth(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    console.log('this is my api key', apiKey);
    if (apiKey === 'XYZ123') {
        req.info = "modified request by dummyAUTH";
        next();

    }
    return res.status(401).json({
        message: "missing API key"
    })
}
function middleware(req, res, next) {
    console.log("Hi from middlware one");
    next();
}
function handlerFunction(req, res) {
    const msgFromMiddleware = req.info;
    console.log(msgFromMiddleware);
    return res.json({
        message: "hello world"
    })
}

app.get("/", (req, res, next) => {
    return res.send("server is working");
})

app.get("/check", middleware, dummyAuth, handlerFunction);


app.post("/signup", (req, res) => {
    const hName = 'admin';
    console.log(req.body);

    return res.json({
        message: "route working"
    })
})


function dummyData(params) {
    const abPath = path.resolve(import.meta.dirname, "MOCK_DATA.json");
    console.log(abPath);
    console.log(path.isAbsolute(abPath));
    
}

dummyData();

//3. listening and assigning a port
// app.listen(5000, () => {
//     console.log("hi from my server http://localhost:5000 ");
// })
