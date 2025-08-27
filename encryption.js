const { Transform } = require("node:stream");
const fs = require("node:fs/promises");

class Encrypt extends Transform {
  _transform(chunk, encoding, callback) {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] !== 255) {
        chunk[i] += 1; // Add custom solution as needed.
      }
      // Chunk progress
      // const tenthOfData = Math.floor(chunk.length / 10);
      // // Log progress every 10% of the chunk, avoiding division by zero
      // if (tenthOfData > 0 && i > 0 && i % tenthOfData === 0) {
      //   const percentage = Math.round((i / chunk.length) * 100);
      //   console.log(`Encoding... ${percentage}% of the current chunk`);
      // }
    }
    this.push(chunk);
    callback();
  }
}

(async () => {
  const readFileHandle = await fs.open("read.txt", "r");
  const writeFileHandle = await fs.open("write.txt", "w");

  const readStream = readFileHandle.createReadStream();
  const writeStream = writeFileHandle.createWriteStream();
  const encrypt = new Encrypt();
  // Use pipeline in production
  readStream.pipe(encrypt).pipe(writeStream);
})();
