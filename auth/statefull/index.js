import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());
app.use(cookieParser());

// Dummy user store
const users = [
    { id: 1, username: "user1", password: bcrypt.hashSync("password1", 10) },
    { id: 2, username: "user2", password: bcrypt.hashSync("password2", 10) },
    { id: 3, username: "user3", password: bcrypt.hashSync("password3", 10) },
    { id: 4, username: "user4", password: bcrypt.hashSync("password4", 10) },
    { id: 5, username: "user5", password: bcrypt.hashSync("password5", 10) },
];


// Custom session store (in-memory for demo)
const sessions = new Map();

const SESSION_COOKIE_NAME = "sid";

app.get("/",(req, res) =>{
    res.send("hi");
})

// -------------------- LOGIN --------------------
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send("Invalid credentials");
    }

    const sessionId = uuidv4(); //gen session id
    console.log(sessionId);
    sessions.set(sessionId, user)

    console.log(sessions);

    res.cookie(SESSION_COOKIE_NAME, sessionId, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60, // 1 hour
    });

    res.send("Logged in (custom stateful)");
});

// -------------------- AUTH MIDDLEWARE --------------------
function authenticate(req, res, next) {
    const sessionId = req.cookies[SESSION_COOKIE_NAME];
    const session = sessions.get(sessionId);

    if (!session) {
        return res.status(401).send("Not authenticated");
    }

    req.userId = session.id;
    next();
}

// -------------------- PROTECTED ROUTE --------------------
app.get("/profile", authenticate, (req, res) => {
    res.send(`Hello user ${req.userId} (stateful with custom session)`);
});

// -------------------- LOGOUT --------------------
app.post("/logout", (req, res) => {
    const sessionId = req.cookies[SESSION_COOKIE_NAME];
    delete sessions[sessionId];
    res.clearCookie(SESSION_COOKIE_NAME);
    res.send("Logged out");
});

// -------------------- START SERVER --------------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
