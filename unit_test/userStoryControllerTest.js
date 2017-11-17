describe('userStoryControllertest', function () {

    var $compile;
    var $rootScope;
    var $controller;

    beforeEach(function () {
        module('enukeAssignment');
        inject(function (_$compile_, _$rootScope_, _$controller_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $controller = _$controller_;
        });
    });
    it('user_story_test_for_600143155', function () {
        var $scope = {};
        var controller = $controller('userStoryController', {
            $scope: $scope
        });

        $scope.fileArray = [
                                            [" _  _  _        _     _  _ "],
                                            ["|_ | || |  ||_| _|  ||_ |_ "],
                                            ["|_||_||_|  |  | _|  | _| _|"],
                                            ["                           "]
                                        ];
        $scope.fileUploadResult = '';
        $scope.fileArray.forEach(function (value, key) {
            $scope.fileUploadResult = $scope.fileUploadResult + value + "\n";
        });
        $scope.$apply = function () {
            return true;
        }
        $scope.inputStoryUpload($scope.fileUploadResult);
        expect($scope.fileInput).toBe("600143155\r\n");
    });
    it('user_story_test_for_459179489_and_485640368', function () {
        var $scope = {};
        var controller = $controller('userStoryController', {
            $scope: $scope
        });

        $scope.fileArray = [
                                    ["    _  _     _  _     _  _ "],
                                    ["|_||_ | |  |  ||_||_||_||_|"],
                                    ["  | _| _|  |  | _|  ||_| _|"],
                                    ["                           "],
                                    ["    _  _  _     _  _  _  _ "],
                                    ["|_||_||_ |_ |_|| | _||_ |_|"],
                                    ["  ||_| _||_|  ||_| _||_||_|"],
                                    ["                           "],
                            ];

        $scope.fileUploadResult = '';
        $scope.fileArray.forEach(function (value, key) {
            $scope.fileUploadResult = $scope.fileUploadResult + value + "\n";
        });
        $scope.$apply = function () {
            return true;
        }
        $scope.inputStoryUpload($scope.fileUploadResult);
        expect($scope.fileInput).toBe("45?179489 ILLEGAL\r\n485640368\r\n");
    });

});
