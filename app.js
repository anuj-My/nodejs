const express = require("express");
const path = require("path");
const { products } = require("./data.js");

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use  (middleware)
// app.listen

// app.use(express.static(path.resolve(__dirname, "./navbar-app")));

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

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, price, category } = item;
    return { id, name, price, category };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    res.status(404).send("product not found");
  }
  res.json(product);
});

app.get("/api/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((item) => {
      const name = item.name.toLowerCase();
      return name.includes(search.toLowerCase());
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortedProducts);
});

app.all("/{*random}", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(5000, () => {
  console.log("server running...");
});
