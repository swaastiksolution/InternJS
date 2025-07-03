import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __filename and __dirname in ESM
console.log(import.meta.filename);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, 'students', 'data.txt');

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const directoryName = path.dirname(filePath); // Corrected: not basename

// console.log(parseData);
// console.log(resolvedPath);
// console.log(baseName);
// console.log(directoryName);
// console.log(extName);