describe('marcoPoloControllertest', function () {
    var $controller;
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    beforeEach(angular.mock.module('enukeAssignment'));

    //    var $controller;
    //
    //    beforeEach(angular.mock.inject(function (_$controller_) {
    //        $controller = _$controller_;
    //    }));
    it('marcoPoloTest', function () {
        var $scope = {};
        var controller = $controller('marcoPoloController', {
            $scope: $scope
        });

        $scope.num1 = 1;
        $scope.num2 = 2;
        $scope.add();
        expect($scope.sum).toBe(3);
    });
});
