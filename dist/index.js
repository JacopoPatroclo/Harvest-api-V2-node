"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./lib/client");
var index_1 = require("./actions/user/index");
var index_2 = require("./actions/roles/index");
var index_3 = require("./actions/time_entries/index");
var index_4 = require("./actions/tasks/index");
var index_5 = require("./actions/expenses/index");
var index_6 = require("./actions/projects/index");
var index_7 = require("./Oauth2/index");
exports.default = {
    Oauth2: index_7.default,
    initApi: function (options) {
        var client = client_1.default(options);
        return {
            users: index_1.default(client),
            roles: index_2.default(client),
            time_entries: index_3.default(client),
            tasks: index_4.default(client),
            expanses: index_5.default(client),
            projects: index_6.default(client)
        };
    }
};
//# sourceMappingURL=index.js.map