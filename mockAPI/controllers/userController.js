import fs from "fs/promises";

export const getAllUsers = async (req, res, next) => {
    let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
    users = JSON.parse(users);
    const { id } = req.params;
    if (id) {
        const user = users.find(u => u.id === Number(id));
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }
        return res.status(200).json(user);
    }
    return res.status(200).json(users);
}

export async function createUser(req, res, next) {
    let users = await fs.readFile("./MOCK_DATA.json", { encoding: "utf-8" });
    users = JSON.parse(users);
    const values = req.body;
    const content = [...users, values];
    await fs.writeFile("./MOCK_DATA.json", JSON.stringify(content));
    return res.status(204).json({ msg: "helo" })

}