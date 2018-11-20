import { ClientRequest } from '../../lib/interfaces';

export default ({ request }: ClientRequest) => ({
  async mine() {
    return await request('company');
  }
});
