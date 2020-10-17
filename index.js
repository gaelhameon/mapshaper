const path = require('path');
const api = require('./mapshaper');
const pathToExportedBuild = path.join(__dirname, 'www'); 

module.exports = {
  api,
  pathToExportedBuild
};