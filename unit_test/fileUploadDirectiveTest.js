describe('fileUploadDirective directive:', function () {

    var $compile;
    var $rootScope;

    beforeEach(function () {
        module('enukeAssignment');
        inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('uploading file directive', function () {
        var onChangeCallback;
        var element = $compile('<input type="file" file-upload-directive>')($rootScope);
        $rootScope.$digest();


        spyOn(jQuery.fn, 'on').and.callFake(function (eventName, callback) {
            if (eventName === 'change') {
                onChangeCallback = callback;
            }
        });
        spyOn(window, 'FileReader').and.returnValue({
            addEventListener: function () {},
            readAsBinaryString: function () {}
        });

        var files = {
            currentTarget: {
                files: [{
                    size: 4000
                }],
                value: 'asd'
            }
        };

        onChangeCallback = function (files) {};

        element.triggerHandler("change");

        expect(window.FileReader).toHaveBeenCalled();
    });

});
