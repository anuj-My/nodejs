const { readFileSync, writeFileSync } = require("fs");

const secText = readFileSync("./parent/sec.txt", "utf-8");
const contentText = readFileSync("./parent/content.txt", "utf-8");

console.log(secText);
console.log(contentText);

writeFileSync(
  "./parent/result.txt",
  `here is the result: ${secText}, ${contentText}`,
  { flag: "a" },
);
