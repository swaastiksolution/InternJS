const path = require('path')


console.log(path.sep)// /-> mac & linux and \ -> for windows

// __dirname and __filename are built-in in CommonJS
console.log(__dirname); // full / absolute path to directory where the file is located
console.log(__filename); // full/absolute path to where file is located


const filePath = path.join(__dirname, '/cdn', '/image.jpg');

console.log(filePath)

//const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
// const extName = path.extname(filePath);
// const baseName = path.basename(filePath);
// const directoryName = path.dirname(filePath);

//console.log(parseData);
console.log(resolvedPath);
// console.log(baseName);
// console.log(directoryName);
//  console.log(extName);
