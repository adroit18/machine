describe('userStoryControllertest', function () {

    beforeEach(module('enukeAssignment'));
    var $controller;
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    describe('userStoryControllertest', function () {
        it('userStoryTest', function () {
            var $scope = {};
            var controller = $controller('userStoryController', {
                $scope: $scope
            });
            $scope.fileUpload = '';
            $scope.inputStoryUpload(fileUploadResult);
            expect($scope.series).toBe('1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30');

        });
    });
});
