'use strict';

/**
 * @ngdoc service
 * @name templateApp.material
 * @description
 * # material
 * Service in the templateApp.
 */
angular.module('templateApp')
  .service('material', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $.material;
  });
