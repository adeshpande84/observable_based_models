System.register(['./belongs-to', './has-many'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var belongs_to_1, has_many_1;
    var ModelBase;
    return {
        setters:[
            function (belongs_to_1_1) {
                belongs_to_1 = belongs_to_1_1;
            },
            function (has_many_1_1) {
                has_many_1 = has_many_1_1;
            }],
        execute: function() {
            ModelBase = (function () {
                function ModelBase() {
                }
                ModelBase.prototype.hasMany = function (apiRoute, foreign_key) {
                    return new has_many_1.HasMany(apiRoute, foreign_key, this.id);
                };
                ModelBase.prototype.belongsTo = function (apiRoute, primaryKey, id) {
                    return new belongs_to_1.BelongsTo(apiRoute, primaryKey, id);
                };
                return ModelBase;
            }());
            exports_1("ModelBase", ModelBase);
        }
    }
});
//# sourceMappingURL=model-base.js.map