System.register(['./relation', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var relation_1, Rx_1;
    var HasMany;
    return {
        setters:[
            function (relation_1_1) {
                relation_1 = relation_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            HasMany = (function (_super) {
                __extends(HasMany, _super);
                function HasMany(apiRoute, foreignKey, id) {
                    _super.call(this, apiRoute);
                    this.foreignKey = foreignKey;
                    var v = this.http.get(apiRoute).flatMap(function (res) {
                        var objects = res.json();
                        return Rx_1.Observable.from(objects);
                    });
                    this.observableModels = v.filter(function (model) { return model[foreignKey] == id; });
                }
                HasMany.prototype.find = function (id) {
                    return this.observableModels.filter(function (model) { return model['id'] == id; });
                };
                HasMany.prototype.all = function () {
                    return this.observableModels;
                };
                return HasMany;
            }(relation_1.Relation));
            exports_1("HasMany", HasMany);
        }
    }
});
//# sourceMappingURL=has-many.js.map