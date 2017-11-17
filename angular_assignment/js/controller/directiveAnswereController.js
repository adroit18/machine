var directiveAnswereController = function ($scope,$rootScope) {
    'use strict';

$scope.directiveAnswere =   "Scope is one of the properties of directive and acts as a medium for directive to communicate to its parenst controller. There are 3 types of directive scopes:  1.Scope : false (this is by default scope and means that directive uses its parents scope) 2.Scope: true (directive gets a new scope which is inherited from parent controller)  3. Scope: {} (directive gets its own new and isolated scope completely independent of its parent controller)" 

};
