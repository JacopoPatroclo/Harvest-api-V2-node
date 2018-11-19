"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var param_1 = require("../../../lib/param");
exports.default = (function (_a) {
    var request = _a.request;
    return ({
        all: function (_a) {
            var is_active = _a.is_active, updated_since = _a.updated_since, page = _a.page, per_page = _a.per_page;
            return request("expense_categories?" + param_1.buildParamStringFromObj({
                is_active: is_active,
                updated_since: updated_since,
                page: page,
                per_page: per_page
            }));
        },
        get: function (expense_category_id) {
            return request("expense_categories/" + expense_category_id);
        },
        create: function (_a) {
            var name = _a.name, unit_name = _a.unit_name, unit_price = _a.unit_price, is_active = _a.is_active;
            return request("expense_categories", {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    unit_name: unit_name,
                    unit_price: unit_price,
                    is_active: is_active
                })
            });
        },
        update: function (_a) {
            var expanse_category_id = _a.expanse_category_id, name = _a.name, unit_name = _a.unit_name, unit_price = _a.unit_price, is_active = _a.is_active;
            return request("expense_categories/" + expanse_category_id, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: name,
                    unit_name: unit_name,
                    unit_price: unit_price,
                    is_active: is_active
                })
            });
        },
        delete: function (expanse_category_id) {
            return request("expense_categories/" + expanse_category_id, {
                method: 'DELETE'
            });
        }
    });
});
//# sourceMappingURL=index.js.map