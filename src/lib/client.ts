import fetch from 'node-fetch';
import { Options, RequestOptions } from './interfaces';

const BASEPATH_API = 'https://api.harvestapp.com/v2';

export default ({ ACCESS_TOKEN, ACCOUNT_ID, USER_AGENT }: Options) => ({
  request: (resurce: string, option: RequestOptions) =>
    fetch(`${BASEPATH_API}/${resurce}`, {
      ...option,
      headers: {
        'Content-Type': 'application/json',
        'Harvest-Account-ID': ACCOUNT_ID,
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'User-Agent': USER_AGENT
      }
    }).then(res => res.json())
});
