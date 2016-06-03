System.register(['./model-base', './member'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var model_base_1, member_1;
    var Clinic;
    return {
        setters:[
            function (model_base_1_1) {
                model_base_1 = model_base_1_1;
            },
            function (member_1_1) {
                member_1 = member_1_1;
            }],
        execute: function() {
            Clinic = (function (_super) {
                __extends(Clinic, _super);
                //static apiRoute: string = '';
                function Clinic(name, description, id) {
                    _super.call(this);
                    if (id !== undefined && id != '') {
                        this.id = id;
                    }
                    this.name = name;
                    this.description = description;
                }
                Clinic.prototype.members = function () {
                    //return ModelObservableCollection
                    /*this.http.get(this.clinicsUrl).map(res => res.json()).subscribe(data => {
                      this.tempObs = new ModelObservableCollection(<Observable<Clinic>>Observable.from(data));
                      this.tempObs.find("3").subscribe(data => {let t = <Clinic>data; console.log(t.name);})
                    });*/
                    return this.hasMany(member_1.Member.apiRoute, 'clinic_id', this.id);
                };
                return Clinic;
            }(model_base_1.ModelBase));
            exports_1("Clinic", Clinic);
        }
    }
});
//# sourceMappingURL=clinic.js.map