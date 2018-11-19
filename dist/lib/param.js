"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildParamStringFromObj = function (obj) {
    if (obj) {
        var paramsString = Object.keys(obj)
            .filter(function (key) { return typeof obj[key] !== 'undefined'; })
            .map(function (key) {
            return key;
        })
            .reduce(function (acc, key, index) {
            if (index === 0) {
                return key + "=" + obj[key];
            }
            return acc + "&" + key + "=" + obj[key];
        }, '');
        return paramsString ? paramsString : '';
    }
    else {
        return '';
    }
};
//# sourceMappingURL=param.js.map