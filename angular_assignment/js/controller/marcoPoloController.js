var marcoPoloController = function ($scope, $routeParams, $location, $window, $rootScope, $http) {
    'use strict';
    var marcoPolo = {};

    var getSeriesMarcoPolo = function () {
        var series = [];
        var lineString = '';
        for (var i = 1; i <= 100; i++) {
            if (i % 4 === 0 && i % 7 === 0) {
                lineString += "marcopolo,";
            } else if (i % 4 === 0) {
                lineString += "marco,";
            } else if (i % 7 === 0) {
                lineString += "polo,";
            } else {
                lineString += (i + ",");
            }
        }
        series.push(lineString.substring(0, lineString.length - 1));
        return series;
    }

    $scope.getGameResult = function (callback) {
        $scope.marcoPoloResult = (getSeriesMarcoPolo()).toString();
    }();
};
