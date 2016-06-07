System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../../models/member'], function(exports_1, context_1) {
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
    var core_1, http_1, member_1;
    var MemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (member_1_1) {
                member_1 = member_1_1;
            }],
        execute: function() {
            MemberComponent = (function () {
                function MemberComponent(http) {
                    this.http = http;
                    console.log('member constructor');
                }
                MemberComponent.prototype.ngOnInit = function () {
                };
                MemberComponent.prototype.ngOnChanges = function () {
                    var _this = this;
                    console.log('member onchange');
                    var o = this.member.user().observableModel.subscribe(function (data) {
                        console.log('user:');
                        console.log(data);
                    });
                    this.member.user().get().subscribe(function (data) {
                        _this.user = data;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', member_1.Member)
                ], MemberComponent.prototype, "member", void 0);
                MemberComponent = __decorate([
                    core_1.Component({
                        selector: 'member',
                        templateUrl: 'app/components/member/member.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MemberComponent);
                return MemberComponent;
            }());
            exports_1("MemberComponent", MemberComponent);
        }
    }
});
//# sourceMappingURL=member.component.js.map