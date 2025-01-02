const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://app.localdev.me");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,HEAD");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

const configPath = "dist/angular-gzweb/assets/config/config.json";
let tempConfig = fs.readFileSync(configPath, { encoding: "utf8" });

console.log(tempConfig)

if (tempConfig != null) {
  console.log(process.env['USER_ID'])
  tempConfig = { ...JSON.parse(tempConfig), userID: process.env['USER_ID'] }
  fs.writeFile(configPath, JSON.stringify(tempConfig), function (err) {
    if (err) {
      console.log(err);
    }
  
    console.log(`Config updated ${configPath}`);
    console.log(tempConfig)
  });
}

//...
app.use(allowCrossDomain);
app.use(express.static("dist/angular-gzweb"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
