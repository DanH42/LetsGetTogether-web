'use strict';

describe('Controller: profileController', function() {

    beforeEach(module('core'));

    var profileController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        profileController = $controller('profileController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
