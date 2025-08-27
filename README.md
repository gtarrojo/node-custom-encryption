# File Encryption and Decryption with Node.js Streams

This project demonstrates **basic file encryption and decryption** using Node.js streams.

## How It Works

### 🔒 Encryption

- The `encryption.js` script:
  - Reads data from **`read.txt`**
  - Encrypts it by **shifting the character codes**
  - Writes the encrypted data to **`write.txt`**

### 🔓 Decryption

- The `decryption.js` script:
  - Reads the encrypted data from **`write.txt`**
  - Decrypts it by **reversing the character code shift**
  - Writes the original content to **`decrypted.txt`**

---

## ⚡ Why Streams?

The application leverages **Node.js Transform streams** to process the file data efficiently, handling encryption and decryption on-the-fly without loading the entire file into memory.
