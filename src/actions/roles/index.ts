import { Client } from '../../lib/interfaces';

export default ({ request }: Client) => ({
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
  async update(id, name = 'noname', user_ids = []) {
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
