const fs = require('fs');

// we get it from yargs's argv object
const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = {  
  userID: "${process.env['USER_ID']}",  
};
`
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});