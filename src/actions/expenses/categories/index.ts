import { buildParamStringFromObj } from '../../../lib/param';
import { Client } from '../../../lib/interfaces';

export default ({ request }: Client) => ({
  all({ is_active, updated_since, page, per_page }) {
    return request(
      `expense_categories?${buildParamStringFromObj({
        is_active,
        updated_since,
        page,
        per_page
      })}`
    );
  },
  get(expense_category_id) {
    return request(`expense_categories/${expense_category_id}`);
  },
  create({ name, unit_name, unit_price, is_active }) {
    return request(`expense_categories`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        unit_name,
        unit_price,
        is_active
      })
    });
  },
  update({ expanse_category_id, name, unit_name, unit_price, is_active }) {
    return request(`expense_categories/${expanse_category_id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name,
        unit_name,
        unit_price,
        is_active
      })
    });
  },
  delete(expanse_category_id) {
    return request(`expense_categories/${expanse_category_id}`, {
      method: 'DELETE'
    });
  }
});
