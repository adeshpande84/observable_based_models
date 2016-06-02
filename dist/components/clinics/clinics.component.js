System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'rxjs/add/operator/map', '../clinic/clinic.component', '../../models/model-observable-collection'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, clinic_component_1, model_observable_collection_1;
    var ClinicsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (clinic_component_1_1) {
                clinic_component_1 = clinic_component_1_1;
            },
            function (model_observable_collection_1_1) {
                model_observable_collection_1 = model_observable_collection_1_1;
            }],
        execute: function() {
            ClinicsComponent = (function () {
                function ClinicsComponent(http) {
                    this.http = http;
                    this.clinicsUrl = 'app/mock_data/clinics.json';
                    this.clinics = [];
                }
                ClinicsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.http.get(this.clinicsUrl).map(function (res) { return res.json(); }).subscribe(function (data) { _this.clinics = data; console.log('subscribed to: '); console.log(data); });
                    //Observable.from([1,2,3]).subscribe(data=>{console.log('subscribed '+data);});
                    /*this.http.get(this.clinicsUrl).map(res => res.json()).subscribe(data => {
                        this.tempObs = <Observable<Clinic>>Observable.from(data);
                        this.tempObs.subscribe(data=>console.log('subscribed2 to: '+ data.name));
                    });*/
                    this.http.get(this.clinicsUrl).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.tempObs = new model_observable_collection_1.ModelObservableCollection(Rx_1.Observable.from(data));
                        _this.tempObs.find("3").subscribe(function (data) { var t = data; console.log(t.name); });
                    });
                };
                ClinicsComponent.prototype.ngOnChanges = function () {
                    //if(this.tempObs !== undefined) {
                    //this.tempObs.subscribe(data => console.log('subscribed 2 to: '+data.name));
                    //}
                };
                ClinicsComponent = __decorate([
                    core_1.Component({
                        selector: 'clinics',
                        directives: [clinic_component_1.ClinicComponent],
                        templateUrl: 'app/components/clinics/clinics.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClinicsComponent);
                return ClinicsComponent;
            }());
            exports_1("ClinicsComponent", ClinicsComponent);
        }
    }
});
//# sourceMappingURL=clinics.component.js.map