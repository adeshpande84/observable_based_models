System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1;
    var Relation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Relation = (function () {
                function Relation(apiRoute) {
                    this.apiRoute = apiRoute;
                    var injector = core_1.ReflectiveInjector.resolveAndCreate([http_1.HTTP_PROVIDERS, http_1.XHRBackend]);
                    this.http = injector.get(http_1.Http);
                }
                return Relation;
            }());
            exports_1("Relation", Relation);
        }
    }
});
//# sourceMappingURL=relation.js.map