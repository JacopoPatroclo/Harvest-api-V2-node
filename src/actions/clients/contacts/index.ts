import {
  ClientRequest,
  FilterContacts,
  Contact
} from '../../../lib/interfaces';
import { buildParamStringFromObj } from '../../../lib/param';

export default ({ request }: ClientRequest) => ({
  all(filters: FilterContacts): Promise<any> {
    return request(`contacts?${buildParamStringFromObj(filters)}`);
  },
  get(id: string): Promise<Contact> {
    return request(`contacts/${id}`);
  },
  create(contact: Contact): Promise<Contact> {
    return request('contacts', {
      method: 'POST',
      body: JSON.stringify(contact)
    });
  },
  update(contact: Contact): Promise<Contact> {
    return request(`contacts/${contact.id}`, {
      method: 'PATCH',
      body: JSON.stringify(contact)
    });
  },
  delete(id: string): Promise<any> {
    return request(`contacts/${id}`, {
      method: 'DELETE'
    });
  }
});
