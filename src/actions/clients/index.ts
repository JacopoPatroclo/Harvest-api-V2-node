import { ClientRequest, FilterClient, Client } from '../../lib/interfaces';
import { buildParamStringFromObj } from '../../lib/param';
import initContacts from './contacts/index';

export default (client_request: ClientRequest) => ({
  constacts: initContacts(client_request),
  all(filter: FilterClient) {
    client_request.request(`clients?${buildParamStringFromObj(filter)}`);
  },
  get(id: string): Promise<Client> {
    return client_request.request(`clients/${id}`);
  },
  create(client: Client): Promise<Client> {
    return client_request.request('clients', {
      method: 'POST',
      body: JSON.stringify(client)
    });
  },
  update(client: Client): Promise<Client> {
    return client_request.request(`clients/${client.id}`, {
      method: 'PATCH',
      body: JSON.stringify(client)
    });
  },
  delete(id: string): Promise<any> {
    return client_request.request(`clients/${id}`, {
      method: 'DELETE'
    });
  }
});
