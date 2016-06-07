System.register(['./relation', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var relation_1, Rx_1;
    var BelongsTo;
    return {
        setters:[
            function (relation_1_1) {
                relation_1 = relation_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            BelongsTo = (function (_super) {
                __extends(BelongsTo, _super);
                function BelongsTo(apiRoute, primaryKey, id) {
                    _super.call(this, apiRoute);
                    this.primaryKey = primaryKey;
                    var v = this.http.get(apiRoute).flatMap(function (res) {
                        var objects = res.json();
                        return Rx_1.Observable.from(objects);
                    });
                    this.observableModel = v.filter(function (model) { return model[primaryKey] == id; });
                    /*this.observableModel = this.http.get(apiRoute).flatMap(res => res.json()).filter((model: T) => { return model[primaryKey] == id; });*/
                }
                BelongsTo.prototype.get = function () {
                    console.log('BelongsTo get');
                    return this.observableModel;
                };
                return BelongsTo;
            }(relation_1.Relation));
            exports_1("BelongsTo", BelongsTo);
        }
    }
});
//# sourceMappingURL=belongs-to.js.map