import { buildParamStringFromObj } from '../../lib/param';
import { ClientRequest } from '../../lib/interfaces';

export default ({ request }: ClientRequest) => ({
  async all({
    user_id,
    client_id,
    project_id,
    is_billed,
    is_running,
    updated_since,
    from,
    to,
    page,
    per_page
  }) {
    const params = buildParamStringFromObj({
      user_id,
      client_id,
      project_id,
      is_billed,
      is_running,
      updated_since,
      from,
      to,
      page,
      per_page
    });
    return await request(`time_entries?${params}`);
  },
  async get(id) {
    return await request(`time_entries/${id}`);
  },
  async createHours({
    user_id,
    project_id,
    task_id,
    spent_date,
    hours,
    notes,
    external_reference
  }) {
    return await request(`time_entries`, {
      method: 'POST',
      body: JSON.stringify({
        user_id,
        project_id,
        task_id,
        spent_date,
        hours,
        notes,
        external_reference
      })
    });
  },
  async createStartStop({
    user_id,
    project_id,
    task_id,
    spent_date,
    started_time,
    ended_time,
    notes,
    external_reference
  }) {
    return await request(`time_entries`, {
      method: 'POST',
      body: JSON.stringify({
        user_id,
        project_id,
        task_id,
        spent_date,
        started_time,
        ended_time,
        notes,
        external_reference
      })
    });
  },
  async update({
    time_entry_id,
    project_id,
    task_id,
    spent_date,
    started_time,
    hours,
    ended_time,
    notes,
    external_reference
  }) {
    return await request(`time_entries/${time_entry_id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        project_id,
        task_id,
        spent_date,
        started_time,
        hours,
        ended_time,
        notes,
        external_reference
      })
    });
  },
  async deleteExternalRef(time_entry_id: string) {
    return await request(`time_entries/${time_entry_id}/external_reference`, {
      method: 'DELETE'
    });
  },
  async delete(time_entry_id: string) {
    return await request(`time_entries/${time_entry_id}`, {
      method: 'DELETE'
    });
  },
  async restart(time_entry_id: string) {
    return await request(`time_entries/${time_entry_id}/restart`, {
      method: 'PATCH'
    });
  },
  async stop(time_entry_id: string) {
    return await request(`time_entries/${time_entry_id}/stop`, {
      method: 'PATCH'
    });
  }
});
