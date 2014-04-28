testApp.factory('model', function () {

    var datacontext;

    var model = {
        initialize: initialize
    };

    return model;

    function initialize(context) {
        datacontext = context;
        var store = datacontext.metadataStore;
        store.registerEntityTypeCtor("Test", Test, TestInitializer);
    }

    function TestInitializer(test) {
        test.errorMessage = "";
        test.progressSuccess = 30;
        test.progressWarning = 20;
        test.progressDanger = 10;
    }

    function Test() {
        this.title = "Default test name"; // defaults
    }
});