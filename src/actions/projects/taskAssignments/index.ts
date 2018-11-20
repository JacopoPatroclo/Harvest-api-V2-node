import { buildParamStringFromObj } from '../../../lib/param';
import { ClientRequest } from '../../../lib/interfaces';

export default ({ request }: ClientRequest) => ({
  async all({ is_active, updated_since, page, per_page }) {
    return await request(
      `task_assignments?${buildParamStringFromObj({
        is_active,
        updated_since,
        page,
        per_page
      })}`
    );
  },
  getPerProject: project_id => async ({
    is_active,
    updated_since,
    page,
    per_page
  }) =>
    await request(
      `project/${project_id}/task_assignments?${buildParamStringFromObj({
        is_active,
        updated_since,
        page,
        per_page
      })}`
    ),
  getPerTaskAssignment: project_id => async ({ task_assignment_id }) =>
    await request(
      `project/${project_id}/task_assignments/${task_assignment_id}`
    ),
  createTaskAssignment: project_id => async ({
    task_id,
    is_active,
    billable,
    hourly_rate,
    budget
  }) => {
    return await request(`project/${project_id}/task_assignments`, {
      method: 'POST',
      body: JSON.stringify({
        task_id,
        is_active,
        billable,
        hourly_rate,
        budget
      })
    });
  },
  updateTaskAssignmen: project_id => async ({
    task_assignment_id,
    is_active,
    billable,
    hourly_rate,
    budget
  }) => {
    return await request(
      `project/${project_id}/task_assignments/${task_assignment_id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          is_active,
          billable,
          hourly_rate,
          budget
        })
      }
    );
  },
  deleteUserAssignment: project_id => async ({ task_assignment_id }) => {
    return await request(
      `project/${project_id}/task_assignments/${task_assignment_id}`,
      {
        method: 'DELETE'
      }
    );
  }
});
