// require jquery
// This is not strictly required as we used the ProvidePlugin
// in the webpack.config.js to bind $ to 'jquery'
// but it's better style to make it explicit
require('jquery');
require('moment');

require('./modules/address-autocomplete');
require('./modules/vehicleService');
require('./modules/vehicle');

require('./validate/defaults');
require('./validate/steps/step1');
