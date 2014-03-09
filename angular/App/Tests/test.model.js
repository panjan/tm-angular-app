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
        test.newTestTitle = "";
        test.isEditingListTitle = false;
    }

    function Test() {
        this.title = "Default test name"; // defaults
    }
});