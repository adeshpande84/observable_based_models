System.register(['./model-base'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var model_base_1;
    var User;
    return {
        setters:[
            function (model_base_1_1) {
                model_base_1 = model_base_1_1;
            }],
        execute: function() {
            User = (function (_super) {
                __extends(User, _super);
                function User(name, id) {
                    _super.call(this);
                    if (id !== undefined && id != '') {
                        this.id = id;
                    }
                    this.name = name;
                }
                User.apiRoute = 'app/mock_data/users.json';
                return User;
            }(model_base_1.ModelBase));
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map