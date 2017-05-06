'use strict';

/**
 * @ngdoc service
 * @name templateApp.demoApp
 * @description
 * # demoApp
 * Service in the templateApp.
 */
angular.module('templateApp')
  .service('demoApp', ['Proxy', 'Backand', function (Proxy, Backand) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.postDemoApp = function(description){
    	var param = {
    		description: description
    	};
    	return Proxy.postCall(param, Backand.getApiUrl() + '/1/objects/testing');
    };

    this.getDemoApp = function(){
        return Proxy.getCall(Backand.getApiUrl() + '/1/objects/testing');
    };

    this.deleteElement = function(id){
        return Proxy.deleteCall({'id' : id}, Backand.getApiUrl() + '/1/objects/testing/' + id);
    };

    this.updateElement = function(id, field, value){
        var data = {};
        data[field] = value;
        return Proxy.putCall(data, Backand.getApiUrl() + '/1/objects/testing/' + id);
    }


  }]);
