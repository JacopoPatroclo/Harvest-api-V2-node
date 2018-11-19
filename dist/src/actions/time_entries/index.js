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
export default (function (_a) {
    var request = _a.request;
    return ({
        all: function (_a) {
            var user_id = _a.user_id, client_id = _a.client_id, project_id = _a.project_id, is_billed = _a.is_billed, is_running = _a.is_running, updated_since = _a.updated_since, from = _a.from, to = _a.to, page = _a.page, per_page = _a.per_page;
            return __awaiter(this, void 0, void 0, function () {
                var params;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            params = buildParamStringFromObj({
                                user_id: user_id,
                                client_id: client_id,
                                project_id: project_id,
                                is_billed: is_billed,
                                is_running: is_running,
                                updated_since: updated_since,
                                from: from,
                                to: to,
                                page: page,
                                per_page: per_page
                            });
                            return [4 /*yield*/, request("time_entries?" + params)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        get: function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request("time_entries/" + id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
        createHours: function (_a) {
            var user_id = _a.user_id, project_id = _a.project_id, task_id = _a.task_id, spent_date = _a.spent_date, hours = _a.hours, notes = _a.notes, external_reference = _a.external_reference;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, request("time_entries", {
                                method: 'POST',
                                body: JSON.stringify({
                                    user_id: user_id,
                                    project_id: project_id,
                                    task_id: task_id,
                                    spent_date: spent_date,
                                    hours: hours,
                                    notes: notes,
                                    external_reference: external_reference
                                })
                            })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        createStartStop: function (_a) {
            var user_id = _a.user_id, project_id = _a.project_id, task_id = _a.task_id, spent_date = _a.spent_date, started_time = _a.started_time, ended_time = _a.ended_time, notes = _a.notes, external_reference = _a.external_reference;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, request("time_entries", {
                                method: 'POST',
                                body: JSON.stringify({
                                    user_id: user_id,
                                    project_id: project_id,
                                    task_id: task_id,
                                    spent_date: spent_date,
                                    started_time: started_time,
                                    ended_time: ended_time,
                                    notes: notes,
                                    external_reference: external_reference
                                })
                            })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        update: function (_a) {
            var time_entry_id = _a.time_entry_id, project_id = _a.project_id, task_id = _a.task_id, spent_date = _a.spent_date, started_time = _a.started_time, hours = _a.hours, ended_time = _a.ended_time, notes = _a.notes, external_reference = _a.external_reference;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, request("time_entries/" + time_entry_id, {
                                method: 'PATCH',
                                body: JSON.stringify({
                                    project_id: project_id,
                                    task_id: task_id,
                                    spent_date: spent_date,
                                    started_time: started_time,
                                    hours: hours,
                                    ended_time: ended_time,
                                    notes: notes,
                                    external_reference: external_reference
                                })
                            })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        deleteExternalRef: function (time_entry_id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request("time_entries/" + time_entry_id + "/external_reference", {
                                method: 'DELETE'
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
        delete: function (time_entry_id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request("time_entries/" + time_entry_id, {
                                method: 'DELETE'
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
        restart: function (time_entry_id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request("time_entries/" + time_entry_id + "/restart", {
                                method: 'PATCH'
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
        stop: function (time_entry_id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request("time_entries/" + time_entry_id + "/stop", {
                                method: 'PATCH'
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
    });
});
//# sourceMappingURL=index.js.map