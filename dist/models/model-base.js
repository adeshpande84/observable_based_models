System.register(['./model-observable-collection', './belongs-to'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_observable_collection_1, belongs_to_1;
    var ModelBase;
    return {
        setters:[
            function (model_observable_collection_1_1) {
                model_observable_collection_1 = model_observable_collection_1_1;
            },
            function (belongs_to_1_1) {
                belongs_to_1 = belongs_to_1_1;
            }],
        execute: function() {
            ModelBase = (function () {
                function ModelBase() {
                }
                ModelBase.prototype.hasMany = function (apiRoute, foreign_key) {
                    return new model_observable_collection_1.ModelObservableCollection(apiRoute, foreign_key, this.id);
                };
                ModelBase.prototype.belongsTo = function (apiRoute, primaryKey, foreignKey) {
                    return new belongs_to_1.BelongsTo(apiRoute, primaryKey, this[foreignKey]);
                };
                return ModelBase;
            }());
            exports_1("ModelBase", ModelBase);
        }
    }
});
//# sourceMappingURL=model-base.js.map