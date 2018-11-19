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
var basePathOauth2 = 'https://id.getharvest.com/oauth2/authorize';
var getTokenUri = 'https://id.getharvest.com/api/v2/oauth2/token';
export default (function (CLIENT_ID) { return function (CLIENT_SECRET) { return function (userAgent) { return ({
    redirectMiddleware: function (req, res, next) {
        res.redirect(basePathOauth2 + "?client_id=" + CLIENT_ID + "&response_type=code");
    },
    acceptMiddleware: function (req, res, next) {
        var _a = req.query, code = _a.code, scope = _a.scope;
        fetch(getTokenUri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': userAgent
            },
            body: JSON.stringify({
                code: code,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'authorization_code'
            })
        })
            .then(function (re) { return re.json(); })
            .then(function (result) {
            req.Oauth2Harvest = __assign({}, result, { account_id: scope.split(':')[1] });
            return next();
        })
            .catch(function (e) { return next(e); });
    }
}); }; }; });
//# sourceMappingURL=index.js.map