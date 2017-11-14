var app;
var angularLoadCallback = function () {
    app = angular.module('enukeAssignment', ['ngRoute']);
    app.config(function ($routeProvider, $locationProvider, $httpProvider, $windowProvider) {
        $routeProvider.templateUrlBase = './enuke_angular_assignment/template/';

        $routeProvider
            .when('/', {})
            .when('/marcoPolo', {
                controller: 'marcoPoloController',
                templateUrl: $routeProvider.templateUrlBase + 'marcoPolo.html'
            })
            .when('/userStory', {
                controller: 'userStoryController',
                templateUrl: $routeProvider.templateUrlBase + 'userStory.html'
            })
            .otherwise({
                templateUrl: $routeProvider.templateUrlBase + '404Page.html'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
    //    app.service('se_uiBlocker', se_uiBlocker);


    //    app.directive('messageViewer', ['$http', wtApp.directive.messageViewer]);

    if (typeof (marcoPoloController) != "undefined")
        app.controller('marcoPoloController', marcoPoloController);

    if (typeof (userStoryController) != "undefined")
        app.controller('userStoryController', userStoryController);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['enukeAssignment'], {});
    });
};

$(function () {
    loadScript('https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js');
    loadScript("https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-route.js", angularLoadCallback)


});

function loadScript(url, callback, asyncFlag) {
    if (typeof (asyncFlag) == "undefined") {
        asyncFlag = false
    }
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.async = asyncFlag;
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                if (typeof (callback) != "undefined")
                    callback();
                else
                    console.log();
            }
        };
    } else { //Others
        script.onload = function () {
            if (typeof (callback) != "undefined")
                callback();
            else
                console.log();
        };
    }

    script.src = url;
    document.body.appendChild(script);
}
