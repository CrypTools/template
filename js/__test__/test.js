// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../")

const { encrypt, decrypt } = require(path + "lib.js")


eye.test("Encryption", "node",
	$ => $(encrypt("Hello World!")).Equal(OUTPUT)
)
eye.test("Decryption", "node",
	$ => $(decrypt("ENCRYPTED STR")).Equal("Hello World!"),
	$ => $(decrypt(encrypt("Hello World!"))).Equal("Hello World!")
)
