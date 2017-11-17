var enukeAssignment = enukeAssignment || {};
enukeAssignment.directive = enukeAssignment.directive || {};
enukeAssignment.directive.fileUploadDirective = function () {
    'use strict';
    return {
        scope: true,
        //        templateUrl: 'angular_assignment/template/fileUploadDirective.html',
        link: function (scope, elem, attr) {
            elem.on("change", function (e) {

                if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
                    alert('The File APIs are not fully supported in this browser.');
                    return false;
                }

                var file = this.files[0];
                var reader = new FileReader();

                reader.onload = function () {
                    scope.fileUpload = reader.result;
                    scope.inputStoryUpload(scope.fileUpload);
                };
                reader.readAsBinaryString(file)
            });
        }
    };
};
