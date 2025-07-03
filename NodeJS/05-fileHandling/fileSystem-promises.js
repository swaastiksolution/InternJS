const fs = require('fs/promises');

// Writing to a file
// fs.writeFile('example.txt', 'Hello from fs.promises!')
//   .then(() => console.log('File written successfully'))
//   .catch((err) => console.error('Error writing file:', err));

// // Reading the file
// fs.readFile('example.txt', 'utf-8')
//   .then((data) => console.log('File content:', data))
//   .catch((err) => console.error('Error reading file:', err));




async function fileOperations() {
  try {
    await fs.writeFile('async-example.txt', 'Written using async/await');
    console.log('File created');

    const data = await fs.readFile('async-example.txt', 'utf-8');
    console.log('File content:', data);

    await fs.appendFile('async-example.txt', '\nThis is appended text.');
    console.log('Text appended');

    const updatedData = await fs.readFile('async-example.txt', 'utf-8');
    console.log('Updated content:', updatedData);

   await fs.unlink('async-example.txt');
    console.log('File deleted');
  } catch (err) {
    console.error('Error:', err);
  }
}

fileOperations();
