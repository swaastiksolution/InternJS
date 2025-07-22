import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";
import dummyAuth from "./middlewares/dummyAuth.js";
dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
    res.send("hi server is working");
});
// basic ssr
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

app.use("/api/users",dummyAuth, userRoute);
// in express v4 optional param :id?
// in V5 /:{id}
// app.get("/api/users/{:id}", async (req, res, next) => {
//     let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
//     users = JSON.parse(users);
//     const { id } = req.params;
//     if (id) {
//         const user = users.find(u => u.id === Number(id));
//         if (!user) {
//             return res.status(404).json({
//                 message: "user not found"
//             });
//         }
//         return res.status(200).json(user);
//     }
//     return res.status(200).json(users);
// });



// app.post("/api/users", async (req, res, next) => {
//     let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
//     users = JSON.parse(users);
//     const values = req.body;
//     const content = [...users, values];
//     await fs.writeFile("./MOCK_DATA.json", JSON.stringify(content));
//     return res.status(204).json({ msg: "helo" })
// })

// app.patch("/api/users/:id", async (req, res, next) => {
//     let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
//     users = JSON.parse(users);
//     const { id } = req.params;
//     if (!id) {
//         return res.status(400).json({
//             message: "missing id"
//         })
//     }
//     const user = users.find(u => u.id === Number(id));
//     if (!user) {
//         return res.status(404).json({
//             message: "user not found"
//         });
//     }
//     const values = req.body;
//     const updatedUsers = users.map(user => {
//         if (user.id === Number(id)) {
//             user.first_name = values.first_name;
//             user.last_name = values.last_name
//         }
//         return user;
//     })
//     await fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers));
//     return res.status(200).json({
//         msg: "user updated successfuly"
//     })
// });

// app.delete("/api/users/:id", async (req, res, next) => {
//     let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
//     users = JSON.parse(users);
//     const { id } = req.params;
//     if (!id) {
//         return res.status(400).json({
//             message: "missing id"
//         })
//     }
//     const updatedUsers = users.map(user => {
//         if (user.id === Number(id)) {
//             return null
//         }
//         return user;
//     }).filter(Boolean);
//     await fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers));
//     return res.status(200).json({
//         msg: "user deleted successfuly"
//     })
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server started at PORT", port)
})