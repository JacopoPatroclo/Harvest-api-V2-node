import { buildParamStringFromObj } from '../../../lib/param';
import { Client } from '../../../lib/interfaces';

export default ({ request }: Client) => ({
  async all({ is_active, updated_since, page, per_page }) {
    return await request(
      `user_assignments?${buildParamStringFromObj({
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
  }) => {
    return await request(
      `project/${project_id}/user_assignments?${buildParamStringFromObj({
        is_active,
        updated_since,
        page,
        per_page
      })}`
    );
  },
  getPerUserAssignment: project_id => async ({ user_assignment_id }) => {
    return await request(
      `project/${project_id}/user_assignments/${user_assignment_id}`
    );
  },
  createUserAssignment: project_id => async ({
    user_id,
    is_active,
    is_project_manager,
    hourly_rate,
    budget
  }) => {
    return await request(`project/${project_id}/user_assignments`, {
      method: 'POST',
      body: JSON.stringify({
        user_id,
        is_active,
        is_project_manager,
        hourly_rate,
        budget
      })
    });
  },
  updateUserAssignment: project_id => async ({
    user_assignment_id,
    is_active,
    is_project_manager,
    hourly_rate,
    budget
  }) => {
    return await request(
      `project/${project_id}/user_assignments/${user_assignment_id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          is_active,
          is_project_manager,
          hourly_rate,
          budget
        })
      }
    );
  },
  deleteUserAssignment: project_id => async ({ user_assignment_id }) => {
    return await request(
      `project/${project_id}/user_assignments/${user_assignment_id}`,
      {
        method: 'DELETE'
      }
    );
  }
});
