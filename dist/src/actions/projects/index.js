var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { buildParamStringFromObj } from '../../lib/param';
import initTaskAssignments from './taskAssignments/index';
import initUserAssignments from './userAssignments/index';
export default (function (client) { return ({
    task_assignment: initTaskAssignments(client),
    user_assignment: initUserAssignments(client),
    all: function (_a) {
        var is_active = _a.is_active, client_id = _a.client_id, updated_since = _a.updated_since, page = _a.page, per_page = _a.per_page;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, client.request("projects?" + buildParamStringFromObj({
                        is_active: is_active,
                        client_id: client_id,
                        updated_since: updated_since,
                        page: page,
                        per_page: per_page
                    }))];
            });
        });
    },
    get: function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.request("projects/" + project_id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    create: function (_a) {
        var client_id = _a.client_id, name = _a.name, code = _a.code, is_active = _a.is_active, is_billable = _a.is_billable, is_fixed_fee = _a.is_fixed_fee, bill_by = _a.bill_by, hourly_rate = _a.hourly_rate, budget = _a.budget, budget_by = _a.budget_by, budget_is_monthly = _a.budget_is_monthly, notify_when_over_budget = _a.notify_when_over_budget, over_budget_notification_percentage = _a.over_budget_notification_percentage, show_budget_to_all = _a.show_budget_to_all, cost_budget = _a.cost_budget, cost_budget_include_expenses = _a.cost_budget_include_expenses, fee = _a.fee, notes = _a.notes, starts_on = _a.starts_on, ends_on = _a.ends_on;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, client.request("projects", {
                            method: 'POST',
                            body: JSON.stringify({
                                client_id: client_id,
                                name: name,
                                code: code,
                                is_active: is_active,
                                is_billable: is_billable,
                                is_fixed_fee: is_fixed_fee,
                                bill_by: bill_by,
                                hourly_rate: hourly_rate,
                                budget: budget,
                                budget_by: budget_by,
                                budget_is_monthly: budget_is_monthly,
                                notify_when_over_budget: notify_when_over_budget,
                                over_budget_notification_percentage: over_budget_notification_percentage,
                                show_budget_to_all: show_budget_to_all,
                                cost_budget: cost_budget,
                                cost_budget_include_expenses: cost_budget_include_expenses,
                                fee: fee,
                                notes: notes,
                                starts_on: starts_on,
                                ends_on: ends_on
                            })
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    update: function (_a) {
        var project_id = _a.project_id, client_id = _a.client_id, name = _a.name, code = _a.code, is_active = _a.is_active, is_billable = _a.is_billable, is_fixed_fee = _a.is_fixed_fee, bill_by = _a.bill_by, hourly_rate = _a.hourly_rate, budget = _a.budget, budget_by = _a.budget_by, budget_is_monthly = _a.budget_is_monthly, notify_when_over_budget = _a.notify_when_over_budget, over_budget_notification_percentage = _a.over_budget_notification_percentage, show_budget_to_all = _a.show_budget_to_all, cost_budget = _a.cost_budget, cost_budget_include_expenses = _a.cost_budget_include_expenses, fee = _a.fee, notes = _a.notes, starts_on = _a.starts_on, ends_on = _a.ends_on;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, client.request("projects/" + project_id, {
                            method: 'PATCH',
                            body: JSON.stringify({
                                client_id: client_id,
                                name: name,
                                code: code,
                                is_active: is_active,
                                is_billable: is_billable,
                                is_fixed_fee: is_fixed_fee,
                                bill_by: bill_by,
                                hourly_rate: hourly_rate,
                                budget: budget,
                                budget_by: budget_by,
                                budget_is_monthly: budget_is_monthly,
                                notify_when_over_budget: notify_when_over_budget,
                                over_budget_notification_percentage: over_budget_notification_percentage,
                                show_budget_to_all: show_budget_to_all,
                                cost_budget: cost_budget,
                                cost_budget_include_expenses: cost_budget_include_expenses,
                                fee: fee,
                                notes: notes,
                                starts_on: starts_on,
                                ends_on: ends_on
                            })
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    delete: function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.request("projects/" + project_id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
}); });
//# sourceMappingURL=index.js.map