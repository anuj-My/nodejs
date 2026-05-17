const express = require("express");
const path = require("path");

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use  (middleware)
// app.listen

app.use(express.static(path.resolve(__dirname, "./navbar-app")));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

// ?repeptive instead use static method
// app.get("/styles.css", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/styles.css"));
// });

// app.get("/logo.svg", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/logo.svg"));
// });

// app.get("/browser-app.js", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/browser-app.js"));
// });

app.all("/{*random}", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(5000, () => {
  console.log("server running...");
});
