import { ClientRequest } from '../../lib/interfaces';

export default ({ request }: ClientRequest) => ({
  async all() {
    return await request('roles');
  },
  async get(id) {
    return await request(`roles/${id}`);
  },
  async create(name = 'noname', user_ids = []) {
    return await request('roles', {
      method: 'POST',
      body: JSON.stringify({ name, user_ids })
    });
  },
  async update(id: string, name = 'noname', user_ids = []) {
    return await request(`roles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ name, user_ids })
    });
  },
  async delete(id) {
    return await request(`roles/${id}`, {
      method: 'DELETE'
    });
  }
});
