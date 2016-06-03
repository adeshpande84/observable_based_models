System.register(['rxjs/Rx', 'angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, core_1, http_1;
    var ModelObservableCollection;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ModelObservableCollection = (function () {
                function ModelObservableCollection(apiRoute, foreign_key, id) {
                    var _this = this;
                    this.apiRoute = apiRoute;
                    this.foreign_key = foreign_key;
                    this.id = id;
                    var injector = core_1.ReflectiveInjector.resolveAndCreate([http_1.HTTP_PROVIDERS, http_1.XHRBackend]);
                    this.http = injector.get(http_1.Http);
                    this.observableModels = this.http.get(this.apiRoute).map(function (res) { return res.json(); });
                    //console.log('constructor');
                    //console.log(this.observableModels);
                    var v = this.http.get(this.apiRoute).flatMap(function (res) {
                        var objects = res.json();
                        return Rx_1.Observable.from(objects);
                    });
                    //console.log('constructor2');
                    //console.log(v);
                    this.observableModels = v.filter(function (model) { return model[_this.foreign_key] == id; });
                    //v.subscribe(data => {console.log("Next:");console.log(data)});
                }
                ModelObservableCollection.prototype.find = function (id) {
                    var f = this.foreign_key;
                    return this.observableModels.filter(function (model) { return model.id == id; });
                };
                ModelObservableCollection.prototype.all = function () {
                    /*return this.http.get(this.apiRoute).map(res => res.json()).subscribe(data => {
                        this.observableModels = (<Observable<T>>Observable.from(data)).filter((model: T) => { return model[this.foreign_key] == id; });
                    });*/
                    return this.observableModels;
                };
                return ModelObservableCollection;
            }());
            exports_1("ModelObservableCollection", ModelObservableCollection);
        }
    }
});
//# sourceMappingURL=model-observable-collection.js.map