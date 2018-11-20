import { buildParamStringFromObj } from '../../lib/param';
import { ClientRequest } from '../../lib/interfaces';

export default ({ request }: ClientRequest) => ({
  async all({ is_active, updated_since, page, per_page }) {
    return await request(
      `tasks?${buildParamStringFromObj({
        is_active,
        updated_since,
        page,
        per_page
      })}`
    );
  },
  async get(task_id) {
    return await request(`tasks/${task_id}`);
  },
  async create({
    name,
    billable_by_default,
    default_hourly_rate,
    is_default,
    is_active
  }) {
    return await request('tasks', {
      method: 'POST',
      body: JSON.stringify({
        name,
        billable_by_default,
        default_hourly_rate,
        is_default,
        is_active
      })
    });
  },
  async update({
    task_id,
    name,
    billable_by_default,
    default_hourly_rate,
    is_default,
    is_active
  }) {
    return await request(`tasks/${task_id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name,
        billable_by_default,
        default_hourly_rate,
        is_default,
        is_active
      })
    });
  },
  async delete(task_id) {
    return await request(`tasks/${task_id}`, {
      method: 'DELETE'
    });
  }
});
