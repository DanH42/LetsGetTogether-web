'use strict';

describe('Controller: aboutController', function() {

    beforeEach(module('core'));

    var aboutController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        aboutController = $controller('aboutController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
