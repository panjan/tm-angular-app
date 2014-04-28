testApp.factory('datacontext',
    ['breeze', 'Q', 'model', '$timeout',
    function (breeze, Q, model, $timeout) {

        var initialized;

        configureBreeze();
        var manager = new breeze.EntityManager("api/Test");
        manager.enableSaveQueuing(true);

        var datacontext = {
            metadataStore: manager.metadataStore,
            getTestsByQueue: getTestsByQueue,
            getTestWithSteps: getTestWithSteps,
            getQueues: getQueues
        };

        model.initialize(datacontext);
        
        return datacontext;

        //#region private members

        function getTestsByQueue(forceRefresh, queueName) {
            var query = breeze.EntityQuery
                .from('Tests')
                .where('queue.name', '==', queueName)
                .orderBy('testId desc');

            if (initialized && !forceRefresh) {
                query = query.using(breeze.FetchStrategy.FromLocalCache);
            }
            initialized = true;

            return manager.executeQuery(query)
                .then(getSucceeded); // caller to handle failure
        }

        function getTestWithSteps(id, forceRefresh) {

            var query = breeze.EntityQuery
                .from("Tests")
                .expand("Steps")
                .orderBy("testId desc")
                .where("testId", "==", id);

            if (initialized && !forceRefresh) {
                query = query.using(breeze.FetchStrategy.FromLocalCache);
            }
            initialized = true;

            return manager.executeQuery(query)
                .then(getSucceeded); // caller to handle failure
        }

        function getQueues(forceRefresh) {

            var query = breeze.EntityQuery
                .from("Queues")
                .orderBy("name asc");

            if (initialized && !forceRefresh) {
                query = query.using(breeze.FetchStrategy.FromLocalCache);
            }
            initialized = true;

            return manager.executeQuery(query)
                .then(getSucceeded); // caller to handle failure
        }

        function getSucceeded(data) {
            var qType = data.XHR ? "remote" : "local";
            return data.results;
        }

        function getErrorMessage(error) {
            var reason = error.message;
            if (reason.match(/validation error/i)) {
                reason = getValidationErrorMessage(error);
            }
            return reason;
        }
        function getValidationErrorMessage(error) {
            try { // return the first error message
                var firstItem = error.entitiesWithErrors[0];
                var firstError = firstItem.entityAspect.getValidationErrors()[0];
                return firstError.errorMessage;
            } catch (e) { // ignore problem extracting error message 
                return "validation error";
            }
        }

        function configureBreeze() {
            // configure to use the model library for Angular
            breeze.config.initializeAdapterInstance("modelLibrary", "backingStore", true);

            // configure to use camelCase
            breeze.NamingConvention.camelCase.setAsDefault();

            // configure to resist CSRF attack
            var antiForgeryToken = $("#antiForgeryToken").val();
            if (antiForgeryToken) {
                // get the current default Breeze AJAX adapter & add header
                var ajaxAdapter = breeze.config.getAdapterInstance("ajax");
                ajaxAdapter.defaultSettings = {
                    headers: {
                        'RequestVerificationToken': antiForgeryToken
                    },
                };
            }
        }
        //#endregion
    }]);