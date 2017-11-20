var directiveAnswereController = function ($scope, $rootScope) {
    'use strict';
    $scope.question = "How can you limit the scope on a directive and why would you do this? ";
    $scope.directiveAnswere = [];
    $scope.directiveAnswere.push("Directives are special symbols to DOM elements(specifically an attribute, element name, comment or CSS class), that help Angular HTML compiler($compile), to attach special behaviour to DOM element or manipulate DOM.");
    $scope.directiveAnswere.push("Scope is one of the properties of directive and acts as a medium for directive to communicate to its parents controller.")
    $scope.directiveAnswere.push("There are 3 types of directive scopes: ");
    $scope.directiveAnswere.push("1. Scope: false");
    $scope.directiveAnswere.push(" this is default scope and means that directive uses its parents scope, the variable is intialized by value declared inside controller, change in a scope variable inside directive or controller will  be reflected in both.");
    $scope.directiveAnswere.push("2. Scope: true");
    $scope.directiveAnswere.push("directive gets a new scope which is inherited from parent controller, in this change in directive scope does not effect value of controller variable but if variable in controller scope is changes than its reflected in both.");
    $scope.directiveAnswere.push("3. Scope: {}");
    $scope.directiveAnswere.push("directive gets its own new and isolated scope completely independent of its parent controller. This is helpful when building reusable components because it prevents a component from changing your model state except for the models that you explicitly pass in.");
    $scope.directiveAnswere.push("Hence we can use it more than once within a given scope or a different controller is not needed each time in order to re-use such a directive");
    $scope.directiveAnswere.push("In case of directive having a isolated scope, directive access the parent scope objects or make calls to the methods by using prefixes.");
    $scope.directiveAnswere.push("There are three types of prefixes:");
    $scope.directiveAnswere.push("‘@’ – Text binding / one-way binding");
    $scope.directiveAnswere.push("‘=’ – Direct model binding / two-way binding");
    $scope.directiveAnswere.push("‘ & ’–Behavior binding / Method binding ");
    $scope.directiveAnswere.push("example: ");

    $scope.directiveAnswere.push("studentController.js");
    $scope.directiveAnswere.push("schoolApp.controller('studentController',function($scope){");
    $scope.directiveAnswere.push("$scope.name = 'Deepak Uniyal'");
    $scope.directiveAnswere.push("$scope.age = 14");
    $scope.directiveAnswere.push("$scope.display = function (name) {alert('Student Name : ' + name);}});");

    $scope.directiveAnswere.push("studentDirective.js");
    $scope.directiveAnswere.push("schoolApp.directive('studentDirective', function () {");
    $scope.directiveAnswere.push("return {");
    $scope.directiveAnswere.push("restrict: 'E',");
    $scope.directiveAnswere.push("scope: {");
    $scope.directiveAnswere.push("name: '=',age: '@',display: '&'},");
    $scope.directiveAnswere.push("template: '<div>Student name : {{name}}</div>' + 'Type a new name title : <input type='text' ng-model='name' />' +");
    $scope.directiveAnswere.push("'<div>Student age : {{age}}</div>' + 'enter correct student age : <input type='text' ng-model='age' />' + '<div><button ng-click='display(name)'>View Student</button></div>'};});");

    $scope.directiveAnswere.push("student.html");
    $scope.directiveAnswere.push("<div ng-app='schoolApp'>");
    $scope.directiveAnswere.push("<div ng-controller = 'studentController'>");
    $scope.directiveAnswere.push("<h2> Student Name: {{name}} </h2><h3> age: {{age}}</h3>");
    $scope.directiveAnswere.push("<student-directive name = 'name' age = '{{age}}' display = 'display(name)'><student-directive> //notice that {{}} is used to call 1- way binding");
    $scope.directiveAnswere.push("</div></div>");

    $scope.directiveAnswere.push(". There is a 2-way binding in the name property. That is, any changes made to the name in either the controller or the directive will reflect over onto the other. The age property has a 1-way binding. Thus, changes made in the directive reflect only there.")
    $scope.directiveAnswere.push("For doing any changes to controller variable Directive Defination Object (DDO) can be provided inside 'link' field of a directive");

    $scope.deepak = [3, 5, 7, 11, 15, 16, 21, 29];
};
