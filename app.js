// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     let body = "";

//     res.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     res.on("end", () => {
//       console.log(body);
//       res.end("Data received");
//     });
//   }

//   if (req.url === "/") {
//     res.end("Home page");
//   } else if (req.url === "/about") {
//     res.end("About Page");
//   } else if (req.url === "/api") {
//     res.setHeader("Content-Type", "application/json");
//     res.end(
//       JSON.stringify({
//         name: "peter",
//         lastName: "parker",
//         email: "@paker.com",
//       }),
//     );
//   } else {
//     res.end("page not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.log("data recevied");
// });

// customEmitter.emit("response");

// streams
const { createReadStream } = require("fs");

const stream = createReadStream("./rent/sec.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("error", (err) => console.log(err));
