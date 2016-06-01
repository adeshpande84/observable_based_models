System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Clinic;
    return {
        setters:[],
        execute: function() {
            Clinic = (function () {
                function Clinic(name, description, id) {
                    if (id !== undefined && id != '') {
                        this.id = id;
                    }
                    this.name = name;
                    this.description = description;
                }
                return Clinic;
            }());
            exports_1("Clinic", Clinic);
        }
    }
});
//# sourceMappingURL=clinic.js.map