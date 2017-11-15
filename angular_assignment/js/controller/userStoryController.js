var userStoryController = function ($scope, $routeParams, $location, $window, $rootScope, $http) {
    'use strict';
    $scope.fileUpload = '';
    $scope.inputStoryUpload = function (fileUploadResult) {
        $scope.fileUpload = fileUploadResult;
        var series = getNumber(fileUploadResult);
    }
    var userStory = {};

    var getNumber = function (liner) {
        var lineWiseSplit = liner.split("\n");
        var decodedNumbers = {
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
        var digitStored = [];

        for (var lineNumber = 0; lineNumber <= (lineWiseSplit.length); lineNumber += 4) {
            console.log(lineNumber);
            if (lineNumber % 4 == 0)
                digitStored = [];
            var currentLine = lineWiseSplit[lineNumber]; //FIRSTlINE
            for (var firstLine = 0; firstLine <= currentLine.length - 1; firstLine++) {
                digitStored[firstLine] = (currentLine.substring(firstLine, firstLine + 3)[1]);
            }
            currentLine = lineWiseSplit[lineNumber + 1];
            for (var firstLine = 0; firstLine <= currentLine.length - 1; firstLine++) {
                digitStored[firstLine] += (currentLine.substring(firstLine, firstLine + 3));
            }
            currentLine = lineWiseSplit[lineNumber + 2];
            for (var firstLine = 0; firstLine <= currentLine.length - 1; firstLine++) {
                digitStored[firstLine] += (currentLine.substring(firstLine, firstLine + 3));
            }
        }


    }

    $scope.parseInvoiceNumbers = function () {
        var series = getNumber(inputUserStory);
    }

    $scope.getTopSecret = function () {
        var series = getNumber(topSecret);
    }

};
