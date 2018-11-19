import { Client } from '../../lib/interfaces';

import { buildParamStringFromObj } from '../../lib/param';

import initTaskAssignments from './taskAssignments/index';
import initUserAssignments from './userAssignments/index';

export default (client: Client) => ({
  task_assignment: initTaskAssignments(client),
  user_assignment: initUserAssignments(client),
  async all({ is_active, client_id, updated_since, page, per_page }) {
    return client.request(
      `projects?${buildParamStringFromObj({
        is_active,
        client_id,
        updated_since,
        page,
        per_page
      })}`
    );
  },
  async get(project_id) {
    return await client.request(`projects/${project_id}`);
  },
  async create({
    client_id,
    name,
    code,
    is_active,
    is_billable,
    is_fixed_fee,
    bill_by,
    hourly_rate,
    budget,
    budget_by,
    budget_is_monthly,
    notify_when_over_budget,
    over_budget_notification_percentage,
    show_budget_to_all,
    cost_budget,
    cost_budget_include_expenses,
    fee,
    notes,
    starts_on,
    ends_on
  }) {
    return await client.request(`projects`, {
      method: 'POST',
      body: JSON.stringify({
        client_id,
        name,
        code,
        is_active,
        is_billable,
        is_fixed_fee,
        bill_by,
        hourly_rate,
        budget,
        budget_by,
        budget_is_monthly,
        notify_when_over_budget,
        over_budget_notification_percentage,
        show_budget_to_all,
        cost_budget,
        cost_budget_include_expenses,
        fee,
        notes,
        starts_on,
        ends_on
      })
    });
  },
  async update({
    project_id,
    client_id,
    name,
    code,
    is_active,
    is_billable,
    is_fixed_fee,
    bill_by,
    hourly_rate,
    budget,
    budget_by,
    budget_is_monthly,
    notify_when_over_budget,
    over_budget_notification_percentage,
    show_budget_to_all,
    cost_budget,
    cost_budget_include_expenses,
    fee,
    notes,
    starts_on,
    ends_on
  }) {
    return await client.request(`projects/${project_id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        client_id,
        name,
        code,
        is_active,
        is_billable,
        is_fixed_fee,
        bill_by,
        hourly_rate,
        budget,
        budget_by,
        budget_is_monthly,
        notify_when_over_budget,
        over_budget_notification_percentage,
        show_budget_to_all,
        cost_budget,
        cost_budget_include_expenses,
        fee,
        notes,
        starts_on,
        ends_on
      })
    });
  },
  async delete(project_id) {
    return await client.request(`projects/${project_id}`);
  }
});
