'use strict';

let angular = require('angular');

module.exports = angular
  .module('spinnaker.core.config', [
    require('./defaultTimeZone'),
    require('./featureFlags'),
  ])
  .name;
