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
import fetch from 'node-fetch';
var BASEPATH_API = 'https://api.harvestapp.com/v2';
export default (function (_a) {
    var ACCESS_TOKEN = _a.ACCESS_TOKEN, ACCOUNT_ID = _a.ACCOUNT_ID, USER_AGENT = _a.USER_AGENT;
    return ({
        request: function (resurce, option) {
            return fetch(BASEPATH_API + "/" + resurce, __assign({}, option, { headers: {
                    'Content-Type': 'application/json',
                    'Harvest-Account-ID': ACCOUNT_ID,
                    Authorization: "Bearer " + ACCESS_TOKEN,
                    'User-Agent': USER_AGENT
                } })).then(function (res) { return res.json(); });
        }
    });
});
//# sourceMappingURL=client.js.map