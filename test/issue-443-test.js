var api = require('../mapshaper'),
  assert = require('assert'),
  fs = require('fs');

describe(`Issue #166: error with shx when providing data in applyCommands' input arg`, function () {
  it('conversion works when shx fileData is provided after shp in input arg', function (done) {
    var path = 'test/data/issues/166/';
    var input = {
      'a_utm.shp': fs.readFileSync(path + 'a_utm.shp'),
      'a_utm.shx': fs.readFileSync(path + 'a_utm.shx'),
      'a_utm.dbf': fs.readFileSync(path + 'a_utm.dbf'),
    };

    var cmd = `-i ${Object.keys(input).join(' ')} -o a_utm.geojson`;

    api.applyCommands(cmd, input, function (err, output) {
      console.log(err);
      console.log(output);
      assert.equal(err, undefined);
      assert.equal(output['a_utm.geojson'], JSON.stringify({some: 'geojson data'}));
      done();
    });
  });
  it('conversion works when shx fileData is provided first in input arg', function (done) {
    var path = 'test/data/issues/166/';
    var input = {
      'a_utm.shx': fs.readFileSync(path + 'a_utm.shx'),
      'a_utm.dbf': fs.readFileSync(path + 'a_utm.dbf'),
      'a_utm.shp': fs.readFileSync(path + 'a_utm.shp'),
    };

    var cmd = `-i ${Object.keys(input).join(' ')} -o a_utm.geojson`;

    api.applyCommands(cmd, input, function (err, output) {
      console.log(err);
      console.log(output);
      assert.equal(err, undefined);
      assert.equal(output['a_utm.geojson'], JSON.stringify({some: 'geojson data'}));
      done();
    });
  });
});
