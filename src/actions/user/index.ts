import { Client } from '../../lib/interfaces';

export default ({ request }: Client) => ({
  async me() {
    return await request('users/me');
  },
  async all() {
    return await request('users');
  },
  async project_assignments(idUser: string, page = 1) {
    return await request(`users/${idUser}/project_assignments?page=${page}`);
  },
  async my_project_assignments(page = 1) {
    return await request(`users/me/project_assignments?page=${page}`);
  }
});
