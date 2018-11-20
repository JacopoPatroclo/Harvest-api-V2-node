import { buildParamStringFromObj } from '../../lib/param';
import initCategories from './categories/index';
import { ClientRequest } from '../../lib/interfaces';

export default (client: ClientRequest) => ({
  categories: initCategories(client),
  all({
    user_id,
    client_id,
    project_id,
    is_billed,
    updated_since,
    from,
    to,
    page,
    per_page
  }) {
    return client.request(
      `expenses?${buildParamStringFromObj({
        user_id,
        client_id,
        project_id,
        is_billed,
        updated_since,
        from,
        to,
        page,
        per_page
      })}`
    );
  },
  get(expense_id) {
    return client.request(`expenses/${expense_id}`);
  },
  create({
    user_id,
    project_id,
    expense_category_id,
    spent_date,
    units,
    total_cost,
    notes,
    billable,
    receipt
  }) {
    return client.request(`expenses`, {
      method: 'POST',
      body: JSON.stringify({
        user_id,
        project_id,
        expense_category_id,
        spent_date,
        units,
        total_cost,
        notes,
        billable,
        receipt
      })
    });
  },
  update({
    expense_id,
    project_id,
    expense_category_id,
    spent_date,
    units,
    total_cost,
    notes,
    billable,
    receipt,
    delete_receipt
  }) {
    return client.request(`expenses/${expense_id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        project_id,
        expense_category_id,
        spent_date,
        units,
        total_cost,
        notes,
        billable,
        receipt,
        delete_receipt
      })
    });
  },
  delete(expense_id) {
    return client.request(`expenses/${expense_id}`, {
      method: 'DELETE'
    });
  }
});
