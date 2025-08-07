import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());

// Dummy user data (simulate DB)
const users = [
    { id: 1, username: "user1", password: bcrypt.hashSync("password", 10) },
    { id: 2, username: "user2", password: bcrypt.hashSync("password", 10) },
    { id: 3, username: "user3", password: bcrypt.hashSync("password", 10) },
];

const JWT_SECRET = "supersecretkey"; // use env var in production

// -------------------- LOGIN --------------------
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Check user exists
    const user = users.find((u) => u.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send("Invalid credentials");
    }

    // Generate JWT
    const token = jwt.sign(
        { userId: user.id,
            msg: "hi from jwt payload"
         }, // payload
        JWT_SECRET,
        { expiresIn: "1h" } // 1 hour expiry
    );

    res.json({ token });
});

// -------------------- AUTH MIDDLEWARE --------------------
function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send("Token missing or malformed");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId; // attach user ID to request
        next();
    } catch (err) {
        return res.status(403).send("Invalid or expired token");
    }
}

// -------------------- PROTECTED ROUTE --------------------
app.get("/profile", authenticateJWT, (req, res) => {
    res.send(`Hello user ${req.userId} (stateless JWT auth)`);
});

// -------------------- START SERVER --------------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
