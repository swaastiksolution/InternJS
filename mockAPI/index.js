import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises";
dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.send("hi server is working");
});

app.get("/users", async (req, res, next) => {
    let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
    users = JSON.parse(users);
    return res.send(
        `<ul>
        ${users.map(user => {
            return `<li>${user.first_name}</li>`
        }).join("")}
        </ul>`
    )

})
app.get("/api/users", async (req, res, next) => {
    let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
    users = JSON.parse(users);
    return res.status(200).json(users);
});

app.post("/api/users",async (req, res, next) => {
    let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
    users = JSON.parse(users);
    const values = req.body;
    const content = [...users, values];
    await fs.writeFile("./MOCK_DATA.json",JSON.stringify(content));
    return res.status(204).json({msg: "helo"})
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server started at PORT", port)
})