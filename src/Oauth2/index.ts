import initExpressMiddleware from './express/index';
import { OptionsMiddleware } from '../lib/interfaces';

export default ({
  CLIENT_ID,
  CLIENT_SECRET,
  USER_AGENT
}: OptionsMiddleware) => ({
  ...initExpressMiddleware(CLIENT_ID)(CLIENT_SECRET)(USER_AGENT)
});
