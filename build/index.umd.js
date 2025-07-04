(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () {
  var _require = require('./utilities'),
    Utilities = _require.Utilities;
  var _require2 = require('./coralpay-c-connect'),
    CoralPayCConnect = _require2.CoralPayCConnect;
  module.exports.Utilities = Utilities;
  module.exports.CoralPayCConnect = CoralPayCConnect;

})));
//# sourceMappingURL=index.umd.js.map
