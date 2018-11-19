"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./express/index");
exports.default = (function (_a) {
    var CLIENT_ID = _a.CLIENT_ID, CLIENT_SECRET = _a.CLIENT_SECRET, USER_AGENT = _a.USER_AGENT;
    return (__assign({}, index_1.default(CLIENT_ID)(CLIENT_SECRET)(USER_AGENT)));
});
//# sourceMappingURL=index.js.map