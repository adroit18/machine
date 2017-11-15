var userStoryController = function ($scope, $routeParams, $location, $window, $rootScope, $http) {
    'use strict';
    $scope.fileUpload = '';
    $scope.inputStoryUpload = function (fileUploadResult) {
        $scope.fileUpload = fileUploadResult;
        var series = getNumber(fileUploadResult);
    }
    var getNumber = function (liner) {
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
    
        for (var lineNumber = 0; lineNumber <= (lineWiseSplit.length)-1; lineNumber += 4) {
            var digitStored = [];
            var currentLine = lineWiseSplit[lineNumber]; //FIRSTlINE
            var digitTracker  =   0;
            for (var firstLine = 0; firstLine <= currentLine.length - 1; firstLine  +=  3) {
                digitStored[digitTracker++] = (currentLine.substring(firstLine, firstLine + 3)[1]);
            }
            currentLine = lineWiseSplit[lineNumber + 1];
            digitTracker    =   0;
            for (var firstLine = 0; firstLine <= currentLine.length - 1; firstLine  +=  3) {
                digitStored[digitTracker++] += (currentLine.substring(firstLine, firstLine + 3));
            }
            currentLine = lineWiseSplit[lineNumber + 2];
            digitTracker    =   0;
            var decodedNumber =   '';
            for (var firstLine = 0; firstLine <= currentLine.length - 1; firstLine  +=  3) {
                digitStored[digitTracker] += (currentLine.substring(firstLine, firstLine + 3));
                decodedNumber +=   decodedNumbersMap[digitStored[digitTracker++]];
            }
            finalResult.push(decodedNumber);
        }
    }

    $scope.parseInvoiceNumbers = function () {
        var series = getNumber(inputUserStory);
    }

    $scope.getTopSecret = function () {
        var series = getNumber(topSecret);
    }

};
