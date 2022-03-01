// Note that this file requires node@13.2.0 or higher (or the --experimental-modules flag)
import fs from "fs";
import path from "path";

fs.readdirSync(path.resolve(process.cwd())).forEach(file => console.log(file));
const importMapFilePath = path.resolve(process.cwd(), "importmap.json");
console.log("=======================================");
fs.readdirSync(importMapFilePath).forEach(file => console.log(file));
console.log("=======================================");

console.log("=======================================");
console.log(importMapFilePath);
console.log(fs.lstatSync(importMapFilePath).isDirectory())
console.log(fs.lstatSync(path.resolve(process.cwd(), "server.js")).isDirectory())
console.log("=======================================");
const importMap = JSON.parse(fs.readFileSync(importMapFilePath, { encoding:'utf8', flag:'r' }));

// *********************** put appropriate module name and url here
const moduleName = "@agnos/root-config";
const url = "https://agnos-heroku-code-deploy.s3.amazonaws.com/agnos-web-hub/agnos-root-config.js";
importMap.imports[moduleName] = url;
importMap.imports.just_for_testing = "haha just testing.............."

fs.writeFileSync(importMapFilePath, JSON.stringify(importMap, null, 2));

console.log(`Updated import map for module ${moduleName}.`);
