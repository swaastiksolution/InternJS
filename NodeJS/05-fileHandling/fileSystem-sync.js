const fs = require("fs/promises");


fs.writeFileSync("./test.txt", " hellooo there\n", {
    encoding: "utf-8",
})


fs.writeFile("./data.txt", "hello!!", { encoding: "utf-8" }, (err) => {
    console.log(err);
})


const data = fs.readFileSync("./data.txt", { encoding: "utf-8" });
console.log(data);

fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})

//fs.unlink("./test.txt").then((val) => console.log(val)).catch(err=>console.log(err));

