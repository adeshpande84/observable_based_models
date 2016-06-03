System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../../models/clinic'], function(exports_1, context_1) {
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
    var core_1, http_1, clinic_1;
    var ClinicComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (clinic_1_1) {
                clinic_1 = clinic_1_1;
            }],
        execute: function() {
            ClinicComponent = (function () {
                function ClinicComponent(http) {
                    this.http = http;
                    this.members = [];
                }
                ClinicComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //this.clinic.members();
                    this.clinic.members().all().subscribe(function (data) {
                        _this.members.push(data);
                    });
                };
                ClinicComponent.prototype.ngOnChanges = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', clinic_1.Clinic)
                ], ClinicComponent.prototype, "clinic", void 0);
                ClinicComponent = __decorate([
                    core_1.Component({
                        selector: 'clinic',
                        templateUrl: 'app/components/clinic/clinic.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClinicComponent);
                return ClinicComponent;
            }());
            exports_1("ClinicComponent", ClinicComponent);
        }
    }
});
//# sourceMappingURL=clinic.component.js.map