/* eslint-disable */

const path = require("path");
const express = require("express");
const webpack = require("webpack");
const config = require("./webpack.config");

const app = express();
const compiler = webpack(config);

const serverPort = process.env.PORT || 3000;
const listenAddr = process.env.ADDR || "0.0.0.0";

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static('assets'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, listenAddr, err => {
  if (err && err.code === "EADDRINUSE") {
    console.error(`Address ${listenAddr}:${serverPort} already in use, ` +
    `trying another port`);
    app.listen(0, listenAddr, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Server listening at http://${listenAddr}:`);
    }) 
  } else if (err) {
    console.error(err);
  }

  console.log(`Server listening at http://${listenAddr}:${serverPort}`);
});
