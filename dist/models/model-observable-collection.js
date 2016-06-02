System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ModelObservableCollection;
    return {
        setters:[],
        execute: function() {
            ModelObservableCollection = (function () {
                function ModelObservableCollection(ob) {
                    this.observableModels = ob;
                }
                ModelObservableCollection.prototype.find = function (id) {
                    return this.observableModels.filter(function (model) { return model.id == id; });
                };
                ModelObservableCollection.prototype.all = function () {
                };
                return ModelObservableCollection;
            }());
            exports_1("ModelObservableCollection", ModelObservableCollection);
        }
    }
});
//# sourceMappingURL=model-observable-collection.js.map