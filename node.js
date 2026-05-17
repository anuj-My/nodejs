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
// const { createReadStream } = require("fs");

// const stream = createReadStream("./rent/sec.txt", {
//   highWaterMark: 90000,
//   encoding: "utf-8",
// });

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("error", (err) => console.log(err))/;

const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const navStyle = readFileSync("./navbar-app/styles.css");
const navJs = readFileSync("./navbar-app/browser-app.js");
const navLogo = readFileSync("./navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(navStyle);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(navLogo);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javscript" });
    res.write(navJs);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Abiyt page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server running...");
});
