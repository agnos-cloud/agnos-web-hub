// Note that this file requires node@13.2.0 or higher (or the --experimental-modules flag)
import fs from "fs";
import path from "path";

const importMapFilePath = path.resolve(process.cwd(), "importmap.json");
const importMap = JSON.parse(fs.readFileSync(importMapFilePath));

// *********************** put appropriate module name and url here
const moduleName = "@agnos/root-config";
const url = "https://agnos-heroku-code-deploy.s3.amazonaws.com/agnos-web-hub/agnos-root-config.js";
importMap.imports[moduleName] = url;
importMap.imports.just_for_testing = "haha just testing.............."

fs.writeFileSync(importMapFilePath, JSON.stringify(importMap, null, 2));

console.log(`Updated import map for module ${moduleName}.`);
