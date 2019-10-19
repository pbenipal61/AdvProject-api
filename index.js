require("dotenv").config();
const http = require("http");
const port = process.env.PORT;
const app = require("./src/app");
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Server running!");
});
