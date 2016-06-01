System.register(['./model-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var model_base_1;
    var Clinic;
    return {
        setters:[
            function (model_base_1_1) {
                model_base_1 = model_base_1_1;
            }],
        execute: function() {
            Clinic = (function (_super) {
                __extends(Clinic, _super);
                function Clinic(name, description, id) {
                    _super.call(this);
                    if (id !== undefined && id != '') {
                        this.id = id;
                    }
                    this.name = name;
                    this.description = description;
                }
                return Clinic;
            }(model_base_1.ModelBase));
            exports_1("Clinic", Clinic);
        }
    }
});
//# sourceMappingURL=clinic.js.map