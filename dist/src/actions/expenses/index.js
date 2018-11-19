import { buildParamStringFromObj } from '../../lib/param';
import initCategories from './categories/index';
export default (function (client) { return ({
    categories: initCategories(client),
    all: function (_a) {
        var user_id = _a.user_id, client_id = _a.client_id, project_id = _a.project_id, is_billed = _a.is_billed, updated_since = _a.updated_since, from = _a.from, to = _a.to, page = _a.page, per_page = _a.per_page;
        return client.request("expenses?" + buildParamStringFromObj({
            user_id: user_id,
            client_id: client_id,
            project_id: project_id,
            is_billed: is_billed,
            updated_since: updated_since,
            from: from,
            to: to,
            page: page,
            per_page: per_page
        }));
    },
    get: function (expense_id) {
        return client.request("expenses/" + expense_id);
    },
    create: function (_a) {
        var user_id = _a.user_id, project_id = _a.project_id, expense_category_id = _a.expense_category_id, spent_date = _a.spent_date, units = _a.units, total_cost = _a.total_cost, notes = _a.notes, billable = _a.billable, receipt = _a.receipt;
        return client.request("expenses", {
            method: 'POST',
            body: JSON.stringify({
                user_id: user_id,
                project_id: project_id,
                expense_category_id: expense_category_id,
                spent_date: spent_date,
                units: units,
                total_cost: total_cost,
                notes: notes,
                billable: billable,
                receipt: receipt
            })
        });
    },
    update: function (_a) {
        var expense_id = _a.expense_id, project_id = _a.project_id, expense_category_id = _a.expense_category_id, spent_date = _a.spent_date, units = _a.units, total_cost = _a.total_cost, notes = _a.notes, billable = _a.billable, receipt = _a.receipt, delete_receipt = _a.delete_receipt;
        return client.request("expenses/" + expense_id, {
            method: 'PATCH',
            body: JSON.stringify({
                project_id: project_id,
                expense_category_id: expense_category_id,
                spent_date: spent_date,
                units: units,
                total_cost: total_cost,
                notes: notes,
                billable: billable,
                receipt: receipt,
                delete_receipt: delete_receipt
            })
        });
    },
    delete: function (expense_id) {
        return client.request("expenses/" + expense_id, {
            method: 'DELETE'
        });
    }
}); });
//# sourceMappingURL=index.js.map