System.register(['./model-base', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var model_base_1, user_1;
    var Member;
    return {
        setters:[
            function (model_base_1_1) {
                model_base_1 = model_base_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            Member = (function (_super) {
                __extends(Member, _super);
                function Member(clinic_id, user_id, id) {
                    _super.call(this);
                    if (id !== undefined && id != '') {
                        this.id = id;
                    }
                    this.clinic_id = clinic_id;
                    this.user_id = user_id;
                }
                Member.prototype.user = function () {
                    return this.belongsTo(user_1.User.apiRoute, 'user_id', this.user_id);
                };
                Member.apiRoute = 'app/mock_data/members.json';
                return Member;
            }(model_base_1.ModelBase));
            exports_1("Member", Member);
        }
    }
});
//# sourceMappingURL=member.js.map