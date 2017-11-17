var userStoryController = function ($scope, $routeParams, $location, $window, $rootScope, $http) {
    'use strict';
    $scope.readyToDownload = false;
    $scope.inputStoryUpload = function (fileUploadResult) {

        $scope.fileInput = $scope.getNumber(fileUploadResult);
        ($scope.fileInput) = ($scope.fileInput).toString().replace(/,/g, '\n');

        if (typeof ($scope.fileInput) != "undefined" && ($scope.fileInput).length >= 1) {
            $scope.readyToDownload = true;
            $scope.fileOutputPathUrl = 'data:application/plain;charset=utf-8,' + encodeURIComponent($scope.fileInput);
            $scope.$apply();
        }
    }
    $scope.getNumber = function (liner) {
        var lineWiseSplit = liner.split("\n");
        var decodedNumbersMap = {
            "_| ||_|": 0,
            "   |  |": 1,
            "_ _||_ ": 2,
            "_ _| _|": 3,
            " |_|  |": 4,
            "_|_  _|": 5,
            "_|_ |_|": 6,
            "_  |  |": 7,
            "_|_||_|": 8,
            "_|_| _|": 9
        }
        var finalResult = [];

        for (var lineNumber = 0; lineNumber <= (lineWiseSplit.length) - 1; lineNumber += 4) {
            var digitStored = [];
            var firstLine = lineWiseSplit[lineNumber]; //FIRSTlINE
            var secondLine = lineWiseSplit[lineNumber + 1]; //SECONDlINE
            var thirdLine = lineWiseSplit[lineNumber + 2]; //THIRDlINE
            var digitTracker = 0;
            var decodedNumber = '';
            for (var i = 0; i <= firstLine.length - 1; i += 3) {
                digitStored[digitTracker] = (firstLine.substring(i, i + 3)[1]);
                digitStored[digitTracker] += (secondLine.substring(i, i + 3));
                digitStored[digitTracker] += (thirdLine.substring(i, i + 3));
                decodedNumber += decodedNumbersMap[digitStored[digitTracker++]];
            }
            finalResult.push(decodedNumber);
        }
        return finalResult;
    }
};
