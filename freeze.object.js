let config = { host: "localhost", port: 3306 };

// ✅ Freeze the object
let frozen = Object.freeze(config);

console.log("frozen ===", frozen);

// Try updating
config.host = "127.0.0.1";
console.log("after update ===", config); // still { host: "localhost", port: 3306 }
